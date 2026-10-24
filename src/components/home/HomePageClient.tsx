"use client";

import { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import ConstituencyMapSection from "@/components/home/ConstituencyMapSection";
import ConstituencyCardsSection from "@/components/home/ConstituencyCardsSection";
import VoterGuideSection from "@/components/home/VoterGuideSection";
import BrsLeadershipSection from "@/components/home/BrsLeadershipSection";
import CandidateAnnouncementsSection from "@/components/home/CandidateAnnouncementsSection";

export default function HomePageClient() {
  const [selectedConstituencyId, setSelectedConstituencyId] = useState<string>("mrh");

  const handleHeroSearchSelect = (id: string) => {
    setSelectedConstituencyId(id);
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      {/* Section B: Hero with Civic Facts and Interactive Search */}
      <HeroSection onSearchSelect={handleHeroSearchSelect} />

      {/* Section C: Graduate MLC Constituency Map (Primary Interactive Feature) */}
      <ConstituencyMapSection
        selectedId={selectedConstituencyId}
        onSelect={(id) => setSelectedConstituencyId(id)}
      />

      {/* Section D: Election Overview Cards (Distinguishing Incumbent & Nominee) */}
      <ConstituencyCardsSection />

      {/* Section E: Voter Guide & Form-18 Pipeline */}
      <VoterGuideSection />

      {/* Section F: BRS Party Background & Apex Leadership */}
      <BrsLeadershipSection />

      {/* Section G: Candidate Announcements & Reusable Card Component */}
      <CandidateAnnouncementsSection />
    </div>
  );
}
