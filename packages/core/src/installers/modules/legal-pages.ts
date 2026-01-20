import { createInstaller, copyTemplateFiles, emptyResult } from '../base-installer.js';

export const legalPagesInstaller = createInstaller(
  {
    name: 'legal-pages',
    displayName: 'Legal Pages',
    category: 'module',
  },
  async (ctx) => {
    const result = emptyResult();

    const filesCreated = await copyTemplateFiles(ctx, 'modules', 'legal-pages');
    result.filesCreated = filesCreated;

    result.envVariables = [
      {
        key: 'NEXT_PUBLIC_COMPANY_NAME',
        value: ctx.projectName,
        description: 'Company name for legal pages',
        required: false,
      },
      {
        key: 'NEXT_PUBLIC_SUPPORT_EMAIL',
        value: 'support@example.com',
        description: 'Support email for legal pages',
        required: false,
      },
    ];

    result.postInstallInstructions = [
      'Review and customize the privacy policy at /privacy',
      'Review and customize the terms of service at /terms',
      'Update company information in the legal pages',
    ];

    return result;
  }
);
