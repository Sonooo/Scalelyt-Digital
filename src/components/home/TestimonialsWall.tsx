import React from "react";
import { Star } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export function TestimonialsWall() {
  return (
    <section className="py-20 bg-slate-900/30 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
            Verified Client Praise
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
            Loved by Founders, CEOs & CMOs
          </h2>
          <p className="text-xs sm:text-base text-slate-400 mt-2">
            Read unfiltered feedback from executive leaders who trusted Scalelyt Digital with their growth engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    {t.metricHighlight}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    {t.author}
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    {t.role}, <span className="text-slate-300">{t.company}</span>
                  </p>
                </div>
                <div className="text-[10px] text-slate-400 font-medium px-2 py-0.5 rounded bg-slate-900">
                  {t.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
