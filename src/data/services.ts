export interface SubService {
  id: string;
  name: string;
  slug: string;
  description: string;
  deliverables: string[];
  benefits: string[];
}

export interface ServicePillar {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  heroAnswer: string; // AEO direct answer
  iconName: string;
  gradient: string;
  color: string;
  statsHighlight: {
    metric: string;
    label: string;
  };
  subServices: SubService[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  deliverablesSummary: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: ServicePillar[] = [
  {
    id: "graphic-design",
    slug: "graphic-design",
    title: "Graphic Design & Brand Architecture",
    shortTitle: "Graphic Design",
    tagline: "Visual identities that demand attention and convert visitors into loyal advocates.",
    summary:
      "From bespoke brand identities and logo systems to modern conversion-optimized UI/UX and packaging, we engineer visual assets that elevate your market perceived value.",
    heroAnswer:
      "Scalelyt Digital provides end-to-end graphic design services including brand identity systems, high-converting UI/UX design, packaging, and digital ad creatives designed to increase brand recognition and maximize marketing conversion rates.",
    iconName: "Palette",
    gradient: "from-rose-500 via-purple-500 to-indigo-500",
    color: "#EC4899",
    statsHighlight: {
      metric: "4.8x",
      label: "Higher Brand Recall",
    },
    subServices: [
      {
        id: "logo-brand-identity",
        name: "Logo & Brand Identity Systems",
        slug: "logo-brand-identity",
        description:
          "Comprehensive design systems including responsive logos, color theory palettes, typography pairing, iconography, and master brand guidelines.",
        deliverables: [
          "Master vector logo suite (Primary, secondary, marks)",
          "Interactive digital brand guidelines & style manual",
          "Color tokens & typography hierarchy",
          "Stationery & digital collateral templates",
        ],
        benefits: [
          "Distinctive competitive moat",
          "Instant trust with high-value enterprise buyers",
          "Flawless visual consistency across touchpoints",
        ],
      },
      {
        id: "social-media-creatives",
        name: "Social Media & Advertising Creatives",
        slug: "social-media-creatives",
        description:
          "High-impact ad creatives, carousel storyboards, infographic decks, and promotional graphics optimized for Meta, LinkedIn, and TikTok feeds.",
        deliverables: [
          "Monthly creative sprint packages",
          "A/B creative testing variants (Hooks, imagery, CTAs)",
          "Motion graphics & animated reels assets",
          "Platform-native aspect ratios (1:1, 9:16, 16:9)",
        ],
        benefits: [
          "Lower Cost-Per-Click (CPC)",
          "Higher scroll-stopping thumb-stop ratios",
          "Scalable asset production for ad spend scaling",
        ],
      },
      {
        id: "packaging-print",
        name: "Packaging, Merchandise & Print Design",
        slug: "packaging-print",
        description:
          "Tactile packaging engineering, unboxing experiences, exhibition booth displays, brochures, and retail-ready print collateral.",
        deliverables: [
          "Die-line layouts & print-ready CMYK files",
          "3D photorealistic packaging mockups",
          "Trade show banners & physical brochures",
          "Material & finish finishing specifications",
        ],
        benefits: [
          "Shelf presence that wins against incumbents",
          "Memorable unboxing that spurs organic social sharing",
          "Certified print production oversight",
        ],
      },
      {
        id: "ui-web-design",
        name: "UI/UX & High-Converting Web Design",
        slug: "ui-web-design",
        description:
          "Human-centric, accessible user interfaces for web apps, SaaS dashboards, and landing pages designed strictly for high conversion velocity.",
        deliverables: [
          "Figma design systems & interactive prototypes",
          "Mobile-first responsive wireframes & user flows",
          "WCAG 2.2 AA accessibility compliant components",
          "Design token export for engineering handoff",
        ],
        benefits: [
          "Frictionless checkout and sign-up flows",
          "Lower bounce rates & elevated time on site",
          "Developer-ready atomic component libraries",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Brand Archetype & Discovery",
        description:
          "We dissect your target demographic, competitive whitespace, and value proposition to define your visual personality.",
      },
      {
        step: 2,
        title: "Concept Exploration & Moodboarding",
        description:
          "Rapid iterative exploration of visual directions, mood boards, and aesthetic benchmarks for strategic alignment.",
      },
      {
        step: 3,
        title: "Crafting & Component Design",
        description:
          "Precision vector drafting, typographic styling, and responsive layout testing across devices.",
      },
      {
        step: 4,
        title: "Systematization & Final Delivery",
        description:
          "Packaging files in SVG, WebP, PDF formats with production guidelines ready for marketing and product implementation.",
      },
    ],
    deliverablesSummary: [
      "Vector Logo Suites (AI, EPS, SVG, PNG)",
      "Comprehensive Digital Brand Book (PDF/Notion)",
      "Complete Figma UI/UX Components & Prototypes",
      "Ready-to-run Ad Creatives & Video Hook Templates",
    ],
    faqs: [
      {
        question: "How long does a complete brand identity project take?",
        answer:
          "A comprehensive brand identity typically takes 2 to 4 weeks. This includes stakeholder interviews, market research, initial concept development, refinement rounds, and production of brand guidelines and vector assets.",
      },
      {
        question: "Do you supply source files and full commercial rights?",
        answer:
          "Yes. Upon project completion and sign-off, you receive 100% intellectual property ownership along with all master source files in Figma, Adobe Illustrator, and print-ready formats.",
      },
      {
        question: "How does your graphic design improve marketing conversion?",
        answer:
          "We design with cognitive conversion principles: visual hierarchy guiding user eye paths, contrast ratios prioritizing high-value CTAs, and trust cues that remove buyer hesitation.",
      },
    ],
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing: SEO, AEO, GEO & Paid Ads",
    shortTitle: "Digital Marketing",
    tagline: "Dominating search engines, answer engines, and paid channels to generate predictable qualified pipeline.",
    summary:
      "Multi-channel performance marketing that combines technical SEO, Generative Engine Optimization (GEO), high-ROAS paid media (Google & Meta), and conversion rate optimization (CRO).",
    heroAnswer:
      "Scalelyt Digital delivers full-funnel digital marketing services spanning technical SEO, AI answer engine optimization (GEO/AEO), high-ROAS paid advertising on Meta and Google, and lifecycle content funnels that systematically generate qualified inbound leads.",
    iconName: "TrendingUp",
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    color: "#06B6D4",
    statsHighlight: {
      metric: "+310%",
      label: "Average Organic Lift",
    },
    subServices: [
      {
        id: "seo-aeo-geo",
        name: "SEO, AEO & Generative Engine Optimization (GEO)",
        slug: "seo-aeo-geo",
        description:
          "Optimizing your brand to rank #1 in traditional Google/Bing search while being cited and recommended directly by ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
        deliverables: [
          "Technical schema markup & JSON-LD implementation",
          "LLM crawler indexing strategy (llms.txt, AI robots.txt)",
          "Direct-answer AEO content clusters & entity authority",
          "High-authority white-hat backlink acquisition",
        ],
        benefits: [
          "Future-proof visibility across AI search platforms",
          "Compounding organic traffic without recurring ad spend",
          "Top rankings for high-intent commercial keywords",
        ],
      },
      {
        id: "performance-ads",
        name: "Paid Performance Media (Google & Meta Ads)",
        slug: "performance-ads",
        description:
          "Data-driven paid advertising campaigns across Google Search/Performance Max, Meta (Instagram/Facebook), and LinkedIn targeting high-converting customer segments.",
        deliverables: [
          "Account structure rebuild & server-side tracking (CAPI)",
          "Continuous ad creative testing & audience segmentation",
          "Dedicated conversion-focused landing page design",
          "Real-time ROAS & CPA dashboard reporting",
        ],
        benefits: [
          "Immediate lead generation and scalable customer acquisition",
          "Lower Customer Acquisition Cost (CAC)",
          "Transparent attribution tracking",
        ],
      },
      {
        id: "social-media-marketing",
        name: "Social Media Strategy & Audience Growth",
        slug: "social-media-marketing",
        description:
          "Brand-building social media campaigns across LinkedIn, Instagram, and Twitter/X that establish founder authority and nurture prospects into customers.",
        deliverables: [
          "Monthly content calendar & distribution cadence",
          "Engaging video reels, carousels, and thought-leadership posts",
          "Community engagement and outbound conversation sparks",
          "Influencer & partner co-marketing campaigns",
        ],
        benefits: [
          "Active community advocacy",
          "Consistent top-of-mind brand recognition",
          "Direct inbound lead inquiries from social direct messages",
        ],
      },
      {
        id: "content-email-marketing",
        name: "Content Funnels & Lifecycle Email Marketing",
        slug: "content-email-marketing",
        description:
          "High-value thought leadership articles, lead magnets, automated drip email sequences, and customer retention workflows that monetize your database.",
        deliverables: [
          "Automated welcome & nurture email series",
          "High-converting downloadable lead magnets (checklists, whitepapers)",
          "Segmented weekly newsletters with high open rates",
          "Re-engagement and abandoned inquiry sequences",
        ],
        benefits: [
          "Maximizes lifetime customer value (LTV)",
          "Automates lead qualification without manual sales reps",
          "Builds proprietary audience equity owned by your company",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Full Audit & Tracking Setup",
        description:
          "Deep dive into existing analytics, conversion pixels, technical crawl errors, and competitors' paid ad strategies.",
      },
      {
        step: 2,
        title: "Pillar Strategy & Campaign Launch",
        description:
          "Deploy high-intent search campaigns, GEO content clusters, and high-performing ad creative variants.",
      },
      {
        step: 3,
        title: "Iterative Testing & Optimization",
        description:
          "Aggressive A/B testing of hooks, copy, landing pages, and bid algorithms to trim CPA and maximize conversions.",
      },
      {
        step: 4,
        title: "Scaling & Budget Compounding",
        description:
          "Channeling budget into winning ad sets and expanding organic topic clusters to dominate market share.",
      },
    ],
    deliverablesSummary: [
      "Custom Looker Studio / Real-Time Client Dashboard",
      "Full Technical SEO & GEO Schema Audit",
      "Conversion Tracking Setup (GA4, Meta CAPI, Google Ads)",
      "Bi-weekly Strategy & Performance Review Calls",
    ],
    faqs: [
      {
        question: "What is GEO and how is it different from traditional SEO?",
        answer:
          "Traditional SEO focuses on ranking in list-based search engines like Google and Bing. Generative Engine Optimization (GEO) ensures your brand, data, and value proposition are indexed, cited, and recommended by AI models such as ChatGPT, Perplexity, Gemini, and Claude when users ask for recommendations.",
      },
      {
        question: "How fast will we see results from digital marketing campaigns?",
        answer:
          "Paid advertising campaigns typically generate qualified leads within the first 7 to 14 days of launch. Organic SEO and GEO strategies compound over time, showing significant momentum in organic rankings and AI mentions within 60 to 90 days.",
      },
      {
        question: "What ad spend budget do you recommend starting with?",
        answer:
          "For small to mid-sized businesses, we recommend an initial ad spend budget between $1,500 and $5,000/month (or INR 50,000 to 2,00,000 in India) to gather sufficient statistical data for rapid optimization.",
      },
    ],
  },
  {
    id: "consultancy",
    slug: "consultancy",
    title: "Business Growth Consultancy & Strategy",
    shortTitle: "Business Consultancy",
    tagline: "Strategic clarity, revenue architecture, and operational roadmaps to scale your enterprise sustainably.",
    summary:
      "We partner directly with founders and leadership teams to architect predictable revenue funnels, reposition brand offerings, eliminate operational bottlenecks, and execute go-to-market strategies.",
    heroAnswer:
      "Scalelyt Digital provides business consultancy for SMBs and startups, delivering go-to-market roadmaps, pricing optimization, brand positioning, and marketing technology stack audits that accelerate profitable revenue growth.",
    iconName: "Briefcase",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    color: "#10B981",
    statsHighlight: {
      metric: "3.2x",
      label: "Revenue Acceleration",
    },
    subServices: [
      {
        id: "growth-strategy-gtm",
        name: "Go-to-Market (GTM) & Growth Strategy",
        slug: "growth-strategy-gtm",
        description:
          "Holistic growth blueprints identifying lucrative market segments, customer acquisition channels, product-market fit metrics, and unit economics.",
        deliverables: [
          "90-Day Go-to-Market Execution Roadmap",
          "Unit economics analysis & CAC-to-LTV modeling",
          "Channel prioritization matrix",
          "Quarterly milestone tracking framework",
        ],
        benefits: [
          "Eliminates wasted capital on unproven marketing bets",
          "Aligns leadership and sales teams on singular revenue KPIs",
          "Accelerates time-to-market for new service launches",
        ],
      },
      {
        id: "brand-positioning",
        name: "Strategic Brand Positioning & Pricing Strategy",
        slug: "brand-positioning",
        description:
          "Define an unassailable market category, craft high-leverage value propositions, and restructure pricing packages to unlock higher margins.",
        deliverables: [
          "Category positioning narrative & messaging bible",
          "Competitor feature-pricing benchmark analysis",
          "Value-based pricing and packaging redesign",
          "Sales pitch deck and proposal frameworks",
        ],
        benefits: [
          "Win deals based on value rather than competing on price",
          "Boost average contract value (ACV) by 30-50%",
          "Higher sales close rates from inbound opportunities",
        ],
      },
      {
        id: "marketing-audit-roadmap",
        name: "360° Marketing & Tech Stack Audit",
        slug: "marketing-audit-roadmap",
        description:
          "Comprehensive diagnostic of your marketing campaigns, website conversion friction, CRM workflows, and automation tech stack to pinpoint revenue leaks.",
        deliverables: [
          "Exhaustive 40+ point diagnostic scorecard",
          "Conversion funnel drop-off analysis",
          "Tech stack consolidation & cost-saving suggestions",
          "Prioritized high-impact quick-wins implementation checklist",
        ],
        benefits: [
          "Immediate discovery of hidden conversion leaks",
          "Save thousands annually by eliminating redundant software",
          "Clear executive blueprint with prioritized ROI initiatives",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Executive Deep-Dive & Data Review",
        description:
          "We analyze your financials, sales metrics, customer feedback, and historical marketing data under strict NDA.",
      },
      {
        step: 2,
        title: "Diagnostic Synthesis & Opportunity Mapping",
        description:
          "Pinpoint your greatest growth bottlenecks, pricing anomalies, and untapped customer segments.",
      },
      {
        step: 3,
        title: "Actionable Growth Blueprint",
        description:
          "Deliver the comprehensive roadmap with clear timelines, required resources, and projected ROI milestones.",
      },
      {
        step: 4,
        title: "Guided Implementation & Advisory",
        description:
          "Bi-weekly advisory sprints to ensure your team executes flawlessly and hits target revenue targets.",
      },
    ],
    deliverablesSummary: [
      "Custom 90-Day Revenue Acceleration Roadmap",
      "Executive Financial & Unit Economic Model (Excel/Sheets)",
      "High-Value Pricing & Packaging Playbook",
      "Bi-Weekly Strategic Leadership Advisory Sessions",
    ],
    faqs: [
      {
        question: "How is consultancy delivered—one-time or ongoing?",
        answer:
          "We offer both sprint-based diagnostic audits (e.g. 2-week intensive Growth Audit) and ongoing monthly fractional growth advisory partnerships to guide execution and accountability.",
      },
      {
        question: "What kind of businesses benefit most from your consultancy?",
        answer:
          "Our advisory is specifically tailored for startups, small-to-midsize businesses (SMBs), B2B service firms, and e-commerce founders generating between $100k to $10M in annual revenue looking to scale to the next level.",
      },
      {
        question: "Do you also help execute the recommendations?",
        answer:
          "Yes! Unlike traditional consultants who only hand off a slide deck, our graphic design and digital marketing teams can directly execute every recommendation in the growth roadmap.",
      },
    ],
  },
];
