import { LeaderProfile } from "@/types/leader";
import { MapPin, ShieldCheck, GraduationCap, Calendar, Quote } from "lucide-react";
import LeaderPortrait from "@/components/ui/LeaderPortrait";

interface ProfileHeroProps {
  leader: LeaderProfile;
}

export default function ProfileHero({ leader }: ProfileHeroProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#14161A] via-[#101113] to-[#101113] border-b border-[#262930] py-12 sm:py-16">
      {/* Ambient pink accent glow */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#D72B75]/8 blur-[100px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Portrait Column */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
            <LeaderPortrait
              src={leader.image}
              alt={leader.imageAlt}
              initials={leader.portraitFallbackInitials}
              name={leader.name}
              size="hero"
              priority
              className="w-full max-w-[280px] sm:max-w-[340px] shadow-2xl rounded-3xl"
            />

            <div className="mt-4 w-full max-w-[340px] p-3 rounded-xl bg-[#191B20] border border-[#2D313A] text-xs text-[#9EA39F] space-y-1.5">
              <div className="flex items-center gap-1.5 text-[#E8E2D7] font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Audited Institutional Record</span>
              </div>
              <p className="text-[11px] text-[#777B78] leading-tight">
                Profile compiled from Election Commission of India filings, official Assembly registers, and audited municipal gazettes.
              </p>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Header tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D72B75] text-white">
                {leader.party}
              </span>
              {leader.isFlagship && (
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#191B20] text-[#D72B75] border border-[#D72B75]/40">
                  Flagship Profile
                </span>
              )}
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#191B20] text-[#9EA39F] border border-[#2D313A]">
                {leader.termsInOffice}
              </span>
            </div>

            {/* Names & Roles */}
            <div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#E8E2D7] tracking-tight">
                {leader.name}
              </h1>
              {leader.teluguName && (
                <p className="text-base text-[#777B78] mt-1 font-sans font-medium">
                  {leader.teluguName}
                </p>
              )}
              <p className="text-base sm:text-lg font-semibold text-[#D72B75] mt-2">
                {leader.currentRole}
              </p>
            </div>

            {/* Meta badges */}
            <div className="flex flex-wrap gap-3 text-xs">
              {leader.constituency && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#191B20] border border-[#2D313A] text-[#E8E2D7]">
                  <MapPin className="w-3.5 h-3.5 text-[#D72B75]" />
                  <span>{leader.constituency}</span>
                  {leader.district && <span className="text-[#777B78]">({leader.district})</span>}
                </div>
              )}
              {leader.born && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#191B20] border border-[#2D313A] text-[#9EA39F]">
                  <Calendar className="w-3.5 h-3.5 text-[#777B78]" />
                  <span>Born: {leader.born}</span>
                </div>
              )}
              {leader.education && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#191B20] border border-[#2D313A] text-[#9EA39F]">
                  <GraduationCap className="w-3.5 h-3.5 text-[#777B78]" />
                  <span className="truncate max-w-[320px]">{leader.education}</span>
                </div>
              )}
            </div>

            {/* Short Bio */}
            <p className="text-sm sm:text-base text-[#9EA39F] leading-relaxed">
              {leader.shortBio}
            </p>

            {/* Pull Quote */}
            {leader.quote && (
              <div className="p-4 rounded-2xl bg-[#191B20] border-l-4 border-l-[#D72B75] border-y border-r border-[#262930] flex items-start gap-3">
                <Quote className="w-5 h-5 text-[#D72B75] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#E8E2D7] italic leading-relaxed">
                  &ldquo;{leader.quote}&rdquo;
                </p>
              </div>
            )}

            {/* Key Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {leader.keyStats.map((stat, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-[#191B20] border border-[#2D313A] space-y-1"
                >
                  <div className="text-[10px] text-[#777B78] uppercase font-bold tracking-wider">
                    {stat.label}
                  </div>
                  <div className="font-display text-xl sm:text-2xl font-bold text-[#E8E2D7]">
                    {stat.value}
                  </div>
                  {stat.sublabel && (
                    <div className="text-[10px] text-[#9EA39F] line-clamp-1">
                      {stat.sublabel}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
