import { ConstituencyInfo } from "@/types/leader";
import { MapPin, Building2, AlertCircle, Compass } from "lucide-react";

interface ConstituencyOverviewProps {
  info: ConstituencyInfo;
}

export default function ConstituencyOverview({ info }: ConstituencyOverviewProps) {
  return (
    <section id="constituency" className="py-12 border-b border-[#262930] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Compass className="w-5 h-5 text-[#D72B75]" />
            <span className="text-xs uppercase font-bold tracking-wider text-[#D72B75]">
              Territorial &amp; Administrative Dossier
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#E8E2D7]">
            Constituency Landscape: {info.name}
          </h2>
        </div>

        {/* Overview Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#191B20] border border-[#2D313A] space-y-4">
          <p className="text-sm sm:text-base text-[#9EA39F] leading-relaxed">
            {info.overview}
          </p>

          {/* Explicit Administrative Boundary Notice */}
          <div className="p-4 rounded-xl bg-[#101113] border-l-4 border-l-amber-500 border-y border-r border-[#262930] flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                Administrative Distinction &amp; Boundary Precision
              </span>
              <p className="text-xs text-[#9EA39F] leading-relaxed">
                {info.administrativeDisclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* Localities and Civic Administration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Major Localities */}
          <div className="p-6 rounded-2xl bg-[#191B20] border border-[#2D313A] space-y-4">
            <div className="flex items-center gap-2 border-b border-[#262930] pb-3">
              <MapPin className="w-4 h-4 text-[#D72B75]" />
              <h3 className="font-display text-base font-bold text-[#E8E2D7]">
                Key Wards, Colonies &amp; Industrial Zones
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {info.majorLocalities.map((locality, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-[#101113] border border-[#2D313A] text-xs font-medium text-[#E8E2D7]"
                >
                  {locality}
                </span>
              ))}
            </div>
            {info.totalVotersApprox && (
              <p className="text-xs text-[#777B78] pt-2 border-t border-[#262930]">
                <strong>Voter Base:</strong> {info.totalVotersApprox}
              </p>
            )}
          </div>

          {/* Administrative Bodies */}
          <div className="p-6 rounded-2xl bg-[#191B20] border border-[#2D313A] space-y-4">
            <div className="flex items-center gap-2 border-b border-[#262930] pb-3">
              <Building2 className="w-4 h-4 text-[#D72B75]" />
              <h3 className="font-display text-base font-bold text-[#E8E2D7]">
                Executive Authorities with Jurisdiction
              </h3>
            </div>
            <ul className="space-y-2 text-xs text-[#9EA39F]">
              {info.administrativeBodies.map((body, i) => (
                <li key={i} className="flex items-start gap-2 p-2 rounded-lg bg-[#101113]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D72B75] shrink-0 mt-1.5" />
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
