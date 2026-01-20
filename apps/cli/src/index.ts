import { Command } from 'commander';
import pc from 'picocolors';
import { createProject } from './commands/create.js';
import { validateLicense } from './commands/validate.js';
import { getVersion } from './utils/version.js';

const program = new Command();

program
  .name('create-quicksetup')
  .description(
    pc.cyan('QuickSet.up') + ' - Ship your startup in days, not weeks'
  )
  .version(getVersion());

// Main create command (default)
program
  .argument('[project-name]', 'Name of the project')
  .option('-l, --license <key>', 'License key (or set QUICKSETUP_LICENSE env)')
  .option('--skip-install', 'Skip dependency installation')
  .option('--git', 'Initialize git repository', true)
  .option('--no-git', 'Skip git initialization')
  .option('-y, --yes', 'Accept all defaults')
  .action(async (projectName?: string, options?: Record<string, unknown>) => {
    await createProject(projectName, options);
  });

// Validate license command
program
  .command('validate')
  .description('Validate your license key')
  .option('-l, --license <key>', 'License key to validate')
  .action(async (options: { license?: string }) => {
    await validateLicense(options.license);
  });

// Add command (add modules to existing project)
program
  .command('add <module>')
  .description('Add a module to an existing QuickSet.up project')
  .action(async (module: string) => {
    console.log(pc.yellow(`Adding module: ${module} (coming soon)`));
  });

program.parse();
