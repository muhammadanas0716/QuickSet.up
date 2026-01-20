import * as p from '@clack/prompts';
import pc from 'picocolors';
import path from 'path';
import fs from 'fs-extra';
import { validateLicenseKey, getCachedLicense, isDevelopmentMode } from '@quicksetup/license';
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
  license?: string;
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

  // Step 1: License Validation (skip in dev mode)
  if (isDevelopmentMode()) {
    p.log.warn('Development mode - skipping license validation');
  } else {
    const licenseKey = await getLicenseKey(options.license);

    if (!licenseKey) {
      p.cancel('License key is required. Purchase at https://quicksetup.dev');
      process.exit(1);
    }

    const spinner = p.spinner();
    spinner.start('Validating license...');

    try {
      const licenseResult = await validateLicenseKey(licenseKey);

      if (!licenseResult.valid) {
        spinner.stop('License validation failed');
        p.log.error(licenseResult.error || 'Invalid license key');
        p.note('Purchase a license at https://quicksetup.dev', 'Get a license');
        process.exit(1);
      }

      spinner.stop('License validated');
      p.log.success(`Licensed to ${pc.cyan(licenseResult.email)} (${licenseResult.tier} plan)`);
    } catch (error) {
      spinner.stop('License validation failed');
      p.log.error(error instanceof Error ? error.message : 'Unknown error');
      process.exit(1);
    }
  }

  console.log();

  // Step 2: Project Configuration
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

async function getLicenseKey(providedKey?: string): Promise<string | null> {
  // Check provided key
  if (providedKey) return providedKey;

  // Check environment variable
  if (process.env.QUICKSETUP_LICENSE) return process.env.QUICKSETUP_LICENSE;

  // Check cached license
  const cached = await getCachedLicense();
  if (cached) {
    const useCache = await p.confirm({
      message: `Use cached license for ${pc.cyan(cached.email)}?`,
      initialValue: true,
    });

    if (useCache && !p.isCancel(useCache)) {
      return cached.key;
    }
  }

  // Prompt for license key
  const key = await p.text({
    message: 'License key',
    placeholder: 'XXXX-XXXX-XXXX-XXXX',
    validate: (value) => {
      if (!value || value.trim().length === 0) {
        return 'License key is required';
      }
    },
  });

  if (p.isCancel(key)) return null;

  return key as string;
}
