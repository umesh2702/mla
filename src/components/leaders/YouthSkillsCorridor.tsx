import { BookOpen, Train, Trophy, Briefcase, Sparkles, MapPin } from "lucide-react";

export default function YouthSkillsCorridor() {
  const initiatives = [
    {
      title: "Digital E-Libraries & Study Lounges",
      category: "Public Learning Hubs",
      description:
        "Air-conditioned, modern civic study lounges equipped with high-speed internet, e-book archives, and exam-preparation software for youth preparing for TSPSC, UPSC, GATE, and banking selections.",
      venue: "Subhash Nagar & Chintal",
      access: "Free Public Access • 7 Days a Week",
      icon: BookOpen,
      badge: "Education First",
    },
    {
      title: "Direct Metro Connect to IT Corridor",
      category: "Rapid Transit Advocacy",
      description:
        "Persistent floor representation in the Telangana Assembly championing the Outer Ring Road (ORR) and Miyapur-Medchal metro transit expansion, enabling Quthbullapur tech graduates to reach HITEC City in under 35 minutes.",
      venue: "ORR / Suchitra Corridor",
      access: "Assembly Floor Advocacy • Phase II Priority",
      icon: Train,
      badge: "Connectivity",
    },
    {
      title: "Modern Turf Arenas & Open Gyms",
      category: "Youth Sports & Fitness",
      description:
        "Creation of floodlit multi-sport turf arenas for football, volleyball, and box cricket, alongside 28+ open-air gymnasium zones within public park circuits to encourage youth athletics.",
      venue: "Gajularamaram & Suraram",
      access: "Community Maintained • Free Entrance",
      icon: Trophy,
      badge: "Grassroots Sports",
    },
    {
      title: "Annual Youth Job & Skill Melas",
      category: "Employment & Career Fairs",
      description:
        "Organising comprehensive youth job drives connecting local college graduates with 120+ recruiters across IT services, Jeedimetla industrial engineering, precision manufacturing, and pharmaceuticals.",
      venue: "Jeedimetla Industrial Belt",
      access: "5,000+ Youth Screened Annually",
      icon: Briefcase,
      badge: "Employment Drive",
    },
  ];

  return (
    <section id="youth-skills" className="py-16 border-b border-[#F0E4EA] bg-[#FFFCFD] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-[#FCE7F0] border border-[#F8D7E5]">
              <Sparkles className="w-3.5 h-3.5 text-[#D72B75]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#A51D55]">
                Next-Gen Civic Empowerment
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#24212A] tracking-tight">
              Youth, Tech &amp; Future Skills Corridor
            </h2>
            <p className="text-xs sm:text-sm text-[#77717B] mt-1.5 max-w-2xl font-normal">
              Equipping young professionals, students, and athletes in Quthbullapur with state-of-the-art public study environments, digital connectivity, and athletic infrastructure.
            </p>
          </div>

          <div className="self-start md:self-auto px-3.5 py-1.5 rounded-full bg-white border border-[#F0E4EA] text-xs font-semibold text-[#D72B75] shadow-2xs">
            Student &amp; Career Opportunities
          </div>
        </div>

        {/* 4 Youth Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl bg-white border border-[#F0E4EA] p-6 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-3.5">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FCE7F0] text-[#A51D55] border border-[#F8D7E5]">
                      {item.badge}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-[#FFF8F8] border border-[#F0E4EA] flex items-center justify-center text-[#D72B75] group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Category */}
                  <div>
                    <h3 className="font-display text-base font-bold text-[#24212A] leading-snug">
                      {item.title}
                    </h3>
                    <div className="text-[11px] font-semibold text-[#77717B] mt-0.5">
                      {item.category}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#77717B] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Locality & Access */}
                <div className="pt-3.5 mt-4 border-t border-[#F0E4EA] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#24212A]">
                    <MapPin className="w-3.5 h-3.5 text-[#D72B75] shrink-0" />
                    <span className="truncate">{item.venue}</span>
                  </div>
                  <div className="text-[11px] text-[#77717B]">
                    {item.access}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
