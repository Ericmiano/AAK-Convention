export const OFFICIAL_REGISTRATION_URL =
  "https://members.aak.or.ke/eventdetailv2?eid=baM8JnQ3+AaNamasUK2rTg==";

export type Ticket = {
  id: string;
  name: string;
  price: number;
  unit: string;
  note: string;
  status: "open" | "closed";
  featured?: boolean;
};

/** Tiers as listed on the official AAK members registration page. */
export const TICKETS: Ticket[] = [
  {
    id: "member",
    name: "AAK Member",
    price: 35000,
    unit: "per delegate",
    note: "Full access to all five sessions, exhibition, opening cocktail and gala dinner.",
    status: "open",
    featured: true,
  },
  {
    id: "non-member",
    name: "Non-Member",
    price: 45000,
    unit: "per delegate",
    note: "Open to built-environment professionals and partners outside AAK membership.",
    status: "open",
  },
  {
    id: "student",
    name: "Fresh Graduates & Students",
    price: 18000,
    unit: "per delegate",
    note: "Valid student ID or proof of graduation within the last two years required.",
    status: "open",
  },
  {
    id: "group",
    name: "Group of 5 — AAK Members",
    price: 157500,
    unit: "for five delegates",
    note: "KES 31,500 per delegate — the best rate for practices attending together.",
    status: "open",
  },
  {
    id: "onsite",
    name: "Onsite Payment",
    price: 50000,
    unit: "per delegate",
    note: "Pay at the venue on arrival — register in advance to lock in a lower rate.",
    status: "open",
  },
  {
    id: "early-bird",
    name: "Early Bird",
    price: 25000,
    unit: "per delegate",
    note: "Sold out.",
    status: "closed",
  },
  {
    id: "regular",
    name: "Regular (Group of 5)",
    price: 30000,
    unit: "per delegate",
    note: "Sold out.",
    status: "closed",
  },
];

export const REGISTRATION_FACTS = [
  { k: "Format", v: "Physical attendance" },
  { k: "Currency", v: "Kenya Shillings (KES)" },
  { k: "Payment", v: "AAK members portal" },
  { k: "Refunds", v: "Non-refundable (substitutions permitted)" },
];

/** Per-regulator CPD point allocation, as published on the official AAK CPD poster. */
export const CPD_POINTS = [
  { body: "BORAQS", points: 10 },
  { body: "PPRB", points: 10 },
  { body: "EBK", points: 16 },
];

export const REGISTRATION_INCLUDES = [
  "All five plenary sessions and the Built Environment Baraza",
  "Workshops, exhibition access and networking spaces",
  "Opening ceremony cocktail on the Diani shoreline",
  "Daily lunches and health breaks at the resort",
  "Closing gala dinner and student design competition awards",
  "Delegate pack, conference badge and CPD certification",
];

export const REGISTRATION_STEPS = [
  {
    n: "01",
    title: "Choose your delegate category",
    body: "Member, non-member, student or a group of five. Group bookings give the lowest per-delegate rate.",
  },
  {
    n: "02",
    title: "Register on the AAK members portal",
    body: "Registration and payment are handled on members.aak.or.ke — the official event page for the Convention.",
  },
  {
    n: "03",
    title: "Book your own stay in Diani",
    body: "Accommodation is each delegate's personal responsibility — book directly with Diamonds Leisure Beach & Golf Resort or any nearby hotel of your choice.",
  },
  {
    n: "04",
    title: "Pick your build tours",
    body: "Confirm the Kwale build tour and the optional post-Convention tours when you check in at registration.",
  },
];

export type VenueContact = {
  name: string;
  phone: string;
  email: string;
  website: string;
};

/** Official contact details for the convention venue's own resort, for delegates booking directly. */
export const VENUE_CONTACT: VenueContact = {
  name: "Diamonds Leisure Beach & Golf Resort",
  phone: "+254 716 430 670",
  email: "info.diamondsleisure@planhotel.com",
  website: "leisurebeachgolfresort.diamondsresorts.com",
};

export const ACCOMMODATION = [
  {
    name: "Garden View Room",
    board: "All inclusive",
    body: "Makuti-shaded blocks set back in the tropical gardens, a two-minute walk from the conference wing.",
    features: ["Twin or double", "Air conditioned", "Private terrace"],
  },
  {
    name: "Ocean View Room",
    board: "All inclusive",
    body: "Upper-floor rooms facing the Indian Ocean, with morning light across the reef and the resort palms.",
    features: ["King bed", "Sea-facing balcony", "Nearest the plenary hall"],
  },
  {
    name: "Family / Sharing Suite",
    board: "All inclusive",
    body: "Connected rooms suited to delegates travelling with family or practices sharing a group booking.",
    features: ["Sleeps 4", "Two bathrooms", "Lounge area"],
  },
];

export type NearbyStayId =
  | "baobabBeach"
  | "swahiliBeach"
  | "papillonLagoonReef"
  | "safariBeachHotel"
  | "dianiSeaLodge"
  | "dianiReef"
  | "coralBeachResort"
  | "yuResortMsambweni"
  | "simbaOryxCottages"
  | "shalomCottages"
  | "dianiCottages"
  | "aquaResortApartments"
  | "majiBeach"
  | "marikekaHotel"
  | "zubeidaVillas";

export type NearbyStay = {
  id: NearbyStayId;
  name: string;
  type: string;
  distance: string;
  price: string;
  website?: string;
  phone?: string;
  email?: string;
  comment: string;
};

/**
 * Alternative accommodation near the venue, for delegates booking
 * independently now that Diamonds Leisure Beach & Golf Resort is fully
 * booked for the Convention dates. Distances are measured from Diamonds
 * Leisure Beach & Golf Resort; prices are per person per night in KES.
 * Contact details from each property's official site or, where a property
 * has no website, its direct phone/email.
 */
export const NEARBY_STAYS: NearbyStay[] = [
  {
    id: "baobabBeach",
    name: "Baobab Beach Resort & Spa",
    type: "5-star hotel",
    distance: "6 km",
    price: "22,950 – 48,795",
    website: "baobab-beach-resort.com",
    comment: "Availability from 18 September. Minimum stay of 2 nights.",
  },
  {
    id: "swahiliBeach",
    name: "Swahili Beach Resort",
    type: "5-star hotel",
    distance: "3 km",
    price: "40,200",
    website: "swahilibeach.com",
    comment: "Available for the Convention dates.",
  },
  {
    id: "papillonLagoonReef",
    name: "Papillon Lagoon Reef",
    type: "3-star hotel",
    distance: "4 km",
    price: "9,300 – 18,600",
    website: "papillonlagoonreef.com",
    comment: "All meals charged separately.",
  },
  {
    id: "safariBeachHotel",
    name: "Safari Beach Hotel",
    type: "3-star hotel",
    distance: "4 km",
    price: "11,700 – 19,700",
    website: "safaribeachdiani.co.ke",
    comment: "Rates vary by occupancy and meal plan.",
  },
  {
    id: "dianiSeaLodge",
    name: "Diani Sea Lodge",
    type: "4-star hotel",
    distance: "5 km",
    price: "13,000 – 18,000",
    website: "dianisealodge.de",
    comment: "Rates vary by occupancy and meal plan.",
  },
  {
    id: "dianiReef",
    name: "Diani Reef Beach Resort & Spa",
    type: "5-star hotel",
    distance: "0.3 km",
    price: "From 22,620",
    website: "dianireef.com",
    comment: "Rates vary by occupancy and meal plan. The closest property to the venue.",
  },
  {
    id: "coralBeachResort",
    name: "Coral Beach Resort",
    type: "3-star hotel",
    distance: "8 km",
    price: "5,000 – 32,000",
    website: "coralbeachresort.co.ke",
    comment: "Rates vary by room, cottage or villa, occupancy and meal plan.",
  },
  {
    id: "yuResortMsambweni",
    name: "YU Resort Msambweni",
    type: "4-star hotel",
    distance: "22 km",
    price: "12,000 – 24,000",
    website: "yu-resort.africa",
    comment: "Rates vary by occupancy and meal plan.",
  },
  {
    id: "simbaOryxCottages",
    name: "Simba + Oryx Beach Cottages",
    type: "Beach cottages",
    distance: "10 km",
    price: "6,500 – 14,000",
    website: "simba-oryx.ch/en/contakt-en",
    phone: "+254 721 599723",
    email: "simbaoryxoffice@gmail.com",
    comment: "Meals not included.",
  },
  {
    id: "shalomCottages",
    name: "Shalom Cottages",
    type: "Beach cottages",
    distance: "7 km",
    price: "6,800",
    phone: "+254 722 539677",
    comment: "Meals not included. Photos can be viewed on Airbnb.",
  },
  {
    id: "dianiCottages",
    name: "Diani Cottages",
    type: "Cottages — 1, 2 and 6-bedroom apartments",
    distance: "5 km",
    price: "6,000 – 35,000",
    website: "diani-cottages.com",
    comment: "Meals not included.",
  },
  {
    id: "aquaResortApartments",
    name: "Aqua Resort Apartments",
    type: "1 and 2-bedroom apartments",
    distance: "9 km",
    price: "6,000 – 10,000",
    website: "dianiaquaresort.com",
    comment: "Meals not included.",
  },
  {
    id: "majiBeach",
    name: "The Maji Beach Boutique Hotel",
    type: "Boutique hotel",
    distance: "1.5 km",
    price: "45,760 – 53,040",
    website: "the-maji.com",
    comment: "Meals included on half-board and full-board only. Limited space left.",
  },
  {
    id: "marikekaHotel",
    name: "Marikeka Hotel",
    type: "Boutique hotel",
    distance: "3 km",
    price: "9,500 – 17,000",
    website: "marikeka.com",
    comment: "Rates vary by occupancy and meal plan. Single to double occupancy rooms only.",
  },
  {
    id: "zubeidaVillas",
    name: "Zubeida Villas",
    type: "8 villas, 1 to 8 pax each",
    distance: "12 km",
    price: "36,750 – 128,100",
    website: "thezubeida.com",
    comment: "Meals included at an extra cost.",
  },
];

export const RESORT_FACILITIES = [
  "Beachfront on the Diani white-sand shoreline",
  "Conference and plenary hall for 600+ delegates",
  "Exhibition concourse and dedicated networking terraces",
  "Nine-hole golf course used for the Charity Golf Tournament",
  "Three swimming pools, spa and water-sports centre",
  "Beach volleyball and water polo for the team-building afternoon",
];
