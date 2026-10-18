import Image from "next/image";
import { LeaderProfile } from "@/types/leader";
import { MapPin, ShieldCheck, GraduationCap, Calendar, Award, Building, Clock, Send, Sparkles } from "lucide-react";

interface ProfileHeroProps {
  leader: LeaderProfile;
}

export default function ProfileHero({ leader }: ProfileHeroProps) {
  const isKp = leader.slug === "kp-vivekanand";

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#FFF8F8] via-[#FFFCFD] to-[#FFFCFD] border-b border-[#F0E4EA] py-10 sm:py-14">
      {/* Soft ambient blush radial gradient */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-radial from-[#FCE7F0]/60 via-[#FFF8F8]/30 to-transparent blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Large Authentic Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
              {/* Soft Pink Framing Ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#FCE7F0] via-[#FFF8F8] to-[#F8D7E5] rounded-[28px] opacity-90 shadow-soft" />

              {/* Main Portrait Frame */}
              <div className="relative rounded-[24px] overflow-hidden bg-gradient-to-br from-[#FFF8F8] to-[#FCE7F0] aspect-[4/5] border border-[#F0E4EA] shadow-card-hover group">
                <Image
                  src={leader.image}
                  alt={leader.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-102"
                />

                {/* Overlaid constituency chip */}
                {leader.constituency && (
                  <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#F0E4EA] shadow-xs flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#D72B75]" />
                    <span className="text-[11px] font-bold text-[#24212A]">{leader.constituency}</span>
                  </div>
                )}

                {/* Bottom Portrait Caption Overlay */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-[#F0E4EA] shadow-soft space-y-0.5">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#A51D55]">
                    {leader.termsInOffice}
                  </div>
                  <div className="font-display text-base font-bold text-[#24212A]">
                    {leader.name}
                  </div>
                  <div className="text-[11px] text-[#77717B] truncate">
                    {leader.currentRole}
                  </div>
                </div>
              </div>
            </div>

            {/* Verification Notice Card */}
            <div className="mt-4 w-full max-w-[400px] p-3.5 rounded-2xl bg-white border border-[#F0E4EA] text-xs text-[#77717B] space-y-1 shadow-2xs">
              <div className="flex items-center gap-1.5 text-[#24212A] font-semibold text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Audited Institutional Record</span>
              </div>
              <p className="text-[11px] text-[#77717B] leading-relaxed">
                Profile compiled from Election Commission of India filings, official Assembly registers, and audited municipal gazettes.
              </p>
            </div>
          </div>

          {/* Right Column: Profile Information & Flagship Showcase */}
          <div className="lg:col-span-7 space-y-5">
            {/* Header tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#D72B75] to-[#A51D55] text-white shadow-2xs">
                {leader.party}
              </span>
              {leader.isFlagship && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FCE7F0] text-[#A51D55] border border-[#F8D7E5]">
                  Flagship Profile
                </span>
              )}
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-[#77717B] border border-[#F0E4EA]">
                {leader.termsInOffice}
              </span>
            </div>

            {/* Main Headline & Identity */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#A51D55] mb-1">
                {leader.constituency ? `${leader.constituency} • Telangana Legislative Assembly` : "Telangana Leadership"}
              </div>

              {isKp ? (
                <>
                  <h1 className="font-display text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#24212A] tracking-tight leading-[1.2]">
                    Dedicated to People&apos;s Welfare,{" "}
                    <span className="bg-gradient-to-r from-[#D72B75] to-[#A51D55] bg-clip-text text-transparent">
                      Transforming Quthbullapur
                    </span>
                  </h1>
                  <p className="font-telugu text-sm sm:text-base font-semibold text-[#D72B75] mt-1.5 leading-relaxed">
                    ప్రజాసేవకు పరితపించే సమరయోధుడు • Empowering 700K+ Aspirations
                  </p>
                </>
              ) : (
                <>
                  <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#24212A] tracking-tight leading-[1.2]">
                    {leader.name}
                  </h1>
                  {leader.teluguName && (
                    <p className="font-telugu text-base text-[#77717B] mt-1 font-medium">
                      {leader.teluguName}
                    </p>
                  )}
                  <p className="text-base font-bold text-[#D72B75] mt-1.5">
                    {leader.currentRole}
                  </p>
                </>
              )}
            </div>

            {/* Lead Bio Description */}
            <p className="text-xs sm:text-sm text-[#77717B] leading-relaxed font-normal">
              {isKp
                ? "Representing over 680,000 citizens across 6 comprehensive municipal divisions and peri-urban habitations. Overseeing strategic road networks, storm-water drainage under the Strategic Nala Development Programme (SNDP), potable water expansion, 24+ Basthi Dawakhanas, and accessible citizen grievance intake."
                : leader.shortBio}
            </p>

            {/* Action Buttons for Flagship */}
            {isKp ? (
              <div className="pt-1 flex flex-wrap items-center gap-2.5">
                <a
                  href="#grievance-desk"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs bg-gradient-to-r from-[#D72B75] to-[#A51D55] text-white hover:opacity-95 transition-all shadow-sm shadow-[#D72B75]/20 hover:-translate-y-0.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Grievance to Praja Darbar (Demo)</span>
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs bg-white text-[#24212A] hover:bg-[#FFF8F8] border border-[#F0E4EA] hover:border-[#D72B75]/40 transition-all shadow-2xs hover:-translate-y-0.5"
                >
                  <Building className="w-3.5 h-3.5 text-[#D72B75]" />
                  <span>Explore Key Development Works (2014&ndash;2024)</span>
                </a>
              </div>
            ) : null}

            {/* Flagship Quick Stat Badges */}
            {isKp && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-[#FFF8F8] border border-[#F0E4EA] space-y-0.5">
                  <div className="text-[10px] uppercase font-bold text-[#A51D55]">3 Consecutive Wins</div>
                  <div className="font-display text-sm font-bold text-[#24212A]">2014, 2018, 2023</div>
                  <div className="text-[10px] text-[#77717B]">10+ Years of Mandate</div>
                </div>
                <div className="p-3 rounded-xl bg-[#FFF8F8] border border-[#F0E4EA] space-y-0.5">
                  <div className="text-[10px] uppercase font-bold text-[#A51D55]">Constituency Reach</div>
                  <div className="font-display text-sm font-bold text-[#24212A]">All 6 GHMC Circles</div>
                  <div className="text-[10px] text-[#77717B]">Urban &amp; Peri-Urban Localities</div>
                </div>
                <div className="p-3 rounded-xl bg-[#FFF8F8] border border-[#F0E4EA] space-y-0.5">
                  <div className="text-[10px] uppercase font-bold text-[#A51D55]">Victory Margin (2023)</div>
                  <div className="font-display text-sm font-bold text-[#D72B75]">+85,576 Votes</div>
                  <div className="text-[10px] text-[#77717B]">46.8% Vote Share Secured</div>
                </div>
              </div>
            )}

            {/* Meta badges: District, Born, Education */}
            <div className="flex flex-wrap gap-2 text-xs pt-1">
              {leader.district && (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-[#F0E4EA] text-[#24212A] shadow-2xs font-medium">
                  <MapPin className="w-3 h-3 text-[#D72B75]" />
                  <span>District: {leader.district}</span>
                </div>
              )}
              {leader.born && (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-[#F0E4EA] text-[#77717B] shadow-2xs">
                  <Calendar className="w-3 h-3 text-[#D72B75]" />
                  <span>Born: {leader.born}</span>
                </div>
              )}
              {leader.education && (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-[#F0E4EA] text-[#77717B] shadow-2xs">
                  <GraduationCap className="w-3 h-3 text-[#A51D55]" />
                  <span className="truncate max-w-[300px]">{leader.education}</span>
                </div>
              )}
            </div>

            {/* Key Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              {leader.keyStats.map((stat, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-white border border-[#F0E4EA] space-y-0.5 shadow-2xs"
                >
                  <div className="text-[10px] text-[#77717B] uppercase font-semibold tracking-wide">
                    {stat.label}
                  </div>
                  <div className="font-display text-lg sm:text-xl font-bold text-[#24212A]">
                    {stat.value}
                  </div>
                  {stat.sublabel && (
                    <div className="text-[10px] text-[#77717B] truncate">
                      {stat.sublabel}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Section Jump Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-2">
              <a
                href="#elections"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-[#24212A] hover:bg-[#FFF8F8] border border-[#F0E4EA] hover:border-[#D72B75]/40 transition-colors shadow-2xs"
              >
                <Award className="w-3 h-3 text-[#D72B75]" />
                <span>Electoral History</span>
              </a>
              {leader.projects && leader.projects.length > 0 && (
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-[#24212A] hover:bg-[#FFF8F8] border border-[#F0E4EA] hover:border-[#D72B75]/40 transition-colors shadow-2xs"
                >
                  <Building className="w-3 h-3 text-[#D72B75]" />
                  <span>Civic Projects</span>
                </a>
              )}
              {isKp && (
                <a
                  href="#youth-skills"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-[#24212A] hover:bg-[#FFF8F8] border border-[#F0E4EA] hover:border-[#D72B75]/40 transition-colors shadow-2xs"
                >
                  <Sparkles className="w-3 h-3 text-[#D72B75]" />
                  <span>Youth &amp; Tech</span>
                </a>
              )}
              <a
                href="#assembly-voice"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-[#24212A] hover:bg-[#FFF8F8] border border-[#F0E4EA] hover:border-[#D72B75]/40 transition-colors shadow-2xs"
              >
                <Clock className="w-3 h-3 text-[#D72B75]" />
                <span>Public Record</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
