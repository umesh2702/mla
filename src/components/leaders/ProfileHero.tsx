import Image from "next/image";
import { LeaderProfile } from "@/types/leader";
import { MapPin, ShieldCheck, GraduationCap, Calendar, Quote, Award, Building, Clock } from "lucide-react";

interface ProfileHeroProps {
  leader: LeaderProfile;
}

export default function ProfileHero({ leader }: ProfileHeroProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#FFF8F8] via-[#FFFCFD] to-[#FFFCFD] border-b border-[#F0E4EA] py-12 sm:py-16">
      {/* Soft ambient blush radial gradient */}
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-radial from-[#FCE7F0]/80 via-[#FFF8F8]/40 to-transparent blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Large Authentic Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
            <div className="relative w-full max-w-[360px] sm:max-w-[440px]">
              {/* Decorative Blush Backplate */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#FCE7F0] via-[#FFF8F8] to-[#F8D7E5] rounded-[36px] -rotate-1.5 opacity-90 shadow-2xs" />
              <div className="absolute -inset-1 bg-white rounded-[32px] shadow-soft" />

              {/* Main Portrait Frame */}
              <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-br from-[#FFF8F8] to-[#FCE7F0] aspect-[4/5] border border-[#F0E4EA] shadow-card-hover group">
                <Image
                  src={leader.image}
                  alt={leader.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-103"
                />

                {/* Overlaid constituency chip */}
                {leader.constituency && (
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#F0E4EA] shadow-xs flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D72B75]" />
                    <span className="text-xs font-bold text-[#24212A]">{leader.constituency}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Verification Notice Card */}
            <div className="mt-5 w-full max-w-[440px] p-4 rounded-2xl bg-white border border-[#F0E4EA] text-xs text-[#77717B] space-y-1 shadow-soft">
              <div className="flex items-center gap-1.5 text-[#24212A] font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Audited Institutional Record</span>
              </div>
              <p className="text-[11px] text-[#77717B] leading-relaxed">
                Profile compiled from Election Commission of India filings, official Assembly registers, and audited municipal gazettes.
              </p>
            </div>
          </div>

          {/* Right Column: Profile Information & Jump CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Header tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#D72B75] to-[#A51D55] text-white shadow-2xs">
                {leader.party}
              </span>
              {leader.isFlagship && (
                <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#FCE7F0] text-[#A51D55] border border-[#F8D7E5]">
                  Flagship Profile
                </span>
              )}
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-[#77717B] border border-[#F0E4EA] shadow-2xs">
                {leader.termsInOffice}
              </span>
            </div>

            {/* Names & Roles */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#A51D55] mb-1">
                {leader.constituency ? `${leader.constituency} &bull; Telangana` : "Telangana Leadership"}
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#24212A] tracking-tight leading-[1.15]">
                {leader.name}
              </h1>
              {leader.teluguName && (
                <p className="text-base text-[#77717B] mt-1 font-sans font-medium">
                  {leader.teluguName}
                </p>
              )}
              <p className="text-base sm:text-lg font-bold text-[#D72B75] mt-2">
                {leader.currentRole}
              </p>
            </div>

            {/* Meta badges */}
            <div className="flex flex-wrap gap-2.5 text-xs">
              {leader.district && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#F0E4EA] text-[#24212A] shadow-2xs font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#D72B75]" />
                  <span>District: {leader.district}</span>
                </div>
              )}
              {leader.born && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#F0E4EA] text-[#77717B] shadow-2xs">
                  <Calendar className="w-3.5 h-3.5 text-[#D72B75]" />
                  <span>Born: {leader.born}</span>
                </div>
              )}
              {leader.education && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#F0E4EA] text-[#77717B] shadow-2xs">
                  <GraduationCap className="w-3.5 h-3.5 text-[#A51D55]" />
                  <span className="truncate max-w-[320px]">{leader.education}</span>
                </div>
              )}
            </div>

            {/* Short Bio */}
            <p className="text-sm sm:text-base text-[#77717B] leading-relaxed">
              {leader.shortBio}
            </p>

            {/* Pull Quote */}
            {leader.quote && (
              <div className="p-4 rounded-2xl bg-white border-l-4 border-l-[#D72B75] border-y border-r border-[#F0E4EA] shadow-2xs flex items-start gap-3">
                <Quote className="w-5 h-5 text-[#D72B75] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#24212A] italic leading-relaxed font-medium">
                  &ldquo;{leader.quote}&rdquo;
                </p>
              </div>
            )}

            {/* Key Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {leader.keyStats.map((stat, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-2xl bg-white border border-[#F0E4EA] space-y-1 shadow-2xs"
                >
                  <div className="text-[10px] text-[#77717B] uppercase font-bold tracking-wider">
                    {stat.label}
                  </div>
                  <div className="font-display text-xl sm:text-2xl font-extrabold text-[#24212A]">
                    {stat.value}
                  </div>
                  {stat.sublabel && (
                    <div className="text-[10px] text-[#77717B] line-clamp-1">
                      {stat.sublabel}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Section Jump Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#elections"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white text-[#24212A] hover:bg-[#FFF8F8] border border-[#F0E4EA] hover:border-[#D72B75]/40 transition-colors shadow-2xs"
              >
                <Award className="w-3.5 h-3.5 text-[#D72B75]" />
                <span>Electoral History</span>
              </a>
              {leader.projects && leader.projects.length > 0 && (
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white text-[#24212A] hover:bg-[#FFF8F8] border border-[#F0E4EA] hover:border-[#D72B75]/40 transition-colors shadow-2xs"
                >
                  <Building className="w-3.5 h-3.5 text-[#D72B75]" />
                  <span>Development Projects</span>
                </a>
              )}
              <a
                href="#timeline"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white text-[#24212A] hover:bg-[#FFF8F8] border border-[#F0E4EA] hover:border-[#D72B75]/40 transition-colors shadow-2xs"
              >
                <Clock className="w-3.5 h-3.5 text-[#D72B75]" />
                <span>Public Record</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
