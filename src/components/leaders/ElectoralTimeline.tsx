import { ElectionRecord } from "@/types/election";
import { formatNumber, formatPercent } from "@/lib/utils";
import { Award, CheckCircle2, ExternalLink, ShieldCheck, TrendingUp } from "lucide-react";

interface ElectoralTimelineProps {
  elections: ElectionRecord[];
}

export default function ElectoralTimeline({ elections }: ElectoralTimelineProps) {
  return (
    <section id="elections" className="py-12 border-b border-[#262930] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-[#D72B75]" />
              <span className="text-xs uppercase font-bold tracking-wider text-[#D72B75]">
                Audited Election Commission Returns
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#E8E2D7]">
              Electoral Track Record &amp; Mandates
            </h2>
          </div>
          <p className="text-xs text-[#777B78] max-w-sm">
            Figures derived from Form 20 Final Result Sheets and Statistical Reports of the Election Commission of India.
          </p>
        </div>

        {/* Elections Table / Cards */}
        <div className="space-y-4">
          {elections.map((election) => (
            <div
              key={`${election.year}-${election.constituency}`}
              className="p-6 rounded-2xl bg-[#191B20] border border-[#2D313A] shadow-md hover:border-[#D72B75]/40 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Year and Election Type */}
                <div className="lg:col-span-3 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-3xl font-extrabold text-[#E8E2D7]">
                      {election.year}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800">
                      <CheckCircle2 className="w-3 h-3" />
                      {election.result}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-[#D72B75]">
                    {election.electionType}
                  </div>
                  <div className="text-xs text-[#777B78]">
                    {election.constituency}
                  </div>
                </div>

                {/* Candidate Performance */}
                <div className="lg:col-span-4 p-3.5 rounded-xl bg-[#101113] border border-[#262930] space-y-1">
                  <div className="text-[10px] text-[#777B78] uppercase font-bold tracking-wider">
                    Candidate Votes &amp; Share
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-2xl font-bold text-[#E8E2D7]">
                      {formatNumber(election.votesReceived)}
                    </span>
                    <span className="text-xs font-semibold text-emerald-400">
                      ({formatPercent(election.voteSharePercent)})
                    </span>
                  </div>
                  <div className="text-xs text-[#9EA39F]">
                    Contested as: <strong className="text-[#E8E2D7]">{election.party}</strong>
                  </div>
                </div>

                {/* Runner-up & Victory Margin */}
                <div className="lg:col-span-3 space-y-1">
                  <div className="text-[10px] text-[#777B78] uppercase font-bold tracking-wider">
                    Victory Margin
                  </div>
                  <div className="font-display text-xl font-bold text-[#E8E2D7] flex items-center gap-1 text-[#D72B75]">
                    <TrendingUp className="w-4 h-4" />
                    +{formatNumber(election.victoryMargin)} votes
                  </div>
                  <div className="text-xs text-[#9EA39F] truncate">
                    Runner-up: {election.runnerUpName} ({election.runnerUpParty})
                  </div>
                  <div className="text-[11px] text-[#777B78]">
                    Runner-up votes: {formatNumber(election.runnerUpVotes)}
                  </div>
                </div>

                {/* Verification & Source */}
                <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end gap-2 text-xs">
                  <span className="text-[10px] text-[#777B78] flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    ECI Form 20
                  </span>
                  <a
                    href={election.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#D72B75] hover:text-[#E34389] transition-colors"
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
