# OpenSight Landing Page - A/B Test Experiments

## Test 1: Hero Headline Variants

### Current (Control)
**Headline**: "Shape how AI answers questions about your brand"

### Variant A: Problem-Focused
**Headline**: "Is AI describing your brand accurately?"
**Subheadline**: "Track how ChatGPT, Claude, and Perplexity represent you. Fix what's wrong. Build content that earns citations."

**Hypothesis**: Problem-first framing creates urgency and emotional connection. Users may engage more if they feel uncertainty about their current AI visibility.

**Expected Impact**: Higher engagement with "Analyze my brand" CTA, but possibly lower conversion if users feel overwhelmed by the problem.

### Variant B: Outcome-Focused
**Headline**: "Get cited by answer engines. Build brand authority in AI."
**Subheadline**: "See where you're visible, where you're missing, and what to publish to earn more mentions across ChatGPT, Claude, Perplexity, and more."

**Hypothesis**: Outcome-driven headline appeals to users who already understand the problem and are looking for solutions. May resonate better with SEO/content teams.

**Expected Impact**: Higher conversion rate among qualified leads, but potentially lower top-of-funnel engagement.

### Variant C: Data-Driven
**Headline**: "300M+ daily AI searches. Is your brand getting mentioned?"
**Subheadline**: "Track visibility across answer engines. Discover citation opportunities. Optimize for the platforms shaping brand perception."

**Hypothesis**: Leading with market size creates FOMO and urgency. Number anchoring may increase perceived importance of the problem.

**Expected Impact**: Higher initial engagement, but may attract tire-kickers. Watch for bounce rate.

### Variant D: Action-Oriented
**Headline**: "Measure, monitor, and improve your answer engine visibility"
**Subheadline**: "See how AI represents your brand. Get actionable insights. Build content that earns citations across ChatGPT, Claude, Perplexity, and more."

**Hypothesis**: Process clarity reduces friction. Users want to know exactly what they'll get and how it works.

**Expected Impact**: Higher trust signals, better conversion quality, but potentially less emotional engagement.

---

## Test 2: Free Report Offer Framing

### Current (Control)
**Title**: "Get your free AEO visibility report"
**CTA**: "Get my free report"
**Checklist**: 8 items (visibility, citations, sentiment, competitors, topics, content briefs, technical signals, recommendations)

### Variant A: Urgency + Scarcity
**Title**: "Get your free visibility audit (limited slots available)"
**CTA**: "Claim my free audit"
**Checklist**: Same 8 items
**New Element**: "⚡ Only 50 audits per week. Next availability: [dynamic date]"

**Hypothesis**: Scarcity increases perceived value and urgency. Users may convert faster if they fear missing out.

**Expected Impact**: Higher conversion rate, but possible quality drop if urgency attracts less-qualified leads. Watch for email/domain quality.

**Risk**: False scarcity damages trust. Only implement if genuinely capacity-constrained.

### Variant B: Social Proof
**Title**: "Get your free AEO visibility report"
**CTA**: "Get my free report"
**New Element Above Checklist**:
"Join 2,500+ brands who've analyzed their AI visibility"
[Logo strip: 6-8 recognizable brand logos]

**Hypothesis**: Social proof reduces risk perception. Seeing known brands increases trust and credibility.

**Expected Impact**: Higher conversion rate among mid-market and enterprise prospects. Less impact on SMB segment.

**Implementation**: Only use actual customer logos with permission. If not available, use testimonial quotes with titles/companies.

### Variant C: Value-Stacking
**Title**: "Get your complete AEO visibility package (free)"
**CTA**: "Get my free package →"
**Checklist**: Reframed with dollar values:
- ✓ AI Visibility Snapshot ($299 value)
- ✓ Citation Gap Analysis ($199 value)
- ✓ Sentiment Report ($149 value)
- ✓ Competitor Benchmarking ($249 value)
- ✓ Content Brief Library ($399 value)
- ✓ Technical AEO Checklist ($99 value)
**New Element**: "Total value: $1,394. Yours free."

**Hypothesis**: Perceived value anchoring increases conversion. Users see the "deal" and don't want to miss free value.

**Expected Impact**: Higher conversion rate, but may attract deal-seekers vs. serious prospects. Watch lead quality metrics.

**Risk**: Can feel salesy or gimmicky. Test carefully and ensure values are defensible.

### Variant D: Two-Step Micro-Commitment
**Step 1 Title**: "See your AI visibility score in 60 seconds"
**Step 1 CTA**: "Check my score →"
**Step 1 Form**: URL only (no email)

**Step 2** (After URL submitted):
**Title**: "Your score: [X]/100"
**Description**: "Get the full report with actionable recommendations"
**Step 2 Form**: Email + Name (optional)
**Step 2 CTA**: "Get my full report"

**Hypothesis**: Lower initial barrier increases top-of-funnel conversions. Progressive disclosure builds trust before asking for email.

**Expected Impact**: 2-3x more URL submissions, but lower email capture rate on first step. Overall may result in more qualified leads who've seen their score first.

**Technical**: Requires real-time scoring API or demo score generation.

---

## Metrics to Track for All Tests

### Primary Metrics
- Conversion rate (URL submitted)
- Email capture rate (if applicable)
- CTA click rate

### Secondary Metrics
- Time on page
- Scroll depth (% who reach the report section)
- Bounce rate
- Form abandonment rate

### Qualitative Metrics
- Lead quality score (if using lead scoring)
- Domain authority of submitted URLs
- Professional email % (vs. Gmail/Yahoo)
- Demo request rate (downstream)

---

## Test Implementation Recommendations

1. **Run sequentially, not simultaneously** - One test at a time for clean data
2. **Minimum sample size**: 1,000 visitors per variant (adjust for your traffic)
3. **Duration**: 2-4 weeks minimum per test (account for weekly cycles)
4. **Significance threshold**: 95% confidence, 10%+ lift to declare winner
5. **Holdout group**: Keep 10% on control even after rolling out winner (for ongoing validation)

---

## Additional Test Ideas (Backlog)

### Test 3: Social Proof Placement
- Control: Testimonial in proof strip only
- Variant: Add customer count + logos near hero CTA
- Variant: Add video testimonial in hero section

### Test 4: Pricing Transparency
- Control: No pricing mentioned
- Variant: "Free forever for 1 domain" badge in hero
- Variant: "See pricing" link in nav

### Test 5: Form Field Optimization
- Control: URL + Email (optional)
- Variant: URL only
- Variant: URL + Email (required) + Company name

### Test 6: CTA Copy
- Control: "Analyze my brand"
- Variant: "Get my free report"
- Variant: "See how AI describes us"
- Variant: "Check my visibility score"

### Test 7: Hero Image vs. No Image
- Control: SVG dashboard illustration
- Variant: Screenshot of actual report
- Variant: Video demo (looping, no sound)
- Variant: No image (text-only hero)
