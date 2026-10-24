import Link from "next/link";
import { MLC_CONSTITUENCIES } from "@/data/graduate-mlc";

export const metadata = {
  title: "Candidate Profiles & Slates | BRS Graduate MLC Explorer 2027",
  description:
    "Explore candidate profiles, nomination status, and verified electoral history across Telangana Graduate MLC constituencies.",
};

export default function CandidatesIndexPage() {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD9E2] text-[#3E001E] text-xs font-bold uppercase tracking-wider mb-2 font-display">
          <span>2027 Candidate Dossiers</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl text-[#0B1C30] font-bold tracking-tight mb-2">
          Graduate MLC Candidate Profiles
        </h1>
        <p className="text-xs sm:text-sm text-[#565E74] max-w-2xl leading-relaxed">
          Select a constituency to view the reusable candidate profile template, verified incumbent history, statutory qualifications, and graduate policy commitments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MLC_CONSTITUENCIES.map((c) => (
          <div
            key={c.id}
            className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                    c.isActive2027
                      ? "bg-[#FFD9E2] text-[#3E001E]"
                      : "bg-[#EFF4FF] text-[#565E74]"
                  }`}
                >
                  {c.cycleLabel}
                </span>
                <span className="text-xs font-bold text-[#64748B]">{c.code}</span>
              </div>

              <h2 className="font-display font-bold text-lg text-[#0B1C30] mb-2 group-hover:text-[#E6007E] transition-colors">
                {c.name}
              </h2>

              <p className="text-xs text-[#565E74] mb-4 line-clamp-2">{c.summary}</p>

              <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] mb-4 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Sitting MLC:</span>
                  <span className="font-bold text-[#0B1C30]">{c.currentIncumbent.name} ({c.currentIncumbent.party})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">BRS Nominee:</span>
                  <span className={`font-semibold ${c.isActive2027 ? "text-[#E6007E]" : "text-[#565E74]"}`}>
                    {c.nominationStatusLabel}
                  </span>
                </div>
              </div>
            </div>

            <Link
              href={`/candidates/${c.slug}`}
              className="w-full h-11 rounded-xl bg-[#E6007E] hover:bg-[#D72B75] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <span className="material-symbols-outlined text-[18px]">badge</span>
              <span>Open Candidate Profile Template</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
