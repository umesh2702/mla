import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 border-b border-[#262930] bg-gradient-to-b from-[#101113] via-[#14161A] to-[#101113]">
      {/* Subtle radial ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-[#D72B75]/5 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#191B20] border border-[#2D313A] text-xs text-[#9EA39F]">
            <span className="w-2 h-2 rounded-full bg-[#D72B75] animate-pulse" />
            <span className="font-semibold text-[#E8E2D7]">Independent Legislative Intelligence</span>
            <span className="text-[#777B78]">&bull;</span>
            <span className="text-[#9EA39F]">3rd Telangana Assembly</span>
          </div>

          {/* Main Display Heading */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#E8E2D7] tracking-tight leading-[1.1]">
            Public Records &amp; Verified Leadership in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D72B75] via-[#FF5F9E] to-[#E8E2D7]">
              Telangana Governance
            </span>
          </h1>

          {/* Editorial Explanatory Copy */}
          <p className="text-base sm:text-lg text-[#9EA39F] leading-relaxed max-w-2xl font-normal">
            A source-backed civic directory profiling Bharat Rashtra Samithi (BRS) legislators, their electoral mandates, municipal infrastructure oversight, and verified public service records.
          </p>

          {/* Primary CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/leaders/kp-vivekanand"
              id="hero-quthbullapur-cta"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#D72B75] text-white hover:bg-[#E34389] transition-all shadow-lg shadow-[#D72B75]/25 hover:shadow-[#D72B75]/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>View Quthbullapur Flagship Profile</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/leaders"
              id="hero-explore-leaders-cta"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm bg-[#191B20] text-[#E8E2D7] hover:bg-[#22252C] border border-[#2D313A] hover:border-[#D72B75]/50 transition-all hover:-translate-y-0.5"
            >
              <Users className="w-4 h-4 text-[#D72B75]" />
              <span>Explore Leadership Directory</span>
            </Link>
          </div>

          {/* Key Stat Strips */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#262930]/80">
            <div>
              <div className="font-display text-2xl font-bold text-[#E8E2D7]">85,576</div>
              <div className="text-xs text-[#777B78]">Quthbullapur Margin (2023)</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-[#E8E2D7]">3 Terms</div>
              <div className="text-xs text-[#777B78]">Continuous Representation</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-[#E8E2D7]">100%</div>
              <div className="text-xs text-[#777B78]">Source-Verified Claims</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-[#E8E2D7]">ECI / ADR</div>
              <div className="text-xs text-[#777B78]">Audited Public Affidavits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
