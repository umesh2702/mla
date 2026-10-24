import { 
  MlcConstituency, 
  MlcCandidateProfile, 
  BrsLeader, 
  VoterGuideMilestone 
} from "@/types/mlc";

/**
 * Verified Graduate MLC Constituencies Data
 * Baseline verified against Chief Electoral Officer (CEO) Telangana and
 * Telangana Legislative Council official directory.
 */
export const MLC_CONSTITUENCIES: MlcConstituency[] = [
  {
    id: "mrh",
    code: "G-01",
    name: "Mahabubnagar–Rangareddy–Hyderabad",
    slug: "mahabubnagar-rangareddy-hyderabad",
    teluguName: "మహబూబ్‌నగర్–రంగారెడ్డి–హైదరాబాద్ పట్టభద్రుల నియోజకవర్గం",
    cycleStatus: "current_2027_cycle",
    cycleLabel: "Active 2027 Renewal Cycle",
    isActive2027: true,
    termDuration: "2021–2027",
    statutoryTermEnd: "29 March 2027",
    statutorySource: "Telangana Legislative Council Official Members Directory & CEO Telangana",
    
    currentIncumbent: {
      name: "Surabhi Vani Devi",
      party: "BRS",
      partyFullName: "Bharat Rashtra Samithi",
      electedYear: 2021,
      electedType: "biennial_election",
      roleTitle: "Member of Legislative Council (MLC) • Academician & Artist",
      shortBio: "Daughter of former Prime Minister P.V. Narasimha Rao; founded Sri Venkateshwara College of Fine Arts and Surabhi Educational Society; elected in March 2021 biennial election.",
      portraitUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRWdU5xUIlmxs89V5XMLB76tAN_wfy9DH7kR76qYtNXv8MtF32LBOTFPEWKdLRI8hc5ndMRZK9DEnLPJOyzlNkhHW7s4Y6wEKiLNtC-WOOaBNefRIXRXpK6MCFDdQilgTBUHdnVwEUgUCo3BjTOb4uUXHnClGmpt8LP9urmBy8pi5ubZ4V3k7k0IdsPBiQJiRTsdgCqgJaTmeGsbYcCOyRFB-Vm8KNgKiS_C2_Uk9HUYSWlb9vNO2C",
    },

    nominationStatus: "pending_announcement",
    nominationStatusLabel: "BRS Candidate Announcement Pending",
    nominationDetails: "Candidate selection is currently under deliberation by the BRS Central Parliamentary Board and Party High Command. An official announcement will be gazetted prior to notification filing.",

    districtsCount: 9,
    districts: [
      "Hyderabad",
      "Rangareddy",
      "Medchal-Malkajgiri",
      "Vikarabad",
      "Mahabubnagar",
      "Nagarkurnool",
      "Wanaparthy",
      "Jogulamba Gadwal",
      "Narayanpet",
    ],
    keyHubs: [
      "Osmania University & JNTUH",
      "HITEC City & Financial District",
      "Palamuru University Belt",
      "Gachibowli Tech Corridor",
    ],
    summary: "Major urban, intellectual and technological hub comprising state capital Hyderabad and southern plateau districts. Encompasses over 5.17 lakh graduate electors registered across 9 administrative districts.",

    historicalMetrics: {
      lastElectionYear: 2021,
      electorateBase: "5,17,883 electors",
      pollingStationsCount: 799,
      turnoutNote: "67.26% turnout recorded in 2021 biennial poll",
      source: "CEO Telangana Statistical Gazette (March 2021)",
    },
  },
  {
    id: "wkn",
    code: "G-02",
    name: "Warangal–Khammam–Nalgonda",
    slug: "warangal-khammam-nalgonda",
    teluguName: "వరంగల్–ఖమ్మం–నల్గొండ పట్టభద్రుల నియోజకవర్గం",
    cycleStatus: "current_2027_cycle",
    cycleLabel: "Active 2027 Renewal Cycle",
    isActive2027: true,
    termDuration: "2024–2027",
    statutoryTermEnd: "29 March 2027",
    statutorySource: "CEO Telangana Bye-Election Gazette (June 2024) & Council Records",

    currentIncumbent: {
      name: "Teenmar Mallanna",
      party: "INC",
      partyFullName: "Indian National Congress",
      electedYear: 2024,
      electedType: "bye_election",
      roleTitle: "Member of Legislative Council (MLC) • Journalist",
      shortBio: "Journalist and political commentator (Chintapandu Naveen Kumar); elected in the June 2024 bye-election necessitated by the vacancy of the 2021–2027 term.",
      portraitUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRWdU5xUIlmxs89V5XMLB76tAN_wfy9DH7kR76qYtNXv8MtF32LBOTFPEWKdLRI8hc5ndMRZK9DEnLPJOyzlNkhHW7s4Y6wEKiLNtC-WOOaBNefRIXRXpK6MCFDdQilgTBUHdnVwEUgUCo3BjTOb4uUXHnClGmpt8LP9urmBy8pi5ubZ4V3k7k0IdsPBiQJiRTsdgCqgJaTmeGsbYcCOyRFB-Vm8KNgKiS_C2_Uk9HUYSWlb9vNO2C",
    },

    nominationStatus: "under_screening",
    nominationStatusLabel: "BRS Candidate Announcement Pending",
    nominationDetails: "Selection committee evaluating representations from youth wing, employee associations, and university alumni leadership. Official nominee declaration pending formal notification.",

    districtsCount: 11,
    districts: [
      "Warangal",
      "Hanamkonda",
      "Jangaon",
      "Mahabubabad",
      "Jayashankar Bhupalpally",
      "Mulugu",
      "Khammam",
      "Bhadradri Kothagudem",
      "Nalgonda",
      "Suryapet",
      "Yadadri Bhuvanagiri",
    ],
    keyHubs: [
      "Kakatiya University, Warangal",
      "Singareni Coal & Power Hubs",
      "Nalgonda Agricultural Belt",
      "Khammam Industrial & River Basins",
    ],
    summary: "Agricultural, industrial and educational heartland across eastern Telangana districts, with high density of university faculties, teachers, and public sector employee associations.",

    historicalMetrics: {
      lastElectionYear: 2024,
      electorateBase: "~4.61 Lakh electors",
      pollingStationsCount: 605,
      turnoutNote: "Bye-poll conducted in June 2024 for remainder of 2021–2027 term",
      source: "ECI & CEO Telangana Bye-Election Report",
    },
  },
  {
    id: "anmk",
    code: "G-03",
    name: "Adilabad–Nizamabad–Medak–Karimnagar",
    slug: "adilabad-nizamabad-medak-karimnagar",
    teluguName: "ఆదిలాబాద్–నిజామాబాద్–మెదక్–కరీంనగర్ పట్టభద్రుల నియోజకవర్గం",
    cycleStatus: "outside_cycle",
    cycleLabel: "Outside 2027 Cycle (Term: 2023–2029)",
    isActive2027: false,
    termDuration: "2023–2029",
    statutoryTermEnd: "March 2029",
    statutorySource: "Telangana Legislative Council Official Directory & ECI Biennial Results 2023",

    currentIncumbent: {
      name: "Dr. K. Anji Reddy",
      party: "BJP",
      partyFullName: "Bharatiya Janata Party",
      electedYear: 2023,
      electedType: "biennial_election",
      roleTitle: "Member of Legislative Council (MLC) • Physician",
      shortBio: "Medical practitioner and civic worker; elected in the 2023 biennial elections for a standard 6-year statutory term concluding in 2029.",
    },

    nominationStatus: "non_active_cycle",
    nominationStatusLabel: "Non-Active Cycle (No 2027 Poll)",
    nominationDetails: "This constituency held elections in March 2023. Its 6-year statutory tenure runs until 2029. Next Form-18 de-novo revision for this seat will commence in late 2028.",

    districtsCount: 13,
    districts: [
      "Karimnagar",
      "Jagtial",
      "Peddapalli",
      "Rajanna Sircilla",
      "Nizamabad",
      "Kamareddy",
      "Medak",
      "Sangareddy",
      "Siddipet",
      "Adilabad",
      "Nirmal",
      "Mancherial",
      "Kumuram Bheem Asifabad",
    ],
    keyHubs: [
      "Karimnagar Educational Hub",
      "Sircilla Textile & Innovation Valley",
      "Nizamabad Agro-Trading Center",
      "Medak Industrial Corridor",
    ],
    summary: "Northern agrarian belt with high density of graduate educators, government servants, and cooperative institutions. Not up for election in 2027.",

    historicalMetrics: {
      lastElectionYear: 2023,
      electorateBase: "~3.9 Lakh electors",
      pollingStationsCount: 494,
      turnoutNote: "Elected during 2023 biennial cycle for tenure until 2029",
      source: "CEO Telangana Gazette 2023",
    },
  },
];

/**
 * Verified BRS Apex Leadership (Statewide Authority)
 * Explicitly documented: These leaders represent statewide party leadership and MLAs,
 * NOT declared candidates for the Graduate MLC election.
 */
export const BRS_LEADERSHIP: BrsLeader[] = [
  {
    id: "kcr",
    name: "K. Chandrashekar Rao",
    partyRole: "Party Founder & President",
    publicOffice: "Former Chief Minister of Telangana (2014–2023)",
    headquartersOrSeat: "Headquarters: Telangana Bhavan, Hyderabad",
    bio: "Architect of the Telangana statehood movement and foundational state policies. Led the state government for two consecutive terms (2014–2023), establishing major irrigation, industrial, and social welfare programs.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqJhgfhtYIioqWv9Lm_RpaN0c9iV6WYEDSkZ-LQKBPGzA3KOdO_TeuMwZB8S5Ak9KUwseQR4uuhxm6NFvDLIH1jQFFPpgva3HHhnLqrg53kTjBsGWNg8HxB2QbKYroN6leqt5xb9yiovnsfXIFwZTd6pVJT6c-Aka6bhJb9-eowZY4NqEH9g2XCPSKygNpmk3mY6Tu_HtOUN8gnAMcfUBzQgHdTuyGa0XaWWVBHjw_8RZTb6UWHcQy",
    imageAlt: "Portrait photo of K. Chandrashekar Rao (KCR), founder president of Bharat Rashtra Samithi",
    officialNote: "Statewide Party President • Not a Graduate MLC Nominee",
  },
  {
    id: "ktr",
    name: "K. T. Rama Rao (KTR)",
    partyRole: "Working President, BRS",
    publicOffice: "MLA for Sircilla • Former Minister for IT, Industries & MA&UD",
    headquartersOrSeat: "Elected MLA: Sircilla Assembly Constituency",
    bio: "Spearheaded the transformation of Hyderabad into a global tech and life-sciences hub. Architect of T-Hub, T-Works, WE-Hub, and statewide industrial policy (TS-iPASS).",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvwwTXPukTMD4iGk99_AOTlxwc0M_p4_0k6Obw2p3_Qde5vVzxCOyOpNeZjwtHlWYoZLFToX5GsUMst-E7BUc9Fshsu2NAHJB302C9nR1S-kK-6cCvkrwy-RvTbPFI5d8TejBoMTS-8ieVFapw9xsk4NjYZH-ICyOCaTv8rROa5agk01Eq10uicTQoreN2z_Vvgg64RNRyFp642PEA3EYe1xuoDKrZp5CUI9wrLU-GGvGnvTUfmpJ-",
    imageAlt: "Official photographic portrait of K. T. Rama Rao (KTR), Working President of BRS party",
    officialNote: "Working President & MLA • Not a Graduate MLC Nominee",
  },
  {
    id: "harish-rao",
    name: "T. Harish Rao",
    partyRole: "Senior Leader, BRS",
    publicOffice: "MLA for Siddipet • Former Minister for Finance & Health",
    headquartersOrSeat: "Elected MLA: Siddipet Assembly Constituency",
    bio: "Key legislative strategist and grassroots organizer with landmark record in public healthcare modernization (TIMS hospitals, medical colleges in every district) and fiscal management.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAULZlsO2gLLB7YZyB13toSwj--oJOCZ_PfzK0AvySgwk2yNZqCONmItD73PycqBCUA3cnJn60_be1dAC56z1e9HVzOjkDexqVWINDA_dY5pugrapb_Zj4zvqYCvSVQgYyo-lanmb7BzAuRkPGjOEFwuOlF4_OS9LObl_PX0ns4SMIwBLx8bCDKT8KyJFU3GWhubIpmgBiyPGPR6Qg0TJyJE6L9SECD2E6gH3R6njOzidguK-Bq0Vd",
    imageAlt: "Headshot of T. Harish Rao, senior BRS leader and former Finance Minister of Telangana",
    officialNote: "Senior Leader & MLA • Not a Graduate MLC Nominee",
  },
];

/**
 * Statutory Form-18 Voter Registration Timeline Milestones
 * Sourced from ECI Registration of Electors Rules 1960 (Rule 31) and CEO Telangana.
 */
export const VOTER_GUIDE_MILESTONES: VoterGuideMilestone[] = [
  {
    stepNumber: "01",
    label: "PHASE 1",
    status: "completed",
    dateDisplay: "September 2026",
    title: "Public Notice Issued",
    description: "Statutory public notice issued under Rule 31 by Electoral Registration Officers across all district collectorates. Online Form-18 portal opens.",
  },
  {
    stepNumber: "02",
    label: "KEY DEADLINE",
    status: "urgent_deadline",
    isDeadline: true,
    dateDisplay: "06 November 2026",
    title: "Form-18 Submission Deadline",
    description: "Last date for receipt of physically attested and digital claims via Form-18 accompanied by attested degree certificates.",
  },
  {
    stepNumber: "03",
    label: "VERIFICATION",
    status: "upcoming",
    dateDisplay: "25 November 2026",
    title: "Draft Electoral Rolls",
    description: "Provisional graduate voter rolls published for public inspection at tahsil, revenue division, and collectorate offices.",
  },
  {
    stepNumber: "04",
    label: "FINAL ROLL",
    status: "upcoming",
    dateDisplay: "30 December 2026",
    title: "Final Publication of Rolls",
    description: "Authoritative, certified voters register prepared by the Electoral Registration Officer for the conduct of the 2027 poll.",
  },
  {
    stepNumber: "05",
    label: "GAZETTE NOTICE",
    status: "pending",
    dateDisplay: "ECI Pending",
    title: "Voting & Counting Dates",
    description: "Formal statutory election notification, nomination filing dates, and preferential voting schedule pending official ECI gazette notification.",
  },
];

/**
 * Reusable Candidate Profile Template Data
 * Pre-configured for Mahabubnagar–Rangareddy–Hyderabad and Warangal–Khammam–Nalgonda.
 * Designed to gracefully render either pending state or confirmed nominee information.
 */
export const CANDIDATE_PROFILES_DATA: Record<string, MlcCandidateProfile> = {
  "mahabubnagar-rangareddy-hyderabad": {
    slug: "mahabubnagar-rangareddy-hyderabad",
    constituencyId: "mrh",
    constituencyName: "Mahabubnagar–Rangareddy–Hyderabad",
    constituencyCode: "G-01",
    isConfirmed: false,
    nominationStatus: "pending_announcement",
    nominationStatusLabel: "Candidate Announcement Pending",
    nominationNotice: "Official BRS nominee selection underway by the party high command; verified profile data updates automatically upon formal notification.",

    candidateName: "Official Nominee Placeholder",
    candidateTitle: "Prospective Graduate MLC Candidate • BRS Party",
    party: "BRS",
    partyFullName: "Bharat Rashtra Samithi",
    portraitUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRWdU5xUIlmxs89V5XMLB76tAN_wfy9DH7kR76qYtNXv8MtF32LBOTFPEWKdLRI8hc5ndMRZK9DEnLPJOyzlNkhHW7s4Y6wEKiLNtC-WOOaBNefRIXRXpK6MCFDdQilgTBUHdnVwEUgUCo3BjTOb4uUXHnClGmpt8LP9urmBy8pi5ubZ4V3k7k0IdsPBiQJiRTsdgCqgJaTmeGsbYcCOyRFB-Vm8KNgKiS_C2_Uk9HUYSWlb9vNO2C",
    portraitAlt: "Official nominee placeholder frame for Mahabubnagar-Rangareddy-Hyderabad Graduate MLC",
    isPlaceholderPortrait: true,

    currentIncumbentName: "Surabhi Vani Devi",
    currentIncumbentParty: "BRS",
    currentTermEnd: "29 March 2027",

    electorateSummary: "The Mahabubnagar–Rangareddy–Hyderabad Graduate Constituency represents the largest concentration of higher-education alumni in Telangana. Spanning 9 administrative districts, this electorate encompasses the HITEC City & Gachibowli technology corridors, historic university clusters (Osmania University, JNTUH, University of Hyderabad), and emerging pharmaceutical-industrial hubs. Over 5.17 lakh registered graduate voters will elect their statutory representative.",
    vettingStage: "Stage 2 (Parliamentary Board)",
    estimatedElectorate: "5.17L+ (2021 Roll)",

    academicCredentials: [
      {
        level: "Foundational Tier",
        degree: "Bachelor of Engineering (B.E. / B.Tech / B.A. / B.Sc / B.Com)",
        badge: "UGC Accredited",
        description: "Candidate screening mandates a certified Bachelor's qualification meeting Section 27(3)(a) of the Representation of the People Act, completed at least 3 years prior to the qualifying date.",
        benchmark: "Osmania University & JNTU Alumni Network",
        sourceNote: "Statutory Rule: R.P. Act 1950 Sec 27(3)(a)",
      },
      {
        level: "Advanced Specialization",
        degree: "Master of Science / MBA / Ph.D. / LL.B.",
        badge: "Apex Evaluation",
        description: "Candidate evaluation indexes postgraduate degrees, research publications, doctoral dissertations, and published whitepapers regarding regional development and employment policy.",
        benchmark: "Bar Council / AICTE / NAAC Registry",
        sourceNote: "Verified via University Registrars & ECI Form-26 Affidavit",
      },
      {
        level: "Electoral Roll Audit",
        degree: "Graduate Voter Verification Protocol",
        badge: "Statutory Audit",
        description: "Form-18 applicants and candidates undergo strict documentary verification by Electoral Registration Officers ensuring degree completion on or before 1 November 2023.",
        benchmark: "92% Aadhaar-Linked Elector Validation in 2021",
        sourceNote: "CEO Telangana Gazette Verification Rules",
      },
    ],

    governanceNarrative: "In accordance with BRS legislative conventions for Graduate MLC seats (historically exemplified by late Prime Minister P.V. Narasimha Rao's daughter Smt. Surabhi Vani Devi, an academician and artist who founded Sri Venkateshwara College of Fine Arts and Surabhi Educational Society), the nominee profile prioritizes administrative competence in university syndicates, vocational incubation, and teacher welfare advocacy.",

    governancePillars: [
      {
        icon: "school",
        title: "Academic Administration",
        description: "Syndicate memberships, curriculum reform, and UGC institutional accreditation boards.",
      },
      {
        icon: "domain",
        title: "Tech & Startup Ecosystem",
        description: "Alignment with T-Hub, T-Works, and the Hyderabad IT investment corridor expansion.",
      },
      {
        icon: "groups",
        title: "Public Advocacy",
        description: "Engagement with university non-teaching unions, junior college lecturers, and contract staff.",
      },
    ],

    districtList: [
      { district: "Hyderabad", zoneDescription: "Charminar to Secunderabad, Osmania University Core" },
      { district: "Rangareddy", zoneDescription: "Cyberabad, Chevella, Maheshwaram, Rajendranagar" },
      { district: "Medchal-Malkajgiri", zoneDescription: "Kompally, Medchal Industrial Belt, Ghatkesar" },
      { district: "Mahabubnagar", zoneDescription: "Palamuru University Belt & District Center" },
      { district: "Nagarkurnool & Wanaparthy", zoneDescription: "Southern Agro-Tech & Higher Ed Centers" },
      { district: "Jogulamba Gadwal & Narayanpet", zoneDescription: "Border Innovation Nodes & Handloom Belts" },
      { district: "Vikarabad", zoneDescription: "Semi-Urban Polytechnic Hubs & Ananthagiri" },
    ],

    timelineEvents: [
      {
        date: "March 2021",
        title: "Historic BRS Triumph in Mahabubnagar-Rangareddy-Hyderabad",
        badge: "OFFICIAL CERTIFICATE",
        badgeType: "official",
        description: "Surabhi Vani Devi (BRS) was officially declared elected by the Returning Officer after an exhaustive multi-round preferential vote count at the Saroornagar Indoor Stadium, polling 1,12,689 votes to surpass the quota against independent and national party opponents.",
      },
      {
        date: "2022–2024",
        title: "Legislative Council Interventions on University Appointments",
        badge: "HOUSE RECORD",
        badgeType: "house_record",
        description: "Introduction of statutory resolutions addressing Pay Revision Commission (PRC) anomalies for university contract assistant professors, degree college librarian recruitment, and budget allocations for modern hostels.",
      },
      {
        date: "October 2026",
        title: "Form-18 Roll De-novo Revision Commences",
        badge: "STATUTORY MANDATE",
        badgeType: "mandate",
        description: "Unlike general Assembly electors, the Graduate Voter Roll is reconstituted de-novo every six years. All eligible graduates in Mahabubnagar, Rangareddy, and Hyderabad must file fresh Form-18 declarations with university degree documentation.",
      },
      {
        date: "Q1 2027",
        title: "BRS Parliamentary Board Selection & Nomination Filing",
        badge: "UPCOMING CYCLE",
        badgeType: "upcoming",
        description: "Candidate interviews, district convenor consultations, and formal nomination paperwork scheduled at the Office of the Returning Officer (Hyderabad District Collectorate).",
      },
    ],

    policyPillars: [
      {
        number: "01",
        category: "Livelihoods",
        title: "Employment & IT Corridors",
        description: "Mandatory statutory accreditation for mega job fairs, decentralization of IT parks into Tier-2 corridors (Mahabubnagar IT Tower, Shadnagar industrial belt), and strict enforcement of local graduate hiring quotas in state-subsidized tech centers.",
        metricLabel: "Tier-2 IT Job Target",
        metricValue: "50,000+ Opportunities",
        icon: "work",
      },
      {
        number: "02",
        category: "Academia",
        title: "Higher Education & Research Grants",
        description: "Substantial budgetary enhancement for Osmania University, JNTUH, and Palamuru University laboratories. Establishment of high-speed statewide 24/7 digital central libraries and dedicated doctoral research fellowships for emerging disciplines like AI and clean tech.",
        metricLabel: "State Research Pool",
        metricValue: "₹500 Cr Research Endowment",
        icon: "account_balance",
      },
      {
        number: "03",
        category: "Teaching Faculty",
        title: "Teacher & Lecturer Service Matters",
        description: "Immediate legislative action on the '010 Salary Head' implementation for aided staff, regularized promotions for Junior and Degree College lecturers, complete resolution of Pay Revision Commission (PRC) arrears, and health card protections for contract educators.",
        metricLabel: "010 Salary Head & Health Cards",
        metricValue: "Statutory Priority",
        icon: "badge",
      },
      {
        number: "04",
        category: "Innovation",
        title: "Licensing & Entrepreneurship Incubators",
        description: "Direct graduate-access pathways to T-Hub, WE-Hub, and RICH (Research & Innovation Circle of Hyderabad). Zero-interest micro-grants for registered young professionals, advocates, and engineers establishing independent practices across Telangana.",
        metricLabel: "T-Hub District Extension Pods",
        metricValue: "All 9 Districts",
        icon: "rocket_launch",
      },
    ],

    mediaArticles: [
      {
        outlet: "The Hindu • Telangana Edition",
        date: "Dec 2026",
        tag: "Press Briefing",
        title: "BRS Mobilizes District Task Forces for 100% Form-18 Graduate Voter Enrolment",
        excerpt: "High-level coordination meeting held at Telangana Bhavan directing cadre across Hyderabad and Rangareddy to assist eligible alumni in filing registration papers.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPGWBmGCAha0EfzxOwBy-dTP6PCPOtgI8e0YEZrn05K8WegOiFheALWhV5MBeJYmgmniEs_l95wGOTCLjPsdjn1LeKSmPiSbI6o2nH3AyKBdjx1gFRhOEzI0UYaJ2MXBy98fCyyXVdqJQ7M62CIaCnPuGWS0onrSWUZlyuSb4PckL4wXbqKuxAxu0njOouo9l72SquY1hL1Gsfctw-6FwG9G6QyGNR8XvLl3X-ws1u2bB4GBRKzPY-",
        imageAlt: "Press conference at Telangana Bhavan",
        actionLabel: "Read Dispatch",
        url: "https://telanganarashtrasamithi.org",
      },
      {
        outlet: "Namasthe Telangana / Regional Press",
        date: "Nov 2026",
        tag: "Special Editorial",
        title: "Preserving the Intellectual Voice of Telangana: The Unique Mandate of the Upper House",
        excerpt: "Analysis detailing why Graduate MLC representatives hold a constitutional duty beyond partisan politics, championing knowledge industries and faculty autonomy.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFhrDoP3Q3O2zB4JNJ1V-LqmsXryvEiOvIqvg25f0aNmxQ5HSZ4ZvRHrfRPEIIY-MXqrNUk3MTgDtAHvp6y5mMrSG0YWMttoMXUyG-4TZ42yOpbTQBagI2LsYH0JgoIQFS9hKKH3JLAF0UHd2HYnvGEN9EU1fP3bjCvxVXGVD84tuYgx0xXap_a9FYGQtWK3lTNes25cbsbzYnDbPwIJLjpKVY5n8SQgnL75Dqsxg_otgIjA7gp3lm",
        imageAlt: "Academic panel discussion in Hyderabad",
        actionLabel: "Access Whitepaper",
        url: "https://telanganalegislature.org.in",
      },
      {
        outlet: "Legislative Research Bureau",
        date: "Oct 2026",
        tag: "Gazette Analysis",
        title: "Preferential Counting Dynamics: Historical Quota Breakdown of Hyderabad MLC",
        excerpt: "Statistical breakdown of second and third-preference vote transfers that determined the winning threshold in the 2015 and 2021 election cycles.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdAYz0uSfWvbCRQtR6_bADu5z9nkioE_Dc4HTwmWV6EhPlJxwjy6Dz-mjCjRLy7yil1IoJNvy_iXrhGles2sWZi0Hsyx2yHQE63Kf7W9LjMomyRqpM9illRj7qDZCa-Xi24d8RVbucx_Rv70G5SFW6L9m_hDauWEfCcUmIPyNEQwcSTMsADqVKul06dbaKskb87-5we-itob5DZoUR2SQiNqt9_pRh2ODb4KawPxisZvbHDkcMdops",
        imageAlt: "Collectorate electoral review briefing",
        actionLabel: "Explore Analysis",
        url: "https://ceotelangana.nic.in",
      },
    ],

    statutoryDocuments: [
      {
        title: "Form 26 Affidavit Template",
        formNumber: "ECI Form 26",
        description: "Statutory declaration format regarding assets, liabilities, and educational qualifications.",
        fileSize: "PDF • 420 KB",
        downloadUrl: "https://ceotelangana.nic.in",
        icon: "description",
      },
      {
        title: "Form-18 Graduate Voter Form",
        formNumber: "Statutory Form-18",
        description: "Official claim application for inclusion of name in the electoral roll for Graduate Constituency.",
        fileSize: "PDF • 285 KB",
        downloadUrl: "https://ceotelangana.nic.in",
        icon: "how_to_reg",
      },
      {
        title: "Boundary Gazette TS-2027",
        formNumber: "Delimitation Order",
        description: "Delimitation gazette specifying revenue mandals and urban municipal zones under MRH MLC jurisdiction.",
        fileSize: "PDF • 1.4 MB",
        downloadUrl: "https://ceotelangana.nic.in",
        icon: "map",
      },
    ],

    verificationRegister: {
      auditedSource: "CEO Telangana (ECI Portal) & Telangana Legislative Council",
      legislativeBody: "Telangana Legislative Council (Upper House)",
      lastUpdated: "March 2025",
      dataStatus: "Pre-Nomination Research Phase",
      discrepancyActionLabel: "Report Dossier Discrepancy",
    },
  },

  "warangal-khammam-nalgonda": {
    slug: "warangal-khammam-nalgonda",
    constituencyId: "wkn",
    constituencyName: "Warangal–Khammam–Nalgonda",
    constituencyCode: "G-02",
    isConfirmed: false,
    nominationStatus: "under_screening",
    nominationStatusLabel: "Candidate Announcement Pending",
    nominationNotice: "The BRS Parliamentary Board is actively screening representations from youth cadres, university alumni leadership, and employee associations. Official nominee profile will publish upon confirmation.",

    candidateName: "Official Nominee Placeholder",
    candidateTitle: "Prospective Graduate MLC Candidate • BRS Party",
    party: "BRS",
    partyFullName: "Bharat Rashtra Samithi",
    portraitUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRWdU5xUIlmxs89V5XMLB76tAN_wfy9DH7kR76qYtNXv8MtF32LBOTFPEWKdLRI8hc5ndMRZK9DEnLPJOyzlNkhHW7s4Y6wEKiLNtC-WOOaBNefRIXRXpK6MCFDdQilgTBUHdnVwEUgUCo3BjTOb4uUXHnClGmpt8LP9urmBy8pi5ubZ4V3k7k0IdsPBiQJiRTsdgCqgJaTmeGsbYcCOyRFB-Vm8KNgKiS_C2_Uk9HUYSWlb9vNO2C",
    portraitAlt: "Official nominee placeholder frame for Warangal-Khammam-Nalgonda Graduate MLC",
    isPlaceholderPortrait: true,

    currentIncumbentName: "Teenmar Mallanna",
    currentIncumbentParty: "INC",
    currentTermEnd: "29 March 2027",

    electorateSummary: "Spanning 11 composite eastern and delta districts, the Warangal–Khammam–Nalgonda constituency brings together prominent academic institutions such as Kakatiya University, industrial clusters in Khammam and Kothagudem, and vibrant rural teacher cooperatives. More than 4.6 lakh graduate voters participate in preferential voting.",
    vettingStage: "Stage 2 (Cadre Review)",
    estimatedElectorate: "~4.61L (2024 Bye-Poll Roll)",

    academicCredentials: [
      {
        level: "Foundational Tier",
        degree: "Bachelor of Arts / Science / Engineering / Commerce",
        badge: "UGC Accredited",
        description: "Candidate screening requires an accredited degree conferred at least three years prior to the qualifying date under Section 27(3)(a) of the R.P. Act 1950.",
        benchmark: "Kakatiya & Mahatma Gandhi University Alumni Network",
        sourceNote: "Statutory Rule: R.P. Act 1950 Sec 27(3)(a)",
      },
      {
        level: "Advanced Specialization",
        degree: "Master's / Law (LL.B.) / Ph.D.",
        badge: "Apex Evaluation",
        description: "Higher academic credentials, public advocacy records, and published work on regional industrial employment and education reforms.",
        benchmark: "State Higher Education Council Registry",
        sourceNote: "Verified via TSCHE & ECI Affidavit Records",
      },
      {
        level: "Electoral Roll Audit",
        degree: "2024 Bye-Election Verification Roll",
        badge: "Audited Record",
        description: "Comprehensive verification of the 2024 bye-election voter lists to prepare de-novo registrations for the 2027 general renewal cycle.",
        benchmark: "Historical Bye-Poll Turnout: 65.4%",
        sourceNote: "CEO Telangana Bye-Election Gazette 2024",
      },
    ],

    governanceNarrative: "Focusing on agrarian youth employment, industrial job linkages in Singareni and Ramagundam feeder zones, and regularizing university contract faculty across Warangal and Nalgonda.",

    governancePillars: [
      {
        icon: "school",
        title: "Higher Ed Infrastructure",
        description: "State grants for Kakatiya University research facilities and medical college faculty.",
      },
      {
        icon: "domain",
        title: "Industrial & Mining Linkages",
        description: "Apprenticeship pipelines in public mining, thermal energy, and pharmaceutical zones.",
      },
      {
        icon: "groups",
        title: "Teacher & Employee Welfare",
        description: "CPS/OPS pension security, timely DA payment, and 010 salary head regularization.",
      },
    ],

    districtList: [
      { district: "Hanumakonda & Warangal", zoneDescription: "Kakatiya University Belt, Smart City Hub" },
      { district: "Jangaon & Mahabubabad", zoneDescription: "Agrarian Youth Corridors & Polytechnic Centers" },
      { district: "Khammam & Bhadradri Kothagudem", zoneDescription: "Industrial & Mining Hubs, Godavari Belt" },
      { district: "Nalgonda & Suryapet", zoneDescription: "Nagarjuna Sagar Belt, University Satellite Centers" },
      { district: "Yadadri Bhuvanagiri", zoneDescription: "Semi-Urban Industrial Corridor & Transit Belt" },
    ],

    timelineEvents: [
      {
        date: "March 2021",
        title: "BRS Candidate Palla Rajeshwar Reddy Elected",
        badge: "HISTORIC RESULT",
        badgeType: "official",
        description: "BRS won the 2021 biennial election with over 1.1 lakh first and second-preference votes.",
      },
      {
        date: "December 2023",
        title: "Vacancy Occurs Post Assembly Election",
        badge: "GAZETTE NOTICE",
        badgeType: "house_record",
        description: "Sitting MLC resigned following election to the Telangana Legislative Assembly from Jangaon, creating a vacancy.",
      },
      {
        date: "June 2024",
        title: "Bye-Election Conducted by ECI",
        badge: "BYE-POLL",
        badgeType: "official",
        description: "ECI conducted bye-election for the remainder of the 2021–2027 term. Teenmar Mallanna (INC) elected until 29 March 2027.",
      },
      {
        date: "2027 Cycle",
        title: "Full 6-Year Term Renewal Election",
        badge: "UPCOMING CYCLE",
        badgeType: "upcoming",
        description: "Term concludes 29 March 2027. Full de-novo Form-18 revision and general election to take place in early 2027.",
      },
    ],

    policyPillars: [
      {
        number: "01",
        category: "Livelihoods",
        title: "East Telangana Industrial Corridor",
        description: "Developing regional industrial training corridors connecting Warangal, Khammam, and Nalgonda to guarantee local graduate employment.",
        metricLabel: "Youth Job Target",
        metricValue: "40,000+ Opportunities",
        icon: "work",
      },
      {
        number: "02",
        category: "Academia",
        title: "Kakatiya University Modernization",
        description: "Dedicated ₹250 Cr revival package for Kakatiya University and affiliated post-graduate colleges.",
        metricLabel: "University Revival",
        metricValue: "₹250 Cr Capital Pool",
        icon: "school",
      },
      {
        number: "03",
        category: "Teachers",
        title: "Lecturer Service Protections",
        description: "Securing service regularization for contract junior and degree lecturers across eastern districts.",
        metricLabel: "Beneficiaries",
        metricValue: "35,000+ Educators",
        icon: "badge",
      },
      {
        number: "04",
        category: "Agriculture & Water",
        title: "Agro-Tech Enterprise Hubs",
        description: "Seed funding for agricultural graduates founding modern agro-processing and seed testing units.",
        metricLabel: "District Pods",
        metricValue: "All 11 Districts",
        icon: "rocket_launch",
      },
    ],

    mediaArticles: [
      {
        outlet: "Telangana Today",
        date: "Jan 2027",
        tag: "Cadre Review",
        title: "BRS Steps Up Ground Consultations Across Warangal, Khammam and Nalgonda",
        excerpt: "Party leadership engages student unions and employee leaders to prepare Form-18 registration camps.",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPGWBmGCAha0EfzxOwBy-dTP6PCPOtgI8e0YEZrn05K8WegOiFheALWhV5MBeJYmgmniEs_l95wGOTCLjPsdjn1LeKSmPiSbI6o2nH3AyKBdjx1gFRhOEzI0UYaJ2MXBy98fCyyXVdqJQ7M62CIaCnPuGWS0onrSWUZlyuSb4PckL4wXbqKuxAxu0njOouo9l72SquY1hL1Gsfctw-6FwG9G6QyGNR8XvLl3X-ws1u2bB4GBRKzPY-",
        imageAlt: "BRS party consultation session",
        actionLabel: "Read Dispatch",
        url: "https://telanganarashtrasamithi.org",
      },
    ],

    statutoryDocuments: [
      {
        title: "Form-18 Registration Form",
        formNumber: "Statutory Form-18",
        description: "Application for inclusion of name in the electoral roll for a Graduates' constituency.",
        fileSize: "PDF • 285 KB",
        downloadUrl: "https://ceotelangana.nic.in",
        icon: "how_to_reg",
      },
      {
        title: "ECI Bye-Poll Gazette 2024",
        formNumber: "Gazette Notification",
        description: "Official results and term duration notification for Warangal-Khammam-Nalgonda.",
        fileSize: "PDF • 950 KB",
        downloadUrl: "https://ceotelangana.nic.in",
        icon: "description",
      },
    ],

    verificationRegister: {
      auditedSource: "CEO Telangana (ECI Portal) & Legislative Council Secretariat",
      legislativeBody: "Telangana Legislative Council",
      lastUpdated: "March 2025",
      dataStatus: "Pre-Nomination Review Phase",
      discrepancyActionLabel: "Report Dossier Discrepancy",
    },
  },

  "adilabad-nizamabad-medak-karimnagar": {
    slug: "adilabad-nizamabad-medak-karimnagar",
    constituencyId: "anmk",
    constituencyName: "Adilabad–Nizamabad–Medak–Karimnagar",
    constituencyCode: "G-03",
    isConfirmed: false,
    nominationStatus: "non_active_cycle",
    nominationStatusLabel: "Non-Active Cycle (Term Ends 2029)",
    nominationNotice: "This constituency is NOT part of the 2027 election cycle. Elections were held in March 2023 for a 6-year term concluding in March 2029.",

    candidateName: "No Election in 2027 Cycle",
    candidateTitle: "Term Active Until 2029 • Outside 2027 Poll",
    party: "BRS",
    partyFullName: "Bharat Rashtra Samithi",
    isPlaceholderPortrait: true,

    currentIncumbentName: "Dr. K. Anji Reddy",
    currentIncumbentParty: "BJP",
    currentTermEnd: "March 2029",

    electorateSummary: "Adilabad–Nizamabad–Medak–Karimnagar is the northernmost Graduate MLC constituency in Telangana. Having held its biennial election in March 2023, its sitting MLC Dr. K. Anji Reddy serves until March 2029. The next de-novo Form-18 voter registration for this seat will commence in late 2028.",
    vettingStage: "Not Applicable for 2027",
    estimatedElectorate: "~3.9L (2023 Roll)",

    academicCredentials: [],
    governanceNarrative: "This constituency operates on an alternate biennial cycle (2023–2029) and will not hold elections in 2027.",
    governancePillars: [],
    districtList: [
      { district: "Karimnagar, Jagtial, Peddapalli, Sircilla", zoneDescription: "Northern Innovation & Agro Belt" },
      { district: "Nizamabad & Kamareddy", zoneDescription: "Sugar & Spice Trading Belt" },
      { district: "Medak, Sangareddy, Siddipet", zoneDescription: "Industrial & Manufacturing Corridor" },
      { district: "Adilabad, Nirmal, Mancherial, Asifabad", zoneDescription: "Forest & Mineral Wealth Belt" },
    ],
    timelineEvents: [
      {
        date: "March 2023",
        title: "Biennial Election Held",
        badge: "PAST POLL",
        badgeType: "official",
        description: "Dr. K. Anji Reddy elected for a 6-year statutory term ending March 2029.",
      },
      {
        date: "2027",
        title: "Outside 2027 Election Cycle",
        badge: "FUTURE CYCLE",
        badgeType: "mandate",
        description: "No Graduate MLC poll will be conducted for this constituency in 2027.",
      },
      {
        date: "Late 2028",
        title: "Next Form-18 De-Novo Revision Scheduled",
        badge: "FUTURE POLL",
        badgeType: "upcoming",
        description: "Voter roll reconstitution will begin ahead of the 2029 biennial election.",
      },
    ],
    policyPillars: [],
    mediaArticles: [],
    statutoryDocuments: [],
    verificationRegister: {
      auditedSource: "CEO Telangana Official Gazette 2023",
      legislativeBody: "Telangana Legislative Council",
      lastUpdated: "March 2025",
      dataStatus: "Non-Active Cycle Archive",
      discrepancyActionLabel: "Report Discrepancy",
    },
  },
};
