import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudiesData } from "@/data/caseStudies";

export function CaseStudyHighlights() {
  const featuredCases = caseStudiesData.filter((c) => c.featured).slice(0, 3);

  return (
    <section className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
              Proven Results & ROI
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
              Featured Case Studies
            </h2>
            <p className="text-xs sm:text-base text-slate-400 mt-2 max-w-xl">
              We judge our work by client revenues, conversion lifts, and market leadership. Here is what happens when strategy meets execution.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group shrink-0"
          >
            <span>View All Client Case Studies</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredCases.map((cs) => (
            <div
              key={cs.id}
              className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-800 text-slate-300">
                    {cs.industry}
                  </span>
                  <span className="text-xs font-semibold text-cyan-400">
                    {cs.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {cs.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2 line-clamp-3">
                  {cs.shortDescription}
                </p>

                {/* Primary Metric Highlight Box */}
                <div className="grid grid-cols-2 gap-3 my-6 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                      {cs.metrics[0].label}
                    </span>
                    <span className="text-xl font-extrabold text-emerald-400 font-mono">
                      {cs.metrics[0].value}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                      {cs.metrics[1].label}
                    </span>
                    <span className="text-xl font-extrabold text-cyan-400 font-mono">
                      {cs.metrics[1].value}
                    </span>
                  </div>
                </div>

                {/* Testimonial Snippet */}
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-6">
                  <p className="text-[11px] text-slate-300 italic line-clamp-2">
                    &ldquo;{cs.testimonial.quote}&rdquo;
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1 font-semibold">
                    — {cs.testimonial.author}, {cs.testimonial.company}
                  </p>
                </div>
              </div>

              <div>
                <Link
                  href={`/work/${cs.slug}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
