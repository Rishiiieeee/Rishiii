export interface HeritageAttraction {
  id: string;
  name: string;
  description: string;
  significance: string;
  image: string;
  timing: string;
  entryFee: string;
  tags: string[];
}

export interface HeritageDestination {
  id: string;
  name: string;
  subtitle: string;
  stateId: string;
  stateName: string;
  districtId: string;
  districtName: string;
  image: string;
  bannerImage: string;
  verified: boolean;
  statusTag: string;
  heritageEra: string;
  dynasty: string;
  architecturalStyle: string;
  deityOrFocus: string;
  bestTimeToVisit: string;
  timings: string;
  entryFee: string;
  nearestRailway: string;
  nearestAirport: string;
  roadAccess: string;
  overview: string;
  history: {
    title: string;
    summary: string;
    timelinePoints: { era: string; event: string }[];
    legend: string;
  };
  architecture: {
    title: string;
    styleName: string;
    summary: string;
    keyFeatures: { title: string; description: string; highlightBadge: string }[];
  };
  culturalSignificance: {
    title: string;
    summary: string;
    festivals: { name: string; period: string; description: string }[];
    spiritualBelief: string;
  };
  importantAttractions: HeritageAttraction[];
  visitorInformation: {
    generalTimings: string;
    specialRituals: string;
    dressCode: string;
    photographyRules: string;
    footwearRule: string;
    guideAvailability: string;
    entryPassProcess: string;
  };
  locationConnectivity: {
    address: string;
    coordinates: string;
    byAir: string;
    byRail: string;
    byRoad: string;
    nearbyExcursions: string[];
  };
  heritageHighlights: {
    icon: string;
    title: string;
    detail: string;
  }[];
  safeTravelTips: string[];
}

export const HERITAGE_DESTINATIONS: Record<string, HeritageDestination> = {
  lepakshi: {
    id: 'lepakshi',
    name: 'Lepakshi Heritage Complex',
    subtitle: 'Veerabhadra Temple, Hanging Pillar & Monolithic Basavanna',
    stateId: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtId: 'anantapur',
    districtName: 'Sri Sathya Sai / Anantapur',
    image: '/LEP.jpeg',
    bannerImage: '/LEP.jpeg',
    verified: true,
    statusTag: 'ASI Protected National Monument',
    heritageEra: '16th Century CE (1530–1540 CE)',
    dynasty: 'Vijayanagara Empire (King Achyuta Deva Raya)',
    architecturalStyle: 'Vijayanagara Dravidian Rock Architecture',
    deityOrFocus: 'Lord Veerabhadra (Fierce Manifestation of Shiva)',
    bestTimeToVisit: 'October to March (Pleasant Deccan breeze)',
    timings: '6:00 AM – 6:00 PM (Daily)',
    entryFee: 'Free (ASI protected heritage monument)',
    nearestRailway: 'Hindupur Railway Station (14 km)',
    nearestAirport: 'Kempegowda International Airport Bengaluru (100 km)',
    roadAccess: 'NH 44 (Bengaluru – Hyderabad Highway), well-paved 2-hour drive from Bengaluru',
    overview: 'Lepakshi is world-renowned for the 16th-century Veerabhadra Temple, famed for its extraordinary architectural wonders including the legendary Hanging Pillar, India\'s largest monolithic Nandi bull, intricate ceiling frescoes painted with natural mineral pigments, and the seven-hooded monolithic Nagalinga.',
    history: {
      title: 'Centuries of Royal Patronage & Epic Legend',
      summary: 'The temple was built in 1530–1540 CE by brothers Virupanna Nayaka and Veeranna, who were royal treasurers and governors during the reign of King Achyuta Deva Raya of the Vijayanagara Empire.',
      timelinePoints: [
        { era: 'Epic Treta Yuga', event: 'According to the Ramayana, the noble bird king Jatayu fought Ravana to rescue Goddess Sita and fell mortally wounded here. Lord Rama comforted the bird with the compassionate words "Le Pakshi" (Rise, Bird in Telugu).' },
        { era: '1530 CE', event: 'Construction initiated on Kurma Saila (tortoise-shaped hill) by Virupanna, dedicated to Lord Veerabhadra.' },
        { era: '1538 CE', event: 'Carving of the gigantic Monolithic Nandi and the multi-hooded Nagalinga over the natural spring rock.' },
        { era: 'Present Day', event: 'Maintained and preserved as an exceptional Monument of National Importance by the Archaeological Survey of India (ASI).' }
      ],
      legend: 'The crimson marks on the Kalyana Mandapa wall are revered as the eyes of Virupanna, who blinded himself to demonstrate absolute loyalty when falsely accused of misusing royal treasury funds.'
    },
    architecture: {
      title: 'Mastery of Vijayanagara Stone Carving',
      styleName: 'Late Vijayanagara Dravidian Temple Architecture',
      summary: 'Constructed on a low granite hill called Kurma Saila, the complex features three concentric enclosures with an unfinished open-air Kalyana Mandapa boasting 38 sculptured monolithic pillars.',
      keyFeatures: [
        {
          title: 'The Legendary Hanging Pillar',
          description: 'Among the 70 granite pillars in the central Natya Mandapa, one massive corner pillar does not touch the stone floor. Visitors frequently pass thin cloth, paper, or scarves beneath the base to witness this engineering enigma.',
          highlightBadge: 'Architectural Wonder'
        },
        {
          title: 'Monolithic Basavanna (Nandi)',
          description: 'Carved out of a single monolithic granite boulder located 500m from the temple, standing 4.5 meters high and 8.23 meters long. Perfectly proportioned with intricate bell necklaces, earrings, and draped garlands.',
          highlightBadge: 'Largest in India'
        },
        {
          title: 'Monolithic Nagalinga',
          description: 'A spectacular 15-foot high Shivalinga sheltered by a magnificent seven-headed serpent carved seamlessly from a single continuous granite outcrop.',
          highlightBadge: 'Sculptural Masterpiece'
        },
        {
          title: 'Ceiling Fresco Murals',
          description: 'Houses the largest single ceiling fresco in Asia (23 x 13 feet) depicting the incarnations of Lord Shiva, painted using durable organic vegetable and mineral colors.',
          highlightBadge: 'Historic Murals'
        }
      ]
    },
    culturalSignificance: {
      title: 'Living Spiritual Heritage & Sacred Devotion',
      summary: 'Lepakshi remains an active pilgrimage sanctum where thousands of devotees gather during sacred Shaivite periods to seek blessings for family harmony, craftsmanship, and spiritual fortitude.',
      festivals: [
        { name: 'Maha Shivaratri', period: 'February / March', description: 'Grand 10-day festival featuring special Rudrabhishekam, night-long vigil, classical Carnatic performances, and chariot processions.' },
        { name: 'Lepakshi Heritage Utsav', period: 'Annual Winter', description: 'State cultural festival showcasing traditional Andhra folk dances, Kuchipudi recitals, and artisan craft exhibitions.' }
      ],
      spiritualBelief: 'Devotees believe that worshipping at the sanctum of Lord Veerabhadra cures ailments, dispels negative energy, and brings mental clarity.'
    },
    importantAttractions: [
      {
        id: 'hanging-pillar',
        name: 'The Hanging Pillar (Natya Mandapa)',
        description: 'Gravity-defying stone pillar suspended millimeters above the temple floor, illustrating ancient seismic-resistant masonry.',
        significance: 'Medieval acoustic & structural engineering triumph',
        image: '/LEP.jpeg',
        timing: '6:00 AM – 6:00 PM',
        entryFee: 'Free',
        tags: ['Engineering Wonder', 'Must-See']
      },
      {
        id: 'monolithic-nandi',
        name: 'Monolithic Nandi (Basavanna)',
        description: 'Colossal granite sculpture of Lord Shiva’s mount, positioned facing the Nagalinga inside the temple complex.',
        significance: 'India\'s largest monolithic bull sculpture',
        image: '/LEP.jpeg',
        timing: '6:00 AM – 6:00 PM',
        entryFee: 'Free',
        tags: ['Monolith', 'Iconic Landmark']
      },
      {
        id: 'nagalinga',
        name: 'Seven-Hooded Monolithic Nagalinga',
        description: 'Towering coiled serpent shielding a polished black granite Shivalinga over a subterranean spring.',
        significance: 'Legend states it was sculpted in an afternoon while lunch was cooking',
        image: '/LEP.jpeg',
        timing: '6:00 AM – 6:00 PM',
        entryFee: 'Free',
        tags: ['Sacred Shrine', 'Sculpture']
      },
      {
        id: 'kalyana-mandapa',
        name: 'Open-Air Kalyana Mandapa',
        description: 'Magnificent pavilion carved with 38 gods, sages, and celestial dancers depicting the divine marriage of Shiva and Parvati.',
        significance: 'Peak Vijayanagara stone carving aesthetics',
        image: '/LEP.jpeg',
        timing: '6:00 AM – 6:00 PM',
        entryFee: 'Free',
        tags: ['Architecture', 'Photography']
      }
    ],
    visitorInformation: {
      generalTimings: 'Temple gates open daily at 6:00 AM and close at 6:00 PM.',
      specialRituals: 'Morning Abhishekam at 7:00 AM; Sandhya Deeparadhana at 5:30 PM.',
      dressCode: 'Modest traditional or smart casual attire recommended. Avoid shorts and sleeveless garments.',
      photographyRules: 'Still photography permitted in outer courtyards. Flash photography strictly prohibited inside frescoed sanctums.',
      footwearRule: 'Footwear must be deposited at the official free shoe stand outside the main Gopuram entrance.',
      guideAvailability: 'Government-certified ASI guides available near the main Nandi entrance and inside the temple gate.',
      entryPassProcess: 'No advance booking or entry pass required. Free entry under ASI.'
    },
    locationConnectivity: {
      address: 'Lepakshi Village, Sri Sathya Sai District, Andhra Pradesh - 515331',
      coordinates: '13.8038° N, 77.6074° E',
      byAir: 'Kempegowda International Airport, Bengaluru (100 km / 2 hours drive via NH 44).',
      byRail: 'Hindupur Railway Station (14 km), connected directly to Bengaluru, Hyderabad, and Mumbai trains.',
      byRoad: 'Direct buses from Bengaluru, Hindupur, and Anantapur. Scenic highway drive along NH 44.',
      nearbyExcursions: ['Hindupur Silk Center (14 km)', 'Puttaparthi Prashanthi Nilayam (65 km)', 'Penukonda Fort (40 km)']
    },
    heritageHighlights: [
      { icon: '🏛️', title: '70 Monolithic Pillars', detail: 'Carved with celestial maidens, musicians, and guardian deities in full high-relief.' },
      { icon: '🎨', title: '500-Year-Old Frescoes', detail: 'Natural mineral pigments depicting the Kiratarjuniyam and Shiva Parvati legends.' },
      { icon: '🦶', title: 'Sita Mata\'s Footprint', detail: 'Curious perennial spring footprint in granite rock associated with the Ramayana.' },
      { icon: '🐂', title: 'Giant Granite Nandi', detail: 'Carved with exquisite symmetry, jewelry details, and poised watchful alertness.' }
    ],
    safeTravelTips: [
      'Visit early morning (6:30 AM – 9:30 AM) to experience the cool granite stone courtyards before the sun warms the rock surface.',
      'Socks are highly recommended during afternoon visits as the stone floor can heat up.',
      'Hire authorized ASI-badged guides for authentic architectural breakdowns rather than unofficial touts.',
      'Stay options: Excellent government Haritha Resort at Lepakshi and numerous modern hotels in Hindupur (14 km).'
    ]
  },

  hampi: {
    id: 'hampi',
    name: 'Hampi Heritage Complex',
    subtitle: 'UNESCO World Heritage Capital of the Vijayanagara Empire',
    stateId: 'karnataka',
    stateName: 'Karnataka',
    districtId: 'vijayanagara',
    districtName: 'Vijayanagara / Ballari',
    image: '/HAM.jpeg',
    bannerImage: '/HAM.jpeg',
    verified: true,
    statusTag: 'UNESCO World Heritage Site',
    heritageEra: '14th to 16th Century CE (1336–1565 CE)',
    dynasty: 'Vijayanagara Empire (Sangama, Saluva, Tuluva & Aravidu dynasties)',
    architecturalStyle: 'Imperial Vijayanagara & Indo-Islamic Architecture',
    deityOrFocus: 'Lord Virupaksha (Shiva / Pampa Devi) & Lord Vittala (Vishnu)',
    bestTimeToVisit: 'October to March (Comfortable winter days)',
    timings: '6:00 AM – 6:00 PM (Monument sites open sunrise to sunset)',
    entryFee: '₹40 for Indians (covers Vittala Temple & Zenana Enclosure); other monuments free',
    nearestRailway: 'Hosapete Junction (Hospet) - 12 km',
    nearestAirport: 'Jindal Vidyanagar Airport Toranagallu (40 km) / Hubballi Airport (145 km)',
    roadAccess: 'NH 50 & NH 67 connect smoothly to Bengaluru, Hyderabad, and Goa',
    overview: 'Hampi is an open-air museum set in a dramatic landscape of giant precariously balanced granite boulders along the sacred Tungabhadra River. It preserves the magnificent ruins of the Vijayanagara Empire, including the living 7th-century Virupaksha Temple, the world-famous Stone Chariot, acoustic musical pillars, royal pavilions, and aqueducts.',
    history: {
      title: 'The Golden Capital of Southern India',
      summary: 'Founded in 1336 CE by brothers Harihara and Bukka, Vijayanagara grew under Emperor Krishnadevaraya into one of the richest and largest cosmopolitan cities in the world, chronicled with awe by Portuguese, Persian, and Italian travelers.',
      timelinePoints: [
        { era: 'Pre-Historic & Mythological', event: 'Kishkindha in the Ramayana—where Sugriva and Hanuman met Lord Rama. Pampa Sarovar and Matanga Hill remain sacred pilgrimage markers.' },
        { era: '1336 CE', event: 'Harihara I and Bukka Raya I establish the Vijayanagara Empire under the guidance of sage Vidyaranya.' },
        { era: '1509–1529 CE', event: 'Golden Era under Emperor Krishnadevaraya; construction of the grand Vittala Temple Stone Chariot and Virupaksha 50m Gopuram.' },
        { era: '1986 CE', event: 'Inscribed as a UNESCO World Heritage Site in recognition of outstanding universal value.' }
      ],
      legend: 'The sacred river Tungabhadra was known as Pampa, the daughter of Lord Brahma, who performed severe penance on Hemakuta Hill to marry Lord Shiva (Virupaksha).'
    },
    architecture: {
      title: 'Grandeur of Imperial Granite & Brick',
      styleName: 'Classical Vijayanagara Imperial Architecture',
      summary: 'Distinguished by massive multi-tiered gopurams, pillared mandapas with rearing Yali steeds, monolithic carvings, and sophisticated water management systems utilizing gravity-fed aqueducts.',
      keyFeatures: [
        {
          title: 'The Iconic Stone Chariot',
          description: 'A shrine dedicated to Garuda inside the Vijaya Vittala complex, meticulously assembled from carved granite blocks simulating a ceremonial temple procession chariot.',
          highlightBadge: 'World Heritage Symbol'
        },
        {
          title: 'Acoustic Musical Pillars (Sa-Re-Ga-Ma)',
          description: 'The Ranga Mandapa features 56 monolithic musical pillars that emit distinct musical notes when tapped, created using selective quartz-rich stone alloys.',
          highlightBadge: 'Acoustic Marvel'
        },
        {
          title: 'Virupaksha Temple Gopuram',
          description: 'Standing 50 meters tall over 9 tiers, this active sacred gateway displays intricate terracotta figures and an inverted camera-obscura pinhole projection inside.',
          highlightBadge: 'Living 7th-Century Sanctum'
        },
        {
          title: 'Lotus Mahal & Elephant Stables',
          description: 'A stunning fusion of Hindu and Islamic vaulted arches, multi-foliated domes, and cooling water-channels in the royal Zenana precinct.',
          highlightBadge: 'Indo-Islamic Blend'
        }
      ]
    },
    culturalSignificance: {
      title: 'Spiritual Center & Living Heritage',
      summary: 'Unlike many archaeological sites, Hampi is an active living pilgrimage site. The Virupaksha Temple has seen unbroken worship for over 1,300 years.',
      festivals: [
        { name: 'Hampi Utsav (Vijaya Utsav)', period: 'November', description: 'Spectacular 3-day mega festival with illuminated monuments, classical music, dance, fireworks, and laser light shows.' },
        { name: 'Virupaksha Car Festival', period: 'March / April', description: 'Massive wooden chariot pulled by thousands of devotees along the 800m long Hampi Bazaar.' }
      ],
      spiritualBelief: 'Taking a sacred dip in the Tungabhadra River and worshipping Lord Virupaksha removes sins and bestows inner tranquility.'
    },
    importantAttractions: [
      {
        id: 'stone-chariot-vittala',
        name: 'Vijaya Vittala Temple & Stone Chariot',
        description: 'Peak expression of Vijayanagara art featuring the stone chariot, musical pillars, and expansive carved courtyards.',
        significance: 'Featured on the Indian ₹50 banknote',
        image: '/HAM.jpeg',
        timing: '8:30 AM – 5:30 PM',
        entryFee: '₹40 (Ticket covers Zenana Enclosure)',
        tags: ['UNESCO Highlight', 'Must-Visit']
      },
      {
        id: 'virupaksha-temple',
        name: 'Sri Virupaksha Temple & Hampi Bazaar',
        description: 'Unbroken living worship sanctum dedicated to Shiva and Pampa Devi, with resident elephant Lakshmi and ancient market colonnade.',
        significance: 'Oldest active sanctuary in Hampi',
        image: '/HAM.jpeg',
        timing: '6:00 AM – 1:00 PM, 5:00 PM – 9:00 PM',
        entryFee: 'Free (Special darshan ₹25)',
        tags: ['Active Sanctum', 'Living Heritage']
      },
      {
        id: 'lotus-mahal-stables',
        name: 'Lotus Mahal & Royal Elephant Stables',
        description: 'Elegant symmetrical pavilion with recessed multi-arched windows and an adjoining 11-domed royal elephant stall complex.',
        significance: 'Remarkable Indo-Islamic architectural harmony',
        image: '/HAM.jpeg',
        timing: '8:30 AM – 5:30 PM',
        entryFee: 'Covered in Vittala ticket',
        tags: ['Royal Enclosure', 'Architecture']
      },
      {
        id: 'matanga-hill',
        name: 'Matanga Hill & Hemakuta Hill Sunset',
        description: 'Panoramic viewpoints offering 360-degree vistas of the boulder-strewn Tungabhadra landscape, ruins, and sunrise/sunset.',
        significance: 'Mythical hermitage of Sage Matanga',
        image: '/HAM.jpeg',
        timing: 'Open 24 hours (Visit dawn/dusk)',
        entryFee: 'Free',
        tags: ['Sunset Viewpoint', 'Trekking']
      }
    ],
    visitorInformation: {
      generalTimings: 'Monument complexes are open from sunrise to sunset (approx. 6:00 AM – 6:00 PM).',
      specialRituals: 'Virupaksha morning aarti at 6:30 AM; Elephant blessing ritual daily between 8:00 AM – 9:00 AM.',
      dressCode: 'Comfortable walking clothing, hats, and sturdy footwear. Modest traditional attire inside active Virupaksha sanctum.',
      photographyRules: 'Allowed across monuments. Drones require special prior clearance from ASI and local administration.',
      footwearRule: 'Deposit footwear at designated stands outside active shrines and the Vittala inner mandapa.',
      guideAvailability: 'Official ASI guides and audio guides available at the Vittala and Lotus Mahal ticket counters.',
      entryPassProcess: 'E-tickets can be booked online via the official ASI portal or scanned via QR code at counters.'
    },
    locationConnectivity: {
      address: 'Hampi, Vijayanagara District, Karnataka - 583239',
      coordinates: '15.3350° N, 76.4600° E',
      byAir: 'Jindal Vidyanagar Airport, Toranagallu (40 km); Hubballi Airport (145 km); Kempegowda Bengaluru (340 km).',
      byRail: 'Hosapete Junction (Hospet) - 12 km, connected with daily direct trains from Bengaluru, Hyderabad, and Goa.',
      byRoad: 'KSRTC sleeper and AC luxury buses run daily from Bengaluru, Mysuru, Goa, and Hyderabad.',
      nearbyExcursions: ['Tungabhadra Dam & Gardens Hospet (16 km)', 'Daroji Sloth Bear Sanctuary (22 km)', 'Anegundi Village & Monkey Temple (5 km across river)']
    },
    heritageHighlights: [
      { icon: '🛕', title: '500+ Ancient Monuments', detail: 'Spanning temples, palaces, royal baths, watchtowers, and prehistoric rock art.' },
      { icon: '🎵', title: 'Musical Stone Pillars', detail: 'Acoustically tuned resonant granite columns generating swaras when struck.' },
      { icon: '🏞️', title: 'Unique Boulder Landscape', detail: 'Granite tor rock formations among the oldest exposed rock faces on planet Earth.' },
      { icon: '🪙', title: 'World Trading Hub', detail: 'Historical marketplace where diamonds, rubies, pearls, and Arabian horses were weighed by measure.' }
    ],
    safeTravelTips: [
      'Carry adequate drinking water, sunglasses, and sun protection as daytime temperatures can be warm even in winter.',
      'Electric battery vehicles are available to transport pilgrims and tourists from the main parking to the Vittala Temple.',
      'Always purchase official ASI combined tickets from authorized counters or the official portal to avoid markups.',
      'Rent a certified bicycle or auto-rickshaw with fixed government tariff cards for navigating the expansive 41 km² archaeological zone.'
    ]
  },

  puri: {
    id: 'puri',
    name: 'Puri Sacred Heritage',
    subtitle: 'Shree Jagannath Temple, Sacred Dham & Bada Danda Grand Road',
    stateId: 'odisha',
    stateName: 'Odisha',
    districtId: 'puri',
    districtName: 'Puri District',
    image: '/PUR.jpeg',
    bannerImage: '/PUR.jpeg',
    verified: true,
    statusTag: 'One of Sacred Char Dham Pilgrimages',
    heritageEra: '12th Century CE (1135–1198 CE)',
    dynasty: 'Eastern Ganga Dynasty (King Anantavarman Chodaganga Deva & Anangabhima Deva)',
    architecturalStyle: 'Classical Kalinga (Rekha Deula) Temple Architecture',
    deityOrFocus: 'Lord Jagannath (Lord of the Universe), Balabhadra & Subhadra',
    bestTimeToVisit: 'October to March; and June/July during the grand Rath Yatra',
    timings: '5:30 AM – 10:00 PM (Temple opens early for Mangala Alati)',
    entryFee: 'Free (Managed by Shree Jagannath Temple Administration - SJTA)',
    nearestRailway: 'Puri Railway Station (2.5 km from Temple)',
    nearestAirport: 'Biju Patnaik International Airport Bhubaneswar (60 km / 1 hour via NH 316)',
    roadAccess: 'NH 316 4-lane expressway connecting Bhubaneswar to Puri',
    overview: 'Puri is one of India\'s four holiest pilgrimage sites (Char Dham), celebrated for the sacred 12th-century Shree Jagannath Temple towering over 65 meters. Renowned for its unique neem-wood deities, the world-famous annual Rath Yatra (Chariot Festival), the sacred Mahaprasad prepared in the world\'s largest traditional kitchen, and the magnificent Aruna Stambha.',
    history: {
      title: 'The Eternal Realm of the Lord of the Universe',
      summary: 'The present magnificent sanctum was consecrated in the 12th century by King Anantavarman Chodaganga Deva and completed by Anangabhima Deva of the Eastern Ganga dynasty.',
      timelinePoints: [
        { era: 'Ancient Vedic Times', event: 'Revered in the Skanda Purana, Brahma Purana, and Mahabharata as Nilachala or Purushottama Kshetra, where Lord Vishnu is worshipped in the form of Daru Brahma (sacred neem wood).' },
        { era: '1135 CE', event: 'Construction of the monumental 65m high Rekha Deula by King Chodaganga Deva.' },
        { era: '1198 CE', event: 'King Anangabhima Deva dedicates his entire empire to Lord Jagannath, ruling as his humble servant (Rauta).' },
        { era: 'Present Day', event: 'Administered under the Sri Jagannath Temple Act of 1954, maintaining centuries-old Chhatisa Nijoga hereditary servitor traditions.' }
      ],
      legend: 'King Indradyumna of Avanti discovered the sacred log of fragrant neem wood floating on the sea shores of Puri. Divine architect Vishwakarma disguised as an elderly craftsman carved the icons under the condition of seclusion.'
    },
    architecture: {
      title: 'Pinnacle of Kalinga Deula Architecture',
      styleName: 'Pancha-Ratha Rekha & Pidha Deula Architecture',
      summary: 'Spread over 10 acres, enclosed within two massive concentric stone walls—Meghnad Pacheri (outer) and Kurma Bedha (inner). The complex features 4 distinct ceremonial halls aligned along the axial spine.',
      keyFeatures: [
        {
          title: 'Bada Deula (Vimana Tower)',
          description: 'The central curvilinear sanctum rises 65 meters (214 feet), crowned with the sacred 8-spoke Nilachakra (Blue Wheel) forged from Ashtadhatu, atop which the Patitapabana holy flag flutters opposite to wind direction.',
          highlightBadge: '65-Meter Sacred Spire'
        },
        {
          title: 'Four Axial Halls',
          description: 'Includes the Vimana (Sanctum), Jagamohana (Audience hall), Natamandira (Dancing hall), and Bhogamandapa (Hall of offerings) covered in delicate relief sculptures.',
          highlightBadge: 'Classical Kalinga Layout'
        },
        {
          title: 'Singhadwara & Aruna Stambha',
          description: 'The monumental Eastern Lion\'s Gate guarded by ferocious stone lions and fronted by the 16-sided monolithic chlorite pillar (Aruna Stambha) originally brought from the Konark Sun Temple.',
          highlightBadge: 'Historic Monolith'
        },
        {
          title: 'Ananda Bazar & World\'s Largest Kitchen',
          description: 'The Rosaghar operates 752 clay hearths where sacred Mahaprasad is cooked purely in earthen pots stacked 7 levels high, where the topmost pot cooks first.',
          highlightBadge: 'Sacred Rosaghar'
        }
      ]
    },
    culturalSignificance: {
      title: 'Universal Fraternity & Sacred Mahaprasad',
      summary: 'Lord Jagannath embodies universal brotherhood, transcending caste, creed, and barriers. In the Ananda Bazar, devotees of all backgrounds eat sacred Mahaprasad together.',
      festivals: [
        { name: 'Rath Yatra (Chariot Festival)', period: 'Ashadha Shukla Dwitiya (June/July)', description: 'Over one million pilgrims gather as Lord Jagannath, Balabhadra, and Subhadra journey 3 km on colossal hand-drawn chariots (Nandighosha, Taladhwaja, and Darpadalana) to the Gundicha Temple.' },
        { name: 'Snana Yatra', period: 'Jyeshtha Purnima (May/June)', description: 'Grand ceremonial bathing festival with 108 pots of herbal fragrant water from the Golden Well.' },
        { name: 'Chandan Yatra', period: 'Vaisakha (April/May)', description: '42-day sandalwood festival featuring divine water boat cruises in the Narendra Tirtha tank.' }
      ],
      spiritualBelief: 'Partaking of Jagannath Mahaprasad and witnessing the Patitapabana flag cures worldly ailments and liberates the soul.'
    },
    importantAttractions: [
      {
        id: 'jagannath-temple',
        name: 'Shree Jagannath Main Temple Sanctum',
        description: 'The sacred sanctum where Lord Jagannath, Balabhadra, and Devi Subhadra reside on the ratnavedi jeweled throne.',
        significance: 'Primary sanctum of the Char Dham pilgrimage',
        image: '/PUR.jpeg',
        timing: '5:30 AM – 10:00 PM',
        entryFee: 'Free',
        tags: ['Char Dham', 'Living Sanctum']
      },
      {
        id: 'ananda-bazar',
        name: 'Ananda Bazar & Mahaprasad Market',
        description: 'World\'s largest open-air consecrated food court within the temple complex where steaming hot earthen pots of 56 Bhogas are shared.',
        significance: 'Equal dining irrespective of caste or social status',
        image: '/PUR.jpeg',
        timing: '11:30 AM – 9:00 PM',
        entryFee: 'Pay per prasad item',
        tags: ['Mahaprasad', 'Sacred Kitchen']
      },
      {
        id: 'gundicha-temple',
        name: 'Gundicha Temple (Garden House)',
        description: 'The destination sanctuary where the divine siblings reside during the 9 days of the annual Rath Yatra.',
        significance: 'Known as the birthplace of Lord Jagannath',
        image: '/PUR.jpeg',
        timing: '6:00 AM – 8:00 PM',
        entryFee: 'Free',
        tags: ['Rath Yatra Sanctum', 'Heritage Garden']
      },
      {
        id: 'golden-beach',
        name: 'Puri Golden Beach (Blue Flag Certified)',
        description: 'Pristine coastal shoreline on the Bay of Bengal, known for sunrise views, holy dips, and annual sand art festivals.',
        significance: 'International Blue Flag eco-certification',
        image: '/PUR.jpeg',
        timing: 'Open all day',
        entryFee: 'Free',
        tags: ['Blue Flag Beach', 'Relaxation']
      }
    ],
    visitorInformation: {
      generalTimings: 'Temple gates open at 5:30 AM with Mangala Alati; darshan continues through night until Pahuda (approx. 10:30 PM).',
      specialRituals: 'Mangala Alati (5:30 AM); Mailam & Abakash (6:00 AM); Madhyanha Dhupa (12:30 PM); Sandhya Alati (6:30 PM).',
      dressCode: 'Strictly traditional Indian attire (dhoti, kurta/pyjama for men; saree, salwar-suit for women). Western wear, shorts, leather belts and leather wallets are strictly barred.',
      photographyRules: 'Electronic gadgets, smart phones, smart watches, and cameras are strictly prohibited inside the temple premises.',
      footwearRule: 'Free electronic shoe storage counters managed by SJTA are available at Singhadwara and Paschima Dwara.',
      guideAvailability: 'Only registered SJTA Sewayats wearing identity badges are permitted. Avoid unverified intermediaries.',
      entryPassProcess: 'General darshan is completely free. Special ticketed darshan queues are announced on specific festival days.'
    },
    locationConnectivity: {
      address: 'Grand Road (Bada Danda), Puri, Odisha - 752001',
      coordinates: '19.8049° N, 85.8179° E',
      byAir: 'Biju Patnaik International Airport Bhubaneswar (60 km), connected by continuous highway express cabs and Volvo buses.',
      byRail: 'Puri Railway Station (2.5 km), direct superfast trains from Kolkata, New Delhi, Chennai, Mumbai, Ahmedabad.',
      byRoad: 'NH 316 connecting Bhubaneswar directly to Puri in under 60 minutes.',
      nearbyExcursions: ['Konark Sun Temple UNESCO (35 km)', 'Chilika Lake & Irrawaddy Dolphins (50 km)', 'Raghurajpur Heritage Artisan Village (12 km)']
    },
    heritageHighlights: [
      { icon: '🚩', title: 'Patitapabana Flag', detail: 'A new sacred flag is hoisted daily on the 65-meter dome by athletic hereditary chunaras climbing without harnesses.' },
      { icon: '🍲', title: '56 Bhogas (Chhappan Bhog)', detail: 'Pure vegetarian offerings cooked according to centuries-old Ayurvedic traditions with clay cookware.' },
      { icon: '🪵', title: 'Nabakalebara Ceremony', detail: 'The mystical periodic replacement of wooden deities every 12 to 19 years according to lunar calendar.' },
      { icon: '🏖️', title: 'Sacred Mahodadhi Beach', detail: 'Devotees traditionally take a holy dip in the sea waters before proceeding for Lord Jagannath\'s darshan.' }
    ],
    safeTravelTips: [
      'Deposit all mobile phones, cameras, leather belts, and shoes at the official computerized counter outside the Lion\'s Gate.',
      'Purchase genuine Mahaprasad directly from licensed counters inside Ananda Bazar to guarantee freshness and authentic pricing.',
      'During the summer or afternoon visits, walk along the shaded jute carpet pathways laid out on the Bada Danda.',
      'Combine your Puri visit with the nearby Konark Sun Temple (35 km) and Raghurajpur Pattachitra artisan village (12 km).'
    ]
  }
};
