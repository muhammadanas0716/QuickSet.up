# QuickSet.up

> Ship your startup in days, not weeks.

QuickSet.up is a modern, modular CLI-based boilerplate generator for web applications. Pick your stack, customize your theme, and generate production-ready code in seconds.

[![License](https://img.shields.io/badge/license-proprietary-blue.svg)]()
[![Node](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen.svg)]()
[![pnpm](https://img.shields.io/badge/pnpm-%3E%3D9.0.0-orange.svg)]()

---

## Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Usage](#usage)
- [Available Options](#available-options)
  - [Frameworks](#frameworks)
  - [Authentication](#authentication)
  - [Databases](#databases)
  - [ORMs](#orms)
  - [Payments](#payments)
  - [Email](#email)
  - [Analytics](#analytics)
  - [UI Libraries](#ui-libraries)
  - [Themes](#themes)
  - [Modules](#modules)
- [Generated Project Structure](#generated-project-structure)
- [What's Included](#whats-included)
- [What's Not Included (Yet)](#whats-not-included-yet)
- [Roadmap](#roadmap)
- [Development](#development)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Modern Stack**: Next.js 15, React 19, TypeScript 5.9, Tailwind CSS 4.1
- **Modular Architecture**: Pick only what you need
- **Multiple Integrations**: Auth, Database, Payments, Email, Analytics
- **Theme System**: Multiple pre-built themes with dark mode support
- **Production Ready**: Best practices, type-safe, optimized builds
- **Developer Experience**: Fast generation, clear documentation, helpful CLI

---

## Quick Start

```bash
# Using npx (recommended)
npx create-quicksetup@latest my-app

# Quick mode with defaults
npx create-quicksetup@latest my-app --yes

# Then
cd my-app
cp .env.example .env.local
pnpm install
pnpm dev
```

---

## Installation

### Prerequisites

- Node.js 20.0.0 or higher
- pnpm 9.0.0 or higher (recommended) or npm/yarn/bun

### Global Installation

```bash
# Using pnpm
pnpm add -g create-quicksetup

# Using npm
npm install -g create-quicksetup

# Using yarn
yarn global add create-quicksetup
```

### One-time Usage

```bash
npx create-quicksetup@latest
```

---

## Usage

### Interactive Mode

Run without arguments to use the interactive wizard:

```bash
create-quicksetup
```

You'll be prompted to configure:
1. Project name
2. Framework
3. Authentication provider
4. Database
5. ORM (if applicable)
6. Payment provider
7. Email provider
8. Analytics
9. UI library
10. Theme
11. Additional modules
12. Package manager

### Quick Mode

Skip prompts and use sensible defaults:

```bash
create-quicksetup my-app --yes
```

**Default configuration:**
- Framework: Next.js 15
- Auth: None
- Database: None
- ORM: None
- Payments: None
- Email: None
- Analytics: None
- UI: shadcn/ui
- Theme: Default
- Modules: None
- Package Manager: pnpm

### CLI Options

| Flag | Description |
|------|-------------|
| `--yes`, `-y` | Use defaults without prompts |
| `--skip-install` | Skip dependency installation |
| `--git` | Initialize git repository (default: true) |
| `--no-git` | Skip git initialization |

---

## Available Options

### Frameworks

| Framework | Status | Version | Description |
|-----------|--------|---------|-------------|
| **Next.js** | ✅ Available | 15.1.3 | React framework with App Router |
| Nuxt | 🔜 Planned | - | Vue.js framework |
| SvelteKit | 🔜 Planned | - | Svelte framework |
| TanStack Start | 🔜 Planned | - | Framework-agnostic |
| Remix | 🔜 Planned | - | React Router v7 |

### Authentication

| Provider | Status | Description |
|----------|--------|-------------|
| **Clerk** | ✅ Available | Best DX, managed auth |
| **Supabase Auth** | ✅ Available | When using Supabase DB |
| Auth.js (NextAuth) | 🔜 Planned | Self-hosted, flexible |
| Better Auth | 🔜 Planned | Modern alternative |
| Lucia | 🔜 Planned | Lightweight |
| WorkOS | 🔜 Planned | Enterprise SSO |
| Kinde | 🔜 Planned | Growing alternative |

**Clerk Integration Includes:**
- `middleware.ts` - Route protection
- `/sign-in` and `/sign-up` pages
- `/dashboard` protected page
- `UserButton` component
- `Providers` wrapper component
- Auth utility functions

### Databases

| Database | Status | Type | Description |
|----------|--------|------|-------------|
| **Supabase** | ✅ Available | PostgreSQL | Full-stack platform |
| **Neon** | ✅ Available | PostgreSQL | Serverless Postgres |
| PlanetScale | 🔜 Planned | MySQL | Serverless MySQL |
| Turso | 🔜 Planned | SQLite | Edge database |
| MongoDB | 🔜 Planned | NoSQL | Document database |
| Convex | 🔜 Planned | Realtime | Reactive backend |

**Supabase Integration Includes:**
- Browser client setup
- Server client setup
- Middleware helpers for auth

### ORMs

| ORM | Status | Supported Databases |
|-----|--------|---------------------|
| **Drizzle** | ✅ Available | PostgreSQL, MySQL, SQLite |
| Prisma | 🔜 Planned | All major databases |

**Drizzle Integration Includes:**
- Database client setup (Neon/Supabase/Turso specific)
- Example schema with users and posts tables
- `drizzle.config.ts` configuration
- Database scripts in package.json

### Payments

| Provider | Status | MoR | Description |
|----------|--------|-----|-------------|
| **Stripe** | ✅ Available | No | Most flexible |
| Polar | 🔜 Planned | Yes | Dev tools focused |
| Paddle | 🔜 Planned | Yes | Global, B2B |
| LemonSqueezy | 🔜 Planned | Yes | Simple, indie |
| Dodo Payments | 🔜 Planned | Yes | Alternative |

**Stripe Integration Includes:**
- Stripe client setup
- Checkout session API route
- Customer portal API route
- Webhook handler with event types
- `PricingCard` component
- `/pricing` page with plans

### Email

| Provider | Status | Description |
|----------|--------|-------------|
| **Resend** | ✅ Available | Modern DX, React Email |
| Postmark | 🔜 Planned | Deliverability focused |
| SendGrid | 🔜 Planned | Scale |
| Mailgun | 🔜 Planned | Transactional |

**Resend Integration Includes:**
- Email client setup
- Welcome email template (React Email)
- Password reset email template
- Email sending API route

### Analytics

| Provider | Status | Description |
|----------|--------|-------------|
| **PostHog** | ✅ Available | Product analytics, feature flags |
| Plausible | 🔜 Planned | Privacy-focused |
| Mixpanel | 🔜 Planned | Event tracking |
| Vercel Analytics | 🔜 Planned | Simple, integrated |

**PostHog Integration Includes:**
- PostHog client setup (browser + server)
- `PostHogProvider` component
- `TrackEvent` component
- `useTrackEvent` hook
- User identification helpers

### UI Libraries

| Library | Status | Description |
|---------|--------|-------------|
| **shadcn/ui** | ✅ Available | Copy-paste components, Tailwind |
| Radix UI | 🔜 Planned | Headless primitives |
| Headless UI | 🔜 Planned | Tailwind Labs |
| Mantine | 🔜 Planned | Full-featured |

**shadcn/ui Integration Includes:**
- All Radix UI primitives pre-installed
- `cn()` utility function
- Tailwind CSS configuration
- CSS variables for theming

### Themes

| Theme | Status | Description |
|-------|--------|-------------|
| **Default** | ✅ Available | Clean, professional (teal/cyan primary) |
| **Startup** | ✅ Available | Bold gradients (violet/fuchsia) |
| **Minimal** | ✅ Available | Black & white, typography-focused |
| SaaS | 🔜 Planned | Indigo, trustworthy |
| Agency | 🔜 Planned | Creative, colorful |

Each theme includes:
- Custom color palette with CSS variables
- Dark mode by default
- Consistent component styling
- Grid background pattern

### Modules

| Module | Status | Description |
|--------|--------|-------------|
| **SEO** | ✅ Available | Metadata, sitemap, robots.txt |
| **Legal Pages** | ✅ Available | Privacy policy, Terms of Service |
| **Landing Pages** | ✅ Available | Hero, Features, CTA, Testimonials, FAQ |
| **Waitlist** | ✅ Available | Email collection for pre-launch |
| Admin Dashboard | 🔜 Planned | User management UI |
| Blog (MDX) | 🔜 Planned | Content management |
| i18n | 🔜 Planned | Internationalization |
| File Uploads | 🔜 Planned | S3/Cloudflare R2 integration |
| AI Integration | 🔜 Planned | OpenAI/Anthropic setup |
| Background Jobs | 🔜 Planned | Queue processing |
| Error Tracking | 🔜 Planned | Sentry integration |

**SEO Module Includes:**
- `createMetadata()` helper function
- `sitemap.ts` dynamic sitemap generator
- `robots.txt` template

**Legal Pages Module Includes:**
- `/privacy` - Privacy policy page
- `/terms` - Terms of service page

**Landing Pages Module Includes:**
- `Hero` component
- `Features` component
- `CTA` component
- `Testimonials` component
- `FAQ` accordion component

**Waitlist Module Includes:**
- `/waitlist` page
- `WaitlistForm` component with loading states
- API route for email collection

---

## Generated Project Structure

```
my-app/
├── public/
│   └── robots.txt              # If SEO module selected
├── src/
│   ├── app/
│   │   ├── (auth)/             # If auth selected
│   │   │   ├── sign-in/
│   │   │   └── sign-up/
│   │   ├── (dashboard)/        # If auth selected
│   │   │   └── dashboard/
│   │   ├── (legal)/            # If legal pages module
│   │   │   ├── privacy/
│   │   │   └── terms/
│   │   ├── (marketing)/        # If payments selected
│   │   │   └── pricing/
│   │   ├── api/
│   │   │   ├── checkout/       # If Stripe selected
│   │   │   ├── customer-portal/
│   │   │   ├── email/          # If email selected
│   │   │   ├── waitlist/       # If waitlist module
│   │   │   └── webhooks/
│   │   │       └── stripe/
│   │   ├── waitlist/           # If waitlist module
│   │   ├── sitemap.ts          # If SEO module
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── analytics/          # If PostHog selected
│   │   ├── auth/               # If auth selected
│   │   ├── landing/            # If landing pages module
│   │   ├── pricing/            # If Stripe selected
│   │   ├── ui/                 # shadcn/ui components
│   │   └── waitlist/           # If waitlist module
│   ├── emails/                 # If Resend selected
│   │   ├── welcome.tsx
│   │   └── reset-password.tsx
│   └── lib/
│       ├── db/                 # If ORM selected
│       │   ├── index.ts
│       │   └── schema.ts
│       ├── supabase/           # If Supabase selected
│       ├── auth.ts             # If auth selected
│       ├── email.ts            # If email selected
│       ├── posthog.ts          # If PostHog selected
│       ├── seo.ts              # If SEO module
│       ├── stripe.ts           # If Stripe selected
│       └── utils.ts
├── drizzle/                    # If Drizzle selected
├── .env.example
├── .env.local
├── .gitignore
├── .prettierrc
├── drizzle.config.ts           # If Drizzle selected
├── middleware.ts               # If auth selected
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

---

## What's Included

### Base Template
- Next.js 15.1.3 with App Router
- React 19.0.0
- TypeScript 5.9.3
- Tailwind CSS 4.1.x with `@tailwindcss/postcss`
- ESLint 9.x with Next.js config
- Prettier 3.x
- Turbopack for development

### Default Landing Page
- Modern dark theme
- Animated hero section
- Tabbed feature showcase
- Pricing cards
- FAQ accordion
- Testimonials
- Responsive design
- Grid background pattern

### Developer Experience
- Type-safe throughout
- Path aliases (`@/`)
- Environment variable templates
- Git initialization
- Comprehensive README generation
- Post-install instructions

---

## What's Not Included (Yet)

### Integrations Not Yet Implemented
- [ ] Auth.js (NextAuth v5)
- [ ] Better Auth
- [ ] Lucia
- [ ] WorkOS
- [ ] Kinde
- [ ] PlanetScale
- [ ] Turso
- [ ] MongoDB
- [ ] Convex
- [ ] Prisma ORM
- [ ] Polar payments
- [ ] Paddle
- [ ] LemonSqueezy
- [ ] Dodo Payments
- [ ] Postmark
- [ ] SendGrid
- [ ] Mailgun
- [ ] Plausible
- [ ] Mixpanel
- [ ] Vercel Analytics
- [ ] Radix UI (standalone)
- [ ] Headless UI
- [ ] Mantine

### Features Not Yet Implemented
- [ ] License key validation
- [ ] `quicksetup add` command (add modules to existing projects)
- [ ] Config file support (`quicksetup.config.ts`)
- [ ] Multiple framework support (Nuxt, SvelteKit, etc.)
- [ ] Admin dashboard module
- [ ] Blog (MDX) module
- [ ] i18n module
- [ ] File uploads module
- [ ] AI integration module
- [ ] Background jobs module
- [ ] Error tracking (Sentry) module
- [ ] Light mode theme variants
- [ ] Custom theme builder
- [ ] Component preview/playground

### Known Limitations
- Interactive mode prompts require TTY (won't work in piped scripts)
- Generated code uses latest versions which may have breaking changes
- Some integrations require manual configuration in provider dashboards
- Waitlist module uses in-memory storage (needs database integration)

---

## Roadmap

### Phase 1: MVP (Current)
- [x] CLI with interactive prompts
- [x] Next.js 15 base template
- [x] Tailwind CSS 4 support
- [x] shadcn/ui integration
- [x] Clerk authentication
- [x] Supabase database
- [x] Neon database
- [x] Drizzle ORM
- [x] Stripe payments
- [x] Resend email
- [x] PostHog analytics
- [x] 3 themes (Default, Startup, Minimal)
- [x] Core modules (SEO, Legal, Landing, Waitlist)

### Phase 2: Feature Complete
- [ ] All authentication providers (7 total)
- [ ] All database providers (6 total)
- [ ] Prisma ORM support
- [ ] All payment providers (5 total)
- [ ] All email providers (4 total)
- [ ] All analytics providers (4 total)
- [ ] All UI libraries (4 total)
- [ ] All themes (5 total)
- [ ] All modules (11 total)
- [ ] License key validation
- [ ] `quicksetup add` command

### Phase 3: Polish & Growth
- [ ] Video tutorials
- [ ] Full documentation site
- [ ] Customer dashboard
- [ ] Template marketplace
- [ ] Community themes

### Phase 4: Multi-Framework
- [ ] Nuxt 4 support
- [ ] SvelteKit support
- [ ] TanStack Start support
- [ ] Remix support

---

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/quicksetup.git
cd quicksetup

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run the CLI locally
node apps/cli/dist/index.js my-test-project --yes
```

### Project Structure

```
quicksetup/
├── apps/
│   ├── cli/                    # Main CLI package (create-quicksetup)
│   │   ├── src/
│   │   │   ├── commands/       # CLI commands
│   │   │   ├── constants/      # Option definitions
│   │   │   ├── utils/          # Helper functions
│   │   │   └── index.ts        # Entry point
│   │   └── package.json
│   ├── web/                    # Marketing site (planned)
│   ├── docs/                   # Documentation site (planned)
│   └── api/                    # License API (planned)
│
├── packages/
│   ├── core/                   # Generation engine
│   │   ├── src/
│   │   │   ├── engine/         # Template engine
│   │   │   ├── generators/     # Project generator
│   │   │   ├── installers/     # Integration installers
│   │   │   ├── types/          # TypeScript types
│   │   │   └── utils/          # Utilities
│   │   ├── templates/          # Template files
│   │   │   ├── analytics/
│   │   │   ├── auth/
│   │   │   ├── base/
│   │   │   ├── database/
│   │   │   ├── email/
│   │   │   ├── modules/
│   │   │   ├── orm/
│   │   │   ├── payments/
│   │   │   └── themes/
│   │   └── package.json
│   │
│   └── license/                # License validation (disabled)
│       └── package.json
│
├── turbo.json                  # Turborepo config
├── pnpm-workspace.yaml         # pnpm workspace config
└── package.json                # Root package.json
```

### Adding a New Integration

1. Create installer in `packages/core/src/installers/{category}/{name}.ts`
2. Create template files in `packages/core/templates/{category}/{name}/files/`
3. Register installer in `packages/core/src/installers/index.ts`
4. Add option to `apps/cli/src/constants/options.ts`
5. Rebuild with `pnpm build`

### Scripts

```bash
# Build all packages
pnpm build

# Build specific package
pnpm --filter @quicksetup/core build

# Clean build artifacts
pnpm clean

# Type check
pnpm typecheck

# Lint
pnpm lint

# Format
pnpm format
```

---

## Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| Monorepo | Turborepo | 2.x |
| Package Manager | pnpm | 9.x |
| Language | TypeScript | 5.7+ |
| CLI Framework | @clack/prompts | Latest |
| CLI Styling | picocolors | Latest |
| Template Engine | EJS | Latest |
| Build Tool | tsup | Latest |

---

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a PR.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Support

- [Documentation](https://docs.quicksetup.dev) (coming soon)
- [Discord Community](https://discord.gg/quicksetup) (coming soon)
- [GitHub Issues](https://github.com/yourusername/quicksetup/issues)
- Email: support@quicksetup.dev

---

## License

This is a proprietary product. See [LICENSE](LICENSE) for details.

---

## Acknowledgments

Built with inspiration from:
- [create-t3-app](https://create.t3.gg/)
- [ShipFast](https://shipfa.st/)
- [shadcn/ui](https://ui.shadcn.com/)

---

<p align="center">
  Made with care by the QuickSet.up team
  <br />
  <strong>Ship your startup in days, not weeks.</strong>
</p>
