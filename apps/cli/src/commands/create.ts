import * as p from '@clack/prompts';
import pc from 'picocolors';
import path from 'path';
import fs from 'fs-extra';
import { generateProject, type ProjectConfig } from '@quicksetup/core';
import {
  FRAMEWORKS,
  AUTH_PROVIDERS,
  DATABASES,
  ORMS,
  PAYMENT_PROVIDERS,
  EMAIL_PROVIDERS,
  ANALYTICS_OPTIONS,
  UI_LIBRARIES,
  THEMES,
  MODULES,
  PACKAGE_MANAGERS,
} from '../constants/options.js';
import { validateProjectName, needsOrm } from '../utils/validators.js';

interface CLIOptions {
  skipInstall?: boolean;
  git?: boolean;
  yes?: boolean;
}

export async function createProject(
  projectNameArg?: string,
  options: CLIOptions = {}
): Promise<void> {
  console.clear();

  p.intro(pc.bgCyan(pc.black(' QuickSet.up ')));

  p.log.info(pc.dim('Ship your startup in days, not weeks'));
  console.log();

  // Quick mode: use defaults if --yes flag is passed
  if (options.yes) {
    const projectName = projectNameArg || 'my-app';
    const projectPath = path.resolve(process.cwd(), projectName);

    p.log.info(`Creating ${pc.cyan(projectName)} with defaults...`);

    const projectConfig: ProjectConfig = {
      name: projectName,
      path: projectPath,
      framework: 'nextjs',
      auth: 'none',
      database: 'none',
      orm: 'none',
      payments: 'none',
      email: 'none',
      analytics: 'none',
      ui: 'shadcn',
      theme: 'default',
      modules: [],
      packageManager: 'pnpm',
      git: options.git ?? true,
    };

    await fs.ensureDir(projectPath);
    await generateProject(projectConfig);

    p.log.success('Project generated!');

    p.note(
      [
        `cd ${projectName}`,
        'pnpm install',
        'pnpm dev',
      ].join('\n'),
      'Next steps'
    );

    p.outro(pc.green('Happy building!'));
    return;
  }

  // Step 2: Project Configuration (interactive)
  const config = await p.group(
    {
      projectName: () =>
        p.text({
          message: 'Project name',
          initialValue: projectNameArg || 'my-app',
          validate: (value) => {
            const result = validateProjectName(value);
            if (!result.valid) return result.message;
          },
        }),

      framework: () =>
        p.select({
          message: 'Framework',
          options: FRAMEWORKS.map((f) => ({
            value: f.id,
            label: f.name,
            hint: f.description,
          })),
        }),

      auth: () =>
        p.select({
          message: 'Authentication',
          options: [
            { value: 'none', label: 'None', hint: 'Add later' },
            ...AUTH_PROVIDERS.map((a) => ({
              value: a.id,
              label: a.name,
              hint: a.description,
            })),
          ],
        }),

      database: () =>
        p.select({
          message: 'Database',
          options: [
            { value: 'none', label: 'None', hint: 'Add later' },
            ...DATABASES.map((d) => ({
              value: d.id,
              label: d.name,
              hint: d.description,
            })),
          ],
        }),

      orm: ({ results }) => {
        if (!needsOrm(results.database as string)) {
          return Promise.resolve('none');
        }
        return p.select({
          message: 'ORM',
          options: ORMS.map((o) => ({
            value: o.id,
            label: o.name,
            hint: o.description,
          })),
        });
      },

      payments: () =>
        p.select({
          message: 'Payments',
          options: [
            { value: 'none', label: 'None', hint: 'Add later' },
            ...PAYMENT_PROVIDERS.map((p) => ({
              value: p.id,
              label: p.name,
              hint: p.description,
            })),
          ],
        }),

      email: () =>
        p.select({
          message: 'Email',
          options: [
            { value: 'none', label: 'None', hint: 'Add later' },
            ...EMAIL_PROVIDERS.map((e) => ({
              value: e.id,
              label: e.name,
              hint: e.description,
            })),
          ],
        }),

      analytics: () =>
        p.select({
          message: 'Analytics',
          options: [
            { value: 'none', label: 'None', hint: 'Add later' },
            ...ANALYTICS_OPTIONS.map((a) => ({
              value: a.id,
              label: a.name,
              hint: a.description,
            })),
          ],
        }),

      ui: () =>
        p.select({
          message: 'UI Components',
          options: UI_LIBRARIES.map((u) => ({
            value: u.id,
            label: u.name,
            hint: u.description,
          })),
        }),

      theme: () =>
        p.select({
          message: 'Theme',
          options: THEMES.map((t) => ({
            value: t.id,
            label: t.name,
            hint: t.description,
          })),
        }),

      modules: () =>
        p.multiselect({
          message: 'Additional modules',
          options: MODULES.map((m) => ({
            value: m.id,
            label: m.name,
            hint: m.description,
          })),
          required: false,
        }),

      packageManager: () =>
        p.select({
          message: 'Package manager',
          options: PACKAGE_MANAGERS.map((pm) => ({
            value: pm.id,
            label: pm.name,
            hint: pm.hint,
          })),
        }),
    },
    {
      onCancel: () => {
        p.cancel('Operation cancelled');
        process.exit(0);
      },
    }
  );

  console.log();

  // Step 3: Confirm
  const projectPath = path.resolve(process.cwd(), config.projectName as string);

  if (fs.existsSync(projectPath)) {
    const overwrite = await p.confirm({
      message: `Directory ${pc.cyan(config.projectName)} already exists. Overwrite?`,
      initialValue: false,
    });

    if (!overwrite || p.isCancel(overwrite)) {
      p.cancel('Operation cancelled');
      process.exit(0);
    }
  }

  // Step 4: Generate
  const genSpinner = p.spinner();
  genSpinner.start('Generating project...');

  try {
    const projectConfig: ProjectConfig = {
      name: config.projectName as string,
      path: projectPath,
      framework: config.framework as string,
      auth: config.auth as string,
      database: config.database as string,
      orm: config.orm as string,
      payments: config.payments as string,
      email: config.email as string,
      analytics: config.analytics as string,
      ui: config.ui as string,
      theme: config.theme as string,
      modules: (config.modules as string[]) || [],
      packageManager: config.packageManager as string,
      git: options.git ?? true,
    };

    await generateProject(projectConfig);

    genSpinner.stop('Project generated!');
  } catch (error) {
    genSpinner.stop('Generation failed');
    p.log.error(error instanceof Error ? error.message : 'Unknown error');
    process.exit(1);
  }

  // Step 5: Install dependencies
  if (!options.skipInstall) {
    const installSpinner = p.spinner();
    installSpinner.start('Installing dependencies...');

    try {
      const { installDependencies } = await import('../utils/install.js');
      await installDependencies(projectPath, config.packageManager as string);
      installSpinner.stop('Dependencies installed!');
    } catch (error) {
      installSpinner.stop('Installation failed');
      p.log.warn('Run install manually: ' + pc.cyan(`cd ${config.projectName} && ${config.packageManager} install`));
    }
  }

  // Step 6: Initialize git
  if (options.git) {
    try {
      const { initGit } = await import('../utils/git.js');
      await initGit(projectPath);
    } catch {
      // Git init is optional, don't fail
    }
  }

  // Step 7: Show next steps
  console.log();
  p.note(
    [
      `cd ${config.projectName}`,
      'cp .env.example .env.local',
      `${config.packageManager} dev`,
    ].join('\n'),
    'Next steps'
  );

  p.outro(pc.green('Happy building!') + ' ' + pc.dim('- QuickSet.up'));
}
