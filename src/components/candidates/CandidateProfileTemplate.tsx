"use client";

import { useState } from "react";
import Link from "next/link";
import { MlcCandidateProfile } from "@/types/mlc";

interface CandidateProfileTemplateProps {
  profile: MlcCandidateProfile;
}

export default function CandidateProfileTemplate({
  profile,
}: CandidateProfileTemplateProps) {
  const [activeTab, setActiveTab] = useState<string>("profile");
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleAlertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAlertSuccess(true);
    setTimeout(() => {
      setAlertSuccess(false);
      setAlertModalOpen(false);
    }, 2500);
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 1. BREADCRUMBS & CONSTITUENCY CONTEXT BAR */}
      <nav aria-label="Breadcrumb" className="w-full mb-6">
        <div className="flex items-center flex-wrap gap-2 text-xs text-[#565E74] font-medium">
          <Link href="/" className="hover:text-[#E6007E] transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[15px]">home</span>
            <span>Home</span>
          </Link>
          <span className="text-[#CBD5E1]">/</span>
          <Link href="/#constituencies" className="hover:text-[#E6007E] transition-colors">
            Constituencies
          </Link>
          <span className="text-[#CBD5E1]">/</span>
          <span className="text-[#0B1C30] font-semibold">{profile.constituencyName}</span>
          <span className="text-[#CBD5E1]">/</span>
          <span className="text-[#E6007E] font-bold bg-[#FFD9E2] px-2.5 py-0.5 rounded-full">
            Dossier #{profile.constituencyCode}-2027
          </span>
        </div>
      </nav>

      {/* 2. HERO DOSSIER CARD (BENTO SPLIT PANEL) */}
      <section className="w-full rounded-2xl sm:rounded-3xl bg-white border border-[#E2E8F0] shadow-sm overflow-hidden mb-12 sm:mb-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
          {/* LEFT: CANDIDATE VISUAL / WATERMARKED PORTRAIT FRAME */}
          <div className="lg:col-span-5 relative bg-gradient-to-b from-[#EFF4FF] to-[#DCE9FF] flex flex-col justify-between p-6 sm:p-8 overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E2E8F0]">
            {/* Structural background decoration */}
            <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-[#E6007E]/5 pointer-events-none blur-2xl"></div>
            <div className="absolute right-4 bottom-4 opacity-10 pointer-events-none select-none text-[#E6007E]">
              <span className="material-symbols-outlined text-[190px]">directions_car</span>
            </div>

            {/* Top Badges over image container */}
            <div className="flex items-center justify-between z-10 w-full mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md shadow-xs border border-[#E2E8F0]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E6007E] animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E6007E]">
                  2027 Cycle Protocol
                </span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-[#0B1C30] text-white">
                DOSSIER REF: TS-{profile.constituencyCode}
              </span>
            </div>

            {/* Candidate Visual Box */}
            <div className="relative w-full aspect-[4/5] max-w-[340px] mx-auto rounded-2xl overflow-hidden shadow-md bg-[#EFF4FF] border border-[#CBD5E1] flex items-center justify-center my-auto">
              {profile.portraitUrl ? (
                <div className="relative w-full h-full">
                  <img
                    src={profile.portraitUrl}
                    alt={profile.portraitAlt || profile.candidateName}
                    className="w-full h-full object-cover filter grayscale contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C30] via-[#0B1C30]/40 to-transparent flex flex-col justify-end p-5">
                    <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur text-[#E6007E] shadow-xs mb-1">
                      <span className="material-symbols-outlined text-[16px]">verified</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider">
                        {profile.isConfirmed ? "Nominee Confirmed" : "Statutory Verification In-Progress"}
                      </span>
                    </div>
                    <p className="font-display text-lg font-bold text-white leading-tight">
                      {profile.candidateName}
                    </p>
                    <p className="text-xs text-[#D3E4FE]">
                      BRS Central Parliamentary Board &bull; Telangana Bhavan
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-6 text-center text-[#565E74]">
                  <span className="material-symbols-outlined text-[64px] text-[#E6007E]">how_to_reg</span>
                  <p className="font-display font-bold text-sm text-[#0B1C30] mt-2">
                    Official Nominee Placeholder
                  </p>
                  <p className="text-xs text-[#64748B]">
                    Profile will update automatically once BRS formally gazettes the candidate.
                  </p>
                </div>
              )}
            </div>

            {/* Footer Metric / Watermark strip */}
            <div className="pt-6 z-10 flex items-center justify-between text-[11px] text-[#64748B] font-semibold">
              <span className="flex items-center gap-1 text-[#E6007E]">
                <span className="material-symbols-outlined text-[15px]">shield</span>
                <span>ECI Rule 31 Validated</span>
              </span>
              <span>CEO-TS Gazette Structure</span>
            </div>
          </div>

          {/* RIGHT: CANDIDATE STATUS & CONSTITUENCY INTEL */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
            <div>
              {/* Header Category Pill & Status Tag */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#EFF4FF] border border-[#E2E8F0] text-[#0B1C30] text-xs font-bold font-display">
                  {profile.constituencyName} ({profile.constituencyCode})
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    profile.isConfirmed
                      ? "bg-[#D3E4FE] text-[#006397]"
                      : "bg-[#FFD9E2] text-[#3E001E]"
                  }`}
                >
                  {profile.nominationStatusLabel}
                </span>
              </div>

              {/* Main Status Headline */}
              <h1 className="font-display text-2xl sm:text-4xl text-[#0B1C30] font-extrabold tracking-tight mb-2">
                {profile.isConfirmed ? profile.candidateName : "Candidate Announcement Pending"}
              </h1>
              <p className="text-sm sm:text-base text-[#E6007E] font-semibold mb-6">
                {profile.nominationNotice}
              </p>

              {/* Current Incumbent Anchor Box (Separate & Clear) */}
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] mb-6 flex items-start gap-3 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#EFF4FF] text-[#E6007E] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">account_balance</span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider">
                      Current Incumbent (Sitting MLC)
                    </span>
                    <span className="text-[10px] font-bold text-[#E6007E] bg-[#FFD9E2] px-2 py-0.5 rounded">
                      Term Ends: {profile.currentTermEnd}
                    </span>
                  </div>
                  <p className="font-display text-base font-bold text-[#0B1C30] truncate">
                    {profile.currentIncumbentName}
                  </p>
                  <p className="text-xs text-[#565E74] truncate">
                    Elected Representative &bull; {profile.currentIncumbentParty}
                  </p>
                </div>
              </div>

              {/* Constituency Persona Summary */}
              <div className="text-xs sm:text-sm text-[#565E74] mb-8 leading-relaxed">
                <p>{profile.electorateSummary}</p>
              </div>
            </div>

            {/* Action Group & Metrics */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <button
                  type="button"
                  onClick={() => setAlertModalOpen(true)}
                  className="h-11 px-5 rounded-xl bg-[#E6007E] text-white hover:bg-[#D72B75] text-xs font-bold shadow-xs transition-all flex items-center gap-2 active:scale-95"
                >
                  <span className="material-symbols-outlined text-[18px]">notifications_active</span>
                  <span>Register for Candidate Announcement Alert</span>
                </button>
                <a
                  href="https://ceotelangana.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 px-4 rounded-xl bg-[#EFF4FF] hover:bg-[#DCE9FF] text-[#0B1C30] text-xs font-bold transition-colors flex items-center gap-1.5 border border-[#CBD5E1]"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#006397]">download</span>
                  <span>ECI Form-18 (CEO Portal)</span>
                </a>
                <button
                  type="button"
                  onClick={handleShare}
                  className="h-11 w-11 rounded-xl bg-[#F8FAFC] hover:bg-[#EFF4FF] text-[#565E74] flex items-center justify-center border border-[#E2E8F0] transition-colors"
                  title="Share Dossier Link"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {copiedLink ? "check" : "share"}
                  </span>
                </button>
              </div>

              {/* Quick Metrics Ribbon */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#F1F5F9]">
                <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <span className="text-[10px] font-bold text-[#64748B] uppercase block">
                    Districts
                  </span>
                  <span className="font-display text-xl sm:text-2xl font-extrabold text-[#0B1C30]">
                    {profile.districtList.length || "Composite"}
                  </span>
                  <span className="text-[11px] text-[#64748B] block truncate">Urban &amp; Rural</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <span className="text-[10px] font-bold text-[#64748B] uppercase block">
                    Electorate Base
                  </span>
                  <span className="font-display text-xl sm:text-2xl font-extrabold text-[#E6007E]">
                    {profile.estimatedElectorate}
                  </span>
                  <span className="text-[11px] text-[#64748B] block truncate">Historical Roll</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <span className="text-[10px] font-bold text-[#64748B] uppercase block">
                    Vetting Stage
                  </span>
                  <span className="font-display text-xl sm:text-2xl font-extrabold text-[#006397]">
                    Stage 2
                  </span>
                  <span className="text-[11px] text-[#64748B] block truncate">Parliamentary Board</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE SEGMENTED TABS CONTROLLER (VISIBLE ONLY ON MOBILE) */}
      <div className="lg:hidden w-full flex items-center gap-2 overflow-x-auto pb-4 mb-6">
        <button
          type="button"
          onClick={() => setActiveTab("profile")}
          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === "profile"
              ? "bg-[#E6007E] text-white shadow-xs"
              : "bg-[#EFF4FF] text-[#565E74] border border-[#E2E8F0]"
          }`}
        >
          Profile &amp; Degrees
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("agenda")}
          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === "agenda"
              ? "bg-[#E6007E] text-white shadow-xs"
              : "bg-[#EFF4FF] text-[#565E74] border border-[#E2E8F0]"
          }`}
        >
          Graduate Agenda
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("timeline")}
          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === "timeline"
              ? "bg-[#E6007E] text-white shadow-xs"
              : "bg-[#EFF4FF] text-[#565E74] border border-[#E2E8F0]"
          }`}
        >
          Electoral Timeline
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("media")}
          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            activeTab === "media"
              ? "bg-[#E6007E] text-white shadow-xs"
              : "bg-[#EFF4FF] text-[#565E74] border border-[#E2E8F0]"
          }`}
        >
          Media &amp; Statements
        </button>
      </div>

      {/* SECTION 1: ACADEMIC ARCHITECTURE & ALMA MATER VERIFICATION */}
      <section
        className={`w-full mb-12 sm:mb-16 ${
          activeTab !== "profile" ? "hidden lg:block" : "block"
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#E6007E] font-display">
              Statutory Qualification Standard
            </span>
            <h2 className="font-display text-xl sm:text-3xl text-[#0B1C30] font-bold tracking-tight">
              Academic Architecture &amp; Alma Mater Verification
            </h2>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EFF4FF] border border-[#E2E8F0] text-[#0B1C30] text-xs font-semibold">
            <span className="material-symbols-outlined text-[#006397] text-[18px]">verified</span>
            <span>Degrees Verified via Statutory Affidavit</span>
          </div>
        </div>

        {/* Academic Bento Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profile.academicCredentials.length > 0 ? (
            profile.academicCredentials.map((cred, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded bg-[#EFF4FF] text-[10px] font-bold text-[#565E74] uppercase">
                      {cred.level}
                    </span>
                    <span className="text-[10px] font-bold text-[#E6007E] uppercase">
                      {cred.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#0B1C30] mb-2 leading-snug">
                    {cred.degree}
                  </h3>
                  <p className="text-xs text-[#565E74] leading-relaxed mb-4">
                    {cred.description}
                  </p>
                </div>
                <div className="pt-3 bg-[#F8FAFC] p-3 rounded-xl border border-[#E2E8F0]">
                  <span className="text-[10px] font-bold text-[#64748B] uppercase block">
                    Benchmark / Audit Metric
                  </span>
                  <span className="text-xs font-bold text-[#0B1C30] block">
                    {cred.benchmark}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="md:col-span-3 p-8 rounded-2xl bg-white border border-[#E2E8F0] text-center text-[#565E74] text-xs">
              No verified educational credentials recorded for non-active cycle.
            </div>
          )}
        </div>
      </section>

      {/* SECTION 2: PROFESSIONAL GOVERNANCE & KNOWLEDGE ECONOMY FOOTPRINT */}
      <section
        className={`w-full mb-12 sm:mb-16 ${
          activeTab !== "profile" ? "hidden lg:block" : "block"
        }`}
      >
        <div className="mb-6">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#E6007E] font-display">
            Candidate Evaluation Framework
          </span>
          <h2 className="font-display text-xl sm:text-3xl text-[#0B1C30] font-bold tracking-tight">
            Professional Governance &amp; Knowledge Economy Footprint
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Narrative Column */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-6">
            <div>
              <h3 className="font-display text-lg font-bold text-[#0B1C30] mb-2">
                Higher Education Leadership &amp; Institution Building
              </h3>
              <p className="text-xs sm:text-sm text-[#565E74] leading-relaxed">
                {profile.governanceNarrative}
              </p>
            </div>

            {/* 3 Pillars Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {profile.governancePillars.map((p, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <span className="material-symbols-outlined text-[#E6007E] text-[24px] mb-2 block">
                    {p.icon}
                  </span>
                  <h4 className="font-display text-xs font-bold text-[#0B1C30] mb-1">
                    {p.title}
                  </h4>
                  <p className="text-[11px] text-[#565E74] leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: District Registry */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#EFF4FF] border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-[#64748B] uppercase block mb-1">
                Delimitation Boundaries
              </span>
              <h3 className="font-display text-lg font-bold text-[#0B1C30] mb-4">
                Electoral Administrative Map
              </h3>
              <ul className="space-y-2.5 text-xs text-[#0B1C30]">
                {profile.districtList.map((d, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E6007E] mt-1.5 shrink-0"></span>
                    <div>
                      <strong>{d.district}:</strong>{" "}
                      <span className="text-[#565E74]">{d.zoneDescription}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6">
              <Link
                href="/#constituencies"
                className="w-full h-10 rounded-xl bg-white text-[#E6007E] text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-[#F8FAFC] transition-colors shadow-xs border border-[#CBD5E1]"
              >
                <span>Explore Constituency Map</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: POLITICAL TIMELINE & CIVIC ARCHIVE */}
      <section
        className={`w-full mb-12 sm:mb-16 ${
          activeTab !== "timeline" ? "hidden lg:block" : "block"
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#E6007E] font-display">
              Legislative Precedents
            </span>
            <h2 className="font-display text-xl sm:text-3xl text-[#0B1C30] font-bold tracking-tight">
              Political Timeline &amp; Graduate Milestones
            </h2>
          </div>
          <span className="text-[10px] font-bold text-[#565E74] uppercase bg-[#EFF4FF] border border-[#E2E8F0] px-3 py-1 rounded-full">
            Verified Council Records
          </span>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs">
          <div className="relative pl-6 space-y-8">
            <div className="absolute left-2.5 top-3 bottom-3 w-0.5 bg-[#E2E8F0]"></div>

            {profile.timelineEvents.map((evt, idx) => (
              <div key={idx} className="relative">
                <div
                  className={`absolute -left-[19px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white shadow-xs ${
                    evt.badgeType === "upcoming" ? "bg-[#E6007E] animate-pulse" : "bg-[#006397]"
                  }`}
                ></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="font-display text-base font-bold text-[#0B1C30]">
                    {evt.date}: {evt.title}
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#EFF4FF] text-[#006397] self-start sm:self-auto uppercase">
                    {evt.badge}
                  </span>
                </div>
                <p className="text-xs text-[#565E74] leading-relaxed">{evt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: 4 CORE PILLARS FOR GRADUATE ADVOCACY */}
      {profile.policyPillars.length > 0 && (
        <section
          className={`w-full mb-12 sm:mb-16 ${
            activeTab !== "agenda" ? "hidden lg:block" : "block"
          }`}
        >
          <div className="mb-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#E6007E] font-display">
              Policy Architecture
            </span>
            <h2 className="font-display text-xl sm:text-3xl text-[#0B1C30] font-bold tracking-tight">
              4 Core Pillars for Graduate Welfare &amp; Legislative Advocacy
            </h2>
            <p className="text-xs sm:text-sm text-[#565E74] mt-1">
              Party commitments targeted towards higher education, employment corridors, and academic welfare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.policyPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EFF4FF] text-[#E6007E] flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[26px]">{pillar.icon}</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E6007E] font-display">
                    Pillar {pillar.number} &bull; {pillar.category}
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#0B1C30] mt-1 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#565E74] leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs">
                  <span className="font-semibold text-[#0B1C30]">{pillar.metricLabel}</span>
                  <span className="text-[11px] font-bold text-[#E6007E] uppercase">
                    {pillar.metricValue}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 5: PUBLIC STATEMENTS & MEDIA GALLERY */}
      {profile.mediaArticles.length > 0 && (
        <section
          className={`w-full mb-12 sm:mb-16 ${
            activeTab !== "media" ? "hidden lg:block" : "block"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E6007E] font-display">
                Media &amp; Public Records
              </span>
              <h2 className="font-display text-xl sm:text-3xl text-[#0B1C30] font-bold tracking-tight">
                Public Statements, Press Briefs &amp; Editorials
              </h2>
            </div>
            <a
              href="https://telanganarashtrasamithi.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#E6007E] hover:underline flex items-center gap-1"
            >
              <span>BRS Press Archive</span>
              <span className="material-symbols-outlined text-[14px]">north_east</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {profile.mediaArticles.map((article, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white border border-[#E2E8F0] shadow-xs overflow-hidden flex flex-col justify-between"
              >
                {article.imageUrl && (
                  <div className="relative w-full aspect-video bg-[#EFF4FF]">
                    <img
                      src={article.imageUrl}
                      alt={article.imageAlt || article.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#0B1C30]/80 text-white">
                      {article.tag}
                    </span>
                  </div>
                )}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1 text-[11px] text-[#64748B]">
                      <span>{article.outlet}</span>
                      <span>&bull;</span>
                      <span className="text-[#E6007E] font-semibold">{article.date}</span>
                    </div>
                    <h4 className="font-display font-bold text-sm text-[#0B1C30] mb-2 line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-xs text-[#565E74] line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-bold text-[#E6007E]">
                    <span>{article.actionLabel}</span>
                    <span className="material-symbols-outlined text-[16px]">north_east</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 6: STATUTORY DOCUMENTS & ECI FILINGS */}
      {profile.statutoryDocuments.length > 0 && (
        <section className="w-full mb-12 sm:mb-16">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#EFF4FF] border border-[#E2E8F0] shadow-xs">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E6007E] font-display">
                  Legal Transparency &amp; Public Records
                </span>
                <h2 className="font-display text-xl sm:text-2xl text-[#0B1C30] font-bold tracking-tight">
                  Official Filings &amp; Statutory Templates
                </h2>
              </div>
              <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-white text-[#0B1C30] border border-[#CBD5E1] self-start lg:self-auto">
                ECI VERIFIED TEMPLATES
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {profile.statutoryDocuments.map((doc, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#EFF4FF] flex items-center justify-center text-[#E6007E] shrink-0">
                      <span className="material-symbols-outlined text-[20px]">{doc.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xs text-[#0B1C30]">
                        {doc.title}
                      </h4>
                      <p className="text-[11px] text-[#565E74] leading-relaxed">
                        {doc.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-[#F1F5F9] text-[10px] text-[#64748B]">
                    <span>{doc.fileSize}</span>
                    <a
                      href={doc.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E6007E] font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Download</span>
                      <span className="material-symbols-outlined text-[13px]">download</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 7: SOURCE REGISTER & STATUTORY VERIFICATION NOTICE */}
      <section className="w-full mb-8">
        <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#006397] text-[24px] shrink-0">
              gavel
            </span>
            <div className="space-y-0.5 text-xs">
              <p className="font-bold text-[#0B1C30]">
                Public Electoral Archive Protocol &bull; Verified via ECI &amp; Telangana Legislature
              </p>
              <p className="text-[#64748B]">
                Audited Source: <span className="font-semibold text-[#0B1C30]">{profile.verificationRegister.auditedSource}</span> &bull; Last updated: <span className="font-semibold text-[#0B1C30]">{profile.verificationRegister.lastUpdated}</span>
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => alert("Reference ticket generated. Thank you for reporting a factual correction.")}
            className="h-9 px-3.5 rounded-xl bg-white text-[#565E74] hover:text-[#0B1C30] text-xs font-semibold border border-[#CBD5E1] transition-colors flex items-center gap-1.5 shrink-0"
          >
            <span className="material-symbols-outlined text-[16px] text-[#E6007E]">report</span>
            <span>{profile.verificationRegister.discrepancyActionLabel}</span>
          </button>
        </div>
      </section>

      {/* ALERT MODAL */}
      {alertModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1C30]/50 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-[#E2E8F0] relative">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#E6007E] text-[22px]">
                  notifications_active
                </span>
                <h3 className="font-display font-bold text-base sm:text-lg text-[#0B1C30]">
                  Candidate Declaration Tracker
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setAlertModalOpen(false)}
                className="text-[#64748B] hover:text-[#0B1C30] p-1 rounded-lg"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {alertSuccess ? (
              <div className="py-6 text-center space-y-2">
                <span className="material-symbols-outlined text-[#006397] text-[44px]">
                  check_circle
                </span>
                <h4 className="font-display font-bold text-base text-[#0B1C30]">
                  Subscribed Successfully!
                </h4>
                <p className="text-xs text-[#565E74] max-w-sm mx-auto">
                  You will receive real-time statutory notification when the BRS candidate for {profile.constituencyName} is declared.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAlertSubmit} className="space-y-3.5">
                <p className="text-xs text-[#565E74] leading-relaxed">
                  Subscribe for real-time alerts when the BRS Parliamentary Board files official nomination papers for the 2027 MLC term.
                </p>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1C30] mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Dr. / Sri / Smt. Elector Name"
                    className="w-full h-10 px-3 rounded-lg bg-white border border-[#CBD5E1] text-xs text-[#0B1C30] focus:outline-none focus:ring-2 focus:ring-[#E6007E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1C30] mb-1">
                    Mobile Number (SMS / WhatsApp)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full h-10 px-3 rounded-lg bg-white border border-[#CBD5E1] text-xs text-[#0B1C30] focus:outline-none focus:ring-2 focus:ring-[#E6007E]"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setAlertModalOpen(false)}
                    className="px-4 py-2 rounded-lg bg-[#EFF4FF] text-xs font-semibold text-[#565E74] hover:bg-[#E2E8F0]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-lg bg-[#E6007E] text-xs font-bold text-white hover:bg-[#D72B75] shadow-xs"
                  >
                    Activate Instant Notification
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
