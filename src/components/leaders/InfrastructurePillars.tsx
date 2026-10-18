import { Compass, Droplets, HeartPulse, Trees, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function InfrastructurePillars() {
  const pillars = [
    {
      title: "Urban Mobility & Radial Roads",
      category: "Roads & Highways",
      tagline: "Arterial Corridor Widening & Grade Separators",
      description:
        "Engineered 4-lane link roads, signal-free junctions, Outer Ring Road (ORR) radial connectors, and extensive widening of the Balanagar-Narsapur highway to eliminate suburban transit chokepoints.",
      status: "Operational / Phase II In Progress",
      executingAgency: "GHMC Engineering & HMDA",
      keyMetrics: "42+ km widened corridors • 3 key grade separators",
      icon: Compass,
      gradient: "from-rose-500/10 via-pink-500/5 to-transparent",
      iconColor: "text-rose-600",
      accentBorder: "hover:border-rose-300",
    },
    {
      title: "Drinking Water & Underground Drainage",
      category: "Water & Sanitation",
      tagline: "Mission Bhagiratha Urban Potable Grid",
      description:
        "Executed dual-pipeline potable water connections under Mission Bhagiratha Urban alongside 1,200mm diameter trunk sewer replacements, mitigating chronic water scarcity and sewer overflow across 18 colonies.",
      status: "Completed & Active Network",
      executingAgency: "HMWSSB Water Board",
      keyMetrics: "100% household pipeline coverage in core wards",
      icon: Droplets,
      gradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
      iconColor: "text-blue-600",
      accentBorder: "hover:border-blue-300",
    },
    {
      title: "BRS Basthi Dawakhanas & Diagnostics",
      category: "Public Healthcare",
      tagline: "Universal Free Neighborhood Clinics",
      description:
        "Established 24+ modern Basthi Dawakhanas offering free consultation with MBBS doctors, 57 essential diagnostic lab investigations at no charge, and complete dispensaries of generic medicines.",
      status: "Fully Operational",
      executingAgency: "Telangana Health & Family Welfare",
      keyMetrics: "45,000+ monthly low-income patient consultations",
      icon: HeartPulse,
      gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
      iconColor: "text-emerald-600",
      accentBorder: "hover:border-emerald-300",
    },
    {
      title: "Civic Spaces, Playgrounds & Open Gyms",
      category: "Parks & Sports",
      tagline: "Lake Bund Revitalization & Youth Arenas",
      description:
        "Comprehensive restoration of Chinna Damara Cheruvu and Fox Sagar lake bunds with walking tracks, 14+ developed neighborhood sports grounds, and 28+ open-air gyms equipped for senior citizens and youth.",
      status: "Completed / Community Maintained",
      executingAgency: "GHMC Urban Forestry & Sports Wing",
      keyMetrics: "28+ open gyms • 2 restored lakefronts",
      icon: Trees,
      gradient: "from-amber-500/10 via-yellow-500/5 to-transparent",
      iconColor: "text-amber-600",
      accentBorder: "hover:border-amber-300",
    },
  ];

  return (
    <section id="pillars" className="py-16 border-b border-[#F0E4EA] bg-[#FFF8F8] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div>
          <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-[#FCE7F0] border border-[#F8D7E5]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A51D55]">
              Core Physical Assets
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#24212A] tracking-tight">
            Major Infrastructure Pillars
          </h2>
          <p className="text-xs sm:text-sm text-[#77717B] mt-1.5 max-w-2xl font-normal">
            Strategic public capital outlays transforming urban road safety, water security, flood prevention, healthcare access, and recreational well-being in Quthbullapur.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`relative rounded-3xl bg-white border border-[#F0E4EA] p-7 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group ${pillar.accentBorder}`}
              >
                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FCE7F0] text-[#A51D55] border border-[#F8D7E5]">
                      {pillar.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {pillar.status}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFF8F8] border border-[#F0E4EA] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                      <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#24212A] leading-snug">
                        {pillar.title}
                      </h3>
                      <div className="text-xs font-semibold text-[#D72B75] mt-0.5">
                        {pillar.tagline}
                      </div>
                    </div>
                  </div>

                  {/* Body description */}
                  <p className="text-xs sm:text-sm text-[#77717B] leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Key highlights strip */}
                  <div className="p-3 rounded-2xl bg-[#FFF8F8] border border-[#F0E4EA] text-xs font-medium text-[#24212A] flex items-center justify-between">
                    <span>{pillar.keyMetrics}</span>
                    <span className="text-[11px] text-[#77717B] font-normal">
                      Govt Sanctioned
                    </span>
                  </div>
                </div>

                {/* Footer Authority */}
                <div className="pt-4 mt-5 border-t border-[#F0E4EA] flex items-center justify-between text-xs text-[#77717B]">
                  <span>Agency: <strong className="text-[#24212A] font-semibold">{pillar.executingAgency}</strong></span>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-1 text-[#D72B75] hover:text-[#A51D55] font-bold text-xs"
                  >
                    <span>Audited Projects</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
