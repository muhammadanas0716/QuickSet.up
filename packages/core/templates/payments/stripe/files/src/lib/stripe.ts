import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-12-18.acacia',
  typescript: true,
});

export const PLANS = {
  starter: {
    name: 'Starter',
    description: 'Perfect for individuals',
    price: '$9',
    priceId: process.env.STRIPE_STARTER_PRICE_ID,
    features: [
      'Up to 5 projects',
      'Basic analytics',
      'Email support',
    ],
  },
  pro: {
    name: 'Pro',
    description: 'For growing teams',
    price: '$29',
    priceId: process.env.STRIPE_PRO_PRICE_ID,
    features: [
      'Unlimited projects',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
    ],
  },
  enterprise: {
    name: 'Enterprise',
    description: 'For large organizations',
    price: 'Custom',
    priceId: process.env.STRIPE_ENTERPRISE_PRICE_ID,
    features: [
      'Everything in Pro',
      'Dedicated support',
      'SLA guarantee',
      'Custom development',
    ],
  },
} as const;
