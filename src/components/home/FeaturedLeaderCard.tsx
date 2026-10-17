import Link from "next/link";
import { ArrowRight, MapPin, Building, ShieldCheck, GraduationCap } from "lucide-react";
import LeaderPortrait from "@/components/ui/LeaderPortrait";

export default function FeaturedLeaderCard() {
  return (
    <section className="py-16 sm:py-20 border-b border-[#262930] bg-[#101113]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#262930] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#D72B75] text-white">
                Flagship Constituency Profile
              </span>
              <span className="text-xs text-[#777B78]">&bull; Detailed Electoral &amp; Civic Audit</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#E8E2D7]">
              K.P. Vivekanand Goud — MLA Quthbullapur
            </h2>
          </div>
          <Link
            href="/leaders/kp-vivekanand"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#D72B75] hover:text-[#E34389] transition-colors"
          >
            <span>Explore Complete Dossier</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#191B20] border border-[#2D313A] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden group">
          {/* Subtle accent border line on hover */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D72B75] to-transparent opacity-60" />

          {/* Left: Portrait & Badges */}
          <div className="lg:col-span-4 flex flex-col items-center text-center sm:items-start sm:text-left">
            <LeaderPortrait
              src="/images/leaders/kp-vivekanand.jpg"
              alt="K.P. Vivekanand, MLA representing Quthbullapur"
              initials="KPV"
              name="K.P. Vivekanand"
              size="hero"
              className="w-full max-w-[280px] sm:max-w-[320px] mx-auto lg:mx-0 shadow-2xl"
            />
            <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
              <span className="text-xs px-2.5 py-1 rounded-md bg-[#101113] border border-[#2D313A] text-[#E8E2D7] font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D72B75]" />
                Quthbullapur (131)
              </span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-[#101113] border border-[#2D313A] text-[#9EA39F] font-medium flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#777B78]" />
                B.E. Civil Engineer
              </span>
            </div>
          </div>

          {/* Right: Key Facts, Track Record, and Direct CTA */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D72B75]">
                  Bharat Rashtra Samithi
                </span>
                <span className="text-[#777B78]">&bull;</span>
                <span className="text-xs text-[#9EA39F]">3-Term Incumbent MLA</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-[#E8E2D7]">
                Koona Pandu Vivekanand Goud
              </h3>
              <p className="text-sm sm:text-base text-[#9EA39F] leading-relaxed">
                Representing over 6.8 lakh constituents across suburban northern Hyderabad, K.P. Vivekanand secured re-election in December 2023 with an overwhelming 85,576-vote majority. His legislative tenure is marked by ongoing advocacy for flood mitigation along the Fox Sagar basin, industrial effluent regulation in Jeedimetla, and arterial highway corridors.
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#101113] border border-[#262930]">
                <div className="text-[11px] text-[#777B78] uppercase font-semibold">2023 Margin</div>
                <div className="font-display text-xl font-bold text-[#E8E2D7] mt-0.5">85,576 Votes</div>
                <div className="text-[11px] text-emerald-400 font-medium">46.80% Vote Share</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#101113] border border-[#262930]">
                <div className="text-[11px] text-[#777B78] uppercase font-semibold">Electoral Tenure</div>
                <div className="font-display text-xl font-bold text-[#E8E2D7] mt-0.5">2014 – Present</div>
                <div className="text-[11px] text-[#9EA39F]">3 Consecutive Victories</div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-[#101113] border border-[#262930]">
                <div className="text-[11px] text-[#777B78] uppercase font-semibold">Civic Focus</div>
                <div className="font-display text-sm font-bold text-[#E8E2D7] mt-1 line-clamp-1">
                  SNDP &bull; Drainage &bull; Basthi Dawakhanas
                </div>
                <div className="text-[11px] text-[#9EA39F]">Fox Sagar Channelization</div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/leaders/kp-vivekanand"
                id="featured-card-full-profile-btn"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-[#D72B75] text-white hover:bg-[#E34389] transition-all shadow-md shadow-[#D72B75]/20"
              >
                <span>View Full Quthbullapur Dossier</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/leaders/kp-vivekanand#projects"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-[#101113] text-[#E8E2D7] hover:bg-[#16181C] border border-[#2D313A] transition-colors"
              >
                <Building className="w-4 h-4 text-[#D72B75]" />
                <span>Audited Projects (7)</span>
              </Link>
              <Link
                href="/leaders/kp-vivekanand#elections"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-[#101113] text-[#E8E2D7] hover:bg-[#16181C] border border-[#2D313A] transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-[#D72B75]" />
                <span>Election Records</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
