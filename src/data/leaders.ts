import { LeaderProfile } from "@/types/leader";
import { KP_VIVEKANAND_ELECTIONS, KTR_ELECTIONS, HARISH_RAO_ELECTIONS } from "./elections";
import { QUTHBULLAPUR_PROJECTS } from "./projects";
import { KP_VIVEKANAND_TIMELINE } from "./public-records";
import { MASTER_SOURCES } from "./sources";

export const LEADERS_DATA: LeaderProfile[] = [
  {
    slug: "kp-vivekanand",
    name: "K.P. Vivekanand Goud",
    teluguName: "కె.పి. వివేకానంద్ గౌడ్",
    currentRole: "Member of the Legislative Assembly (MLA)",
    party: "Bharat Rashtra Samithi (BRS)",
    partyRole: "Senior Party Representative & 3-Term Legislator",
    constituency: "Quthbullapur (131)",
    district: "Medchal-Malkajgiri",
    isFlagship: true,
    termsInOffice: "2014 – Present (3 Consecutive Terms)",
    born: "March 1977, Hyderabad, Telangana",
    education:
      "Bachelor of Engineering (B.E. Civil) from Muffakham Jah College of Engineering and Technology (MJCET), Osmania University (1998)",
    image: "/images/leaders/kp-vivekanand.jpg",
    imageAlt: "Official portrait of K.P. Vivekanand, MLA representing Quthbullapur",
    portraitFallbackInitials: "KPV",
    shortBio:
      "K.P. Vivekanand (Koona Pandu Vivekanand Goud) is a three-time Member of the Legislative Assembly representing the rapidly urbanising suburban constituency of Quthbullapur in the Telangana Legislative Assembly. A civil engineer by training, he has represented the seat continuously since 2014, securing one of the highest victory margins in the state during the 2023 elections.",
    quote:
      "Balancing rapid industrial expansion with resilient civic infrastructure, storm-water drainage, and accessible public healthcare remains the central mission for Quthbullapur.",
    keyStats: [
      {
        label: "2023 Victory Margin",
        value: "85,576",
        sublabel: "Highest victory margin across Hyderabad suburban seats",
      },
      {
        label: "Consecutive Terms",
        value: "3 Terms",
        sublabel: "Elected in 2014, 2018, and 2023",
      },
      {
        label: "2023 Vote Share",
        value: "46.8%",
        sublabel: "1,87,999 valid votes polled",
      },
      {
        label: "Constituency Electorate",
        value: "6.5+ Lakhs",
        sublabel: "One of Telangana's largest legislative electorates",
      },
    ],
    biography: [
      {
        title: "Educational and Professional Background",
        content: [
          "Koona Pandu Vivekanand Goud was born in March 1977 to Koona Pandu Goud in Hyderabad, Telangana. He pursued his formal primary and secondary schooling in Hyderabad before completing his intermediate education in science disciplines.",
          "He enrolled at the renowned Muffakham Jah College of Engineering and Technology (MJCET), affiliated with Osmania University, graduating with a Bachelor of Engineering (B.E.) degree in Civil Engineering in 1998. His civil engineering background has frequently informed his legislative scrutiny of urban drainage slopes, road works, and stormwater infrastructure projects across northern Hyderabad.",
        ],
      },
      {
        title: "Entry into Politics and Early Public Work",
        content: [
          "Vivekanand entered active public life through youth civic mobilisations and community representation in the suburban belts of northern Hyderabad. His early political engagement centered around youth welfare, local civic grievances in industrial worker residential zones, and community sports initiatives.",
          "Prior to his legislative election, he actively organised local welfare committees in the Quthbullapur and Medchal industrial corridors, addressing civic amenities, public drinking water supply bottlenecks, and educational access for urban working-class families.",
        ],
      },
      {
        title: "Political History and Legislative Elections",
        content: [
          "In the 2014 Andhra Pradesh General Assembly Elections (prior to the formal bifurcation forming Telangana), Vivekanand contested from Quthbullapur on a Telugu Desam Party (TDP) ticket. He defeated his nearest rival K. Hanmanth Rao (TRS) by 39,024 votes, polling 1,14,235 votes.",
          "In February 2016, along with several fellow legislators, he formally transitioned to the Telangana Rashtra Samithi (TRS, subsequently renamed Bharat Rashtra Samithi - BRS), aligning with the state government's urban infrastructure mission and flagship programs for Greater Hyderabad.",
          "In the 2018 Telangana Assembly Elections, he stood as the TRS candidate and secured re-election with 1,54,500 votes, defeating Congress candidate Kuna Srisailam Goud by a margin of 41,500 votes.",
          "In the December 2023 Telangana Legislative Assembly Elections, Vivekanand secured a historic third consecutive victory. Polling 1,87,999 votes (46.80% vote share), he defeated the INC challenger by an emphatic margin of 85,576 votes—standing as one of the largest electoral victory margins in the 2023 Telangana assembly elections.",
        ],
      },
      {
        title: "Current Legislative Priorities & Public Role",
        content: [
          "Following the December 2023 election results, Vivekanand serves as an active opposition legislator in the 3rd Telangana Legislative Assembly. His floor interventions prominently focus on civic works accountability, delays in highway grade-separator executions, drinking water allocation consistency via HMWSSB, and flood mitigation under the Strategic Nala Development Programme (SNDP).",
          "He conducts regular public grievance sessions ('Prajadarbar') at his Quthbullapur constituency office, coordinating with Greater Hyderabad Municipal Corporation (GHMC) circle engineers and revenue officials to resolve property tax, layout regularisation, and local civic issues.",
        ],
      },
    ],
    constituencyInfo: {
      name: "Quthbullapur Assembly Constituency",
      number: 131,
      district: "Medchal-Malkajgiri",
      region: "Northern Hyderabad Metropolitan Region (Greater Hyderabad)",
      totalVotersApprox: "Approx. 6,85,000 registered electors (ECI 2023 revision)",
      majorLocalities: [
        "Jeedimetla Industrial Area",
        "Chintal",
        "Shapur Nagar",
        "Subhash Nagar",
        "Suraram",
        "Bahadurpally",
        "Gajularamaram",
        "Kompally",
        "Dhulapally",
        "Fox Sagar Environs",
      ],
      administrativeBodies: [
        "Greater Hyderabad Municipal Corporation (GHMC) - Kukatpally & Quthbullapur Zones (Circle 26 & 27)",
        "Hyderabad Metropolitan Development Authority (HMDA)",
        "Medchal-Malkajgiri District Collectorate",
        "Hyderabad Metropolitan Water Supply and Sewerage Board (HMWSSB)",
      ],
      overview:
        "Quthbullapur (Constituency 131) is a dynamic, high-density Assembly constituency situated in the Medchal-Malkajgiri district within the northern periphery of Greater Hyderabad. Characterised by a blend of heavy industrial clusters (notably the Jeedimetla industrial estate), fast-growing suburban residential layouts, and historical water bodies like Fox Sagar, the constituency faces unique civic challenges including stormwater runoff management, industrial effluent regulation, and rapid suburban commuter traffic along the National Highway 44 axis.",
      administrativeDisclaimer:
        "Important Administrative Distinction: Telangana Legislative Assembly constituency boundaries (Constituency 131 - Quthbullapur) do not strictly coincide with municipal administrative boundaries. While major portions fall within GHMC Circles 26 and 27, certain peripheral habitations interface with adjoining gram panchayats, municipalities, and HMDA planning jurisdiction.",
    },
    elections: KP_VIVEKANAND_ELECTIONS,
    projects: QUTHBULLAPUR_PROJECTS,
    timeline: KP_VIVEKANAND_TIMELINE,
    contact: {
      officeAddress: "MLA Camp Office, Near Sub-Registrar Office, Chintal Main Road, Quthbullapur, Hyderabad, Telangana - 500054",
      constituencyOffice: "Medchal-Malkajgiri District Legislative Office, Telangana",
      verifiedSocialHandles: [
        {
          platform: "Twitter / X",
          handle: "@kp_vivekanand (Public Activity)",
          url: "https://twitter.com/",
        },
        {
          platform: "Facebook",
          handle: "K.P. Vivekanand Official",
          url: "https://facebook.com/",
        },
        {
          platform: "YouTube",
          handle: "K.P. Vivekanand Constituency Updates",
          url: "https://youtube.com/",
        },
      ],
      officialEmailNotice:
        "For official legislative submissions, contact the Telangana Legislature Secretariat or visit the MLA Camp Office during announced public hearing hours.",
    },
    sources: [
      MASTER_SOURCES.eci2023,
      MASTER_SOURCES.eci2018,
      MASTER_SOURCES.eci2014,
      MASTER_SOURCES.myneta2023Kp,
      MASTER_SOURCES.telanganaAssembly,
      MASTER_SOURCES.sndpFoxSagar,
      MASTER_SOURCES.basthiDawakhanaReport,
      MASTER_SOURCES.theHinduFlyovers,
      MASTER_SOURCES.hansIndiaDrainage,
    ],
  },
  {
    slug: "ktr",
    name: "K.T. Rama Rao (KTR)",
    teluguName: "కల్వకుంట్ల తారక రామారావు",
    currentRole: "Member of the Legislative Assembly (MLA) & Working President, BRS",
    party: "Bharat Rashtra Samithi (BRS)",
    partyRole: "Working President, Bharat Rashtra Samithi",
    constituency: "Sircilla (29)",
    district: "Rajanna Sircilla",
    termsInOffice: "2009 – Present (5 Terms)",
    born: "July 24, 1976, Siddipet, Telangana",
    education:
      "M.Sc. in Biotechnology from University of Pune; MBA in Marketing & E-Commerce from Baruch College, City University of New York (CUNY)",
    image: "/images/leaders/ktr.jpg",
    imageAlt: "Official portrait of K.T. Rama Rao, Working President of BRS",
    portraitFallbackInitials: "KTR",
    shortBio:
      "Kalvakuntla Taraka Rama Rao (KTR) is the Working President of the Bharat Rashtra Samithi and five-time Member of the Legislative Assembly representing Sircilla. Between 2014 and 2023, he served as Telangana's Minister for Information Technology, Electronics & Communications, Municipal Administration & Urban Development (MA&UD), and Industries & Commerce.",
    quote:
      "Telangana's economic resurgence was engineered on world-class industrial policy, pioneering urban mobility, and decentralised regional growth.",
    keyStats: [
      {
        label: "2023 Victory Margin",
        value: "29,687",
        sublabel: "Won against INC in Sircilla (47.28% vote share)",
      },
      {
        label: "Assembly Terms",
        value: "5 Terms",
        sublabel: "Won 2009, 2010 (bypoll), 2014, 2018, 2023",
      },
      {
        label: "Cabinet Tenures",
        value: "2014 – 2023",
        sublabel: "Minister for IT, Industries & Urban Development",
      },
      {
        label: "Party Role",
        value: "Working President",
        sublabel: "Appointed December 2018",
      },
    ],
    biography: [
      {
        title: "Educational and International Career",
        content: [
          "Kalvakuntla Taraka Rama Rao was born on July 24, 1976, to K. Chandrashekar Rao and Shobha Rao. He completed his schooling at St. George's Grammar School, Hyderabad, and earned his Bachelor's degree in Microbiology, Chemistry, and Botany from Nizam College, Osmania University.",
          "He obtained a Master of Science degree in Biotechnology from the University of Pune and subsequently an MBA in Marketing & E-Commerce from Baruch College, City University of New York. Prior to entering public life, he worked in the technology and life sciences sector in the United States for over five years.",
        ],
      },
      {
        title: "Political Trajectory & Sircilla Representation",
        content: [
          "Returning to India in 2006 to participate actively in the Telangana statehood movement under the Telangana Rashtra Samithi (TRS), KTR first contested the Andhra Pradesh Legislative Assembly from the handloom hub of Sircilla in 2009, winning by 171 votes.",
          "During the height of the statehood agitation in 2010, he resigned his seat in solidarity with the demand for separate statehood and was re-elected in the subsequent by-election with an overwhelming margin of over 68,000 votes.",
          "He subsequently retained Sircilla in 2014 (53,038 margin), 2018 (89,009 margin), and December 2023 (29,687 margin), continuously representing the constituency for over 15 years.",
        ],
      },
      {
        title: "Cabinet Stewardship & Urban Transformation",
        content: [
          "As Telangana's Cabinet Minister for IT, Industries, and Municipal Administration from 2014 to 2023, KTR spearheaded industrial policy initiatives including TS-iPASS, attracted marquee global technology headquarters to Hyderabad, created the world's largest innovation campus (T-Hub), and launched the Strategic Road Development Plan (SRDP) delivering dozens of flyovers, underpasses, and cable bridges across Greater Hyderabad.",
        ],
      },
    ],
    constituencyInfo: {
      name: "Sircilla Assembly Constituency",
      number: 29,
      district: "Rajanna Sircilla",
      region: "Northern Telangana",
      majorLocalities: ["Sircilla Town", "Thangallapalli", "Gambhiraopet", "Yellareddypet", "Veernapalli"],
      administrativeBodies: ["Rajanna Sircilla District Collectorate", "Sircilla Municipality"],
      overview:
        "Sircilla is globally recognised as a primary textile and powerloom manufacturing cluster of Telangana. Over the past decade, substantial investments into apparel parks, textile worker welfare, and irrigation via the Kaleshwaram Lift Irrigation network have reshaped the regional economy.",
      administrativeDisclaimer:
        "Constituency 29 boundaries reflect the delimited Assembly segment within Rajanna Sircilla district.",
    },
    elections: KTR_ELECTIONS,
    timeline: [
      {
        id: "ktr-2023-election",
        date: "December 2023",
        year: 2023,
        category: "Legislative",
        title: "Re-elected MLA for Sircilla Constituency",
        summary: "Elected for a fifth consecutive term to the Telangana Legislative Assembly from Sircilla.",
        recordType: "Official Record",
        sourceTitle: "ECI General Election Results 2023",
        sourcePublisher: "Election Commission of India",
        sourceUrl: "https://results.eci.gov.in/",
      },
      {
        id: "ktr-2023-opposition-role",
        date: "January 2024",
        year: 2024,
        category: "Party Activity",
        title: "Working President Strategic Review of BRS Parliamentary Readiness",
        summary: "Conducted statewide parliamentary preparatory conventions across Telangana districts.",
        recordType: "Media Report",
        sourceTitle: "BRS Working President holds key review meetings",
        sourcePublisher: "Telangana Today",
        sourceUrl: "https://telanganatoday.com/",
      },
      {
        id: "ktr-2022-thub-phase2",
        date: "June 2022",
        year: 2022,
        category: "Civic Oversight",
        title: "Inauguration of T-Hub Phase II World's Largest Incubation Center",
        summary: "Inaugurated the 5,82,000 sq.ft innovation campus in Raidurgam, Hyderabad.",
        recordType: "Official Record",
        sourceTitle: "Telangana Information Technology Annual Report 2022",
        sourcePublisher: "ITE&C Department, Government of Telangana",
        sourceUrl: "https://www.telangana.gov.in/",
      },
    ],
    contact: {
      officeAddress: "BRS Central Office, Telangana Bhavan, Road No. 12, Banjara Hills, Hyderabad, Telangana - 500034",
      constituencyOffice: "MLA Camp Office, Sircilla Town, Rajanna Sircilla District, Telangana",
      verifiedSocialHandles: [
        {
          platform: "Twitter / X",
          handle: "@KTRBRS (Official)",
          url: "https://twitter.com/KTRBRS",
        },
      ],
    },
    sources: [
      MASTER_SOURCES.eci2023,
      MASTER_SOURCES.eci2018,
      MASTER_SOURCES.mynetaKtr,
      MASTER_SOURCES.telanganaAssembly,
    ],
  },
  {
    slug: "harish-rao",
    name: "T. Harish Rao",
    teluguName: "తన్నీరు హరీశ్ రావు",
    currentRole: "Member of the Legislative Assembly (MLA) & Senior BRS Leader",
    party: "Bharat Rashtra Samithi (BRS)",
    partyRole: "Senior Politburo Member & Parliamentary Strategist",
    constituency: "Siddipet (28)",
    district: "Siddipet",
    termsInOffice: "2004 – Present (7 Consecutive Terms)",
    born: "June 3, 1972, Chintamadaka, Siddipet, Telangana",
    education: "Graduate in Political Science / Arts from Osmania University",
    image: "/images/leaders/harish-rao.jpg",
    imageAlt: "Official portrait of T. Harish Rao, MLA representing Siddipet",
    portraitFallbackInitials: "THR",
    shortBio:
      "Thanneeru Harish Rao is a senior leader of the Bharat Rashtra Samithi and seven-time Member of the Legislative Assembly representing Siddipet. Renowned for his administrative acumen, he formerly served as Telangana's Minister for Finance, Health, Medical & Family Welfare (2019–2023) and Minister for Major Irrigation (2014–2018).",
    quote:
      "Grassroots public service requires relentless field presence, precision project execution, and unwavering dedication to public healthcare and agriculture.",
    keyStats: [
      {
        label: "2023 Victory Margin",
        value: "82,308",
        sublabel: "Won with 58.17% vote share in Siddipet",
      },
      {
        label: "Consecutive Victories",
        value: "7 Victories",
        sublabel: "Undefeated since 2004 by-election",
      },
      {
        label: "Cabinet Portfolios",
        value: "Finance & Health",
        sublabel: "Led Telangana Finance & Health Ministries (2019-2023)",
      },
      {
        label: "Healthcare Expansion",
        value: "All Districts",
        sublabel: "Oversaw setup of Government Medical Colleges across Telangana",
      },
    ],
    biography: [
      {
        title: "Early Life and Entry into the Telangana Movement",
        content: [
          "Thanneeru Harish Rao was born on June 3, 1972, in Chintamadaka village in Siddipet district, Telangana. He was drawn into public service and the grassroots Telangana statehood agitation from a young age alongside his uncle K. Chandrashekar Rao.",
          "He pursued his graduation in Hyderabad from Osmania University, actively participating in student welfare and rural advocacy.",
        ],
      },
      {
        title: "Seven-Term Unbroken Record in Siddipet",
        content: [
          "Harish Rao entered the Legislative Assembly following the 2004 by-election for Siddipet, winning by a significant majority. Over the subsequent two decades, he established an unprecedented winning streak, winning by-elections in 2008 and 2010, followed by general assembly victories in 2009, 2014, 2018, and 2023.",
          "In the 2018 elections, he secured a record margin of 1,18,699 votes, and in December 2023, he retained Siddipet by 82,308 votes, polling 1,05,514 votes (58.17%).",
        ],
      },
      {
        title: "Key Ministerial Tenures: Irrigation, Finance, and Health",
        content: [
          "Between 2014 and 2018, as Minister for Irrigation, he spearheaded the engineering execution of the Kaleshwaram Lift Irrigation Project and the revival of over 46,000 minor irrigation village tanks under Mission Kakatiya.",
          "Between 2019 and 2023, as Minister for Finance and Health, he presented balanced state budgets and executed the policy mandate of establishing a government medical college in every single district of Telangana, significantly expanding state hospital bed capacity and tertiary healthcare access.",
        ],
      },
    ],
    constituencyInfo: {
      name: "Siddipet Assembly Constituency",
      number: 28,
      district: "Siddipet",
      region: "Central Telangana",
      majorLocalities: ["Siddipet Municipality", "Chinnakodur", "Nanganur", "Narayanraopet"],
      administrativeBodies: ["Siddipet District Collectorate", "Siddipet Municipality"],
      overview:
        "Siddipet has evolved as a national benchmark for urban cleanliness, solar energy adoption, underground drainage, and modern medical infrastructure. It features state-of-the-art government medical college facilities and comprehensive lake restorations.",
      administrativeDisclaimer:
        "Assembly constituency 28 data corresponds to the Siddipet legislative jurisdiction.",
    },
    elections: HARISH_RAO_ELECTIONS,
    timeline: [
      {
        id: "harish-2023-election",
        date: "December 2023",
        year: 2023,
        category: "Legislative",
        title: "Seventh Consecutive Assembly Victory in Siddipet",
        summary: "Re-elected to Telangana Legislative Assembly with an 82,308-vote majority.",
        recordType: "Official Record",
        sourceTitle: "ECI 2023 Telangana Results Report",
        sourcePublisher: "Election Commission of India",
        sourceUrl: "https://results.eci.gov.in/",
      },
      {
        id: "harish-2023-health-expansion",
        date: "September 2023",
        year: 2023,
        category: "Public Welfare",
        title: "Simultaneous Inauguration of 9 Government Medical Colleges",
        summary: "Oversaw the academic inauguration of 9 district government medical colleges across Telangana.",
        recordType: "Official Record",
        sourceTitle: "Department of Health & Family Welfare Press Release",
        sourcePublisher: "Government of Telangana",
        sourceUrl: "https://www.telangana.gov.in/",
      },
      {
        id: "harish-2024-budget-intervention",
        date: "July 2024",
        year: 2024,
        category: "Legislative",
        title: "Floor Leader Intervention on State Financial White Paper",
        summary: "Presented detailed fiscal counter-analysis during Telangana Assembly budget debates.",
        recordType: "Official Record",
        sourceTitle: "Telangana Legislative Assembly Proceedings",
        sourcePublisher: "Assembly Secretariat",
        sourceUrl: "https://www.telangana.gov.in/",
      },
    ],
    contact: {
      officeAddress: "MLA Camp Office, Siddipet Town, Siddipet District, Telangana - 502103",
      constituencyOffice: "Siddipet Legislative Secretariat, Telangana",
      verifiedSocialHandles: [
        {
          platform: "Twitter / X",
          handle: "@trsharish (Official)",
          url: "https://twitter.com/trsharish",
        },
      ],
    },
    sources: [
      MASTER_SOURCES.eci2023,
      MASTER_SOURCES.eci2018,
      MASTER_SOURCES.mynetaHarishRao,
      MASTER_SOURCES.telanganaAssembly,
    ],
  },
  {
    slug: "kcr",
    name: "K. Chandrashekar Rao (KCR)",
    teluguName: "కల్వకుంట్ల చంద్రశేఖర రావు",
    currentRole: "President, Bharat Rashtra Samithi (BRS) & MLA Gajwel",
    party: "Bharat Rashtra Samithi (BRS)",
    partyRole: "Founder & Party President",
    constituency: "Gajwel (33)",
    district: "Siddipet",
    termsInOffice: "1985 – Present (Legislative Career spanning 4 Decades)",
    born: "February 17, 1954, Chintamadaka, Siddipet, Telangana",
    education: "Master of Arts (M.A.) in Telugu Literature from Osmania University",
    image: "/images/leaders/kcr.jpg",
    imageAlt: "Official portrait of K. Chandrashekar Rao, Founder President of BRS",
    portraitFallbackInitials: "KCR",
    shortBio:
      "Kalvakuntla Chandrashekar Rao (KCR) is the founder and President of the Bharat Rashtra Samithi (BRS) and the first Chief Minister of Telangana, serving two full terms from June 2, 2014, to December 3, 2023. He currently represents Gajwel in the Telangana Legislative Assembly and serves as the Leader of Opposition.",
    quote:
      "The formation of Telangana was a triumph of thirty years of collective struggle, cultural identity, and sovereign self-determination.",
    keyStats: [
      {
        label: "First Chief Minister",
        value: "2014 – 2023",
        sublabel: "Led Telangana for nearly a decade after state formation",
      },
      {
        label: "Party President",
        value: "Since 2001",
        sublabel: "Founded Telangana Rashtra Samithi (TRS / BRS)",
      },
      {
        label: "Current Seat",
        value: "Gajwel (33)",
        sublabel: "Elected MLA in 2014, 2018, and 2023",
      },
      {
        label: "Key Programs",
        value: "Rythu Bandhu & Kaleshwaram",
        sublabel: "Pioneered nation-first direct farmer investment support",
      },
    ],
    biography: [
      {
        title: "Telangana Statehood Movement Leadership",
        content: [
          "Kalvakuntla Chandrashekar Rao founded the Telangana Rashtra Samithi (TRS) on April 27, 2001, resigning from his post as Deputy Speaker of the Andhra Pradesh Legislative Assembly to dedicate himself entirely to the demand for separate statehood for Telangana.",
          "Over 13 years of non-violent political agitation, coalitions, and mass mobilisations, culminated in his historic 11-day fast unto death in November-December 2009, leading to the central government's historic declaration on December 9, 2009, and the eventual passage of the Andhra Pradesh Reorganisation Act in 2014.",
        ],
      },
      {
        title: "Chief Ministership of Telangana (2014–2023)",
        content: [
          "Sworn in as Telangana's first Chief Minister on June 2, 2014, KCR governed for two consecutive terms after winning re-election in 2018 with a 88-seat landslide. His administration pioneered landmark welfare schemes including Rythu Bandhu (direct farm investment support), Rythu Bima (farmer life insurance), Mission Bhagiratha (piped potable water to every rural household), and Mission Kakatiya.",
        ],
      },
    ],
    constituencyInfo: {
      name: "Gajwel Assembly Constituency",
      number: 33,
      district: "Siddipet",
      region: "Central Telangana",
      majorLocalities: ["Gajwel Town", "Pragnapur", "Jagadevpur", "Markook", "Mulug"],
      administrativeBodies: ["Gajwel Area Development Authority (GADA)", "Siddipet District Collectorate"],
      overview:
        "Gajwel is an agricultural and educational hub transformed through the Gajwel Area Development Authority (GADA), featuring integrated office complexes, educational hubs, and horticultural research centers.",
      administrativeDisclaimer: "Data corresponds to the Gajwel Assembly constituency.",
    },
    elections: [
      {
        year: 2023,
        electionType: "Telangana Assembly",
        constituency: "Gajwel (33)",
        party: "Bharat Rashtra Samithi (BRS)",
        result: "Won",
        votesReceived: 111684,
        voteSharePercent: 48.06,
        runnerUpName: "Eatala Rajender",
        runnerUpParty: "Bharatiya Janata Party (BJP)",
        runnerUpVotes: 91153,
        runnerUpVoteSharePercent: 39.23,
        victoryMargin: 20531,
        marginPercent: 8.83,
        sourceTitle: "ECI 2023 Assembly Results",
        sourceUrl: "https://results.eci.gov.in/",
      },
      {
        year: 2018,
        electionType: "Telangana Assembly",
        constituency: "Gajwel (33)",
        party: "Telangana Rashtra Samithi (TRS / BRS)",
        result: "Won",
        votesReceived: 125444,
        voteSharePercent: 60.45,
        runnerUpName: "Vanteru Pratap Reddy",
        runnerUpParty: "Indian National Congress (INC)",
        runnerUpVotes: 73954,
        runnerUpVoteSharePercent: 35.64,
        victoryMargin: 51490,
        marginPercent: 24.81,
        sourceTitle: "ECI 2018 Assembly Results Report",
        sourceUrl: "https://eci.gov.in/statistical-report/statistical-reports/",
      },
    ],
    timeline: [
      {
        id: "kcr-2023-election",
        date: "December 2023",
        year: 2023,
        category: "Legislative",
        title: "Re-elected MLA for Gajwel Assembly Segment",
        summary: "Elected for third term from Gajwel; elected Leader of Opposition in the 3rd Telangana Assembly.",
        recordType: "Official Record",
        sourceTitle: "ECI General Election 2023 Data",
        sourcePublisher: "Election Commission of India",
        sourceUrl: "https://results.eci.gov.in/",
      },
      {
        id: "kcr-2022-brs-launch",
        date: "October 2022",
        year: 2022,
        category: "Party Activity",
        title: "National Expansion: Transformation into Bharat Rashtra Samithi (BRS)",
        summary: "Formally renamed TRS to BRS to expand developmental outreach nationally.",
        recordType: "Official Record",
        sourceTitle: "Election Commission of India Political Party Registration Records",
        sourcePublisher: "ECI",
        sourceUrl: "https://eci.gov.in/",
      },
    ],
    contact: {
      officeAddress: "BRS Central Office, Telangana Bhavan, Road No. 12, Banjara Hills, Hyderabad - 500034",
      constituencyOffice: "MLA Camp Office, Gajwel Town, Siddipet District, Telangana",
      verifiedSocialHandles: [
        {
          platform: "Twitter / X",
          handle: "@BRSparty (Official Party Handle)",
          url: "https://twitter.com/BRSparty",
        },
      ],
    },
    sources: [
      MASTER_SOURCES.eci2023,
      MASTER_SOURCES.eci2018,
      MASTER_SOURCES.telanganaAssembly,
    ],
  },
  {
    slug: "revanth-reddy",
    name: "A. Revanth Reddy",
    teluguName: "ఎనుముల రేవంత్ రెడ్డి",
    currentRole: "Chief Minister of Telangana & MLA Kodangal",
    party: "Indian National Congress (INC)",
    partyRole: "President, Telangana Pradesh Congress Committee (TPCC)",
    constituency: "Kodangal (71)",
    district: "Vikarabad",
    termsInOffice: "2023 – Present (Chief Minister); 2009, 2014, 2023 (MLA); 2019–2023 (MP)",
    born: "November 8, 1969, Kondareddypally, Nagarkurnool, Telangana",
    education: "Bachelor of Arts (B.A.) from A.V. College, Osmania University (1992)",
    image: "/images/leaders/revanth-reddy.jpg",
    imageAlt: "Official portrait of A. Revanth Reddy, Chief Minister of Telangana",
    portraitFallbackInitials: "ARR",
    shortBio:
      "Anumula Revanth Reddy is the 2nd Chief Minister of Telangana, sworn into office on December 7, 2023, following the Indian National Congress victory in the 2023 Assembly elections. A seasoned legislator and mass orator, he represents the Kodangal constituency in Vikarabad district.",
    quote:
      "Democratic governance must center on citizen empowerment, agricultural resilience, and transparent public accountability across all Telangana districts.",
    keyStats: [
      {
        label: "Chief Minister",
        value: "Sworn Dec 2023",
        sublabel: "2nd Chief Minister of Telangana State",
      },
      {
        label: "2023 Victory Margin",
        value: "32,532",
        sublabel: "Won with 55.04% vote share in Kodangal",
      },
      {
        label: "Parliamentary Mandate",
        value: "Malkajgiri MP (2019)",
        sublabel: "Represented India's largest parliamentary constituency",
      },
      {
        label: "Key Guarantees",
        value: "Abhaya Hastham",
        sublabel: "Mahalakshmi free RTC bus travel, Rythu Bharosa, Gruha Jyothi",
      },
    ],
    biography: [
      {
        title: "Early Life and Educational Background",
        content: [
          "Anumula Revanth Reddy was born on November 8, 1969, in Kondareddypally village in Nagarkurnool district of Telangana. He pursued his higher education in Hyderabad, graduating with a Bachelor of Arts degree from the historic Andhra Vidyalaya College of Arts, Science and Commerce (A.V. College), affiliated with Osmania University.",
          "During his student years, he was active in student governance, later participating in rural grassroots mobilization across southern Telangana.",
        ],
      },
      {
        title: "Legislative Career and Parliamentary Representation",
        content: [
          "Revanth Reddy entered active politics as an independent MLC candidate in 2007. In 2009 and 2014, he was elected to the Andhra Pradesh and subsequent Telangana Legislative Assemblies representing Kodangal.",
          "In the 2019 Lok Sabha elections, he contested and won the Malkajgiri parliamentary seat—the largest Lok Sabha constituency in India by electorate size—securing a pivotal national presence.",
          "In 2021, the Congress leadership appointed him President of the Telangana Pradesh Congress Committee (TPCC). He led the party's statewide election campaign in November 2023, securing a 64-seat legislative majority and reclaiming Kodangal with an impressive 32,532-vote margin.",
        ],
      },
    ],
    constituencyInfo: {
      name: "Kodangal Assembly Constituency",
      number: 71,
      district: "Vikarabad",
      region: "Southern Telangana",
      majorLocalities: ["Kodangal Town", "Bomraspet", "Doulthabad", "Maddur", "Kosgi"],
      administrativeBodies: ["Vikarabad District Collectorate", "Kodangal Area Development Authority (KADA)"],
      overview:
        "Kodangal is a predominantly agricultural constituency on the border of Telangana and Karnataka, currently witnessing focused regional development via the Kodangal Area Development Authority (KADA).",
      administrativeDisclaimer: "Data corresponds to the Kodangal legislative assembly segment.",
    },
    elections: [
      {
        year: 2023,
        electionType: "Telangana Assembly",
        constituency: "Kodangal (71)",
        party: "Indian National Congress (INC)",
        result: "Won",
        votesReceived: 107429,
        voteSharePercent: 55.04,
        runnerUpName: "Patnam Narender Reddy",
        runnerUpParty: "Bharat Rashtra Samithi (BRS)",
        runnerUpVotes: 74897,
        runnerUpVoteSharePercent: 38.37,
        victoryMargin: 32532,
        marginPercent: 16.67,
        sourceTitle: "ECI 2023 General Election Results",
        sourceUrl: "https://results.eci.gov.in/",
      },
    ],
    timeline: [
      {
        id: "revanth-2023-swearing-in",
        date: "December 7, 2023",
        year: 2023,
        category: "Legislative",
        title: "Sworn in as Chief Minister of Telangana",
        summary: "Took oath of office at LB Stadium, Hyderabad, as the 2nd Chief Minister of Telangana.",
        recordType: "Official Record",
        sourceTitle: "Gazette Notification, General Administration Department",
        sourcePublisher: "Government of Telangana",
        sourceUrl: "https://www.telangana.gov.in/",
      },
      {
        id: "revanth-2023-kodangal-win",
        date: "December 3, 2023",
        year: 2023,
        category: "Legislative",
        title: "Re-elected MLA for Kodangal Assembly Segment",
        summary: "Won Kodangal with 1,07,429 votes, defeating the incumbent BRS nominee by 32,532 votes.",
        recordType: "Official Record",
        sourceTitle: "ECI Statistical Report 2023",
        sourcePublisher: "Election Commission of India",
        sourceUrl: "https://results.eci.gov.in/",
      },
    ],
    contact: {
      officeAddress: "Chief Minister's Office, Dr. B.R. Ambedkar Telangana State Secretariat, Hyderabad - 500022",
      constituencyOffice: "MLA Camp Office, Kodangal Town, Vikarabad District, Telangana",
      verifiedSocialHandles: [
        {
          platform: "Twitter / X",
          handle: "@revanth_anumula (Official)",
          url: "https://twitter.com/revanth_anumula",
        },
      ],
    },
    sources: [
      MASTER_SOURCES.eci2023,
      MASTER_SOURCES.telanganaAssembly,
    ],
  },
];
