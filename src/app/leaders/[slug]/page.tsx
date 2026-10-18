import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LEADERS_DATA } from "@/data/leaders";
import ProfileHero from "@/components/leaders/ProfileHero";
import ProfileNav from "@/components/leaders/ProfileNav";
import BiographySection from "@/components/leaders/BiographySection";
import ElectoralTimeline from "@/components/leaders/ElectoralTimeline";
import ConstituencyOverview from "@/components/leaders/ConstituencyOverview";
import DevelopmentProjects from "@/components/leaders/DevelopmentProjects";
import PublicTimeline from "@/components/leaders/PublicTimeline";
import ContactSection from "@/components/leaders/ContactSection";
import SourcesSection from "@/components/leaders/SourcesSection";

// Flagship Showcase Components for K.P. Vivekanand
import DailyPrajaDarbarBanner from "@/components/leaders/DailyPrajaDarbarBanner";
import DecadeOfTransformation from "@/components/leaders/DecadeOfTransformation";
import InfrastructurePillars from "@/components/leaders/InfrastructurePillars";
import YouthSkillsCorridor from "@/components/leaders/YouthSkillsCorridor";
import EditorialQuoteSection from "@/components/leaders/EditorialQuoteSection";
import GroundOutreachSection from "@/components/leaders/GroundOutreachSection";
import PrajaDarbarGrievanceDesk from "@/components/leaders/PrajaDarbarGrievanceDesk";

export async function generateStaticParams() {
  return LEADERS_DATA.map((leader) => ({
    slug: leader.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const leader = LEADERS_DATA.find((l) => l.slug === slug);

  if (!leader) {
    return {
      title: "Profile Not Found | BRS Leadership Platform",
    };
  }

  return {
    title: `${leader.name} | ${leader.currentRole} | BRS Leadership Dossier`,
    description: leader.shortBio,
  };
}

export default async function LeaderProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const leader = LEADERS_DATA.find((l) => l.slug === slug);

  if (!leader) {
    notFound();
  }

  const isKp = leader.slug === "kp-vivekanand";

  return (
    <article className="min-h-screen bg-[#FFFCFD] text-[#24212A]">
      {/* Flagship Daily Praja Darbar Banner */}
      {isKp && <DailyPrajaDarbarBanner />}

      {/* Profile Hero with authentic portrait, key badges, and stats */}
      <ProfileHero leader={leader} />

      {/* Sticky section sub-navigation */}
      <ProfileNav
        hasProjects={Boolean(leader.projects && leader.projects.length > 0)}
        hasConstituency={Boolean(leader.constituencyInfo)}
        isFlagship={isKp}
      />

      {/* Flagship: Decade of Transformation (2014-2024) */}
      {isKp && <DecadeOfTransformation />}

      {/* Flagship: Major Infrastructure Pillars */}
      {isKp && <InfrastructurePillars />}

      {/* Flagship: Youth, Tech & Future Skills Corridor */}
      {isKp && <YouthSkillsCorridor />}

      {/* Flagship: High-Contrast Editorial Pull Quote & Safety Net */}
      {isKp && <EditorialQuoteSection />}

      {/* Biography & Public Career */}
      <BiographySection sections={leader.biography} />

      {/* Electoral Records */}
      <ElectoralTimeline elections={leader.elections} />

      {/* Constituency Information if available */}
      {leader.constituencyInfo && (
        <ConstituencyOverview info={leader.constituencyInfo} />
      )}

      {/* Development Projects if available (Flagship Quthbullapur) */}
      {leader.projects && leader.projects.length > 0 && (
        <DevelopmentProjects projects={leader.projects} />
      )}

      {/* Ground Outreach & Assembly Voice (Flagship) or General Public Timeline */}
      {isKp ? (
        <GroundOutreachSection />
      ) : (
        <PublicTimeline timeline={leader.timeline} />
      )}

      {/* Praja Darbar Grievance Desk (Flagship) or General Contact Section */}
      {isKp ? (
        <PrajaDarbarGrievanceDesk />
      ) : (
        <ContactSection contact={leader.contact} />
      )}

      {/* References and Sources */}
      <SourcesSection sources={leader.sources} />
    </article>
  );
}
