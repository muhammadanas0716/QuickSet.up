import { createInstaller, copyTemplateFiles, emptyResult } from '../base-installer.js';

export const waitlistInstaller = createInstaller(
  {
    name: 'waitlist',
    displayName: 'Waitlist',
    category: 'module',
  },
  async (ctx) => {
    const result = emptyResult();

    const filesCreated = await copyTemplateFiles(ctx, 'modules', 'waitlist');
    result.filesCreated = filesCreated;

    // Add react-hook-form for form handling
    result.dependencies = {
      'react-hook-form': '^7.54.2',
      '@hookform/resolvers': '^3.9.1',
      zod: '^3.24.1',
    };

    result.envVariables = [
      {
        key: 'NEXT_PUBLIC_WAITLIST_ENABLED',
        value: 'true',
        description: 'Enable/disable waitlist mode',
        required: false,
      },
    ];

    result.postInstallInstructions = [
      'Customize the waitlist page at /waitlist',
      'Configure email notifications when new users sign up',
      'Set NEXT_PUBLIC_WAITLIST_ENABLED=false when ready to launch',
    ];

    return result;
  }
);
