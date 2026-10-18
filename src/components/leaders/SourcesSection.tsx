import { SourceCitation } from "@/types/source";
import { ExternalLink } from "lucide-react";

interface SourcesSectionProps {
  sources: SourceCitation[];
}

export default function SourcesSection({ sources }: SourcesSectionProps) {
  return (
    <section id="sources" className="py-16 bg-[#FFFCFD] scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A51D55] bg-[#FCE7F0] px-3 py-1 rounded-full">
              Verification Traceability
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#24212A]">
            Referenced Statutory &amp; Gazette Sources ({sources.length})
          </h2>
          <p className="text-xs text-[#77717B] mt-1 max-w-xl font-medium">
            Individual claims in this profile map directly to public government records, election gazettes, and reputable cross-checked journalism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {sources.map((src) => (
            <div
              key={src.id}
              className="p-6 rounded-3xl bg-white border border-[#F0E4EA] flex flex-col justify-between space-y-3 shadow-soft hover:shadow-card-hover transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-[#FCE7F0] text-[#A51D55] border border-[#F8D7E5]">
                    {src.verificationStatus}
                  </span>
                  {src.publicationDate && (
                    <span className="text-[11px] text-[#77717B] font-medium">
                      {src.publicationDate}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-sm font-bold text-[#24212A]">
                  {src.title}
                </h3>
                <p className="text-xs text-[#77717B]">
                  <strong className="text-[#24212A]">Publisher:</strong> {src.publisher}
                </p>
                {src.notes && (
                  <p className="text-[11px] text-[#77717B] italic">
                    {src.notes}
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-[#F0E4EA] flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#77717B]">
                  Accessed: {src.dateAccessed}
                </span>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-[#D72B75] hover:text-[#A51D55] transition-colors"
                >
                  <span>Open Primary Source</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
