import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Service | Scalelyt Digital",
  description:
    "Terms and Conditions governing digital marketing, graphic design, and business consultancy services delivered by Scalelyt Digital.",
  alternates: {
    canonical: "https://scalelytdigital.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Terms of Service", url: "/terms" }]} />

        <div className="space-y-4 mb-10">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
            Commercial Agreement
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-400">
            Effective Date: April 2026 • Governed by the Laws of Maharashtra, India
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-300 space-y-6 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Scope of Services</h2>
            <p>
              Scalelyt Digital delivers creative design, search optimization (SEO/AEO/GEO), paid advertising media management, and strategic business consulting according to signed Statements of Work (SOW) or digital packages selected through our platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Intellectual Property & Deliverables</h2>
            <p>
              Upon receipt of full payment for agreed milestones, 100% of commercial rights, vector files, copy, and creative assets produced specifically for the Client transfer unconditionally to the Client. Scalelyt Digital retains the right to showcase anonymized case metrics and visual work in agency portfolio archives unless a formal non-disclosure agreement (NDA) restricts publicity.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Third-Party Media Spend & Platforms</h2>
            <p>
              Clients are directly responsible for paid advertising spend billed by third-party platforms (Google Ads, Meta Ads, LinkedIn Ads). Scalelyt Digital manages and optimizes campaigns but does not absorb media spend liabilities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Confidentiality</h2>
            <p>
              All proprietary business figures, customer data, and operational roadmaps shared during consultations are held under strict non-disclosure obligations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Governing Law</h2>
            <p>
              Any disputes arising from services rendered shall be resolved through arbitration under the jurisdiction of the courts of Pune, Maharashtra, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
