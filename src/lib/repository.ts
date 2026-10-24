import { LEADERS_DATA } from "@/data/leaders";
import { LeaderProfile } from "@/types/leader";
import mapPathsData from "@/data/map-paths.json";
import constituenciesData from "../../public/data/constituencies_119.json";
import { MapPathData, DirectoryFilters } from "@/types/models";

export interface ConstituencyRecord {
  acNo: number;
  constituencyName: string;
  slug: string;
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
  electionYear: number;
  isFlagship: boolean;
  hasDetailedProfile: boolean;
  profileSlug: string | null;
}

export interface CandidateRecord {
  id: string;
  name: string;
  party: string;
  partyAbbr: string;
  constituency: string;
  acNo: number;
  district: string;
  electionYear: number;
  status: 'elected_mla' | 'runner_up' | 'contested';
  votes: string;
  voteShare: string;
  margin?: string;
  isCurrentMla: boolean;
  profileSlug?: string | null;
}

const typedConstituencies: ConstituencyRecord[] = constituenciesData as unknown as ConstituencyRecord[];
const typedMapPaths: MapPathData[] = mapPathsData as unknown as MapPathData[];

/**
 * Repository layer for Telangana Leadership Explorer
 */
export const LeadershipRepository = {
  /**
   * Get all 119 Assembly Constituencies
   */
  getAllConstituencies(): ConstituencyRecord[] {
    return typedConstituencies;
  },

  /**
   * Get constituency by Assembly Constituency number (1 to 119)
   */
  getConstituencyByAcNo(acNo: number): ConstituencyRecord | undefined {
    return typedConstituencies.find((c) => c.acNo === acNo);
  },

  /**
   * Get constituency by slug
   */
  getConstituencyBySlug(slug: string): ConstituencyRecord | undefined {
    return typedConstituencies.find(
      (c) => c.slug === slug || c.constituencyName.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug
    );
  },

  /**
   * Get all pre-projected SVG map path data for 119 constituencies
   */
  getMapPaths(): MapPathData[] {
    return typedMapPaths;
  },

  /**
   * Get unique list of districts with constituency counts
   */
  getAllDistricts(): { name: string; count: number }[] {
    const counts = new Map<string, number>();
    for (const c of typedConstituencies) {
      counts.set(c.district, (counts.get(c.district) || 0) + 1);
    }
    return Array.from(counts.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  /**
   * Get list of unique political parties in the 3rd Assembly
   */
  getAllParties(): { name: string; abbr: string; seatsWon: number }[] {
    const partyMap = new Map<string, { name: string; abbr: string; seatsWon: number }>();
    for (const c of typedConstituencies) {
      const existing = partyMap.get(c.party) || { name: c.party, abbr: c.partyAbbr, seatsWon: 0 };
      existing.seatsWon++;
      partyMap.set(c.party, existing);
    }
    return Array.from(partyMap.values()).sort((a, b) => b.seatsWon - a.seatsWon);
  },

  /**
   * Get featured leaders with verified portfolios
   */
  getFeaturedLeaders(): LeaderProfile[] {
    return LEADERS_DATA;
  },

  /**
   * Get single leader profile by slug
   */
  getLeaderBySlug(slug: string): LeaderProfile | undefined {
    return LEADERS_DATA.find((l) => l.slug === slug);
  },

  /**
   * Get all historical candidates across 2023, 2018, 2014
   */
  getAllCandidates(): CandidateRecord[] {
    const candidates: CandidateRecord[] = [];

    // Add 2023 winners (elected MLAs)
    for (const c of typedConstituencies) {
      candidates.push({
        id: `2023-${c.acNo}-winner`,
        name: c.mla,
        party: c.party,
        partyAbbr: c.partyAbbr,
        constituency: c.constituencyName,
        acNo: c.acNo,
        district: c.district,
        electionYear: 2023,
        status: 'elected_mla',
        votes: c.votes,
        voteShare: c.voteShare,
        margin: c.margin,
        isCurrentMla: true,
        profileSlug: c.profileSlug,
      });

      // Add 2023 runner-ups
      if (c.runnerUp && c.runnerUp.name) {
        candidates.push({
          id: `2023-${c.acNo}-runnerup`,
          name: c.runnerUp.name,
          party: c.runnerUp.party,
          partyAbbr: c.runnerUp.partyAbbr,
          constituency: c.constituencyName,
          acNo: c.acNo,
          district: c.district,
          electionYear: 2023,
          status: 'runner_up',
          votes: c.runnerUp.votes,
          voteShare: c.runnerUp.voteShare,
          margin: `-${c.margin}`,
          isCurrentMla: false,
          profileSlug: null,
        });
      }
    }

    // Add historical candidates from featured leaders' earlier elections (2018, 2014)
    for (const leader of LEADERS_DATA) {
      for (const el of leader.elections) {
        if (el.year < 2023) {
          // Winner
          candidates.push({
            id: `${el.year}-${leader.slug}-winner`,
            name: leader.name,
            party: el.party,
            partyAbbr: el.party.includes('BRS') || el.party.includes('TRS') ? 'BRS' : 'INC',
            constituency: el.constituency,
            acNo: 0,
            district: leader.district || '',
            electionYear: el.year,
            status: 'elected_mla',
            votes: el.votesReceived.toLocaleString('en-IN'),
            voteShare: `${el.voteSharePercent}%`,
            margin: el.victoryMargin.toLocaleString('en-IN'),
            isCurrentMla: true,
            profileSlug: leader.slug,
          });

          // Runner-up
          if (el.runnerUpName) {
            candidates.push({
              id: `${el.year}-${leader.slug}-runnerup`,
              name: el.runnerUpName,
              party: el.runnerUpParty,
              partyAbbr: el.runnerUpParty.includes('BJP') ? 'BJP' : el.runnerUpParty.includes('INC') ? 'INC' : 'OTH',
              constituency: el.constituency,
              acNo: 0,
              district: leader.district || '',
              electionYear: el.year,
              status: 'runner_up',
              votes: el.runnerUpVotes.toLocaleString('en-IN'),
              voteShare: `${el.runnerUpVoteSharePercent}%`,
              margin: `-${el.victoryMargin.toLocaleString('en-IN')}`,
              isCurrentMla: false,
              profileSlug: null,
            });
          }
        }
      }
    }

    return candidates;
  },

  /**
   * Comprehensive search and directory filter
   */
  filterDirectory(filters: Partial<DirectoryFilters>): CandidateRecord[] {
    const all = this.getAllCandidates();

    return all.filter((item) => {
      // Query search on name, constituency, district, party
      if (filters.searchQuery && filters.searchQuery.trim() !== '') {
        const q = filters.searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesConst = item.constituency.toLowerCase().includes(q);
        const matchesDist = item.district.toLowerCase().includes(q);
        const matchesParty = item.party.toLowerCase().includes(q) || item.partyAbbr.toLowerCase().includes(q);
        if (!matchesName && !matchesConst && !matchesDist && !matchesParty) {
          return false;
        }
      }

      // District filter
      if (filters.district && filters.district !== 'all') {
        if (item.district.toLowerCase() !== filters.district.toLowerCase()) {
          return false;
        }
      }

      // Constituency filter
      if (filters.constituency && filters.constituency !== 'all') {
        if (item.constituency.toLowerCase() !== filters.constituency.toLowerCase()) {
          return false;
        }
      }

      // Party filter
      if (filters.party && filters.party !== 'all') {
        if (item.partyAbbr !== filters.party && item.party !== filters.party) {
          return false;
        }
      }

      // Status filter (current MLA vs historical candidate)
      if (filters.status && filters.status !== 'all') {
        if (filters.status === 'current_mla' && !item.isCurrentMla) {
          return false;
        }
        if (filters.status === 'candidate' && item.isCurrentMla) {
          return false;
        }
      }

      // Election year filter
      if (filters.electionYear && filters.electionYear !== 'all') {
        if (item.electionYear.toString() !== filters.electionYear) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'name_asc') {
        return a.name.localeCompare(b.name);
      }
      if (filters.sortBy === 'name_desc') {
        return b.name.localeCompare(a.name);
      }
      if (filters.sortBy === 'ac_no_asc') {
        return a.acNo - b.acNo;
      }
      // default: current MLAs first, then by year desc, then name
      if (a.isCurrentMla !== b.isCurrentMla) {
        return a.isCurrentMla ? -1 : 1;
      }
      return b.electionYear - a.electionYear || a.name.localeCompare(b.name);
    });
  },
};
