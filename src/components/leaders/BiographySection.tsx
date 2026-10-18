import { BiographySection as BioSectionType } from "@/types/leader";
import { BookOpen } from "lucide-react";

interface BiographySectionProps {
  sections: BioSectionType[];
}

export default function BiographySection({ sections }: BiographySectionProps) {
  return (
    <section id="biography" className="py-16 border-b border-[#F0E4EA] bg-[#FFFCFD] scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-2xl bg-[#FCE7F0] border border-[#F8D7E5] flex items-center justify-center text-[#A51D55]">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#A51D55]">
              Public Service &amp; Professional Career
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#24212A]">
              Biographical &amp; Political Trajectory
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-[#F0E4EA] space-y-4 shadow-soft hover:shadow-card-hover transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[#F0E4EA] pb-4">
                <span className="w-7 h-7 rounded-full bg-[#FCE7F0] border border-[#F8D7E5] flex items-center justify-center text-xs font-black text-[#A51D55]">
                  {idx + 1}
                </span>
                <h3 className="font-display text-lg font-bold text-[#24212A]">
                  {sec.title}
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[#77717B] leading-relaxed">
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
