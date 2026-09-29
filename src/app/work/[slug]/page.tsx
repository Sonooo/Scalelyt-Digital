import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Quote,
  Star,
} from "lucide-react";
import { caseStudiesData } from "@/data/caseStudies";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { CtaBanner } from "@/components/home/CtaBanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudiesData.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudiesData.find((item) => item.slug === slug);
  if (!cs) return { title: "Case Study Not Found" };

  return {
    title: `${cs.title} | Scalelyt Digital Case Study`,
    description: cs.shortDescription,
    alternates: {
      canonical: `https://scalelytdigital.com/work/${cs.slug}`,
    },
    openGraph: {
      title: cs.title,
      description: cs.shortDescription,
      type: "article",
    },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudiesData.find((item) => item.slug === slug);

  if (!cs) {
    notFound();
  }

  const caseSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: cs.title,
    headline: cs.title,
    description: cs.shortDescription,
    author: {
      "@type": "ProfessionalService",
      name: "Scalelyt Digital",
    },
    provider: {
      "@type": "ProfessionalService",
      name: "Scalelyt Digital",
    },
    about: {
      "@type": "Organization",
      name: cs.client,
    },
  };

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={caseSchema} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Portfolio", url: "/work" },
            { name: cs.client, url: `/work/${cs.slug}` },
          ]}
        />

        {/* Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to All Case Studies</span>
        </Link>

        {/* Header */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {cs.category}
            </span>
            <span className="text-xs text-slate-400 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
              {cs.industry}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1 ml-auto">
              <Calendar className="h-3.5 w-3.5" />
              <span>Project Duration: {cs.duration}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {cs.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {cs.shortDescription}
          </p>
        </div>

        {/* Key Measurable Results Banner */}
        <div className="my-10 rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-950 p-6 sm:p-8">
          <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-6">
            Key Verified Growth Metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cs.metrics.map((m) => (
              <div key={m.label} className="space-y-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  {m.value}
                </span>
                <h3 className="text-xs font-semibold text-emerald-300">
                  {m.label}
                </h3>
                <p className="text-[11px] text-slate-400 leading-snug">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge, Approach & Solution */}
        <div className="space-y-10 my-12">
          {/* 1. The Challenge */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-rose-400 flex items-center gap-2">
              <span>01. The Challenge</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {cs.challenge}
            </p>
          </div>

          {/* 2. Strategic Approach */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-cyan-400 flex items-center gap-2">
              <span>02. The Strategic Approach</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {cs.approach}
            </p>
          </div>

          {/* 3. The Solution & Deliverables */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-emerald-400 flex items-center gap-2">
              <span>03. The Executed Solution</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {cs.solution}
            </p>

            <div className="pt-4 border-t border-slate-800">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Services & Deliverables Provided:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {cs.servicesProvided.map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-2 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visual Highlights */}
        {cs.visualHighlights && cs.visualHighlights.length > 0 && (
          <div className="my-12 space-y-6">
            <h2 className="text-xl font-bold text-white">
              Visual & Architecture Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cs.visualHighlights.map((v) => (
                <div
                  key={v.title}
                  className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 space-y-3"
                >
                  <div className={`h-2 w-16 rounded-full bg-gradient-to-r ${v.accent}`} />
                  <h3 className="text-base font-bold text-white">
                    {v.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Client Testimonial Box */}
        <div className="my-12 rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8 relative overflow-hidden">
          <Quote className="h-10 w-10 text-slate-800 absolute top-4 right-4 -z-0" />
          <div className="relative z-10 space-y-4">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed">
              &ldquo;{cs.testimonial.quote}&rdquo;
            </p>
            <div className="pt-2">
              <h4 className="text-sm font-bold text-white">
                {cs.testimonial.author}
              </h4>
              <p className="text-xs text-slate-400">
                {cs.testimonial.role}, <span className="text-slate-300">{cs.testimonial.company}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Next / Previous Project Navigation */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex justify-between items-center text-xs">
          <Link
            href="/work"
            className="text-slate-400 hover:text-white transition-colors"
          >
            ← View All Case Studies
          </Link>
          <Link
            href="/calculator"
            className="text-cyan-400 hover:underline font-semibold"
          >
            Estimate Your ROI in our Growth Calculator →
          </Link>
        </div>
      </div>

      <div className="mt-20">
        <CtaBanner />
      </div>
    </div>
  );
}
