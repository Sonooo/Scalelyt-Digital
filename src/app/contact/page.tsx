"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Send,
  Loader2,
  ExternalLink,
} from "lucide-react";
import { agencyData } from "@/data/agency";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Digital Marketing (SEO / GEO / Ads)",
    budget: "$3,000 - $6,000/mo (₹1.5L - ₹3.5L)",
    details: "",
    honeypot: "",
  });

  const [selectedDate, setSelectedDate] = useState("Tomorrow, 3:30 PM IST");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const availableSlots = [
    "Today, 5:00 PM IST (11:30 AM GMT)",
    "Tomorrow, 11:00 AM IST (5:30 AM GMT)",
    "Tomorrow, 3:30 PM IST (10:00 AM GMT)",
    "Day After, 4:00 PM IST (10:30 AM GMT)",
    "Day After, 6:30 PM IST (1:00 PM GMT)",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;

    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          preferredSlot: selectedDate,
          source: "Contact Page Consultation Form",
        }),
      });
      // Save locally
      const inquiries = JSON.parse(
        localStorage.getItem("scalelyt_leads") || "[]"
      );
      inquiries.push({
        ...formData,
        preferredSlot: selectedDate,
        date: new Date().toISOString(),
      });
      localStorage.setItem("scalelyt_leads", JSON.stringify(inquiries));
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Scalelyt Digital",
    description: "Book a strategic growth consultation with Scalelyt Digital.",
    mainEntity: {
      "@type": "ProfessionalService",
      name: agencyData.name,
      telephone: agencyData.phone,
      email: agencyData.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: agencyData.address.street,
        addressLocality: agencyData.address.city,
        addressRegion: agencyData.address.region,
        postalCode: agencyData.address.postalCode,
        addressCountry: agencyData.address.countryCode,
      },
    },
  };

  const whatsappUrl = `https://wa.me/${agencyData.whatsappNumber}?text=${encodeURIComponent(
    agencyData.whatsappMessage
  )}`;

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={contactSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Contact & Consultation", url: "/contact" }]} />

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
            Start The Conversation
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-2 tracking-tight">
            Book a Strategy Session or Direct Discovery Call
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Whether you need a full brand overhaul, an AI search (GEO) audit, or high-ROAS performance ad scaling, let&apos;s talk numbers and strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form & Slot Picker */}
          <div className="lg:col-span-7 bg-slate-900/60 p-6 sm:p-10 rounded-3xl border border-slate-800 backdrop-blur-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-2">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Strategy Session Confirmed!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. We have scheduled your initial slot review for{" "}
                  <span className="text-cyan-400 font-semibold">{selectedDate}</span>. Our growth director will reach out via WhatsApp and calendar invitation.
                </p>
                <div className="pt-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Ping us on WhatsApp Now</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot */}
                <input
                  type="text"
                  name="work_url"
                  value={formData.honeypot}
                  onChange={(e) =>
                    setFormData({ ...formData, honeypot: e.target.value })
                  }
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="space-y-2 mb-4">
                  <label className="block text-xs font-semibold text-slate-300">
                    Preferred 30-Min Strategy Call Time Slot:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {availableSlots.map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setSelectedDate(slot)}
                        className={`p-2.5 rounded-xl text-xs text-left border transition-all cursor-pointer flex items-center gap-2 ${
                          selectedDate === slot
                            ? "bg-cyan-500/10 border-cyan-400 text-cyan-300 font-semibold"
                            : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                        }`}
                      >
                        <Calendar className="h-3.5 w-3.5 shrink-0" />
                        <span className="truncate">{slot}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Phone Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Company or Website URL
                    </label>
                    <input
                      type="text"
                      placeholder="Company.com"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
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
                      <option value="Full-Funnel Omnichannel Scaling">
                        Full-Funnel Omnichannel Scaling
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Approximate Monthly Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
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
                      <option value="Custom Enterprise Model">
                        Custom Enterprise Model
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    What is your primary growth goal or challenge?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="E.g., We need to rank for high-intent AI queries and drop our customer acquisition costs..."
                    value={formData.details}
                    onChange={(e) =>
                      setFormData({ ...formData, details: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/25 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Reserving Strategy Session...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Confirm Consultation & Time Slot</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span>100% Confidential • Under Strict NDA • Zero Sales Pressure</span>
                </div>
              </form>
            )}
          </div>

          {/* Direct Office Info & Fast Contact */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 border border-emerald-500/30 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    Need Immediate Answers?
                  </h3>
                  <p className="text-xs text-emerald-300">
                    Average response under 15 minutes
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with our strategy team on WhatsApp to ask questions, share your current website, or get an instant quote estimate.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md shadow-emerald-500/20"
              >
                <span>Message on WhatsApp</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Office Details */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Headquarters & Coordinates
              </h3>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Pune Innovation Center</strong>
                    <span>{agencyData.address.street}, {agencyData.address.locality}, {agencyData.address.city}, {agencyData.address.region} {agencyData.address.postalCode}, {agencyData.address.country}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Primary Inquiries:</span>
                    <a href={`mailto:${agencyData.email}`} className="text-white hover:text-cyan-400">
                      {agencyData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Direct Phone:</span>
                    <a href={`tel:${agencyData.phone}`} className="text-white hover:text-cyan-400">
                      {agencyData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Consultation Hours:</span>
                    <span>Monday – Saturday: 9:30 AM – 7:30 PM IST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
