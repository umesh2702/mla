"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  X,
  MapPin,
  ChevronRight,
  Award,
  Building2,
  CheckCircle2,
  Clock
} from "lucide-react";
import { LeadershipRepository } from "@/lib/repository";
import { LEADERS_DATA } from "@/data/leaders";

const PARTY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  BRS: { bg: "#FFF1F7", text: "#D72B75", border: "#F7DCE9" },
  INC: { bg: "#E6F4EA", text: "#137333", border: "#CEEAD6" },
  BJP: { bg: "#FEF3C7", text: "#B45309", border: "#FDE68A" },
  AIMIM: { bg: "#EFF6FF", text: "#1D4ED8", border: "#BFDBFE" },
  CPI: { bg: "#FEF2F2", text: "#B91C1C", border: "#FECACA" },
  OTH: { bg: "#F3F4F6", text: "#4B5563", border: "#E5E7EB" },
};

export default function LeaderDirectory() {
  const [activeTab, setActiveTab] = useState<"featured" | "all_constituencies" | "candidates">("all_constituencies");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("all");
  const [selectedParty, setSelectedParty] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState<"all" | "current_mla" | "candidate">("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [sortBy, setSortBy] = useState<"name_asc" | "name_desc" | "ac_no_asc">("ac_no_asc");
  const [visibleCount, setVisibleCount] = useState(24);

  const allDistricts = useMemo(() => LeadershipRepository.getAllDistricts(), []);

  // Filtered candidate and representative records
  const filteredCandidates = useMemo(() => {
    return LeadershipRepository.filterDirectory({
      searchQuery,
      district: selectedDistrict,
      party: selectedParty,
      status: selectedStatus,
      electionYear: selectedYear,
      sortBy: sortBy,
    });
  }, [searchQuery, selectedDistrict, selectedParty, selectedStatus, selectedYear, sortBy]);

  // Featured leaders list
  const featuredLeaders = useMemo(() => {
    return LEADERS_DATA.filter((leader) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        leader.name.toLowerCase().includes(q) ||
        (leader.constituency && leader.constituency.toLowerCase().includes(q)) ||
        (leader.district && leader.district.toLowerCase().includes(q)) ||
        leader.party.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedDistrict !== "all" ||
    selectedParty !== "all" ||
    selectedStatus !== "all" ||
    selectedYear !== "all";

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedDistrict("all");
    setSelectedParty("all");
    setSelectedStatus("all");
    setSelectedYear("all");
    setSortBy("ac_no_asc");
    setVisibleCount(24);
  };

  return (
    <div className="space-y-8">
      {/* Tab Switcher & Search Bar */}
      <div className="p-4 sm:p-6 rounded-3xl bg-white border border-[#EDE3E9] shadow-soft space-y-4">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#EDE3E9] pb-4">
          <button
            type="button"
            id="tab-all-constituencies-btn"
            onClick={() => {
              setActiveTab("all_constituencies");
              setSelectedStatus("current_mla");
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === "all_constituencies"
                ? "bg-[#D72B75] text-white shadow-2xs"
                : "bg-[#FFF8F8] text-[#756D78] hover:bg-[#FFF1F7] border border-[#EDE3E9]"
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>All 119 Assembly Constituencies</span>
          </button>

          <button
            type="button"
            id="tab-featured-dossiers-btn"
            onClick={() => setActiveTab("featured")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === "featured"
                ? "bg-[#D72B75] text-white shadow-2xs"
                : "bg-[#FFF8F8] text-[#756D78] hover:bg-[#FFF1F7] border border-[#EDE3E9]"
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Featured Detailed Portfolios ({featuredLeaders.length})</span>
          </button>

          <button
            type="button"
            id="tab-historical-candidates-btn"
            onClick={() => {
              setActiveTab("candidates");
              setSelectedStatus("all");
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === "candidates"
                ? "bg-[#D72B75] text-white shadow-2xs"
                : "bg-[#FFF8F8] text-[#756D78] hover:bg-[#FFF1F7] border border-[#EDE3E9]"
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Historical Candidates (2014–2023)</span>
          </button>
        </div>

        {/* Search & Main Filter Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#756D78] absolute left-3.5 top-3.5" />
            <input
              type="text"
              id="directory-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search representative, seat, or district..."
              className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-[#FFF8F8] border border-[#EDE3E9] text-xs text-[#28212A] placeholder:text-[#9B959F] focus:outline-none focus:ring-2 focus:ring-[#D72B75] focus:bg-white"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-3 text-[#756D78] hover:text-[#28212A]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* District Filter */}
          <div>
            <select
              id="directory-district-filter"
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-[#FFF8F8] border border-[#EDE3E9] text-xs text-[#28212A] focus:outline-none focus:ring-2 focus:ring-[#D72B75]"
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
              id="directory-party-filter"
              value={selectedParty}
              onChange={(e) => setSelectedParty(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-[#FFF8F8] border border-[#EDE3E9] text-xs text-[#28212A] focus:outline-none focus:ring-2 focus:ring-[#D72B75]"
            >
              <option value="all">All Parties</option>
              <option value="BRS">BRS (Bharat Rashtra Samithi)</option>
              <option value="INC">INC (Indian National Congress)</option>
              <option value="BJP">BJP (Bharatiya Janata Party)</option>
              <option value="AIMIM">AIMIM</option>
              <option value="CPI">CPI</option>
            </select>
          </div>

          {/* Sort By */}
          <div>
            <select
              id="directory-sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "name_asc" | "name_desc" | "ac_no_asc")}
              className="w-full px-3 py-2.5 rounded-xl bg-[#FFF8F8] border border-[#EDE3E9] text-xs text-[#28212A] focus:outline-none focus:ring-2 focus:ring-[#D72B75]"
            >
              <option value="ac_no_asc">AC Number (1 to 119)</option>
              <option value="name_asc">Name (A &rarr; Z)</option>
              <option value="name_desc">Name (Z &rarr; A)</option>
            </select>
          </div>
        </div>

        {/* Sub-Filters / Clear */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#EDE3E9] text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[#756D78]">Officeholder Status:</span>
            <button
              type="button"
              onClick={() => setSelectedStatus("all")}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium ${
                selectedStatus === "all" ? "bg-[#D72B75] text-white" : "bg-[#FFF8F8] border border-[#EDE3E9]"
              }`}
            >
              All Records
            </button>
            <button
              type="button"
              onClick={() => setSelectedStatus("current_mla")}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium ${
                selectedStatus === "current_mla" ? "bg-[#D72B75] text-white" : "bg-[#FFF8F8] border border-[#EDE3E9]"
              }`}
            >
              Current MLAs Only
            </button>
            <button
              type="button"
              onClick={() => setSelectedStatus("candidate")}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium ${
                selectedStatus === "candidate" ? "bg-[#D72B75] text-white" : "bg-[#FFF8F8] border border-[#EDE3E9]"
              }`}
            >
              Past Candidates Only
            </button>
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleClearFilters}
              className="text-xs text-[#D72B75] hover:text-[#A51D55] font-semibold flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Content Rendering by Active Tab */}
      {activeTab === "featured" ? (
        /* 1. Featured Dossiers Grid */
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-[#756D78]">
            <span>Showing {featuredLeaders.length} comprehensive legislative dossiers</span>
            <span>Flagship Quthbullapur profile featured</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredLeaders.map((leader) => (
              <div
                key={leader.slug}
                className={`p-6 rounded-3xl bg-white border flex flex-col justify-between transition-all hover:shadow-card-hover ${
                  leader.isFlagship
                    ? "border-[#D72B75] ring-2 ring-[#D72B75]/20 shadow-soft"
                    : "border-[#EDE3E9] shadow-soft"
                }`}
              >
                <div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-b from-[#FFF8F8] to-[#FFF1F7] mb-4">
                    <Image
                      src={leader.image}
                      alt={leader.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover object-top hover:scale-103 transition-transform"
                    />
                    {leader.isFlagship && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#D72B75] text-white text-[10px] font-bold shadow-xs">
                        Flagship Profile
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#A51D55] bg-[#FFF1F7] px-2 py-0.5 rounded-full border border-[#F7DCE9]">
                      {leader.party}
                    </span>
                    <span className="text-xs text-[#756D78]">&bull; {leader.termsInOffice.split("(")[0]}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#28212A] mt-1">
                    {leader.name}
                  </h3>

                  <p className="text-xs font-semibold text-[#D72B75] mt-0.5">
                    {leader.currentRole}
                  </p>

                  <p className="text-xs text-[#756D78] mt-2 line-clamp-3 leading-relaxed">
                    {leader.shortBio}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#EDE3E9] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#756D78]">
                    {leader.constituency}
                  </span>
                  <Link
                    href={`/leaders/${leader.slug}`}
                    id={`featured-leader-${leader.slug}-link`}
                    className="inline-flex items-center gap-1 font-semibold text-[#D72B75] hover:text-[#A51D55]"
                  >
                    <span>Open Portfolio</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* 2. All 119 Constituencies or Candidates View */
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-[#756D78]">
            <span>
              Showing <strong className="text-[#28212A]">{Math.min(visibleCount, filteredCandidates.length)}</strong> of{" "}
              <strong className="text-[#28212A]">{filteredCandidates.length}</strong> matching entries
            </span>
            <span className="text-[11px] italic">
              *Historical candidates and runner-ups are distinctly badged
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCandidates.slice(0, visibleCount).map((item) => {
              const partyColors = PARTY_COLORS[item.partyAbbr] || PARTY_COLORS.OTH;
              const isWinner = item.status === "elected_mla";

              return (
                <div
                  key={item.id}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                    item.profileSlug
                      ? "bg-white border-[#D72B75]/40 shadow-soft hover:shadow-card-hover"
                      : isWinner
                      ? "bg-white border-[#EDE3E9] shadow-soft hover:border-[#D72B75]/30"
                      : "bg-[#FFFDFC] border-[#EDE3E9]/80 opacity-90 hover:opacity-100"
                  }`}
                >
                  <div>
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className="px-2 py-0.5 rounded-full text-[10px] font-bold border"
                        style={{
                          backgroundColor: partyColors.bg,
                          color: partyColors.text,
                          borderColor: partyColors.border,
                        }}
                      >
                        {item.partyAbbr}
                      </span>

                      {isWinner ? (
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-semibold border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          {item.isCurrentMla ? "Current MLA" : `Elected ${item.electionYear}`}
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 text-[10px] font-medium border border-gray-200">
                          <Clock className="w-3 h-3 text-gray-500" />
                          Candidate ({item.electionYear})
                        </span>
                      )}
                    </div>

                    {/* Name */}
                    <h3 className="font-display font-bold text-base text-[#28212A] line-clamp-1">
                      {item.name}
                    </h3>

                    {/* Constituency and District */}
                    <div className="text-xs text-[#756D78] flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#D72B75] shrink-0" />
                      <span>{item.constituency}</span>
                      {item.acNo > 0 && <span>(AC #{item.acNo})</span>}
                      {item.district && <span>&bull; {item.district}</span>}
                    </div>

                    {/* Numerical Stats */}
                    <div className="mt-3 p-2.5 rounded-xl bg-[#FFF8F8] border border-[#EDE3E9] text-[11px] grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-[10px] text-[#756D78] block">Votes Polled</span>
                        <strong className="text-[#28212A] font-semibold">{item.votes}</strong>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#756D78] block">
                          {isWinner ? "Margin" : "Deficit"}
                        </span>
                        <strong className={isWinner ? "text-[#D72B75] font-semibold" : "text-[#756D78]"}>
                          {item.margin || item.voteShare}
                        </strong>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-3 pt-3 border-t border-[#EDE3E9] flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#756D78] truncate max-w-[150px]">
                      {item.party}
                    </span>

                    {item.profileSlug ? (
                      <Link
                        href={`/leaders/${item.profileSlug}`}
                        id={`dir-open-profile-${item.id}`}
                        className="inline-flex items-center gap-1 font-semibold text-[#D72B75] hover:text-[#A51D55]"
                      >
                        <span>View Portfolio</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <Link
                        href="/#constituency-map"
                        className="text-[11px] text-[#756D78] hover:text-[#D72B75] font-medium"
                      >
                        View on Map &rarr;
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More */}
          {visibleCount < filteredCandidates.length && (
            <div className="text-center pt-4">
              <button
                type="button"
                id="directory-load-more-btn"
                onClick={() => setVisibleCount((prev) => prev + 24)}
                className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-white text-[#28212A] hover:bg-[#FFF1F7] border border-[#EDE3E9] hover:border-[#D72B75]/40 transition-all shadow-2xs"
              >
                Load More ({filteredCandidates.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
