"use client";

import { BRS_LEADERSHIP } from "@/data/graduate-mlc";

export default function BrsLeadershipSection() {
  return (
    <section className="w-full mb-16 scroll-mt-24" id="leadership">
      <div className="bg-[#EFF4FF] rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-xs">
        {/* Header Block */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-xs bg-[#E6007E]"></span>
            <span className="text-[11px] font-bold text-[#E6007E] uppercase tracking-widest font-display">
              Political Profile &amp; Governance Archive
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl text-[#0B1C30] font-bold tracking-tight mb-3">
            Bharat Rashtra Samithi (BRS)
          </h2>
          <p className="text-xs sm:text-sm text-[#565E74] leading-relaxed">
            Founded in 2001 as Telangana Rashtra Samithi (TRS), the party spearheaded the statehood movement culminating in Telangana&apos;s formation in 2014. During its two terms of governance (2014–2023), BRS championed transformative irrigation infrastructure, industrial tech expansions via T-Hub, educational welfare, and urban development across Hyderabad and surrounding districts.
          </p>
        </div>

        {/* High-Emphasis Institutional Governance Note */}
        <div className="mb-8 p-4 rounded-xl bg-white border border-[#CBD5E1] flex items-start gap-3 shadow-xs">
          <span className="material-symbols-outlined text-[#E6007E] text-[20px] shrink-0 mt-0.5">
            security
          </span>
          <div className="text-xs leading-relaxed text-[#0B1C30]">
            <strong className="font-bold uppercase tracking-wider text-[#E6007E]">
              Institutional Governance Note:
            </strong>{" "}
            The leaders shown below represent official statewide party leadership and state assembly representatives. They are{" "}
            <strong className="underline decoration-[#E6007E]/50">not</strong> declared candidates for the Graduate MLC election. Graduate MLC nominees for the 2027 cycle are announced separately through the BRS Central Parliamentary Board.
          </div>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {BRS_LEADERSHIP.map((leader) => (
            <div
              key={leader.id}
              className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div>
                {/* Photo & Identity Row */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-[#E2E8F0] bg-[#EFF4FF]">
                    <img
                      src={leader.imageUrl}
                      alt={leader.imageAlt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="font-display font-bold text-sm sm:text-base text-[#0B1C30] truncate">
                        {leader.name}
                      </span>
                      <span className="material-symbols-outlined text-[#E6007E] text-[16px] shrink-0">
                        verified
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-[#E6007E] uppercase block truncate">
                      {leader.partyRole}
                    </span>
                    <span className="text-[11px] text-[#64748B] block truncate">
                      {leader.publicOffice.split("•")[0]}
                    </span>
                  </div>
                </div>

                {/* Biography Snippet */}
                <p className="text-xs text-[#565E74] leading-relaxed mb-4">
                  {leader.bio}
                </p>
              </div>

              {/* Card Footer Badge */}
              <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[10px] text-[#64748B]">
                <span className="px-2 py-0.5 rounded bg-[#F8FAFC] border border-[#E2E8F0] font-medium truncate">
                  {leader.headquartersOrSeat}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Official Party Link */}
        <div className="flex justify-end pt-2">
          <a
            href="https://telanganarashtrasamithi.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006397] hover:text-[#0B1C30] transition-colors"
          >
            <span>Official BRS Party Portal &amp; Press Communiques</span>
            <span className="material-symbols-outlined text-[14px]">north_east</span>
          </a>
        </div>
      </div>
    </section>
  );
}
