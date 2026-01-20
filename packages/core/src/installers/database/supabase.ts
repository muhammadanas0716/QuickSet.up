import { createInstaller, copyTemplateFiles, emptyResult } from '../base-installer.js';

export const supabaseInstaller = createInstaller(
  {
    name: 'supabase',
    displayName: 'Supabase',
    category: 'database',
  },
  async (ctx) => {
    const result = emptyResult();

    const filesCreated = await copyTemplateFiles(ctx, 'database', 'supabase');
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
      {
        key: 'SUPABASE_SERVICE_ROLE_KEY',
        value: '',
        description: 'Supabase service role key (for server-side only)',
        required: false,
      },
    ];

    result.postInstallInstructions = [
      'Create a Supabase project at https://supabase.com',
      'Copy your project URL and keys to .env.local',
    ];

    return result;
  }
);
