"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Palette,
  TrendingUp,
  Briefcase,
  ArrowRight,
  PhoneCall,
  Sparkles,
  Calculator,
} from "lucide-react";
import { LeadCaptureModal } from "@/components/common/LeadCaptureModal";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileMenuOpen(false);
      setServicesDropdownOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const navLinks = [
    { name: "Portfolio", href: "/work" },
    { name: "ROI Calculator", href: "/calculator", icon: Calculator },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Insights", href: "/blog" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/20"
            : "bg-slate-950/60 backdrop-blur-md border-b border-slate-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-emerald-400 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
                <div className="h-full w-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 text-lg">
                    S
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white tracking-tight leading-none group-hover:text-cyan-300 transition-colors">
                  Scalelyt<span className="text-cyan-400">.</span>
                </span>
                <span className="text-[10px] text-slate-400 tracking-wider font-semibold uppercase mt-1">
                  Digital Growth
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={servicesDropdownOpen}
                  className={`flex items-center gap-1.5 text-sm font-medium py-2 transition-colors cursor-pointer ${
                    pathname.startsWith("/services")
                      ? "text-cyan-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 -ml-4 pt-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="rounded-2xl border border-slate-800 bg-slate-950/95 p-3 shadow-2xl backdrop-blur-xl space-y-1">
                      <Link
                        href="/services"
                        className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-900 transition-colors mb-1 border-b border-slate-900 pb-2"
                      >
                        Explore All Services Overview →
                      </Link>

                      <Link
                        href="/services/graphic-design"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-900/90 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 group-hover:bg-rose-500 group-hover:text-white transition-colors shrink-0 mt-0.5">
                          <Palette className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white group-hover:text-rose-300">
                            Graphic Design & Branding
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                            Logos, brand identities, UI/UX & packaging
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/services/digital-marketing"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-900/90 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors shrink-0 mt-0.5">
                          <TrendingUp className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white group-hover:text-cyan-300">
                            Digital Marketing (SEO / GEO / Ads)
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                            Google/Meta Ads, Technical SEO & AI Search
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/services/consultancy"
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-900/90 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors shrink-0 mt-0.5">
                          <Briefcase className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white group-hover:text-emerald-300">
                            Business Growth Consultancy
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                            GTM strategy, pricing redesign & funnels
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? "text-cyan-400"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold rounded-xl group bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95 transition-all cursor-pointer"
              >
                <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-transparent rounded-xl flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 fill-slate-950" />
                  <span>Book Free Consultation</span>
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setModalOpen(true)}
                className="px-3 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950"
              >
                Book Call
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-800 bg-slate-950/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
            <div className="space-y-1">
              <p className="px-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Core Services
              </p>
              <Link
                href="/services/graphic-design"
                className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-900"
              >
                <Palette className="h-4 w-4 text-rose-400" />
                <span>Graphic Design & Branding</span>
              </Link>
              <Link
                href="/services/digital-marketing"
                className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-900"
              >
                <TrendingUp className="h-4 w-4 text-cyan-400" />
                <span>Digital Marketing (SEO / GEO / Ads)</span>
              </Link>
              <Link
                href="/services/consultancy"
                className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-900"
              >
                <Briefcase className="h-4 w-4 text-emerald-400" />
                <span>Business Growth Consultancy</span>
              </Link>
            </div>

            <div className="border-t border-slate-900 pt-3 space-y-1">
              <p className="px-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Explore Agency
              </p>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-900"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block px-3 py-2 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-900"
              >
                Contact & Office Details
              </Link>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setModalOpen(true);
                }}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 flex items-center justify-center gap-2"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Book 30-Min Strategy Call</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Sticky Bottom CTA Bar (FR-05) */}
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden p-3 bg-slate-950/90 backdrop-blur-xl border-t border-slate-800 flex items-center justify-between gap-2 shadow-2xl">
        <Link
          href="/calculator"
          className="flex-1 py-2 px-3 rounded-xl bg-slate-800/90 text-slate-200 font-medium text-xs flex items-center justify-center gap-1.5 border border-slate-700/60"
        >
          <Calculator className="h-3.5 w-3.5 text-cyan-400" />
          <span>ROI Calculator</span>
        </Link>
        <button
          onClick={() => setModalOpen(true)}
          className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-cyan-500/20"
        >
          <span>Book Call</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <LeadCaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        source="Header Navigation CTA"
      />
    </>
  );
}
