import { createInstaller, copyTemplateFiles, emptyResult } from '../base-installer.js';

export const neonInstaller = createInstaller(
  {
    name: 'neon',
    displayName: 'Neon',
    category: 'database',
  },
  async (ctx) => {
    const result = emptyResult();

    const filesCreated = await copyTemplateFiles(ctx, 'database', 'neon');
    result.filesCreated = filesCreated;

    result.dependencies = {
      '@neondatabase/serverless': '^0.10.4',
    };

    result.envVariables = [
      {
        key: 'DATABASE_URL',
        value: '',
        description: 'Neon database connection string',
        required: true,
      },
    ];

    result.postInstallInstructions = [
      'Create a Neon project at https://neon.tech',
      'Copy your connection string to .env.local',
    ];

    return result;
  }
);
