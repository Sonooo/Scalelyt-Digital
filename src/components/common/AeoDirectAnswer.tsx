import React from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";

interface AeoDirectAnswerProps {
  question?: string;
  answer: string;
  citationSource?: string;
  sourceUrl?: string;
}

export function AeoDirectAnswer({
  question = "Quick Answer (AEO / AI Overview)",
  answer,
  citationSource = "Scalelyt Digital Growth Architecture",
}: AeoDirectAnswerProps) {
  return (
    <aside
      aria-label="Direct Answer Summary"
      className="my-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/40 via-slate-900/60 to-slate-950/80 p-6 backdrop-blur-md shadow-lg shadow-cyan-950/20"
    >
      <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
        <Sparkles className="h-4 w-4 text-cyan-400 animate-pulse" />
        <span>Direct Summary • AI & Voice Search Index</span>
      </div>
      {question && (
        <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight">
          {question}
        </h3>
      )}
      <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
        {answer}
      </p>
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
          <span>Verified & Updated for 2026</span>
        </div>
        <span className="text-slate-500 hidden sm:inline">Source: {citationSource}</span>
      </div>
    </aside>
  );
}
