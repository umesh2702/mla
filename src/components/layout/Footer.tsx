import Link from "next/link";
import { ArrowUpRight, Scale, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#262930] bg-[#0C0D0F] text-[#9EA39F] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#191B20] border border-[#2D313A] flex items-center justify-center">
                <span className="font-display font-extrabold text-base text-[#D72B75]">
                  BRS
                </span>
              </div>
              <span className="font-display font-bold text-lg text-[#E8E2D7] tracking-tight">
                BRS Leadership Platform
              </span>
            </div>
            <p className="text-xs text-[#777B78] leading-relaxed max-w-lg">
              An independent, source-grounded civic intelligence prototype providing verified public information, election audit records, legislative histories, and infrastructure monitoring across key constituencies in Telangana.
            </p>
            <div className="p-3 rounded-xl bg-[#16181C] border border-[#262930] text-xs text-[#9EA39F] space-y-1">
              <div className="flex items-center gap-2 text-[#E8E2D7] font-semibold">
                <Scale className="w-3.5 h-3.5 text-[#D72B75]" />
                <span>Statutory Independence Disclosure</span>
              </div>
              <p className="text-[11px] text-[#777B78] leading-relaxed">
                This platform is an independent demonstration created for institutional research. It is neither commissioned, authorised, nor endorsed by the Bharat Rashtra Samithi (BRS) party organisation. All political biographies, election records, and municipal projects are curated exclusively from public records.
              </p>
            </div>
          </div>

          {/* Directory Navigation */}
          <div>
            <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-[#E8E2D7] mb-4">
              Leadership Profiles
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/leaders/kp-vivekanand"
                  className="hover:text-[#D72B75] transition-colors flex items-center justify-between"
                >
                  <span>K.P. Vivekanand (Quthbullapur)</span>
                  <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-[#D72B75]/20 text-[#D72B75]">
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
              <li className="pt-2 border-t border-[#262930]">
                <Link
                  href="/leaders"
                  className="text-[#D72B75] hover:text-[#E34389] font-medium flex items-center gap-1"
                >
                  <span>Explore Full Directory</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Verification & Data Sources */}
          <div>
            <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-[#E8E2D7] mb-4">
              Data Sources
            </h4>
            <ul className="space-y-2 text-xs text-[#777B78]">
              <li>
                <a
                  href="https://results.eci.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E8E2D7] transition-colors flex items-center gap-1.5"
                >
                  <span>Election Commission of India (ECI)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://myneta.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E8E2D7] transition-colors flex items-center gap-1.5"
                >
                  <span>ADR / MyNeta Affidavits</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.telangana.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E8E2D7] transition-colors flex items-center gap-1.5"
                >
                  <span>Telangana Legislative Assembly</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.ghmc.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E8E2D7] transition-colors flex items-center gap-1.5"
                >
                  <span>GHMC & SNDP Project Portals</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/about"
                  className="text-xs text-[#9EA39F] hover:text-[#D72B75] transition-colors underline decoration-[#2D313A]"
                >
                  Review Fact-Checking Standards
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#262930] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777B78]">
          <p>
            &copy; 2025 BRS Leadership Platform &bull; Independent Prototype for Stakeholder Evaluation.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-[#E8E2D7] transition-colors">
              Methodology
            </Link>
            <span>&bull;</span>
            <Link href="/leaders" className="hover:text-[#E8E2D7] transition-colors">
              All Constituencies
            </Link>
            <span>&bull;</span>
            <span className="text-[#9EA39F]">No Personal Data Collected</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
