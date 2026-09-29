export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: "Graphic Design" | "Digital Marketing" | "Business Consultancy" | "Multi-Pillar";
  tags: string[];
  featured: boolean;
  shortDescription: string;
  challenge: string;
  approach: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  duration: string;
  servicesProvided: string[];
  visualHighlights: {
    title: string;
    description: string;
    accent: string;
  }[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "zenith-health",
    slug: "zenith-health-ai-rebrand-and-organic-domination",
    title: "How Zenith Health Scaled to 340% Organic Traffic & 4.2x ROAS",
    client: "Zenith Health AI",
    industry: "HealthTech / SaaS",
    category: "Digital Marketing",
    tags: ["SEO & GEO", "Paid Media", "UI/UX Design", "HealthTech"],
    featured: true,
    shortDescription:
      "A complete organic overhaul with Generative Engine Optimization (GEO) and high-intent Meta ad funnels that drove $1.8M in pipeline.",
    challenge:
      "Zenith Health had a revolutionary AI diagnosis tool but zero brand visibility. Their previous agency ran broad search campaigns resulting in high customer acquisition costs ($420 CPA) and completely lacked presence in emerging AI search engines (Perplexity, ChatGPT, Gemini).",
    approach:
      "We engineered a full-funnel digital strategy: rebuilding their brand design system for enterprise authority, deploying AEO direct-answer clusters targeting 450+ medical software queries, implementing technical schema markup for LLM crawlers, and restructuring Meta/Google ad accounts with creative hook testing.",
    solution:
      "Within 90 days, we deployed a lightning-fast Next.js platform with complete JSON-LD medical schema, 45 high-authority comparison guides, and an interactive diagnostic ROI calculator. In parallel, our paid media team launched value-driven video reel creatives testing 12 distinct hooks.",
    metrics: [
      {
        label: "Organic Traffic Growth",
        value: "+342%",
        detail: "Scaled from 12k to 53k monthly organic search visits",
      },
      {
        label: "Blended ROAS",
        value: "4.2x",
        detail: "Reduced CPA from $420 down to $118 per qualified demo",
      },
      {
        label: "AI Engine Citations",
        value: "#1 Cited",
        detail: "Ranked as primary recommendation in Perplexity & ChatGPT queries",
      },
      {
        label: "Attributed Revenue",
        value: "$1.85M",
        detail: "Net new annual recurring revenue closed in 6 months",
      },
    ],
    testimonial: {
      quote:
        "Scalelyt Digital didn't just redesign our website—they transformed our entire customer acquisition engine. Our inbound sales calendar is permanently booked, and seeing our brand cited as the default answer in ChatGPT was mind-blowing.",
      author: "Dr. Marcus Vance",
      role: "Co-Founder & CEO",
      company: "Zenith Health AI",
    },
    duration: "6 Months",
    servicesProvided: [
      "Generative Engine Optimization (GEO)",
      "Technical SEO & Schema Architecture",
      "Paid Performance Ads (Google & Meta)",
      "UI/UX Design & Conversion Rate Optimization",
    ],
    visualHighlights: [
      {
        title: "Enterprise UI Design System",
        description: "Dark-mode medical grade UI with 99.4% accessibility score",
        accent: "from-cyan-500 to-blue-600",
      },
      {
        title: "High-Converting Interactive Diagnostic Calculator",
        description: "Generated 1,420+ qualified enterprise leads in 90 days",
        accent: "from-emerald-500 to-teal-600",
      },
      {
        title: "AI Answer Optimization Hub",
        description: "Capturing 18 featured snippets and zero-click answers",
        accent: "from-purple-500 to-indigo-600",
      },
    ],
  },
  {
    id: "lumina-organics",
    slug: "lumina-organics-d2c-rebrand-packaging-growth",
    title: "Redesigning Lumina Organics: 280% D2C Revenue Surge & Global Retail Placement",
    client: "Lumina Organics",
    industry: "D2C / E-commerce",
    category: "Graphic Design",
    tags: ["Brand Identity", "Packaging Design", "Social Creatives", "E-commerce"],
    featured: true,
    shortDescription:
      "A luxurious packaging overhaul and vibrant social creative system that secured placement in 140+ premium retailers and 3.8x online sales.",
    challenge:
      "Lumina Organics had pristine organic skincare formulations, but their generic packaging blended into crowded shelves. Online conversion stood at a disappointing 1.2%, and boutique retailers were reluctant to stock them.",
    approach:
      "We executed an end-to-end luxury rebrand. We developed custom botanical vector illustrations, engineered tactile embossed packaging die-lines with sustainable foil accents, redesigned their Shopify store for frictionless mobile checkout, and built a monthly sprint system for Meta video ads.",
    solution:
      "The new identity positioned Lumina as an aspirational yet approachable clean-beauty icon. We rolled out 8 SKU packaging lines, custom unboxing mailers, and a suite of 40+ thumb-stopping social video creatives highlighting the organic farm-to-bottle story.",
    metrics: [
      {
        label: "Online Revenue Growth",
        value: "+280%",
        detail: "Year-over-year e-commerce sales explosion",
      },
      {
        label: "Store Conversion Rate",
        value: "3.9%",
        detail: "Lifted from 1.2% benchmark through mobile-first UX",
      },
      {
        label: "Retail Distribution",
        value: "140+ Stores",
        detail: "Picked up by luxury departmental chains across 3 countries",
      },
      {
        label: "Social Engagement Rate",
        value: "8.4%",
        detail: "Viral unboxing videos driving millions of organic views",
      },
    ],
    testimonial: {
      quote:
        "The packaging design Scalelyt Digital created literally opened doors for us into luxury retailers that had ignored us for two years. Our brand looks world-class, and our online customer acquisition has never been stronger.",
      author: "Elena Rostova",
      role: "Founder & Creative Director",
      company: "Lumina Organics",
    },
    duration: "4 Months",
    servicesProvided: [
      "Master Brand Identity & Vector Guidelines",
      "Sustainable Luxury Packaging Engineering",
      "E-commerce UI/UX Design System",
      "High-Converting Social Media Video Creatives",
    ],
    visualHighlights: [
      {
        title: "Tactile Foil Packaging Suite",
        description: "Custom die-cut sustainable boxes with blind deboss details",
        accent: "from-amber-400 to-rose-500",
      },
      {
        title: "Frictionless Mobile Checkout Flow",
        description: "One-click Apple Pay & Google Pay streamlined checkout",
        accent: "from-emerald-400 to-cyan-500",
      },
    ],
  },
  {
    id: "strata-logistics",
    slug: "strata-logistics-b2b-gtm-and-consultancy-turnaround",
    title: "Strata Logistics: $4.2M Pipeline Generated Through GTM Restructuring",
    client: "Strata Global Logistics",
    industry: "B2B Supply Chain / Enterprise",
    category: "Business Consultancy",
    tags: ["Growth Strategy", "Brand Positioning", "Marketing Audit", "B2B"],
    featured: true,
    shortDescription:
      "Repositioning a traditional freight brokerage into a tech-forward supply chain orchestrator, unlocking 65% higher contract values.",
    challenge:
      "Strata was trapped in brutal price wars against low-cost freight brokers. Their sales cycles dragged on for 7+ months with anemic win rates (18%), and their value proposition failed to articulate their multi-million dollar tracking software.",
    approach:
      "Our consultancy team conducted a comprehensive 360° revenue audit, interviewing enterprise supply chain directors and analyzing lost deals. We discovered clients were willing to pay a premium for guaranteed cargo visibility and customs predictability.",
    solution:
      "We restructured their service tiers into value-based enterprise packages, redesigned their sales enablement collateral, established automated LinkedIn account-based marketing (ABM) funnels, and trained their sales team on consultative closing.",
    metrics: [
      {
        label: "Enterprise Pipeline",
        value: "$4.2M+",
        detail: "Generated in qualified enterprise contract opportunities",
      },
      {
        label: "Average Deal Size (ACV)",
        value: "+65%",
        detail: "Shifted from transactional loads to annual managed contracts",
      },
      {
        label: "Sales Cycle Velocity",
        value: "-48%",
        detail: "Shortened deal closure from 210 days down to 108 days",
      },
      {
        label: "Proposal Win Rate",
        value: "46%",
        detail: "Up from 18% through value-anchored proposals",
      },
    ],
    testimonial: {
      quote:
        "Scalelyt Digital didn't give us generic consultant fluff. They provided a surgical diagnosis of our pricing weaknesses, gave our sales reps tools that actually close deals, and fundamentally shifted how the industry perceives us.",
      author: "Vikram Singhania",
      role: "Managing Director",
      company: "Strata Global Logistics",
    },
    duration: "5 Months",
    servicesProvided: [
      "Go-to-Market (GTM) Strategy & Realignment",
      "Value-Based Enterprise Pricing Architecture",
      "Executive Pitch Deck & Sales Enablement System",
      "Account-Based Marketing (ABM) Strategy",
    ],
    visualHighlights: [
      {
        title: "Enterprise Value Matrix",
        description: "Interactive ROI proposal tool used by enterprise reps",
        accent: "from-blue-600 to-indigo-700",
      },
      {
        title: "Strategic Positioning Playbook",
        description: "Comprehensive 80-page sales enablement and narrative guide",
        accent: "from-teal-500 to-emerald-600",
      },
    ],
  },
  {
    id: "finpulse-saas",
    slug: "finpulse-saas-conversion-engine",
    title: "FinPulse: From 0.8% to 4.6% Sign-up Rate & Series-A Launch",
    client: "FinPulse Analytics",
    industry: "FinTech / SaaS",
    category: "Graphic Design",
    tags: ["UI/UX Design", "Landing Page CRO", "Brand Guidelines"],
    featured: false,
    shortDescription:
      "A high-velocity SaaS design sprint that turned a technical API into an intuitive financial dashboard, helping founders raise $6M Series A.",
    challenge:
      "FinPulse had powerful financial data aggregation APIs, but their user portal was clunky, causing 75% of trial users to drop off before setting up their first dashboard.",
    approach:
      "We rebuilt the web application UI from scratch, introducing atomic design components, lightning-fast onboarding tours, and a crystal-clear pricing page with self-serve checkout.",
    solution:
      "Modern SaaS landing pages, interactive product tours, and dark-mode data visualizations that immediately demonstrated ROI to financial analysts.",
    metrics: [
      { label: "Trial-to-Paid Conversion", value: "+380%", detail: "From 0.8% to 3.9% paid conversion" },
      { label: "Time-to-Value", value: "< 3 mins", detail: "Down from 35 minutes for first API report" },
      { label: "Capital Raised", value: "$6.0M", detail: "Closed Series-A round post design revamp" },
    ],
    testimonial: {
      quote:
        "The interface Scalelyt created was pivotal in our Series A pitch. Investors immediately understood our product without us having to explain the raw code.",
      author: "Sarah Lin",
      role: "CTO & Co-Founder",
      company: "FinPulse",
    },
    duration: "8 Weeks",
    servicesProvided: ["SaaS Product Design (Figma)", "Conversion Rate Optimization (CRO)", "Interactive Design System"],
    visualHighlights: [
      { title: "Real-time Financial Dashboards", description: "Clean data viz with micro-charts", accent: "from-cyan-500 to-blue-500" },
    ],
  },
  {
    id: "apex-dental",
    slug: "apex-dental-local-seo-domination",
    title: "Apex Dental: Dominating 24 Local Suburbs & 310 Monthly Patient Inquiries",
    client: "Apex Dental Centers",
    industry: "Healthcare / Local Services",
    category: "Digital Marketing",
    tags: ["Local SEO", "Google Business Profile", "AEO", "PPC"],
    featured: false,
    shortDescription:
      "Local SEO domination, automated patient review capture, and hyper-targeted Google Local Service Ads across 6 clinic branches.",
    challenge:
      "Apex opened 4 new multi-specialty dental clinics but relied purely on walk-ins and expensive print flyers with negative ROI.",
    approach:
      "We deployed programmatic local landing pages for 24 high-income suburbs, optimized their Google Business Profiles with 500+ verified 5-star patient reviews, and set up Google Call Ads with automated call tracking.",
    solution:
      "Ranked #1 in the Google Local 3-Pack for 'Invisalign dentist near me' and 'emergency dental Pune' across all targeted locations.",
    metrics: [
      { label: "Monthly Patient Inquiries", value: "310+", detail: "Tracked phone calls & online bookings" },
      { label: "Cost-Per-Acquisition", value: "$32", detail: "72% lower than national healthcare averages" },
      { label: "Google Review Score", value: "4.9★", detail: "Over 850 verified reviews collected" },
    ],
    testimonial: {
      quote:
        "Our chairs are completely booked 3 weeks in advance. The phone literally rings non-stop thanks to Scalelyt's local search strategy.",
      author: "Dr. Rajesh Kulkarni",
      role: "Chief Dental Surgeon",
      company: "Apex Dental Centers",
    },
    duration: "4 Months",
    servicesProvided: ["Local SEO & Map Pack Optimization", "Google Ads & Call Only Campaigns", "Review Automation Funnel"],
    visualHighlights: [
      { title: "Local Booking Funnel", description: "Mobile-optimized 3-step appointment scheduler", accent: "from-emerald-500 to-cyan-500" },
    ],
  },
  {
    id: "veritas-consulting",
    slug: "veritas-consulting-brand-repositioning",
    title: "Veritas Advisory: Repositioning for $50k+ Advisory Engagements",
    client: "Veritas Advisory Group",
    industry: "Management Consulting",
    category: "Business Consultancy",
    tags: ["Brand Positioning", "Content Strategy", "Thought Leadership"],
    featured: false,
    shortDescription:
      "Elevating a boutique consulting firm's perception to compete directly against Big 4 advisory firms.",
    challenge:
      "Veritas struggled to justify premium advisory fees because their digital footprint looked like a solo practitioner from 2012.",
    approach:
      "We overhauled their brand narrative, built a high-authority publication hub with downloadable executive whitepapers, and scripted weekly LinkedIn video insights for their managing partners.",
    solution:
      "A prestigious brand presence that established undeniable domain authority, landing Fortune 500 advisory retainers.",
    metrics: [
      { label: "Average Retainer Size", value: "$52,000", detail: "Up from $12,000 historical average" },
      { label: "Executive Inbound Leads", value: "14 / month", detail: "Direct outreach from VP & C-Suite leaders" },
      { label: "LinkedIn Follower Growth", value: "+450%", detail: "Established partners as top industry voices" },
    ],
    testimonial: {
      quote:
        "We are now closing deals alongside McKinsey and Deloitte at rates we previously thought impossible for an independent firm.",
      author: "Arthur Sterling",
      role: "Senior Partner",
      company: "Veritas Advisory Group",
    },
    duration: "3 Months",
    servicesProvided: ["Executive Brand Positioning", "Whitepaper & Thought Leadership Strategy", "Website Architecture"],
    visualHighlights: [
      { title: "Executive Report Template", description: "Premium dark-aesthetic digital publications", accent: "from-purple-600 to-indigo-800" },
    ],
  },
];
