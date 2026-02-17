// OpenSight Landing Page Constants

export const SITE_CONFIG = {
  name: 'OpenSight',
  description: 'See how AI represents your brand. Optimize for the answer engines that shape perception.',
  url: 'https://opensight.com',
}

export const NAV_LINKS = [
  { label: 'Product', href: '#product' },
  { label: 'Use cases', href: '#use-cases' },
  { label: 'Templates & Agents', href: '#features' },
  { label: 'Free report', href: '#report' },
]

export const HERO = {
  headline: 'Shape how AI answers questions about your brand',
  subheadline: 'Track visibility across ChatGPT, Claude, Perplexity, and more. Discover citation gaps. Build content that earns mentions.',
  benefits: [
    'Measure visibility across answer engines',
    'See who gets cited and why',
    'Generate an AEO action plan',
  ],
  cta: 'Analyze my brand',
  urlLabel: 'Enter your website URL',
  urlPlaceholder: 'yourdomain.com',
  reassurance: 'Read-only scan. First insights in minutes.',
  badges: ['Visibility', 'Citations', 'Sentiment', 'Content AEO'],
}

export const SUPPORTED_ENGINES = [
  { name: 'ChatGPT', icon: 'chatgpt' },
  { name: 'Claude', icon: 'claude' },
  { name: 'Gemini', icon: 'gemini' },
  { name: 'Meta AI', icon: 'meta' },
  { name: 'Perplexity', icon: 'perplexity' },
  { name: 'DeepSeek', icon: 'deepseek' },
]

export const PROOF_POINTS = [
  'Tracks multiple answer engines',
  'Finds citation gaps',
  'Surfaces sentiment shifts',
  'Turns insights into briefs',
  'Measures brand perception',
  'Analyzes competitor mentions',
]

export const MARKET_SCALE = {
  title: 'Answer engines shape brand discovery',
  subtitle: 'Millions use AI to discover and evaluate brands. Your visibility matters.',
  disclaimer: 'Industry-reported estimates where available. Some platforms don\'t publish official DAU.',
  engines: [
    { name: 'ChatGPT', dau: '200M+', source: 'OpenAI (Nov 2023)' },
    { name: 'Claude', dau: '10M+', source: 'Anthropic estimates' },
    { name: 'Perplexity', dau: '10M+', source: 'Company reports (2024)' },
    { name: 'Google Gemini', dau: 'Integrated', source: 'Part of Google Search' },
  ],
  additionalStats: [
    { label: 'Zero-click answers', value: '58%', growth: '+12%', description: 'of queries answered without clicking' },
    { label: 'Citation influence', value: '3.2x', growth: 'higher CTR', description: 'when brands get cited' },
  ],
}

export const REPORT_OFFER = {
  title: 'Get your free AEO visibility report',
  subtitle: 'See how answer engines represent your brand — and what to fix.',
  checklist: [
    'AI visibility snapshot across major engines',
    'Citation coverage & missing opportunities',
    'Brand sentiment and descriptor analysis',
    'Competitor co-mentions and context',
    'Topics you own vs topics you\'re missing',
    'Content briefs to earn more citations',
    'Technical signals checklist',
    'Actionable recommendations ranked by impact',
  ],
  cta: 'Get my free report',
  privacy: 'Read-only analysis. No changes to your site.',
  speed: 'First insights delivered within minutes.',
}

export const FEATURES = [
  {
    title: 'Prompt-aware content targeting',
    description: 'Discover what people ask AI — and publish content that matches those prompts.',
    bullets: [
      'Map prompt clusters to funnel stages',
      'Find citation opportunities by topic',
      'Track prompt volume and trends',
    ],
    icon: 'target',
  },
  {
    title: 'Citation-ready template library',
    description: 'Pre-built content structures optimized for answer engine citations.',
    bullets: [
      'Comparison guides and "best of" formats',
      'Problem-solution content patterns',
      'Authority-building resource pages',
    ],
    icon: 'library',
  },
  {
    title: 'Agent workflows with human checkpoints',
    description: 'Automate research and drafting. Review and approve before publish.',
    bullets: [
      'Competitive intelligence agents',
      'Content gap analysis automation',
      'Quality control gates at every stage',
    ],
    icon: 'workflow',
  },
  {
    title: 'Stack integrations',
    description: 'Connect OpenSight to your existing tools for seamless workflows.',
    bullets: [
      'CMS plugins (WordPress, Webflow, Contentful)',
      'Analytics connectors (GA4, Mixpanel)',
      'Collaboration tools (Slack, Notion)',
    ],
    icon: 'integrations',
  },
]

export const UNDERSTANDING = {
  title: 'Understand how AI talks about your brand',
  subtitle: 'AI summaries shape perception. See what gets said — and fix what\'s wrong.',
  measurements: [
    { label: 'Visibility share', description: 'How often you appear vs competitors' },
    { label: 'Mention frequency', description: 'Citation rate across prompts and engines' },
    { label: 'Sentiment & descriptors', description: 'Language AI uses to describe you' },
    { label: 'Co-mentions', description: 'Which competitors appear alongside your brand' },
  ],
  fixes: [
    { problem: 'Unclear positioning', solution: 'Clarify your "About" and entity signals' },
    { problem: 'Missing authority pages', solution: 'Build citation-worthy resource hubs' },
    { problem: 'Weak brand context', solution: 'Strengthen knowledge graph connections' },
    { problem: 'Content gaps', solution: 'Publish what competitors are cited for' },
  ],
  howItWorks: [
    { step: 1, title: 'Map your site + entities', description: 'We index your content and brand signals' },
    { step: 2, title: 'Run structured prompts', description: 'Test visibility across engines and topics' },
    { step: 3, title: 'Deliver action plan', description: 'Content + technical + authority roadmap' },
  ],
}

export const PROMPT_INTELLIGENCE = {
  title: 'Discover what millions of people ask AI',
  subtitle: 'Map prompts to funnel stages. Build content for high-value questions.',
  funnelStages: [
    {
      name: 'Awareness',
      description: 'Broad discovery queries',
      examples: [
        'Best {category} for {persona}',
        'How to solve {problem}',
        'What is {concept} and why does it matter',
      ],
    },
    {
      name: 'Consideration',
      description: 'Comparison and evaluation',
      examples: [
        '{Brand A} vs {Brand B} for {use case}',
        'Top {category} tools compared',
        'Pros and cons of {solution}',
      ],
    },
    {
      name: 'Decision',
      description: 'Intent to purchase or commit',
      examples: [
        'Is {Brand} worth it for {use case}',
        '{Brand} pricing and plans',
        'How to get started with {Brand}',
      ],
    },
    {
      name: 'Support',
      description: 'Post-purchase and retention',
      examples: [
        'How to use {feature} in {Brand}',
        'Troubleshooting {Brand} {issue}',
        '{Brand} best practices for {goal}',
      ],
    },
  ],
}

export const USE_CASES = [
  {
    title: 'Brand Marketing',
    subtitle: 'Shape perception in AI-first discovery',
    before: [
      'Unclear how AI describes your brand',
      'No visibility into sentiment or mentions',
      'Competitors dominate comparison queries',
    ],
    after: [
      'Track brand mentions across all engines',
      'Monitor sentiment and descriptor shifts',
      'Earn citations in high-value comparisons',
    ],
    metrics: ['Topic coverage', 'Citation share', 'Sentiment score'],
  },
  {
    title: 'SEO & Content',
    subtitle: 'Earn citations and build AEO roadmap',
    before: [
      'Traffic declining as AI answers replace clicks',
      'No strategy for zero-click visibility',
      'Content gaps unknown',
    ],
    after: [
      'Identify citation-worthy topics',
      'Build content AI engines source',
      'Track visibility and iterate',
    ],
    metrics: ['Citation rate', 'Prompt coverage', 'Authority score'],
  },
  {
    title: 'PR & Communications',
    subtitle: 'Correct inaccuracies and influence sources',
    before: [
      'AI repeats outdated or wrong info',
      'No control over brand narrative',
      'Competitor messaging dominates',
    ],
    after: [
      'Monitor for misinformation',
      'Strengthen authoritative sources',
      'Influence the answer ecosystem',
    ],
    metrics: ['Accuracy rate', 'Source diversity', 'Narrative control'],
  },
  {
    title: 'Product Marketing',
    subtitle: 'Win comparisons and "best tool" prompts',
    before: [
      'Missing from "best {category}" answers',
      'Competitors cited more frequently',
      'Feature strengths not recognized',
    ],
    after: [
      'Appear in key comparison prompts',
      'Highlight differentiated features',
      'Build category authority',
    ],
    metrics: ['Comparison mentions', 'Feature coverage', 'Category rank'],
  },
]

export const FAQ_ITEMS = [
  {
    question: 'How is OpenSight different from SEO tools?',
    answer: 'Traditional SEO tools track search rankings and organic traffic. OpenSight measures visibility in AI-generated answers across ChatGPT, Claude, Perplexity, and other answer engines. We show you which content gets cited, how AI describes your brand, and what to publish to earn more mentions.',
  },
  {
    question: 'Do you change my website?',
    answer: 'No. OpenSight performs read-only analysis of your site and how answer engines represent you. We provide recommendations and content briefs, but never make changes directly. You maintain full control.',
  },
  {
    question: 'Which answer engines do you support?',
    answer: 'We track visibility across ChatGPT, Claude, Google Gemini, Meta AI, Perplexity, DeepSeek, and other major answer engines. Our platform continuously expands as new engines emerge.',
  },
  {
    question: 'How do you measure citations and sources?',
    answer: 'We run structured prompt suites across answer engines, analyze responses, and identify which sources get cited. We track citation frequency, context, sentiment, and competitive overlap to show you exactly where you appear — and where you\'re missing.',
  },
  {
    question: 'How often is data refreshed?',
    answer: 'We refresh brand visibility data weekly for active accounts. You can trigger on-demand scans anytime for priority topics or after publishing new content.',
  },
  {
    question: 'Is this privacy-friendly?',
    answer: 'Yes. We only analyze publicly available content and answer engine responses. We don\'t access private data, track users, or modify your website. Our scans are read-only.',
  },
  {
    question: 'What do I need to get started?',
    answer: 'Just your website URL. We\'ll generate a free visibility report showing how answer engines currently represent your brand. No credit card required.',
  },
  {
    question: 'Can agencies use this for clients?',
    answer: 'Yes. We offer agency plans with multi-client dashboards, white-label reports, and team collaboration features. Contact us for agency pricing.',
  },
]

export const FOOTER_LINKS = {
  product: [
    { label: 'Overview', href: '#product' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Templates', href: '#features' },
    { label: 'Changelog', href: '/changelog' },
  ],
  solutions: [
    { label: 'Free AEO Report', href: '#report' },
    { label: 'Visibility Tracking', href: '#tracking' },
    { label: 'Prompt Intelligence', href: '#prompts' },
    { label: 'For Agencies', href: '/agencies' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
    { label: 'Security', href: '/security' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Cookie Preferences', href: '/cookies' },
  ],
}

export const SOCIAL_LINKS = [
  { platform: 'X', href: 'https://x.com/opensight', icon: 'x' },
  { platform: 'LinkedIn', href: 'https://linkedin.com/company/opensight', icon: 'linkedin' },
]

export const INTEGRATION_LOGOS = [
  'WordPress',
  'Webflow',
  'Shopify',
  'HubSpot',
  'Notion',
  'Google Analytics',
  'Zapier',
  'Contentful',
]

export const TRADEMARK_DISCLAIMER = 'Logos are trademarks of their respective owners. OpenSight is not affiliated with or endorsed by them.'
