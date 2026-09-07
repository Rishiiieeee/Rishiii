import { Accommodation, BookingLink, DarshanType, SearchResultItem } from '../types';

export const POPULAR_ACCOMMODATIONS: Accommodation[] = [
  {
    id: 'ttd-guest-house',
    name: 'TTD Guest House',
    location: 'Tirumala',
    price: 1200,
    priceUnit: '/night',
    status: 'Verified',
    category: 'TTD Guest Houses',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    reviewCount: 1420,
    description: 'Official TTD managed cottages and guest houses directly located on Tirumala hills near Sri Venkateswara Temple. Strictly reserved through official TTD portal.',
    contact: 'TTD Central Reception Office (CRO), Tirumala',
    officialBookingTip: 'Book strictly via ttdsevaonline.ap.gov.in or tirupatibalaji.ap.gov.in 30 days in advance when quotas open. No private agent has access.',
    verifiedFeatures: ['Direct TTD Management', 'Government Tariff', 'Subsidized Devotee Pricing', 'Walking distance to temple ring road']
  },
  {
    id: 'hotel-haritha',
    name: 'Hotel Haritha',
    location: 'Tirupati',
    price: 1200,
    priceUnit: '/night',
    status: 'Verified',
    category: 'Hotels',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
    rating: 4.4,
    reviewCount: 890,
    description: 'Andhra Pradesh Tourism Development Corporation (APTDC) official hotel. Located centrally near Alipiri checkpost with direct RTC bus connectivity to Tirumala.',
    contact: '+91 877 2289123 / tourism.ap.gov.in',
    officialBookingTip: 'Official Andhra Pradesh Government undertaking. Direct online booking on APTDC portal.',
    verifiedFeatures: ['APTDC Govt Property', 'Fixed Standard Tariff', 'Direct Alipiri Shuttle Service', '24/7 Security & Front Desk']
  },
  {
    id: 'sk-residency',
    name: 'SK Residency',
    location: 'Tirupati',
    price: 1500,
    priceUnit: '/night',
    status: 'Needs Check',
    category: 'Hotels',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80',
    rating: 3.7,
    reviewCount: 310,
    description: 'Private hotel situated near the railway station. Devotees reported varying spot tariffs during Brahmotsavam and peak festival weekends.',
    contact: 'Private Hotel Front Desk',
    officialBookingTip: 'Always demand GST invoice. Do not transfer advance UPI payments to private mobile numbers or WhatsApp agents.',
    warningNote: 'Caution: Devotees have reported unauthorized agents claiming guaranteed VIP darshan packages from this hotel. TTD prohibits combined hotel-darshan bundles.',
    verifiedFeatures: ['Close to Railway Station', 'AC Rooms Available']
  },
  {
    id: 'sri-balaji-lodge',
    name: 'Sri Balaji Lodge',
    location: 'Tirupati',
    price: 900,
    priceUnit: '/night',
    status: 'Verified',
    category: 'Lodges',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
    rating: 4.1,
    reviewCount: 540,
    description: 'Registered private lodge inspected by the local municipal authorities. Offers budget double and quadruple bed options for family pilgrims.',
    contact: '+91 877 2234500',
    officialBookingTip: 'Legitimate registered lodge with transparent on-arrival payment counter. Verified receipt upon check-in.',
    verifiedFeatures: ['Municipal Trade License Active', 'Fixed Displayed Price Board', 'Clean Pilgrim Bathrooms']
  },
  {
    id: 'srinivasam-complex',
    name: 'Srinivasam Pilgrim Amenities Complex',
    location: 'Tirupati (Opposite RTC Central Bus Stand)',
    price: 600,
    priceUnit: '/night',
    status: 'Verified',
    category: 'TTD Guest Houses',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80',
    rating: 4.5,
    reviewCount: 2100,
    description: 'Massive official TTD Pilgrim Amenities Complex located directly opposite Central RTC Bus Stand in downhill Tirupati. Has locker rooms and current booking counters.',
    contact: 'TTD Srinivasam Enquiry: 0877-2264501',
    officialBookingTip: 'Online booking via official TTD portal and walk-in counter booking available (subject to availability).',
    verifiedFeatures: ['TTD Operated', 'Direct Electric Bus to Tirumala', 'Locker & Luggage Facilities']
  },
  {
    id: 'vishnu-nivasam',
    name: 'Vishnu Nivasam Complex',
    location: 'Tirupati (Opposite Railway Station)',
    price: 800,
    priceUnit: '/night',
    status: 'Verified',
    category: 'TTD Guest Houses',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    reviewCount: 1890,
    description: 'Premier TTD complex right opposite Tirupati Railway station. Features AC and non-AC rooms, Annaprasadam canteen, and 24x7 help desks.',
    contact: 'TTD Vishnu Nivasam: 0877-2264505',
    officialBookingTip: 'Official government pilgrim facility with fixed subsidized tariff.',
    verifiedFeatures: ['Direct Railway Connectivity', 'Free Locker System', 'Official TTD Information Desk']
  }
];

export const OFFICIAL_BOOKING_LINKS: BookingLink[] = [
  {
    id: 'darshan',
    title: 'TTD Darshan Booking',
    subtitle: 'Book your darshan tickets (SED ₹300, Virtual Seva & more)',
    url: 'https://ttdevasthanams.ap.gov.in/',
    category: 'Darshan',
    isOfficial: true
  },
  {
    id: 'seva',
    title: 'Seva Booking',
    subtitle: 'Book seva and special poojas (Suprabhatam, Thomala, Archana)',
    url: 'https://ttdevasthanams.ap.gov.in/',
    category: 'Seva',
    isOfficial: true
  },
  {
    id: 'accommodation',
    title: 'Accommodation Booking',
    subtitle: 'Book TTD guest houses and other stays in Tirumala & Tirupati',
    url: 'https://ttdevasthanams.ap.gov.in/',
    category: 'Stays',
    isOfficial: true
  }
];

export const DARSHAN_TYPES: DarshanType[] = [
  {
    id: 'sarva-darshan',
    title: 'Sarva Darshan',
    description: 'General entry for all devotees (Free darshan via Vaikuntam Queue Complex). Requires SSD biometric token issued at Tirupati counters.',
    icon: 'Shield',
    waitDuration: '6 to 18 hours (varies by crowd)',
    ticketPrice: 'Free (Token Required)',
    bookingMethod: 'Offline Slotted Sarva Darshan (SSD) tokens at Tirupati railway station, Srinivasam, Alipiri counters.',
    status: 'Verified'
  },
  {
    id: 'special-entry',
    title: 'Special Entry Darshan',
    description: 'Faster access with ₹300 advance ticket. Released monthly on the official TTD website with specific hourly time slots.',
    icon: 'Ticket',
    waitDuration: '2 to 4 hours',
    ticketPrice: '₹300 per pilgrim (includes 1 free laddu)',
    bookingMethod: 'Official TTD website (ttdsevaonline.ap.gov.in) strictly using Aadhaar verification.',
    status: 'Verified'
  },
  {
    id: 'seva',
    title: 'Seva',
    description: 'Participate in divine services like Suprabhatam, Kalyanotsavam, Sahasra Deepalankara Seva, and Vasantotsavam.',
    icon: 'Flame',
    waitDuration: 'Seva specific schedule',
    ticketPrice: '₹500 - ₹1,000 depending on Seva',
    bookingMethod: 'Electronic dip lottery and online quota release on TTD website.',
    status: 'Verified'
  }
];

export const SEARCH_ITEMS: SearchResultItem[] = [
  {
    id: 'darshan-timings',
    title: 'Darshan Timings',
    status: 'Verified',
    subtitle: 'Sri Venkateswara Swamy Temple, Tirumala',
    timings: {
      opens: '5:00 AM',
      closes: '9:00 PM',
      darshanNote: 'Arjitha Seva Timings – 6:00 AM – 8:00 PM'
    },
    keyDetails: [
      'Suprabhatam begins at 3:00 AM to 3:30 AM (Restricted to Seva ticket holders).',
      'General Devotee Darshan commences post Thomala & Archana seva from 6:30 AM.',
      'VIP Break Darshan window operates between 7:00 AM to 9:00 AM.',
      'Ekanta Seva takes place at 11:30 PM after all devotees have had darshan.'
    ],
    sourceName: 'TTD Official Website',
    sourceUrl: 'https://ttdsevaonline.ap.gov.in',
    category: 'Timings'
  },
  {
    id: 'dress-code-info',
    title: 'Temple Dress Code Guidelines',
    status: 'Verified',
    subtitle: 'Mandatory Traditional Attire for Tirumala Temple',
    keyDetails: [
      'Men: Dhoti / Pancha with Kurta, or Pyjama with Kurta, or Angavastram. T-shirts, Jeans, Shorts, Nightwear are strictly prohibited.',
      'Women: Saree, Half-saree (Langa Voni), or Punjabi Chudidar with Dupatta pinned. Western attire, sleeveless tops, and jeans are barred.',
      'Children: Traditional ethnic Indian attire recommended.',
      'Dress code is strictly checked at Vaikuntam Queue Complex Entrance.'
    ],
    sourceName: 'TTD Vigilance & Security Guidelines',
    sourceUrl: 'https://tirupatibalaji.ap.gov.in',
    category: 'Rules'
  },
  {
    id: 'how-to-reach-info',
    title: 'How to Reach Tirumala from Tirupati',
    status: 'Verified',
    subtitle: 'Ghat Roads & Trekking Footpaths (Sopanam)',
    keyDetails: [
      'APSRTC Electric & Express Buses depart every 2 minutes from Tirupati Central Bus Stand and Railway Station.',
      'Alipiri Footpath (9 km, 3,550 steps): Operates 24/7. Luggage scanning and free luggage transport to Tirumala available.',
      'Srivari Mettu Footpath (2.1 km, 2,388 steps): Open 6:00 AM to 5:00 PM. Oldest traditional trekking path.',
      'Ghat Road 1 (Downhill) & Ghat Road 2 (Uphill) operate between 3:00 AM to 12:00 Midnight.'
    ],
    sourceName: 'APSRTC & TTD Transport Wing',
    sourceUrl: 'https://apsrtc.ap.gov.in',
    category: 'Travel'
  }
];
