import type { Installer } from '../types/index.js';

// Auth installers
import { clerkInstaller } from './auth/clerk.js';
import { supabaseAuthInstaller } from './auth/supabase-auth.js';

// Database installers
import { supabaseInstaller } from './database/supabase.js';
import { neonInstaller } from './database/neon.js';

// ORM installers
import { drizzleInstaller } from './orm/drizzle.js';

// Payment installers
import { stripeInstaller } from './payments/stripe.js';

// Email installers
import { resendInstaller } from './email/resend.js';

// Analytics installers
import { posthogInstaller } from './analytics/posthog.js';

// UI installers
import { shadcnInstaller } from './ui/shadcn.js';

// Theme installers
import { defaultThemeInstaller } from './themes/default.js';
import { startupThemeInstaller } from './themes/startup.js';
import { minimalThemeInstaller } from './themes/minimal.js';

// Module installers
import { seoInstaller } from './modules/seo.js';
import { landingPagesInstaller } from './modules/landing-pages.js';
import { legalPagesInstaller } from './modules/legal-pages.js';
import { waitlistInstaller } from './modules/waitlist.js';

const installers: Record<string, Record<string, Installer>> = {
  auth: {
    clerk: clerkInstaller,
    'supabase-auth': supabaseAuthInstaller,
  },
  database: {
    supabase: supabaseInstaller,
    neon: neonInstaller,
  },
  orm: {
    drizzle: drizzleInstaller,
  },
  payments: {
    stripe: stripeInstaller,
  },
  email: {
    resend: resendInstaller,
  },
  analytics: {
    posthog: posthogInstaller,
  },
  ui: {
    shadcn: shadcnInstaller,
  },
  theme: {
    default: defaultThemeInstaller,
    startup: startupThemeInstaller,
    minimal: minimalThemeInstaller,
  },
  module: {
    seo: seoInstaller,
    'landing-pages': landingPagesInstaller,
    'legal-pages': legalPagesInstaller,
    waitlist: waitlistInstaller,
  },
};

export function getInstaller(
  category: string,
  name: string
): Installer | undefined {
  return installers[category]?.[name];
}

export function getAllInstallers(): Record<string, Record<string, Installer>> {
  return installers;
}

export function registerInstaller(
  category: string,
  name: string,
  installer: Installer
): void {
  if (!installers[category]) {
    installers[category] = {};
  }
  installers[category][name] = installer;
}
