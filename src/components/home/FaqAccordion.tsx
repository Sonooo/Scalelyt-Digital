"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { JsonLd } from "@/components/common/JsonLd";

interface FAQItem {
  question: string;
  answer: string;
}

export function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What makes Scalelyt Digital different from traditional marketing agencies?",
      answer:
        "Unlike single-channel agencies or design studios that hand off pretty graphics without conversion mechanics, Scalelyt Digital integrates high-end brand design, technical SEO, Generative Engine Optimization (GEO for ChatGPT/Perplexity), and business growth consultancy into one accountable revenue engine.",
    },
    {
      question: "What is Generative Engine Optimization (GEO) and why is it critical in 2026?",
      answer:
        "Generative Engine Optimization (GEO) is the discipline of structuring your brand's digital presence, entity data, JSON-LD schema, and llms.txt standard so Large Language Models (ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews) quote and recommend your company when potential clients ask for recommendations.",
    },
    {
      question: "How quickly can we expect measurable ROI from your services?",
      answer:
        "Paid performance media campaigns (Google/Meta Ads) typically produce qualified inbound leads within 7 to 14 days. Brand redesigns and UI/UX improvements yield instant conversion increases upon deployment. Technical SEO and GEO compound steadily, achieving dominant search presence within 60 to 90 days.",
    },
    {
      question: "Do you offer flexible engagement models?",
      answer:
        "Yes. We offer sprint-based diagnostic audits (e.g. 2-week Marketing & Revenue Audit), fixed-scope deliverables (Complete Brand & Web UI packages), and ongoing monthly growth retainers tailored to your specific scaling stage.",
    },
    {
      question: "How do we get started with Scalelyt Digital?",
      answer:
        "You can book a complimentary 30-minute Strategy Session where our growth leads analyze your current funnel, review competitor positioning, and outline high-leverage growth opportunities with zero obligation.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <section className="py-20 bg-slate-950 relative border-t border-slate-900">
      <JsonLd data={faqSchema} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
            Clear Answers • AEO Ready
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-base text-slate-400 mt-2">
            Everything you need to know about our capabilities, timelines, and scaling philosophy.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-cyan-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
