import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, ArrowUpRight } from "lucide-react";
import { LEADERS_DATA } from "@/data/leaders";

export default function DirectoryPreview() {
  return (
    <section className="py-16 sm:py-20 border-b border-[#F0E4EA] bg-[#FFF8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#A51D55] bg-[#FCE7F0] px-3 py-1 rounded-full mb-3 inline-block">
              Curated Leadership Roster
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#24212A]">
              Key BRS Representatives &amp; Legislative Leaders
            </h2>
          </div>
          <Link
            href="/leaders"
            id="view-all-leaders-preview-link"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#D72B75] hover:text-[#A51D55] transition-colors whitespace-nowrap"
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
              className={`flex flex-col justify-between rounded-3xl bg-white border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover p-5 ${
                leader.isFlagship
                  ? "border-[#D72B75]/40 shadow-soft ring-1 ring-[#D72B75]/20"
                  : "border-[#F0E4EA] shadow-soft hover:border-[#D72B75]/30"
              }`}
            >
              <div>
                {/* Large portrait frame */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#FFF8F8] to-[#FCE7F0] border border-[#F0E4EA] mb-4">
                  <Image
                    src={leader.image}
                    alt={leader.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover object-top transition-transform duration-500 hover:scale-103"
                  />
                  {leader.isFlagship ? (
                    <span className="absolute top-3 right-3 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r from-[#D72B75] to-[#A51D55] text-white shadow-xs">
                      Flagship
                    </span>
                  ) : (
                    <span className="absolute top-3 right-3 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-[#F0E4EA] text-[#24212A] shadow-xs">
                      Verified
                    </span>
                  )}
                </div>

                {/* Leader info */}
                <h3 className="font-display text-lg font-bold text-[#24212A] line-clamp-1 hover:text-[#D72B75] transition-colors">
                  {leader.name}
                </h3>
                <p className="text-xs text-[#D72B75] font-semibold mt-0.5 line-clamp-1">
                  {leader.currentRole}
                </p>

                {leader.constituency && (
                  <div className="flex items-center gap-1.5 text-xs text-[#77717B] mt-2 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#D72B75] shrink-0" />
                    <span className="truncate">{leader.constituency}</span>
                  </div>
                )}

                <p className="text-xs text-[#77717B] mt-3 line-clamp-3 leading-relaxed">
                  {leader.shortBio}
                </p>
              </div>

              {/* Action */}
              <div className="pt-4 mt-4 border-t border-[#F0E4EA] flex items-center justify-between">
                <span className="text-[11px] font-medium text-[#77717B]">
                  {leader.termsInOffice.split("(")[0]}
                </span>
                <Link
                  href={`/leaders/${leader.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#A51D55] hover:text-[#D72B75] transition-colors"
                >
                  <span>View Dossier</span>
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
