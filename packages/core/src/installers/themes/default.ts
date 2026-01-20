import { createInstaller, copyTemplateFiles, emptyResult } from '../base-installer.js';

export const defaultThemeInstaller = createInstaller(
  {
    name: 'default',
    displayName: 'Default Theme',
    category: 'theme',
  },
  async (ctx) => {
    const result = emptyResult();

    const filesCreated = await copyTemplateFiles(ctx, 'themes', 'default');
    result.filesCreated = filesCreated;

    return result;
  }
);
