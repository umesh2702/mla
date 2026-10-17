import LeaderDirectory from "@/components/leaders/LeaderDirectory";

export const metadata = {
  title: "BRS Leadership Directory | Verified Constituency Representatives",
  description:
    "Explore verified profiles of Bharat Rashtra Samithi (BRS) legislative leaders, assembly election track records, and municipal oversight dossiers.",
};

export default function DirectoryPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Breadcrumb & Title */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 text-xs text-[#777B78]">
            <span>Platform</span>
            <span>&bull;</span>
            <span className="text-[#D72B75] font-semibold">Leadership Directory</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E8E2D7] tracking-tight">
            Telangana Legislative Leadership Directory
          </h1>
          <p className="text-sm sm:text-base text-[#9EA39F] leading-relaxed">
            Search and evaluate verified public profiles of BRS legislators, including 3-term Quthbullapur MLA K.P. Vivekanand, party working president K.T. Rama Rao, and senior floor leaders. All entries are grounded in official election returns and legislative records.
          </p>
        </div>

        {/* Directory Search & Grid Component */}
        <LeaderDirectory />
      </div>
    </div>
  );
}
