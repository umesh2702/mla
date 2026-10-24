/**
 * Core Data Models for Telangana Leadership Explorer
 * Strongly typed architecture for constituencies, districts, representatives, elections, projects, and sources.
 */

export interface SourceRecord {
  id: string;
  title: string;
  publisher: string;
  url: string;
  publishDate?: string;
  accessDate: string;
  sourceType: 'official_gazette' | 'eci_report' | 'assembly_record' | 'news_investigation' | 'government_order' | 'public_portal';
  verificationStatus: 'verified' | 'pending_verification' | 'official_record';
  archiveUrl?: string;
  notes?: string;
}

export interface PoliticalAffiliation {
  partyId: string;
  partyName: string;
  partyAbbr: 'BRS' | 'INC' | 'BJP' | 'AIMIM' | 'CPI' | 'TDP' | 'IND' | 'OTH';
  roleInParty?: string;
  startDate: string; // YYYY-MM or YYYY
  endDate?: string;   // undefined if currently active
  isCurrent: boolean;
  sourceId?: string;
}

export interface District {
  id: string;
  name: string;
  teluguName?: string;
  code?: string;
  headquarters?: string;
  totalConstituencies: number;
}

export interface Constituency {
  id: string; // stable slug or ac-XX
  acNo: number; // 1 to 119
  name: string;
  teluguName?: string;
  slug: string;
  districtId: string;
  districtName: string;
  parliamentaryConstituency?: string;
  reservationStatus: 'GEN' | 'SC' | 'ST';
  electorateCount?: number;
  currentMlaId?: string;
  currentMlaName: string;
  currentParty: string;
  currentPartyAbbr: 'BRS' | 'INC' | 'BJP' | 'AIMIM' | 'CPI' | 'OTH';
  isFlagship?: boolean;
  hasDetailedProfile?: boolean;
  profileSlug?: string | null;
  latestElectionResult?: ElectionResult;
}

export interface Candidate {
  id: string;
  personId: string;
  personName: string;
  teluguName?: string;
  party: string;
  partyAbbr: 'BRS' | 'INC' | 'BJP' | 'AIMIM' | 'CPI' | 'TDP' | 'IND' | 'OTH';
  constituencyId: string;
  constituencyName: string;
  electionYear: number;
  isIncumbent: boolean;
  votesPolled: number | string;
  voteSharePercentage: number | string;
  position: number; // 1 for winner, 2 for runner-up, etc.
  status: 'elected_mla' | 'runner_up' | 'contested';
  affidavitUrl?: string;
  criminalCasesCount?: number;
  declaredAssets?: string;
}

export interface ElectionResult {
  id: string;
  constituencyId: string;
  constituencyName: string;
  electionYear: number;
  totalVoters?: number;
  validVotesPolled?: number | string;
  turnoutPercentage?: number | string;
  winner: Candidate;
  runnerUp: Candidate;
  victoryMarginVotes: number | string;
  victoryMarginPercentage?: number | string;
  officialDeclarationDate?: string;
  sourceRecordId?: string;
}

export interface Election {
  id: string;
  name: string;
  year: number;
  type: 'general_assembly' | 'bye_election';
  gazetteNotificationDate?: string;
  pollingDate: string;
  countingDate: string;
  totalSeats: number;
  governingPartyFormed: string;
  chiefMinisterSwornIn: string;
}

export interface ElectedRepresentative {
  id: string;
  personId: string;
  personName: string;
  constituencyId: string;
  constituencyName: string;
  assemblyTerm: string; // e.g. "3rd Assembly (2023-Present)", "2nd Assembly (2018-2023)"
  tookOfficeDate: string;
  standingCommittees?: string[];
  legislativeDesignation?: string; // e.g. "MLA", "Cabinet Minister", "Speaker", "Leader of Opposition"
  isCurrent: boolean;
}

export interface PublicProject {
  id: string;
  name: string;
  category: 'transport' | 'drainage' | 'water' | 'healthcare' | 'education' | 'sports' | 'civic';
  location: string;
  constituency: string;
  description: string;
  announcedDate: string;
  completionDate?: string;
  status: 'Completed' | 'Under Construction' | 'Sanctioned' | 'Proposed';
  responsibleAgency: string; // e.g. GHMC, HMDA, HMWSSB, R&B, TSRTC
  fundingAmount?: string; // e.g. "₹45.0 Cr"
  beneficiaryCount?: string;
  sourceUrl?: string;
  lastVerifiedDate: string;
}

export interface LegislativeRecord {
  id: string;
  personId: string;
  date: string;
  session: string;
  subject: string;
  recordType: 'starred_question' | 'unstarred_question' | 'zero_hour_mention' | 'bill_debate' | 'calling_attention';
  summary: string;
  verbatimSnippet?: string;
  officialTranscriptUrl?: string;
}

export interface PublicEngagement {
  id: string;
  personId: string;
  date: string;
  title: string;
  type: 'praja_darbar' | 'townhall' | 'inspection' | 'public_meeting' | 'press_conference';
  location: string;
  summary: string;
  sourceUrl?: string;
}

export interface Person {
  id: string;
  slug: string;
  fullName: string;
  teluguName?: string;
  portraitUrl: string;
  portraitAlt: string;
  portraitFallbackInitials: string;
  currentOffice: string;
  isCurrentMla: boolean;
  constituency: string;
  district: string;
  dateOfBirth?: string;
  education: string;
  affiliations: PoliticalAffiliation[];
  shortBio: string;
  fullBioParagraphs: { title: string; content: string[] }[];
  keyStats: { label: string; value: string; sublabel: string }[];
  electoralHistory: ElectionResult[];
  projects?: PublicProject[];
  legislativeRecords?: LegislativeRecord[];
  engagements?: PublicEngagement[];
  officeContact: {
    address: string;
    officeTimings?: string;
    helplinePhone?: string;
    officialEmail?: string;
    publicGrievancePortal?: string;
    socialHandles?: {
      x?: string;
      facebook?: string;
      instagram?: string;
    };
  };
  sources: SourceRecord[];
}

export interface MapPathData {
  id: number;
  acNo: number;
  acName: string;
  district: string;
  mla: string;
  party: string;
  partyAbbr: 'BRS' | 'INC' | 'BJP' | 'AIMIM' | 'CPI' | 'OTH';
  votes: string;
  voteShare: string;
  runnerUp: {
    name: string;
    party: string;
    partyAbbr: 'BRS' | 'INC' | 'BJP' | 'AIMIM' | 'CPI' | 'OTH';
    votes: string;
    voteShare: string;
  } | null;
  margin: string;
  isFlagship: boolean;
  profileSlug: string | null;
  svgPath: string;
  centroid: [number, number];
  bounds: [[number, number], [number, number]];
}

export interface DirectoryFilters {
  searchQuery: string;
  district: string;
  constituency: string;
  party: string;
  status: 'all' | 'current_mla' | 'candidate';
  electionYear: string;
  sortBy: 'name_asc' | 'name_desc' | 'ac_no_asc' | 'margin_desc';
}
