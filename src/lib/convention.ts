import { OFFICIAL_REGISTRATION_URL } from "./tickets";

export const CONVENTION = {
  name: "AAK Annual Convention 2026",
  theme: "Shifting the Built Environment from Fragility to Resilience",
  dates: "16 – 19 September 2026",
  isoStart: "2026-09-16",
  isoEnd: "2026-09-19",
  venue: "Diamonds Leisure Beach & Golf Resort",
  location: "Diani, Kwale County, Kenya",
  registrationUrl: OFFICIAL_REGISTRATION_URL,
  organiser: "Architectural Association of Kenya",
} as const;

export type Session = {
  id: string;
  day: string;
  date: string;
  label: string;
  title: string;
  summary: string;
  items: { time: string; title: string; detail?: string }[];
};

export const SESSIONS: Session[] = [
  {
    id: "session-one",
    day: "Day 01",
    date: "Wednesday, 16 September 2026",
    label: "Session One",
    title: "Arrival, Golf & Community Engagement",
    summary:
      "Arrival, registration and community work ahead of the Convention proper.",
    items: [
      { time: "All day", title: "Arrival and Registration", detail: "AAK Secretariat" },
      { time: "All day", title: "Charity Golf Tournament", detail: "AAK Secretariat" },
      {
        time: "1300–1500",
        title: "Grow A Classroom Mentorship",
        detail:
          "Mabokoni Primary School — school pupils' awards and certificates. AAK Governing Council and delegates, Mary Ngaruiya / Alex Otieno",
      },
    ],
  },
  {
    id: "session-two",
    day: "Day 02",
    date: "Thursday, 17 September 2026",
    label: "Sessions Two & Three",
    title: "Official Opening, Climate Action, Sustainability, Policy & Urban Governance",
    summary:
      "The Official Opening Ceremony and keynote open the day, followed by nature-based solutions and circular materials; devolution, urban governance and the Built Environment Baraza after lunch, closing with the Opening Cocktail in the evening.",
    items: [
      {
        time: "0800–0900",
        title: "Delegates' Code Scanning",
        detail: "Early bird gifts and entertainment — AAK Secretariat Partner + MC Albert Kipruto",
      },
      {
        time: "0900–0910",
        title: "Welcome Remarks",
        detail: "Arch. George A. Ndege, President, Architectural Association of Kenya",
      },
      {
        time: "0910–0920",
        title: "International Body Remarks",
        detail: "QS Audily Chatora, President, Zimbabwe Institute of Quantity Surveyors (ZIQS)",
      },
      {
        time: "0930–0950",
        title: "Keynote Presentation",
        detail: "H.E. Fatuma Achani, Governor, Kwale County (TBC)",
      },
      {
        time: "0950–1010",
        title: "Presentation 1: Nature Based Solutions as a Tool for Resilience in the Built Environment",
        detail: "Dr. Land. Arch. Sunday Abuje",
      },
      {
        time: "1010–1030",
        title:
          "Presentation 2: Beyond Green Buildings — Circular Material as the Next Frontier of Urban Resilience in Ecosystems in Africa",
        detail: "Roy Githaiga, M.Arch.",
      },
      {
        time: "1030–1050",
        title: "Plenary and Q&A",
        detail:
          "Panelists: Roy Githaiga, M.Arch. & Dr. Land. Arch. Sunday Abuje. Discussant: Arch. (Dr.) Martin Mbidhi. Rapporteurs: L. Arch. Brenda Waruinu & ID. Jacinta Serem",
      },
      { time: "1050–1100", title: "Partner Message", detail: "SIKA Kenya Ltd." },
      {
        time: "1100–1120",
        title: "Health Break",
        detail: "Exhibition footfall (dedicated networking spaces) & prize surprise",
      },
      {
        time: "1120–1220",
        title: "Workshop: Architecture Otherwise",
        detail: "ADC Fellowship, MASS Design Team. Rapporteurs: Grad. Eng. Matilda Nimatsutsu & Jacinta Serem",
      },
      {
        time: "1220–1230",
        title: "Platinum Partner Presentation",
        detail: "Tile & Carpet Centre Ltd. (TBC)",
      },
      {
        time: "1230–1250",
        title:
          "Presentation 1: Devolution Has Fragmented Urban Governance in Kenya — Legislative Layering, Coordinated Resilience Planning, and the Case of the Nairobi Metropolitan Region",
        detail: "Pln. Simon Kamau",
      },
      {
        time: "1250–1310",
        title: "Presentation 2: Urban Rental Housing — The Missing Lever in City Climate Action, A Policy Brief",
        detail: "Dr. Linda Gichuyia",
      },
      {
        time: "1310–1330",
        title: "Plenary and Q&A",
        detail:
          "Panelists: Pln. Simon Kamau & Dr. Linda Gichuyia. Discussant: Pln. Christine Muchiri. Rapporteurs: Ms. Mercy Ateka & Ms. Lucy Kimani",
      },
      { time: "1330–1430", title: "Lunch Break" },
      {
        time: "1430–1600",
        title: "Built Environment Baraza",
        detail:
          "Discussion on outcomes of the survey on practice in the Built Environment by Association / Institute presidents, regulatory bodies and members of the various professions. Discussants: V. Gikonyo Gitonga. Rapporteurs: Alex Otieno",
      },
      { time: "1900–2200", title: "Opening Cocktail", detail: "Partner: Elegant Fittings" },
    ],
  },
  {
    id: "session-four",
    day: "Day 03",
    date: "Friday, 18 September 2026",
    label: "Sessions Four & Five",
    title: "People, Place, Innovation & the Future of Construction",
    summary:
      "Cultural anchors and community resilience, then material logic and construction technology — closing with the Build Tour of Kwale and the Gala Dinner.",
    items: [
      {
        time: "0800–0900",
        title: "Delegates' Code Scanning",
        detail: "Early bird gifts and entertainment — AAK Secretariat Partner + MC",
      },
      {
        time: "0900–0930",
        title: "Guest Presentation",
        detail: "Dr. Margarita Garfias Royo, University College London",
      },
      {
        time: "0930–0950",
        title: "Presentation 3: From Sophistication to Stigma — Reclaiming the Swahili Urban Legacy for a Resilient Kenya",
        detail: "Mohammed Ali Mwenje, Curator, National Museums of Kenya, Lamu Museums and Lamu World Heritage Site",
      },
      {
        time: "0950–1010",
        title: "Presentation 4: Architecture that Anticipates Change — Lessons in Resilience from African Architectural Traditions",
        detail: "Jason Muthamia Mwenda",
      },
      {
        time: "1010–1040",
        title: "Panel and Q&A",
        detail:
          "Panelists: Mohammed Ali Mwenje & Jason Muthamia Mwenda. Discussant: ID. Jacinta Serem. Rapporteurs: L. Arch. Brenda Waruinu & Ms. Mercy Ateka",
      },
      {
        time: "1040–1110",
        title: "Health Break",
        detail: "Exhibition footfall, dedicated networking spaces & prize surprise. Quiz & gift",
      },
      { time: "1110–1120", title: "Partner Message", detail: "Elegant Fittings" },
      {
        time: "1120–1140",
        title: "Presentation 5: The Role of Material Logic on Spatial Outcomes in Kenyan Jua Kalis",
        detail: "CPM. Maria Wanjiku Gicheha — a case of Thika Kigandaini",
      },
      {
        time: "1140–1200",
        title: "Presentation 6: Embracing Innovative Construction Material for Resilient Road Infrastructure Surfacing",
        detail: "Eng. Howard M'mayi",
      },
      {
        time: "1200–1240",
        title: "Panel and Q&A",
        detail:
          "Panelists: CPM. Maria Wanjiku Gicheha & Eng. Howard M'mayi. Discussant: QS. David Aganyo Nyangau. Rapporteurs: Ms. Lucy Kimani & Grad. Eng. Matilda Nimatsutsu",
      },
      {
        time: "1240–1300",
        title: "Call to Action: Rapporteur General Report",
        detail: "Arch. Michael Mathenge — delegation photograph",
      },
      { time: "1300–1400", title: "Lunch Break" },
      {
        time: "1400–1800",
        title: "Build Tour of Kwale",
        detail:
          "AAK Coast Branch — Ukunda Airport and Mwache Dam. Catherine Kiruku (BDM). Rapporteurs: Alex Otieno & Grad. Eng. Matilda Nimatsutsu",
      },
      {
        time: "1400–1800",
        title: "Team Building",
        detail: "Water polo and beach volleyball — ID Jacinta Serem & Fiona Apanga",
      },
      { time: "1800–1900", title: "Gala Dinner Preparation" },
      {
        time: "1900–Late",
        title: "Closing Gala Dinner",
        detail: "Charity Golf Tournament award ceremony and Grow A Classroom Student Design Competition awards",
      },
    ],
  },
  {
    id: "post-convention",
    day: "Day 04",
    date: "Saturday, 19 September 2026",
    label: "Post-Convention",
    title: "Build Tours",
    summary: "An optional day on the coast: marine conservation and coastal heritage.",
    items: [
      {
        time: "All day",
        title: "Kisite Mpunguti Marine National Park / Wasini Island",
        detail: "Build Tour — Catherine Kiruku (BDM). Rapporteurs: Alex Otieno",
      },
    ],
  },
];

export const SUBTHEMES = [
  {
    n: "01",
    title: "Climate Action & Sustainability",
    body: "Climate-responsive architecture, adaptive reuse and material innovation, paired with nature-based solutions — green infrastructure, water-sensitive landscapes and ecological urbanism — that strengthen environmental and urban resilience.",
  },
  {
    n: "02",
    title: "Policy, Urban Governance & Regulatory Reform",
    body: "Land-use planning, density management and institutional reform for resilient cities, alongside resilient structural design, durable infrastructure networks and disaster-resistant engineering.",
  },
  {
    n: "03",
    title: "People, Place & Community Resilience",
    body: "Affordable housing and inclusive urban development for equitable communities, and wellness-oriented, human-centred interior design that supports adaptability and social cohesion.",
  },
  {
    n: "04",
    title: "Innovation, Technology & the Future of Construction",
    body: "Lifecycle costing, sustainable procurement and risk management, plus adaptive project delivery models that let the sector respond to changing economic and environmental conditions.",
  },
];
