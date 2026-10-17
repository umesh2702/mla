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
    { label: "Methodology", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#101113]/90 backdrop-blur-md border-b border-[#262930] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Identity */}
        <Link
          href="/"
          id="brand-logo-link"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#D72B75] rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E222A] to-[#121316] border border-[#2D313A] flex items-center justify-center shadow-md group-hover:border-[#D72B75]/50 transition-colors">
            <span className="font-display font-extrabold text-lg text-[#D72B75] tracking-tight">
              BRS
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-base text-[#E8E2D7] tracking-tight group-hover:text-white transition-colors">
                LEADERSHIP PLATFORM
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#D72B75]/15 text-[#D72B75] border border-[#D72B75]/30">
                Civic MVP
              </span>
            </div>
            <span className="text-[11px] text-[#777B78] tracking-wide">
              Verified Public Representation & Legislative Records
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 rounded-lg transition-all ${
                  isActive
                    ? "text-white bg-[#191B20] border border-[#2D313A] shadow-sm font-semibold"
                    : "text-[#9EA39F] hover:text-[#E8E2D7] hover:bg-[#16181C]"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {link.label}
                  {link.badge && (
                    <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-[#D72B75] text-white">
                      {link.badge}
                    </span>
                  )}
                </span>
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D72B75] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Quick CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/leaders/kp-vivekanand"
            id="header-flagship-cta"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-[#D72B75] text-white hover:bg-[#E34389] transition-all shadow-md shadow-[#D72B75]/20 hover:shadow-[#D72B75]/40 active:scale-95"
          >
            <span>Quthbullapur Profile</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            href="/leaders/kp-vivekanand"
            className="text-xs px-2.5 py-1.5 rounded-lg bg-[#D72B75] text-white font-semibold"
          >
            KPV Profile
          </Link>
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#9EA39F] hover:text-white hover:bg-[#191B20] border border-transparent hover:border-[#2D313A] focus:outline-none focus:ring-2 focus:ring-[#D72B75]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden border-t border-[#262930] bg-[#101113] px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top duration-200"
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
                    ? "bg-[#191B20] text-white border border-[#2D313A]"
                    : "text-[#9EA39F] hover:bg-[#16181C] hover:text-[#E8E2D7]"
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#D72B75] text-white">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-[#262930] flex flex-col gap-2">
            <Link
              href="/leaders/kp-vivekanand"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold bg-[#D72B75] text-white hover:bg-[#E34389] transition-colors"
            >
              <span>View Flagship Quthbullapur Profile</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
            <div className="text-[11px] text-[#777B78] text-center pt-2">
              Independent Civic Research Prototype &bull; Not an Official Party Site
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
