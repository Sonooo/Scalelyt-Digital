import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { RoiCalculatorWidget } from "@/components/calculator/RoiCalculatorWidget";
import { AeoDirectAnswer } from "@/components/common/AeoDirectAnswer";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Interactive Marketing ROI & Budget Calculator | Scalelyt Digital",
  description:
    "Calculate your projected revenue lift, CAC reduction, and marketing ROI with Scalelyt Digital's interactive growth simulator. Model conversion rates and ad spend efficiency.",
  alternates: {
    canonical: "https://scalelytdigital.com/calculator",
  },
};

export default function CalculatorPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Growth ROI Calculator", url: "/calculator" }]} />

        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            Predictable Revenue Modeling
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
            Marketing ROI & Pipeline Simulator
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Estimate the exact financial impact of optimizing your brand design, lowering customer acquisition cost (CAC), and dominating organic & AI search answers.
          </p>
        </div>

        {/* AEO Direct Answer */}
        <AeoDirectAnswer
          question="How does Scalelyt Digital calculate marketing ROI?"
          answer="Scalelyt Digital calculates marketing ROI by modeling compound improvements across three leverage points: (1) organic traffic growth from Generative Engine Optimization (+65% average lift), (2) conversion rate lift from cognitive brand and UI/UX design (boosting visitor-to-lead rates by 80% to 150%), and (3) paid advertising CPA reductions resulting in 3.5x to 4.5x blended ROAS."
        />

        {/* Full Interactive Widget */}
        <div className="my-12">
          <RoiCalculatorWidget />
        </div>

        {/* Explanatory Methodology */}
        <div className="my-16 rounded-3xl border border-slate-800 bg-slate-900/40 p-8 sm:p-12 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            The Three Levers Behind Our Growth Math
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-300">
            <div className="space-y-2 p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <h3 className="font-bold text-cyan-400 text-sm">
                Lever 1: The GEO Organic Lift
              </h3>
              <p className="text-slate-400 leading-relaxed text-xs">
                Capturing AI search citations and Google featured snippets delivers high-intent, compounding traffic without continuously multiplying paid media expenditure.
              </p>
            </div>
            <div className="space-y-2 p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <h3 className="font-bold text-rose-400 text-sm">
                Lever 2: Cognitive Brand Velocity
              </h3>
              <p className="text-slate-400 leading-relaxed text-xs">
                A world-class visual brand and friction-free mobile web UI dramatically increases conversion rates, turning existing traffic into 2x to 3x more demo bookings.
              </p>
            </div>
            <div className="space-y-2 p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <h3 className="font-bold text-emerald-400 text-sm">
                Lever 3: Server-Side Ad Precision
              </h3>
              <p className="text-slate-400 leading-relaxed text-xs">
                First-party data feeds into Meta CAPI and Google Enhanced Conversions allow ad algorithms to bid exclusively on high-value buyers, slashing CPA.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CtaBanner />
    </div>
  );
}
