import React from "react";
import { ShieldCheck, Award, Zap, Sparkles } from "lucide-react";

export function TrustBar() {
  const brands = [
    { name: "Zenith Health AI", category: "HealthTech / SaaS" },
    { name: "Lumina Organics", category: "Global D2C" },
    { name: "Strata Global", category: "Enterprise Supply Chain" },
    { name: "FinPulse Labs", category: "FinTech" },
    { name: "Apex Dental", category: "Healthcare Clinics" },
    { name: "Veritas Advisory", category: "Management Advisory" },
  ];

  return (
    <section className="border-y border-slate-800/80 bg-slate-950/60 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-8">
          Trusted by High-Growth Startups, SMBs & Modern Enterprises Worldwide
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex flex-col items-center justify-center p-3 rounded-xl border border-slate-800/60 bg-slate-900/40 hover:bg-slate-900/80 transition-all text-center group cursor-default"
            >
              <span className="font-bold text-sm text-slate-300 group-hover:text-white tracking-tight">
                {brand.name}
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5">
                {brand.category}
              </span>
            </div>
          ))}
        </div>

        {/* Agency Highlights Strip */}
        <div className="mt-8 pt-6 border-t border-slate-900 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex items-center justify-center gap-2 text-xs text-slate-300">
            <Award className="h-4 w-4 text-cyan-400" />
            <span>Top Rated on Clutch (4.9★)</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-300">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Google & Meta Certified Partner</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-300">
            <Zap className="h-4 w-4 text-amber-400" />
            <span>90+ Lighthouse Speed Guarantee</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-300">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span>GEO & AI Search Optimized</span>
          </div>
        </div>
      </div>
    </section>
  );
}
