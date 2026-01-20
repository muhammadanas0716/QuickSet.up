import { createInstaller, copyTemplateFiles, emptyResult } from '../base-installer.js';

export const stripeInstaller = createInstaller(
  {
    name: 'stripe',
    displayName: 'Stripe',
    category: 'payments',
  },
  async (ctx) => {
    const result = emptyResult();

    const filesCreated = await copyTemplateFiles(ctx, 'payments', 'stripe');
    result.filesCreated = filesCreated;

    result.dependencies = {
      stripe: '^17.4.0',
      '@stripe/stripe-js': '^5.3.0',
    };

    result.envVariables = [
      {
        key: 'STRIPE_SECRET_KEY',
        value: '',
        description: 'Stripe secret key',
        required: true,
      },
      {
        key: 'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY',
        value: '',
        description: 'Stripe publishable key',
        required: true,
      },
      {
        key: 'STRIPE_WEBHOOK_SECRET',
        value: '',
        description: 'Stripe webhook signing secret',
        required: true,
      },
      {
        key: 'STRIPE_PRICE_ID',
        value: '',
        description: 'Stripe price ID for your product',
        required: false,
      },
    ];

    result.postInstallInstructions = [
      'Create a Stripe account at https://stripe.com',
      'Copy your API keys from Stripe dashboard to .env.local',
      'Create products and prices in Stripe dashboard',
      'Set up webhook endpoint: /api/webhooks/stripe',
    ];

    return result;
  }
);
