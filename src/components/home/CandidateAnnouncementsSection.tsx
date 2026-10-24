"use client";

import { useState } from "react";
import Link from "next/link";
import { MLC_CONSTITUENCIES } from "@/data/graduate-mlc";

export default function CandidateAnnouncementsSection() {
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState("Mahabubnagar–Rangareddy–Hyderabad");

  const handleAlertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setAlertModalOpen(false);
    }, 2500);
  };

  return (
    <section className="w-full mb-16 scroll-mt-24" id="candidates">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-xs bg-[#E6007E]"></span>
            <span className="text-[11px] font-bold text-[#E6007E] uppercase tracking-widest font-display">
              Candidate Announcements &amp; Profiles
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl text-[#0B1C30] font-bold tracking-tight">
            2027 Candidate Slate
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#565E74] max-w-md leading-relaxed">
          Official BRS nominations for the 2027 Graduate MLC renewal cycle. Nominations are under active parliamentary review and will be verified here upon gazetted release.
        </p>
      </div>

      {/* Grid of Candidate Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MLC_CONSTITUENCIES.map((c) => {
          const isActive = c.isActive2027;
          return (
            <div
              key={c.id}
              className={`bg-white rounded-2xl p-5 sm:p-6 border flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative ${
                isActive ? "border-[#E2E8F0]" : "border-[#CBD5E1] bg-[#F8FAFC]"
              }`}
            >
              <div>
                {/* Status Pill Row */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                      isActive
                        ? "bg-[#FFD9E2] text-[#3E001E]"
                        : "bg-[#EFF4FF] text-[#565E74]"
                    }`}
                  >
                    {isActive ? "2027 Slate • " + c.code : "Future Cycle"}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      c.id === "mrh"
                        ? "bg-[#FFD9E2] text-[#E6007E]"
                        : c.id === "wkn"
                        ? "bg-[#FFD9E2] text-[#E6007E]"
                        : "bg-[#E2E8F0] text-[#565E74]"
                    }`}
                  >
                    {c.id === "mrh" ? "Scrutiny" : c.id === "wkn" ? "Screening" : "Term till 2029"}
                  </span>
                </div>

                {/* Candidate Avatar / Monogram */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-14 h-14 rounded-2xl bg-[#EFF4FF] border border-[#CBD5E1] flex items-center justify-center text-[#E6007E] shrink-0 overflow-hidden">
                    <span className="material-symbols-outlined text-[32px]">
                      {isActive ? "person_outline" : "event_busy"}
                    </span>
                    {isActive && (
                      <div className="absolute bottom-0 inset-x-0 h-1 bg-[#E6007E]"></div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <span className="font-display font-bold text-base text-[#0B1C30] block truncate">
                      {isActive ? "Candidate Pending" : "No 2027 Election"}
                    </span>
                    <span className="text-xs text-[#64748B] block truncate font-medium">
                      {c.name}
                    </span>
                    <span className="text-[11px] text-[#565E74] block mt-0.5">
                      Incumbent: {c.currentIncumbent.name} ({c.currentIncumbent.party})
                    </span>
                  </div>
                </div>

                {/* Nomination Detail Copy */}
                <p className="text-xs text-[#565E74] leading-relaxed mb-4">
                  {c.nominationDetails}
                </p>

                {/* District Coverage Snippet */}
                <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] mb-4 text-xs space-y-1">
                  <div className="flex justify-between text-[#64748B]">
                    <span>Districts:</span>
                    <span className="font-semibold text-[#0B1C30]">{c.districtsCount} Districts</span>
                  </div>
                  <div className="flex justify-between text-[#64748B]">
                    <span>Current Term Ends:</span>
                    <span className="font-semibold text-[#0B1C30]">{c.statutoryTermEnd}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons Group */}
              <div className="pt-2 space-y-2">
                <Link
                  href={`/candidates/${c.slug}`}
                  className="w-full h-10 rounded-xl bg-[#E6007E] hover:bg-[#D72B75] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>View Candidate Profile (Template)</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </Link>

                {isActive && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedSeat(c.name);
                      setAlertModalOpen(true);
                    }}
                    className="w-full h-9 rounded-xl bg-[#EFF4FF] hover:bg-[#DCE9FF] text-[#0B1C30] text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 border border-[#E2E8F0]"
                  >
                    <span className="material-symbols-outlined text-[16px] text-[#E6007E]">
                      notifications_active
                    </span>
                    <span>Get Announcement Alert</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Real-Time Announcement Alert Subscription Modal */}
      {alertModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1C30]/50 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-[#E2E8F0] relative">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0] mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#E6007E] text-[22px]">
                  notifications_active
                </span>
                <h3 className="font-display font-bold text-base sm:text-lg text-[#0B1C30]">
                  Candidate Declaration Alert
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

            {subscribed ? (
              <div className="py-6 text-center space-y-2">
                <span className="material-symbols-outlined text-[#006397] text-[44px]">
                  check_circle
                </span>
                <h4 className="font-display font-bold text-base text-[#0B1C30]">
                  Alert Subscription Activated!
                </h4>
                <p className="text-xs text-[#565E74] max-w-sm mx-auto">
                  You will receive an instant notification when the BRS Central Parliamentary Board gazettes its nominee for {selectedSeat}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAlertSubmit} className="space-y-3.5">
                <p className="text-xs text-[#565E74] leading-relaxed">
                  Subscribe to receive an alert when the official BRS candidate is confirmed for the 2027 Graduate MLC elections.
                </p>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1C30] mb-1">
                    Constituency Selected
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={selectedSeat}
                    className="w-full h-10 px-3 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] text-xs font-semibold text-[#0B1C30] cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1C30] mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Sri / Smt. Graduate Voter Name"
                    className="w-full h-10 px-3 rounded-lg bg-white border border-[#CBD5E1] text-xs text-[#0B1C30] focus:outline-none focus:ring-2 focus:ring-[#E6007E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1C30] mb-1">
                    Mobile Number (SMS / WhatsApp notification)
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
                    Subscribe for Free Alert
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
