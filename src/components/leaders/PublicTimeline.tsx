import { PublicRecord, PublicRecordType } from "@/types/public-record";
import { ExternalLink, ShieldCheck, Newspaper, MessageSquare, AlertCircle } from "lucide-react";

interface PublicTimelineProps {
  timeline: PublicRecord[];
}

export default function PublicTimeline({ timeline }: PublicTimelineProps) {
  const getRecordBadge = (type: PublicRecordType) => {
    switch (type) {
      case "Official Record":
        return (
          <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
            <ShieldCheck className="w-3 h-3 text-blue-600" />
            Official Record
          </span>
        );
      case "Media Report":
        return (
          <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-800 border border-purple-200">
            <Newspaper className="w-3 h-3 text-purple-600" />
            Media Report
          </span>
        );
      case "Attributed Statement":
        return (
          <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
            <MessageSquare className="w-3 h-3 text-amber-600" />
            Attributed Statement
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200">
            <AlertCircle className="w-3 h-3 text-zinc-500" />
            Unverified
          </span>
        );
    }
  };

  return (
    <section id="timeline" className="py-16 border-b border-[#F0E4EA] bg-[#FFFCFD] scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A51D55] bg-[#FCE7F0] px-3 py-1 rounded-full">
              Documented Public Activity &amp; Floor Speeches
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#24212A]">
            Legislative &amp; Civic Timeline
          </h2>
          <p className="text-xs text-[#77717B] mt-1 max-w-xl font-medium">
            Each entry is categorised by verification grade to differentiate parliamentary gazette proceedings from media coverage and public statements.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#F0E4EA] space-y-8">
          {timeline.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[33px] sm:-left-[41px] top-2 w-4 h-4 rounded-full bg-white border-3 border-[#D72B75] group-hover:scale-125 transition-transform shadow-xs" />

              <div className="p-6 rounded-3xl bg-white border border-[#F0E4EA] space-y-3.5 shadow-soft hover:shadow-card-hover transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold text-[#24212A]">
                      {item.date}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#FFF8F8] text-[#77717B] border border-[#F0E4EA] font-semibold">
                      {item.category}
                    </span>
                  </div>
                  {getRecordBadge(item.recordType)}
                </div>

                <h3 className="font-display text-base font-bold text-[#24212A]">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#77717B] leading-relaxed">
                  {item.summary}
                </p>

                <div className="pt-3 border-t border-[#F0E4EA] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#77717B]">
                    Source: <strong className="text-[#24212A] font-semibold">{item.sourcePublisher}</strong>
                  </span>
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-[#D72B75] hover:text-[#A51D55] transition-colors"
                  >
                    <span>View Citation</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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
