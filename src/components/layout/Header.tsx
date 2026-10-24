"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Constituencies", href: "/#constituencies" },
    { label: "Graduate Voter Guide (Form-18)", href: "/#voter-guide" },
    { label: "BRS Leadership", href: "/#leadership" },
    { label: "Candidate Profiles", href: "/candidates/mahabubnagar-rangareddy-hyderabad", badge: "Template" },
    { label: "Public Records", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-xl border-b border-[#E2E8F0] shadow-xs transition-all">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Identity */}
        <Link
          href="/"
          id="header-brand-logo"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#E6007E] rounded-xl p-1 shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-[#E6007E] text-white flex items-center justify-center font-bold shadow-sm group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[22px]">directions_car</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-base sm:text-lg text-[#0B1C30] tracking-tight group-hover:text-[#E6007E] transition-colors leading-none">
                BRS Graduate MLC Explorer
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FFD9E2] text-[#3E001E] border border-[#FFD9E2] hidden sm:inline-block">
                2027 Cycle
              </span>
            </div>
            <span className="text-[11px] text-[#E6007E] uppercase font-semibold tracking-wider pt-1 hidden md:block">
              Independent Civic Research Prototype • Telangana Legislative Council
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href.startsWith("/candidates") && pathname.startsWith("/candidates"));
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-3 py-2 rounded-lg transition-all whitespace-nowrap text-xs font-semibold flex items-center gap-1.5 ${
                  isActive
                    ? "text-[#0B1C30] bg-[#EFF4FF] font-bold"
                    : "text-[#565E74] hover:text-[#0B1C30] hover:bg-[#F8FAFC]"
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded-full bg-[#E6007E] text-white">
                    {link.badge}
                  </span>
                )}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#E6007E] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Utility Group */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Language Toggle Indicator */}
          <div className="hidden sm:flex items-center h-8 px-2.5 rounded-full bg-[#EFF4FF] text-[#565E74] text-xs font-semibold border border-[#E2E8F0]">
            <span className="text-[#E6007E] font-bold">EN</span>
            <span className="mx-1.5 text-[#CBD5E1]">|</span>
            <span className="hover:text-[#0B1C30] cursor-pointer">తె</span>
          </div>

          {/* CEO Telangana External Link */}
          <a
            href="https://ceotelangana.nic.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 text-xs font-semibold text-[#006397] hover:text-[#0B1C30] px-3 py-2 rounded-lg bg-[#EFF4FF] hover:bg-[#DCE9FF] transition-colors border border-[#E2E8F0]"
          >
            <span>CEO Portal</span>
            <span className="material-symbols-outlined text-[14px]">north_east</span>
          </a>

          {/* Primary Action Button to Candidate Template */}
          <Link
            href="/candidates/mahabubnagar-rangareddy-hyderabad"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#E6007E] hover:bg-[#D72B75] text-white text-xs font-semibold transition-all shadow-sm active:scale-95"
          >
            <span className="material-symbols-outlined text-[16px]">badge</span>
            <span>Candidate Template</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#0B1C30] hover:bg-[#EFF4FF] border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#E6007E]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden border-t border-[#E2E8F0] bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in fade-in slide-in-from-top duration-200"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium ${
                  isActive
                    ? "bg-[#EFF4FF] text-[#E6007E] font-bold"
                    : "text-[#0B1C30] hover:bg-[#F8FAFC]"
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#E6007E] text-white">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-[#E2E8F0] flex flex-col gap-2">
            <Link
              href="/candidates/mahabubnagar-rangareddy-hyderabad"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-[#E6007E] text-white shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">badge</span>
              <span>Open Candidate Profile Template</span>
            </Link>
            <a
              href="https://ceotelangana.nic.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#EFF4FF] text-[#006397] border border-[#E2E8F0]"
            >
              <span>Visit Chief Electoral Officer (CEO) Telangana</span>
              <span className="material-symbols-outlined text-[14px]">north_east</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
