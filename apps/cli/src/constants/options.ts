export interface Option {
  id: string;
  name: string;
  description: string;
  hint?: string;
}

export const FRAMEWORKS: Option[] = [
  {
    id: 'nextjs',
    name: 'Next.js 15',
    description: 'React framework with App Router',
  },
  // Future frameworks (Phase 4)
  // { id: 'nuxt', name: 'Nuxt 4', description: 'Vue framework' },
  // { id: 'sveltekit', name: 'SvelteKit', description: 'Svelte framework' },
  // { id: 'tanstack-start', name: 'TanStack Start', description: 'Framework agnostic' },
];

export const AUTH_PROVIDERS: Option[] = [
  {
    id: 'clerk',
    name: 'Clerk',
    description: 'Best DX, fast setup',
  },
  {
    id: 'supabase-auth',
    name: 'Supabase Auth',
    description: 'When using Supabase DB',
  },
  {
    id: 'authjs',
    name: 'Auth.js',
    description: 'Self-hosted, flexible',
  },
  {
    id: 'better-auth',
    name: 'Better Auth',
    description: 'Modern, TypeScript-first',
  },
  {
    id: 'lucia',
    name: 'Lucia',
    description: 'Lightweight, educational',
  },
  {
    id: 'workos',
    name: 'WorkOS AuthKit',
    description: 'Enterprise, SSO',
  },
  {
    id: 'kinde',
    name: 'Kinde',
    description: 'Growing alternative',
  },
];

export const DATABASES: Option[] = [
  {
    id: 'supabase',
    name: 'Supabase',
    description: 'PostgreSQL, realtime',
  },
  {
    id: 'neon',
    name: 'Neon',
    description: 'Serverless Postgres',
  },
  {
    id: 'planetscale',
    name: 'PlanetScale',
    description: 'MySQL, branching',
  },
  {
    id: 'turso',
    name: 'Turso',
    description: 'SQLite at the edge',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    description: 'NoSQL, flexible schema',
  },
  {
    id: 'convex',
    name: 'Convex',
    description: 'Realtime, no ORM needed',
  },
];

export const ORMS: Option[] = [
  {
    id: 'drizzle',
    name: 'Drizzle',
    description: 'TypeScript-first, lightweight',
  },
  {
    id: 'prisma',
    name: 'Prisma',
    description: 'Full-featured, great DX',
  },
];

export const PAYMENT_PROVIDERS: Option[] = [
  {
    id: 'stripe',
    name: 'Stripe',
    description: 'Most flexible',
  },
  {
    id: 'polar',
    name: 'Polar',
    description: 'Dev tools, open source',
  },
  {
    id: 'paddle',
    name: 'Paddle',
    description: 'Global, B2B',
  },
  {
    id: 'lemonsqueezy',
    name: 'LemonSqueezy',
    description: 'Simple, indie-friendly',
  },
  {
    id: 'dodo',
    name: 'Dodo Payments',
    description: 'Newer alternative',
  },
];

export const EMAIL_PROVIDERS: Option[] = [
  {
    id: 'resend',
    name: 'Resend',
    description: 'Modern DX, React Email',
  },
  {
    id: 'postmark',
    name: 'Postmark',
    description: 'Best deliverability',
  },
  {
    id: 'sendgrid',
    name: 'SendGrid',
    description: 'Scale, templates',
  },
  {
    id: 'mailgun',
    name: 'Mailgun',
    description: 'Transactional',
  },
];

export const ANALYTICS_OPTIONS: Option[] = [
  {
    id: 'posthog',
    name: 'PostHog',
    description: 'Product analytics, feature flags',
  },
  {
    id: 'plausible',
    name: 'Plausible',
    description: 'Privacy-focused',
  },
  {
    id: 'mixpanel',
    name: 'Mixpanel',
    description: 'Event tracking',
  },
  {
    id: 'vercel-analytics',
    name: 'Vercel Analytics',
    description: 'Simple, integrated',
  },
];

export const UI_LIBRARIES: Option[] = [
  {
    id: 'shadcn',
    name: 'shadcn/ui',
    description: 'Copy-paste, Tailwind',
  },
  {
    id: 'radix',
    name: 'Radix UI',
    description: 'Headless primitives',
  },
  {
    id: 'headless-ui',
    name: 'Headless UI',
    description: 'Tailwind Labs',
  },
  {
    id: 'mantine',
    name: 'Mantine',
    description: 'Full-featured',
  },
];

export const THEMES: Option[] = [
  {
    id: 'default',
    name: 'Default',
    description: 'Clean blue, professional',
  },
  {
    id: 'startup',
    name: 'Startup',
    description: 'Bold gradients, energetic',
  },
  {
    id: 'saas',
    name: 'SaaS',
    description: 'Indigo, trustworthy',
  },
  {
    id: 'agency',
    name: 'Agency',
    description: 'Creative, colorful',
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Typography-focused',
  },
];

export const MODULES: Option[] = [
  {
    id: 'seo',
    name: 'SEO',
    description: 'Meta tags, sitemap, robots.txt',
  },
  {
    id: 'landing-pages',
    name: 'Landing Pages',
    description: 'Hero, features, pricing sections',
  },
  {
    id: 'legal-pages',
    name: 'Legal Pages',
    description: 'Privacy, terms, cookies',
  },
  {
    id: 'waitlist',
    name: 'Waitlist',
    description: 'Email collection for pre-launch',
  },
  {
    id: 'admin-dashboard',
    name: 'Admin Dashboard',
    description: 'User management, analytics',
  },
  {
    id: 'blog',
    name: 'Blog',
    description: 'MDX-powered blog',
  },
  {
    id: 'i18n',
    name: 'i18n',
    description: 'Internationalization',
  },
  {
    id: 'file-uploads',
    name: 'File Uploads',
    description: 'S3, Uploadthing integration',
  },
  {
    id: 'ai-integration',
    name: 'AI Integration',
    description: 'Vercel AI SDK, OpenAI',
  },
  {
    id: 'background-jobs',
    name: 'Background Jobs',
    description: 'Inngest, Trigger.dev',
  },
  {
    id: 'error-tracking',
    name: 'Error Tracking',
    description: 'Sentry integration',
  },
];

export const PACKAGE_MANAGERS: Array<Option & { hint: string }> = [
  {
    id: 'pnpm',
    name: 'pnpm',
    description: 'Fast, disk efficient',
    hint: 'Recommended',
  },
  {
    id: 'npm',
    name: 'npm',
    description: 'Default Node.js package manager',
    hint: '',
  },
  {
    id: 'yarn',
    name: 'yarn',
    description: 'Yarn classic',
    hint: '',
  },
  {
    id: 'bun',
    name: 'bun',
    description: 'Fast JavaScript runtime',
    hint: '',
  },
];
