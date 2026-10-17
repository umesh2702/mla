"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, X, MapPin, ArrowRight, Filter, ShieldCheck } from "lucide-react";
import { LEADERS_DATA } from "@/data/leaders";
import LeaderPortrait from "@/components/ui/LeaderPortrait";

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
      if (selectedFilter === "party-exec" && !leader.partyRole?.toLowerCase().includes("president") && !leader.partyRole?.toLowerCase().includes("senior")) return false;

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
      <div className="p-4 sm:p-6 rounded-2xl bg-[#191B20] border border-[#2D313A] shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#777B78]" />
            <input
              id="leader-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by leader name, constituency (e.g. Quthbullapur), or role..."
              className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#101113] border border-[#2D313A] text-sm text-[#E8E2D7] placeholder-[#777B78] focus:outline-none focus:ring-2 focus:ring-[#D72B75] focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#777B78] hover:text-[#E8E2D7]"
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
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-xs font-semibold bg-[#22252C] hover:bg-[#2D313A] text-[#E8E2D7] border border-[#2D313A] transition-colors"
            >
              <X className="w-3.5 h-3.5 text-[#D72B75]" />
              <span>Clear Filters</span>
            </button>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="text-[#777B78] flex items-center gap-1 shrink-0 font-medium mr-1">
            <Filter className="w-3 h-3 text-[#D72B75]" />
            Filter:
          </span>
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setSelectedFilter(opt.id)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-medium ${
                selectedFilter === opt.id
                  ? "bg-[#D72B75] text-white shadow-sm"
                  : "bg-[#101113] text-[#9EA39F] hover:text-[#E8E2D7] border border-[#262930] hover:border-[#2D313A]"
              }`}
            >
              {opt.label}
            </button>
          ))}
          <span className="ml-auto text-[11px] text-[#777B78] shrink-0 hidden sm:inline">
            Showing {filteredLeaders.length} of {LEADERS_DATA.length} leaders
          </span>
        </div>
      </div>

      {/* Empty State */}
      {filteredLeaders.length === 0 && (
        <div
          id="directory-empty-state"
          className="py-16 px-4 text-center rounded-2xl bg-[#191B20] border border-[#2D313A] space-y-4 max-w-lg mx-auto"
        >
          <div className="w-12 h-12 rounded-full bg-[#101113] border border-[#2D313A] flex items-center justify-center mx-auto text-[#777B78]">
            <Search className="w-6 h-6 text-[#D72B75]" />
          </div>
          <h3 className="font-display text-lg font-bold text-[#E8E2D7]">
            No matching leadership profiles found
          </h3>
          <p className="text-xs text-[#777B78] leading-relaxed">
            We couldn&apos;t find any records matching &quot;{searchQuery}&quot;. Please verify spelling or try searching for prominent constituencies like Quthbullapur, Sircilla, or Siddipet.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#D72B75] text-white hover:bg-[#E34389] transition-colors"
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
              className={`flex flex-col justify-between rounded-2xl bg-[#191B20] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group ${
                leader.isFlagship
                  ? "border-[#D72B75]/50 shadow-lg shadow-[#D72B75]/10"
                  : "border-[#2D313A] hover:border-[#777B78]"
              }`}
            >
              <div className="space-y-4">
                {/* Header row */}
                <div className="flex items-start justify-between gap-3">
                  <LeaderPortrait
                    src={leader.image}
                    alt={leader.imageAlt}
                    initials={leader.portraitFallbackInitials}
                    name={leader.name}
                    size="md"
                    className="w-20 h-20 rounded-2xl shadow-md"
                  />
                  <div className="flex flex-col items-end gap-1.5">
                    {leader.isFlagship ? (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#D72B75] text-white shadow-sm">
                        Flagship Profile
                      </span>
                    ) : (
                      <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-[#101113] border border-[#2D313A] text-[#9EA39F]">
                        Verified
                      </span>
                    )}
                    <span className="text-[11px] text-[#777B78] font-medium">
                      {leader.termsInOffice.split("(")[0]}
                    </span>
                  </div>
                </div>

                {/* Leader info */}
                <div>
                  <h3 className="font-display text-xl font-bold text-[#E8E2D7] group-hover:text-white transition-colors">
                    {leader.name}
                  </h3>
                  {leader.teluguName && (
                    <p className="text-xs text-[#777B78] mt-0.5 font-sans">
                      {leader.teluguName}
                    </p>
                  )}
                  <p className="text-xs text-[#D72B75] font-semibold mt-1">
                    {leader.currentRole}
                  </p>
                </div>

                {/* Constituency badge */}
                {leader.constituency && (
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-[#101113] border border-[#262930] text-xs text-[#E8E2D7]">
                    <MapPin className="w-3.5 h-3.5 text-[#D72B75] shrink-0" />
                    <span className="font-medium truncate">{leader.constituency}</span>
                    {leader.district && (
                      <span className="text-[11px] text-[#777B78] truncate">
                        &bull; {leader.district}
                      </span>
                    )}
                  </div>
                )}

                {/* Bio snippet */}
                <p className="text-xs text-[#9EA39F] leading-relaxed line-clamp-3">
                  {leader.shortBio}
                </p>

                {/* Key stats summary strip */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#262930]">
                  {leader.keyStats.slice(0, 2).map((stat, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-[#14161A]">
                      <div className="text-[10px] text-[#777B78] uppercase truncate font-medium">
                        {stat.label}
                      </div>
                      <div className="font-display text-sm font-bold text-[#E8E2D7] mt-0.5 truncate">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-5 mt-4 border-t border-[#262930] flex items-center justify-between">
                <span className="text-[11px] text-[#777B78] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>ECI Affidavits Audited</span>
                </span>
                <Link
                  href={`/leaders/${leader.slug}`}
                  id={`view-profile-btn-${leader.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#22252C] group-hover:bg-[#D72B75] px-3.5 py-2 rounded-xl transition-all shadow-sm"
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
