"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, MapPin, ArrowRight, Filter, ShieldCheck } from "lucide-react";
import { LEADERS_DATA } from "@/data/leaders";

export default function LeaderDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filterOptions = [
    { id: "all", label: "All Leaders" },
    { id: "flagship", label: "Flagship Dossier" },
    { id: "mla", label: "Incumbent MLAs" },
    { id: "party-exec", label: "Party Leadership" },
  ];

  const filteredLeaders = useMemo(() => {
    return LEADERS_DATA.filter((leader) => {
      // Category filter
      if (selectedFilter === "flagship" && !leader.isFlagship) return false;
      if (selectedFilter === "mla" && !leader.currentRole.includes("MLA")) return false;
      if (
        selectedFilter === "party-exec" &&
        !leader.partyRole?.toLowerCase().includes("president") &&
        !leader.partyRole?.toLowerCase().includes("senior")
      )
        return false;

      // Text search
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const nameMatch = leader.name.toLowerCase().includes(q);
      const teluguNameMatch = leader.teluguName?.toLowerCase().includes(q) || false;
      const constituencyMatch = leader.constituency?.toLowerCase().includes(q) || false;
      const districtMatch = leader.district?.toLowerCase().includes(q) || false;
      const roleMatch = leader.currentRole.toLowerCase().includes(q);
      const bioMatch = leader.shortBio.toLowerCase().includes(q);

      return nameMatch || teluguNameMatch || constituencyMatch || districtMatch || roleMatch || bioMatch;
    });
  }, [searchQuery, selectedFilter]);

  const hasActiveFilters = searchQuery.trim() !== "" || selectedFilter !== "all";

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedFilter("all");
  };

  return (
    <div className="space-y-8">
      {/* Search and Filters Bar */}
      <div className="p-4 sm:p-6 rounded-3xl bg-white border border-[#F0E4EA] shadow-soft space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#77717B]" />
            <input
              id="leader-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by leader name, constituency (e.g. Quthbullapur), or role..."
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-[#FFF8F8] border border-[#F0E4EA] text-sm text-[#24212A] placeholder-[#77717B] focus:outline-none focus:ring-2 focus:ring-[#D72B75] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#77717B] hover:text-[#24212A]"
                aria-label="Clear search query"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Reset control */}
          {hasActiveFilters && (
            <button
              id="clear-all-filters-btn"
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-2xl text-xs font-bold bg-[#FCE7F0] hover:bg-[#F8D7E5] text-[#A51D55] border border-[#F8D7E5] transition-colors"
            >
              <X className="w-3.5 h-3.5 text-[#D72B75]" />
              <span>Clear Filters</span>
            </button>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="text-[#77717B] flex items-center gap-1 shrink-0 font-semibold mr-1">
            <Filter className="w-3.5 h-3.5 text-[#D72B75]" />
            Filter:
          </span>
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setSelectedFilter(opt.id)}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all font-semibold ${
                selectedFilter === opt.id
                  ? "bg-gradient-to-r from-[#D72B75] to-[#A51D55] text-white shadow-xs"
                  : "bg-[#FFF8F8] text-[#77717B] hover:text-[#24212A] hover:bg-[#FCE7F0]/60 border border-[#F0E4EA]"
              }`}
            >
              {opt.label}
            </button>
          ))}
          <span className="ml-auto text-xs text-[#77717B] font-medium shrink-0 hidden sm:inline">
            Showing {filteredLeaders.length} of {LEADERS_DATA.length} verified leaders
          </span>
        </div>
      </div>

      {/* Empty State */}
      {filteredLeaders.length === 0 && (
        <div
          id="directory-empty-state"
          className="py-16 px-4 text-center rounded-3xl bg-white border border-[#F0E4EA] space-y-4 max-w-lg mx-auto shadow-soft"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#FCE7F0] border border-[#F8D7E5] flex items-center justify-center mx-auto text-[#A51D55]">
            <Search className="w-6 h-6 text-[#D72B75]" />
          </div>
          <h3 className="font-display text-xl font-bold text-[#24212A]">
            No matching leadership profiles found
          </h3>
          <p className="text-xs text-[#77717B] leading-relaxed">
            We couldn&apos;t find any records matching &quot;{searchQuery}&quot;. Please verify spelling or try searching for prominent constituencies like Quthbullapur, Sircilla, or Siddipet.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#D72B75] to-[#A51D55] text-white shadow-xs"
          >
            Reset Search &amp; Show All
          </button>
        </div>
      )}

      {/* Directory Cards Grid */}
      {filteredLeaders.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLeaders.map((leader) => (
            <div
              key={leader.slug}
              className={`flex flex-col justify-between rounded-3xl bg-white border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover group ${
                leader.isFlagship
                  ? "border-[#D72B75]/40 shadow-soft ring-1 ring-[#D72B75]/20"
                  : "border-[#F0E4EA] shadow-soft hover:border-[#D72B75]/30"
              }`}
            >
              <div className="space-y-4">
                {/* Large Portrait Image */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#FFF8F8] to-[#FCE7F0] border border-[#F0E4EA] shadow-2xs">
                  <Image
                    src={leader.image}
                    alt={leader.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    {leader.isFlagship ? (
                      <span className="text-[10px] uppercase font-extrabold tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-[#D72B75] to-[#A51D55] text-white shadow-xs">
                        Flagship Dossier
                      </span>
                    ) : (
                      <span className="text-[10px] uppercase font-bold px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs border border-[#F0E4EA] text-[#24212A] shadow-2xs">
                        Verified
                      </span>
                    )}
                    <span className="text-[11px] font-semibold text-[#24212A] bg-white/95 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-[#F0E4EA]">
                      {leader.termsInOffice.split("(")[0]}
                    </span>
                  </div>
                </div>

                {/* Leader info */}
                <div>
                  <h3 className="font-display text-xl font-bold text-[#24212A] group-hover:text-[#D72B75] transition-colors">
                    {leader.name}
                  </h3>
                  {leader.teluguName && (
                    <p className="text-xs text-[#77717B] mt-0.5 font-telugu">
                      {leader.teluguName}
                    </p>
                  )}
                  <p className="text-xs text-[#A51D55] font-bold mt-1">
                    {leader.currentRole}
                  </p>
                </div>

                {/* Constituency badge */}
                {leader.constituency && (
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FFF8F8] border border-[#F0E4EA] text-xs text-[#24212A]">
                    <MapPin className="w-3.5 h-3.5 text-[#D72B75] shrink-0" />
                    <span className="font-semibold truncate">{leader.constituency}</span>
                    {leader.district && (
                      <span className="text-[11px] text-[#77717B] truncate">
                        • {leader.district}
                      </span>
                    )}
                  </div>
                )}

                {/* Bio snippet */}
                <p className="text-xs text-[#77717B] leading-relaxed line-clamp-3">
                  {leader.shortBio}
                </p>

                {/* Key stats summary strip */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#F0E4EA]">
                  {leader.keyStats.slice(0, 2).map((stat, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-[#FFF8F8] border border-[#F0E4EA]/60">
                      <div className="text-[10px] text-[#77717B] uppercase font-bold truncate">
                        {stat.label}
                      </div>
                      <div className="font-display text-base font-extrabold text-[#24212A] mt-0.5 truncate">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-5 mt-4 border-t border-[#F0E4EA] flex items-center justify-between">
                <span className="text-[11px] text-[#77717B] font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Audited ECI Affidavits</span>
                </span>
                <Link
                  href={`/leaders/${leader.slug}`}
                  id={`view-profile-btn-${leader.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-[#D72B75] to-[#A51D55] px-4 py-2.5 rounded-xl transition-all shadow-xs hover:opacity-95"
                >
                  <span>{leader.isFlagship ? "Flagship Dossier" : "View Profile"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
