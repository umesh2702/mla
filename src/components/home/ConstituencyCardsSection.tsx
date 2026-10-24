import Link from "next/link";
import { MLC_CONSTITUENCIES } from "@/data/graduate-mlc";

export default function ConstituencyCardsSection() {
  return (
    <section className="w-full mb-16 scroll-mt-24" id="election-overview">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-xs bg-[#E6007E]"></span>
            <span className="text-[11px] font-bold text-[#E6007E] uppercase tracking-widest font-display">
              Comparative Legislative Slate
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl text-[#0B1C30] font-bold tracking-tight">
            Election Overview Cards
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#565E74] max-w-md leading-relaxed">
          Review sitting MLCs, statutory tenure expirations, and BRS nomination announcement states across all three Graduate constituencies.
        </p>
      </div>

      {/* 3 Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MLC_CONSTITUENCIES.map((c) => (
          <div
            key={c.id}
            className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E2E8F0] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow group"
          >
            <div>
              {/* Cycle Status Header */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                    c.isActive2027
                      ? "bg-[#FFD9E2] text-[#3E001E]"
                      : "bg-[#EFF4FF] text-[#565E74]"
                  }`}
                >
                  {c.cycleLabel} &bull; {c.code}
                </span>
                <span
                  className={`text-xs font-bold ${
                    c.currentIncumbent.party === "BRS"
                      ? "text-[#E6007E]"
                      : c.currentIncumbent.party === "INC"
                      ? "text-[#0B1C30]"
                      : "text-[#565E74]"
                  }`}
                >
                  {c.currentIncumbent.party} Incumbent
                </span>
              </div>

              {/* Constituency Title */}
              <h3 className="font-display font-bold text-lg text-[#0B1C30] mb-2 leading-snug group-hover:text-[#E6007E] transition-colors">
                {c.name}
              </h3>
              <p className="text-xs text-[#565E74] mb-4 line-clamp-2">
                {c.summary}
              </p>

              {/* Incumbent Persona Box */}
              <div className="p-3.5 rounded-xl bg-[#EFF4FF] border border-[#E2E8F0] mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D3E4FE] text-[#006397] flex items-center justify-center font-bold shrink-0">
                  <span className="material-symbols-outlined text-[20px]">person</span>
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-[#64748B] uppercase block">
                    Sitting Office Holder (MLC)
                  </span>
                  <div className="font-display font-bold text-sm text-[#0B1C30] truncate">
                    {c.currentIncumbent.name}
                  </div>
                  <div className="text-[11px] text-[#565E74] truncate">
                    {c.currentIncumbent.partyFullName} &bull; Term ends {c.statutoryTermEnd}
                  </div>
                </div>
              </div>

              {/* Separate BRS Nominee Status Box */}
              <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] mb-4 space-y-2 text-xs">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[#64748B] font-medium shrink-0">BRS Nominee:</span>
                  <span
                    className={`font-semibold text-right ${
                      c.isActive2027 ? "text-[#E6007E]" : "text-[#565E74]"
                    }`}
                  >
                    {c.nominationStatusLabel}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#64748B]">Districts:</span>
                  <span className="font-semibold text-[#0B1C30]">
                    {c.districtsCount} Revenue Districts
                  </span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-[#E2E8F0] text-[10px] text-[#64748B]">
                  <span>Source:</span>
                  <span className="truncate max-w-[170px] font-mono">
                    {c.statutorySource.split("&")[0]}
                  </span>
                </div>
              </div>
            </div>

            {/* Profile CTA */}
            <div className="pt-2">
              <Link
                href={`/candidates/${c.slug}`}
                className="w-full h-10 rounded-xl bg-[#EFF4FF] hover:bg-[#DCE9FF] text-[#0B1C30] text-xs font-bold transition-colors flex items-center justify-center gap-2 border border-[#CBD5E1]"
              >
                <span className="material-symbols-outlined text-[16px] text-[#E6007E]">badge</span>
                <span>View Candidate Template</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
