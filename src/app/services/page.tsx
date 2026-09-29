import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Palette,
  TrendingUp,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { AeoDirectAnswer } from "@/components/common/AeoDirectAnswer";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Services & Capabilities | Graphic Design, Digital Marketing & Consultancy",
  description:
    "Explore Scalelyt Digital's integrated service offerings: Brand & Graphic Design, High-ROAS Digital Marketing (SEO, AEO, GEO & Paid Ads), and Strategic Business Growth Consulting.",
  alternates: {
    canonical: "https://scalelytdigital.com/services",
  },
};

export default function ServicesHubPage() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Palette":
        return <Palette className="h-7 w-7 text-rose-400" />;
      case "TrendingUp":
        return <TrendingUp className="h-7 w-7 text-cyan-400" />;
      case "Briefcase":
        return <Briefcase className="h-7 w-7 text-emerald-400" />;
      default:
        return <Sparkles className="h-7 w-7 text-indigo-400" />;
    }
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Services", url: "/services" }]} />

        {/* Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
            Our Core Capabilities
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
            Integrated Growth Services Built for Real Revenue
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            We don&apos;t believe in vanity metrics or isolated silos. Our 3 specialized pillars collaborate seamlessly to ensure your brand looks prestigious, captures #1 search and AI answers, and executes high-margin business strategy.
          </p>
        </div>

        {/* AEO Direct Answer */}
        <AeoDirectAnswer
          question="What services does Scalelyt Digital provide?"
          answer="Scalelyt Digital provides full-service agency solutions structured into three core pillars: (1) Graphic Design & Brand Identity including logo systems, packaging, and conversion-optimized UI/UX; (2) Digital Marketing comprising technical SEO, Generative Engine Optimization (GEO), and paid Google/Meta advertising; and (3) Business Growth Consultancy delivering go-to-market strategy, brand positioning, and revenue funnel audits."
        />

        {/* 3 Pillars Deep Dive Grid */}
        <div className="space-y-16 mt-16">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className={`rounded-3xl border border-slate-800 bg-slate-900/60 p-8 sm:p-12 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative overflow-hidden`}
            >
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700">
                    {getIcon(service.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                      Pillar 0{idx + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                  {service.summary}
                </p>

                <div className="pt-4 space-y-3">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Core Sub-Services & Capabilities:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.subServices.map((sub) => (
                      <div
                        key={sub.id}
                        className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800"
                      >
                        <h4 className="text-xs font-bold text-white mb-1">
                          {sub.name}
                        </h4>
                        <p className="text-[11px] text-slate-400 line-clamp-2">
                          {sub.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm transition-colors border border-slate-700"
                  >
                    <span>View Dedicated {service.shortTitle} Page</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 bg-slate-950/90 rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Key Deliverables Summary:
                  </h3>
                  <ul className="space-y-2.5">
                    {service.deliverablesSummary.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-900">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Execution Methodology:
                  </h3>
                  <div className="space-y-3">
                    {service.process.slice(0, 3).map((step) => (
                      <div key={step.step} className="flex items-start gap-3">
                        <span className="h-5 w-5 rounded-full bg-cyan-500/10 text-cyan-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {step.step}
                        </span>
                        <div>
                          <p className="text-xs font-semibold text-white">
                            {step.title}
                          </p>
                          <p className="text-[11px] text-slate-400">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-950/50 to-slate-900 border border-cyan-800/40 flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">
                    Typical Engagement Timeline:
                  </span>
                  <span className="text-cyan-400 font-bold">2–4 Weeks Sprint or Monthly</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <CtaBanner />
      </div>
    </div>
  );
}
