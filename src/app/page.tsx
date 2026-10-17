import HeroSection from "@/components/home/HeroSection";
import FeaturedLeaderCard from "@/components/home/FeaturedLeaderCard";
import DirectoryPreview from "@/components/home/DirectoryPreview";
import PublicInfoSection from "@/components/home/PublicInfoSection";
import SourceTransparencySection from "@/components/home/SourceTransparencySection";

export const metadata = {
  title: "BRS Leadership Platform | Verified Civic Directory & Flagship Quthbullapur Dossier",
  description:
    "An independent, source-grounded leadership directory profiling Bharat Rashtra Samithi (BRS) legislators, featuring an exhaustive civic dossier on Quthbullapur MLA K.P. Vivekanand.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedLeaderCard />
      <DirectoryPreview />
      <PublicInfoSection />
      <SourceTransparencySection />
    </div>
  );
}
