"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck } from "lucide-react";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const consent = localStorage.getItem("scalelyt_cookie_consent");
      if (!consent) {
        setShowBanner(true);
      }
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      "scalelyt_cookie_consent",
      JSON.stringify({ analytics: true, marketing: true, timestamp: Date.now() })
    );
    setShowBanner(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem(
      "scalelyt_cookie_consent",
      JSON.stringify({ analytics: false, marketing: false, timestamp: Date.now() })
    );
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-slate-950/95 border-t border-slate-800 backdrop-blur-lg shadow-2xl animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5 max-w-3xl">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
            <Cookie className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white flex items-center gap-2">
              <span>Privacy & Cookie Preferences</span>
              <span className="text-[10px] font-normal px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                GDPR & DPDP Compliant
              </span>
            </h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              We use cookies to analyze site traffic, optimize user experience, and ensure seamless delivery of our digital marketing and brand strategy tools. No sensitive financial information is collected. Learn more in our{" "}
              <Link
                href="/privacy"
                className="text-cyan-400 hover:underline underline-offset-2"
              >
                Privacy Policy
              </Link>.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full md:w-auto shrink-0">
          <button
            onClick={handleEssentialOnly}
            className="flex-1 md:flex-none px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700"
          >
            Essential Only
          </button>
          <button
            onClick={handleAcceptAll}
            className="flex-1 md:flex-none px-5 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 rounded-xl transition-all shadow-md shadow-cyan-500/20 flex items-center justify-center gap-1.5"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Accept All</span>
          </button>
        </div>
      </div>
    </div>
  );
}
