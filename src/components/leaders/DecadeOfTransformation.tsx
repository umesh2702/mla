import { TrendingUp, ShieldCheck, Activity, Droplets, HeartPulse, FileCheck } from "lucide-react";

export default function DecadeOfTransformation() {
  const metrics = [
    {
      label: "TOTAL SANCTIONED INFRA",
      value: "₹2,850+",
      unit: "Cr",
      description: "Sanctioned road networks, grade separators, twin-pipeline potable water, and underground sewerage trunks.",
      badge: "GHMC & HMWSSB",
      source: "Municipal Sanction Records (2014–2023)",
      icon: TrendingUp,
      color: "from-pink-500 to-rose-600",
      accentBg: "bg-pink-50 border-pink-200 text-pink-700",
    },
    {
      label: "SNDP DRAINAGE EXECUTION",
      value: "98.5%",
      unit: "",
      description: "Strategic Nala Development flood mitigation deep drains completed across low-lying flood-prone colonies.",
      badge: "SNDP Phase I & II",
      source: "MA&UD Project Reports",
      icon: Droplets,
      color: "from-blue-500 to-indigo-600",
      accentBg: "bg-blue-50 border-blue-200 text-blue-700",
    },
    {
      label: "MONTHLY HEALTHCARE REACH",
      value: "45,000+",
      unit: "",
      description: "Citizens treated monthly with 57 free diagnostic lab tests and zero-cost pharmaceuticals across 24+ clinics.",
      badge: "24+ Basthi Dawakhanas",
      source: "Telangana Health Dept Registry",
      icon: HeartPulse,
      color: "from-amber-500 to-orange-600",
      accentBg: "bg-amber-50 border-amber-200 text-amber-800",
    },
    {
      label: "PERMANENT LAND RIGHTS",
      value: "18,200+",
      unit: "",
      description: "Ownership regularisation titles (pattas under G.O. 58/59) legally handed over to long-standing residents.",
      badge: "G.O. 58 & 59",
      source: "Revenue Department Records",
      icon: FileCheck,
      color: "from-emerald-500 to-teal-600",
      accentBg: "bg-emerald-50 border-emerald-200 text-emerald-800",
    },
  ];

  return (
    <section id="decade-transformation" className="py-16 border-b border-[#F0E4EA] bg-[#FFFCFD] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-[#FCE7F0] border border-[#F8D7E5]">
              <Activity className="w-3.5 h-3.5 text-[#D72B75]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#A51D55]">
                Verified 10-Year Public Record
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#24212A] tracking-tight">
              Decade of Transformation (2014 &ndash; 2024)
            </h2>
            <p className="text-xs sm:text-sm text-[#77717B] mt-1.5 max-w-2xl font-normal">
              Audited civil infrastructure, urban stormwater drainage, public healthcare, and land tenure regularisations across the Quthbullapur Assembly segment.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#77717B] bg-white px-3.5 py-2 rounded-2xl border border-[#F0E4EA] shadow-2xs self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold text-[#24212A]">ECI &amp; Gazette Corroborated</span>
          </div>
        </div>

        {/* 4 Large Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl bg-white border border-[#F0E4EA] p-6 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.accentBg}`}>
                    {item.badge}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-[#FFF8F8] border border-[#F0E4EA] flex items-center justify-center text-[#D72B75] group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Primary Number */}
                <div className="space-y-1">
                  <div className="text-[10px] font-semibold text-[#77717B] uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-[#24212A] tracking-tight">
                    {item.value}
                    {item.unit && <span className="text-lg sm:text-xl font-bold ml-1 text-[#D72B75]">{item.unit}</span>}
                  </div>
                  <p className="text-xs text-[#77717B] leading-relaxed pt-2">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Source Note */}
                <div className="pt-4 mt-4 border-t border-[#F0E4EA] flex items-center justify-between text-[11px] text-[#77717B]">
                  <span className="italic truncate max-w-[190px]" title={item.source}>
                    Source: {item.source}
                  </span>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
