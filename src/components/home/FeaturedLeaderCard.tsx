import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Building, ShieldCheck, GraduationCap, CheckCircle2 } from "lucide-react";

export default function FeaturedLeaderCard() {
  return (
    <section className="py-16 sm:py-20 border-b border-[#F0E4EA] bg-[#FFFCFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#F0E4EA] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#D72B75] to-[#A51D55] text-white">
                Flagship Constituency Dossier
              </span>
              <span className="text-xs text-[#77717B]">&bull; Detailed Electoral &amp; Civic Audit</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#24212A]">
              K.P. Vivekanand Goud — MLA Quthbullapur
            </h2>
          </div>
          <Link
            href="/leaders/kp-vivekanand"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#D72B75] hover:text-[#A51D55] transition-colors"
          >
            <span>Explore Complete Dossier</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-[#F0E4EA] rounded-3xl p-6 sm:p-10 shadow-soft relative overflow-hidden group">
          {/* Subtle top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D72B75] to-[#A51D55]" />

          {/* Left: Portrait & Badges */}
          <div className="lg:col-span-4 flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#FFF8F8] to-[#FCE7F0] border border-[#F0E4EA] shadow-xs">
              <Image
                src="/images/leaders/kp-vivekanand.jpg"
                alt="Official portrait of K.P. Vivekanand, MLA representing Quthbullapur"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
              <span className="text-xs px-3 py-1 rounded-full bg-[#FFF8F8] border border-[#F0E4EA] text-[#24212A] font-semibold flex items-center gap-1.5 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[#D72B75]" />
                Quthbullapur (131)
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-[#FFF8F8] border border-[#F0E4EA] text-[#77717B] font-medium flex items-center gap-1.5 shadow-2xs">
                <GraduationCap className="w-3.5 h-3.5 text-[#A51D55]" />
                B.E. Civil Engineer
              </span>
            </div>
          </div>

          {/* Right: Key Facts, Track Record, and Direct CTA */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A51D55] bg-[#FCE7F0] px-2.5 py-0.5 rounded-full">
                  Bharat Rashtra Samithi
                </span>
                <span className="text-[#77717B]">&bull;</span>
                <span className="text-xs font-semibold text-[#24212A]">3-Term Incumbent MLA</span>
              </div>
              <h3 className="font-display text-3xl font-extrabold text-[#24212A]">
                Koona Pandu Vivekanand Goud
              </h3>
              <p className="text-sm sm:text-base text-[#77717B] leading-relaxed">
                Representing over 6.8 lakh constituents across suburban northern Hyderabad, K.P. Vivekanand secured re-election in December 2023 with an overwhelming 85,576-vote majority. His legislative tenure is marked by ongoing advocacy for flood mitigation along the Fox Sagar basin, industrial effluent regulation in Jeedimetla, and arterial highway corridors.
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-[#FFF8F8] border border-[#F0E4EA]">
                <div className="text-[11px] text-[#77717B] uppercase font-bold tracking-wide">2023 Margin</div>
                <div className="font-display text-2xl font-extrabold text-[#D72B75] mt-0.5">85,576 Votes</div>
                <div className="text-[11px] text-emerald-700 font-semibold mt-0.5 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  46.80% Vote Share
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF8F8] border border-[#F0E4EA]">
                <div className="text-[11px] text-[#77717B] uppercase font-bold tracking-wide">Electoral Tenure</div>
                <div className="font-display text-xl font-extrabold text-[#24212A] mt-0.5">2014 – Present</div>
                <div className="text-[11px] text-[#77717B] font-medium mt-0.5">3 Consecutive Victories</div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-[#FFF8F8] border border-[#F0E4EA]">
                <div className="text-[11px] text-[#77717B] uppercase font-bold tracking-wide">Civic Priorities</div>
                <div className="font-display text-sm font-bold text-[#24212A] mt-1 line-clamp-1">
                  SNDP &bull; Drainage &bull; Basthi Dawakhanas
                </div>
                <div className="text-[11px] text-[#77717B] font-medium mt-0.5">Fox Sagar Channelization</div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/leaders/kp-vivekanand"
                id="featured-card-full-profile-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold bg-gradient-to-r from-[#D72B75] to-[#A51D55] text-white hover:opacity-95 transition-all shadow-md shadow-[#D72B75]/20 hover:shadow-lg hover:shadow-[#D72B75]/30 hover:-translate-y-0.5"
              >
                <span>View Full Quthbullapur Dossier</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/leaders/kp-vivekanand#projects"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl text-sm font-medium bg-[#FFF8F8] text-[#24212A] hover:bg-white border border-[#F0E4EA] hover:border-[#D72B75]/40 transition-colors shadow-2xs"
              >
                <Building className="w-4 h-4 text-[#D72B75]" />
                <span>Audited Projects (7)</span>
              </Link>
              <Link
                href="/leaders/kp-vivekanand#elections"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl text-sm font-medium bg-[#FFF8F8] text-[#24212A] hover:bg-white border border-[#F0E4EA] hover:border-[#D72B75]/40 transition-colors shadow-2xs"
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
