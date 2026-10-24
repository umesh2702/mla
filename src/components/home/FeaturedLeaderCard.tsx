import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Building, ShieldCheck, GraduationCap, CheckCircle2, Award, ChevronRight } from "lucide-react";
import { LeadershipRepository } from "@/lib/repository";

export default function FeaturedLeaderCard() {
  const leaders = LeadershipRepository.getFeaturedLeaders();
  const flagship = leaders.find((l) => l.slug === "kp-vivekanand") || leaders[0];
  const otherFeatured = leaders.filter((l) => l.slug !== "kp-vivekanand");

  return (
    <section className="py-14 sm:py-20 border-b border-[#EDE3E9] bg-[#FFFCFE]" id="featured-leaders">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-[#EDE3E9] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#D72B75] text-white">
                Leadership Profiles
              </span>
              <span className="text-xs text-[#756D78]">&bull; Authenticated Portfolios &amp; Public Records</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#28212A]">
              Featured Assembly Representatives
            </h2>
          </div>
          <Link
            href="/leaders"
            id="featured-view-all-leaders-cta"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#D72B75] hover:text-[#A51D55] transition-colors"
          >
            <span>Explore All Assembly Members</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 1. Flagship Profile Showcase: K.P. Vivekanand (Quthbullapur) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-[#EDE3E9] rounded-3xl p-6 sm:p-10 shadow-soft relative overflow-hidden group">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D72B75] to-[#A51D55]" />

          {/* Left: Portrait & Badges */}
          <div className="lg:col-span-4 flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#FFF8F8] to-[#FFF1F7] border border-[#EDE3E9] shadow-xs">
              <Image
                src={flagship.image}
                alt={flagship.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-102"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
              <span className="text-xs px-3 py-1 rounded-full bg-[#FFF1F7] border border-[#F7DCE9] text-[#D72B75] font-semibold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Quthbullapur (45)
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-[#FFF8F8] border border-[#EDE3E9] text-[#756D78] font-medium flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#A51D55]" />
                B.E. Civil Engineer
              </span>
            </div>
          </div>

          {/* Right: Key Facts, Track Record, and Direct CTA */}
          <div className="lg:col-span-8 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A51D55] bg-[#FFF1F7] px-2.5 py-0.5 rounded-full border border-[#F7DCE9]">
                  Bharat Rashtra Samithi
                </span>
                <span className="text-[#756D78]">•</span>
                <span className="text-xs font-semibold text-[#28212A]">3-Term Incumbent MLA</span>
                <span className="text-[#756D78]">•</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#D72B75] text-white">
                  Flagship Dossier
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#28212A]">
                {flagship.name}
              </h3>
              <p className="text-sm sm:text-base text-[#756D78] leading-relaxed">
                Representing over 6.8 lakh constituents across suburban northern Hyderabad, K.P. Vivekanand secured re-election in December 2023 with an overwhelming 85,576-vote majority—one of the largest margins in the state. His legislative tenure is distinguished by extensive flood mitigation along the Fox Sagar basin, industrial effluent regulation in Jeedimetla, and arterial highway corridors.
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-2xl bg-[#FFF8F8] border border-[#EDE3E9]">
                <div className="text-[10px] text-[#756D78] uppercase font-bold tracking-wide">2023 Margin</div>
                <div className="font-display text-2xl font-extrabold text-[#D72B75] mt-0.5">85,576 Votes</div>
                <div className="text-[10px] text-emerald-700 font-semibold mt-0.5 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  46.80% Vote Share
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FFF8F8] border border-[#EDE3E9]">
                <div className="text-[10px] text-[#756D78] uppercase font-bold tracking-wide">Legislative Tenure</div>
                <div className="font-display text-xl font-extrabold text-[#28212A] mt-0.5">2014 – Present</div>
                <div className="text-[10px] text-[#756D78] font-medium mt-0.5">3 Consecutive Victories</div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3.5 rounded-2xl bg-[#FFF8F8] border border-[#EDE3E9]">
                <div className="text-[10px] text-[#756D78] uppercase font-bold tracking-wide">Infrastructure Focus</div>
                <div className="font-display text-sm font-bold text-[#28212A] mt-1 line-clamp-1">
                  SNDP &bull; Basthi Dawakhanas
                </div>
                <div className="text-[10px] text-[#756D78] font-medium mt-0.5">Fox Sagar Channelization</div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/leaders/kp-vivekanand"
                id="featured-flagship-view-dossier-cta"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold bg-[#D72B75] hover:bg-[#C22064] text-white transition-all shadow-md shadow-[#D72B75]/20 hover:-translate-y-0.5"
              >
                <Award className="w-4 h-4" />
                <span>Open Flagship Quthbullapur Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/leaders/kp-vivekanand#projects"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-medium bg-[#FFF8F8] text-[#28212A] hover:bg-white border border-[#EDE3E9] hover:border-[#D72B75]/40 transition-colors shadow-2xs"
              >
                <Building className="w-3.5 h-3.5 text-[#D72B75]" />
                <span>Documented Projects (7)</span>
              </Link>
              <Link
                href="/leaders/kp-vivekanand#elections"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-medium bg-[#FFF8F8] text-[#28212A] hover:bg-white border border-[#EDE3E9] hover:border-[#D72B75]/40 transition-colors shadow-2xs"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#D72B75]" />
                <span>Election Records</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 2. Grid of Other Prominent Featured Leaders */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-semibold text-lg text-[#28212A]">
              Statewide Leadership Portfolios
            </h3>
            <span className="text-xs text-[#756D78]">
              Authoritatively verified roles across party lines
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherFeatured.map((leader) => {
              const partyColor = leader.party.includes("BRS")
                ? { bg: "#FFF1F7", text: "#D72B75", border: "#F7DCE9" }
                : leader.party.includes("INC")
                ? { bg: "#E6F4EA", text: "#137333", border: "#CEEAD6" }
                : { bg: "#FFFBEB", text: "#B45309", border: "#FDE68A" };

              return (
                <div
                  key={leader.slug}
                  className="bg-white border border-[#EDE3E9] rounded-2xl overflow-hidden shadow-soft hover:shadow-card-hover transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Portrait Image Container */}
                    <div className="relative aspect-[4/3] bg-gradient-to-b from-[#FFF8F8] to-[#FFF1F7] overflow-hidden">
                      <Image
                        src={leader.image}
                        alt={leader.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 280px"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
                      />
                      <div className="absolute top-2.5 right-2.5">
                        <span
                          className="px-2 py-0.5 rounded-full text-[10px] font-bold border"
                          style={{
                            backgroundColor: partyColor.bg,
                            color: partyColor.text,
                            borderColor: partyColor.border,
                          }}
                        >
                          {leader.party.includes("BRS") ? "BRS" : leader.party.includes("INC") ? "INC" : "BJP"}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 space-y-2">
                      <div className="text-[10px] font-semibold text-[#756D78] flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#D72B75]" />
                        <span>{leader.constituency || leader.district || "Telangana"}</span>
                      </div>
                      <h4 className="font-display font-bold text-base text-[#28212A] group-hover:text-[#D72B75] transition-colors line-clamp-1">
                        {leader.name}
                      </h4>
                      <p className="text-[11px] font-medium text-[#756D78] line-clamp-1">
                        {leader.currentRole}
                      </p>
                      <p className="text-xs text-[#756D78] line-clamp-2 leading-relaxed">
                        {leader.shortBio}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="p-4 pt-0 border-t border-[#EDE3E9]/60 mt-2">
                    <Link
                      href={`/leaders/${leader.slug}`}
                      id={`featured-card-${leader.slug}-btn`}
                      className="w-full flex items-center justify-between py-2 text-xs font-semibold text-[#D72B75] hover:text-[#A51D55] transition-colors"
                    >
                      <span>View Public Profile</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
