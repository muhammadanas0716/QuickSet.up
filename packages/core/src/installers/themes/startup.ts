import { createInstaller, copyTemplateFiles, emptyResult } from '../base-installer.js';

export const startupThemeInstaller = createInstaller(
  {
    name: 'startup',
    displayName: 'Startup Theme',
    category: 'theme',
  },
  async (ctx) => {
    const result = emptyResult();

    const filesCreated = await copyTemplateFiles(ctx, 'themes', 'startup');
    result.filesCreated = filesCreated;

    return result;
  }
);
