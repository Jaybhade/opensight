# OpenSight Landing Page (Oasis)

A premium, conversion-optimized landing page for OpenSight — an Answer Engine Optimization (AEO) platform.

## 🎨 Design System

- **Theme**: Light only (no dark mode)
- **Primary Color**: `#A52502` (red-orange)
- **Typography**: Inter (Google Fonts)
- **Style**: Airy, clean, premium with subtle micro-animations
- **Inspiration**: Aceternity UI, Magic UI, ReactBits

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme tokens
- **Icons**: Lucide React
- **Animations**: Framer Motion (minimal fallback use)
- **Component Philosophy**: shadcn/ui + Radix UI patterns

## 🚀 Quick Start

```bash
# Install dependencies (from monorepo root)
npm install

# Run development server
npm run dev --workspace=@opensight/oasis

# Or from apps/oasis directory
cd apps/oasis
npm run dev
```

Visit [http://localhost:3001](http://localhost:3001)

## 📁 Project Structure

```
apps/oasis/
├── app/
│   ├── globals.css          # Tailwind + custom CSS
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page (assembles all sections)
├── components/
│   ├── brand/                # Brand-specific components
│   │   ├── OpenSightLogo.tsx
│   │   ├── EngineLogos.tsx
│   │   └── IntegrationLogos.tsx
│   ├── sections/             # Landing page sections
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── ProofStrip.tsx
│   │   ├── MarketScale.tsx
│   │   ├── ReportForm.tsx
│   │   ├── FeaturesBento.tsx
│   │   ├── Understanding.tsx
│   │   ├── PromptIntelligence.tsx
│   │   ├── CTAStrip.tsx
│   │   ├── UseCases.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   └── ui/                   # Reusable UI components
│       ├── shimmer-button.tsx
│       └── animated-number.tsx
├── hooks/
│   └── useReducedMotion.ts  # Accessibility hook
├── lib/
│   └── constants.ts          # All copy + configuration
├── AB_TEST_IDEAS.md          # A/B testing experiments
├── COMPONENT_MAPPING.md      # Component source documentation
└── SETUP.md                  # Installation instructions
```

## ✨ Features

### 11 Sections (In Order)

1. **Navbar** - Sticky nav with smooth scroll, shimmer CTA
2. **Hero** - Headlines, benefits, form, engine logos
3. **Proof Strip** - Animated marquee with social proof
4. **Market Scale** - Stats with animated number counters
5. **Report Form** - Lead capture with animated borders
6. **Features Bento** - 4-card grid with hover effects
7. **Understanding** - "How it works" explainer
8. **Prompt Intelligence** - Funnel stage tabs
9. **CTA Strip** - Mid-page conversion point
10. **Use Cases** - Accordion with before/after
11. **FAQ** - Expandable Q&A accordion

### Accessibility

- ✅ Semantic HTML5 (nav, main, section, footer)
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation (Tab, Enter, Space, Arrows)
- ✅ Visible focus rings (ring-2 ring-ring)
- ✅ Color contrast WCAG AA compliant
- ✅ Reduced motion support (`prefers-reduced-motion`)
- ✅ Screen reader friendly

### Performance

- ✅ No continuous animations (only triggered/hover)
- ✅ Intersection Observer for scroll animations
- ✅ Client components only where needed
- ✅ Optimized SVGs (inline, minimal code)
- ✅ No external dependencies for critical path

### Animations

All animations respect `prefers-reduced-motion`. Sources:

- **Shimmer Button** (Magic UI inspired)
- **Animated Numbers** (Magic UI ticker pattern)
- **Marquee** (CSS animation, pauses on hover)
- **Accordion** (shadcn/Radix pattern)
- **Hover Effects** (CSS transforms, subtle)

## 🎯 Copy & Messaging

All copy lives in `/lib/constants.ts` for easy editing.

### Key Messages

- "Shape how AI answers questions about your brand"
- "Track visibility across ChatGPT, Claude, Perplexity, and more"
- "Discover citation gaps. Build content that earns mentions."
- Focus: AEO, answer engines, visibility, citations, content optimization

### Primary CTAs

- "Analyze my brand"
- "Get my free report"
- URL input: "yourdomain.com"

## 🧪 A/B Testing

See `AB_TEST_IDEAS.md` for detailed test plans:

**Test 1: Hero Headlines** (4 variants)
- Control: "Shape how AI answers..."
- Variant A: Problem-focused
- Variant B: Outcome-focused
- Variant C: Data-driven
- Variant D: Action-oriented

**Test 2: Report Offer** (4 variants)
- Control: Standard checklist
- Variant A: Urgency + Scarcity
- Variant B: Social proof
- Variant C: Value-stacking
- Variant D: Two-step micro-commitment

## 🔧 Customization

### Change Brand Color

Edit `apps/oasis/app/globals.css`:

```css
--primary: 13 98% 33%;  /* #A52502 in HSL */
```

To change color, convert your hex to HSL and update this value.

### Update Copy

Edit `apps/oasis/lib/constants.ts`:

```typescript
export const HERO = {
  headline: 'Your new headline here',
  subheadline: 'Your subheadline here',
  // ...
}
```

### Add Section

1. Create component in `components/sections/YourSection.tsx`
2. Import in `app/page.tsx`
3. Add to component tree in desired order
4. Add constants to `lib/constants.ts`

### Modify Animations

Check `useReducedMotion()` hook usage. All animations should:
- Check `prefers-reduced-motion`
- Provide static fallback
- Use `transition-*` classes for CSS-only animations

## 📊 Component Library Sources

See `COMPONENT_MAPPING.md` for full breakdown.

**Primary Influences:**
- [Aceternity UI](https://ui.aceternity.com) - Spotlight, beams, bento grids
- [Magic UI](https://magicui.design) - Shimmer, marquee, number ticker
- [ReactBits](https://reactbits.dev) - Hover effects, tilt cards
- [shadcn/ui](https://ui.shadcn.com) - Accordion, tabs, forms

**Current Implementation:**
- Custom components inspired by above (light theme only)
- No external UI library dependencies (kept lightweight)
- Minimal Framer Motion usage (fallback only)

## 🖼️ Assets & Logos

### Current Implementation

- **Engine Logos**: Generic Lucide icons with labels
- **Integration Logos**: Generic category icons
- **Hero Illustration**: Inline SVG dashboard mock
- **Brand Logo**: Custom SVG "OpenSight" wordmark + eye icon

### Production Recommendations

Install `simple-icons` for brand logos:

```bash
npm install simple-icons
```

Update `EngineLogos.tsx` and `IntegrationLogos.tsx` to import real brand SVGs.

**Legal**: Always include trademark disclaimer (already present in components).

## 🚢 Deployment Checklist

- [ ] Update meta tags (title, description, OG image)
- [ ] Add real testimonials (with permission)
- [ ] Add real customer logos (with permission)
- [ ] Replace generic icons with real brand logos
- [ ] Connect form to backend API
- [ ] Add analytics (GA4, Mixpanel, etc.)
- [ ] Add error tracking (Sentry, etc.)
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit (target 90+ on all metrics)
- [ ] Test with screen readers
- [ ] Verify reduced motion behavior
- [ ] Add legal pages (Privacy, Terms)
- [ ] Set up A/B testing platform

## 🔗 Integration Points

### Form Submission

Currently console.logs. Connect to your backend:

```typescript
// In Hero.tsx, ReportForm.tsx, CTAStrip.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  const response = await fetch('/api/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url, email })
  })

  // Handle response
}
```

### Analytics Events

Add tracking to key interactions:

```typescript
// Example with Google Analytics
onClick={() => {
  gtag('event', 'cta_click', {
    location: 'hero',
    cta_text: 'Analyze my brand'
  })
}}
```

## 📝 License

Part of the OpenSight monorepo. See root LICENSE file.

## 🤝 Contributing

1. Edit copy in `lib/constants.ts` (no code changes needed)
2. For design changes, maintain light theme only
3. For new features, add to new section component
4. Always test reduced motion behavior
5. Ensure keyboard accessibility

## 📞 Support

- Issues: GitHub Issues
- Docs: This README + SETUP.md + COMPONENT_MAPPING.md
- A/B Testing: AB_TEST_IDEAS.md

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
