# OpenSight Landing Page Setup

## Installation Steps

### 1. Install Dependencies

```bash
cd apps/oasis
npm install framer-motion simple-icons @lordicon/react
```

### 2. Install shadcn/ui Components

```bash
npx shadcn@latest init
# Choose: TypeScript, Tailwind, App Router
# Base color: Neutral
# CSS variables: Yes

# Install required shadcn components
npx shadcn@latest add accordion tabs dialog tooltip form input button
```

### 3. Component Library Integration

For Aceternity UI / Magic UI / ReactBits components:
- Create `/components/ui/aceternity/` directory
- Copy components directly from https://ui.aceternity.com/components
- Modify only for light theme (remove dark mode variants)

Required Aceternity components:
- Spotlight (hero background)
- Animated Beam (form borders)
- Shimmer Button (CTAs)

Required Magic UI components:
- Number Ticker (stats)
- Marquee (proof strip)
- Animated Border (cards)

### 4. Lordicon Setup

Lordicon is loaded via CDN script in layout.tsx.
For reduced motion support, fallback to static Lucide icons.

### 5. Asset Sources

- **Engine Logos**: Use simple-icons package for ChatGPT, Claude, Perplexity
- **Missing Logos**: SVG fallbacks for DeepSeek, Meta AI
- **Integration Logos**: simple-icons for WordPress, Shopify, HubSpot, etc.
- **Icons**: Lordicon for interactive, Lucide for static

### 6. Environment

No environment variables required for landing page.
Form submissions would connect to your backend API.

### 7. Run Development Server

```bash
npm run dev
```

Visit: http://localhost:3001
