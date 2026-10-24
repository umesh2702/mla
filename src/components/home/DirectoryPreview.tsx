"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  X,
  ChevronRight,
  MapPin,
  CheckCircle2,
  Clock,
  ArrowRight
} from "lucide-react";
import { LeadershipRepository } from "@/lib/repository";

const PARTY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  BRS: { bg: "#FFF1F7", text: "#D72B75", border: "#F7DCE9" },
  INC: { bg: "#E6F4EA", text: "#137333", border: "#CEEAD6" },
  BJP: { bg: "#FEF3C7", text: "#B45309", border: "#FDE68A" },
  AIMIM: { bg: "#EFF6FF", text: "#1D4ED8", border: "#BFDBFE" },
  CPI: { bg: "#FEF2F2", text: "#B91C1C", border: "#FECACA" },
  OTH: { bg: "#F3F4F6", text: "#4B5563", border: "#E5E7EB" },
};

export default function DirectoryPreview() {
  const [searchQuery, setSearchQuery] = useState("");
  const [districtFilter, setDistrictFilter] = useState("all");
  const [constituencyFilter, setConstituencyFilter] = useState("all");
  const [partyFilter, setPartyFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "current_mla" | "candidate">("all");
  const [electionYearFilter, setElectionYearFilter] = useState("all");
  const [sortBy, setSortBy] = useState<"default" | "name_asc" | "name_desc" | "ac_no_asc">("default");
  const [visibleCount, setVisibleCount] = useState(12);

  const allDistricts = useMemo(() => LeadershipRepository.getAllDistricts(), []);

  // Filter and sort candidates
  const filteredCandidates = useMemo(() => {
    return LeadershipRepository.filterDirectory({
      searchQuery,
      district: districtFilter,
      constituency: constituencyFilter,
      party: partyFilter,
      status: statusFilter,
      electionYear: electionYearFilter,
      sortBy: sortBy === "default" ? undefined : sortBy,
    });
  }, [searchQuery, districtFilter, constituencyFilter, partyFilter, statusFilter, electionYearFilter, sortBy]);

  const displayedCandidates = useMemo(() => {
    return filteredCandidates.slice(0, visibleCount);
  }, [filteredCandidates, visibleCount]);

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    districtFilter !== "all" ||
    constituencyFilter !== "all" ||
    partyFilter !== "all" ||
    statusFilter !== "all" ||
    electionYearFilter !== "all";

  const handleClearFilters = () => {
    setSearchQuery("");
    setDistrictFilter("all");
    setConstituencyFilter("all");
    setPartyFilter("all");
    setStatusFilter("all");
    setElectionYearFilter("all");
    setSortBy("default");
    setVisibleCount(12);
  };

  return (
    <section className="py-14 sm:py-20 border-b border-[#EDE3E9] bg-[#FFF8F8]" id="directory-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#EDE3E9]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FFF1F7] text-[#D72B75] border border-[#F7DCE9]">
                Leadership Directory &amp; Discovery
              </span>
              <span className="text-xs text-[#756D78]">&bull; Current MLAs &amp; Historical Election Contenders</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#28212A]">
              Elected Representatives &amp; Candidates Directory
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/leaders"
              id="directory-full-view-link"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D72B75] hover:text-[#A51D55] transition-colors"
            >
              <span>Full Leadership Hub</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#EDE3E9] shadow-soft space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#756D78] absolute left-3 top-3" />
              <input
                type="text"
                id="dir-search-input"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(12);
                }}
                placeholder="Search candidate or seat..."
                className="w-full pl-8 pr-7 py-2 rounded-xl bg-[#FFF8F8] border border-[#EDE3E9] text-xs text-[#28212A] placeholder:text-[#9B959F] focus:outline-none focus:ring-2 focus:ring-[#D72B75] focus:bg-white"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-2.5 text-[#756D78] hover:text-[#28212A]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* District Filter */}
            <div>
              <select
                id="dir-district-filter"
                value={districtFilter}
                onChange={(e) => {
                  setDistrictFilter(e.target.value);
                  setConstituencyFilter("all");
                  setVisibleCount(12);
                }}
                className="w-full px-3 py-2 rounded-xl bg-[#FFF8F8] border border-[#EDE3E9] text-xs text-[#28212A] focus:outline-none focus:ring-2 focus:ring-[#D72B75]"
              >
                <option value="all">All Districts (33)</option>
                {allDistricts.map((d) => (
                  <option key={d.name} value={d.name}>
                    {d.name} ({d.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Party Filter */}
            <div>
              <select
                id="dir-party-filter"
                value={partyFilter}
                onChange={(e) => {
                  setPartyFilter(e.target.value);
                  setVisibleCount(12);
                }}
                className="w-full px-3 py-2 rounded-xl bg-[#FFF8F8] border border-[#EDE3E9] text-xs text-[#28212A] focus:outline-none focus:ring-2 focus:ring-[#D72B75]"
              >
                <option value="all">All Parties</option>
                <option value="BRS">BRS (Bharat Rashtra Samithi)</option>
                <option value="INC">INC (Indian National Congress)</option>
                <option value="BJP">BJP (Bharatiya Janata Party)</option>
                <option value="AIMIM">AIMIM</option>
                <option value="CPI">CPI</option>
              </select>
            </div>

            {/* Status Filter: Current MLA vs Past Candidate */}
            <div>
              <select
                id="dir-status-filter"
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value as "all" | "current_mla" | "candidate");
                  setVisibleCount(12);
                }}
                className="w-full px-3 py-2 rounded-xl bg-[#FFF8F8] border border-[#EDE3E9] text-xs text-[#28212A] focus:outline-none focus:ring-2 focus:ring-[#D72B75]"
              >
                <option value="all">All Candidates &amp; MLAs</option>
                <option value="current_mla">Current MLAs (3rd Assembly)</option>
                <option value="candidate">Historical Contestants</option>
              </select>
            </div>
          </div>

          {/* Sub-Filters: Election Year & Sorting */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#EDE3E9] text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[#756D78] font-medium">Election Year:</span>
              {["all", "2023", "2018", "2014"].map((yr) => (
                <button
                  key={yr}
                  type="button"
                  onClick={() => {
                    setElectionYearFilter(yr);
                    setVisibleCount(12);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                    electionYearFilter === yr
                      ? "bg-[#D72B75] text-white"
                      : "bg-[#FFF8F8] text-[#756D78] hover:bg-[#FFF1F7] border border-[#EDE3E9]"
                  }`}
                >
                  {yr === "all" ? "All Years" : yr}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="text-[#756D78]">Sort by:</span>
                <select
                  id="dir-sort-by-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "default" | "name_asc" | "name_desc" | "ac_no_asc")}
                  className="px-2 py-1 rounded-lg bg-[#FFF8F8] border border-[#EDE3E9] text-xs text-[#28212A] focus:outline-none"
                >
                  <option value="default">Default Priority</option>
                  <option value="name_asc">Name (A &rarr; Z)</option>
                  <option value="name_desc">Name (Z &rarr; A)</option>
                  <option value="ac_no_asc">AC Number</option>
                </select>
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  id="dir-clear-filters-btn"
                  onClick={handleClearFilters}
                  className="text-xs text-[#D72B75] hover:text-[#A51D55] font-semibold flex items-center gap-1 hover:underline"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Clear Filters</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Counter Strip */}
        <div className="flex items-center justify-between text-xs text-[#756D78]">
          <span>
            Showing <strong className="text-[#28212A]">{displayedCandidates.length}</strong> of{" "}
            <strong className="text-[#28212A]">{filteredCandidates.length}</strong> verified entries
          </span>
          <span className="text-[11px] italic">
            *Historical candidates are clearly marked and distinguished from current officeholders
          </span>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="directory-cards-grid">
          {displayedCandidates.map((cand) => {
            const partyColors = PARTY_COLORS[cand.partyAbbr] || PARTY_COLORS.OTH;
            const isWinner = cand.status === "elected_mla";

            return (
              <div
                key={cand.id}
                className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                  cand.profileSlug
                    ? "bg-white border-[#D72B75]/40 shadow-soft hover:shadow-card-hover"
                    : isWinner
                    ? "bg-white border-[#EDE3E9] shadow-soft hover:border-[#D72B75]/30"
                    : "bg-[#FFFDFC] border-[#EDE3E9]/80 opacity-90 hover:opacity-100"
                }`}
              >
                <div>
                  {/* Status Badges */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className="px-2 py-0.5 rounded-full text-[10px] font-bold border"
                      style={{
                        backgroundColor: partyColors.bg,
                        color: partyColors.text,
                        borderColor: partyColors.border,
                      }}
                    >
                      {cand.partyAbbr}
                    </span>

                    {isWinner ? (
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-semibold border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        {cand.isCurrentMla ? "Current MLA" : `Won ${cand.electionYear}`}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 text-[10px] font-medium border border-gray-200">
                        <Clock className="w-3 h-3 text-gray-500" />
                        Runner-up ({cand.electionYear})
                      </span>
                    )}
                  </div>

                  {/* Candidate Name */}
                  <h3 className="font-display font-bold text-base text-[#28212A] line-clamp-1">
                    {cand.name}
                  </h3>

                  {/* Seat and District */}
                  <div className="text-xs text-[#756D78] flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D72B75] shrink-0" />
                    <span>{cand.constituency}</span>
                    {cand.acNo > 0 && <span>(AC #{cand.acNo})</span>}
                    {cand.district && <span>&bull; {cand.district}</span>}
                  </div>

                  {/* Election Record Numbers */}
                  <div className="mt-3 p-2.5 rounded-xl bg-[#FFF8F8] border border-[#EDE3E9] text-[11px] grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-[10px] text-[#756D78] block">Votes Polled</span>
                      <strong className="text-[#28212A] font-semibold">{cand.votes}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#756D78] block">
                        {isWinner ? "Margin" : "Deficit"}
                      </span>
                      <strong className={isWinner ? "text-[#D72B75] font-semibold" : "text-[#756D78]"}>
                        {cand.margin || cand.voteShare}
                      </strong>
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-3 pt-3 border-t border-[#EDE3E9] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#756D78]">
                    {cand.party}
                  </span>

                  {cand.profileSlug ? (
                    <Link
                      href={`/leaders/${cand.profileSlug}`}
                      id={`dir-candidate-${cand.id}-link`}
                      className="inline-flex items-center gap-1 font-semibold text-[#D72B75] hover:text-[#A51D55]"
                    >
                      <span>View Dossier</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <Link
                      href="/#constituency-map"
                      className="text-[11px] font-medium text-[#756D78] hover:text-[#D72B75]"
                    >
                      View on Map &rarr;
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredCandidates.length && (
          <div className="text-center pt-4">
            <button
              type="button"
              id="dir-load-more-btn"
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-white text-[#28212A] hover:bg-[#FFF1F7] border border-[#EDE3E9] hover:border-[#D72B75]/40 transition-all shadow-2xs"
            >
              Load More Candidates ({filteredCandidates.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
