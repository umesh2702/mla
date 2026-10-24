import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CANDIDATE_PROFILES_DATA } from "@/data/graduate-mlc";
import CandidateProfileTemplate from "@/components/candidates/CandidateProfileTemplate";

export async function generateStaticParams() {
  return Object.keys(CANDIDATE_PROFILES_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const profile = CANDIDATE_PROFILES_DATA[slug];

  if (!profile) {
    return {
      title: "Profile Not Found | BRS Graduate MLC Explorer 2027",
    };
  }

  return {
    title: `${profile.constituencyName} Candidate Profile (Template) | BRS Graduate MLC 2027`,
    description: `Official candidate profile template and verified electoral records for ${profile.constituencyName} Graduate MLC Constituency. Current Incumbent: ${profile.currentIncumbentName} (${profile.currentIncumbentParty}).`,
  };
}

export default async function CandidateProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const profile = CANDIDATE_PROFILES_DATA[slug];

  if (!profile) {
    notFound();
  }

  return <CandidateProfileTemplate profile={profile} />;
}
