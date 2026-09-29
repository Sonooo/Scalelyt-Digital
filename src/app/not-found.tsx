import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Compass, Calculator } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32 flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center space-y-6">
        <span className="text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-mono">
          404
        </span>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Page Not Found in the Growth Funnel
        </h1>

        <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
          The page or asset you are seeking has been moved, archived, or does not exist. Here are helpful destinations to get back on track:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 text-xs font-semibold">
          <Link
            href="/"
            className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white flex flex-col items-center gap-1.5 transition-colors"
          >
            <Home className="h-4 w-4 text-cyan-400" />
            <span>Home Page</span>
          </Link>

          <Link
            href="/services"
            className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white flex flex-col items-center gap-1.5 transition-colors"
          >
            <Compass className="h-4 w-4 text-rose-400" />
            <span>Services Hub</span>
          </Link>

          <Link
            href="/calculator"
            className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white flex flex-col items-center gap-1.5 transition-colors col-span-2 sm:col-span-1"
          >
            <Calculator className="h-4 w-4 text-emerald-400" />
            <span>ROI Calculator</span>
          </Link>
        </div>

        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Scalelyt Digital Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
