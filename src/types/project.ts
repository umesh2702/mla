export type ProjectStatus =
  | "completed"
  | "in-progress"
  | "approved"
  | "proposed"
  | "delayed"
  | "status-unclear";

export type ProjectCategory =
  | "Roads & Flyovers"
  | "Stormwater & Drainage"
  | "Healthcare & Wellness"
  | "Housing & Urban Welfare"
  | "Lakes & Environment"
  | "Civic Infrastructure";

export interface DevelopmentProject {
  id: string;
  name: string;
  locality: string;
  category: ProjectCategory;
  responsibleAuthority: string; // e.g. "GHMC / HMDA / SNDP / HMWSSB"
  mlaRoleDescription: string; // explicitly states MLA role (e.g., "Advocated in Assembly / Inspected site / Facilitated land clearance / Government scheme implemented in constituency")
  description: string;
  status: ProjectStatus;
  statusDetail?: string;
  announcedDate?: string;
  completionDate?: string;
  sanctionedCost?: string; // e.g. "₹65.00 Crore"
  expenditure?: string;
  sources: {
    title: string;
    publisher: string;
    url: string;
  }[];
  verificationMetadata: {
    verifiedBy: string;
    verifiedDate: string;
    status: "Verified Record" | "Official Press Release" | "News Monitored" | "Awaiting Verification";
  };
}
