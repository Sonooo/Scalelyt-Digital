import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { agencyData } from "@/data/agency";

export const metadata: Metadata = {
  title: "Privacy Policy | GDPR & DPDP Compliant | Scalelyt Digital",
  description:
    "Privacy Policy for Scalelyt Digital. Learn how we handle your personal data in full compliance with the EU GDPR and India Digital Personal Data Protection (DPDP) Act.",
  alternates: {
    canonical: "https://scalelytdigital.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Privacy Policy", url: "/privacy" }]} />

        <div className="space-y-4 mb-10">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
            Legal Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400">
            Last Updated: April 2026 • Compliant with GDPR (EU/UK) & Digital Personal Data Protection (DPDP) Act (India)
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-300 space-y-6 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Introduction</h2>
            <p>
              {agencyData.legalName} (&quot;Scalelyt Digital&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website located at https://scalelytdigital.com. We respect your privacy and are committed to protecting personal information provided to us through our contact forms, marketing calculators, and consultation requests.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Data We Collect</h2>
            <p>We collect only information necessary to deliver and scope agency engagements:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li><strong>Contact Information:</strong> Full name, corporate email address, telephone/WhatsApp number.</li>
              <li><strong>Business Details:</strong> Company name, website URL, approximate monthly budget, and growth challenges.</li>
              <li><strong>Usage Analytics:</strong> Aggregated, anonymized website navigation, page load metrics, and referring sources collected via privacy-first analytics tools.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. How We Use Your Data</h2>
            <p>Your data is used strictly for:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li>Preparing customized growth strategy roadmaps and consultation proposals.</li>
              <li>Responding directly to inquiries via phone, email, or WhatsApp.</li>
              <li>Delivering requested digital marketing resources and whitepapers.</li>
              <li>Sending our bi-weekly Growth Dispatch newsletter (if explicitly opted-in).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Data Sharing & Third Parties</h2>
            <p>
              <strong>We never sell, rent, or trade your personal information.</strong> Data is shared only with vetted infrastructure processors necessary to operate our business (e.g. encrypted cloud hosting, transactional email providers, and internal CRM systems under confidentiality agreements).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Your Legal Rights (GDPR & DPDP)</h2>
            <p>
              Under applicable data protection laws, you retain the right to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li>Request a copy of the personal data we hold about you.</li>
              <li>Request correction or rectification of incomplete or inaccurate data.</li>
              <li>Request permanent deletion (&quot;Right to be Forgotten&quot;) of your data.</li>
              <li>Withdraw marketing consent at any time with a single click.</li>
            </ul>
            <p>
              To exercise these rights, email our Data Privacy Officer at{" "}
              <a href={`mailto:${agencyData.email}`} className="text-cyan-400 underline">
                {agencyData.email}
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">6. Office Address & Jurisdiction</h2>
            <p>
              {agencyData.legalName}<br />
              {agencyData.address.street}, {agencyData.address.locality}, {agencyData.address.city}, {agencyData.address.region} {agencyData.address.postalCode}, {agencyData.address.country}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
