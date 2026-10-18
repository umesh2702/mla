import { FileText, Compass, Scale } from "lucide-react";

export default function PublicInfoSection() {
  const pillars = [
    {
      icon: Scale,
      title: "Independent Fact-Checking",
      description:
        "Every numerical statistic, election victory margin, and educational credential is cross-checked against official affidavits submitted to the Election Commission of India (ECI) and the Association for Democratic Reforms (ADR).",
    },
    {
      icon: Compass,
      title: "Administrative Boundary Precision",
      description:
        "We distinguish between Assembly constituency demarcations, GHMC municipal ward boundaries, and HMDA planning zones, preventing misleading attribution of administrative jurisdictions.",
    },
    {
      icon: FileText,
      title: "Project Attributions & Status Audit",
      description:
        "Government infrastructure projects are not claimed as an individual legislator's personal creation. We document explicit institutional roles: whether a project was advocated, sanctioned, in-progress, or delayed.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 border-b border-[#F0E4EA] bg-[#FFFCFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase font-extrabold tracking-wider text-[#A51D55] bg-[#FCE7F0] px-3 py-1 rounded-full mb-3 inline-block">
            Public Information Mission
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#24212A]">
            Institutional Rigor in Civic Representation
          </h2>
          <p className="text-sm sm:text-base text-[#77717B] mt-3 leading-relaxed">
            Public trust in legislative representation demands empirical precision. Our platform replaces promotional hyperbole with verified government records, gazette notifications, and parliamentary proceedings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white border border-[#F0E4EA] space-y-4 shadow-soft hover:shadow-card-hover transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FCE7F0] border border-[#F8D7E5] flex items-center justify-center text-[#A51D55] shadow-2xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#24212A]">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#77717B] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
