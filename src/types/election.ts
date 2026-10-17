export interface ElectionRecord {
  year: number;
  electionType: "Telangana Assembly" | "Andhra Pradesh Assembly" | "Lok Sabha" | "Assembly Bypoll";
  constituency: string;
  party: string;
  result: "Won" | "Lost";
  votesReceived: number;
  voteSharePercent: number;
  totalElectors?: number;
  totalValidVotes?: number;
  runnerUpName: string;
  runnerUpParty: string;
  runnerUpVotes: number;
  runnerUpVoteSharePercent?: number;
  victoryMargin: number;
  marginPercent?: number;
  sourceTitle: string;
  sourceUrl: string;
}
