import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Scale, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#F0E4EA] bg-[#FFF8F8] text-[#77717B] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-16 overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/brs-logo.jpg"
                  alt="Bharat Rashtra Samithi (BRS) Emblem"
                  width={120}
                  height={70}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <span className="font-display font-bold text-base sm:text-lg text-[#24212A] tracking-tight">
                BRS Leadership Platform
              </span>
            </div>
            <p className="text-xs text-[#77717B] leading-relaxed max-w-lg">
              An independent, source-grounded civic intelligence portfolio providing verified public records, election audit records, legislative histories, and infrastructure monitoring across key constituencies in Telangana.
            </p>
            <div className="p-4 rounded-2xl bg-white border border-[#F0E4EA] text-xs text-[#77717B] space-y-1.5 shadow-xs">
              <div className="flex items-center gap-2 text-[#24212A] font-semibold">
                <Scale className="w-3.5 h-3.5 text-[#D72B75]" />
                <span>Statutory Independence Disclosure</span>
              </div>
              <p className="text-[11px] text-[#77717B] leading-relaxed">
                This platform is an independent demonstration created for institutional and design evaluation. It is neither commissioned, authorised, nor endorsed by the Bharat Rashtra Samithi (BRS) party organisation. All political biographies, election records, and municipal projects are curated exclusively from public records.
              </p>
            </div>
          </div>

          {/* Directory Navigation */}
          <div>
            <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-[#24212A] mb-4">
              Leadership Profiles
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/leaders/kp-vivekanand"
                  className="text-[#24212A] hover:text-[#D72B75] font-medium transition-colors flex items-center justify-between"
                >
                  <span>K.P. Vivekanand (Quthbullapur)</span>
                  <span className="text-[9px] uppercase font-bold px-2 py-0.5 rounded-full bg-[#FCE7F0] text-[#A51D55]">
                    Flagship
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/leaders/ktr"
                  className="hover:text-[#D72B75] transition-colors"
                >
                  K.T. Rama Rao (Sircilla)
                </Link>
              </li>
              <li>
                <Link
                  href="/leaders/harish-rao"
                  className="hover:text-[#D72B75] transition-colors"
                >
                  T. Harish Rao (Siddipet)
                </Link>
              </li>
              <li>
                <Link
                  href="/leaders/kcr"
                  className="hover:text-[#D72B75] transition-colors"
                >
                  K. Chandrashekar Rao (Gajwel)
                </Link>
              </li>
              <li className="pt-2 border-t border-[#F0E4EA]">
                <Link
                  href="/leaders"
                  className="text-[#D72B75] hover:text-[#A51D55] font-semibold flex items-center gap-1"
                >
                  <span>Explore Full Directory</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Verification & Data Sources */}
          <div>
            <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-[#24212A] mb-4">
              Public Data Sources
            </h4>
            <ul className="space-y-2 text-xs text-[#77717B]">
              <li>
                <a
                  href="https://results.eci.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#24212A] transition-colors flex items-center gap-1.5"
                >
                  <span>Election Commission of India (ECI)</span>
                  <ExternalLink className="w-3 h-3 text-[#D72B75]" />
                </a>
              </li>
              <li>
                <a
                  href="https://myneta.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#24212A] transition-colors flex items-center gap-1.5"
                >
                  <span>ADR / MyNeta Affidavits</span>
                  <ExternalLink className="w-3 h-3 text-[#D72B75]" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.telangana.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#24212A] transition-colors flex items-center gap-1.5"
                >
                  <span>Telangana Legislative Assembly</span>
                  <ExternalLink className="w-3 h-3 text-[#D72B75]" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.ghmc.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#24212A] transition-colors flex items-center gap-1.5"
                >
                  <span>GHMC &amp; SNDP Project Portals</span>
                  <ExternalLink className="w-3 h-3 text-[#D72B75]" />
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/about"
                  className="text-xs text-[#D72B75] hover:text-[#A51D55] font-medium transition-colors underline decoration-[#F0E4EA]"
                >
                  Review Fact-Checking Standards
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#F0E4EA] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#77717B]">
          <p>
            &copy; 2025 BRS Leadership Platform &bull; Independent Prototype for Stakeholder Evaluation.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-[#24212A] transition-colors">
              Methodology
            </Link>
            <span>&bull;</span>
            <Link href="/leaders" className="hover:text-[#24212A] transition-colors">
              All Constituencies
            </Link>
            <span>&bull;</span>
            <span>No Personal Data Collected</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
