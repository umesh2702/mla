/**
 * Core Data Models for BRS Graduate MLC Explorer 2027
 * Strictly separated factual data layer for Graduate MLC constituencies, incumbents,
 * candidate nominees, voter registration schedules, and party leadership.
 */

export type MlcCycleStatus = 'current_2027_cycle' | 'future_cycle' | 'outside_cycle';

export type NominationStatus = 
  | 'pending_announcement' 
  | 'under_screening' 
  | 'officially_confirmed' 
  | 'non_active_cycle';

export interface MlcConstituency {
  id: string;
  code: string; // e.g. G-01
  name: string;
  slug: string;
  teluguName?: string;
  cycleStatus: MlcCycleStatus;
  cycleLabel: string;
  isActive2027: boolean;
  termDuration: string; // e.g. "2021–2027" or "2023–2029"
  statutoryTermEnd: string; // e.g. "29 March 2027"
  statutorySource: string;
  
  // Current Incumbent (strictly distinct from next election nominee)
  currentIncumbent: {
    name: string;
    party: 'BRS' | 'INC' | 'BJP';
    partyFullName: string;
    electedYear: number;
    electedType: 'biennial_election' | 'bye_election';
    roleTitle: string;
    shortBio: string;
    portraitUrl?: string;
  };

  // Next election nomination status (treated strictly as pending unless verified)
  nominationStatus: NominationStatus;
  nominationStatusLabel: string;
  nominationDetails: string;
  officialAnnouncementDate?: string;
  announcedCandidateSlug?: string;

  // Geographic / Delimitation Scope
  districtsCount: number;
  districts: string[];
  keyHubs: string[];
  summary: string;

  // Historical ECI Metrics (verified historical figures, clearly labelled)
  historicalMetrics?: {
    lastElectionYear: number;
    electorateBase?: string;
    pollingStationsCount?: number;
    turnoutNote?: string;
    source: string;
  };
}

export interface MlcCandidateProfile {
  slug: string;
  constituencyId: string;
  constituencyName: string;
  constituencyCode: string;
  isConfirmed: boolean;
  nominationStatus: NominationStatus;
  nominationStatusLabel: string;
  nominationNotice: string;

  // Candidate identity (can be placeholder when pending)
  candidateName: string;
  candidateTitle: string;
  party: 'BRS';
  partyFullName: string;
  portraitUrl?: string;
  portraitAlt?: string;
  isPlaceholderPortrait: boolean;

  // Incumbent reference
  currentIncumbentName: string;
  currentIncumbentParty: string;
  currentTermEnd: string;

  // Overview
  electorateSummary: string;
  vettingStage: string;
  estimatedElectorate: string;

  // Academic & Alma Mater
  academicCredentials: {
    level: string;
    degree: string;
    badge: string;
    description: string;
    benchmark: string;
    sourceNote: string;
  }[];

  // Professional Governance
  governanceNarrative: string;
  governancePillars: {
    icon: string;
    title: string;
    description: string;
  }[];

  // District Coverage
  districtList: {
    district: string;
    zoneDescription: string;
  }[];

  // Timeline
  timelineEvents: {
    date: string;
    title: string;
    badge: string;
    badgeType: 'official' | 'house_record' | 'mandate' | 'upcoming';
    description: string;
  }[];

  // 4 Policy Pillars
  policyPillars: {
    number: string;
    category: string;
    title: string;
    description: string;
    metricLabel: string;
    metricValue: string;
    icon: string;
  }[];

  // Public Statements & Media
  mediaArticles: {
    outlet: string;
    date: string;
    tag: string;
    title: string;
    excerpt: string;
    imageUrl?: string;
    imageAlt?: string;
    actionLabel: string;
    url: string;
  }[];

  // Statutory Documents
  statutoryDocuments: {
    title: string;
    formNumber: string;
    description: string;
    fileSize: string;
    downloadUrl: string;
    icon: string;
  }[];

  // Source Register
  verificationRegister: {
    auditedSource: string;
    legislativeBody: string;
    lastUpdated: string;
    dataStatus: string;
    discrepancyActionLabel: string;
  };
}

export interface BrsLeader {
  id: string;
  name: string;
  partyRole: string;
  publicOffice: string;
  headquartersOrSeat: string;
  bio: string;
  imageUrl: string;
  imageAlt: string;
  officialNote: string;
}

export interface VoterGuideMilestone {
  stepNumber: string;
  label: string;
  status: 'completed' | 'urgent_deadline' | 'upcoming' | 'pending';
  dateDisplay: string;
  title: string;
  description: string;
  isDeadline?: boolean;
}
