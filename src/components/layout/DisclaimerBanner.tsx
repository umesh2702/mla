import Link from "next/link";

export default function DisclaimerBanner() {
  return (
    <aside
      aria-label="Independent public-information disclosure"
      className="bg-[#EFF4FF] border-b border-[#E2E8F0] text-[#565E74] text-xs py-2 px-4 transition-colors"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="material-symbols-outlined text-[#E6007E] text-[16px] shrink-0">
            info
          </span>
          <span className="text-[11px] sm:text-[12px] leading-snug">
            <strong className="text-[#0B1C30] font-semibold uppercase tracking-wider text-[11px]">
              Independent Civic Research Prototype:
            </strong>{" "}
            Not an official political party or government portal. Sourced strictly from CEO Telangana &amp; Election Commission of India official records.
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://ceotelangana.nic.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold text-[#006397] hover:text-[#0B1C30] transition-colors inline-flex items-center gap-1"
          >
            <span>CEO Telangana Official Portal</span>
            <span className="material-symbols-outlined text-[12px]">north_east</span>
          </a>
          <span className="text-[#CBD5E1] hidden sm:inline">|</span>
          <Link
            href="/about"
            className="text-[11px] font-semibold text-[#E6007E] hover:text-[#B90064] transition-colors"
          >
            Statutory Sources &rarr;
          </Link>
        </div>
      </div>
    </aside>
  );
}
