export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  priceUSD: string;
  period: string;
  priceINR?: string;
  popular?: boolean;
  category: "Graphic Design" | "Digital Marketing" | "Business Consultancy";
  description: string;
  features: string[];
  timeline: string;
  ctaText: string;
}

export const pricingData: PricingTier[] = [
  // Graphic Design
  {
    id: "design-starter",
    name: "Brand Essentials",
    tagline: "For startups & founders needing a distinctive market launch.",
    priceUSD: "$1,850",
    priceINR: "₹1,45,000",
    period: "one-time",
    category: "Graphic Design",
    description: "Full foundational brand identity package to launch with credibility and confidence.",
    features: [
      "Primary, secondary & iconographic logo suite (Vector)",
      "Comprehensive typography hierarchy & color palette tokens",
      "Digital Brand Guidelines PDF manual",
      "Social media profile kit (banners, avatars, post templates)",
      "Business stationery & digital card designs",
      "100% intellectual property ownership & source files",
    ],
    timeline: "2 Weeks",
    ctaText: "Choose Brand Essentials",
  },
  {
    id: "design-growth",
    name: "Complete Brand & Web UI",
    tagline: "For scaling businesses ready to dominate their category.",
    priceUSD: "$3,850",
    priceINR: "₹2,95,000",
    popular: true,
    period: "one-time",
    category: "Graphic Design",
    description: "End-to-end brand identity plus a custom, conversion-optimized Figma UI/UX web design system.",
    features: [
      "Everything in Brand Essentials",
      "Complete Figma UI/UX Web Design (Up to 8 custom responsive pages)",
      "Design System with reusable component tokens & interactions",
      "Packaging / Merch design or Ad creative launch pack (20 assets)",
      "WCAG 2.2 AA accessibility validation",
      "Developer handoff documentation & video walkthrough",
    ],
    timeline: "3–4 Weeks",
    ctaText: "Get Complete Brand & UI",
  },
  {
    id: "design-enterprise",
    name: "Omnichannel Creative Engine",
    tagline: "For high-volume brands needing continuous design velocity.",
    priceUSD: "$2,450",
    priceINR: "₹1,85,000",
    period: "/ month",
    category: "Graphic Design",
    description: "Dedicated monthly creative sprint team delivering high-volume ad creatives, pitch decks, and web assets.",
    features: [
      "Dedicated Senior Art Director & UI Designer",
      "Unlimited creative requests & revisions (Active concurrent sprint)",
      "High-ROAS Meta & Google ad creative batches (Weekly drops)",
      "Landing page CRO redesigns & interactive prototypes",
      "Motion graphics, 2D animations, and social reels assets",
      "Same-day Slack communication & async project management",
    ],
    timeline: "Ongoing Retainer",
    ctaText: "Subscribe to Creative Engine",
  },

  // Digital Marketing
  {
    id: "marketing-starter",
    name: "Organic Search & GEO Foundation",
    tagline: "For companies aiming to rank in Google and AI engines.",
    priceUSD: "$1,650",
    priceINR: "₹1,25,000",
    period: "/ month",
    category: "Digital Marketing",
    description: "Deep technical SEO, Schema microdata, and Generative Engine Optimization to drive passive organic pipeline.",
    features: [
      "Full technical SEO & crawl budget health audit",
      "Generative Engine Optimization (GEO) setup (llms.txt + AI schema)",
      "2 High-intent AEO answer-first pillar articles per month",
      "On-page optimization across 15 core service pages",
      "Monthly search console & AI citation tracking report",
      "Google Business Profile optimization (Local SEO)",
    ],
    timeline: "Monthly (3 Mo. min)",
    ctaText: "Start Organic Scale",
  },
  {
    id: "marketing-growth",
    name: "Full-Funnel Growth Engine",
    tagline: "Our flagship multi-channel acquisition accelerator.",
    priceUSD: "$3,250",
    priceINR: "₹2,45,000",
    popular: true,
    period: "/ month",
    category: "Digital Marketing",
    description: "Combines technical SEO/GEO with high-ROAS paid advertising management on Google & Meta.",
    features: [
      "Everything in Organic Search & GEO Foundation",
      "Full management of Google Ads (Search & PMax) & Meta Ads",
      "Conversion tracking architecture (GA4, Google Enhanced, Meta CAPI)",
      "Dedicated high-converting landing page creation & A/B testing",
      "Bi-weekly ad creative refreshes (copy + graphics)",
      "Real-time Looker Studio ROI & CAC dashboard",
      "Bi-weekly strategic growth review calls",
    ],
    timeline: "Monthly Retainer",
    ctaText: "Launch Growth Engine",
  },

  // Business Consultancy
  {
    id: "consultancy-audit",
    name: "360° Growth & Revenue Audit",
    tagline: "Uncover hidden revenue leaks and actionable scaling paths.",
    priceUSD: "$2,200",
    priceINR: "₹1,65,000",
    period: "one-time",
    category: "Business Consultancy",
    description: "A 2-week intensive diagnostic evaluating your customer acquisition economics, funnel friction, and pricing model.",
    features: [
      "Comprehensive 40+ point marketing & funnel diagnostic scorecard",
      "Unit economic modeling (CAC, LTV, payback period benchmarks)",
      "Competitor positioning & pricing whitespace matrix",
      "Tech stack review & redundant software cost-saving suggestions",
      "Executive 90-day prioritized action roadmap",
      "2-Hour executive debrief & Q&A presentation",
    ],
    timeline: "2 Weeks",
    ctaText: "Book Growth Audit",
  },
  {
    id: "consultancy-retainer",
    name: "Fractional Chief Growth Advisory",
    tagline: "Strategic leadership guiding your team to market leadership.",
    priceUSD: "$3,500",
    priceINR: "₹2,65,000",
    popular: true,
    period: "/ month",
    category: "Business Consultancy",
    description: "Partner with an experienced growth partner to steer go-to-market strategy, pricing restructuring, and team execution.",
    features: [
      "Weekly strategic leadership syncs with founders & leadership",
      "Go-to-Market (GTM) playbook formulation & oversight",
      "Value-based pricing architecture & contract structuring",
      "Direct oversight of marketing & design agency execution",
      "Sales enablement training & pitch deck optimization",
      "Direct WhatsApp / Slack access for urgent strategic decisions",
    ],
    timeline: "Quarterly Retainer",
    ctaText: "Apply for Growth Advisory",
  },
];
