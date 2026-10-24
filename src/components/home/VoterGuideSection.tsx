"use client";

import { VOTER_GUIDE_MILESTONES } from "@/data/graduate-mlc";

export default function VoterGuideSection() {
  const handleDownloadForm18 = () => {
    alert(
      "Statutory Form-18 (Claim for inclusion of name in electoral roll for a Graduates' constituency) download link from CEO Telangana. Please fill Section IV with university degree details and gazetted attestation."
    );
    window.open("https://ceotelangana.nic.in", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="w-full mb-16 scroll-mt-24" id="voter-guide">
      <div className="bg-[#EFF4FF] rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-xs">
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D3E4FE] text-[#006397] text-xs font-bold uppercase tracking-wider mb-2 font-display">
              <span className="material-symbols-outlined text-[14px]">event_available</span>
              <span>Statutory Timeline • CEO Telangana Schedule</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl text-[#0B1C30] font-bold tracking-tight">
              Graduate Voter Registration &amp; Form-18 Pipeline
            </h2>
            <p className="text-xs sm:text-sm text-[#565E74] max-w-2xl mt-2 leading-relaxed">
              Under Section 27 of the Representation of the People Act, 1950, fresh enrolment is mandatory for every Graduate MLC election. Electoral rolls are reconstituted de-novo; previous election lists are invalid.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
            <a
              href="https://ceotelangana.nic.in"
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-5 rounded-xl bg-[#E6007E] hover:bg-[#D72B75] text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-transform active:scale-95"
            >
              <span>Apply Online via CEO Telangana</span>
              <span className="material-symbols-outlined text-[16px]">north_east</span>
            </a>
            <button
              type="button"
              onClick={handleDownloadForm18}
              className="h-11 px-5 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#0B1C30] text-xs font-bold flex items-center gap-2 border border-[#CBD5E1] shadow-xs transition-colors"
            >
              <span className="material-symbols-outlined text-[18px] text-[#E6007E]">download</span>
              <span>Download Form-18 (PDF)</span>
            </button>
          </div>
        </div>

        {/* 5-Step Chronological Timeline Bento Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {VOTER_GUIDE_MILESTONES.map((step) => {
            const isDeadline = step.isDeadline;
            return (
              <div
                key={step.stepNumber}
                className={`p-4 rounded-xl sm:rounded-2xl bg-white shadow-xs flex flex-col justify-between border ${
                  isDeadline
                    ? "border-[#E6007E] ring-2 ring-[#E6007E]/20"
                    : "border-[#E2E8F0]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                        isDeadline
                          ? "bg-[#FFD9E2] text-[#3E001E]"
                          : "bg-[#EFF4FF] text-[#565E74]"
                      }`}
                    >
                      {step.label}
                    </span>
                    <span
                      className={`material-symbols-outlined text-[18px] ${
                        isDeadline
                          ? "text-[#E6007E]"
                          : step.status === "completed"
                          ? "text-[#006397]"
                          : "text-[#64748B]"
                      }`}
                    >
                      {isDeadline
                        ? "timer"
                        : step.status === "completed"
                        ? "check_circle"
                        : step.status === "pending"
                        ? "campaign"
                        : "description"}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#64748B] uppercase block">
                    {step.title}
                  </span>
                  <span
                    className={`font-display font-bold text-base block mt-0.5 ${
                      isDeadline ? "text-[#E6007E] text-lg" : "text-[#0B1C30]"
                    }`}
                  >
                    {step.dateDisplay}
                  </span>
                </div>
                <p className="text-xs text-[#565E74] mt-3 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* 3 Core Eligibility Criteria */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Rule 1: 3-Year Degree */}
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EFF4FF] text-[#006397] flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-[22px]">school</span>
              </div>
              <h4 className="font-display font-bold text-base text-[#0B1C30] mb-1">
                3-Year Degree Requirement
              </h4>
              <p className="text-xs text-[#565E74] leading-relaxed">
                Must possess a degree from a recognized Indian University completed on or prior to{" "}
                <strong className="text-[#0B1C30]">1 November 2023</strong> (minimum 3 years prior to the qualifying date under Section 27(3)(a)).
              </p>
            </div>
            <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider mt-4">
              R.P. Act 1950 Sec 27(3)(a)
            </span>
          </div>

          {/* Rule 2: Ordinary Residence */}
          <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EFF4FF] text-[#006397] flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-[22px]">home_pin</span>
              </div>
              <h4 className="font-display font-bold text-base text-[#0B1C30] mb-1">
                Ordinary Residence
              </h4>
              <p className="text-xs text-[#565E74] leading-relaxed">
                Must be an ordinary resident within the specified revenue district boundary of that Graduate constituency on the qualifying date (supported by Aadhaar, EPIC, or valid residence proof).
              </p>
            </div>
            <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider mt-4">
              Territorial Verification
            </span>
          </div>

          {/* Rule 3: Mandatory Fresh Registration */}
          <div className="p-5 rounded-2xl bg-white border border-[#E6007E]/40 shadow-xs flex flex-col justify-between ring-1 ring-[#E6007E]/20">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FFD9E2] text-[#E6007E] flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-[22px]">history_edu</span>
              </div>
              <h4 className="font-display font-bold text-base text-[#0B1C30] mb-1">
                Mandatory Fresh Registration
              </h4>
              <p className="text-xs text-[#565E74] leading-relaxed">
                <strong className="text-[#E6007E]">Previous rolls do NOT carry over.</strong> Even if you voted in the 2021 general election or 2024 bye-election, a fresh Form-18 application with attested degree copies is mandatory.
              </p>
            </div>
            <span className="text-[10px] font-bold text-[#E6007E] uppercase tracking-wider mt-4">
              No Automatic Carry-Over
            </span>
          </div>
        </div>

        {/* High-Contrast Civic Non-Partisan Entitlement Banner */}
        <div className="p-5 rounded-2xl bg-white border border-[#CBD5E1] flex flex-col sm:flex-row items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#EFF4FF] text-[#006397] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[26px]">gavel</span>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <span className="font-display font-bold text-sm text-[#0B1C30] block mb-0.5">
              Statutory Civic Entitlement Notice
            </span>
            <p className="text-xs text-[#565E74] leading-relaxed">
              Voter registration under Form-18 is a statutory civic entitlement under Election Commission of India rules and does not require or imply political party membership. All qualified graduates are urged to verify their enrolment via the official CEO portal.
            </p>
          </div>
          <a
            href="https://ceotelangana.nic.in"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 h-10 px-4 rounded-xl bg-[#006397] hover:bg-[#004B73] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <span>CEO Portal</span>
            <span className="material-symbols-outlined text-[14px]">open_in_new</span>
          </a>
        </div>
      </div>
    </section>
  );
}
