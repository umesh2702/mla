import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24 border-b border-[#F0E4EA] bg-gradient-to-b from-[#FFF8F8] via-[#FFFCFD] to-[#FFFCFD]">
      {/* Soft ambient blush radial glow */}
      <div
        className="absolute top-0 right-10 w-[600px] h-[550px] bg-radial from-[#FCE7F0]/70 via-[#FFF8F8]/40 to-transparent blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[350px] bg-radial from-[#F8D7E5]/30 to-transparent blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Editorial Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#F0E4EA] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#D72B75]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A51D55]">
                Leadership &bull; Public Record &bull; Telangana
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#24212A] tracking-tight leading-[1.12]">
              Leadership,{" "}
              <span className="bg-gradient-to-r from-[#D72B75] to-[#A51D55] bg-clip-text text-transparent">
                public service
              </span>{" "}
              and the record behind it.
            </h1>

            {/* Concise Explanatory Copy */}
            <p className="text-base sm:text-lg text-[#77717B] leading-relaxed max-w-2xl font-normal">
              An independent, source-grounded civic portfolio documenting the electoral mandates, legislative floor history, and urban infrastructure oversight of Bharat Rashtra Samithi (BRS) leadership—spotlighting 3-term Quthbullapur MLA K.P. Vivekanand.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/leaders"
                id="hero-explore-leaders-cta"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm bg-gradient-to-r from-[#D72B75] to-[#A51D55] text-white hover:opacity-95 transition-all shadow-md shadow-[#D72B75]/25 hover:shadow-lg hover:shadow-[#D72B75]/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Leadership</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/leaders/kp-vivekanand"
                id="hero-quthbullapur-cta"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm bg-white text-[#24212A] hover:bg-[#FFF8F8] border border-[#F0E4EA] hover:border-[#D72B75]/40 transition-all shadow-2xs hover:-translate-y-0.5"
              >
                <span>Explore Quthbullapur Profile</span>
              </Link>
            </div>

            {/* Supporting Factual Metadata Strip */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#F0E4EA]">
              <div>
                <div className="font-display text-2xl font-extrabold text-[#24212A]">85,576</div>
                <div className="text-xs text-[#77717B] font-medium">Quthbullapur Margin (2023)</div>
              </div>
              <div>
                <div className="font-display text-2xl font-extrabold text-[#24212A]">3 Terms</div>
                <div className="text-xs text-[#77717B] font-medium">Continuous MLA Record</div>
              </div>
              <div>
                <div className="font-display text-2xl font-extrabold text-[#D72B75]">46.8%</div>
                <div className="text-xs text-[#77717B] font-medium">Vote Share Secured</div>
              </div>
              <div>
                <div className="font-display text-2xl font-extrabold text-[#24212A]">100%</div>
                <div className="text-xs text-[#77717B] font-medium">ECI-Verified Records</div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Large Portrait Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">
              {/* Decorative Blush Frame Backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#FCE7F0] via-[#FFF8F8] to-[#F8D7E5] rounded-[40px] transform -rotate-2 opacity-80" />
              <div className="absolute -inset-2 bg-white rounded-[36px] shadow-soft" />

              {/* Main Portrait Container */}
              <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-b from-[#FFF8F8] to-[#FCE7F0] border border-[#F0E4EA] aspect-[4/5] shadow-card-hover group">
                <Image
                  src="/images/leaders/kp-vivekanand.jpg"
                  alt="Authentic portrait of K.P. Vivekanand Goud, MLA Quthbullapur"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 440px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-103"
                />

                {/* Top Corner Floating Tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#F0E4EA] shadow-xs flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D72B75]" />
                  <span className="text-xs font-bold text-[#24212A]">131 &bull; Quthbullapur</span>
                </div>

                {/* Bottom Floating Info Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#F0E4EA] shadow-soft space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#A51D55] bg-[#FCE7F0] px-2 py-0.5 rounded-full">
                      Flagship Representative
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Verified Record
                    </span>
                  </div>
                  <div className="font-display text-lg font-bold text-[#24212A] pt-0.5">
                    K.P. Vivekanand Goud
                  </div>
                  <div className="text-xs text-[#77717B] flex items-center justify-between">
                    <span>MLA, Telangana Legislative Assembly</span>
                    <strong className="text-[#D72B75] font-semibold">+85,576 votes</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
