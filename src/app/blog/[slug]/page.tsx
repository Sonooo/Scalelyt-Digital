import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { blogPostsData } from "@/data/blogPosts";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { AeoDirectAnswer } from "@/components/common/AeoDirectAnswer";
import { JsonLd } from "@/components/common/JsonLd";
import { CtaBanner } from "@/components/home/CtaBanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | Scalelyt Digital Insights`,
    description: post.summary,
    alternates: {
      canonical: `https://scalelytdigital.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
  };
}

export default async function BlogPostDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPostsData
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      description: post.author.bio,
    },
    publisher: {
      "@type": "Organization",
      name: "Scalelyt Digital",
      logo: {
        "@type": "ImageObject",
        url: "https://scalelytdigital.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://scalelytdigital.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={articleSchema} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Blog", url: "/blog" },
            { name: post.title, url: `/blog/${post.slug}` },
          ]}
        />

        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to All Articles</span>
        </Link>

        {/* Header */}
        <header className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-semibold">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-slate-400">
              <Clock className="h-3.5 w-3.5" />
              <span>{post.readTime}</span>
            </span>
            <span className="flex items-center gap-1 text-slate-400">
              <Calendar className="h-3.5 w-3.5" />
              <span>Updated: {post.updatedAt}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {post.summary}
          </p>

          {/* Author Strip */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
            <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-200 text-sm">
              {post.author.name[0]}
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-tight">
                {post.author.name}
              </p>
              <p className="text-xs text-slate-400">
                {post.author.role}
              </p>
            </div>
          </div>
        </header>

        {/* AEO Direct Answer Box (Section 6.6) */}
        <AeoDirectAnswer
          question="Key Takeaway (AEO & AI Search Summary)"
          answer={post.directAnswer}
          citationSource={`Scalelyt Digital Research (${post.author.name})`}
        />

        {/* Table of Contents */}
        <nav
          aria-label="Table of contents"
          className="my-8 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs"
        >
          <span className="font-bold text-slate-300 uppercase tracking-wider block mb-2">
            Table of Contents
          </span>
          <ul className="space-y-1.5 text-slate-400">
            {post.content.map((sec, idx) => (
              <li key={sec.heading}>
                <a
                  href={`#section-${idx}`}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {sec.heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content Sections */}
        <article className="space-y-10 my-10 text-slate-200">
          {post.content.map((section, idx) => (
            <section key={section.heading} id={`section-${idx}`} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, pIdx) => (
                <p
                  key={pIdx}
                  className="text-xs sm:text-sm sm:leading-relaxed text-slate-300"
                >
                  {p}
                </p>
              ))}

              {section.takeaways && (
                <div className="my-4 p-4 rounded-xl bg-slate-900 border border-cyan-500/20 space-y-2">
                  <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">
                    Strategic Action Items:
                  </span>
                  {section.takeaways.map((t) => (
                    <div key={t} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </article>

        {/* Tags */}
        <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-2 items-center">
          <span className="text-xs text-slate-400 mr-2">Topic Tags:</span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-slate-300 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio Box (E-E-A-T) */}
        <div className="my-12 p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="h-16 w-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-bold text-xl text-cyan-400 shrink-0">
            {post.author.name[0]}
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <h3 className="text-base font-bold text-white">
                Written by {post.author.name}
              </h3>
              <span className="text-xs text-cyan-400">
                {post.author.role}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {post.author.bio}
            </p>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="my-12 space-y-4">
            <h3 className="text-lg font-bold text-white">
              Related Articles & Research
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPosts.map((r) => (
                <Link
                  key={r.id}
                  href={`/blog/${r.slug}`}
                  className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors block group"
                >
                  <span className="text-[11px] text-cyan-400 block mb-1">
                    {r.category}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 line-clamp-2">
                    {r.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-20">
        <CtaBanner />
      </div>
    </div>
  );
}
