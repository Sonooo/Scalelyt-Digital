"use client";

import React, { useState } from "react";
import {
  Download,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { resourcesData, Resource } from "@/data/resources";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function ResourcesPage() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [email, setEmail] = useState("");
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadClick = (res: Resource) => {
    setSelectedResource(res);
    setDownloadSuccess(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const leads = JSON.parse(
      localStorage.getItem("scalelyt_resource_leads") || "[]"
    );
    leads.push({
      email,
      resource: selectedResource?.title,
      date: new Date().toISOString(),
    });
    localStorage.setItem("scalelyt_resource_leads", JSON.stringify(leads));

    setDownloadSuccess(true);
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Free Growth Resources", url: "/resources" }]} />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
            Free Toolkits & Playbooks
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
            Battle-Tested Growth Frameworks & Checklists
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Download the exact templates, audit scorecards, and AI search indexing blueprints we use with our seven-figure clients. Zero cost, instant access.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          {resourcesData.map((res) => (
            <div
              key={res.id}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all group relative overflow-hidden"
            >
              {res.badge && (
                <span className="absolute top-6 right-6 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-[10px] font-bold uppercase tracking-wider">
                  {res.badge}
                </span>
              )}

              <div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-medium text-[11px]">
                    {res.category}
                  </span>
                  <span>•</span>
                  <span>{res.format}</span>
                  <span>•</span>
                  <span className="text-cyan-400">{res.downloadsCount} Downloads</span>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {res.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  {res.description}
                </p>

                <div className="my-6 p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    What&apos;s Inside:
                  </span>
                  {res.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-start gap-2 text-xs text-slate-300 leading-snug"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => handleDownloadClick(res)}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-cyan-500/20"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Free Asset</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for downloading */}
      {selectedResource && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 shadow-2xl text-slate-100">
            <button
              onClick={() => setSelectedResource(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 text-sm"
            >
              ✕
            </button>

            {downloadSuccess ? (
              <div className="text-center py-6 space-y-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-1">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  Download Link Sent!
                </h3>
                <p className="text-xs text-slate-300">
                  We have dispatched <span className="text-cyan-400 font-medium">{selectedResource.title}</span> to{" "}
                  <span className="text-white font-semibold">{email}</span>. Please check your inbox.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedResource(null)}
                    className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider">
                    Instant Access
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">
                    Download {selectedResource.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Enter your work email to receive the direct download link and editable Notion/Google Sheets template.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-3 pt-2">
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
                  >
                    <Download className="h-4 w-4" />
                    <span>Get Instant Access</span>
                  </button>
                </form>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span>No spam. 100% free download.</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="mt-20">
        <CtaBanner />
      </div>
    </div>
  );
}
