import { ShieldCheck, ExternalLink } from "lucide-react";
import { MASTER_SOURCES } from "@/data/sources";

export default function SourceTransparencySection() {
  const sourcesList = Object.values(MASTER_SOURCES).slice(0, 6);

  return (
    <section className="py-16 sm:py-20 bg-[#FFF8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-[#D72B75]" />
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#A51D55] bg-[#FCE7F0] px-3 py-1 rounded-full">
                Source Grounding &amp; Verifiability
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#24212A] mt-2">
              Audited Primary &amp; Statutory References
            </h2>
          </div>
          <p className="text-xs text-[#77717B] max-w-md font-medium">
            All electoral results, asset declarations, and legislative timelines are paired with publicly verifiable source records and government gazette portals.
          </p>
        </div>

        {/* Sources Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sourcesList.map((src) => (
            <div
              key={src.id}
              className="p-6 rounded-3xl bg-white border border-[#F0E4EA] flex flex-col justify-between shadow-soft hover:shadow-card-hover transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-[#FCE7F0] text-[#A51D55] border border-[#F8D7E5]">
                    {src.verificationStatus}
                  </span>
                  {src.publicationDate && (
                    <span className="text-[11px] font-medium text-[#77717B]">
                      {src.publicationDate}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-sm font-bold text-[#24212A] line-clamp-2">
                  {src.title}
                </h3>
                <p className="text-xs text-[#77717B]">
                  <strong className="text-[#24212A]">Publisher:</strong> {src.publisher}
                </p>
                {src.notes && (
                  <p className="text-[11px] text-[#77717B] italic line-clamp-2">
                    {src.notes}
                  </p>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-[#F0E4EA] flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#77717B]">
                  Verified {src.dateAccessed}
                </span>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-[#D72B75] hover:text-[#A51D55] transition-colors"
                >
                  <span>Open Record</span>
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
