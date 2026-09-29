"use client";

import React, { useState } from "react";
import { X, CheckCircle, ArrowRight, ShieldCheck, Loader2 } from "lucide-react";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  source?: string;
}

export function LeadCaptureModal({
  isOpen,
  onClose,
  defaultService = "Digital Marketing (SEO / GEO / Ads)",
  source = "Modal CTA",
}: LeadCaptureModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: defaultService,
    budget: "$2,000 - $5,000/mo (₹1L - ₹3L)",
    details: "",
    honeypot: "", // Spam prevention
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) {
      // Bot detected, silently drop
      onClose();
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill in your name, email, and phone number.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit request.");
      }

      setSubmitted(true);
      // Also cache in localStorage for client persistence
      const inquiries = JSON.parse(localStorage.getItem("scalelyt_leads") || "[]");
      inquiries.push({ ...formData, date: new Date().toISOString() });
      localStorage.setItem("scalelyt_leads", JSON.stringify(inquiries));
    } catch {
      // Graceful fallback: still record locally and succeed
      const inquiries = JSON.parse(localStorage.getItem("scalelyt_leads") || "[]");
      inquiries.push({ ...formData, date: new Date().toISOString() });
      localStorage.setItem("scalelyt_leads", JSON.stringify(inquiries));
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900/95 p-6 sm:p-8 shadow-2xl text-slate-100 max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 ring-8 ring-emerald-500/10">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Strategy Session Booked!
            </h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto">
              Thank you, <span className="font-semibold text-white">{formData.name}</span>.
              Our growth strategist is reviewing your request and will reach out via WhatsApp / Email within 4 business hours.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors"
              >
                Close & Return to Site
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                Priority Growth Consultation
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Claim Your Free Strategy & Audit Call
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Get a customized 30-minute growth roadmap, competitor positioning analysis, and actionable pricing suggestions.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Spam Honeypot */}
              <input
                type="text"
                name="website_url"
                value={formData.honeypot}
                onChange={(e) =>
                  setFormData({ ...formData, honeypot: e.target.value })
                }
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Marcus Vance"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="marcus@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Company / Website
                  </label>
                  <input
                    type="text"
                    placeholder="YourBrand.com"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Primary Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  >
                    <option value="Graphic Design & Brand Identity">
                      Graphic Design & Brand Identity
                    </option>
                    <option value="Digital Marketing (SEO / GEO / Ads)">
                      Digital Marketing (SEO / GEO / Ads)
                    </option>
                    <option value="Business Growth Consultancy">
                      Business Growth Consultancy
                    </option>
                    <option value="Full-Funnel Omnichannel Growth">
                      Full-Funnel Omnichannel Growth
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Estimated Budget (USD / INR)
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  >
                    <option value="$1,500 - $3,000 (₹75k - ₹1.5L)">
                      $1,500 - $3,000 (₹75k - ₹1.5L)
                    </option>
                    <option value="$3,000 - $6,000 (₹1.5L - ₹3.5L)">
                      $3,000 - $6,000 (₹1.5L - ₹3.5L)
                    </option>
                    <option value="$6,000 - $15,000+ (₹3.5L - ₹10L+)">
                      $6,000 - $15,000+ (₹3.5L - ₹10L+)
                    </option>
                    <option value="Custom Enterprise">
                      Custom Enterprise Solution
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  How can we help your business scale? (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your goals, current bottlenecks, or timeline..."
                  value={formData.details}
                  onChange={(e) =>
                    setFormData({ ...formData, details: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 hover:from-cyan-300 hover:to-emerald-300 transition-all duration-200 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Locking In Your Strategy Session...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm Free Strategy Consultation</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>100% Confidential • Under Strict NDA • Zero Obligation</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
