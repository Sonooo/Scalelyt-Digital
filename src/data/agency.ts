export interface AgencyInfo {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  shortDescription: string;
  url: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  whatsappMessage: string;
  address: {
    street: string;
    locality: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
    countryCode: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: string;
  socials: {
    linkedin: string;
    twitter: string;
    instagram: string;
    behance: string;
    dribbble: string;
    github?: string;
  };
  stats: {
    clientsServed: string;
    revenueGenerated: string;
    avgRoas: string;
    clientSatisfaction: string;
    yearsOfExperience: string;
  };
}

export const agencyData: AgencyInfo = {
  name: "Scalelyt Digital",
  legalName: "Scalelyt Digital Agency Pvt. Ltd.",
  tagline: "Scale Smarter. Design Bolder. Dominate Search & AI.",
  description:
    "Scalelyt Digital is a premier growth agency fusing world-class graphic design, high-performance digital marketing (SEO, AEO, GEO & Paid Ads), and strategic business consultancy to scale high-growth brands globally.",
  shortDescription:
    "Full-service agency driving measurable ROI through Graphic Design, Digital Marketing, and Business Growth Strategy.",
  url: "https://scalelytdigital.com",
  email: "hello@scalelytdigital.com",
  phone: "+91 98234 56789",
  whatsappNumber: "919823456789",
  whatsappMessage:
    "Hello Scalelyt Digital! I would like to discuss a project for my business.",
  address: {
    street: "Level 4, Cyber City Tower B, Magarpatta",
    locality: "Hadapsar",
    city: "Pune",
    region: "Maharashtra",
    postalCode: "411028",
    country: "India",
    countryCode: "IN",
  },
  geo: {
    latitude: 18.5158,
    longitude: 73.9272,
  },
  openingHours: "Mo-Sa 09:30-19:30",
  socials: {
    linkedin: "https://linkedin.com/company/scalelyt-digital",
    twitter: "https://x.com/scalelytdigital",
    instagram: "https://instagram.com/scalelytdigital",
    behance: "https://behance.net/scalelytdigital",
    dribbble: "https://dribbble.com/scalelytdigital",
  },
  stats: {
    clientsServed: "120+",
    revenueGenerated: "$28M+",
    avgRoas: "4.4x",
    clientSatisfaction: "99.2%",
    yearsOfExperience: "8+",
  },
};
