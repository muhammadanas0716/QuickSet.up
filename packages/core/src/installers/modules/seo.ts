import { createInstaller, copyTemplateFiles, emptyResult } from '../base-installer.js';

export const seoInstaller = createInstaller(
  {
    name: 'seo',
    displayName: 'SEO',
    category: 'module',
  },
  async (ctx) => {
    const result = emptyResult();

    const filesCreated = await copyTemplateFiles(ctx, 'modules', 'seo');
    result.filesCreated = filesCreated;

    result.envVariables = [
      {
        key: 'NEXT_PUBLIC_SITE_URL',
        value: 'http://localhost:3000',
        description: 'Site URL for SEO meta tags',
        required: true,
      },
      {
        key: 'NEXT_PUBLIC_SITE_NAME',
        value: ctx.projectName,
        description: 'Site name for SEO',
        required: false,
      },
    ];

    result.postInstallInstructions = [
      'Update site metadata in src/app/layout.tsx',
      'Add your sitemap in public/sitemap.xml',
      'Configure robots.txt for your domain',
    ];

    return result;
  }
);
