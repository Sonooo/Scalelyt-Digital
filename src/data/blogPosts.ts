export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  directAnswer: string; // 40-60 word AEO Direct Answer
  category: "SEO & GEO" | "Brand Design" | "Growth Strategy" | "Paid Advertising";
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  content: {
    heading: string;
    paragraphs: string[];
    takeaways?: string[];
  }[];
}

export const blogPostsData: BlogPost[] = [
  {
    id: "seo-vs-aeo-vs-geo",
    slug: "seo-vs-aeo-vs-geo-ranking-in-chatgpt-perplexity-and-google",
    title: "SEO vs AEO vs GEO: How to Rank in ChatGPT, Perplexity, and Google in 2026",
    summary:
      "The definitive guide to modern search: understanding the difference between Traditional SEO, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO).",
    directAnswer:
      "SEO optimizes content for traditional search engine result pages (SERPs) like Google and Bing. AEO structures answers for featured snippets and voice search. GEO (Generative Engine Optimization) strategically formats entity data, citations, and schemas so AI engines like ChatGPT, Perplexity, and Gemini cite and recommend your brand directly in AI answers.",
    category: "SEO & GEO",
    author: {
      name: "Siddharth Mehra",
      role: "Head of Growth & Search Intelligence",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
      bio: "10+ years architecting search and generative engine algorithms for global SaaS and enterprise brands.",
    },
    publishedAt: "2026-03-15",
    updatedAt: "2026-04-02",
    readTime: "7 min read",
    tags: ["GEO", "AEO", "Technical SEO", "AI Search", "llms.txt"],
    featured: true,
    content: [
      {
        heading: "1. The Paradigm Shift from 10 Blue Links to AI Answers",
        paragraphs: [
          "For over two decades, digital marketing revolved around ranking in Google's ten blue links. If you targeted the right keywords, built backlinks, and maintained fast site speed, qualified traffic was guaranteed.",
          "Today, users don't just search—they converse with AI models. Over 38% of high-intent queries now bypass traditional search entirely and are resolved directly inside ChatGPT, Perplexity, Claude, or Google AI Overviews. If your agency or business relies solely on legacy SEO, your organic pipeline is at immense risk.",
        ],
        takeaways: [
          "AI search engines provide direct synthesis rather than a list of URLs.",
          "Being 'cited' by an AI engine carries higher buyer intent than a standard link click.",
          "Legacy keyword stuffing causes AI systems to discount your credibility.",
        ],
      },
      {
        heading: "2. Decoding the Three Pillars: SEO, AEO, and GEO",
        paragraphs: [
          "Traditional SEO focuses on crawlability, keyword indexing, and domain authority to achieve high positions on SERPs.",
          "Answer Engine Optimization (AEO) goes a step further: it formats content with direct 40-60 word summaries, structured tables, and FAQ schemas to capture Position Zero featured snippets and voice search devices (Siri, Alexa, Google Assistant).",
          "Generative Engine Optimization (GEO) is the cutting edge. It focuses on entity identity consistency, citable statistical frameworks, rich JSON-LD knowledge graphs, and explicit AI crawler permissions (like llms.txt and AI-friendly robots.txt) so Large Language Models synthesize and recommend your company as the authoritative answer.",
        ],
        takeaways: [
          "SEO gets you indexed; AEO gets you featured; GEO gets you recommended by AI.",
          "All three operate in synergy: strong technical SEO feeds clean data into GEO algorithms.",
        ],
      },
      {
        heading: "3. Actionable Checklist to Optimize for GEO Today",
        paragraphs: [
          "First, deploy a standardized 'llms.txt' file at your domain root. This emerging web standard provides LLM crawlers with a structured markdown summary of your brand, core offerings, and authoritative links.",
          "Second, audit your robots.txt to ensure bots like GPTBot, PerplexityBot, and ClaudeBot are not blocked. Many legacy firewalls inadvertently block AI crawlers.",
          "Third, implement Schema.org JSON-LD microdata across every page—specifically Organization, ProfessionalService, Service, Review, and BreadcrumbList schemas.",
        ],
        takeaways: [
          "Maintain a public llms.txt with accurate service descriptions.",
          "Explicitly permit reputable AI bots in robots.txt.",
          "Embed complete JSON-LD schema with exact geo-coordinates and sameAs social profile links.",
        ],
      },
    ],
  },
  {
    id: "brand-identity-high-conversion",
    slug: "why-generic-brand-identity-kills-your-ad-roas",
    title: "Why Generic Brand Identity Kills Your Ad ROAS (And How to Fix It)",
    summary:
      "Discover the direct mathematical correlation between your visual brand design and your Meta/Google ad customer acquisition costs.",
    directAnswer:
      "A generic brand identity drives up ad customer acquisition costs by up to 300%. When visual assets lack distinct contrast, clear typographic hierarchy, and unique brand codes, prospective buyers scroll past ads without pausing, destroying thumb-stop ratios and triggering ad platform penalty bidding.",
    category: "Brand Design",
    author: {
      name: "Ananya Deshmukh",
      role: "Creative Director & Brand Architect",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
      bio: "Former lead brand designer for international luxury and high-growth consumer technology brands.",
    },
    publishedAt: "2026-03-20",
    updatedAt: "2026-03-28",
    readTime: "5 min read",
    tags: ["Branding", "Graphic Design", "Ad Creative", "ROAS", "CRO"],
    featured: true,
    content: [
      {
        heading: "1. The Silent Tax of Inconsistent Visuals",
        paragraphs: [
          "Most media buyers blame iOS updates or Meta algorithm changes when their ad ROAS begins to decay. However, our audits across 80+ brands reveal that in over 70% of cases, the true culprit is brand exhaustion and generic creative design.",
          "When your ad creative looks like a template from Canva that 10,000 other businesses used, audiences experience banner blindness within milliseconds.",
        ],
        takeaways: [
          "Templates destroy distinctive brand assets (DBAs).",
          "High-contrast color signatures increase ad recall by 80%.",
        ],
      },
      {
        heading: "2. The 3-Second Rule: Thumb-Stop Optimization",
        paragraphs: [
          "On platforms like Instagram, TikTok, and LinkedIn, you have less than 1.5 seconds to hook attention before the user thumbs past. Custom vector marks, dynamic kinetic typography, and unexpected framing immediately interrupt the feed.",
        ],
      },
    ],
  },
  {
    id: "b2b-growth-audit-playbook",
    slug: "the-40-point-b2b-growth-audit-that-uncovers-hidden-revenue",
    title: "The 40-Point B2B Growth Audit: Pinpointing Leaks in Your Sales Funnel",
    summary:
      "A step-by-step diagnostic framework that founders and CEOs can use to evaluate their marketing stack, conversion velocity, and pricing structure.",
    directAnswer:
      "A B2B growth audit systematically evaluates four core pillars: top-of-funnel acquisition channel economics (CAC and channel saturation), website conversion friction (bounce rates and form drop-offs), middle-of-funnel sales enablement, and value-based pricing tiers to unlock dormant enterprise revenue.",
    category: "Growth Strategy",
    author: {
      name: "Karan Singhal",
      role: "Principal Business Growth Consultant",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
      bio: "Ex-strategy consultant advising high-growth B2B firms on pricing, positioning, and go-to-market scaling.",
    },
    publishedAt: "2026-02-28",
    updatedAt: "2026-03-10",
    readTime: "9 min read",
    tags: ["Business Consultancy", "Sales Funnel", "Pricing Strategy", "B2B SaaS"],
    featured: false,
    content: [
      {
        heading: "1. Why Most B2B Funnels Leak at the Middle",
        paragraphs: [
          "Companies frequently invest heavily in lead generation—driving thousands of ad clicks or ranking for vanity keywords—only to find their sales pipeline remains bone dry. The breakdown almost invariably happens at the transition from lead to sales qualification.",
        ],
      },
    ],
  },
  {
    id: "google-ads-pmax-scaling",
    slug: "mastering-google-performance-max-in-2026",
    title: "Mastering Google Performance Max: How to Stop Burning Ad Spend",
    summary:
      "How to feed Google's machine learning algorithms with high-quality first-party signals, negative keyword lists, and creative asset groups that convert.",
    directAnswer:
      "To succeed with Google Performance Max in 2026, advertisers must supply verified first-party conversion data via Google Enhanced Conversions, build tight asset groups segmented by customer intent, upload 20+ distinct creative variants, and enforce brand negative keyword exclusions to prevent cannibalizing organic search traffic.",
    category: "Paid Advertising",
    author: {
      name: "Siddharth Mehra",
      role: "Head of Growth & Search Intelligence",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
      bio: "10+ years architecting search and generative engine algorithms for global SaaS and enterprise brands.",
    },
    publishedAt: "2026-01-18",
    updatedAt: "2026-02-14",
    readTime: "6 min read",
    tags: ["Google Ads", "Performance Max", "PPC", "ROAS"],
    featured: false,
    content: [
      {
        heading: "1. The Truth About Performance Max",
        paragraphs: [
          "Without strict audience signals and negative keywords, Google PMax defaults to bidding on cheap, low-intent display network inventory and cannibalizing your own brand terms.",
        ],
      },
    ],
  },
];
