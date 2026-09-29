import React from "react";
import { Compass, Lightbulb, PenTool, Rocket } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Discover & Diagnostic Audit",
      description:
        "We dissect your revenue funnels, competitive whitespace, conversion analytics, and crawl health under strict confidentiality.",
      icon: Compass,
      color: "text-cyan-400",
    },
    {
      num: "02",
      title: "Strategy & GTM Architecture",
      description:
        "Formulate a 90-day execution roadmap detailing target personas, GEO entity structure, pricing tiers, and paid creative angles.",
      icon: Lightbulb,
      color: "text-amber-400",
    },
    {
      num: "03",
      title: "Create, Craft & Launch",
      description:
        "Deploy iconic visual brand assets, lightning-fast UI web components, tracking pixels, and high-converting ad creative batches.",
      icon: PenTool,
      color: "text-rose-400",
    },
    {
      num: "04",
      title: "Scale, Compound & Dominate",
      description:
        "Aggressively optimize winning ad sets, expand organic search clusters, and capture AI recommendations to dominate market share.",
      icon: Rocket,
      color: "text-emerald-400",
    },
  ];

  return (
    <section className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
            Our Proven Methodology
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
            How We Engineer Predictable Growth
          </h2>
          <p className="text-xs sm:text-base text-slate-400 mt-2">
            No guesswork, no vanity metrics. A structured 4-phase framework engineered to maximize capital efficiency and brand prestige.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-slate-800 font-mono group-hover:text-slate-700 transition-colors">
                      {step.num}
                    </span>
                    <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                      <Icon className={`h-5 w-5 ${step.color}`} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Phase {idx + 1} of 4</span>
                  <span className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
