import dianiBeachReal from "@/assets/diani-beach-real.webp";
import dianiSunrise from "@/assets/diani-sunrise.webp";
import kisite from "@/assets/kisite.webp";
import kwale from "@/assets/kwale.webp";
import mombasaTerminus from "@/assets/mombasa-terminus.webp";
import ukundaAirport from "@/assets/ukunda-airport.webp";
import wasini from "@/assets/wasini.webp";
import nearbyBaobabBeach from "@/assets/nearby-baobab-beach.jpg";
import nearbySwahiliBeach from "@/assets/nearby-swahili-beach.jpg";
import nearbyPapillonLagoonReef from "@/assets/nearby-papillon-lagoon-reef.jpg";
import nearbySafariBeachHotel from "@/assets/nearby-safari-beach-hotel.jpg";
import nearbyDianiSeaLodge from "@/assets/nearby-diani-sea-lodge.jpg";
import nearbyDianiReef from "@/assets/nearby-diani-reef.jpg";
import nearbyCoralBeachResort from "@/assets/nearby-coral-beach-resort.jpg";
import nearbyYuResortMsambweni from "@/assets/nearby-yu-resort-msambweni.jpg";
import nearbySimbaOryxCottages from "@/assets/nearby-simba-oryx-cottages.jpg";
import nearbyShalomCottages from "@/assets/nearby-shalom-cottages.jpg";
import nearbyDianiCottages from "@/assets/nearby-diani-cottages.jpg";
import nearbyAquaResortApartments from "@/assets/nearby-aqua-resort-apartments.jpg";
import nearbyMajiBeach from "@/assets/nearby-maji-beach.jpg";
import nearbyMarikekaHotel from "@/assets/nearby-marikeka-hotel.jpg";
import nearbyZubeidaVillas from "@/assets/nearby-zubeida-villas.jpg";
import type { NearbyStayId } from "@/lib/tickets";

/**
 * Real photography of the Convention destinations, self-hosted as build
 * assets. Sourced from Wikimedia Commons under CC BY / CC BY-SA licenses —
 * each entry's `credit` names the photographer per the license's
 * attribution requirement.
 */
export const PHOTOS = {
  dianiBeach: {
    url: dianiBeachReal,
    alt: "Diani Beach: white sand, turquoise Indian Ocean shallows and palms along the Kwale shoreline",
    credit: "Bingar1234 / Wikimedia Commons, CC BY-SA 4.0",
  },
  dianiSunrise: {
    url: dianiSunrise,
    alt: "Sunrise over the Indian Ocean at Diani Beach, Kenya",
    credit: "Łukasz Ciesielski / Wikimedia Commons, CC BY-SA 3.0",
  },
  kisite: {
    url: kisite,
    alt: "Kisite Mpunguti Marine National Park and Reserve off the Kwale coast",
    credit: "Luigi Guarino / Wikimedia Commons, CC BY 2.0",
  },
  kwale: {
    url: kwale,
    alt: "Shimba Hills, Kwale County — the forested coastal landscape inland of Diani",
    credit: "Holger Günther / Wikimedia Commons, CC BY-SA 3.0",
  },
  mombasa: {
    url: mombasaTerminus,
    alt: "Mombasa Terminus, gateway to Kenya's historic railway corridor",
    credit: "Macabe5387 / Wikimedia Commons, CC BY-SA 4.0",
  },
  ukunda: {
    url: ukundaAirport,
    alt: "Ukunda Airport airstrip and terminal serving Diani on the Kenyan coast",
    credit: "Toppazz / Wikimedia Commons, CC BY 3.0",
  },
  wasini: {
    url: wasini,
    alt: "Coral rag coastline of Wasini Island, Kwale County",
    credit: "FredD / Wikimedia Commons, CC BY-SA 3.0",
  },
} as const;

type StayPhoto = { url: string; alt: string; credit: string };

/**
 * Real photography of the 15 alternative accommodation options listed on
 * the /diani page now that Diamonds Leisure Beach & Golf Resort is fully
 * booked. Each entry's `credit` names the source per its license or terms.
 */
export const STAY_PHOTOS: Record<NearbyStayId, StayPhoto> = {
  baobabBeach: {
    url: nearbyBaobabBeach,
    alt: "Sea-facing hotel room interior at Baobab Beach Resort",
    credit: "Baobab Beach Resort & Spa official website",
  },
  swahiliBeach: {
    url: nearbySwahiliBeach,
    alt: "Guest room interior at Swahili Beach Resort",
    credit: "Swahili Beach Resort official website",
  },
  papillonLagoonReef: {
    url: nearbyPapillonLagoonReef,
    alt: "Room balcony view of the beach and ocean at Papillon Lagoon Reef",
    credit: "Papillon Lagoon Reef Hotel official website",
  },
  safariBeachHotel: {
    url: nearbySafariBeachHotel,
    alt: "Swimming pool surrounded by palm trees at Safari Beach Hotel",
    credit: "Safari Beach Hotel Diani official website",
  },
  dianiSeaLodge: {
    url: nearbyDianiSeaLodge,
    alt: "Decorated four-poster bed in a room at Diani Sea Lodge",
    credit: "Diani Sea Lodge official website",
  },
  dianiReef: {
    url: nearbyDianiReef,
    alt: "Aerial view of Diani Reef's kidney-shaped main swimming pool surrounded by palm trees",
    credit: "Diani Reef Beach Resort & Spa official website",
  },
  coralBeachResort: {
    url: nearbyCoralBeachResort,
    alt: "Coral Beach Resort's two-story guest wing and pool amid palm trees",
    credit: "Coral Beach Resort Diani official website",
  },
  yuResortMsambweni: {
    url: nearbyYuResortMsambweni,
    alt: "Beachfront view of YU Resort's modern white building from the shoreline",
    credit: "YU Resort Msambweni official website",
  },
  simbaOryxCottages: {
    url: nearbySimbaOryxCottages,
    alt: "Thatched-roof cottages with pathway leading toward the beach at Simba+Oryx",
    credit: "Simba + Oryx Beach Cottages, via simba-oryx.ch",
  },
  shalomCottages: {
    url: nearbyShalomCottages,
    alt: "Covered veranda lounge seating overlooking the pool at Shalom Cottages",
    credit: "Shalom Cottages Diani, via Airbnb listing (host photo)",
  },
  dianiCottages: {
    url: nearbyDianiCottages,
    alt: "African-decor cottage bedroom with four-poster mosquito net and seahorse mural at Diani Cottages",
    credit: "Diani Cottages official website",
  },
  aquaResortApartments: {
    url: nearbyAquaResortApartments,
    alt: "Swimming pool with modern white tower building and cabana at Aqua Resort",
    credit: "Aqua Resort Apartments official website",
  },
  majiBeach: {
    url: nearbyMajiBeach,
    alt: "Poolside dining table set for two with ocean and garden views at The Maji Beach",
    credit: "The Maji Beach Boutique Hotel official website",
  },
  marikekaHotel: {
    url: nearbyMarikekaHotel,
    alt: "Superior King room interior at Marikeka Hotel",
    credit: "Marikeka Hotel official website",
  },
  zubeidaVillas: {
    url: nearbyZubeidaVillas,
    alt: "Villa lounge and dining area with Swahili-carved furniture at The Zubeida",
    credit: "The Zubeida official website",
  },
};
