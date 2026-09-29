"use client";

import React, { useState, useEffect } from "react";
import { X, Download, BookOpen, CheckCircle, Shield } from "lucide-react";

export function ExitIntentModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    // Check if dismissed in last 7 days
    const dismissedAt = localStorage.getItem("scalelyt_exit_intent_dismissed");
    if (dismissedAt) {
      const diffDays =
        (Date.now() - parseInt(dismissedAt, 10)) / (1000 * 60 * 60 * 24);
      if (diffDays < 7) {
        return;
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10) {
        setIsVisible(true);
      }
    };

    // Also trigger on 60 second timer if still engaged
    const timer = setTimeout(() => {
      if (!localStorage.getItem("scalelyt_exit_intent_dismissed")) {
        setIsVisible(true);
      }
    }, 60000);

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };
  }, []);

  const handleDismiss = () => {
    localStorage.setItem(
      "scalelyt_exit_intent_dismissed",
      Date.now().toString()
    );
    setIsVisible(false);
  };

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Save lead
    const leads = JSON.parse(
      localStorage.getItem("scalelyt_resource_leads") || "[]"
    );
    leads.push({
      email,
      resource: "The 2026 Generative Engine Optimization (GEO) Playbook",
      date: new Date().toISOString(),
    });
    localStorage.setItem("scalelyt_resource_leads", JSON.stringify(leads));

    setDownloaded(true);
    localStorage.setItem(
      "scalelyt_exit_intent_dismissed",
      Date.now().toString()
    );
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in zoom-in-95 duration-200"
    >
      <div className="relative w-full max-w-lg rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-8 shadow-2xl text-slate-100">
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors"
          aria-label="Dismiss offer"
        >
          <X className="h-5 w-5" />
        </button>

        {downloaded ? (
          <div className="py-6 text-center space-y-3">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-2">
              <CheckCircle className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-white">
              Playbook On Its Way!
            </h3>
            <p className="text-slate-300 text-sm">
              We just dispatched the PDF & Notion template to{" "}
              <span className="text-cyan-400 font-medium">{email}</span>. Check your inbox momentarily.
            </p>
            <button
              onClick={handleDismiss}
              className="mt-4 px-6 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
            >
              Continue Browsing
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium mb-3">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Free Growth Asset • Instant Access</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Before You Go: Download The 2026 AI Search (GEO) Playbook
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
              Learn the exact schema setups, llms.txt standard, and entity strategies we use to get our clients cited in ChatGPT, Perplexity, and Claude.
            </p>

            <div className="my-5 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 space-y-2 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Copy-paste llms.txt configuration file</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>AEO Direct Answer copywriting template</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Schema.org JSON-LD snippets for AI discovery</span>
              </div>
            </div>

            <form onSubmit={handleDownload} className="space-y-3">
              <input
                type="email"
                required
                placeholder="Enter your business email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              />
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
              >
                <Download className="h-4 w-4" />
                <span>Send Me The Free Playbook</span>
              </button>
            </form>

            <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
              <Shield className="h-3 w-3 text-slate-400" />
              <span>No spam. One-click unsubscribe at any time.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
