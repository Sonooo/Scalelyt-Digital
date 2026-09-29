"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, X, ExternalLink, ShieldCheck } from "lucide-react";
import { agencyData } from "@/data/agency";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${agencyData.whatsappNumber}?text=${encodeURIComponent(
    agencyData.whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 rounded-2xl border border-slate-700/80 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl text-slate-100 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-slate-950 font-bold text-xs">
                  SD
                </div>
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-900" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Scalelyt Growth Desk
                </h4>
                <p className="text-[11px] text-emerald-400 font-medium">
                  Online • Replies in ~15 mins
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close chat popup"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-slate-300 space-y-2">
            <div className="rounded-xl bg-slate-800/80 p-3 text-xs text-slate-200">
              👋 Hey there! Looking to scale your brand, improve your ad ROAS, or rank in AI search?
            </div>
            <p className="text-[11px] text-slate-400 px-1">
              Connect directly with our senior strategy team via WhatsApp or phone.
            </p>
          </div>

          <div className="space-y-2 pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors shadow-md shadow-emerald-500/20"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Start WhatsApp Conversation</span>
              <ExternalLink className="h-3 w-3 ml-auto opacity-70" />
            </a>

            <a
              href={`tel:${agencyData.phone.replace(/\s+/g, "")}`}
              className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors border border-slate-700/60"
            >
              <Phone className="h-3.5 w-3.5 text-cyan-400" />
              <span>Direct Call: {agencyData.phone}</span>
            </a>
          </div>

          <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-center gap-1 text-[10px] text-slate-500">
            <ShieldCheck className="h-3 w-3 text-emerald-500/70" />
            <span>Encrypted • No Sales Spam Guarantee</span>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 p-3.5 text-slate-950 shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950"
        aria-label="Open Quick Support & WhatsApp Chat"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="h-6 w-6 fill-slate-950 text-slate-950" />
        <span className="hidden sm:inline font-semibold text-xs text-slate-950 tracking-tight pr-1">
          Chat with Growth Lead
        </span>
      </button>
    </div>
  );
}
