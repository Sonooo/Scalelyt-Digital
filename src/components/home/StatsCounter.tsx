import React from "react";
import { agencyData } from "@/data/agency";

export function StatsCounter() {
  const stats = [
    {
      value: agencyData.stats.revenueGenerated,
      label: "Client Revenue Generated",
      detail: "Tracked pipeline closed by our partner brands",
    },
    {
      value: agencyData.stats.clientsServed,
      label: "Growth Engagements Delivered",
      detail: "Across SaaS, D2C, B2B & Healthcare",
    },
    {
      value: agencyData.stats.avgRoas,
      label: "Average Blended ROAS",
      detail: "Paid media efficiency across Google & Meta",
    },
    {
      value: agencyData.stats.clientSatisfaction,
      label: "Client Retention & NPS",
      detail: "Long-term compounding partnership model",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((item) => (
            <div key={item.label} className="space-y-2">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-mono tracking-tight">
                {item.value}
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                {item.label}
              </h4>
              <p className="text-[11px] text-slate-400 max-w-[200px] mx-auto hidden sm:block">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
