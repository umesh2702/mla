export type PublicRecordType =
  | "Official Record"
  | "Media Report"
  | "Attributed Statement"
  | "Unverified Information";

export interface PublicRecord {
  id: string;
  date: string;
  year: number;
  category: "Legislative" | "Civic Oversight" | "Public Welfare" | "Constituency Grievance" | "Party Activity";
  title: string;
  summary: string;
  recordType: PublicRecordType;
  sourceTitle: string;
  sourcePublisher: string;
  sourceUrl: string;
}
