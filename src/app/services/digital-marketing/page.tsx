import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  Target,
  Share2,
  Mail,
  CheckCircle2,
  ArrowRight,
  Bot,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { caseStudiesData } from "@/data/caseStudies";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { AeoDirectAnswer } from "@/components/common/AeoDirectAnswer";
import { JsonLd } from "@/components/common/JsonLd";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Digital Marketing, SEO, AEO, GEO & Paid Ads | Scalelyt Digital",
  description:
    "Full-funnel digital marketing agency specializing in technical SEO, Generative Engine Optimization (GEO) for ChatGPT and Perplexity, and high-ROAS Meta and Google ad campaigns.",
  alternates: {
    canonical: "https://scalelytdigital.com/services/digital-marketing",
  },
};

export default function DigitalMarketingPage() {
  const service = servicesData.find((s) => s.id === "digital-marketing")!;
  const relatedCases = caseStudiesData.filter(
    (c) => c.category === "Digital Marketing" || c.tags.includes("SEO & GEO")
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Marketing: SEO, AEO, GEO & Paid Performance Ads",
    provider: {
      "@type": "ProfessionalService",
      name: "Scalelyt Digital",
      url: "https://scalelytdigital.com",
    },
    description: service.summary,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Solutions",
      itemListElement: service.subServices.map((sub) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: sub.name,
          description: sub.description,
        },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const getSubIcon = (slug: string) => {
    switch (slug) {
      case "seo-aeo-geo":
        return <Bot className="h-6 w-6 text-cyan-400" />;
      case "performance-ads":
        return <Target className="h-6 w-6 text-emerald-400" />;
      case "social-media-marketing":
        return <Share2 className="h-6 w-6 text-indigo-400" />;
      case "content-email-marketing":
        return <Mail className="h-6 w-6 text-amber-400" />;
      default:
        return <TrendingUp className="h-6 w-6 text-cyan-400" />;
    }
  };

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Services", url: "/services" },
            { name: "Digital Marketing", url: "/services/digital-marketing" },
          ]}
        />

        {/* Hero */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>Pillar 02: Performance Acquisition & Search Dominance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Digital Marketing: SEO, AEO, GEO & Paid Ads
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            {service.tagline} We combine machine learning ad algorithms with AI search optimization to build an unbreakable inbound acquisition engine.
          </p>
        </div>

        {/* AEO Direct Answer */}
        <AeoDirectAnswer
          question="What digital marketing services does Scalelyt Digital offer?"
          answer={service.heroAnswer}
        />

        {/* Problem vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-rose-500/20 space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-rose-400">
              The Problem: Disjointed Campaigns & Rising Ad Costs
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Customer acquisition costs on Meta and Google have risen over 40% year-over-year. Meanwhile, AI engines like ChatGPT and Perplexity are answering user queries without clicks, rendering old SEO tactics obsolete.
            </p>
          </div>
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-cyan-500/20 space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-cyan-400">
              The Scalelyt Solution: The GEO + High-ROAS Engine
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We structure your website for AI search crawlers with JSON-LD schemas and llms.txt while running precision Meta/Google ad campaigns with server-side Conversion API (CAPI) tracking to ensure every marketing dollar produces measurable pipeline.
            </p>
          </div>
        </div>

        {/* Sub-services */}
        <div className="space-y-12 my-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Specialized Digital Marketing Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              From Generative Engine Optimization to multi-million dollar ad spend management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.subServices.map((sub) => (
              <div
                key={sub.id}
                id={sub.slug}
                className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-4 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700">
                    {getSubIcon(sub.slug)}
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {sub.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {sub.description}
                </p>

                <div className="pt-2">
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Key Deliverables:
                  </h4>
                  <ul className="space-y-1.5">
                    {sub.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Expected Business Impact:
                  </h4>
                  <ul className="space-y-1">
                    {sub.benefits.map((b) => (
                      <li key={b} className="text-xs text-slate-400">
                        • {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Process */}
        <div className="my-16 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 sm:p-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-8 text-center">
            How We Execute Marketing Campaigns
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div key={step.step} className="space-y-2">
                <span className="text-2xl font-extrabold text-cyan-400 font-mono">
                  0{step.step}
                </span>
                <h3 className="text-sm font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Hint Banner */}
        <div className="my-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
              Predictable Retainers
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
              Marketing retainers starting at $1,650/mo (₹1,25,000/mo)
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Includes full technical SEO/GEO optimization, weekly creative drops, and Looker Studio live dashboards.
            </p>
          </div>
          <Link
            href="/pricing"
            className="px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm transition-colors shrink-0"
          >
            Explore Marketing Packages →
          </Link>
        </div>

        {/* Related Case Studies */}
        {relatedCases.length > 0 && (
          <div className="my-16">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Featured Marketing Case Studies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedCases.map((cs) => (
                <div
                  key={cs.id}
                  className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3"
                >
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-cyan-400 font-semibold">{cs.client}</span>
                    <span className="text-slate-400">{cs.industry}</span>
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {cs.shortDescription}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={`/work/${cs.slug}`}
                      className="text-xs font-semibold text-cyan-400 hover:underline inline-flex items-center gap-1"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Service FAQs */}
        <div className="my-16 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
            Frequently Asked Questions about Digital Marketing & GEO
          </h2>
          {service.faqs.map((faq) => (
            <div
              key={faq.question}
              className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-2"
            >
              <h3 className="text-sm sm:text-base font-bold text-white">
                {faq.question}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      <CtaBanner />
    </div>
  );
}
