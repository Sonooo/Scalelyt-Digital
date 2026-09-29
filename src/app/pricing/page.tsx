"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { pricingData, PricingTier } from "@/data/pricing";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { LeadCaptureModal } from "@/components/common/LeadCaptureModal";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function PricingPage() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const categories = [
    "All",
    "Graphic Design",
    "Digital Marketing",
    "Business Consultancy",
  ];

  const filteredTiers =
    activeCategory === "All"
      ? pricingData
      : pricingData.filter((t) => t.category === activeCategory);

  const handleSelectTier = (tier: PricingTier) => {
    setSelectedTier(tier);
    setModalOpen(true);
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Pricing & Packages", url: "/pricing" }]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
            Predictable Investment • Zero Hidden Fees
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
            Transparent Pricing Engineered for Maximum ROI
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Choose sprint-based brand packages, performance marketing retainers, or executive growth advisory designed to scale your revenue.
          </p>

          {/* Currency & Filter Controls */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {/* Currency Toggle */}
            <div className="p-1 rounded-2xl bg-slate-900 border border-slate-800 flex items-center">
              <button
                onClick={() => setCurrency("USD")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  currency === "USD"
                    ? "bg-cyan-500 text-slate-950"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                USD ($)
              </button>
              <button
                onClick={() => setCurrency("INR")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  currency === "INR"
                    ? "bg-cyan-500 text-slate-950"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                INR (₹)
              </button>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-slate-900/60 border border-slate-800">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-slate-800 text-cyan-400 border border-slate-700"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
          {filteredTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-7 flex flex-col justify-between transition-all relative ${
                tier.popular
                  ? "bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-2 border-cyan-500/60 shadow-xl shadow-cyan-950/30"
                  : "bg-slate-900/50 border border-slate-800"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 text-[11px] font-black uppercase tracking-wider shadow-md">
                  Most Popular Choice
                </span>
              )}

              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      {tier.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">
                      {tier.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {tier.description}
                </p>

                {/* Price Display */}
                <div className="mb-6 p-4 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                      {currency === "USD"
                        ? tier.priceUSD
                        : tier.priceINR || tier.priceUSD}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {tier.period}
                    </span>
                  </div>
                  <span className="text-[11px] text-cyan-400 mt-1 block font-medium">
                    Turnaround: {tier.timeline}
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-2.5 mb-8">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-3">
                    What&apos;s Included:
                  </span>
                  {tier.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => handleSelectTier(tier)}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    tier.popular
                      ? "bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 shadow-lg shadow-cyan-500/20"
                      : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Enterprise Quote Callout */}
        <div className="my-16 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            Need a Custom Architecture?
          </span>
          <h2 className="text-2xl font-bold text-white">
            Custom Enterprise & Multi-Brand Solutions
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            For organizations spending $25,000+/mo in paid media, multi-brand holding companies, or firms requiring dedicated embedded design and growth pods.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                setSelectedTier(null);
                setModalOpen(true);
              }}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm transition-colors border border-slate-700 inline-flex items-center gap-2"
            >
              <span>Request Custom Enterprise Proposal</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Guarantees Strip */}
        <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <ShieldCheck className="h-6 w-6 text-cyan-400 mx-auto" />
            <h3 className="text-sm font-bold text-white">100% IP Ownership</h3>
            <p className="text-xs text-slate-400">
              All master files, code, design tokens, and creative copyrights transfer unconditionally to you upon final invoice settlement.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <Sparkles className="h-6 w-6 text-emerald-400 mx-auto" />
            <h3 className="text-sm font-bold text-white">Performance-Led Quality</h3>
            <p className="text-xs text-slate-400">
              Sprint deliverables undergo rigorous conversion and accessibility checks before release.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <CheckCircle2 className="h-6 w-6 text-purple-400 mx-auto" />
            <h3 className="text-sm font-bold text-white">No Lock-In Contracts</h3>
            <p className="text-xs text-slate-400">
              Monthly retainers operate on month-to-month or 90-day sprints. We earn your renewal every 30 days.
            </p>
          </div>
        </div>
      </div>

      <LeadCaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={
          selectedTier
            ? `${selectedTier.name} (${selectedTier.category})`
            : "Custom Growth Solution"
        }
        source={
          selectedTier
            ? `Pricing Tier: ${selectedTier.name}`
            : "Pricing Page Custom Quote"
        }
      />

      <CtaBanner />
    </div>
  );
}
