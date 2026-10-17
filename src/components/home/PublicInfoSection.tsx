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
    <section className="py-16 sm:py-20 border-b border-[#262930] bg-[#101113]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-[#D72B75] mb-2 block">
            Public Information Mission
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#E8E2D7]">
            Institutional Rigor in Civic Representation
          </h2>
          <p className="text-sm sm:text-base text-[#9EA39F] mt-3 leading-relaxed">
            Public trust in legislative representation demands empirical precision. Our platform replaces promotional hyperbole with verified government records, gazette notifications, and parliamentary proceedings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#191B20] border border-[#2D313A] space-y-4 hover:border-[#777B78]/60 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#101113] border border-[#2D313A] flex items-center justify-center text-[#D72B75]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#E8E2D7]">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#777B78] leading-relaxed">
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
