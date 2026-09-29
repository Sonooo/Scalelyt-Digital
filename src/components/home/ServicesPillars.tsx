import React from "react";
import Link from "next/link";
import {
  Palette,
  TrendingUp,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { servicesData } from "@/data/services";

export function ServicesPillars() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Palette":
        return <Palette className="h-6 w-6" />;
      case "TrendingUp":
        return <TrendingUp className="h-6 w-6" />;
      case "Briefcase":
        return <Briefcase className="h-6 w-6" />;
      default:
        return <Sparkles className="h-6 w-6" />;
    }
  };

  return (
    <section className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
            Our 3 Core Growth Pillars
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
            Integrated Expertise Engineered for Exponential ROI
          </h2>
          <p className="text-xs sm:text-base text-slate-400 mt-3 leading-relaxed">
            Unlike siloed agencies, Scalelyt unites brand aesthetics, search discovery algorithms, and revenue strategy into a single synchronized growth engine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((pillar) => (
            <div
              key={pillar.id}
              className="group relative rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950/80 p-8 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-cyan-950/20"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-slate-800 border border-slate-700/80 text-cyan-400 group-hover:scale-105 transition-transform">
                    {getIcon(pillar.iconName)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
                    {pillar.statsHighlight.metric} {pillar.statsHighlight.label}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                  {pillar.summary}
                </p>

                {/* Sub-services Tags */}
                <div className="mt-6 pt-6 border-t border-slate-800/80">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Key Offerings:
                  </p>
                  <ul className="space-y-2">
                    {pillar.subServices.map((sub) => (
                      <li
                        key={sub.id}
                        className="flex items-center gap-2 text-xs text-slate-300"
                      >
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        <span>{sub.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/80">
                <Link
                  href={`/services/${pillar.slug}`}
                  className="w-full py-3 px-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-emerald-400 group-hover:text-slate-950 transition-all cursor-pointer font-semibold"
                >
                  <span>Explore {pillar.shortTitle} Services</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
