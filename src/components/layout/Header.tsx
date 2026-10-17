"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Overview", href: "/" },
    { label: "Directory", href: "/leaders" },
    { label: "Quthbullapur Profile", href: "/leaders/kp-vivekanand", badge: "Flagship" },
    { label: "Methodology & Sources", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#F0E4EA] shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Identity */}
        <Link
          href="/"
          id="brand-logo-link"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#D72B75] rounded-xl p-1"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D72B75] to-[#A51D55] flex items-center justify-center shadow-md shadow-[#D72B75]/20 group-hover:scale-105 transition-transform">
            <span className="font-display font-black text-xl text-white tracking-tight">
              BRS
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-base text-[#24212A] tracking-tight group-hover:text-[#D72B75] transition-colors">
                LEADERSHIP PLATFORM
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FCE7F0] text-[#A51D55] border border-[#F8D7E5]">
                Civic Portfolio
              </span>
            </div>
            <span className="text-[11px] text-[#77717B] font-medium tracking-wide">
              Verified Public Representation &amp; Legislative Records
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-xl transition-all ${
                  isActive
                    ? "text-[#A51D55] bg-[#FCE7F0]/60 font-semibold shadow-xs"
                    : "text-[#77717B] hover:text-[#24212A] hover:bg-[#FFF8F8]"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {link.label}
                  {link.badge && (
                    <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-gradient-to-r from-[#D72B75] to-[#A51D55] text-white">
                      {link.badge}
                    </span>
                  )}
                </span>
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#D72B75] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Prominent Pink CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/leaders/kp-vivekanand"
            id="header-flagship-cta"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#D72B75] to-[#A51D55] text-white hover:opacity-95 transition-all shadow-md shadow-[#D72B75]/25 hover:shadow-lg hover:shadow-[#D72B75]/35 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>View Flagship Profile</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <Link
            href="/leaders/kp-vivekanand"
            className="text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#D72B75] to-[#A51D55] text-white font-semibold"
          >
            KPV Profile
          </Link>
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#24212A] hover:bg-[#FCE7F0] border border-[#F0E4EA] focus:outline-none focus:ring-2 focus:ring-[#D72B75]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#D72B75]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden border-t border-[#F0E4EA] bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in fade-in slide-in-from-top duration-200"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium ${
                  isActive
                    ? "bg-[#FCE7F0] text-[#A51D55] font-semibold"
                    : "text-[#24212A] hover:bg-[#FFF8F8]"
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r from-[#D72B75] to-[#A51D55] text-white">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-[#F0E4EA] flex flex-col gap-2">
            <Link
              href="/leaders/kp-vivekanand"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold bg-gradient-to-r from-[#D72B75] to-[#A51D55] text-white hover:opacity-95 shadow-md shadow-[#D72B75]/20"
            >
              <span>View Flagship Quthbullapur Profile</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
            <div className="text-[11px] text-[#77717B] text-center pt-2">
              Independent Civic Research Prototype &bull; Not an Official Party Site
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
