import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { ExitIntentModal } from "@/components/common/ExitIntentModal";
import { CookieConsent } from "@/components/common/CookieConsent";
import { JsonLd } from "@/components/common/JsonLd";
import { agencyData } from "@/data/agency";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scalelytdigital.com"),
  title: {
    default: "Scalelyt Digital | Graphic Design, Digital Marketing & Business Consultancy",
    template: "%s | Scalelyt Digital",
  },
  description:
    "Scalelyt Digital is an elite growth agency helping founders scale through distinctive Graphic Design, full-funnel Digital Marketing (SEO, AEO, GEO & Paid Ads), and Business Strategy.",
  keywords: [
    "digital marketing agency Pune",
    "graphic design agency India",
    "business consultancy for SMBs",
    "Generative Engine Optimization GEO agency",
    "SEO and AEO services",
    "high ROAS paid advertising",
    "Scalelyt Digital",
    "UI UX design studio",
  ],
  authors: [{ name: "Scalelyt Digital Strategic Team" }],
  creator: "Scalelyt Digital",
  publisher: "Scalelyt Digital",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  openGraph: {
    title: "Scalelyt Digital | Graphic Design, Digital Marketing & Business Consultancy",
    description:
      "Scale Smarter. Design Bolder. Dominate Search & AI. High-performance creative design and growth marketing.",
    url: "https://scalelytdigital.com",
    siteName: "Scalelyt Digital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scalelyt Digital | Graphic Design, Digital Marketing & Growth",
    description: "Scale Smarter. Design Bolder. Dominate Search & AI.",
    creator: "@scalelytdigital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://scalelytdigital.com",
  },
};

// Organization & ProfessionalService JSON-LD Schema (PRD Appendix A)
const agencySchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: agencyData.name,
  legalName: agencyData.legalName,
  url: agencyData.url,
  logo: "https://scalelytdigital.com/logo.png",
  description: agencyData.description,
  priceRange: "$$",
  areaServed: ["IN", "US", "GB", "AE", "SG", "AU"],
  address: {
    "@type": "PostalAddress",
    streetAddress: agencyData.address.street,
    addressLocality: agencyData.address.city,
    addressRegion: agencyData.address.region,
    postalCode: agencyData.address.postalCode,
    addressCountry: agencyData.address.countryCode,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: agencyData.geo.latitude,
    longitude: agencyData.geo.longitude,
  },
  telephone: agencyData.phone,
  email: agencyData.email,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:30",
      closes: "19:30",
    },
  ],
  sameAs: [
    agencyData.socials.linkedin,
    agencyData.socials.twitter,
    agencyData.socials.instagram,
    agencyData.socials.behance,
    agencyData.socials.dribbble,
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Graphic Design & Brand Architecture",
        description: "Logo, Brand Identity Systems, Packaging, and UI/UX Design.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Digital Marketing (SEO, AEO, GEO & Paid Ads)",
        description: "Full-funnel search engine and AI optimization, Google Ads, Meta Ads.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Business Growth Consultancy",
        description: "Go-to-market strategy, brand positioning, pricing redesign, and marketing audits.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <JsonLd data={agencySchema} />
      </head>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
        <AnnouncementBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <ExitIntentModal />
        <CookieConsent />
      </body>
    </html>
  );
}
