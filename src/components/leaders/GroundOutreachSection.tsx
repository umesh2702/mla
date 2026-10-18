import { Mic2, Users, SearchCheck, Calendar, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function GroundOutreachSection() {
  const records = [
    {
      title: "Advocating for Outer Ring Road Metro Extension in Quthbullapur Corridor",
      category: "Assembly Floor Speech",
      date: "August 2023",
      description:
        "Delivered a detailed legislative intervention in the Telangana Assembly, urging the inclusion of the Suchitra-Medchal and Kompally ORR radial spurs in the Phase II metro transit master plan.",
      authority: "Telangana Legislative Assembly Hansard",
      badge: "Legislative Floor",
      icon: Mic2,
      link: "https://www.telangana.gov.in/",
    },
    {
      title: "Permanent Land Pattas Distributed to 3,200+ Long-Standing Residents",
      category: "Welfare Rights Drive",
      date: "October 2023",
      description:
        "Presided over the public distribution of registered ownership title deeds under G.O. 58 & 59, securing legal property tenure for working-class families across Gajularamaram and Jagathgirigutta.",
      authority: "District Collectorate & Revenue Department",
      badge: "Community Tenure",
      icon: Users,
      link: "https://www.telangana.gov.in/",
    },
    {
      title: "Monsoon Preparedness & SNDP Drain Works Inspection Across All Circles",
      category: "Civic Field Inspection",
      date: "July 2024",
      description:
        "Conducted multi-point on-site field audits of Strategic Nala Development channels, box culverts, and Fox Sagar surplus weir desilting to prevent residential inundation during monsoon rains.",
      authority: "GHMC Circles 26 & 27 Joint Inspection",
      badge: "Field Oversight",
      icon: SearchCheck,
      link: "https://www.ghmc.gov.in/",
    },
  ];

  return (
    <section id="assembly-voice" className="py-16 border-b border-[#F0E4EA] bg-[#FFFCFD] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-[#FCE7F0] border border-[#F8D7E5]">
              <Mic2 className="w-3.5 h-3.5 text-[#D72B75]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#A51D55]">
                Civic Fieldwork &amp; Legislative Interventions
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#24212A] tracking-tight">
              Ground Outreach &amp; Assembly Voice
            </h2>
            <p className="text-xs sm:text-sm text-[#77717B] mt-1.5 max-w-2xl font-normal">
              Official floor representations on the floor of the Telangana Legislative Assembly and documented executive field inspections across Quthbullapur circles.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#77717B] bg-white px-3.5 py-2 rounded-2xl border border-[#F0E4EA] shadow-2xs self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold text-[#24212A]">All Legislative Records Verified</span>
          </div>
        </div>

        {/* 3 Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {records.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl bg-white border border-[#F0E4EA] p-7 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FCE7F0] text-[#A51D55] border border-[#F8D7E5]">
                      {item.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-[#77717B] font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#D72B75]" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF8F8] border border-[#F0E4EA] flex items-center justify-center text-[#D72B75] shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-base font-bold text-[#24212A] leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Body description */}
                  <p className="text-xs sm:text-sm text-[#77717B] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Authority & Link */}
                <div className="pt-4 mt-4 border-t border-[#F0E4EA] flex items-center justify-between text-xs">
                  <span className="text-[#77717B] truncate max-w-[190px]">
                    Record: <strong className="text-[#24212A]">{item.authority}</strong>
                  </span>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#D72B75] hover:text-[#A51D55] font-bold"
                  >
                    <span>Read Record</span>
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
