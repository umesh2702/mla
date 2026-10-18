import Link from "next/link";
import { Scale, ExternalLink, CheckCircle2 } from "lucide-react";
import { MASTER_SOURCES } from "@/data/sources";

export const metadata = {
  title: "Methodology & Statutory Transparency | BRS Leadership Platform",
  description:
    "Review our research standards, source-grounding methodology, and statutory disclosures for the BRS Leadership Platform prototype.",
};

export default function AboutPage() {
  const sourcesList = Object.values(MASTER_SOURCES);

  return (
    <div className="py-12 sm:py-16 bg-[#FFFCFD]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7F0] text-xs font-semibold text-[#A51D55]">
            <Link href="/" className="hover:underline">Platform</Link>
            <span>&bull;</span>
            <span>Institutional Methodology</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#24212A] tracking-tight">
            Research Integrity &amp; Statutory Disclosures
          </h1>
          <p className="text-sm sm:text-base text-[#77717B] leading-relaxed">
            This platform is an independent civic intelligence and digital architecture prototype. We adhere to strict provenance requirements to ensure that all numerical figures, biographical details, and municipal project assertions reflect authoritative public documentation.
          </p>
        </div>

        {/* Independent Prototype Notice */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-l-4 border-l-[#D72B75] border-y border-r border-[#F0E4EA] space-y-3 shadow-soft">
          <div className="flex items-center gap-2 text-sm font-bold text-[#24212A]">
            <Scale className="w-4 h-4 text-[#D72B75]" />
            <span>Independent Civic Research Prototype Disclosure</span>
          </div>
          <p className="text-xs sm:text-sm text-[#77717B] leading-relaxed">
            This digital platform is an independent project developed to demonstrate high-fidelity editorial UI/UX and source-verified civic profiles. It is <strong>neither an official website of the Bharat Rashtra Samithi (BRS) party</strong>, nor is it endorsed, authorized, or financed by any political entity. No political slogans, synthetic representations, or unverified claims are permitted within the repository.
          </p>
        </div>

        {/* Core Methodological Principles */}
        <div className="space-y-6">
          <h2 className="font-display text-2xl font-bold text-[#24212A]">
            Core Verification Standards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[#F0E4EA] space-y-3 shadow-soft">
              <div className="flex items-center gap-2 text-sm font-bold text-[#24212A]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>1. Primary Election Commission Gazettes</span>
              </div>
              <p className="text-xs text-[#77717B] leading-relaxed">
                Election result data—including total valid votes, candidate votes, vote shares, and victory margins—are pulled strictly from ECI Form 20 and official state statistical reports. No secondary estimates are reported without cross-checks.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#F0E4EA] space-y-3 shadow-soft">
              <div className="flex items-center gap-2 text-sm font-bold text-[#24212A]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>2. Separation of MLA Role from State Projects</span>
              </div>
              <p className="text-xs text-[#77717B] leading-relaxed">
                State and municipal infrastructure projects (such as SNDP channels, SRDP flyovers, and Basthi Dawakhanas) are state-funded public works. We explicitly denote whether an MLA advocated for, inspected, or participated in a project, avoiding false personal attribution.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#F0E4EA] space-y-3 shadow-soft">
              <div className="flex items-center gap-2 text-sm font-bold text-[#24212A]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>3. Accurate Boundary Classification</span>
              </div>
              <p className="text-xs text-[#77717B] leading-relaxed">
                We maintain an explicit distinction between Legislative Assembly constituency demarcations (e.g. 131-Quthbullapur) and Greater Hyderabad Municipal Corporation (GHMC) circle/ward boundaries to prevent geographic confusion.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#F0E4EA] space-y-3 shadow-soft">
              <div className="flex items-center gap-2 text-sm font-bold text-[#24212A]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>4. Privacy &amp; Public-Only Disclosures</span>
              </div>
              <p className="text-xs text-[#77717B] leading-relaxed">
                We do not collect personal voter or visitor information. No trackers, telemetry cookies, or data collection forms exist in this application. Only publicly gazetted camp office addresses and verified social media channels are displayed.
              </p>
            </div>
          </div>
        </div>

        {/* Master Catalog of Sources */}
        <div className="space-y-6 pt-6 border-t border-[#F0E4EA]">
          <div>
            <h2 className="font-display text-2xl font-bold text-[#24212A]">
              Master Citation Directory
            </h2>
            <p className="text-xs text-[#77717B] mt-1 font-medium">
              Authoritative statutory registries and gazette links cited across this platform.
            </p>
          </div>

          <div className="space-y-3.5">
            {sourcesList.map((src) => (
              <div
                key={src.id}
                className="p-5 rounded-2xl bg-white border border-[#F0E4EA] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-2xs hover:shadow-soft transition-all"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-[#FCE7F0] text-[#A51D55]">
                      {src.verificationStatus}
                    </span>
                    <span className="font-bold text-[#24212A]">{src.title}</span>
                  </div>
                  <div className="text-[11px] text-[#77717B]">
                    Publisher: <strong className="text-[#24212A]">{src.publisher}</strong> &bull; Accessed: {src.dateAccessed}
                  </div>
                </div>

                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-[#D72B75] hover:text-[#A51D55] shrink-0"
                >
                  <span>Verify at Source</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Back Link */}
        <div className="pt-6 border-t border-[#F0E4EA] flex items-center justify-between">
          <Link
            href="/leaders/kp-vivekanand"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#D72B75] hover:text-[#A51D55]"
          >
            <span>&larr; View Flagship Quthbullapur Dossier</span>
          </Link>
          <Link
            href="/leaders"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#24212A] hover:text-[#D72B75]"
          >
            <span>Explore All Leaders &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
