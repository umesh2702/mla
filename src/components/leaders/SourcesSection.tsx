import { SourceCitation } from "@/types/source";
import { BookOpen, ExternalLink } from "lucide-react";

interface SourcesSectionProps {
  sources: SourceCitation[];
}

export default function SourcesSection({ sources }: SourcesSectionProps) {
  return (
    <section id="sources" className="py-12 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5 text-[#D72B75]" />
            <span className="text-xs uppercase font-bold tracking-wider text-[#D72B75]">
              Verification Traceability
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#E8E2D7]">
            Referenced Statutory &amp; Gazette Sources ({sources.length})
          </h2>
          <p className="text-xs text-[#777B78] mt-1 max-w-xl">
            Individual claims in this profile map directly to public government records, election gazettes, and reputable cross-checked journalism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sources.map((src) => (
            <div
              key={src.id}
              className="p-4 rounded-xl bg-[#191B20] border border-[#2D313A] flex flex-col justify-between space-y-2 hover:border-[#D72B75]/40 transition-colors"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#D72B75]/15 text-[#D72B75] border border-[#D72B75]/30">
                    {src.verificationStatus}
                  </span>
                  {src.publicationDate && (
                    <span className="text-[11px] text-[#777B78]">
                      {src.publicationDate}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-sm font-bold text-[#E8E2D7]">
                  {src.title}
                </h3>
                <p className="text-xs text-[#9EA39F]">
                  <strong className="text-[#777B78]">Publisher:</strong> {src.publisher}
                </p>
                {src.notes && (
                  <p className="text-[11px] text-[#777B78] italic">
                    {src.notes}
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-[#262930] flex items-center justify-between text-xs">
                <span className="text-[10px] text-[#777B78]">
                  Accessed: {src.dateAccessed}
                </span>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#D72B75] hover:text-[#E34389] transition-colors"
                >
                  <span>Open Primary Source</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
