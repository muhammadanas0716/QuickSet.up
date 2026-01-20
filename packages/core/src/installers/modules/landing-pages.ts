import { createInstaller, copyTemplateFiles, emptyResult } from '../base-installer.js';

export const landingPagesInstaller = createInstaller(
  {
    name: 'landing-pages',
    displayName: 'Landing Pages',
    category: 'module',
  },
  async (ctx) => {
    const result = emptyResult();

    const filesCreated = await copyTemplateFiles(ctx, 'modules', 'landing-pages');
    result.filesCreated = filesCreated;

    result.dependencies = {
      'framer-motion': '^11.15.0',
    };

    result.postInstallInstructions = [
      'Customize the hero section in src/components/landing/hero.tsx',
      'Update pricing plans in src/components/landing/pricing.tsx',
      'Add your testimonials in src/components/landing/testimonials.tsx',
    ];

    return result;
  }
);
