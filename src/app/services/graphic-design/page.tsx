import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Palette,
  CheckCircle2,
  ArrowRight,
  Layers,
  Component,
  Box,
  Layout,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { caseStudiesData } from "@/data/caseStudies";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { AeoDirectAnswer } from "@/components/common/AeoDirectAnswer";
import { JsonLd } from "@/components/common/JsonLd";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Graphic Design, Brand Identity & UI/UX Services | Scalelyt Digital",
  description:
    "Award-winning graphic design, distinctive vector brand identities, packaging engineering, and conversion-optimized UI/UX web designs that elevate market perceived value.",
  alternates: {
    canonical: "https://scalelytdigital.com/services/graphic-design",
  },
};

export default function GraphicDesignPage() {
  const service = servicesData.find((s) => s.id === "graphic-design")!;
  const relatedCases = caseStudiesData.filter(
    (c) => c.category === "Graphic Design" || c.tags.includes("Brand Identity")
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Graphic Design & Brand Architecture",
    provider: {
      "@type": "ProfessionalService",
      name: "Scalelyt Digital",
      url: "https://scalelytdigital.com",
    },
    description: service.summary,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Graphic Design Deliverables",
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
      case "logo-brand-identity":
        return <Layers className="h-6 w-6 text-rose-400" />;
      case "social-media-creatives":
        return <Component className="h-6 w-6 text-purple-400" />;
      case "packaging-print":
        return <Box className="h-6 w-6 text-amber-400" />;
      case "ui-web-design":
        return <Layout className="h-6 w-6 text-cyan-400" />;
      default:
        return <Palette className="h-6 w-6 text-rose-400" />;
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
            { name: "Graphic Design", url: "/services/graphic-design" },
          ]}
        />

        {/* Hero */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Palette className="h-3.5 w-3.5" />
            <span>Pillar 01: Visual Prestige & Brand Systems</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Graphic Design & Brand Architecture That Converts
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            {service.tagline} We engineer visual assets that elevate your brand from being a commodity to commanding market premium.
          </p>
        </div>

        {/* AEO Direct Answer */}
        <AeoDirectAnswer
          question="What graphic design services does Scalelyt Digital offer?"
          answer={service.heroAnswer}
        />

        {/* Problem & Solution Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-rose-500/20 space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-rose-400">
              The Problem: Generic Visuals Bleed Pipeline
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              When brands use generic stock graphics, inconsistent fonts, or crowded Canva templates, buyers immediately assume low quality. This causes high ad customer acquisition costs, low trial signups, and price resistance.
            </p>
          </div>
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-emerald-500/20 space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-emerald-400">
              The Scalelyt Solution: Cognitive Design Systems
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We design with cognitive conversion principles: contrast ratios that direct the eye to primary CTAs, bespoke vector marks that lodge into memory, and responsive UI components tested for zero user friction.
            </p>
          </div>
        </div>

        {/* Detailed Sub-services */}
        <div className="space-y-12 my-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Specialized Graphic Design Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Comprehensive visual design solutions executed by senior art directors and brand designers.
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
                        <CheckCircle2 className="h-3.5 w-3.5 text-rose-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Commercial Impact:
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
            Our Brand & Design Delivery Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div key={step.step} className="space-y-2">
                <span className="text-2xl font-extrabold text-rose-400 font-mono">
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
        <div className="my-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-rose-950/40 via-slate-900 to-slate-950 border border-rose-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">
              Transparent Pricing
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
              Brand packages starting from $1,850 (₹1,45,000)
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Includes full source vector files, commercial IP copyright transfer, and guidelines.
            </p>
          </div>
          <Link
            href="/pricing"
            className="px-6 py-3 rounded-xl bg-rose-500 hover:bg-rose-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors shrink-0"
          >
            Compare Design Packages →
          </Link>
        </div>

        {/* Related Case Studies */}
        {relatedCases.length > 0 && (
          <div className="my-16">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Proven Design Case Studies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedCases.map((cs) => (
                <div
                  key={cs.id}
                  className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3"
                >
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-rose-400 font-semibold">{cs.client}</span>
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
                      className="text-xs font-semibold text-rose-400 hover:underline inline-flex items-center gap-1"
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
            Frequently Asked Questions about Graphic Design
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
