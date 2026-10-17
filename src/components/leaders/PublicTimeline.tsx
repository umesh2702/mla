import { PublicRecord, PublicRecordType } from "@/types/public-record";
import { Clock, ExternalLink, ShieldCheck, Newspaper, MessageSquare, AlertCircle } from "lucide-react";

interface PublicTimelineProps {
  timeline: PublicRecord[];
}

export default function PublicTimeline({ timeline }: PublicTimelineProps) {
  const getRecordBadge = (type: PublicRecordType) => {
    switch (type) {
      case "Official Record":
        return (
          <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-950/70 text-blue-300 border border-blue-800">
            <ShieldCheck className="w-3 h-3 text-blue-400" />
            Official Record
          </span>
        );
      case "Media Report":
        return (
          <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-purple-950/70 text-purple-300 border border-purple-800">
            <Newspaper className="w-3 h-3 text-purple-400" />
            Media Report
          </span>
        );
      case "Attributed Statement":
        return (
          <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-950/70 text-amber-300 border border-amber-800">
            <MessageSquare className="w-3 h-3 text-amber-400" />
            Attributed Statement
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-700">
            <AlertCircle className="w-3 h-3 text-zinc-400" />
            Unverified
          </span>
        );
    }
  };

  return (
    <section id="timeline" className="py-12 border-b border-[#262930] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-[#D72B75]" />
            <span className="text-xs uppercase font-bold tracking-wider text-[#D72B75]">
              Documented Public Activity &amp; Floor Speeches
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#E8E2D7]">
            Legislative &amp; Civic Timeline
          </h2>
          <p className="text-xs text-[#777B78] mt-1 max-w-xl">
            Each entry is categorised by verification grade to differentiate parliamentary gazette proceedings from media coverage and public statements.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#262930] space-y-8">
          {timeline.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#101113] border-2 border-[#D72B75] group-hover:scale-125 transition-transform" />

              <div className="p-5 rounded-2xl bg-[#191B20] border border-[#2D313A] space-y-3 hover:border-[#D72B75]/40 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#E8E2D7]">
                      {item.date}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-[#101113] text-[#777B78] border border-[#262930]">
                      {item.category}
                    </span>
                  </div>
                  {getRecordBadge(item.recordType)}
                </div>

                <h3 className="font-display text-base font-bold text-[#E8E2D7]">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#9EA39F] leading-relaxed">
                  {item.summary}
                </p>

                <div className="pt-3 border-t border-[#262930] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#777B78]">
                    Source: <strong className="text-[#9EA39F] font-medium">{item.sourcePublisher}</strong>
                  </span>
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[#D72B75] hover:text-[#E34389] transition-colors"
                  >
                    <span>View Citation</span>
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
