import { createInstaller, copyTemplateFiles, emptyResult } from '../base-installer.js';

export const resendInstaller = createInstaller(
  {
    name: 'resend',
    displayName: 'Resend',
    category: 'email',
  },
  async (ctx) => {
    const result = emptyResult();

    const filesCreated = await copyTemplateFiles(ctx, 'email', 'resend');
    result.filesCreated = filesCreated;

    result.dependencies = {
      resend: '^4.0.1',
      '@react-email/components': '^0.0.31',
    };

    result.devDependencies = {
      'react-email': '^3.0.4',
    };

    result.envVariables = [
      {
        key: 'RESEND_API_KEY',
        value: '',
        description: 'Resend API key',
        required: true,
      },
      {
        key: 'EMAIL_FROM',
        value: 'onboarding@resend.dev',
        description: 'Default from email address',
        required: false,
      },
    ];

    result.postInstallInstructions = [
      'Create a Resend account at https://resend.com',
      'Verify your domain in Resend dashboard',
      'Copy your API key to .env.local',
    ];

    return result;
  }
);
