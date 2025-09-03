# Consaience Partners Landing Page - Developer Guide

> **Complete developer guide for the Consaience Partners landing page. Everything you need to know to modify, extend, and maintain this codebase.**

## 🚀 Quick Start

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build
```

**Visit:** `http://localhost:3000`

---

## 📁 Complete File Structure & What Each File Does

```
frontend/
├── 📄 package.json                    # Dependencies & scripts
├── 📄 tailwind.config.ts              # Tailwind configuration
├── 📄 next.config.mjs                 # Next.js configuration
├── 📄 tsconfig.json                   # TypeScript configuration
├── 📄 vitest.config.ts                # Unit test configuration
├── 📄 playwright.config.ts            # E2E test configuration
│
├── 📁 src/
│   ├── 📁 app/                        # Next.js App Router
│   │   ├── 📄 layout.tsx              # 🎯 ROOT LAYOUT - Header, Footer, Providers
│   │   ├── 📄 page.tsx                # 🎯 HOMEPAGE - Main landing page
│   │   ├── 📄 globals.css             # 🎯 GLOBAL STYLES - CSS variables, typography
│   │   ├── 📄 robots.txt              # SEO robots file
│   │   ├── 📄 sitemap.xml             # SEO sitemap
│   │   │
│   │   ├── 📁 (marketing)/            # Marketing pages group
│   │   │   ├── 📄 layout.tsx          # Marketing layout (currently unused)
│   │   │   ├── 📄 page.tsx            # Marketing homepage (redirects to root)
│   │   │   │
│   │   │   ├── 📁 _components/        # 🎯 ALL REUSABLE COMPONENTS
│   │   │   │   ├── 📄 Header.tsx              # Navigation bar
│   │   │   │   ├── 📄 Footer.tsx              # Footer section
│   │   │   │   ├── 📄 ParallaxHero.tsx        # Hero section with parallax
│   │   │   │   ├── 📄 CapabilitiesGrid.tsx    # Product capabilities grid
│   │   │   │   ├── 📄 StickyPanels.tsx        # "How it works" sticky panels
│   │   │   │   ├── 📄 SplitReveal.tsx         # Two-column reveal sections
│   │   │   │   ├── 📄 MetricTiles.tsx         # Key metrics display
│   │   │   │   ├── 📄 LogoMarquee.tsx         # Trust logos marquee
│   │   │   │   ├── 📄 ResourcesTeasers.tsx    # Resource previews
│   │   │   │   ├── 📄 CTAEndcap.tsx           # Final call-to-action
│   │   │   │   ├── 📄 StructuredData.tsx      # JSON-LD SEO data
│   │   │   │   ├── 📄 ScrollProgress.tsx      # Top scroll progress bar
│   │   │   │   ├── 📄 BackgroundElements.tsx  # 🎨 Background SVG shapes
│   │   │   │   ├── 📄 FloatingElements.tsx    # 🎨 Floating dots animation
│   │   │   │   ├── 📄 AnimatedLines.tsx       # 🎨 SVG line animations
│   │   │   │   └── 📄 TextReveal.tsx          # 🎨 Staggered text animation
│   │   │   │
│   │   │   ├── 📁 contact/            # Contact form page
│   │   │   │   └── 📄 page.tsx        # Contact form with validation
│   │   │   ├── 📁 product/            # Product page
│   │   │   │   └── 📄 page.tsx        # Product details
│   │   │   ├── 📁 privacy/            # Privacy policy
│   │   │   │   └── 📄 page.tsx        # Privacy page
│   │   │   ├── 📁 security/           # Security page
│   │   │   │   └── 📄 page.tsx        # Security details
│   │   │   └── 📁 status/             # Status page
│   │   │       └── 📄 page.tsx        # System status
│   │   │
│   │   └── 📁 components/             # Legacy components (SaveBoost)
│   │       ├── 📄 SavingAllocator.tsx # Old component
│   │       ├── 📄 SignUpButton.tsx    # Old component
│   │       └── 📁 ui/                 # shadcn/ui components
│   │           ├── 📄 button.tsx      # Button component
│   │           ├── 📄 card.tsx        # Card component
│   │           └── 📄 input.tsx       # Input component
│   │
│   ├── 📁 lib/                        # 🎯 UTILITY LIBRARIES
│   │   ├── 📄 utils.ts                # General utilities
│   │   ├── 📄 content.ts              # Content loading utilities
│   │   ├── 📄 motion.ts               # Motion utilities & hooks
│   │   └── 📁 adtech/                 # 🎯 ADTECH INTEGRATION SYSTEM
│   │       ├── 📄 types.ts            # TypeScript interfaces
│   │       ├── 📄 adapter-mock.ts     # Mock adtech implementation
│   │       ├── 📄 index.ts            # Adtech factory
│   │       ├── 📄 provider.tsx        # React context provider
│   │       └── 📄 hooks.ts            # useAdtech hook
│   │
│   ├── 📁 assets/                     # Static assets
│   │   ├── 📁 images/                 # Image files
│   │   └── 📁 icons/                  # Icon files
│   │
│   └── 📁 test/                       # Test utilities
│       └── 📄 setup.ts                # Test setup configuration
│
├── 📁 content/                        # 🎯 CONTENT MANAGEMENT
│   └── 📄 home.json                   # Homepage content (EDIT THIS!)
│
├── 📁 tests/                          # E2E tests
│   ├── 📄 motion.spec.ts              # Motion behavior tests
│   └── 📄 adtech.spec.ts              # Adtech integration tests
│
└── 📁 src/lib/                        # Unit tests
    ├── 📄 motion.test.ts              # Motion utilities tests
    └── 📄 adtech/                     # Adtech tests
        └── 📄 adapter-mock.test.ts    # Mock adapter tests
```

---

## 🎯 Key Files You'll Modify Most Often

### 1. **Content & Copy** 📝
```bash
📄 content/home.json                   # 🎯 MAIN CONTENT FILE
```
**What it contains:** All homepage text, headlines, CTAs, metrics, etc.
**How to edit:** Just modify the JSON - changes appear instantly

### 2. **Styling & Design** 🎨
```bash
📄 src/app/globals.css                 # 🎯 GLOBAL STYLES
📄 tailwind.config.ts                  # 🎯 TAILWIND CONFIG
```
**What it contains:** CSS variables, typography, color scheme
**How to edit:** Modify CSS variables for brand colors, typography

### 3. **Navigation & Layout** 🧭
```bash
📄 src/app/(marketing)/_components/Header.tsx    # 🎯 NAVIGATION
📄 src/app/layout.tsx                            # 🎯 ROOT LAYOUT
```
**What it contains:** Navigation links, header styling, page structure
**How to edit:** Add/remove nav links, change header appearance

### 4. **Visual Effects** ✨
```bash
📄 src/app/(marketing)/_components/BackgroundElements.tsx  # 🎯 BACKGROUND SHAPES
📄 src/app/(marketing)/_components/FloatingElements.tsx    # 🎯 FLOATING DOTS
📄 src/app/(marketing)/_components/AnimatedLines.tsx       # 🎯 LINE ANIMATIONS
```
**What it contains:** All the subtle background animations
**How to edit:** Adjust opacity, intensity, colors, motion patterns

---

## 🎨 Visual Effects System

### Background Elements (`BackgroundElements.tsx`)
**What it does:** Renders subtle SVG shapes that move with scroll
**Variants:**
- `hero` - Large geometric shapes for hero section
- `section` - Grid patterns and dots for content sections  
- `cta` - Bold elements for call-to-action sections

**How to modify:**
```typescript
// Change intensity levels
const motionMultipliers = {
  subtle: { y: 20, opacity: 0.08, scale: 0.02 },    // Very subtle
  medium: { y: 40, opacity: 0.12, scale: 0.04 },    // Noticeable
  strong: { y: 60, opacity: 0.18, scale: 0.06 },    // Prominent
};

// Change colors by modifying strokeOpacity values
strokeOpacity="0.3"  // Make more visible
strokeOpacity="0.1"  // Make more subtle
```

### Floating Elements (`FloatingElements.tsx`)
**What it does:** Creates floating dots that move independently
**Controls:**
- `count` - Number of dots (default: 5)
- `intensity` - Motion amount (subtle/medium/strong)
- `size` - Dot size (small/medium/large)

**How to modify:**
```typescript
// In components, change these props:
<FloatingElements 
  count={8}           // More dots
  intensity="medium"  // More motion
  size="large"        // Bigger dots
/>
```

### Animated Lines (`AnimatedLines.tsx`)
**What it does:** Draws SVG lines that animate with scroll
**Variants:**
- `diagonal` - Diagonal lines for hero
- `horizontal` - Horizontal lines for sections
- `grid` - Grid pattern for backgrounds

---

## 🎯 Component Usage Guide

### Homepage Structure (`src/app/page.tsx`)
```typescript
// This is the main homepage - edit this to change page structure
export default function HomePage() {
  return (
    <>
      <ParallaxHero {...homeContent.hero} />           // Hero section
      <CapabilitiesGrid {...homeContent.capabilities} /> // Product features
      <StickyPanels {...homeContent.howItWorks} />     // How it works
      <SplitReveal>...</SplitReveal>                   // Enterprise section
      <MetricTiles {...homeContent.metrics} />         // Key metrics
      <LogoMarquee {...homeContent.hero.trustLogos} /> // Trust logos
      <ResourcesTeasers {...homeContent.resources} />  // Resources
      <CTAEndcap {...homeContent.ctaEndcap} />         // Final CTA
    </>
  );
}
```

### Adding New Sections
1. Create component in `_components/`
2. Add to homepage in `page.tsx`
3. Add content to `home.json`
4. Import and use

---

## 🎨 Styling System

### CSS Variables (`globals.css`)
```css
:root {
  /* Brand Colors */
  --bg: 0 0% 100%;           /* White background */
  --fg: 0 0% 0%;             /* Black text */
  --muted: 0 0% 96%;         /* Light gray */
  --border: 0 0% 90%;        /* Border gray */
  --accent: 0 0% 0%;         /* Accent black */
  
  /* Typography */
  --font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  /* Layout */
  --spacing-unit: 8px;       /* Base spacing unit */
  --section-padding: 96px;   /* Section padding */
}
```

### How to Change Colors
1. **Brand Colors:** Modify CSS variables in `globals.css`
2. **Component Colors:** Use Tailwind classes or CSS variables
3. **Motion Colors:** Edit stroke/fill colors in background components

---

## 🔧 Adtech Integration System

### How It Works
```typescript
// 1. Provider setup (automatic)
<AdtechProvider>  // In layout.tsx

// 2. Usage in components
const { trackEvent, identify } = useAdtech();

// 3. Track events
await trackEvent('cta_click', { location: 'hero' });
await identify({ userId: '123', company: 'Acme Corp' });
```

### Mock vs Real Implementation
- **Development:** Uses mock adapter (logs to console)
- **Production:** Set `NEXT_PUBLIC_ADTECH_PROVIDER=real` to use real provider
- **Files:** `lib/adtech/adapter-mock.ts` (mock), `lib/adtech/index.ts` (factory)

---

## 🧪 Testing System

### Unit Tests
```bash
yarn test              # Run tests in watch mode
yarn test:run          # Run tests once
yarn test:ui           # Run with UI
```

### E2E Tests
```bash
yarn test:e2e          # Run e2e tests
yarn test:e2e:ui       # Run with UI
```

### What's Tested
- Motion utilities and reduced motion support
- Adtech mock functionality
- Form submissions and CTA tracking
- Accessibility features

---

## 🚀 Performance & Accessibility

### Performance Targets
- **Lighthouse Performance:** ≥95
- **Lighthouse Accessibility:** 100
- **LCP:** ≤2.5s
- **CLS:** Good

### Accessibility Features
- **Reduced Motion:** Respects `prefers-reduced-motion`
- **Keyboard Navigation:** Full keyboard support
- **Focus States:** Visible focus indicators
- **Semantic HTML:** Proper heading structure
- **Screen Readers:** ARIA labels and descriptions

### How to Maintain Performance
1. **Only animate `transform` and `opacity`**
2. **Use `next/image` for images**
3. **Lazy load components when possible**
4. **Test with Lighthouse regularly**

---

## 🔧 Common Modifications

### Change Brand Colors
1. Edit CSS variables in `globals.css`
2. Update Tailwind config if needed
3. Test contrast ratios

### Add New Page
1. Create `src/app/(marketing)/new-page/page.tsx`
2. Add to navigation in `Header.tsx`
3. Add to sitemap in `sitemap.xml`

### Modify Animations
1. Edit motion components in `_components/`
2. Adjust intensity levels
3. Test with reduced motion

### Change Content
1. Edit `content/home.json`
2. Add new content sections
3. Update component props

### Add New Visual Effects
1. Create component in `_components/`
2. Follow existing patterns
3. Add to sections as needed
4. Test performance impact

---

## 🐛 Troubleshooting

### Common Issues

**Animations not working:**
- Check if `prefers-reduced-motion` is enabled
- Verify Framer Motion is properly imported
- Check console for errors

**Content not updating:**
- Restart dev server after editing `home.json`
- Check JSON syntax
- Verify component props match content structure

**Performance issues:**
- Check Lighthouse scores
- Verify only `transform`/`opacity` are animated
- Test with reduced motion

**Build errors:**
- Check TypeScript errors
- Verify all imports are correct
- Run `yarn build` to see full error messages

---

## 📋 Development Workflow

### Making Changes
1. **Content:** Edit `content/home.json`
2. **Styling:** Edit `globals.css` or component styles
3. **Components:** Edit files in `_components/`
4. **Pages:** Edit files in `(marketing)/`
5. **Tests:** Add tests for new features

### Testing Changes
1. **Visual:** Check in browser
2. **Performance:** Run Lighthouse
3. **Accessibility:** Test with screen reader
4. **Motion:** Test with reduced motion enabled
5. **Responsive:** Test on mobile/tablet

### Deployment
1. **Build:** `yarn build`
2. **Test:** `yarn start` (production mode)
3. **Deploy:** Push to production
4. **Monitor:** Check performance metrics

---

## 🎯 Quick Reference

### Most Important Files
- `content/home.json` - All content
- `src/app/globals.css` - Styling
- `src/app/(marketing)/_components/` - All components
- `src/app/page.tsx` - Homepage structure

### Key Commands
- `yarn dev` - Start development
- `yarn build` - Build for production
- `yarn test` - Run tests
- `yarn test:e2e` - Run e2e tests

### Environment Variables
- `NEXT_PUBLIC_ADTECH_PROVIDER` - Adtech provider
- `NEXT_PUBLIC_DISABLE_MOTION` - Disable animations

---

**Need help?** Check the component files for detailed comments and examples. Each component is well-documented with TypeScript interfaces and usage examples.