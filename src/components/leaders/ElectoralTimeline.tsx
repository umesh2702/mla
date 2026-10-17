import { ElectionRecord } from "@/types/election";
import { formatNumber, formatPercent } from "@/lib/utils";
import { CheckCircle2, ExternalLink, ShieldCheck, TrendingUp } from "lucide-react";

interface ElectoralTimelineProps {
  elections: ElectionRecord[];
}

export default function ElectoralTimeline({ elections }: ElectoralTimelineProps) {
  return (
    <section id="elections" className="py-16 border-b border-[#F0E4EA] bg-[#FFF8F8] scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A51D55] bg-[#FCE7F0] px-3 py-1 rounded-full">
                Election Commission of India Returns
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#24212A]">
              Electoral Track Record &amp; Certified Mandates
            </h2>
          </div>
          <p className="text-xs text-[#77717B] max-w-sm font-medium">
            Certified figures derived from Form 20 Final Result Sheets and Statistical Reports of the Election Commission of India.
          </p>
        </div>

        {/* Elections Table / Cards */}
        <div className="space-y-5">
          {elections.map((election) => (
            <div
              key={`${election.year}-${election.constituency}`}
              className="p-7 rounded-3xl bg-white border border-[#F0E4EA] shadow-soft hover:shadow-card-hover transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Year and Election Type */}
                <div className="lg:col-span-3 space-y-1.5">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-4xl font-black text-[#24212A]">
                      {election.year}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {election.result}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-[#A51D55]">
                    {election.electionType}
                  </div>
                  <div className="text-xs text-[#77717B] font-medium">
                    {election.constituency}
                  </div>
                </div>

                {/* Candidate Performance */}
                <div className="lg:col-span-4 p-4 rounded-2xl bg-[#FFF8F8] border border-[#F0E4EA] space-y-1">
                  <div className="text-[10px] text-[#77717B] uppercase font-bold tracking-wider">
                    Candidate Votes &amp; Share
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-2xl font-black text-[#24212A]">
                      {formatNumber(election.votesReceived)}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      {formatPercent(election.voteSharePercent)}
                    </span>
                  </div>
                  <div className="text-xs text-[#77717B]">
                    Party: <strong className="text-[#24212A] font-semibold">{election.party}</strong>
                  </div>
                </div>

                {/* Runner-up & Victory Margin */}
                <div className="lg:col-span-3 space-y-1">
                  <div className="text-[10px] text-[#77717B] uppercase font-bold tracking-wider">
                    Victory Margin
                  </div>
                  <div className="font-display text-xl font-black text-[#D72B75] flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    +{formatNumber(election.victoryMargin)} votes
                  </div>
                  <div className="text-xs text-[#24212A] font-medium truncate">
                    Runner-up: {election.runnerUpName}
                  </div>
                  <div className="text-[11px] text-[#77717B]">
                    {election.runnerUpParty} &bull; {formatNumber(election.runnerUpVotes)} votes
                  </div>
                </div>

                {/* Verification & Source */}
                <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end gap-2 text-xs">
                  <span className="text-[11px] text-[#77717B] font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    ECI Form 20 Audit
                  </span>
                  <a
                    href={election.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D72B75] hover:text-[#A51D55] transition-colors py-1.5 px-3 rounded-xl bg-[#FFF8F8] border border-[#F0E4EA] hover:border-[#D72B75]/40"
                  >
                    <span>Audit Record</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
