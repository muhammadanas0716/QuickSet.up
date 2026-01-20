import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import type {
  ProjectConfig,
  GenerationResult,
  InstallerContext,
  EnvVariable,
} from '../types/index.js';
import { createTemplateEngine } from '../engine/template-engine.js';
import { createLogger } from '../utils/logger.js';
import { getInstaller } from '../installers/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TEMPLATES_DIR = path.resolve(__dirname, '../../templates');

export async function generateProject(
  config: ProjectConfig
): Promise<GenerationResult> {
  const logger = createLogger();
  const templateEngine = createTemplateEngine();

  const result: GenerationResult = {
    projectPath: config.path,
    filesCreated: [],
    dependencies: {},
    devDependencies: {},
    envVariables: [],
    instructions: [],
  };

  // Step 1: Create project directory
  await fs.ensureDir(config.path);

  // Step 2: Copy base framework template
  logger.info(`Setting up ${config.framework} project...`);
  await copyBaseTemplate(config, templateEngine, result);

  // Step 3: Create installer context
  const ctx: InstallerContext = {
    projectDir: config.path,
    projectName: config.name,
    config,
    templateEngine,
    logger,
  };

  // Step 4: Run installers in order
  const installerOrder: Array<keyof ProjectConfig> = [
    'ui',
    'theme',
    'database',
    'orm',
    'auth',
    'payments',
    'email',
    'analytics',
  ];

  for (const category of installerOrder) {
    const value = config[category];
    if (value && value !== 'none') {
      const installer = getInstaller(category as string, value as string);
      if (installer) {
        logger.info(`Installing ${installer.displayName}...`);

        if (installer.beforeInstall) {
          await installer.beforeInstall(ctx);
        }

        const installerResult = await installer.install(ctx);

        result.filesCreated.push(...installerResult.filesCreated);
        Object.assign(result.dependencies, installerResult.dependencies);
        Object.assign(result.devDependencies, installerResult.devDependencies);
        result.envVariables.push(...installerResult.envVariables);
        result.instructions.push(...installerResult.postInstallInstructions);

        if (installer.afterInstall) {
          await installer.afterInstall(ctx);
        }
      }
    }
  }

  // Step 5: Run module installers
  for (const moduleName of config.modules) {
    const installer = getInstaller('module', moduleName);
    if (installer) {
      logger.info(`Installing ${installer.displayName} module...`);

      const installerResult = await installer.install(ctx);

      result.filesCreated.push(...installerResult.filesCreated);
      Object.assign(result.dependencies, installerResult.dependencies);
      Object.assign(result.devDependencies, installerResult.devDependencies);
      result.envVariables.push(...installerResult.envVariables);
      result.instructions.push(...installerResult.postInstallInstructions);
    }
  }

  // Step 6: Update package.json with all dependencies
  await updatePackageJson(config, result);

  // Step 7: Generate .env.example file
  await generateEnvFile(config.path, result.envVariables);

  // Step 8: Generate README
  await generateReadme(config, result);

  logger.success('Project generated successfully!');

  return result;
}

async function copyBaseTemplate(
  config: ProjectConfig,
  templateEngine: ReturnType<typeof createTemplateEngine>,
  result: GenerationResult
): Promise<void> {
  const baseTemplatePath = path.join(TEMPLATES_DIR, 'base', config.framework);

  // Check if base template exists
  if (!(await fs.pathExists(baseTemplatePath))) {
    throw new Error(`Base template for ${config.framework} not found`);
  }

  // Copy all files from base template
  const files = await getAllFiles(baseTemplatePath);

  for (const file of files) {
    const relativePath = path.relative(baseTemplatePath, file);
    const destPath = path.join(config.path, relativePath);

    if (file.endsWith('.ejs')) {
      // Render EJS templates
      await templateEngine.renderFile(file, destPath, { config });
      result.filesCreated.push(destPath.replace(/\.ejs$/, ''));
    } else {
      // Copy regular files
      await templateEngine.copyFile(file, destPath);
      result.filesCreated.push(destPath);
    }
  }
}

async function getAllFiles(dir: string): Promise<string[]> {
  const files: string[] = [];

  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Skip certain directories
      if (['node_modules', '.git'].includes(entry.name)) continue;

      const subFiles = await getAllFiles(fullPath);
      files.push(...subFiles);
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

async function updatePackageJson(
  config: ProjectConfig,
  result: GenerationResult
): Promise<void> {
  const packageJsonPath = path.join(config.path, 'package.json');

  if (!(await fs.pathExists(packageJsonPath))) {
    // Create minimal package.json
    await fs.writeJSON(
      packageJsonPath,
      {
        name: config.name,
        version: '0.1.0',
        private: true,
        scripts: {
          dev: 'next dev --turbopack',
          build: 'next build',
          start: 'next start',
          lint: 'next lint',
        },
        dependencies: {},
        devDependencies: {},
      },
      { spaces: 2 }
    );
  }

  const templateEngine = createTemplateEngine();

  await templateEngine.mergePackageJson(packageJsonPath, {
    name: config.name,
    dependencies: result.dependencies,
    devDependencies: result.devDependencies,
  });
}

async function generateEnvFile(
  projectPath: string,
  envVariables: EnvVariable[]
): Promise<void> {
  if (envVariables.length === 0) return;

  const lines: string[] = [
    '# Environment Variables',
    '# Copy this file to .env.local and fill in the values',
    '',
  ];

  // Group by category (based on prefix)
  const grouped: Record<string, EnvVariable[]> = {};

  for (const env of envVariables) {
    const prefix = env.key.split('_')[0];
    if (!grouped[prefix]) {
      grouped[prefix] = [];
    }
    grouped[prefix].push(env);
  }

  for (const [, vars] of Object.entries(grouped)) {
    for (const env of vars) {
      lines.push(`# ${env.description}${env.required ? ' (required)' : ''}`);
      lines.push(`${env.key}=${env.value}`);
      lines.push('');
    }
  }

  await fs.writeFile(path.join(projectPath, '.env.example'), lines.join('\n'));
  await fs.writeFile(path.join(projectPath, '.env.local'), lines.join('\n'));
}

async function generateReadme(
  config: ProjectConfig,
  result: GenerationResult
): Promise<void> {
  const sections: string[] = [
    `# ${config.name}`,
    '',
    'Generated with [QuickSet.up](https://quicksetup.dev)',
    '',
    '## Getting Started',
    '',
    '```bash',
    '# Install dependencies',
    `${config.packageManager} install`,
    '',
    '# Set up environment variables',
    'cp .env.example .env.local',
    '# Edit .env.local with your values',
    '',
    '# Run the development server',
    `${config.packageManager} dev`,
    '```',
    '',
    'Open [http://localhost:3000](http://localhost:3000) with your browser.',
    '',
    '## Tech Stack',
    '',
  ];

  // Add tech stack
  const stack: string[] = [];

  stack.push(`- **Framework**: ${formatName(config.framework)}`);
  if (config.auth !== 'none') stack.push(`- **Auth**: ${formatName(config.auth)}`);
  if (config.database !== 'none')
    stack.push(`- **Database**: ${formatName(config.database)}`);
  if (config.orm !== 'none') stack.push(`- **ORM**: ${formatName(config.orm)}`);
  if (config.payments !== 'none')
    stack.push(`- **Payments**: ${formatName(config.payments)}`);
  if (config.email !== 'none') stack.push(`- **Email**: ${formatName(config.email)}`);
  if (config.analytics !== 'none')
    stack.push(`- **Analytics**: ${formatName(config.analytics)}`);
  stack.push(`- **UI**: ${formatName(config.ui)}`);
  stack.push(`- **Theme**: ${formatName(config.theme)}`);

  sections.push(...stack);
  sections.push('');

  if (config.modules.length > 0) {
    sections.push('## Modules');
    sections.push('');
    for (const mod of config.modules) {
      sections.push(`- ${formatName(mod)}`);
    }
    sections.push('');
  }

  if (result.instructions.length > 0) {
    sections.push('## Setup Instructions');
    sections.push('');
    for (const instruction of result.instructions) {
      sections.push(`- ${instruction}`);
    }
    sections.push('');
  }

  sections.push('## Learn More');
  sections.push('');
  sections.push('- [QuickSet.up Documentation](https://docs.quicksetup.dev)');
  sections.push('- [Next.js Documentation](https://nextjs.org/docs)');
  sections.push('');

  await fs.writeFile(path.join(config.path, 'README.md'), sections.join('\n'));
}

function formatName(name: string): string {
  return name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
