import Link from "next/link";
import { ArrowRight, MapPin, ArrowUpRight } from "lucide-react";
import { LEADERS_DATA } from "@/data/leaders";
import LeaderPortrait from "@/components/ui/LeaderPortrait";

export default function DirectoryPreview() {
  return (
    <section className="py-16 sm:py-20 border-b border-[#262930] bg-[#14161A]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#D72B75] mb-2 block">
              Curated Leadership Roster
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#E8E2D7]">
              Key BRS Representatives &amp; Legislative Leaders
            </h2>
          </div>
          <Link
            href="/leaders"
            id="view-all-leaders-preview-link"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D72B75] hover:text-[#E34389] transition-colors whitespace-nowrap"
          >
            <span>Browse Full Directory (4)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERS_DATA.map((leader) => (
            <div
              key={leader.slug}
              className={`flex flex-col justify-between rounded-2xl bg-[#191B20] border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                leader.isFlagship
                  ? "border-[#D72B75]/40 shadow-lg shadow-[#D72B75]/10"
                  : "border-[#2D313A] hover:border-[#777B78]"
              }`}
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <LeaderPortrait
                    src={leader.image}
                    alt={leader.imageAlt}
                    initials={leader.portraitFallbackInitials}
                    name={leader.name}
                    size="md"
                    className="w-16 h-16 rounded-xl"
                  />
                  {leader.isFlagship ? (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#D72B75] text-white">
                      Flagship
                    </span>
                  ) : (
                    <span className="text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded bg-[#101113] border border-[#2D313A] text-[#9EA39F]">
                      Verified
                    </span>
                  )}
                </div>

                {/* Leader info */}
                <h3 className="font-display text-lg font-bold text-[#E8E2D7] line-clamp-1">
                  {leader.name}
                </h3>
                <p className="text-xs text-[#D72B75] font-medium mt-0.5 line-clamp-1">
                  {leader.currentRole}
                </p>

                {leader.constituency && (
                  <div className="flex items-center gap-1 text-xs text-[#9EA39F] mt-2">
                    <MapPin className="w-3.5 h-3.5 text-[#777B78] shrink-0" />
                    <span className="truncate">{leader.constituency}</span>
                  </div>
                )}

                <p className="text-xs text-[#777B78] mt-3 line-clamp-3 leading-relaxed">
                  {leader.shortBio}
                </p>
              </div>

              {/* Action */}
              <div className="pt-4 mt-4 border-t border-[#262930] flex items-center justify-between">
                <span className="text-[11px] text-[#777B78]">
                  {leader.termsInOffice.split("(")[0]}
                </span>
                <Link
                  href={`/leaders/${leader.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#E8E2D7] hover:text-[#D72B75] transition-colors"
                >
                  <span>Dossier</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D72B75]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
