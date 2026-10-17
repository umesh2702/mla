import { BiographySection as BioSectionType } from "@/types/leader";
import { BookOpen } from "lucide-react";

interface BiographySectionProps {
  sections: BioSectionType[];
}

export default function BiographySection({ sections }: BiographySectionProps) {
  return (
    <section id="biography" className="py-12 border-b border-[#262930] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="w-5 h-5 text-[#D72B75]" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#E8E2D7]">
            Biographical &amp; Political Trajectory
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#191B20] border border-[#2D313A] space-y-4 hover:border-[#777B78]/50 transition-colors"
            >
              <div className="flex items-center gap-2 border-b border-[#262930] pb-3">
                <span className="w-6 h-6 rounded-full bg-[#101113] border border-[#2D313A] flex items-center justify-center text-xs font-bold text-[#D72B75]">
                  {idx + 1}
                </span>
                <h3 className="font-display text-lg font-bold text-[#E8E2D7]">
                  {sec.title}
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[#9EA39F] leading-relaxed">
                {sec.content.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
