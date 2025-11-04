# Consaience Partners Marketing Site

Modern landing and marketing experience for Consaience Partners, built with Next.js (App Router) and Tailwind CSS. The site centralises positioning for Salesforce Agentic Solution offerings while keeping all copy and content easily maintainable from structured JSON files.

## Overview

- **Framework:** Next.js 14 (App Router) with TypeScript and Tailwind CSS
- **Purpose:** Present Consaience Partners services, use cases, and contact funnel across six top-level routes (home, about, products & services, use cases, contact, bio)
- **Content Source:** Text comes from the provided Notion export and lives in version-controlled JSON/MD files so non-designers can update copy without touching components

## Getting Started

```bash
yarn install       # install dependencies
yarn dev           # start local dev server (http://localhost:3000)
yarn lint          # run ESLint
yarn build         # create production build
```

## Project Structure

```
frontend/
├── content/
│   ├── home.json              # homepage copy (hero, benefits, how-it-works, metrics, CTAs)
│   └── consaience-notion.md   # raw text exported from Notion for reference
│
├── src/
│   ├── app/                   # Next.js App Router tree
│   │   ├── layout.tsx         # root layout (fonts, providers, global header/footer)
│   │   ├── globals.css        # Tailwind base layer + design tokens
│   │   ├── page.tsx           # home page (parallax hero, benefits, how it works, CTA)
│   │   ├── about/page.tsx     # "About Us" page using supplied mission/philosophy copy
│   │   ├── products-services/page.tsx
│   │   ├── use-cases/page.tsx
│   │   ├── contact/
│   │   │   ├── page.tsx       # contact page metadata + schema
│   │   │   └── ContactForm.tsx# lead form UI/logic
│   │   ├── bio/page.tsx       # placeholder bios page (real profiles pending)
│   │   ├── sitemap.xml        # static sitemap kept in sync with routes
│   │   └── robots.txt
│   │
│   ├── app/(marketing)/_components/
│   │   ├── Header.tsx, Footer.tsx           # global navigation and footer
│   │   ├── ParallaxHero.tsx, CapabilitiesGrid.tsx, StickyPanels.tsx, SplitReveal.tsx,
│   │   │   MetricTiles.tsx, ResourcesTeasers.tsx, CTAEndcap.tsx, LogoMarquee.tsx
│   │   │                                     # reusable marketing sections
│   │   ├── BackgroundElements.tsx, FloatingElements.tsx, AnimatedLines.tsx, TextReveal.tsx
│   │   │                                     # decorative / motion utilities
│   │   └── ScrollProgress.tsx                # scroll indicator used globally
│   │
│   ├── sections/                # legacy SaveBoost sections (FinancialSituation still used)
│   ├── lib/
│   │   ├── content.ts          # exposes structured content (e.g., homeContent)
│   │   ├── motion.ts           # animation helpers + hooks
│   │   ├── motion.test.ts      # unit tests for motion helpers
│   │   └── utils.ts            # general utility functions
│   ├── assets/                 # static imagery and icons
│   └── test/                   # legacy test utilities
│
├── tests/                      # Playwright/Vitest tests from original template
├── package.json                # yarn scripts (dev, build, lint, test)
├── tailwind.config.ts          # Tailwind theme tokens and utilities
├── next.config.mjs             # Next.js configuration
└── README.md                   # this document
```

## Page Responsibilities

- **Home (`/`)** – Hero message, core benefits, three-step “How it works”, KPI metrics, optional logos/resources, end-of-page CTA. Data sourced from `content/home.json`.
- **About Us (`/about`)** – “Who we are”, mission, client focus, philosophy, vision, differentiators exactly as described in the Notion draft.
- **Product & Services (`/products-services`)** – Five offerings (Agentic Solution Implementation, AI-Driven Enquiry Automation, Knowledge & CRM Intelligence Integration, Advisory & Enablement Services, Continuous Optimization & Support) with headline, summary, detailed bullets, and outcome pulled from the source text.
- **Industrial Use Cases (`/use-cases`)** – Two documented scenarios (AI-Powered Contact Center Automation, Retail & eCommerce – Automated Customer Enquiry Resolution) structured Problem → Solution → The system → Impact → Why it works.
- **Contact Us (`/contact`)** – Lead form capturing name, work email, company, role, and project context with client-side validation and JSON-LD `ContactPage` schema.
- **Bio (`/bio`)** – Placeholder message noting that team bios are coming soon and linking back to the contact/about pages.

## Content & Copy Workflow

1. Update `content/home.json` for hero, benefits, how-it-works steps, metrics, and CTA copy.
2. Edit page files under `src/app/.../page.tsx` for other routes; every section mirrors wording from `consaience-notion.md` to avoid invented details.
3. Keep unresolved data questions in `open-questions.md` (e.g., verified KPIs, final CTA labels, contact details, bios).

## Testing & Quality

- `yarn lint` – eslint (Next.js rules + TypeScript) – run before committing.
- `yarn build` – production build plus type checking; should stay clean before deploys.
- Additional template scripts (`yarn test`, `yarn test:e2e`) remain available if automated tests are reintroduced.

## Design & Component Usage

- Use the marketing components in `src/app/(marketing)/_components` to keep motion, spacing, and typography consistent.
- Global tokens, fonts, and utilities live in `src/app/globals.css` and `tailwind.config.ts`.
- Decorative motion helpers (BackgroundElements, FloatingElements, AnimatedLines) encapsulate background visuals—adjust intensity/variant props rather than rewriting styles.

## Deployment Notes

- App Router means each new route lives in its own folder with a `page.tsx` file. Metadata is defined via `export const metadata` per page.
- `sitemap.xml` is static; update manually whenever routes change.
- No runtime data fetching; deploy to any Next.js-compatible hosting (Vercel, Netlify, etc.).

## Support & Housekeeping

- Record outstanding content needs in `open-questions.md`.
- After copy changes, run `yarn lint` and `yarn build` to ensure there are no regressions.
- Refer back to `content/consaience-notion.md` when verifying the accuracy of marketing claims.
