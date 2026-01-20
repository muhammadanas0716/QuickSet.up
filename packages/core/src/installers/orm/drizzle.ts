import { createInstaller, copyTemplateFiles, emptyResult } from '../base-installer.js';

export const drizzleInstaller = createInstaller(
  {
    name: 'drizzle',
    displayName: 'Drizzle ORM',
    category: 'orm',
    isCompatibleWith: (config) => config.database !== 'convex',
  },
  async (ctx) => {
    const result = emptyResult();

    const filesCreated = await copyTemplateFiles(ctx, 'orm', 'drizzle');
    result.filesCreated = filesCreated;

    // Base Drizzle dependencies
    result.dependencies = {
      'drizzle-orm': '^0.38.3',
    };

    result.devDependencies = {
      'drizzle-kit': '^0.30.1',
    };

    // Add database-specific dependencies
    switch (ctx.config.database) {
      case 'neon':
        result.dependencies['@neondatabase/serverless'] = '^0.10.4';
        result.dependencies['drizzle-orm'] = '^0.38.3';
        break;
      case 'supabase':
      case 'planetscale':
        result.dependencies['postgres'] = '^3.4.5';
        break;
      case 'turso':
        result.dependencies['@libsql/client'] = '^0.14.0';
        break;
      case 'mongodb':
        // Drizzle doesn't support MongoDB yet
        break;
    }

    result.postInstallInstructions = [
      'Run `pnpm db:generate` to generate migrations',
      'Run `pnpm db:push` to push schema to database',
    ];

    return result;
  }
);
