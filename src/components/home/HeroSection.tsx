"use client";

import { useState } from "react";
import Link from "next/link";
import { MLC_CONSTITUENCIES } from "@/data/graduate-mlc";

interface HeroSectionProps {
  onSearchSelect?: (constituencyId: string) => void;
}

export default function HeroSection({ onSearchSelect }: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFiltered, setSearchFiltered] = useState<typeof MLC_CONSTITUENCIES>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchFiltered([]);
      return;
    }

    const q = query.toLowerCase();
    const matches = MLC_CONSTITUENCIES.filter((c) => {
      const matchName = c.name.toLowerCase().includes(q);
      const matchIncumbent = c.currentIncumbent.name.toLowerCase().includes(q);
      const matchDistricts = c.districts.some((d) => d.toLowerCase().includes(q));
      return matchName || matchIncumbent || matchDistricts;
    });
    setSearchFiltered(matches);
  };

  const handleSelect = (id: string) => {
    if (onSearchSelect) {
      onSearchSelect(id);
    }
    const mapSection = document.getElementById("constituencies");
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: "smooth" });
    }
    setSearchQuery("");
    setSearchFiltered([]);
  };

  return (
    <div className="w-full mb-12 sm:mb-16">
      {/* Top Fact Chips Bar */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFD9E2] text-[#3E001E] text-xs font-semibold shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#E6007E] animate-pulse"></span>
          <span>2 Current-Cycle Seats (Terms Expire 29 March 2027)</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EFF4FF] text-[#0B1C30] text-xs font-semibold shadow-xs border border-[#E2E8F0]">
          <span className="material-symbols-outlined text-[16px] text-[#565E74]">domain</span>
          <span>3 Statewide Graduate MLC Constituencies</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D3E4FE] text-[#006397] text-xs font-semibold shadow-xs border border-[#DCE9FF]">
          <span className="material-symbols-outlined text-[16px]">how_to_reg</span>
          <span>Form-18 Fresh Enrolment Active</span>
        </div>
        <div className="ml-auto hidden xl:flex items-center gap-1.5 text-[#64748B] text-[11px] font-semibold uppercase tracking-wider">
          <span className="material-symbols-outlined text-[16px] text-[#E6007E]">verified</span>
          <span>Statutory ECI Rules • R.P. Act 1950 Sec 27</span>
        </div>
      </div>

      {/* Hero Card with Clean Bento Visual Backdrop */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-[#E2E8F0] shadow-sm p-6 sm:p-10 lg:p-12">
        <div className="relative z-10 max-w-4xl">
          {/* Category Pill */}
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-md bg-[#EFF4FF] border border-[#E2E8F0] text-[#0B1C30] text-xs font-bold uppercase tracking-wider font-display">
            <span className="text-[#E6007E]">Telangana Legislative Council</span>
            <span>•</span>
            <span className="text-[#565E74]">Electoral Research Archive</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#0B1C30] font-extrabold tracking-tight mb-4 leading-[1.12]">
            Telangana Graduate MLC Elections{" "}
            <span className="text-[#E6007E]">2027</span>
          </h1>

          {/* Lead Abstract */}
          <p className="text-base sm:text-lg text-[#565E74] max-w-2xl mb-8 leading-relaxed font-sans">
            Explore the Graduate MLC constituencies, current representatives, Form-18 voter registration pipeline, and verified BRS candidate announcement status across Telangana's dual-cycle legislative renewal.
          </p>

          {/* Multi-Field Search Bar with Dropdown */}
          <div className="relative w-full max-w-2xl mb-8">
            <div className="flex items-center w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl shadow-xs px-4 h-14 focus-within:ring-2 focus-within:ring-[#E6007E] focus-within:bg-white transition-all">
              <span className="material-symbols-outlined text-[#565E74] text-[24px] mr-3 shrink-0">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search Graduate constituency, incumbent, or district (e.g. Hyderabad, Surabhi Vani Devi, Warangal)..."
                className="w-full bg-transparent font-sans text-sm sm:text-base text-[#0B1C30] placeholder:text-[#64748B]/70 focus:outline-none"
                id="heroConstituencySearchInput"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => handleSearch("")}
                  className="text-[#64748B] hover:text-[#0B1C30] p-1"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              )}
              <div className="hidden sm:flex items-center gap-1 pl-2 shrink-0">
                <kbd className="text-[10px] uppercase font-bold px-2 py-1 rounded bg-[#E2E8F0] text-[#565E74]">
                  ESC
                </kbd>
                <kbd className="text-[10px] uppercase font-bold px-2 py-1 rounded bg-[#E2E8F0] text-[#565E74]">
                  ↵
                </kbd>
              </div>
            </div>

            {/* Instant Search Results Dropdown */}
            {searchFiltered.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-[#CBD5E1] z-30 p-2 space-y-1 max-h-72 overflow-y-auto">
                <div className="px-3 py-1 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                  Matching Constituencies ({searchFiltered.length})
                </div>
                {searchFiltered.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(item.id)}
                    className="w-full text-left p-3 rounded-lg hover:bg-[#EFF4FF] transition-colors flex items-center justify-between gap-3 group"
                  >
                    <div>
                      <div className="font-display font-bold text-sm text-[#0B1C30] group-hover:text-[#E6007E]">
                        {item.name}
                      </div>
                      <div className="text-xs text-[#565E74]">
                        Incumbent: {item.currentIncumbent.name} ({item.currentIncumbent.party}) &bull; {item.districtsCount} Districts
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#FFD9E2] text-[#3E001E]">
                      {item.isActive2027 ? "2027 Active" : "Future Cycle"}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#constituencies"
              className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-[#E6007E] text-white font-display text-sm font-bold hover:bg-[#D72B75] transition-all transform active:scale-95 shadow-sm shadow-[#E6007E]/20"
            >
              <span className="material-symbols-outlined text-[18px]">map</span>
              <span>Explore Constituencies</span>
            </a>
            <a
              href="#voter-guide"
              className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-[#EFF4FF] text-[#0B1C30] font-display text-sm font-bold hover:bg-[#DCE9FF] transition-all border border-[#CBD5E1] active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px] text-[#006397]">how_to_reg</span>
              <span>Form-18 Voter Guide</span>
            </a>
            <a
              href="#leadership"
              className="inline-flex items-center gap-1.5 text-[#565E74] hover:text-[#E6007E] text-xs font-semibold transition-colors px-2 py-2"
            >
              <span>BRS Leadership</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* Hero Visual Motif in Background */}
        <div className="absolute right-0 bottom-0 pointer-events-none opacity-10 xl:opacity-15 translate-x-10 translate-y-10">
          <svg fill="none" height="420" viewBox="0 0 100 100" width="420">
            <circle cx="50" cy="50" r="46" stroke="#E6007E" strokeDasharray="4 4" strokeWidth="2" />
            <circle cx="50" cy="50" r="34" stroke="#006397" strokeWidth="1.5" />
            <path d="M50 10 L50 90 M10 50 L90 50" stroke="#E6007E" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}
