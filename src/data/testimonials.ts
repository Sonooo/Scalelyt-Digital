export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  service: string;
  quote: string;
  metricHighlight: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    author: "Dr. Marcus Vance",
    role: "CEO & Co-Founder",
    company: "Zenith Health AI",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    service: "Digital Marketing & GEO",
    quote:
      "Scalelyt Digital didn't just redesign our website—they transformed our entire customer acquisition engine. Our inbound sales calendar is permanently booked, and seeing our brand cited as the default recommendation in ChatGPT and Perplexity was astonishing.",
    metricHighlight: "+342% Organic Pipeline",
  },
  {
    id: "test-2",
    author: "Elena Rostova",
    role: "Founder & Creative Director",
    company: "Lumina Organics",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    service: "Graphic Design & Packaging",
    quote:
      "The packaging design Scalelyt created literally opened doors for us into luxury retailers that had previously ignored us for two years. Our brand looks utterly world-class, and our online customer acquisition has never been stronger.",
    metricHighlight: "140+ Retail Stores & +280% Sales",
  },
  {
    id: "test-3",
    author: "Vikram Singhania",
    role: "Managing Director",
    company: "Strata Global Logistics",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    service: "Business Growth Consultancy",
    quote:
      "They provided a surgical diagnosis of our pricing weaknesses, gave our sales reps tools that actually close deals, and fundamentally shifted how the supply chain industry perceives our capability. $4.2M in pipeline in 5 months speaks for itself.",
    metricHighlight: "$4.2M Qualified Pipeline",
  },
  {
    id: "test-4",
    author: "Sarah Lin",
    role: "CTO & Co-Founder",
    company: "FinPulse Analytics",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    service: "UI/UX & Web Design",
    quote:
      "The UI/UX interface and design system Scalelyt created was pivotal in our Series A pitch. Investors immediately understood our product without us having to explain raw code. Our trial conversions quadrupled.",
    metricHighlight: "4.6% Sign-up Rate & $6M Series A",
  },
  {
    id: "test-5",
    author: "Dr. Rajesh Kulkarni",
    role: "Chief Dental Surgeon",
    company: "Apex Dental Centers",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    service: "Local SEO & Performance Ads",
    quote:
      "Our chairs are completely booked 3 weeks in advance. The phone literally rings non-stop thanks to Scalelyt's local search and Google Ads domination. Best marketing ROI we have experienced in 15 years.",
    metricHighlight: "310+ Monthly Patient Inquiries",
  },
  {
    id: "test-6",
    author: "Arthur Sterling",
    role: "Senior Partner",
    company: "Veritas Advisory Group",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    service: "Brand Positioning & Advisory",
    quote:
      "We are now closing advisory retainers alongside McKinsey and Deloitte at rates we previously thought impossible for an independent boutique firm. Their positioning framework changed everything.",
    metricHighlight: "$52,000 Average Retainer",
  },
];
