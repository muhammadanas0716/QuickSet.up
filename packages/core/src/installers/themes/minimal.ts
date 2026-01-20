import { createInstaller, copyTemplateFiles, emptyResult } from '../base-installer.js';

export const minimalThemeInstaller = createInstaller(
  {
    name: 'minimal',
    displayName: 'Minimal Theme',
    category: 'theme',
  },
  async (ctx) => {
    const result = emptyResult();

    const filesCreated = await copyTemplateFiles(ctx, 'themes', 'minimal');
    result.filesCreated = filesCreated;

    return result;
  }
);
