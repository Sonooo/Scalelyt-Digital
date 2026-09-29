"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Filter,
} from "lucide-react";
import { caseStudiesData } from "@/data/caseStudies";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Graphic Design",
    "Digital Marketing",
    "Business Consultancy",
  ];

  const filteredCases =
    activeCategory === "All"
      ? caseStudiesData
      : caseStudiesData.filter((c) => c.category === activeCategory);

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Portfolio & Case Studies", url: "/work" }]} />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
            Proven Client Results
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
            Our Work: Measurable ROI & Brand Transformations
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Browse our portfolio of brand architectures, Generative Engine Optimization campaigns, and business turnarounds. Every project is measured by bottom-line growth.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mr-2">
            <Filter className="h-3.5 w-3.5" />
            <span>Filter by Pillar:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((cs) => (
            <article
              key={cs.id}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-500/40 transition-all group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-medium">
                    {cs.industry}
                  </span>
                  <span className="font-semibold text-cyan-400">
                    {cs.category}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {cs.title}
                </h2>
                <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                  {cs.shortDescription}
                </p>

                {/* Primary Metric Highlight Box */}
                <div className="grid grid-cols-2 gap-3 my-6 p-4 rounded-2xl bg-slate-950 border border-slate-800">
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

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <Link
                  href={`/work/${cs.slug}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <CtaBanner />
      </div>
    </div>
  );
}
