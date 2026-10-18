import LeaderDirectory from "@/components/leaders/LeaderDirectory";

export const metadata = {
  title: "BRS Leadership Directory | Verified Constituency Representatives",
  description:
    "Explore verified profiles of Bharat Rashtra Samithi (BRS) legislative leaders, assembly election track records, and municipal oversight dossiers.",
};

export default function DirectoryPage() {
  return (
    <div className="py-12 sm:py-16 bg-[#FFFCFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Breadcrumb & Title */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7F0] text-xs font-semibold text-[#A51D55]">
            <span>Platform</span>
            <span>&bull;</span>
            <span>Leadership Directory</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#24212A] tracking-tight">
            Telangana Legislative Leadership Directory
          </h1>
          <p className="text-sm sm:text-base text-[#77717B] leading-relaxed">
            Search and evaluate verified public profiles of BRS legislators, including 3-term Quthbullapur MLA K.P. Vivekanand, party working president K.T. Rama Rao, and senior floor leaders. All entries are grounded in official election returns and legislative records.
          </p>
        </div>

        {/* Directory Search & Grid Component */}
        <LeaderDirectory />
      </div>
    </div>
  );
}
