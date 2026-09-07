export type PageType =
  | 'home'
  | 'explore-india'
  | 'india-map'
  | 'state-selection'
  | 'district-selection'
  | 'temple-selection'
  | 'temple-detail'
  | 'destination-info'
  | 'temples'
  | 'heritage'
  | 'plan-visit'
  | 'staycheck'
  | 'booksafe'
  | 'report'
  | 'search-results'
  | 'temple-info';

export interface StateItem {
  id: string;
  name: string;
  available: boolean;
  templeCount?: number;
  description?: string;
}

export interface DistrictItem {
  id: string;
  name: string;
  stateId: string;
  available: boolean;
  templeCount: number;
}

export interface TempleItem {
  id: string;
  name: string;
  districtId: string;
  stateId?: string;
  location: string;
  image: string;
  imageFileName?: string;
  verified: boolean;
  available: boolean;
  overview?: string;
  deity?: string;
  festival?: string;
  bestTime?: string;
  website?: string;
  category?: string;
  period?: string;
}

export interface Accommodation {
  id: string;
  name: string;
  location: string;
  price: number;
  priceUnit: string;
  status: 'Verified' | 'Needs Check';
  positiveReviewPercentage?: number;
  category: 'TTD Guest Houses' | 'Hotels' | 'Lodges' | 'More Options' | 'Temple Trust Stays' | 'Heritage Ashrams';
  image: string;
  rating?: number;
  reviewCount?: number;
  description?: string;
  contact?: string;
  officialBookingTip?: string;
  verifiedFeatures?: string[];
  warningNote?: string;
}

export interface BookingLink {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  category: string;
  isOfficial: boolean;
}

export interface TempleInfoTab {
  id: 'overview' | 'darshan' | 'timings' | 'rules' | 'dress-code' | 'how-to-reach';
  label: string;
  icon: string;
}

export interface DarshanType {
  id: string;
  title: string;
  description: string;
  icon: string;
  waitDuration?: string;
  ticketPrice?: string;
  bookingMethod?: string;
  status: 'Verified';
}

export interface SearchResultItem {
  id: string;
  title: string;
  status: 'Verified' | 'Needs Check';
  subtitle: string;
  timings?: {
    opens: string;
    closes: string;
    darshanNote: string;
  };
  keyDetails?: string[];
  sourceName: string;
  sourceUrl: string;
  category: string;
}

export interface TempleDetail {
  id: string;
  name: string;
  shortName: string;
  tagline?: string;
  stateId: string;
  stateName: string;
  districtId: string;
  districtName: string;
  location: string;
  imageFileName: string; // The exact mapped image file: TIR.jpeg, LEP.jpeg, HAM.jpeg, PUR.jpeg, a.jpeg, b.jpeg, etc.
  category: 'Jyotirlinga' | 'Ancient Monument' | 'Maha Kshetra' | 'UNESCO World Heritage';
  jyotirlingaNumber?: number; // 1 to 12 if applicable
  period: string;
  dynasty: string;
  deity: string;
  overview: string;
  highlights: string[];

  // A. HISTORY
  history: {
    builder: string;
    periodEra: string;
    purpose: string;
    dynasticTimeline: { era: string; ruler: string; contribution: string }[];
    historicalEvents: string[];
    culturalSignificance: string;
  };

  // B. ENGINEERING & TECHNOLOGY (USP)
  engineering: {
    architecturalStyle: string;
    materials: string[];
    geometry: {
      concept: string;
      description: string;
      mathematicalRatio?: string;
    };
    structuralInnovations: {
      title: string;
      description: string;
      scienceFact: string; // Historically or structurally documented scientific fact
    }[];
    acousticFeatures?: string;
    astronomicalAlignment?: string;
    seismicOrClimateResilience?: string;
  };

  // C. TEMPLE INFORMATION
  info: {
    templeTimings: string;
    darshanTimings: string;
    darshanTypes: { name: string; duration: string; fee: string; note: string }[];
    importantFestivals: { name: string; month: string; description: string }[];
    visitorGuidelines: string[];
    dressCode: string;
    exactAddress: string;
    nearbyLandmarks: string[];
  };

  // D. PLAN YOUR VISIT
  travel: {
    nearestAirport: { name: string; distance: string };
    nearestRailway: { name: string; distance: string };
    roadConnectivity: string;
    localTransit: string;
    suggestedVisitDuration: string;
    bestSeason: string;
    nearbyAttractions: { name: string; distance: string; description: string }[];
  };

  // E. STAY CHECK (with >=75% Verified, 50-74% Check Twice, <50% filtered out)
  accommodations: {
    id: string;
    name: string;
    distance: string;
    rating: number;
    positiveReviewPercentage: number;
    reviewSummary: string;
    facilities: string[];
    priceRange: string;
  }[];

  // F. OFFICIAL BOOKING PORTAL
  officialBooking: {
    portalName: string;
    url: string;
    servicesAvailable: string[];
    disclaimer: string;
  };

  // G. SOURCES / REFERENCES
  sources: { title: string; authority: string; link?: string }[];
}
