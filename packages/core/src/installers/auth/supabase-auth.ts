import { createInstaller, copyTemplateFiles, emptyResult } from '../base-installer.js';

export const supabaseAuthInstaller = createInstaller(
  {
    name: 'supabase-auth',
    displayName: 'Supabase Auth',
    category: 'auth',
    isCompatibleWith: (config) => config.database === 'supabase',
  },
  async (ctx) => {
    const result = emptyResult();

    const filesCreated = await copyTemplateFiles(ctx, 'auth', 'supabase-auth');
    result.filesCreated = filesCreated;

    result.dependencies = {
      '@supabase/supabase-js': '^2.47.10',
      '@supabase/ssr': '^0.5.2',
    };

    result.envVariables = [
      {
        key: 'NEXT_PUBLIC_SUPABASE_URL',
        value: '',
        description: 'Supabase project URL',
        required: true,
      },
      {
        key: 'NEXT_PUBLIC_SUPABASE_ANON_KEY',
        value: '',
        description: 'Supabase anonymous key',
        required: true,
      },
    ];

    result.postInstallInstructions = [
      'Create a Supabase project at https://supabase.com',
      'Copy your project URL and anon key to .env.local',
      'Enable authentication providers in Supabase dashboard',
    ];

    return result;
  }
);
