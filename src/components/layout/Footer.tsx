"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  Award,
} from "lucide-react";
import { agencyData } from "@/data/agency";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const subscribers = JSON.parse(
      localStorage.getItem("scalelyt_subscribers") || "[]"
    );
    subscribers.push({ email, date: new Date().toISOString() });
    localStorage.setItem(
      "scalelyt_subscribers",
      JSON.stringify(subscribers)
    );
    setSubscribed(true);
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-sm">
      {/* Newsletter Bar */}
      <div className="border-b border-slate-900 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                The Growth Dispatch
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Stay Ahead of AI Search, Design Trends & Ad Algorithms
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1.5 max-w-lg">
                Join 4,200+ founders and CMOs receiving our bi-weekly breakdown of GEO strategies, brand breakdowns, and high-ROAS frameworks.
              </p>
            </div>

            <div>
              {subscribed ? (
                <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                  <CheckCircle className="h-5 w-5 shrink-0" />
                  <span>You are subscribed! Welcome to the Growth Dispatch.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletter}
                  className="flex flex-col sm:flex-row gap-2.5"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your executive email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-lg shadow-cyan-500/20"
                  >
                    <span>Subscribe</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
              <p className="text-[11px] text-slate-500 mt-2">
                Zero spam. Value only. Unsubscribe whenever you wish.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Agency Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[2px]">
                <div className="h-full w-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-white text-base">
                  S
                </div>
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Scalelyt<span className="text-cyan-400">.</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              {agencyData.description}
            </p>

            {/* Certifications & Badges */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-[11px]">
                <Award className="h-3.5 w-3.5 text-cyan-400" />
                <span>Google Premier Partner</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-[11px]">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>Clutch 4.9★ Top Agency</span>
              </span>
            </div>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>{agencyData.address.street}, {agencyData.address.city}, {agencyData.address.country}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${agencyData.email}`} className="hover:text-white transition-colors">
                  {agencyData.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-cyan-400 shrink-0" />
                <a href={`tel:${agencyData.phone}`} className="hover:text-white transition-colors">
                  {agencyData.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Graphic Design Pillar */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Graphic Design
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/services/graphic-design#logo-brand-identity" className="hover:text-cyan-400 transition-colors">
                  Logo & Brand Identity
                </Link>
              </li>
              <li>
                <Link href="/services/graphic-design#social-media-creatives" className="hover:text-cyan-400 transition-colors">
                  Social Media Creatives
                </Link>
              </li>
              <li>
                <Link href="/services/graphic-design#packaging-print" className="hover:text-cyan-400 transition-colors">
                  Packaging & Print Design
                </Link>
              </li>
              <li>
                <Link href="/services/graphic-design#ui-web-design" className="hover:text-cyan-400 transition-colors">
                  UI/UX & Web Design
                </Link>
              </li>
              <li>
                <Link href="/work?category=Graphic+Design" className="text-cyan-400 hover:underline">
                  Design Portfolio →
                </Link>
              </li>
            </ul>
          </div>

          {/* Digital Marketing Pillar */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Digital Marketing
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/services/digital-marketing#seo-aeo-geo" className="hover:text-cyan-400 transition-colors">
                  SEO, AEO & GEO (AI Search)
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing#performance-ads" className="hover:text-cyan-400 transition-colors">
                  Performance Ads (Google/Meta)
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing#social-media-marketing" className="hover:text-cyan-400 transition-colors">
                  Social Media Strategy
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing#content-email-marketing" className="hover:text-cyan-400 transition-colors">
                  Content & Email Funnels
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-emerald-400 hover:underline">
                  ROI & Budget Calculator →
                </Link>
              </li>
            </ul>
          </div>

          {/* Consultancy & Company */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Company & Insights
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/services/consultancy" className="hover:text-cyan-400 transition-colors">
                  Business Consultancy
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">
                  About Our Team & E-E-A-T
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-cyan-400 transition-colors">
                  Pricing & Packages
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-cyan-400 transition-colors">
                  Insights & Research
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-cyan-400 transition-colors">
                  Free Playbooks & Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                  Contact & Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: AI Crawlers, Legal & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-4 flex-wrap">
            <span>© {new Date().getFullYear()} Scalelyt Digital Agency. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy (GDPR/DPDP)
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <a
              href="/llms.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-cyan-400 flex items-center gap-1"
            >
              <span>llms.txt</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={agencyData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={agencyData.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              X (Twitter)
            </a>
            <a
              href={agencyData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href={agencyData.socials.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Behance
            </a>
            <a
              href={agencyData.socials.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Dribbble
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
