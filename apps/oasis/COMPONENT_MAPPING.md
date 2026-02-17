# OpenSight Landing Page - Component Mapping

## Section → Component → Source Library

### Section 0: Navbar
- **Component**: `Navbar.tsx`
- **Animations**:
  - Scroll-triggered background blur (custom CSS)
  - Nav link underline slide (CSS transition)
  - Shimmer button (Magic UI inspired)
- **Library**: Custom implementation with Magic UI patterns
- **Modifications**: Light theme only, removed dark mode

### Section 1: Hero
- **Component**: `Hero.tsx`
- **Animations**:
  - ShimmerButton for CTA (Magic UI pattern)
  - Custom SVG dashboard illustration
- **Sub-components**: `EngineLogos` (brand component)
- **Library**: Custom with Magic UI shimmer effect
- **Modifications**: Simplified hero background, light theme gradient

### Section 2: Proof Strip
- **Component**: `ProofStrip.tsx`
- **Animations**:
  - Marquee scroll effect (Magic UI inspired)
  - Pause on hover
  - Respects prefers-reduced-motion
- **Library**: Custom CSS marquee (Magic UI pattern)
- **Modifications**: Slowed animation speed for readability

### Section 3: Market Scale
- **Component**: `MarketScale.tsx`
- **Animations**:
  - AnimatedNumber ticker (Magic UI inspired)
  - Card hover lift (CSS transform)
- **Library**: Custom number ticker with IntersectionObserver
- **Modifications**: Light theme colors, reduced motion support

### Section 4: Free Report Form
- **Component**: `ReportForm.tsx`
- **Animations**:
  - Animated border glow (Aceternity inspired)
  - ShimmerButton (Magic UI)
  - Loading state transitions
- **Library**: Custom with Aceternity border beam pattern
- **Modifications**: Form validation states, accessibility improvements

### Section 5: Feature Bento Grid
- **Component**: `FeaturesBento.tsx`
- **Animations**:
  - Card hover shadow/border transitions
  - Icon color shifts
  - Link arrow slide (CSS transition)
- **Library**: ReactBits/Aceternity bento pattern
- **Modifications**: Simplified layout, light theme only

### Section 6: Understanding
- **Component**: `Understanding.tsx`
- **Animations**:
  - Card hover effects
  - Step connector lines
- **Library**: Custom implementation
- **Modifications**: Clean, minimal animations

### Section 7: Prompt Intelligence
- **Component**: `PromptIntelligence.tsx`
- **Animations**:
  - Tab indicator slide
  - Content fade in/out
  - Card hover tilt (subtle)
- **Library**: Custom tabs with smooth transitions
- **Modifications**: Accessible keyboard navigation

### Section 8: Mid-page CTA Strip
- **Component**: `CTAStrip.tsx`
- **Animations**:
  - Background gradient shift
  - ShimmerButton
- **Library**: Custom with Magic UI shimmer
- **Modifications**: Minimal, performance-focused

### Section 9: Use Cases
- **Component**: `UseCases.tsx`
- **Animations**:
  - Accordion open/close (Radix UI inspired)
  - Chevron rotation
- **Library**: Custom accordion (shadcn/Radix pattern)
- **Modifications**: Custom before/after layout

### Section 10: FAQ
- **Component**: `FAQ.tsx`
- **Animations**:
  - Accordion expand/collapse
  - Icon rotation
- **Library**: Custom accordion (shadcn/Radix pattern)
- **Modifications**: Plus/Minus icons, smooth transitions

### Section 11: Footer
- **Component**: `Footer.tsx`
- **Animations**:
  - Link hover color transitions
  - Social icon hover effects
- **Library**: Custom footer
- **Modifications**: None - simple hover states only

## Utility Components

### ShimmerButton
- **Source**: Magic UI
- **Modifications**: Light theme only, reduced motion support
- **File**: `components/ui/shimmer-button.tsx`

### AnimatedNumber
- **Source**: Magic UI ticker concept
- **Modifications**: Custom IntersectionObserver implementation, reduced motion fallback
- **File**: `components/ui/animated-number.tsx`

### useReducedMotion Hook
- **Source**: Custom
- **Purpose**: Detect prefers-reduced-motion and disable/simplify animations
- **File**: `hooks/useReducedMotion.ts`

## Brand Components

### OpenSightLogo
- **Type**: Custom SVG wordmark with minimal eye icon
- **Variants**: Default (horizontal), Compact (icon + "OS")
- **File**: `components/brand/OpenSightLogo.tsx`
- **Note**: Original design, not copying any trademark

### EngineLogos
- **Type**: Icon grid with fallback glyphs
- **Icons**: Lucide React (generic icons as fallbacks)
- **Note**: In production, use simple-icons package for brand logos where available
- **File**: `components/brand/EngineLogos.tsx`

### IntegrationLogos
- **Type**: Icon grid with fallback glyphs
- **Icons**: Lucide React (generic icons as fallbacks)
- **Note**: In production, use simple-icons package for stack logos
- **File**: `components/brand/IntegrationLogos.tsx`

## Asset Implementation Notes

### Engine Logos (ChatGPT, Claude, Gemini, Meta AI, Perplexity, DeepSeek)
**Current**: Generic Lucide icons with labels
**Production**: Use `simple-icons` npm package
```bash
npm install simple-icons
```
Import specific brand icons and render as SVG paths with neutral colors

### Integration Logos
**Current**: Generic category icons (package, shopping cart, etc.)
**Production**: Use `simple-icons` for WordPress, Shopify, HubSpot, etc.

### Hero Illustration
**Current**: Custom SVG dashboard mock (inline code)
**Production**: Consider:
- Export to separate SVG file
- Use Figma/Illustrator for more detailed design
- Keep under 50KB for performance
- Use Next/Image if converting to raster

### Interactive Icons (Lordicon alternative)
**Current**: Lucide React static icons
**Production**: Options:
1. Add Lordicon script to layout
2. Use Lottie animations (self-hosted .json files)
3. Use CSS animations on Lucide icons
4. Use SVG SMIL animations

## Performance Optimizations

- All animations respect `prefers-reduced-motion`
- Heavy components are client-side only (`'use client'`)
- Images would use Next/Image with priority/lazy loading
- Intersection Observer for scroll-triggered animations (only animate when visible)
- No continuous animations (only triggered by user interaction or scroll)

## Accessibility Features

- Semantic HTML (nav, main, section, footer)
- ARIA labels on icon buttons
- Visible focus rings on all interactive elements
- Keyboard navigation support (tabs, accordions)
- Color contrast meets WCAG AA standards
- Skip to content link (could be added)
- Form labels (visible or sr-only)
