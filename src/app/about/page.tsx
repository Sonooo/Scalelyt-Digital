import React from "react";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Award,
  Target,
} from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { agencyData } from "@/data/agency";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "About Us | Our Story, Team & E-E-A-T Authority | Scalelyt Digital",
  description:
    "Learn about Scalelyt Digital: our mission, leadership team, proprietary growth frameworks, and commitment to measurable client revenue acceleration.",
  alternates: {
    canonical: "https://scalelytdigital.com/about",
  },
};

export default function AboutPage() {
  const leadership = [
    {
      name: "Siddharth Mehra",
      role: "Managing Director & Head of Growth",
      bio: "12+ years pioneering performance media algorithms, search architecture, and Generative Engine Optimization for enterprise brands across India, US, and EMEA.",
      credentials: "Ex-Growth Lead, Google Ads Certified, Wharton Executive Fellow",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80",
    },
    {
      name: "Ananya Deshmukh",
      role: "Creative Director & Partner",
      bio: "Award-winning brand architect with over 100+ identity systems and packaging designs delivered across D2C luxury, SaaS, and retail consumer goods.",
      credentials: "NID Alumna, Red Dot Design Nominee, D&AD Member",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80",
    },
    {
      name: "Karan Singhal",
      role: "Principal Business Growth Consultant",
      bio: "Advises founders on pricing power, unit economics, and go-to-market strategies that accelerate recurring enterprise pipeline.",
      credentials: "IIM Ahmedabad Alum, Ex-McKinsey Advisory, Angel Investor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80",
    },
  ];

  const values = [
    {
      title: "Radical Commercial Transparency",
      description:
        "No vanity metrics. We measure success strictly by attributable pipeline, cost-per-acquisition (CPA), and net revenue generated for our clients.",
    },
    {
      title: "Engineered Beauty",
      description:
        "Design is never just decoration; it is a conversion tool. Every typeface, contrast ratio, and layout must serve the psychological goal of building buyer conviction.",
    },
    {
      title: "First-Principles AI Preparedness",
      description:
        "We proactively engineer content and data structures for where search is heading tomorrow—ensuring our clients thrive in AI answer engines.",
    },
    {
      title: "Velocity with Precision",
      description:
        "High-growth startups need fast execution without sacrificing code quality or brand standards. We deliver sprint-based turnarounds.",
    },
  ];

  const tools = [
    "Next.js & React",
    "Figma & Adobe CC",
    "Google Analytics 4 & CAPI",
    "Meta Ads Manager",
    "Google Search Console & Ahrefs",
    "Looker Studio",
    "HubSpot & Zoho CRM",
    "JSON-LD Schema & Perplexity API",
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "About Us", url: "/about" }]} />

        {/* Hero */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
            Our Purpose & Vision
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
            We Help Great Companies Become Unignorable
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Founded with a singular conviction: ambitious businesses should not have to compromise between beautiful creative design and ruthless revenue performance.
          </p>
        </div>

        {/* Agency Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-16">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              The Scalelyt Digital Story
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              In 2018, our founders observed a persistent fracture in the agency landscape. Traditional graphic design studios produced breathtaking visuals that failed to generate organic search traffic or conversions. Simultaneously, conventional marketing agencies ran aggressive ad campaigns with uninspired, generic creative that burned client capital.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We built <strong>Scalelyt Digital</strong> to permanently bridge this divide. Today, headquartered in Pune with a global delivery footprint, we combine world-class brand architecture, cutting-edge AI search optimization (AEO/GEO), and strategic growth consultancy under one roof.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">
                  {agencyData.stats.revenueGenerated}
                </span>
                <p className="text-[11px] text-slate-400 mt-1">
                  Client Pipeline Generated
                </p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                  {agencyData.stats.clientsServed}
                </span>
                <p className="text-[11px] text-slate-400 mt-1">
                  Growth Partnerships
                </p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  {agencyData.stats.clientSatisfaction}
                </span>
                <p className="text-[11px] text-slate-400 mt-1">
                  Client Retention Rate
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl border border-slate-800 space-y-6">
            <h3 className="text-lg font-bold text-white">
              Agency Credentials & Trust Signals (E-E-A-T)
            </h3>
            <ul className="space-y-4 text-xs text-slate-300">
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Google Premier Partner</strong>
                  Certified in Google Search, Performance Max, and Enhanced Conversions.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Award className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Clutch 4.9★ Top Agency 2026</strong>
                  Ranked #1 for Digital Marketing & Brand Design.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Target className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Meta Certified Media Professional</strong>
                  Advanced server-side Conversion API (CAPI) implementation.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Leadership Team (E-E-A-T Signals) */}
        <div className="my-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
              Subject Matter Experts
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
              Leadership Committed to Your Bottom Line
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Every client engagement is directly supervised by senior partners with documented industry track records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-7 space-y-4 hover:border-slate-700 transition-colors"
              >
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[2px]">
                  <div className="h-full w-full bg-slate-950 rounded-[14px] flex items-center justify-center font-bold text-lg text-white">
                    {person.name[0]}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    {person.name}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400 mt-0.5">
                    {person.role}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {person.bio}
                </p>

                <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-medium">
                  {person.credentials}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="my-20 rounded-3xl border border-slate-800 bg-slate-900/40 p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              The Principles That Guide Every Decision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="space-y-2">
                <h3 className="text-base font-bold text-cyan-400">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Ecosystem */}
        <div className="my-16 text-center">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">
            Technologies, Platforms & Frameworks We Master
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {tools.map((t) => (
              <span
                key={t}
                className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <CtaBanner />
    </div>
  );
}
