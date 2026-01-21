'use client';

import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, CheckCircle2, Code2, Rocket, Shield } from 'lucide-react';

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

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const sections = [
  { id: 'features', label: 'Features' },
  { id: 'quick-start', label: 'Quick Start' },
  { id: 'installation', label: 'Installation' },
  { id: 'cli-options', label: 'CLI Options' },
  { id: 'stack-options', label: 'Stack Options' },
  { id: 'modules', label: 'Modules' },
  { id: 'whats-included', label: "What's Included" },
  { id: 'whats-not-included', label: "What's Not Included" },
  { id: 'project-structure', label: 'Project Structure' },
  { id: 'configuration', label: 'Configuration' },
  { id: 'workflows', label: 'Workflows' },
  { id: 'deploy', label: 'Deployment' },
  { id: 'troubleshooting', label: 'Troubleshooting' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'development', label: 'Development' },
  { id: 'contributing', label: 'Contributing' },
  { id: 'acknowledgments', label: 'Acknowledgments' },
  { id: 'changelog', label: 'Changelog' },
  { id: 'status', label: 'Status' },
  { id: 'support', label: 'Support' },
  { id: 'security', label: 'Security' },
  { id: 'privacy', label: 'Privacy' },
  { id: 'terms', label: 'Terms' },
  { id: 'license', label: 'License' },
  { id: 'accessibility', label: 'Accessibility' },
  { id: 'about', label: 'About' },
  { id: 'careers', label: 'Careers' },
  { id: 'partners', label: 'Partners' },
  { id: 'contact', label: 'Contact' },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen text-[color:var(--ink)]" style={themeStyle}>
      <nav className="sticky top-4 z-40 mx-auto mt-4 w-[min(100%-2rem,50rem)] rounded-full border-2 border-[color:var(--stroke-strong)] bg-[color:var(--card)] px-4 py-2 shadow-[0_8px_0_0_rgba(30,20,12,0.12)] backdrop-blur">
        <div className="flex h-12 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl border-2 border-[color:var(--stroke-strong)] bg-[color:var(--accent-3)] shadow-[0_3px_0_0_var(--stroke-strong)]">
              <BookOpen className="h-5 w-5 text-[color:var(--ink-contrast)]" />
            </div>
            <span className="text-lg font-semibold">QuickSet.up Docs</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="rounded-full border-2 border-[color:var(--stroke-strong)] bg-[color:var(--card-strong)] px-4 py-2 text-sm font-semibold text-[color:var(--ink)] shadow-[0_3px_0_0_var(--stroke-strong)] transition-transform hover:-translate-y-0.5"
            >
              Back to Home
            </a>
            <a
              href="/#pricing"
              className="hidden sm:inline-flex rounded-full border-2 border-[color:var(--stroke-strong)] bg-[color:var(--accent-4)] px-4 py-2 text-sm font-semibold text-[color:var(--ink-contrast)] shadow-[0_3px_0_0_var(--stroke-strong)] transition-transform hover:-translate-y-0.5"
            >
              Get QuickSet.up
            </a>
          </div>
        </div>
      </nav>

      <section className="mx-auto mt-10 max-w-6xl px-6 pb-20 pt-10">
        <motion.div className="mb-10 text-center" {...fadeUp}>
          <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--ink-muted)]">Documentation</p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Build your stack once,
            <span className="block text-[color:var(--accent-1)]">ship for years.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-[color:var(--ink-soft)]">
            This is the detailed guide to QuickSet.up. Everything from installation to deployments,
            integration details, module coverage, and operational best practices lives here.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_2.2fr]">
          <motion.aside className="space-y-6" {...fadeUp}>
            <div className="rounded-2xl border-2 border-[color:var(--stroke-strong)] bg-[color:var(--card-strong)] p-5 shadow-[0_6px_0_0_rgba(30,20,12,0.12)]">
              <p className="text-sm font-semibold uppercase tracking-widest text-[color:var(--ink)]">Table of Contents</p>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--ink-muted)]">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="hover:text-[color:var(--ink)] transition-colors">
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-5 shadow-[0_4px_0_0_rgba(30,20,12,0.08)]">
              <p className="text-sm font-semibold text-[color:var(--ink)]">At a glance</p>
              <div className="mt-3 space-y-3 text-sm text-[color:var(--ink-muted)]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--accent-3)]" />
                  <span>Next.js 15, React 19, TypeScript 5.9, Tailwind 4.1</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--accent-3)]" />
                  <span>Auth, DB, payments, email, and analytics integrations</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--accent-3)]" />
                  <span>Modular templates with sensible defaults</span>
                </div>
              </div>
            </div>
          </motion.aside>

          <div className="space-y-10">
            <motion.section id="features" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-[color:var(--accent-3)]" />
                <h2 className="text-2xl font-semibold">Features</h2>
              </div>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                QuickSet.up is a modular CLI that generates production-ready code with modern defaults.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--ink-muted)]">
                <li>Modern stack: Next.js 15, React 19, TypeScript 5.9, Tailwind 4.1.</li>
                <li>Modular architecture so you only install what you need.</li>
                <li>Pre-wired integrations for auth, database, payments, email, analytics.</li>
                <li>Multiple themes and a simple CSS variable system.</li>
                <li>Production-ready defaults and clean project organization.</li>
                <li>CLI designed for fast and clear workflows.</li>
              </ul>
            </motion.section>

            <motion.section id="quick-start" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <div className="flex items-center gap-3">
                <Rocket className="h-6 w-6 text-[color:var(--accent-1)]" />
                <h2 className="text-2xl font-semibold">Quick Start</h2>
              </div>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                Get a full stack in minutes. This is the fastest path from zero to a running app.
              </p>
              <pre className="mt-4 rounded-xl border-2 border-[color:var(--stroke-strong)] bg-[color:var(--card-strong)] p-4 text-sm text-[color:var(--ink)]">
                <code>{`npx create-quicksetup@latest my-app
cd my-app
cp .env.example .env.local
pnpm install
pnpm dev`}</code>
              </pre>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 text-sm text-[color:var(--ink-muted)]">
                <div>
                  <p className="font-semibold text-[color:var(--ink)]">Recommended flow</p>
                  <ul className="mt-2 space-y-2">
                    <li>Pick your auth and database first.</li>
                    <li>Add payments and email if you are monetizing.</li>
                    <li>Select a theme last and customize later.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-[color:var(--ink)]">Quick mode</p>
                  <ul className="mt-2 space-y-2">
                    <li>Run `create-quicksetup my-app --yes`.</li>
                    <li>Skips prompts and uses defaults.</li>
                    <li>Ideal for testing or spikes.</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            <motion.section id="installation" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">Installation</h2>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                You can run the CLI on-demand with npx, or install globally for repeated use.
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border-2 border-[color:var(--stroke-strong)] bg-[color:var(--card-strong)] p-4">
                  <p className="text-sm font-semibold text-[color:var(--ink)]">Global install</p>
                  <pre className="mt-2 text-sm text-[color:var(--ink)]">
                    <code>{`pnpm add -g create-quicksetup
create-quicksetup`}</code>
                  </pre>
                </div>
                <div className="rounded-xl border-2 border-[color:var(--stroke-strong)] bg-[color:var(--card-strong)] p-4">
                  <p className="text-sm font-semibold text-[color:var(--ink)]">One-time usage</p>
                  <pre className="mt-2 text-sm text-[color:var(--ink)]">
                    <code>{`npx create-quicksetup@latest
npx create-quicksetup@latest my-app --yes`}</code>
                  </pre>
                </div>
              </div>
              <p className="mt-4 text-sm text-[color:var(--ink-muted)]">
                Requirements: Node.js 20+, pnpm 9+ recommended. npm, yarn, and bun are supported.
              </p>
            </motion.section>

            <motion.section id="cli-options" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">CLI Options</h2>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                Flags help you automate project creation in CI or scripts.
              </p>
              <div className="mt-4 space-y-3 text-sm text-[color:var(--ink-muted)]">
                <div className="flex items-start gap-3">
                  <Code2 className="mt-1 h-4 w-4 text-[color:var(--accent-2)]" />
                  <span><strong className="text-[color:var(--ink)]">--yes / -y</strong> skips prompts and uses defaults.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Code2 className="mt-1 h-4 w-4 text-[color:var(--accent-2)]" />
                  <span><strong className="text-[color:var(--ink)]">--skip-install</strong> generates files without installing dependencies.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Code2 className="mt-1 h-4 w-4 text-[color:var(--accent-2)]" />
                  <span><strong className="text-[color:var(--ink)]">--git / --no-git</strong> toggles git initialization.</span>
                </div>
              </div>
            </motion.section>

            <motion.section id="stack-options" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">Stack Options</h2>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                Pick the tools that fit your product today. You can always swap later.
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-2 text-sm text-[color:var(--ink-muted)]">
                <div>
                  <p className="font-semibold text-[color:var(--ink)]">Frameworks</p>
                  <ul className="mt-2 space-y-1">
                    <li>Next.js 15 (available)</li>
                    <li>Nuxt, SvelteKit, Remix (planned)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-[color:var(--ink)]">Authentication</p>
                  <ul className="mt-2 space-y-1">
                    <li>Clerk (available)</li>
                    <li>Supabase Auth (available)</li>
                    <li>Auth.js, Lucia, WorkOS (planned)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-[color:var(--ink)]">Databases</p>
                  <ul className="mt-2 space-y-1">
                    <li>Supabase, Neon (available)</li>
                    <li>PlanetScale, Turso, MongoDB (planned)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-[color:var(--ink)]">ORMs</p>
                  <ul className="mt-2 space-y-1">
                    <li>Drizzle (available)</li>
                    <li>Prisma (planned)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-[color:var(--ink)]">Payments</p>
                  <ul className="mt-2 space-y-1">
                    <li>Stripe (available)</li>
                    <li>Paddle, LemonSqueezy (planned)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-[color:var(--ink)]">Email + Analytics</p>
                  <ul className="mt-2 space-y-1">
                    <li>Resend + React Email (available)</li>
                    <li>PostHog analytics (available)</li>
                    <li>Postmark, Mixpanel (planned)</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            <motion.section id="modules" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">Modules</h2>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                Modules are optional bundles that add pages, components, and server routes.
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-2 text-sm text-[color:var(--ink-muted)]">
                <div className="rounded-xl border-2 border-[color:var(--stroke-strong)] bg-[color:var(--card-strong)] p-4">
                  <p className="font-semibold text-[color:var(--ink)]">SEO</p>
                  <ul className="mt-2 space-y-2">
                    <li>Metadata helper</li>
                    <li>Dynamic sitemap</li>
                    <li>Robots.txt template</li>
                  </ul>
                </div>
                <div className="rounded-xl border-2 border-[color:var(--stroke-strong)] bg-[color:var(--card-strong)] p-4">
                  <p className="font-semibold text-[color:var(--ink)]">Legal Pages</p>
                  <ul className="mt-2 space-y-2">
                    <li>Privacy policy page</li>
                    <li>Terms of service page</li>
                    <li>Configurable placeholders</li>
                  </ul>
                </div>
                <div className="rounded-xl border-2 border-[color:var(--stroke-strong)] bg-[color:var(--card-strong)] p-4">
                  <p className="font-semibold text-[color:var(--ink)]">Landing Pages</p>
                  <ul className="mt-2 space-y-2">
                    <li>Hero, features, CTA, pricing</li>
                    <li>Testimonials and FAQ accordion</li>
                    <li>Responsive by default</li>
                  </ul>
                </div>
                <div className="rounded-xl border-2 border-[color:var(--stroke-strong)] bg-[color:var(--card-strong)] p-4">
                  <p className="font-semibold text-[color:var(--ink)]">Waitlist</p>
                  <ul className="mt-2 space-y-2">
                    <li>Waitlist page and form</li>
                    <li>Email capture API route</li>
                    <li>Loading and success states</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            <motion.section id="whats-included" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">What&apos;s Included</h2>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                Every project ships with a solid base template plus the modules you select.
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-3 text-sm text-[color:var(--ink-muted)]">
                <div>
                  <p className="font-semibold text-[color:var(--ink)]">Base Template</p>
                  <ul className="mt-2 space-y-2">
                    <li>Next.js 15 App Router</li>
                    <li>React 19 + TypeScript 5.9</li>
                    <li>Tailwind 4.1 + PostCSS</li>
                    <li>Prettier + ESLint</li>
                    <li>Turbopack dev workflow</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-[color:var(--ink)]">Landing Pages</p>
                  <ul className="mt-2 space-y-2">
                    <li>Hero + features + pricing</li>
                    <li>CTA and testimonials</li>
                    <li>FAQ accordion</li>
                    <li>Responsive layout</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-[color:var(--ink)]">Developer Experience</p>
                  <ul className="mt-2 space-y-2">
                    <li>Type-safe utilities</li>
                    <li>Clear project structure</li>
                    <li>Env templates</li>
                    <li>Post-install guidance</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            <motion.section id="whats-not-included" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">What&apos;s Not Included (Yet)</h2>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                These items are on the roadmap but not in the current release.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-[color:var(--ink-muted)] md:grid-cols-2">
                <li>Auth.js (NextAuth v5), Better Auth, Lucia</li>
                <li>PlanetScale, Turso, MongoDB, Convex</li>
                <li>Prisma ORM support</li>
                <li>Paddle, LemonSqueezy, Polar payments</li>
                <li>Postmark, SendGrid, Mailgun</li>
                <li>Plausible, Mixpanel, Vercel Analytics</li>
                <li>Admin dashboard module</li>
                <li>Blog (MDX) module</li>
                <li>i18n and file uploads</li>
                <li>License key validation</li>
              </ul>
            </motion.section>

            <motion.section id="project-structure" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">Generated Project Structure</h2>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                The generator produces a clean, modular project that mirrors your selections.
              </p>
              <pre className="mt-4 rounded-xl border-2 border-[color:var(--stroke-strong)] bg-[color:var(--card-strong)] p-4 text-xs text-[color:var(--ink)]">
                <code>{`my-app/
|-- public/
|   |-- robots.txt
|-- src/
|   |-- app/
|   |   |-- (auth)/
|   |   |-- (dashboard)/
|   |   |-- (legal)/
|   |   |-- (marketing)/
|   |   |-- api/
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   '-- page.tsx
|   |-- components/
|   |-- emails/
|   '-- lib/
|-- drizzle/
|-- .env.example
|-- package.json
'-- tsconfig.json`}</code>
              </pre>
            </motion.section>

            <motion.section id="configuration" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">Configuration</h2>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                All integrations are configured through environment variables and small, targeted config files.
              </p>
              <div className="mt-4 space-y-3 text-sm text-[color:var(--ink-muted)]">
                <div className="flex items-start gap-3">
                  <Shield className="mt-1 h-4 w-4 text-[color:var(--accent-2)]" />
                  <span>Use `.env.example` as your canonical checklist.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="mt-1 h-4 w-4 text-[color:var(--accent-2)]" />
                  <span>Keep secrets in `.env.local` and never commit them.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="mt-1 h-4 w-4 text-[color:var(--accent-2)]" />
                  <span>Stripe webhooks and auth callbacks are documented in generated READMEs.</span>
                </div>
              </div>
            </motion.section>

            <motion.section id="workflows" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">Suggested Workflows</h2>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                These flows help you move from setup to production without rework.
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-2 text-sm text-[color:var(--ink-muted)]">
                <div>
                  <p className="font-semibold text-[color:var(--ink)]">MVP launch</p>
                  <ul className="mt-2 space-y-2">
                    <li>Start with auth + database.</li>
                    <li>Add payments only when the product is validated.</li>
                    <li>Ship a minimal landing page with CTA.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-[color:var(--ink)]">Team workflow</p>
                  <ul className="mt-2 space-y-2">
                    <li>Use Team license for shared activations.</li>
                    <li>Set up CI with typecheck + lint.</li>
                    <li>Document integration choices in README.</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            <motion.section id="deploy" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">Deployment</h2>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                QuickSet.up projects deploy cleanly on Vercel or any Node-compatible host.
              </p>
              <div className="mt-4 space-y-3 text-sm text-[color:var(--ink-muted)]">
                <p><strong className="text-[color:var(--ink)]">Vercel:</strong> import the repo, set env vars, deploy.</p>
                <p><strong className="text-[color:var(--ink)]">Custom host:</strong> build with `pnpm build`, run `pnpm start`.</p>
                <p><strong className="text-[color:var(--ink)]">Stripe:</strong> configure webhook URL after deploy.</p>
              </div>
            </motion.section>

            <motion.section id="troubleshooting" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">Troubleshooting</h2>
              <ul className="mt-4 space-y-3 text-sm text-[color:var(--ink-muted)]">
                <li>Auth errors usually mean missing keys in `.env.local`.</li>
                <li>Stripe webhooks require the correct signing secret.</li>
                <li>Database connection failures are commonly due to IP allow-lists.</li>
                <li>Run `pnpm lint` and `pnpm typecheck` for preflight checks.</li>
              </ul>
            </motion.section>

            <motion.section id="roadmap" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">Roadmap</h2>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                We ship in phases with a focus on reliability and developer experience.
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-3 text-sm text-[color:var(--ink-muted)]">
                <div>
                  <p className="font-semibold text-[color:var(--ink)]">Phase 1</p>
                  <ul className="mt-2 space-y-1">
                    <li>Core CLI prompts</li>
                    <li>Next.js base template</li>
                    <li>Key integrations</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-[color:var(--ink)]">Phase 2</p>
                  <ul className="mt-2 space-y-1">
                    <li>All providers supported</li>
                    <li>More themes</li>
                    <li>License validation</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-[color:var(--ink)]">Phase 3</p>
                  <ul className="mt-2 space-y-1">
                    <li>Video guides</li>
                    <li>Docs platform</li>
                    <li>Template marketplace</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            <motion.section id="development" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">Development</h2>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                Want to run the CLI locally or contribute to templates? Use the commands below.
              </p>
              <pre className="mt-4 rounded-xl border-2 border-[color:var(--stroke-strong)] bg-[color:var(--card-strong)] p-4 text-sm text-[color:var(--ink)]">
                <code>{`pnpm install
pnpm build
node apps/cli/dist/index.js my-test-project --yes`}</code>
              </pre>
              <p className="mt-3 text-sm text-[color:var(--ink-muted)]">
                Use `pnpm --filter @quicksetup/core build` to build individual packages.
              </p>
            </motion.section>

            <motion.section id="contributing" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">Contributing</h2>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                Contributions are welcome. We love well-documented PRs and clear reproduction steps.
              </p>
              <ol className="mt-4 space-y-2 text-sm text-[color:var(--ink-muted)]">
                <li>1. Fork the repo and create a feature branch.</li>
                <li>2. Make your changes with clear commit messages.</li>
                <li>3. Open a PR with context and screenshots if relevant.</li>
              </ol>
            </motion.section>

            <motion.section id="acknowledgments" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">Acknowledgments</h2>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                Inspired by create-t3-app, ShipFast, and shadcn/ui. We stand on great work.
              </p>
            </motion.section>

            <motion.section id="changelog" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">Changelog</h2>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                Release notes are compiled per version with upgrades, fixes, and template updates.
              </p>
              <p className="mt-2 text-sm text-[color:var(--ink-muted)]">
                v0.1: Initial release with Next.js 15, Clerk, Supabase, Neon, Stripe, Resend, PostHog, and modular templates.
              </p>
            </motion.section>

            <motion.section id="status" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">Status</h2>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                All core services are stable. Outages and incidents will be posted here.
              </p>
            </motion.section>

            <motion.section id="support" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">Support</h2>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                Reach us at support@quicksetup.dev. Pro and Team plans include priority response times.
              </p>
              <p className="mt-2 text-sm text-[color:var(--ink-muted)]">
                We aim for clear answers and actionable fixes, not canned replies.
              </p>
            </motion.section>

            <motion.section id="security" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">Security</h2>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                We follow best practices for secrets, dependency updates, and safe defaults.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-[color:var(--ink-muted)]">
                <li>Secrets are stored in environment variables, never in source files.</li>
                <li>Integrations follow vendor-recommended setup guides.</li>
                <li>Security updates are shipped as part of template updates.</li>
              </ul>
            </motion.section>

            <motion.section id="privacy" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">Privacy</h2>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                QuickSet.up does not collect your code. The CLI runs locally and generates files on your machine.
              </p>
            </motion.section>

            <motion.section id="terms" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">Terms</h2>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                Licenses are one-time purchases. You can ship commercial products with generated code.
              </p>
            </motion.section>

            <motion.section id="license" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">License</h2>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                QuickSet.up is a proprietary product. Review the license file in your generated project.
              </p>
            </motion.section>

            <motion.section id="accessibility" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">Accessibility</h2>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                Components prioritize accessible markup, keyboard navigation, and clear focus states.
              </p>
            </motion.section>

            <motion.section id="about" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">About</h2>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                QuickSet.up is built by a team of builders who are tired of rebuilding the same setup every week.
              </p>
            </motion.section>

            <motion.section id="careers" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">Careers</h2>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                We are a small, product-focused team. Interested in contributing? Reach out.
              </p>
            </motion.section>

            <motion.section id="partners" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">Partners</h2>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                We collaborate with platforms that prioritize developer experience and fast shipping.
              </p>
            </motion.section>

            <motion.section id="contact" className="rounded-2xl border-2 border-[color:var(--stroke)] bg-[color:var(--card)] p-8 shadow-[0_6px_0_0_rgba(30,20,12,0.1)]" {...fadeUp}>
              <h2 className="text-2xl font-semibold">Contact</h2>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                Email us at support@quicksetup.dev for product, billing, or partnership questions.
              </p>
            </motion.section>

            <motion.div className="flex flex-col items-start gap-3 rounded-2xl border-2 border-[color:var(--stroke-strong)] bg-[color:var(--card-strong)] p-6 shadow-[0_6px_0_0_rgba(30,20,12,0.12)]" {...fadeUp}>
              <p className="text-lg font-semibold">Ready to build?</p>
              <p className="text-sm text-[color:var(--ink-muted)]">
                Start the CLI, choose your stack, and be running in minutes.
              </p>
              <a
                href="/#pricing"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--stroke-strong)] bg-[color:var(--accent-2)] px-4 py-2 text-sm font-semibold text-[color:var(--ink-contrast)] shadow-[0_3px_0_0_var(--stroke-strong)] transition-transform hover:-translate-y-0.5"
              >
                Get QuickSet.up
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
