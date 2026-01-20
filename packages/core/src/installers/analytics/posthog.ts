import { createInstaller, copyTemplateFiles, emptyResult } from '../base-installer.js';

export const posthogInstaller = createInstaller(
  {
    name: 'posthog',
    displayName: 'PostHog',
    category: 'analytics',
  },
  async (ctx) => {
    const result = emptyResult();

    const filesCreated = await copyTemplateFiles(ctx, 'analytics', 'posthog');
    result.filesCreated = filesCreated;

    result.dependencies = {
      'posthog-js': '^1.194.4',
      'posthog-node': '^4.3.1',
    };

    result.envVariables = [
      {
        key: 'NEXT_PUBLIC_POSTHOG_KEY',
        value: '',
        description: 'PostHog API key',
        required: true,
      },
      {
        key: 'NEXT_PUBLIC_POSTHOG_HOST',
        value: 'https://us.i.posthog.com',
        description: 'PostHog host URL',
        required: false,
      },
    ];

    result.postInstallInstructions = [
      'Create a PostHog account at https://posthog.com',
      'Copy your project API key to .env.local',
    ];

    return result;
  }
);
