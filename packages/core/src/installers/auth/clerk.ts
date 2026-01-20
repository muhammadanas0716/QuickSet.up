import { createInstaller, copyTemplateFiles, emptyResult } from '../base-installer.js';

export const clerkInstaller = createInstaller(
  {
    name: 'clerk',
    displayName: 'Clerk',
    category: 'auth',
  },
  async (ctx) => {
    const result = emptyResult();

    // Copy template files
    const filesCreated = await copyTemplateFiles(ctx, 'auth', 'clerk');
    result.filesCreated = filesCreated;

    // Add dependencies
    result.dependencies = {
      '@clerk/nextjs': '^6.9.6',
    };

    // Add environment variables
    result.envVariables = [
      {
        key: 'NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY',
        value: '',
        description: 'Clerk publishable key (from Clerk dashboard)',
        required: true,
      },
      {
        key: 'CLERK_SECRET_KEY',
        value: '',
        description: 'Clerk secret key (from Clerk dashboard)',
        required: true,
      },
      {
        key: 'NEXT_PUBLIC_CLERK_SIGN_IN_URL',
        value: '/sign-in',
        description: 'Sign in URL',
        required: false,
      },
      {
        key: 'NEXT_PUBLIC_CLERK_SIGN_UP_URL',
        value: '/sign-up',
        description: 'Sign up URL',
        required: false,
      },
    ];

    // Add post-install instructions
    result.postInstallInstructions = [
      'Create a Clerk account at https://clerk.com',
      'Create a new application in Clerk dashboard',
      'Copy your API keys to .env.local',
    ];

    return result;
  }
);
