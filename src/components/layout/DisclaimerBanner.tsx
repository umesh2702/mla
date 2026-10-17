import Link from "next/link";
import { Info } from "lucide-react";

export default function DisclaimerBanner() {
  return (
    <div className="bg-[#191B20] border-b border-[#2D313A]/80 text-[#9EA39F] text-xs py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <Info className="w-3.5 h-3.5 text-[#D72B75] shrink-0" aria-hidden="true" />
          <span>
            <strong className="text-[#E8E2D7] font-medium">Independent Research Prototype:</strong> This platform is an
            independent academic and civic public-information demonstration. It is not an officially commissioned, endorsed, or affiliated website of the Bharat Rashtra Samithi (BRS).
          </span>
        </div>
        <Link
          href="/about"
          className="underline decoration-[#777B78] hover:decoration-[#D72B75] hover:text-[#E8E2D7] transition-colors whitespace-nowrap text-[11px]"
        >
          Methodology & Sources &rarr;
        </Link>
      </div>
    </div>
  );
}
