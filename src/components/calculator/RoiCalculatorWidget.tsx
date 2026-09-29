"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { LeadCaptureModal } from "@/components/common/LeadCaptureModal";

export function RoiCalculatorWidget() {
  const [visitors, setVisitors] = useState(15000);
  const [conversionRate, setConversionRate] = useState(1.2);
  const [dealValue, setDealValue] = useState(1200);
  const [adSpend, setAdSpend] = useState(4000);
  const [modalOpen, setModalOpen] = useState(false);

  // Current calculations
  const currentLeads = Math.round((visitors * (conversionRate / 100)));
  const currentRevenue = currentLeads * dealValue;

  // Projected calculations with Scalelyt optimization:
  // 1. Organic & GEO traffic lift: +65% conservative
  // 2. Conversion rate lift (CRO + high-converting brand design): to 2.4% (min +80%)
  // 3. Ad Spend efficiency: 3.5x to 4.2x ROAS
  const projectedVisitors = Math.round(visitors * 1.65);
  const projectedConversionRate = Math.min(
    parseFloat((conversionRate * 1.8).toFixed(1)),
    4.5
  );
  const projectedLeads = Math.round(
    projectedVisitors * (projectedConversionRate / 100)
  );
  const projectedRevenue = projectedLeads * dealValue;
  const netMonthlyLift = projectedRevenue - currentRevenue;
  const netAnnualLift = netMonthlyLift * 12;
  const estimatedRoas = ((projectedRevenue / (adSpend || 1)) * 0.8).toFixed(1);
  const cacReductionPercent = Math.min(
    Math.round(((projectedConversionRate - conversionRate) / projectedConversionRate) * 100),
    54
  );

  return (
    <div className="w-full rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Interactive Growth Simulator</span>
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Calculate Your Scalelyt Growth & Pipeline Potential
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-2">
          Adjust the sliders below to model how our Brand Design, GEO search optimization, and Paid Ad funnels impact your bottom line.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sliders Input Column */}
        <div className="lg:col-span-6 space-y-6 bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-slate-800/80">
          {/* Monthly Visitors */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs sm:text-sm font-semibold text-slate-200">
                Monthly Website Visitors
              </label>
              <span className="text-xs sm:text-sm font-bold text-cyan-400 font-mono">
                {formatNumber(visitors)} /mo
              </span>
            </div>
            <input
              type="range"
              min="2000"
              max="150000"
              step="1000"
              value={visitors}
              onChange={(e) => setVisitors(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>2,000</span>
              <span>75,000</span>
              <span>150,000+</span>
            </div>
          </div>

          {/* Current Conversion Rate */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs sm:text-sm font-semibold text-slate-200">
                Current Inquiry / Conversion Rate
              </label>
              <span className="text-xs sm:text-sm font-bold text-cyan-400 font-mono">
                {conversionRate}%
              </span>
            </div>
            <input
              type="range"
              min="0.3"
              max="4.0"
              step="0.1"
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>0.3% (Low)</span>
              <span>1.5% (Average)</span>
              <span>4.0% (Strong)</span>
            </div>
          </div>

          {/* Average Deal Value */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs sm:text-sm font-semibold text-slate-200">
                Average Deal / Customer Value (USD)
              </label>
              <span className="text-xs sm:text-sm font-bold text-cyan-400 font-mono">
                {formatCurrency(dealValue)}
              </span>
            </div>
            <input
              type="range"
              min="200"
              max="15000"
              step="100"
              value={dealValue}
              onChange={(e) => setDealValue(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>$200</span>
              <span>$5,000</span>
              <span>$15,000+</span>
            </div>
          </div>

          {/* Monthly Ad Spend */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs sm:text-sm font-semibold text-slate-200">
                Current Monthly Paid Ad Spend (Optional)
              </label>
              <span className="text-xs sm:text-sm font-bold text-cyan-400 font-mono">
                {formatCurrency(adSpend)} /mo
              </span>
            </div>
            <input
              type="range"
              min="500"
              max="30000"
              step="500"
              value={adSpend}
              onChange={(e) => setAdSpend(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>$500</span>
              <span>$15,000</span>
              <span>$30,000+</span>
            </div>
          </div>
        </div>

        {/* Results & Projection Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 p-6 sm:p-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Projected Annual Impact
            </span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-mono">
                +{formatCurrency(netAnnualLift)}
              </span>
              <span className="text-xs text-slate-400 font-medium">/ year</span>
            </div>
            <p className="text-xs text-emerald-300 mt-1">
              Estimated net new pipeline generated from optimized branding & acquisition
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-800">
              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1">
                  Monthly Revenue Lift
                </span>
                <span className="text-lg sm:text-xl font-bold text-white font-mono">
                  +{formatCurrency(netMonthlyLift)}
                </span>
              </div>
              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1">
                  Projected Leads
                </span>
                <span className="text-lg sm:text-xl font-bold text-cyan-400 font-mono">
                  {projectedLeads} <span className="text-xs text-slate-400 font-normal">({currentLeads} now)</span>
                </span>
              </div>
              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1">
                  Est. Blended ROAS
                </span>
                <span className="text-lg sm:text-xl font-bold text-emerald-400 font-mono">
                  {estimatedRoas}x
                </span>
              </div>
              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1">
                  CAC Reduction
                </span>
                <span className="text-lg sm:text-xl font-bold text-cyan-400 font-mono">
                  -{cacReductionPercent}%
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Conversion rate boosted from {conversionRate}% to {projectedConversionRate}%</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Organic search & AI answer engine discovery lift: +65%</span>
              </div>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="mt-6 w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Lock In This Roadmap • Book Free Strategy Session</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <LeadCaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        source="ROI Calculator Widget"
      />
    </div>
  );
}
