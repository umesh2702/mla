import Link from "next/link";
import { Scale, ExternalLink, CheckCircle2, MapPin } from "lucide-react";

export const metadata = {
  title: "Methodology, Delimitation & Statutory Sources | BRS Graduate MLC Explorer 2027",
  description:
    "Review our research standards, Graduate MLC delimitation provenance, Form-18 statutory framework, and independent public disclosures.",
};

export default function AboutPage() {
  const sourcesList = [
    {
      id: "ceo-ts",
      title: "Chief Electoral Officer (CEO), Telangana Official Portal",
      publisher: "Government of Telangana & ECI",
      url: "https://ceotelangana.nic.in",
      dateAccessed: "March 2025",
      type: "Official Statutory Portal",
      note: "Primary gazette source for Form-18 notifications, polling dates, and draft/final electoral rolls.",
    },
    {
      id: "eci-gov",
      title: "Election Commission of India (ECI) — Council Elections Directory",
      publisher: "Election Commission of India, Nirvachan Sadan",
      url: "https://eci.gov.in",
      dateAccessed: "March 2025",
      type: "Constitutional Authority",
      note: "Governing authority for statutory conduct of Council elections under Article 171 and R.P. Act 1950/1951.",
    },
    {
      id: "ts-council",
      title: "Telangana Legislative Council Members Directory",
      publisher: "Telangana Legislature Secretariat",
      url: "https://telanganalegislature.org.in",
      dateAccessed: "March 2025",
      type: "Official Legislative Directory",
      note: "Authoritative directory verifying incumbent MLC tenure expirations, constituencies, and party affiliations.",
    },
    {
      id: "rp-act-1950",
      title: "Representation of the People Act, 1950 (Section 27: Preparation of electoral rolls for Council constituencies)",
      publisher: "Ministry of Law and Justice, Government of India",
      url: "https://legislative.gov.in/sites/default/files/A1950-43.pdf",
      dateAccessed: "March 2025",
      type: "Statutory Act of Parliament",
      note: "Statutory basis establishing the 3-year university degree qualification for Graduate MLC elections.",
    },
  ];

  return (
    <div className="py-12 sm:py-16 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF4FF] text-xs font-semibold text-[#E6007E] border border-[#E2E8F0]">
            <Link href="/" className="hover:underline">Home</Link>
            <span>&bull;</span>
            <span>Statutory Methodology &amp; Sources</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1C30] tracking-tight">
            Research Integrity, Delimitation &amp; Disclosures
          </h1>
          <p className="text-sm sm:text-base text-[#565E74] leading-relaxed">
            BRS Graduate MLC Explorer 2027 is an independent digital civic intelligence prototype. We adhere to rigorous verification standards to ensure that all constituency delimitation scopes, incumbent tenures, Form-18 pipelines, and party candidate status reflect official statutory gazettes.
          </p>
        </div>

        {/* Independent Prototype Notice */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-l-4 border-l-[#E6007E] border-y border-r border-[#E2E8F0] space-y-3 shadow-xs">
          <div className="flex items-center gap-2 text-sm font-bold text-[#0B1C30]">
            <Scale className="w-4 h-4 text-[#E6007E]" />
            <span>Independent Public-Information Prototype Disclosure</span>
          </div>
          <p className="text-xs sm:text-sm text-[#565E74] leading-relaxed">
            This digital platform is an independent civic research and UI/UX exploration project. It is <strong>neither an official government portal nor commissioned by the Election Commission of India</strong>. While the focus of this explorer is on Bharat Rashtra Samithi (BRS) party perspectives and leadership, all election facts, incumbent details, and statutory voter rules are verified strictly against official ECI and CEO Telangana documentation.
          </p>
        </div>

        {/* Delimitation Provenance Section */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#EFF4FF] border border-[#E2E8F0] space-y-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#E6007E]" />
            <h2 className="font-display text-lg font-bold text-[#0B1C30]">
              Graduate MLC Regional Delimitation &amp; Cycle Structure
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#565E74] leading-relaxed">
            Under the Delimitation of Council Constituencies Order and Section 27 of the Representation of the People Act, 1950, Telangana is organized into three major Graduate Legislative Council constituencies:
          </p>
          <ul className="text-xs text-[#565E74] space-y-2 list-disc pl-5">
            <li>
              <strong>Mahabubnagar–Rangareddy–Hyderabad (G-01):</strong> Current 2027 cycle seat. Sitting MLC: Surabhi Vani Devi (BRS), elected March 2021, statutory term ends 29 March 2027.
            </li>
            <li>
              <strong>Warangal–Khammam–Nalgonda (G-02):</strong> Current 2027 cycle seat. Sitting MLC: Teenmar Mallanna (INC), elected in June 2024 bye-election, statutory term ends 29 March 2027.
            </li>
            <li>
              <strong>Adilabad–Nizamabad–Medak–Karimnagar (G-03):</strong> Outside the 2027 cycle. Sitting MLC: Dr. K. Anji Reddy (BJP), elected March 2023 for a 6-year term concluding in March 2029.
            </li>
          </ul>
        </div>

        {/* Core Verification Standards */}
        <div className="space-y-6">
          <h2 className="font-display text-2xl font-bold text-[#0B1C30]">
            Core Verification Standards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[#E2E8F0] space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-sm font-bold text-[#0B1C30]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>1. Separation of Incumbent and Nominee</span>
              </div>
              <p className="text-xs text-[#565E74] leading-relaxed">
                Incumbent office holders and prospective party nominees are treated as completely distinct entities. We never assume or infer that a sitting MLC is the declared nominee for the upcoming 2027 cycle.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E2E8F0] space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-sm font-bold text-[#0B1C30]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>2. Zero Fabrication of Metrics</span>
              </div>
              <p className="text-xs text-[#565E74] leading-relaxed">
                We do not invent turnout forecasts, degree validation scores, opinion polls, or false dates. Every time-sensitive claim is dated and tied to primary gazettes.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E2E8F0] space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-sm font-bold text-[#0B1C30]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>3. Form-18 Statutory Rigor</span>
              </div>
              <p className="text-xs text-[#565E74] leading-relaxed">
                Information regarding voter registration adheres strictly to ECI Rule 31 and CEO Telangana guidelines, emphasizing that previous electoral lists do not roll over.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E2E8F0] space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-sm font-bold text-[#0B1C30]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>4. Verified Party Leadership Notice</span>
              </div>
              <p className="text-xs text-[#565E74] leading-relaxed">
                Party leadership (e.g. KCR, KTR, Harish Rao) are explicitly identified as statewide party officers and state assembly representatives, not Graduate MLC candidates.
              </p>
            </div>
          </div>
        </div>

        {/* Master Catalog of Sources */}
        <div className="space-y-6 pt-6 border-t border-[#E2E8F0]">
          <div>
            <h2 className="font-display text-2xl font-bold text-[#0B1C30]">
              Statutory Citation Directory
            </h2>
            <p className="text-xs text-[#565E74] mt-1 font-medium">
              Authoritative statutory registries and gazette portals cited across this explorer.
            </p>
          </div>

          <div className="space-y-3.5">
            {sourcesList.map((src) => (
              <div
                key={src.id}
                className="p-5 rounded-2xl bg-white border border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-xs hover:shadow-md transition-all"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-[#EFF4FF] text-[#E6007E] border border-[#CBD5E1]">
                      {src.type}
                    </span>
                    <span className="font-bold text-[#0B1C30]">{src.title}</span>
                  </div>
                  <div className="text-[11px] text-[#565E74]">
                    Publisher: <strong className="text-[#0B1C30]">{src.publisher}</strong> &bull; Verified: {src.dateAccessed}
                  </div>
                  <p className="text-[11px] text-[#64748B]">{src.note}</p>
                </div>

                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-[#E6007E] hover:text-[#D72B75] shrink-0"
                >
                  <span>Verify at Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Back Link */}
        <div className="pt-6 border-t border-[#E2E8F0] flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#E6007E] hover:underline"
          >
            <span>&larr; Return to Graduate MLC Explorer</span>
          </Link>
          <Link
            href="/candidates/mahabubnagar-rangareddy-hyderabad"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0B1C30] hover:text-[#E6007E]"
          >
            <span>View Candidate Profile Template &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
