import { ShieldCheck, ExternalLink } from "lucide-react";
import { MASTER_SOURCES } from "@/data/sources";

export default function SourceTransparencySection() {
  const sourcesList = Object.values(MASTER_SOURCES).slice(0, 6);

  return (
    <section className="py-16 sm:py-20 bg-[#14161A]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-[#D72B75]" />
              <span className="text-xs uppercase font-bold tracking-wider text-[#D72B75]">
                Source Grounding &amp; Verifiability
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#E8E2D7]">
              Audited Primary &amp; Statutory References
            </h2>
          </div>
          <p className="text-xs text-[#777B78] max-w-md">
            All electoral results, asset declarations, and legislative timelines are paired with publicly verifiable source records and government gazette portals.
          </p>
        </div>

        {/* Sources Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sourcesList.map((src) => (
            <div
              key={src.id}
              className="p-5 rounded-2xl bg-[#191B20] border border-[#2D313A] flex flex-col justify-between hover:border-[#D72B75]/40 transition-colors"
            >
              <div className="space-y-2">
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
                <h3 className="font-display text-sm font-bold text-[#E8E2D7] line-clamp-2">
                  {src.title}
                </h3>
                <p className="text-xs text-[#9EA39F]">
                  <strong className="text-[#777B78]">Publisher:</strong> {src.publisher}
                </p>
                {src.notes && (
                  <p className="text-[11px] text-[#777B78] italic line-clamp-2">
                    {src.notes}
                  </p>
                )}
              </div>

              <div className="pt-4 mt-3 border-t border-[#262930] flex items-center justify-between text-xs">
                <span className="text-[10px] text-[#777B78]">
                  Verified {src.dateAccessed}
                </span>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#D72B75] hover:text-[#E34389] transition-colors"
                >
                  <span>Open Record</span>
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
