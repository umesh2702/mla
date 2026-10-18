import { ConstituencyInfo } from "@/types/leader";
import { MapPin, Building2, AlertCircle } from "lucide-react";

interface ConstituencyOverviewProps {
  info: ConstituencyInfo;
}

export default function ConstituencyOverview({ info }: ConstituencyOverviewProps) {
  return (
    <section id="constituency" className="py-16 border-b border-[#F0E4EA] bg-[#FFFCFD] scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A51D55] bg-[#FCE7F0] px-3 py-1 rounded-full">
              Territorial &amp; Administrative Dossier
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#24212A]">
            Constituency Landscape: {info.name}
          </h2>
        </div>

        {/* Overview Box */}
        <div className="p-8 rounded-3xl bg-white border border-[#F0E4EA] space-y-5 shadow-soft">
          <p className="text-sm sm:text-base text-[#77717B] leading-relaxed">
            {info.overview}
          </p>

          {/* Explicit Administrative Boundary Notice */}
          <div className="p-5 rounded-2xl bg-[#FFF8F8] border-l-4 border-l-amber-500 border-y border-r border-[#F0E4EA] flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">
                Administrative Distinction &amp; Boundary Precision
              </span>
              <p className="text-xs text-[#77717B] leading-relaxed font-normal">
                {info.administrativeDisclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* Localities and Civic Administration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Major Localities */}
          <div className="p-7 rounded-3xl bg-white border border-[#F0E4EA] space-y-4 shadow-soft">
            <div className="flex items-center gap-2 border-b border-[#F0E4EA] pb-3.5">
              <MapPin className="w-4 h-4 text-[#D72B75]" />
              <h3 className="font-display text-base font-bold text-[#24212A]">
                Key Wards, Colonies &amp; Industrial Zones
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {info.majorLocalities.map((locality, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-xl bg-[#FFF8F8] border border-[#F0E4EA] text-xs font-semibold text-[#24212A] shadow-2xs"
                >
                  {locality}
                </span>
              ))}
            </div>
            {info.totalVotersApprox && (
              <p className="text-xs text-[#77717B] pt-3 border-t border-[#F0E4EA] font-medium">
                <strong>Voter Base:</strong> {info.totalVotersApprox}
              </p>
            )}
          </div>

          {/* Administrative Bodies */}
          <div className="p-7 rounded-3xl bg-white border border-[#F0E4EA] space-y-4 shadow-soft">
            <div className="flex items-center gap-2 border-b border-[#F0E4EA] pb-3.5">
              <Building2 className="w-4 h-4 text-[#D72B75]" />
              <h3 className="font-display text-base font-bold text-[#24212A]">
                Executive Authorities with Jurisdiction
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs text-[#77717B]">
              {info.administrativeBodies.map((body, i) => (
                <li key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#FFF8F8] border border-[#F0E4EA]/50 font-medium text-[#24212A]">
                  <span className="w-2 h-2 rounded-full bg-[#D72B75] shrink-0 mt-1.5" />
                  <span>{body}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
