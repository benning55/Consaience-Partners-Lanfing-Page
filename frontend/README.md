# Consaience Partners Landing Page

A modern, enterprise-grade landing page built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features tasteful scroll-linked parallax animations, accessibility-first design, and a mockable adtech integration system.

## 🚀 Quick Start

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with CSS variables
- **Animations**: Framer Motion with reduced motion support
- **Testing**: Vitest (unit) + Playwright (e2e)
- **Content**: JSON-based content management

### Project Structure
```
src/
├── app/
│   ├── (marketing)/          # Marketing pages layout
│   │   ├── _components/      # Reusable components
│   │   ├── page.tsx         # Homepage
│   │   ├── contact/         # Contact form
│   │   └── ...              # Other pages
│   ├── globals.css          # Global styles & CSS variables
│   └── layout.tsx           # Root layout
├── lib/
│   ├── adtech/              # Adtech integration system
│   └── motion.ts            # Motion utilities
└── test/                    # Test setup
```

## 🎨 Design System

### Brand Colors
- **Primary**: Pure black/white monochrome
- **Accent**: Subtle gray variations
- **Typography**: Inter font family
- **Layout**: 8px base grid system

### CSS Variables
```css
--bg: 0 0% 100%;           /* Background */
--fg: 0 0% 0%;             /* Foreground */
--muted: 0 0% 96%;         /* Muted background */
--border: 0 0% 90%;        /* Border color */
--accent: 0 0% 0%;         /* Accent color */
```

## 🎭 Motion & Accessibility

### Reduced Motion Support
The site respects `prefers-reduced-motion` and provides equivalent non-motion experiences:

```typescript
// Motion is automatically disabled when:
// 1. User has prefers-reduced-motion: reduce
// 2. NEXT_PUBLIC_DISABLE_MOTION=true
const shouldReduceMotion = useReducedMotionPref();
```

### Animation Guidelines
- Only animate `transform` and `opacity` properties
- Target 60fps performance
- Provide fallbacks for reduced motion
- Use semantic motion variants

## 📊 Adtech Integration

### Mockable System
The adtech module is provider-agnostic and includes a working mock:

```typescript
// Environment-based provider selection
const provider = process.env.NEXT_PUBLIC_ADTECH_PROVIDER || 'mock';

// Usage in components
const { trackEvent, identify } = useAdtech();
await trackEvent('cta_click', { location: 'hero' });
```

### Available Methods
- `identify(userData)` - Identify users
- `trackEvent(name, properties)` - Track events
- `activateSegment(segmentId, audience)` - Activate segments

## 📝 Content Management

### Homepage Content
Edit `content/home.json` to update homepage copy:

```json
{
  "hero": {
    "eyebrow": "Plug-and-play Adtech",
    "title": "Target the right accounts. Win the right deals.",
    "subtitle": "Consaience Partners snaps into your stack..."
  },
  "capabilities": [...],
  "howItWorks": [...],
  "metrics": [...]
}
```

### Adding New Pages
1. Create page in `src/app/(marketing)/`
2. Add route to sitemap.xml
3. Update navigation in Header component

## 🧪 Testing

### Unit Tests (Vitest)
```bash
yarn test              # Run tests in watch mode
yarn test:run          # Run tests once
yarn test:ui           # Run with UI
```

### E2E Tests (Playwright)
```bash
yarn test:e2e          # Run e2e tests
yarn test:e2e:ui       # Run with UI
```

### Test Coverage
- Motion utilities and reduced motion support
- Adtech mock functionality
- Form submissions and CTA tracking
- Accessibility features

## 🚀 Deployment

### Environment Variables
```bash
NEXT_PUBLIC_ADTECH_PROVIDER=mock    # Adtech provider
NEXT_PUBLIC_DISABLE_MOTION=false    # Disable all motion
```

### Performance Targets
- **Lighthouse Performance**: ≥95
- **Lighthouse Accessibility**: 100
- **LCP**: ≤2.5s
- **CLS**: Good

## 🔧 Development

### Adding New Components
1. Create component in `src/app/(marketing)/_components/`
2. Follow motion and accessibility patterns
3. Add tests for new functionality
4. Update documentation

### Styling Guidelines
- Use CSS variables for colors
- Follow 8px grid system
- Use semantic class names
- Test with reduced motion

## 📋 Open TODOs

1. **MDX Support**: Add MDX for case studies and resources
2. **Analytics**: Integrate real analytics provider
3. **CMS**: Add headless CMS integration
4. **Performance**: Add image optimization
5. **SEO**: Add dynamic meta tags and Open Graph

## 🤝 Contributing

1. Follow TypeScript strict mode
2. Maintain accessibility standards
3. Test with reduced motion
4. Update tests for new features
5. Follow semantic commit messages

## 📄 License

Private - Consaience Partners