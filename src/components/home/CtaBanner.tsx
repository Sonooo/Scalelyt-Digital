"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles, MessageSquare, ShieldCheck } from "lucide-react";
import { LeadCaptureModal } from "@/components/common/LeadCaptureModal";
import { agencyData } from "@/data/agency";

export function CtaBanner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-cyan-600/20 via-emerald-600/20 to-indigo-600/20 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Ready for Measurable Scaling?</span>
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight text-balance">
              Let&apos;s Build Your Brand&apos;s Most Profitable Growth Chapter
            </h2>

            <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              Book a free 30-minute discovery call with our leadership. We will diagnose your funnel, provide competitor benchmarks, and map out a 90-day scaling plan.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Claim Free Strategy Consultation</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={`https://wa.me/${agencyData.whatsappNumber}?text=${encodeURIComponent(
                  agencyData.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl font-semibold text-sm text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="h-4 w-4 text-emerald-400" />
                <span>Chat on WhatsApp Directly</span>
              </a>
            </div>

            <div className="pt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Strict Non-Disclosure Agreement • Zero Aggressive Pitching</span>
            </div>
          </div>
        </div>
      </div>

      <LeadCaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        source="Footer CTA Banner"
      />
    </section>
  );
}
