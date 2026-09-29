"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Clock,
  ArrowRight,
} from "lucide-react";
import { blogPostsData } from "@/data/blogPosts";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "SEO & GEO",
    "Brand Design",
    "Growth Strategy",
    "Paid Advertising",
  ];

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Blog & Insights", url: "/blog" }]} />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
            Scalelyt Insights & Research
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
            Original Frameworks on AI Search, Design & Scale
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            In-depth guides authored by our strategy practitioners. Deep dives into Generative Engine Optimization (GEO), high-converting brand design, and sales economics.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search guides, GEO frameworks, ad tactics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-800 bg-slate-900 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                    : "bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-all group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[11px] font-semibold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 my-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded-md border border-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-200">
                    {post.author.name[0]}
                  </div>
                  <div>
                    <span className="text-xs text-slate-200 font-semibold block leading-tight">
                      {post.author.name}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {post.publishedAt}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="py-16 text-center text-slate-400 space-y-2">
            <p>No articles found matching &quot;{searchQuery}&quot;.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="text-xs text-cyan-400 underline"
            >
              Reset search & filters
            </button>
          </div>
        )}
      </div>

      <div className="mt-20">
        <CtaBanner />
      </div>
    </div>
  );
}
