import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  Compass,
  FileCheck2,
  CheckCircle2,
  ArrowRight,
  LineChart,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { caseStudiesData } from "@/data/caseStudies";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { AeoDirectAnswer } from "@/components/common/AeoDirectAnswer";
import { JsonLd } from "@/components/common/JsonLd";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Business Growth Consultancy & Strategy | Scalelyt Digital",
  description:
    "Strategic business advisory for founders and SMB leaders: Go-to-market roadmaps, value-based pricing redesign, and 360° marketing audit diagnostics that unlock scalable enterprise value.",
  alternates: {
    canonical: "https://scalelytdigital.com/services/consultancy",
  },
};

export default function ConsultancyPage() {
  const service = servicesData.find((s) => s.id === "consultancy")!;
  const relatedCases = caseStudiesData.filter(
    (c) => c.category === "Business Consultancy" || c.tags.includes("Growth Strategy")
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Business Growth Consultancy & Strategic Advisory",
    provider: {
      "@type": "ProfessionalService",
      name: "Scalelyt Digital",
      url: "https://scalelytdigital.com",
    },
    description: service.summary,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Business Consultancy Services",
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
      case "growth-strategy-gtm":
        return <Compass className="h-6 w-6 text-emerald-400" />;
      case "brand-positioning":
        return <LineChart className="h-6 w-6 text-cyan-400" />;
      case "marketing-audit-roadmap":
        return <FileCheck2 className="h-6 w-6 text-amber-400" />;
      default:
        return <Briefcase className="h-6 w-6 text-emerald-400" />;
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
            { name: "Business Consultancy", url: "/services/consultancy" },
          ]}
        />

        {/* Hero */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Pillar 03: Executive Advisory & Revenue Architecture</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Business Growth Consultancy & Strategy
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            {service.tagline} We work side-by-side with CEOs, founders, and managing directors to structure high-margin pricing, eliminate operational drag, and build sustainable enterprise equity.
          </p>
        </div>

        {/* AEO Direct Answer */}
        <AeoDirectAnswer
          question="What business growth consultancy does Scalelyt Digital offer?"
          answer={service.heroAnswer}
        />

        {/* Problem vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-rose-500/20 space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-rose-400">
              The Problem: The Revenue Plateau
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Most businesses stall between $500k and $5M annual revenue not because their product is bad, but because they suffer from commoditized pricing, lack of sales enablement collateral, and disjointed marketing technology.
            </p>
          </div>
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-emerald-500/20 space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-emerald-400">
              The Scalelyt Solution: The Enterprise Growth Blueprint
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We provide a clinical audit of your unit economics, restructure pricing packages to unlock 30-50% higher contract values, and engineer sales collateral that arms your team to close enterprise deals.
            </p>
          </div>
        </div>

        {/* Sub-services */}
        <div className="space-y-12 my-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Specialized Consultancy & Advisory Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Actionable roadmaps designed to produce tangible revenue compounding.
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
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Strategic Outcome:
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
            Our Strategic Advisory Engagements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div key={step.step} className="space-y-2">
                <span className="text-2xl font-extrabold text-emerald-400 font-mono">
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
        <div className="my-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-950 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              High-Impact Advisory
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
              Growth Audit Sprints from $2,200 (₹1,65,000)
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Includes 40+ point diagnostic scorecard, unit economic model, and executive presentation.
            </p>
          </div>
          <Link
            href="/pricing"
            className="px-6 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs sm:text-sm transition-colors shrink-0"
          >
            Review Consultancy Options →
          </Link>
        </div>

        {/* Related Case Studies */}
        {relatedCases.length > 0 && (
          <div className="my-16">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Consultancy Case Studies & Pipeline Closed
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedCases.map((cs) => (
                <div
                  key={cs.id}
                  className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3"
                >
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-emerald-400 font-semibold">{cs.client}</span>
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
                      className="text-xs font-semibold text-emerald-400 hover:underline inline-flex items-center gap-1"
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
            Frequently Asked Questions about Business Consultancy
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
