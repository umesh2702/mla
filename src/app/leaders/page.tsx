import LeaderDirectory from "@/components/leaders/LeaderDirectory";

export const metadata = {
  title: "Leadership Directory | Telangana Assembly Representatives & Candidates",
  description:
    "Comprehensive public directory of Telangana Assembly representatives, historical candidates, and verified civic dossiers across all 119 Assembly constituencies.",
};

export default function DirectoryPage() {
  return (
    <div className="py-10 sm:py-16 bg-[#FFFCFE] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Breadcrumb & Title */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF1F7] text-xs font-semibold text-[#D72B75] border border-[#F7DCE9]">
            <span>Telangana Leadership Explorer</span>
            <span>&bull;</span>
            <span>Public Directory</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#28212A] tracking-tight">
            Telangana Legislative Leadership Directory
          </h1>
          <p className="text-sm sm:text-base text-[#756D78] leading-relaxed">
            Browse and search all 119 elected Members of the Legislative Assembly (MLAs) and historical election candidates across Telangana districts. Features verified electoral data from Election Commission statistical reports and comprehensive civic dossiers.
          </p>
        </div>

        {/* Directory Search & Grid Component */}
        <LeaderDirectory />
      </div>
    </div>
  );
}
