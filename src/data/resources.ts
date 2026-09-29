export interface Resource {
  id: string;
  slug: string;
  title: string;
  category: "Framework" | "Checklist" | "Playbook" | "Calculator";
  description: string;
  format: string;
  pageCount: string;
  highlights: string[];
  downloadsCount: string;
  badge?: string;
}

export const resourcesData: Resource[] = [
  {
    id: "geo-2026-playbook",
    slug: "the-2026-ai-search-and-geo-playbook",
    title: "The 2026 Generative Engine Optimization (GEO) Playbook",
    category: "Playbook",
    description:
      "A complete technical & content blueprint to ensure your company is cited, quoted, and recommended by ChatGPT, Perplexity, Claude, and Google AI Overviews.",
    format: "Interactive PDF & Notion Template",
    pageCount: "38 Pages",
    highlights: [
      "llms.txt standard template & robots.txt rules",
      "Essential Schema.org JSON-LD snippets for AI entity understanding",
      "Step-by-step passage indexing & direct-answer formatting",
      "AI prompt benchmarking matrix to test your brand visibility",
    ],
    downloadsCount: "2,400+",
    badge: "Most Popular",
  },
  {
    id: "b2b-growth-audit-checklist",
    slug: "40-point-b2b-growth-audit-checklist",
    title: "The 40-Point B2B Marketing & Sales Funnel Audit Checklist",
    category: "Checklist",
    description:
      "Pinpoint exactly where your website loses qualified prospects and why your customer acquisition costs are rising with our battle-tested diagnostic scorecard.",
    format: "Interactive Google Sheet & PDF",
    pageCount: "12 Pages",
    highlights: [
      "Website friction diagnostic (Speed, mobile, CTAs)",
      "Ad tracking & conversion pixel health check (GA4, CAPI)",
      "Sales qualification & lead routing score",
      "Value-based pricing self-assessment framework",
    ],
    downloadsCount: "1,850+",
  },
  {
    id: "brand-identity-audit",
    slug: "brand-identity-high-conversion-scorecard",
    title: "The High-Converting Brand Identity Evaluation Framework",
    category: "Framework",
    description:
      "Assess whether your brand design commands authority or drives prospective clients away with 10 critical visual and psychological criteria.",
    format: "Fillable PDF Guide",
    pageCount: "16 Pages",
    highlights: [
      "Visual contrast & thumb-stop ratio checklist",
      "Typography pairing & readability standards",
      "Digital touchpoint consistency scoring",
      "Competitive whitespace mapping exercise",
    ],
    downloadsCount: "1,220+",
  },
  {
    id: "marketing-budget-allocator",
    slug: "marketing-budget-and-roas-allocator-template",
    category: "Calculator",
    title: "Growth Budget & Channel Allocation Model",
    description:
      "Model how to allocate your monthly marketing budget between Paid Ads, SEO/Content, and Brand Design to hit your next revenue milestone.",
    format: "Dynamic Excel & Google Sheets Model",
    pageCount: "Spreadsheet Tool",
    highlights: [
      "Automatic CAC & LTV forecasting",
      "Paid channel budget split recommendation",
      "Break-even analysis calculator",
      "Organic compounding timeline forecast",
    ],
    downloadsCount: "3,100+",
    badge: "Interactive",
  },
];
