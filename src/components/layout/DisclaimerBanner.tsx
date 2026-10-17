import Link from "next/link";
import { Info } from "lucide-react";

export default function DisclaimerBanner() {
  return (
    <aside
      aria-label="Independent research prototype disclosure"
      className="bg-[#FFF8F8] border-b border-[#F0E4EA] text-[#77717B] text-xs py-2 px-4 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <Info className="w-3.5 h-3.5 text-[#D72B75] shrink-0" aria-hidden="true" />
          <span className="text-[12px] leading-snug">
            <strong className="text-[#24212A] font-semibold">Independent Research Prototype:</strong> This platform is an
            independent civic and legislative portfolio prototype. It is not an officially commissioned, endorsed, or affiliated website of the Bharat Rashtra Samithi (BRS).
          </span>
        </div>
        <Link
          href="/about"
          className="underline decoration-[#D72B75]/40 hover:decoration-[#D72B75] text-[#D72B75] hover:text-[#A51D55] font-medium transition-colors whitespace-nowrap text-[11px]"
        >
          Methodology &amp; Verification &rarr;
        </Link>
      </div>
    </aside>
  );
}
