import { ElectionRecord } from "./election";
import { DevelopmentProject } from "./project";
import { PublicRecord } from "./public-record";
import { SourceCitation } from "./source";

export interface ConstituencyInfo {
  name: string;
  number?: number;
  district: string;
  region: string;
  totalVotersApprox?: string;
  majorLocalities: string[];
  administrativeBodies: string[]; // e.g., ["GHMC (Kukatpally Zone)", "Medchal-Malkajgiri Collectorate"]
  overview: string;
  administrativeDisclaimer: string; // e.g. "Note: Assembly constituency boundaries do not exactly coincide with GHMC municipal ward boundaries."
}

export interface BiographySection {
  title: string;
  content: string[];
}

export interface ContactInfo {
  officeAddress?: string;
  constituencyOffice?: string;
  verifiedSocialHandles?: {
    platform: "Twitter / X" | "Facebook" | "Instagram" | "YouTube" | "Official Website";
    handle: string;
    url: string;
  }[];
  officialEmailNotice?: string;
}

export interface LeaderProfile {
  slug: string;
  name: string;
  teluguName?: string;
  currentRole: string;
  party: "Bharat Rashtra Samithi (BRS)" | string;
  partyRole?: string;
  constituency?: string;
  district?: string;
  isFlagship?: boolean;
  termsInOffice: string;
  born?: string;
  education: string;
  image: string;
  imageAlt: string;
  portraitFallbackInitials: string;
  shortBio: string;
  quote?: string;
  keyStats: {
    label: string;
    value: string;
    sublabel?: string;
  }[];
  biography: BiographySection[];
  constituencyInfo?: ConstituencyInfo;
  elections: ElectionRecord[];
  projects?: DevelopmentProject[];
  timeline: PublicRecord[];
  contact: ContactInfo;
  sources: SourceCitation[];
}
