import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="relative z-50 bg-gradient-to-r from-indigo-950 via-slate-900 to-cyan-950 border-b border-indigo-500/20 px-4 py-2 text-center text-xs text-slate-300">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-semibold text-[10px] uppercase tracking-wider">
          <Sparkles className="h-3 w-3" />
          <span>New in 2026</span>
        </span>
        <span className="font-medium text-white">
          Is Your Business Prepared for AI Search & Answer Engines?
        </span>
        <span className="text-slate-400 hidden sm:inline">•</span>
        <Link
          href="/resources"
          className="inline-flex items-center gap-1 font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group underline-offset-2 hover:underline"
        >
          <span>Download Free 2026 GEO Playbook</span>
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
