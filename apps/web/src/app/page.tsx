'use client';

import { useState, type CSSProperties } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Terminal,
  Zap,
  Shield,
  CreditCard,
  Mail,
  BarChart3,
  Palette,
  Blocks,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Clock,
  Code2,
  Rocket,
  Github,
  Twitter,
  Copy,
  CheckCheck,
} from 'lucide-react';

const themeStyle: CSSProperties = {
  '--page-bg': '#0C0B0A',
  '--ink': '#F9F3E8',
  '--ink-soft': '#E0D2C0',
  '--ink-muted': '#B3A697',
  '--ink-contrast': '#100A07',
  '--card': '#161412',
  '--card-strong': '#1E1A16',
  '--stroke': '#2F2A24',
  '--stroke-strong': '#F0E2D0',
  '--accent-1': '#FF7A59',
  '--accent-2': '#FFB347',
  '--accent-3': '#8CFF5D',
  '--accent-4': '#FFD166',
  '--accent-5': '#FF4D6D',
  backgroundColor: 'var(--page-bg)',
};

const navIntro = {
  initial: { opacity: 0, y: -12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const heroItem = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
});

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

// Navigation
function Nav() {
  return (
    <motion.nav className="fixed left-1/2 top-4 z-50 w-[min(100%-2rem,50rem)] -translate-x-1/2" {...navIntro}>
      <div className="rounded-full border-2 border-[color:var(--stroke-strong)] bg-[color:var(--card)] px-4 py-2 shadow-[0_8px_0_0_rgba(30,20,12,0.12)] backdrop-blur-xl">
        <div className="flex h-12 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl border-2 border-[color:var(--stroke-strong)] bg-[color:var(--accent-3)] shadow-[0_3px_0_0_var(--stroke-strong)]">
              <Zap className="h-5 w-5 text-[color:var(--ink-contrast)]" />
            </div>
            <span className="text-lg font-semibold">QuickSet.up</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-[color:var(--ink-muted)] hover:text-[color:var(--ink)] transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm text-[color:var(--ink-muted)] hover:text-[color:var(--ink)] transition-colors">
              Pricing
            </a>
            <a href="/docs" className="text-sm text-[color:var(--ink-muted)] hover:text-[color:var(--ink)] transition-colors">
              Docs
            </a>
            <a href="#faq" className="text-sm text-[color:var(--ink-muted)] hover:text-[color:var(--ink)] transition-colors">
              FAQ
            </a>
          </div>

          <a
            href="#pricing"
            className="rounded-full border-2 border-[color:var(--stroke-strong)] bg-[color:var(--accent-4)] px-5 py-2 text-sm font-semibold text-[color:var(--ink-contrast)] shadow-[0_4px_0_0_var(--stroke-strong)] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_var(--stroke-strong)] active:translate-y-0 active:shadow-[0_2px_0_0_var(--stroke-strong)]"
          >
            Get Started
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

// Hero Section
function Hero() {
  const [copied, setCopied] = useState(false);
  const command = 'npx create-quicksetup@latest my-app';

  const copyCommand = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-display"
            {...heroItem(0)}
          >
            Build your entire
            <br />
            <span className="relative inline-block px-2">
              <span className="relative z-10 text-[color:var(--ink)]">startup stack</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 220 28"
                className="absolute left-0 top-full h-4 w-full -translate-y-1"
                preserveAspectRatio="none"
              >
                <path
                  d="M6 18 C 32 6, 62 24, 92 14 S 152 6, 214 16"
                  fill="none"
                  stroke="var(--accent-4)"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            in minutes
          </motion.h1>

          <motion.p
            className="text-xl text-[color:var(--ink-soft)] max-w-2xl mx-auto mb-10"
            {...heroItem(0.1)}
          >
            Stop wasting weeks on boilerplate. Pick your auth, database, payments,
            and UI components. Generate production-ready code instantly.
          </motion.p>

          {/* Command */}
          <motion.div
            className="inline-flex items-center gap-3 rounded-2xl border-2 border-[color:var(--stroke-strong)] bg-[color:var(--card)] p-2 mb-8 shadow-[0_6px_0_0_rgba(30,20,12,0.12)]"
            {...heroItem(0.2)}
          >
            <div className="flex items-center gap-3 rounded-xl bg-[color:var(--card-strong)] px-4 py-3">
              <Terminal className="h-5 w-5 text-[color:var(--accent-2)]" />
              <code className="font-mono text-sm text-[color:var(--ink)]">{command}</code>
            </div>
            <button
              onClick={copyCommand}
              className="flex items-center gap-2 rounded-xl border-2 border-[color:var(--stroke-strong)] bg-[color:var(--accent-2)] px-4 py-3 text-sm font-semibold text-[color:var(--ink-contrast)] shadow-[0_3px_0_0_var(--stroke-strong)] transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              {copied ? (
                <>
                  <CheckCheck className="h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy
                </>
              )}
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex items-center justify-center gap-8 text-sm text-[color:var(--ink-muted)]"
            {...heroItem(0.3)}
          >
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[color:var(--accent-4)]" />
              <span>2 min setup</span>
            </div>
            <div className="flex items-center gap-2">
              <Code2 className="h-4 w-4 text-[color:var(--accent-2)]" />
              <span>100% TypeScript</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="h-4 w-4 text-[color:var(--accent-1)]" />
              <span>Production ready</span>
            </div>
          </motion.div>
        </div>

        {/* Terminal Preview */}
        <motion.div
          className="mt-16 rounded-2xl border-2 border-[color:var(--stroke-strong)] bg-[color:var(--card)] p-1 shadow-[0_10px_0_0_rgba(30,20,12,0.12)]"
          {...heroItem(0.4)}
        >
          <div className="rounded-xl bg-[color:var(--card-strong)] p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-3 w-3 rounded-full bg-[color:var(--accent-1)]" />
              <div className="h-3 w-3 rounded-full bg-[color:var(--accent-4)]" />
              <div className="h-3 w-3 rounded-full bg-[color:var(--accent-3)]" />
            </div>
            <div className="font-mono text-sm space-y-2">
              <p><span className="text-[color:var(--accent-3)]">$</span> npx create-quicksetup@latest my-saas</p>
              <p className="text-[color:var(--ink-muted)]">┌  QuickSet.up</p>
              <p className="text-[color:var(--ink-muted)]">│</p>
              <p><span className="text-[color:var(--accent-2)]">◆</span>  Project name: <span className="text-[color:var(--ink)]">my-saas</span></p>
              <p><span className="text-[color:var(--accent-2)]">◆</span>  Authentication: <span className="text-[color:var(--accent-3)]">Clerk</span></p>
              <p><span className="text-[color:var(--accent-2)]">◆</span>  Database: <span className="text-[color:var(--accent-3)]">Neon (PostgreSQL)</span></p>
              <p><span className="text-[color:var(--accent-2)]">◆</span>  ORM: <span className="text-[color:var(--accent-3)]">Drizzle</span></p>
              <p><span className="text-[color:var(--accent-2)]">◆</span>  Payments: <span className="text-[color:var(--accent-3)]">Stripe</span></p>
              <p><span className="text-[color:var(--accent-2)]">◆</span>  Email: <span className="text-[color:var(--accent-3)]">Resend</span></p>
              <p className="text-[color:var(--ink-muted)]">│</p>
              <p><span className="text-[color:var(--accent-3)]">✓</span>  Project created successfully!</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Tech Stack Logos
function TechStack() {
  const technologies: { name: string; logo: string; invert?: boolean }[] = [
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invert: true },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Clerk', logo: 'https://cdn.simpleicons.org/clerk' },
    { name: 'Stripe', logo: 'https://cdn.simpleicons.org/stripe' },
    { name: 'Resend', logo: 'https://cdn.simpleicons.org/resend' },
    { name: 'Supabase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
    { name: 'Drizzle', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/drizzle/drizzle-original.svg' },
    { name: 'Prisma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg', invert: true },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', invert: true },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  ];

  return (
    <section className="py-16 border-y border-[color:var(--stroke)]">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm text-[color:var(--ink-muted)] mb-8 tracking-wider">BUILT WITH THE MODERN STACK</p>
        <div className="marquee-container">
          <div className="marquee-content">
            {/* First set of logos */}
            {technologies.map((tech) => (
              <div key={tech.name} className="flex items-center gap-3 mx-8 opacity-60 hover:opacity-100 transition-opacity">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  width={32}
                  height={32}
                  loading="lazy"
                  className={tech.invert ? 'invert' : ''}
                />
                <span className="text-sm font-medium text-[color:var(--ink-soft)] whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {technologies.map((tech) => (
              <div key={`${tech.name}-dup`} className="flex items-center gap-3 mx-8 opacity-60 hover:opacity-100 transition-opacity">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  width={32}
                  height={32}
                  loading="lazy"
                  className={tech.invert ? 'invert' : ''}
                />
                <span className="text-sm font-medium text-[color:var(--ink-soft)] whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Features Section
function Features() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      icon: Shield,
      title: 'Authentication',
      color: '#FF7A59',
      description: 'Pre-configured auth with Clerk, Supabase Auth, or NextAuth. Middleware, protected routes, and user management included.',
      items: ['Sign in / Sign up pages', 'Protected routes', 'User profile management', 'Social login ready'],
      services: [
        { name: 'Clerk', available: true, logo: 'https://cdn.simpleicons.org/clerk' },
        { name: 'Supabase Auth', available: true, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
        { name: 'NextAuth.js', available: true, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invert: true },
        { name: 'Auth0', available: false, logo: 'https://cdn.simpleicons.org/auth0' },
        { name: 'Firebase', available: false, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'Lucia', available: false, logo: 'https://cdn.simpleicons.org/lucia' },
      ],
    },
    {
      icon: CreditCard,
      title: 'Payments',
      color: '#FFB347',
      description: 'Stripe integration with checkout, webhooks, and customer portal. Start accepting payments in minutes.',
      items: ['Checkout sessions', 'Webhook handlers', 'Subscription management', 'Pricing page component'],
      services: [
        { name: 'Stripe', available: true, logo: 'https://cdn.simpleicons.org/stripe' },
        { name: 'LemonSqueezy', available: false, logo: 'https://cdn.simpleicons.org/lemonsqueezy' },
        { name: 'Paddle', available: false, logo: 'https://cdn.simpleicons.org/paddle' },
        { name: 'PayPal', available: false, logo: 'https://cdn.simpleicons.org/paypal' },
        { name: 'Razorpay', available: false, logo: 'https://cdn.simpleicons.org/razorpay' },
        { name: 'Gumroad', available: false, logo: 'https://cdn.simpleicons.org/gumroad' },
      ],
    },
    {
      icon: Mail,
      title: 'Email',
      color: '#FF4D6D',
      description: 'Beautiful transactional emails with Resend and React Email. Templates for welcome, password reset, and more.',
      items: ['React Email templates', 'Transactional emails', 'Welcome sequences', 'Password reset flows'],
      services: [
        { name: 'Resend', available: true, logo: 'https://cdn.simpleicons.org/resend' },
        { name: 'SendGrid', available: false, logo: 'https://www.vectorlogo.zone/logos/sendgrid/sendgrid-icon.svg' },
        { name: 'Postmark', available: false, logo: 'https://www.vectorlogo.zone/logos/postmarkapp/postmarkapp-icon.svg' },
        { name: 'Mailgun', available: false, logo: 'https://cdn.simpleicons.org/mailgun' },
        { name: 'Amazon SES', available: false, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'Mailchimp', available: false, logo: 'https://cdn.simpleicons.org/mailchimp' },
      ],
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      color: '#FFD166',
      description: 'PostHog integration for product analytics. Track events, user sessions, and feature usage out of the box.',
      items: ['Event tracking', 'User identification', 'Page view analytics', 'Custom dashboards'],
      services: [
        { name: 'PostHog', available: true, logo: 'https://cdn.simpleicons.org/posthog' },
        { name: 'Mixpanel', available: false, logo: 'https://cdn.simpleicons.org/mixpanel' },
        { name: 'Amplitude', available: false, logo: 'https://www.vectorlogo.zone/logos/amplitude/amplitude-icon.svg' },
        { name: 'Plausible', available: false, logo: 'https://cdn.simpleicons.org/plausibleanalytics' },
        { name: 'Google Analytics', available: false, logo: 'https://cdn.simpleicons.org/googleanalytics' },
        { name: 'Vercel', available: false, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', invert: true },
      ],
    },
    {
      icon: Palette,
      title: 'Themes',
      color: '#8CFF5D',
      description: 'Multiple beautiful themes with dark mode. Customize colors, typography, and spacing with CSS variables.',
      items: ['3 pre-built themes', 'Dark mode default', 'CSS variable system', 'Easy customization'],
      services: [
        { name: 'Minimal Dark', available: true },
        { name: 'Gradient Glow', available: true },
        { name: 'Corporate Light', available: true },
        { name: 'Neon Cyber', available: false },
        { name: 'Ocean Breeze', available: false },
        { name: 'Forest Green', available: false },
      ],
    },
    {
      icon: Blocks,
      title: 'Components',
      color: '#FF8FB1',
      description: 'Full shadcn/ui setup with all primitives. Accessible, customizable components for rapid development.',
      items: ['40+ UI components', 'Fully accessible', 'Copy-paste ready', 'Tailwind styled'],
      services: [
        { name: 'shadcn/ui', available: true, logo: 'https://cdn.simpleicons.org/shadcnui' },
        { name: 'Radix UI', available: true, logo: 'https://cdn.simpleicons.org/radixui' },
        { name: 'Headless UI', available: false, logo: 'https://cdn.simpleicons.org/headlessui' },
        { name: 'Framer', available: false, logo: 'https://cdn.simpleicons.org/framer' },
        { name: 'React Aria', available: false, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Chakra UI', available: false, logo: 'https://cdn.simpleicons.org/chakraui' },
      ],
    },
  ];

  const activeFeature = features[activeTab];

  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div className="text-center mb-16" {...fadeUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Everything you need to{' '}
            <span className="relative inline-block px-1">
              <span className="relative z-10 text-[color:var(--accent-1)]">ship fast</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 220 28"
                className="absolute left-0 top-full h-3 w-full -translate-y-1"
                preserveAspectRatio="none"
              >
                <path
                  d="M6 18 C 32 6, 62 24, 92 14 S 152 6, 214 16"
                  fill="none"
                  stroke="var(--accent-1)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-[color:var(--ink-soft)] max-w-2xl mx-auto">
            Stop rebuilding the same features. Focus on what makes your product unique.
          </p>
        </motion.div>

        {/* Feature Tabs */}
        <motion.div className="flex flex-wrap justify-center gap-3 mb-12" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
          {features.map((feature, index) => (
            <button
              key={feature.title}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 rounded-full border-2 px-5 py-2.5 text-sm font-semibold transition-all ${
                activeTab === index
                  ? 'border-[color:var(--stroke-strong)] bg-[color:var(--accent-4)] text-[color:var(--ink-contrast)] shadow-[0_4px_0_0_var(--stroke-strong)]'
                  : 'border-[color:var(--stroke)] bg-[color:var(--card)] text-[color:var(--ink-soft)] hover:-translate-y-0.5 hover:border-[color:var(--stroke-strong)]'
              }`}
            >
              <feature.icon className="h-4 w-4" style={{ color: activeTab === index ? 'var(--ink-contrast)' : feature.color }} />
              {feature.title}
            </button>
          ))}
        </motion.div>

        {/* Feature Content */}
        <motion.div className="grid md:grid-cols-2 gap-8 items-start" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
          <div>
            <div
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
              style={{ backgroundColor: `${activeFeature.color}20` }}
            >
              <activeFeature.icon className="h-7 w-7" style={{ color: activeFeature.color }} />
            </div>
            <h3 className="text-3xl font-bold mb-4 font-display" style={{ fontFamily: 'var(--font-space-grotesk)' }}>{activeFeature.title}</h3>
            <p className="text-lg text-[color:var(--ink-soft)] mb-8">{activeFeature.description}</p>
            <ul className="space-y-3">
              {activeFeature.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="h-5 w-5" style={{ color: activeFeature.color }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Grid */}
          <div className="rounded-2xl border-2 border-[color:var(--stroke-strong)] bg-[color:var(--card)] p-6 shadow-[0_6px_0_0_rgba(30,20,12,0.12)]">
            <p className="text-sm text-[color:var(--ink-muted)] mb-4 uppercase tracking-wider">Available Integrations</p>
            <div className="grid grid-cols-2 gap-3">
              {activeFeature.services.map((service: { name: string; available: boolean; logo?: string; invert?: boolean }) => (
                <div
                  key={service.name}
                  className={`flex items-center gap-3 rounded-lg border-2 px-4 py-3 transition-all ${
                    service.available
                      ? 'border-[color:var(--stroke)] bg-[color:var(--card-strong)] hover:-translate-y-0.5 hover:border-[color:var(--stroke-strong)]'
                      : 'border-[color:var(--stroke)] bg-[color:var(--card)] opacity-60'
                  }`}
                >
                  {service.logo && (
                    <img
                      src={service.logo}
                      alt={service.name}
                      width={18}
                      height={18}
                      loading="lazy"
                      className={`flex-shrink-0 ${service.invert ? 'invert' : ''}`}
                    />
                  )}
                  <span className="text-sm font-medium">
                    {service.name}
                  </span>
                  {service.available ? (
                    <Check className="h-4 w-4 ml-auto flex-shrink-0" style={{ color: activeFeature.color }} />
                  ) : (
                    <span className="ml-auto text-xs text-[color:var(--ink-muted)] flex-shrink-0">Soon</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Pricing Section
function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$149',
      originalPrice: '$199',
      description: 'Perfect for solo developers',
      color: '#FF7A59',
      features: [
        'All integrations',
        'All themes',
        'Core modules',
        '3 project activations',
        'Community support',
        '6 months of updates',
      ],
      notIncluded: ['Premium modules', 'Priority support'],
    },
    {
      name: 'Pro',
      price: '$249',
      originalPrice: '$349',
      description: 'For serious builders',
      color: '#FFB347',
      popular: true,
      features: [
        'Everything in Starter',
        'Premium modules',
        'Admin dashboard',
        '10 project activations',
        'Discord community access',
        'Lifetime updates',
        'Priority support',
      ],
      notIncluded: [],
    },
    {
      name: 'Team',
      price: '$499',
      originalPrice: '$649',
      description: 'For growing teams',
      color: '#8CFF5D',
      features: [
        'Everything in Pro',
        '50 project activations',
        'Team license',
        'Slack support channel',
        'Early access to new features',
        'Custom integrations help',
      ],
      notIncluded: [],
    },
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div className="text-center mb-16" {...fadeUp}>
          <div
            className="inline-flex items-center gap-2 rounded-full border-2 px-4 py-1.5 mb-6"
            style={{ borderColor: 'var(--accent-5)', backgroundColor: 'rgba(255, 77, 109, 0.15)' }}
          >
            <span className="text-sm text-[color:var(--accent-5)]">Launch Sale: $50 off all plans</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Simple,{' '}
            <span className="relative inline-block px-1">
              <span className="relative z-10 text-[color:var(--accent-4)]">honest</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 220 28"
                className="absolute left-0 top-full h-3 w-full -translate-y-1"
                preserveAspectRatio="none"
              >
                <path
                  d="M6 18 C 32 6, 62 24, 92 14 S 152 6, 214 16"
                  fill="none"
                  stroke="var(--accent-4)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            pricing
          </h2>
          <p className="text-xl text-[color:var(--ink-soft)] max-w-2xl mx-auto">
            Pay once, build unlimited projects. No subscriptions, no hidden fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl border-2 p-8 shadow-[0_8px_0_0_rgba(30,20,12,0.12)] transition-transform hover:-translate-y-1 ${
                plan.popular
                  ? 'border-[color:var(--stroke-strong)] bg-[color:var(--card-strong)]'
                  : 'border-[color:var(--stroke)] bg-[color:var(--card)]'
              }`}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 * index }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border-2 border-[color:var(--stroke-strong)] bg-[color:var(--accent-2)] px-4 py-1 text-xs font-semibold text-[color:var(--ink-contrast)] shadow-[0_3px_0_0_var(--stroke-strong)]">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                <p className="text-sm text-[color:var(--ink-muted)]">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-[color:var(--ink-muted)] line-through">{plan.originalPrice}</span>
                  <span className="text-4xl font-bold" style={{ color: plan.color }}>
                    {plan.price}
                  </span>
                  <span className="text-[color:var(--ink-muted)]">USD</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="h-4 w-4 text-[color:var(--accent-3)]" />
                    <span>{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-[color:var(--ink-muted)]">
                    <Minus className="h-4 w-4" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-xl border-2 py-3 font-semibold transition-transform ${
                  plan.popular
                    ? 'border-[color:var(--stroke-strong)] bg-[color:var(--accent-2)] text-[color:var(--ink-contrast)] shadow-[0_4px_0_0_var(--stroke-strong)] hover:-translate-y-0.5'
                    : 'border-[color:var(--stroke-strong)] bg-[color:var(--card-strong)] text-[color:var(--ink)] hover:-translate-y-0.5'
                }`}
              >
                Get {plan.name}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p className="text-center text-sm text-[color:var(--ink-muted)] mt-8" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
          30-day money-back guarantee. No questions asked.
        </motion.p>
      </div>
    </section>
  );
}

// Testimonials
// FAQ Section
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What exactly do I get with QuickSet.up?',
      answer:
        'A production-ready codebase generated from your exact stack choices. You pick the integrations, theme, and modules, and the CLI scaffolds a clean, type-safe project in minutes.',
      bullets: [
        'Interactive CLI wizard that configures your stack and modules.',
        'Next.js 15 App Router template with TypeScript and Tailwind.',
        'Pre-wired integrations for auth, database, payments, email, and analytics (based on your selections).',
        'Landing page blocks, pricing, and FAQ components ready to customize.',
      ],
    },
    {
      question: 'Which stacks are supported today?',
      answer:
        'The current release focuses on Next.js 15 with a modern TypeScript-first setup, plus a curated set of integrations that work well together.',
      bullets: [
        'Framework: Next.js 15 (App Router) and React 19.',
        'Auth: Clerk and Supabase Auth.',
        'Database: Supabase or Neon (PostgreSQL).',
        'ORM: Drizzle with example schemas.',
        'Payments: Stripe with checkout and webhooks.',
        'Email: Resend with React Email templates.',
        'Analytics: PostHog with client + server helpers.',
      ],
    },
    {
      question: 'How does the CLI work step-by-step?',
      answer:
        'The CLI guides you through choices and then generates a project that matches your configuration. You can run it interactively or in quick mode with defaults.',
      bullets: [
        'Choose a project name and framework.',
        'Select auth, database, ORM, payments, email, and analytics.',
        'Pick UI library, theme, and optional modules.',
        'Generate files, install dependencies, and run the app.',
      ],
    },
    {
      question: 'Can I swap providers later?',
      answer:
        'Yes. The generated code is modular, so you can replace integrations as your needs change. We recommend swapping one layer at a time to keep migrations simple.',
      bullets: [
        'Auth can be replaced by updating middleware, providers, and UI routes.',
        'Databases can be swapped by adjusting clients and connection strings.',
        'Payments and email are isolated in their own modules.',
      ],
    },
    {
      question: 'Is this a one-time payment? What about refunds?',
      answer:
        'Yes. It is a one-time payment with no subscriptions. If it does not fit your needs, refunds are available within 30 days.',
      bullets: [
        'Starter, Pro, and Team are lifetime licenses.',
        'Updates are included per plan (Pro gets lifetime updates).',
        'Refunds are processed with no complicated hoops.',
      ],
    },
    {
      question: 'How are environment variables handled?',
      answer:
        'Each integration ships with a clear .env template and minimal required secrets, so you can be productive without hunting for setup steps.',
      bullets: [
        'A generated `.env.example` outlines required keys.',
        'Secrets are scoped by module (auth, payments, email).',
        'Local development uses `.env.local` with safe defaults.',
      ],
    },
    {
      question: 'Is the generated code production-ready?',
      answer:
        'The template includes best practices that make it safe to ship and easy to maintain. You get a clean foundation instead of a tangled starter kit.',
      bullets: [
        'Type-safe integrations with clear separation of concerns.',
        'Reasonable defaults for security and error handling.',
        'Composable modules so you can keep or remove what you need.',
      ],
    },
    {
      question: 'Can I use it for client work or teams?',
      answer:
        'Absolutely. The license is designed to support commercial use and client deliverables. The generated code is yours to ship.',
      bullets: [
        'Starter works well for individual developers and solo founders.',
        'Team is built for multiple collaborators and internal tooling.',
        'Client projects are allowed within plan limits.',
      ],
    },
    {
      question: 'What is on the roadmap?',
      answer:
        'We are expanding integrations, modules, and framework support. The goal is a complete starter ecosystem, not just a template.',
      bullets: [
        'More auth providers, databases, and payment gateways.',
        'Admin dashboard and blog module.',
        'Nuxt, SvelteKit, and Remix support.',
      ],
    },
  ];

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div className="text-center mb-16" {...fadeUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Frequently asked{' '}
            <span className="relative inline-block px-1">
              <span className="relative z-10 text-[color:var(--accent-2)]">questions</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 220 28"
                className="absolute left-0 top-full h-3 w-full -translate-y-1"
                preserveAspectRatio="none"
              >
                <path
                  d="M6 18 C 32 6, 62 24, 92 14 S 152 6, 214 16"
                  fill="none"
                  stroke="var(--accent-2)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-[color:var(--ink-soft)]">
            Got questions? We&apos;ve got answers.
          </p>
        </motion.div>

        <motion.div className="space-y-4" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] overflow-hidden shadow-[0_6px_0_0_rgba(30,20,12,0.08)]"
              layout
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full p-6 text-left"
              >
                <span className="font-medium">{faq.question}</span>
                <AnimatePresence initial={false} mode="wait">
                  {openIndex === index ? (
                    <motion.span
                      key="minus"
                      initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      <Minus className="h-5 w-5 text-[color:var(--ink-muted)]" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="plus"
                      initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      <Plus className="h-5 w-5 text-[color:var(--ink-muted)]" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-[color:var(--ink-soft)]">
                      <p className="mb-4">{faq.answer}</p>
                      {faq.bullets && (
                        <ul className="space-y-2 text-sm text-[color:var(--ink-muted)]">
                          {faq.bullets.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--accent-3)]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// CTA Section
function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          className="rounded-3xl border-2 border-[color:var(--stroke-strong)] bg-[color:var(--card-strong)] p-10 text-center shadow-[0_10px_0_0_rgba(30,20,12,0.12)]"
          {...fadeUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Ready to ship{' '}
            <span className="relative inline-block px-1">
              <span className="relative z-10 text-[color:var(--accent-1)]">faster</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 220 28"
                className="absolute left-0 top-full h-3 w-full -translate-y-1"
                preserveAspectRatio="none"
              >
                <path
                  d="M6 18 C 32 6, 62 24, 92 14 S 152 6, 214 16"
                  fill="none"
                  stroke="var(--accent-1)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            ?
          </h2>
          <p className="text-xl text-[color:var(--ink-soft)] mb-8">
            Stop wasting time on boilerplate. Start building what matters.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--stroke-strong)] bg-[color:var(--accent-1)] px-8 py-4 font-semibold text-[color:var(--ink-contrast)] shadow-[0_4px_0_0_var(--stroke-strong)] transition-transform hover:-translate-y-0.5"
            >
              Get QuickSet.up
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/quicksetup"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--stroke-strong)] bg-[color:var(--card)] px-8 py-4 font-semibold text-[color:var(--ink)] shadow-[0_4px_0_0_var(--stroke-strong)] transition-transform hover:-translate-y-0.5"
            >
              <Github className="h-5 w-5" />
              View on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Integrations', href: '#features' },
        { label: 'Changelog', href: '/docs#changelog' },
        { label: 'Status', href: '/docs#status' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'Quick Start', href: '/docs#quick-start' },
        { label: 'Project Structure', href: '/docs#project-structure' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Support', href: '/docs#support' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/docs#about' },
        { label: 'Careers', href: '/docs#careers' },
        { label: 'Partners', href: '/docs#partners' },
        { label: 'Contact', href: '/docs#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '/docs#privacy' },
        { label: 'Terms', href: '/docs#terms' },
        { label: 'Security', href: '/docs#security' },
        { label: 'Accessibility', href: '/docs#accessibility' },
      ],
    },
  ];

  return (
    <footer className="border-t border-[color:var(--stroke)] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_2fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[color:var(--stroke-strong)] bg-[color:var(--accent-3)] shadow-[0_3px_0_0_var(--stroke-strong)]">
                <Zap className="h-6 w-6 text-[color:var(--ink-contrast)]" />
              </div>
              <span className="text-xl font-semibold">QuickSet.up</span>
            </div>
            <p className="text-[color:var(--ink-soft)]">
              The playful, production-ready CLI that helps you ship full-stack products fast.
              Configure your stack once, and spend your time building the unique parts.
            </p>
            <div className="rounded-2xl border-2 border-[color:var(--stroke-strong)] bg-[color:var(--card)] p-4 shadow-[0_4px_0_0_var(--stroke-strong)]">
              <p className="text-sm font-semibold text-[color:var(--ink)]">Need help or a demo?</p>
              <p className="text-sm text-[color:var(--ink-muted)]">support@quicksetup.dev</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com/quicksetup" className="text-[color:var(--ink-muted)] hover:text-[color:var(--ink)] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com/quicksetup" className="text-[color:var(--ink-muted)] hover:text-[color:var(--ink)] transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerSections.map((section) => (
              <div key={section.title}>
                <p className="text-sm font-semibold text-[color:var(--ink)] mb-4">{section.title}</p>
                <ul className="space-y-3 text-sm text-[color:var(--ink-muted)]">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="hover:text-[color:var(--ink)] transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-[color:var(--stroke)] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[color:var(--ink-muted)]">
          <p>&copy; {new Date().getFullYear()} QuickSet.up. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Made for founders, makers, and tiny teams.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main className="min-h-screen text-[color:var(--ink)]" style={themeStyle}>
      <Nav />
      <Hero />
      <TechStack />
      <Features />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
