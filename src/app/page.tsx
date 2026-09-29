import React from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesPillars } from "@/components/home/ServicesPillars";
import { CaseStudyHighlights } from "@/components/home/CaseStudyHighlights";
import { ProcessSection } from "@/components/home/ProcessSection";
import { RoiCalculatorWidget } from "@/components/calculator/RoiCalculatorWidget";
import { TestimonialsWall } from "@/components/home/TestimonialsWall";
import { StatsCounter } from "@/components/home/StatsCounter";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { CtaBanner } from "@/components/home/CtaBanner";
import { blogPostsData } from "@/data/blogPosts";

export default function HomePage() {
  const latestPosts = blogPostsData.slice(0, 3);

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Bar & Client Logos */}
      <TrustBar />

      {/* 3. Three Core Pillars (Design, Marketing, Consultancy) */}
      <ServicesPillars />

      {/* 4. Stats Counter */}
      <StatsCounter />

      {/* 5. Featured Work & Case Studies with ROI */}
      <CaseStudyHighlights />

      {/* 6. Interactive ROI & Growth Calculator */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RoiCalculatorWidget />
        </div>
      </section>

      {/* 7. Methodology ("How We Work") */}
      <ProcessSection />

      {/* 8. Verified Testimonials Wall */}
      <TestimonialsWall />

      {/* 9. Latest Insights / Blog Preview */}
      <section className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Research & Knowledge
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
                Latest Insights & AI Search Guides
              </h2>
              <p className="text-xs sm:text-base text-slate-400 mt-2">
                Actionable tactics on Generative Engine Optimization, brand conversions, and revenue architecture.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors shrink-0 group"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between hover:border-slate-700 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[11px] font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-300">
                      {post.author.name[0]}
                    </div>
                    <span className="text-xs text-slate-300 font-medium">
                      {post.author.name}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1"
                  >
                    <span>Read</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Frequently Asked Questions */}
      <FaqAccordion />

      {/* 11. Final High-Converting CTA Banner */}
      <CtaBanner />
    </div>
  );
}
