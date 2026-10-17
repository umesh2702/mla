export interface SourceCitation {
  id: string;
  title: string;
  publisher: string;
  url: string;
  publicationDate?: string;
  dateAccessed: string;
  verificationStatus:
    | "Verified"
    | "Official Record"
    | "Pending Review"
    | "Secondary Cross-Checked"
    | "Media Report";
  notes?: string;
}
