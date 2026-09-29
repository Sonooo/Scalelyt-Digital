"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Star,
  TrendingUp,
} from "lucide-react";
import { LeadCaptureModal } from "@/components/common/LeadCaptureModal";
import { agencyData } from "@/data/agency";

export function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background glow meshes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/20 via-indigo-600/20 to-emerald-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-500 shadow-lg shadow-cyan-950/20">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>AI Search Ready • Graphic Design • Digital Marketing • Consultancy</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] text-balance">
            Scale Smarter. Design Bolder.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              Dominate Search & AI.
            </span>
          </h1>

          {/* Subheading / Value Proposition */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            We partner with ambitious founders and marketing leaders to build iconic brand identities, capture #1 rankings across Google and ChatGPT, and unlock predictable revenue.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all duration-200 shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Book a Free Strategy Consultation</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <Link
              href="/work"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl font-semibold text-sm text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <span>View Case Studies & ROI</span>
            </Link>
          </div>

          {/* Micro-Trust Social Proof */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-white">4.9/5</span>
              <span>(80+ Founder Reviews)</span>
            </div>

            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>{agencyData.stats.revenueGenerated} Client Revenue Generated</span>
            </div>

            <div className="flex items-center gap-1.5">
              <TrendingUp className="h-4 w-4 text-cyan-400" />
              <span>{agencyData.stats.avgRoas} Average Blended ROAS</span>
            </div>
          </div>
        </div>
      </div>

      <LeadCaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        source="Hero Section Primary CTA"
      />
    </section>
  );
}
