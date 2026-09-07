import { TempleDetail } from '../types';

export const TEMPLE_DETAILS_PART1: Record<string, TempleDetail> = {
  'tirupati': {
    id: 'tirupati',
    name: 'Sri Venkateswara Swamy Temple',
    shortName: 'Tirupati Balaji',
    tagline: 'Kaliyuga Vaikuntha & Pinnacle of Dravidian Vimana Engineering',
    stateId: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtId: 'tirupati',
    districtName: 'Tirupati',
    location: 'Tirumala Hills, Seshachalam Range, Tirupati, Andhra Pradesh',
    imageFileName: 'TIR.jpeg',
    category: 'Maha Kshetra',
    period: '9th-16th Century CE',
    dynasty: 'Pallava, Chola, Saluva, Tuluva & Vijayanagara Dynasties',
    deity: 'Lord Sri Venkateswara (Srinivasa)',
    overview: 'Perched at 853 meters above sea level on the holy Seshachalam Hills of the Eastern Ghats, Sri Venkateswara Temple is one of the most visited and revered pilgrimage destinations on earth. Renowned for its golden Ananda Nilayam Vimana, the sanctum sanctorum houses the self-manifested (Swayambhu) deity carved from dense black silajit granite.',
    highlights: [
      'Gilded Ananda Nilayam Vimana with pure copper repoussé sheets overlaid in gold',
      'Continuous daily darshan queue management engineered for 60,000 to 100,000 devotees daily',
      'Ancient water harvesting systems including Swami Pushkarini and natural step wells',
      'Strict traditional Agama Sastra temple governance preserved for over a millennium'
    ],
    history: {
      builder: 'Earliest documented patronages by Queen Samavai of Pallava dynasty (966 CE); subsequently enriched by Rajendra Chola I, Sri Krishnadevaraya of Vijayanagara, and Raghoji Bhonsle.',
      periodEra: 'Continuous architectural development from 966 CE through 1517 CE (Vijayanagara peak).',
      purpose: 'Established according to the Vaikhanasa Agama as the terrestrial abode (Bhuloka Vaikuntha) of Lord Vishnu to bless humankind during the Kali Yuga.',
      dynasticTimeline: [
        { era: '966 CE', ruler: 'Pallava Queen Samavai', contribution: 'Donated silver idol of Bhoga Srinivasa and endowed lands for daily lamps and worship.' },
        { era: '11th-12th Century', ruler: 'Chola Dynasty', contribution: 'Constructed stone prakarams, expanded the inner sanctum, and gifted golden ornaments.' },
        { era: '1517 CE', ruler: 'Emperor Sri Krishnadevaraya', contribution: 'Gold-plated the Ananda Nilayam Vimana, gifted diamond-encrusted crowns, and built gopurams.' }
      ],
      historicalEvents: [
        'Installation of Bhoga Srinivasa silver idol in 966 CE documented in Tamil Vatteluttu inscriptions.',
        'Seven royal visits by Emperor Sri Krishnadevaraya between 1513 and 1521 CE.',
        'Enactment of the Tirumala Tirupati Devasthanams (TTD) Act in 1932 ensuring modern democratic temple administration.'
      ],
      culturalSignificance: 'Considered the supreme sanctuary of grace in South India, where the tradition of hair tonsure (Kalyanakatta) symbolizes surrender of ego, and the Tirupati Laddu holds prestigious Geographical Indication (GI) protection.'
    },
    engineering: {
      architecturalStyle: 'Dravidian Architecture (Vimana-centric Classical South Indian Style)',
      materials: ['Gneissic Charnockite Granite', 'Pure Teak Core Framing', 'Copper Repoussé', 'Gold Leaf Plating', 'Natural Lime & Herb Mortar'],
      geometry: {
        concept: 'Padma Mandala and Vastu Purusha Sacred Grid',
        description: 'The sanctum sanctorum (Garbhagriha) is a perfect square module positioned directly over the energetic Brahmasthana. The golden Ananda Nilayam rises in stepped pyramidal tiers adhering to precise Shulba Sutra geometric ratios (1:1.618 harmonic proportions).',
        mathematicalRatio: '1:1.618 golden ratio across the inner sanctum elevation'
      },
      structuralInnovations: [
        {
          title: 'Weight Distribution of Ananda Nilayam',
          description: 'The golden vimana transfers tons of vertical dead-load through nested corbelled granite lintels outward into 2-meter thick dry-joint masonry walls, preventing localized shear failure.',
          scienceFact: 'Granite compression test measurements show the lower foundation stones withstand over 130 MPa, resisting mountain moisture and seismic micro-tremors without foundation sinking.'
        },
        {
          title: 'Thermal Insulation of Sanctum',
          description: 'The multi-layered stone enclosure maintains a remarkably stable interior microclimate between 22°C and 25°C throughout scorching summers and cool winters.',
          scienceFact: 'High thermal inertia of 2000mm monolithic granite blocks delays diurnal temperature swings by up to 12 hours.'
        }
      ],
      acousticFeatures: 'Chamber geometry dampens ambient outside queue reverberations while amplifying low-frequency Vedic chanting resonance between 100 Hz and 250 Hz.',
      astronomicalAlignment: 'East-facing sanctum aligned with equinoctial sunrise azimuth, allowing dawn rays to illuminate the inner threshold during specific solar transits.',
      seismicOrClimateResilience: 'High-density interlocking stone blocks without brittle mortar absorb vibrational shear waves, keeping the tower intact for over 1000 years.'
    },
    info: {
      templeTimings: '03:00 AM - 01:30 AM (Open 22.5 hours daily with brief breaks for rituals)',
      darshanTimings: 'Sarvadarsanam: 07:00 AM - 11:30 PM (varies based on rush); Special Entry: Scheduled hourly slots',
      darshanTypes: [
        { name: 'Sarva Darshan (Free Queue)', duration: '6 to 18 hours depending on crowd', fee: 'Free', note: 'Standard queue with resting compartments and free food/milk' },
        { name: 'Special Entry Darshan (SED)', duration: '2 to 4 hours', fee: '₹300', note: 'Pre-booked online via TTD Official Portal' },
        { name: 'Senior Citizen & Infant Darshan', duration: '1 to 2 hours', fee: 'Free / Special Slot', note: 'Available at dedicated morning and afternoon time gates' }
      ],
      importantFestivals: [
        { name: 'Srivari Annual Brahmotsavam', month: 'September / October', description: 'Nine-day mega festival featuring celestial Vahana sevas and Garuda Seva attended by half a million devotees.' },
        { name: 'Vaikuntha Ekadashi', month: 'December / January', description: 'Opening of the sacred Vaikuntha Dwaram (celestial corridor) encircling the sanctum.' }
      ],
      visitorGuidelines: [
        'Electronic gadgets, cameras, and mobile phones are strictly prohibited beyond the queue complex.',
        'Footwear must be deposited at official free luggage counters prior to entering queue lines.'
      ],
      dressCode: 'Strict Traditional: Men must wear Dhoti with Kurta or Uttariyam (bare torso permitted during certain sevas). Women must wear Saree, Half-Saree, or Chudidar with Dupatta.',
      exactAddress: 'Sri Venkateswara Temple, Tirumala, Tirupati District, Andhra Pradesh 517504',
      nearbyLandmarks: ['Swami Pushkarini Holy Tank', 'Silathoranam Natural Geological Arch', 'Akasa Ganga Waterfalls', 'Papavinasanam']
    },
    travel: {
      nearestAirport: { name: 'Tirupati International Airport (Renigunta)', distance: '38 km' },
      nearestRailway: { name: 'Tirupati Main (TPTY) & Renigunta Junction (RU)', distance: '22 km' },
      roadConnectivity: 'Dual two-lane Ghat roads with dedicated uphill and downhill routes maintained by TTD and State Transport (APSRTC) running electric buses 24/7.',
      localTransit: 'Free TTD internal electric buses (Dharmika Ratham) operate round-the-clock connecting all cottages and queue complexes.',
      suggestedVisitDuration: '2 Full Days',
      bestSeason: 'September to March (Pleasant hilltop climate between 18°C and 28°C)',
      nearbyAttractions: [
        { name: 'Sri Padmavathi Ammavari Temple (Tiruchanur)', distance: '5 km from Tirupati city', description: 'Essential divine consort temple visited immediately after Balaji darshan.' },
        { name: 'Sri Govindaraja Swamy Temple', distance: '1 km from Tirupati Railway Station', description: 'Historic grand Dravidian temple complex built in 1130 CE by Sri Ramanujacharya.' },
        { name: 'Silathoranam Arch', distance: '1 km from Tirumala Sanctum', description: 'Rare pre-Cambrian geological natural stone arch over 1.5 billion years old.' }
      ]
    },
    accommodations: [
      {
        id: 'ttd-cottages-tirumala',
        name: 'TTD Official Rest Houses & Cottages (Tirumala Hilltop)',
        distance: '0.4 km from Temple',
        rating: 4.5,
        positiveReviewPercentage: 88,
        reviewSummary: 'Extremely clean, subsidized official accommodations booked exclusively through TTD web portal.',
        facilities: ['24/7 Hot Water', 'Power Backup', 'Pure RO Water', 'Proximity to Temple'],
        priceRange: '₹100 - ₹1,000 / night'
      },
      {
        id: 'marasa-sarovar-premiere',
        name: 'Marasa Sarovar Premiere (Tirupati Foot)',
        distance: '18 km from Tirumala Hilltop',
        rating: 4.6,
        positiveReviewPercentage: 91,
        reviewSummary: 'Premier luxury hotel themed around the Dasavataras of Lord Vishnu, exceptional hygiene and dining.',
        facilities: ['Swimming Pool', 'Pure Veg Restaurant', 'Spa', 'Free Temple Shuttle'],
        priceRange: '₹4,500 - ₹8,500 / night'
      },
      {
        id: 'hotel-bliss-tirupati',
        name: 'Hotel Bliss Tirupati',
        distance: '21 km from Tirumala',
        rating: 4.0,
        positiveReviewPercentage: 76,
        reviewSummary: 'Well-established family hotel near bus station with comfortable rooms and reliable transport help.',
        facilities: ['Vegetarian Dining', 'Valet Parking', 'Tour Desk'],
        priceRange: '₹2,200 - ₹3,800 / night'
      },
      {
        id: 'budget-lodge-warning',
        name: 'Old Bazaar Private Lodge',
        distance: '23 km from Hilltop',
        rating: 3.1,
        positiveReviewPercentage: 42,
        reviewSummary: 'Sub-par cleanliness and inconsistent pricing reported by travelers. Below trust threshold.',
        facilities: ['Basic Bed'],
        priceRange: '₹600 / night'
      }
    ],
    officialBooking: {
      portalName: 'Tirumala Tirupati Devasthanams (TTD) Official Citizen Portal',
      url: 'https://ttdevasthanams.ap.gov.in/',
      servicesAvailable: ['Special Entry Darshan (₹300)', 'Hilltop Accommodation Quota', 'Arjitha Seva Electronic DIP', 'Srivari Hundi E-Donation'],
      disclaimer: 'You are now exiting to the official Andhra Pradesh Government TTD portal. Beware of fake clone booking websites; TTD never authorizes third-party travel agencies for darshan tokens.'
    },
    sources: [
      { title: 'Inscriptions of Tirupati Devasthanam (Vols I-VI)', authority: 'Archaeological Survey of India & TTD Research Wing' },
      { title: 'The Architecture of Tirumala Temple', authority: 'Andhra Pradesh State Archaeology Department' },
      { title: 'Official Pilgrimage Administration Manual', authority: 'TTD Executive Board Publications' }
    ]
  },

  'lepakshi': {
    id: 'lepakshi',
    name: 'Veerabhadra Swamy Temple & Hanging Pillar',
    shortName: 'Lepakshi Temple',
    tagline: 'World-Renowned Hanging Pillar and Monolithic Granitic Marvels',
    stateId: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtId: 'sri-sathya-sai',
    districtName: 'Sri Sathya Sai',
    location: 'Lepakshi Village, Sri Sathya Sai District, Andhra Pradesh',
    imageFileName: 'LEP.jpeg',
    category: 'Ancient Monument',
    period: '1530-1540 CE',
    dynasty: 'Vijayanagara Empire (Brothers Virupanna & Veeranna, Governors of Penukonda)',
    deity: 'Lord Veerabhadra, Bhadrakali, Shiva & Vishnu',
    overview: 'Built upon the low rocky hill of Kurmasailam (Tortoise-shaped hill), the 16th-century Lepakshi temple is celebrated globally for its architectural audacity, featuring the world-famous Hanging Pillar that does not touch the ground, massive monolithic granite carvings including the largest Nandi in India, and the most extensive surviving Vijayanagara fresco murals.',
    highlights: [
      'The legendary Hanging Pillar (Aakaasa Stambha) of the Natya Mandapa',
      'Monolithic granite Nandi bull measuring 4.5m high and 8.2m long carved from a single boulder',
      'Spectacular 7-hooded Nagalinga canopy carved seamlessly out of solid hillside rock',
      'Exquisite ceiling mural of Veerabhadra covering 7x4 meters, the largest single ceiling fresco in Asia'
    ],
    history: {
      builder: 'Commissioned by Virupanna Nayaka and Veeranna, royal treasurers and brothers under Vijayanagara Emperor Achyuta Deva Raya.',
      periodEra: 'Mid-16th Century (1530-1540 CE).',
      purpose: 'Built to honor Lord Shiva in his fierce Veerabhadra manifestation, blending martial valor with sacred art after divine guidance atop Kurmasaila hill.',
      dynasticTimeline: [
        { era: '1530 CE', ruler: 'Achyuta Deva Raya', contribution: 'Authorized construction of the inner sanctum and Natya Mandapa under Virupanna.' },
        { era: '1538 CE', ruler: 'Penukonda Governors', contribution: 'Completed the monolithic Nagalinga and gigantic granite Nandi 200 meters from the temple.' },
        { era: '1910-Present', ruler: 'Archaeological Survey of India', contribution: 'Declared Monument of National Importance and conserved the Vijayanagara ceiling paintings.' }
      ],
      historicalEvents: [
        'The legend of Jatayu falling here during Ravana’s flight with Sita; Sri Rama uttered "Le Pakshi" (Rise, bird).',
        'British engineer Hamilton attempted to dislodge the hanging pillar in the early 20th century, unintentionally causing adjacent structural movements and proving its interlocking cantilever design.'
      ],
      culturalSignificance: 'A cornerstone of South Indian art history representing the climax of Vijayanagara fresco painting with mineral-based earth pigments and dynamic drapery patterns.'
    },
    engineering: {
      architecturalStyle: 'Vijayanagara Granitic Architecture with Hemadpanthi-influenced corbeling',
      materials: ['Grey Biotite Granite', 'Pegmatite Boulders', 'Natural Vegetable and Earth Pigment Plaster'],
      geometry: {
        concept: 'Kurma Yantra & Asymmetric Mandapa Harmony',
        description: 'The complex embraces the natural topography of Kurmasaila. Rather than flattening the granite mound, builders shaped the prakaram walls around living stone outcrops.',
        mathematicalRatio: '70 sculpted pillars positioned along radial sightlines converging on the central dancing podium'
      },
      structuralInnovations: [
        {
          title: 'The Hanging Pillar (Aakaasa Stambha) Physics',
          description: 'One of the 70 pillars in the Mukha Mandapa is suspended from the corbelled ceiling with a clear millimeter gap from the stone flooring.',
          scienceFact: 'It functions as a structural tie-rod and counterweighted load-transfer pendulum rather than a compressive column, anchored into the interlocking ceiling beams.'
        },
        {
          title: 'Monolithic Nagalinga Excavation',
          description: 'Carved directly from an in-situ granite tor without moving the stone, preserving the mountain bedrock integrity.',
          scienceFact: 'Zero joint failure risk because the 7-hooded serpent and pedestal share continuous crystalline quartz bonds of the parent rock.'
        }
      ],
      acousticFeatures: 'The Natya Mandapa ceiling acts as a natural megaphone, concentrating footstep and ghungroo percussion towards the presiding priest and spectators.',
      astronomicalAlignment: 'The central eye of the temple lines up with the cardinal solstitial paths, casting morning shadows that leave the Natya Mandapa dance circle perfectly lit.',
      seismicOrClimateResilience: 'Dry-stone interlocked lintels dissipate vibrational energy through friction between granite surfaces without brittle lime shearing.'
    },
    info: {
      templeTimings: '06:00 AM - 06:00 PM (Every day, sunrise to sunset)',
      darshanTimings: 'Continuous general viewing from 06:00 AM to 05:30 PM',
      darshanTypes: [
        { name: 'Heritage Walk & Darshan', duration: '1 to 2 hours', fee: 'Free entry (ASI Monument)', note: 'Guided audio tours and licensed ASI guides available at the gate' }
      ],
      importantFestivals: [
        { name: 'Maha Shivaratri & Lepakshi Festival', month: 'February / March', description: 'A grand celebration with classical dance and music performances inside the Natya Mandapa.' }
      ],
      visitorGuidelines: [
        'Photography is allowed in the outer courtyard, Natya Mandapa, and Nandi complex. Flash photography of ceiling frescoes is prohibited to preserve natural pigments.',
        'Visitors can pass a thin cloth beneath the hanging pillar to observe the clearance.'
      ],
      dressCode: 'Modest casual attire or traditional Indian wear. Footwear must be removed before stepping onto the temple platform.',
      exactAddress: 'Veerabhadra Temple, Lepakshi, Sri Sathya Sai District, Andhra Pradesh 515331',
      nearbyLandmarks: ['Lepakshi Monolithic Nandi (200m away)', 'Kalyana Mandapa Open-Air Pillars', 'Kurmasaila Rock Formations']
    },
    travel: {
      nearestAirport: { name: 'Kempegowda International Airport (Bengaluru)', distance: '100 km (approx 2 hours via NH 44)' },
      nearestRailway: { name: 'Hindupur Railway Station (HUP)', distance: '14 km' },
      roadConnectivity: 'Smooth 4-lane expressway via NH 44 from Bengaluru or Hyderabad, turning onto the Hindupur-Lepakshi state highway.',
      localTransit: 'Frequent auto-rickshaws and state transport buses run between Hindupur bus stand and Lepakshi village.',
      suggestedVisitDuration: 'Half day (3 to 4 hours) or Day Trip from Bengaluru',
      bestSeason: 'October to March (Pleasant daytime temperatures of 20°C - 28°C)',
      nearbyAttractions: [
        { name: 'Hindupur Silk Weaving Hub', distance: '14 km', description: 'Famous traditional silk saree production clusters.' },
        { name: 'Penukonda Fort', distance: '45 km', description: 'Second capital of the Vijayanagara Empire with imposing fort walls and Gagan Mahal palace.' },
        { name: 'Puttaparthi Prashanti Nilayam', distance: '65 km', description: 'World-famous spiritual ashram with serene gardens and planetarium.' }
      ]
    },
    accommodations: [
      {
        id: 'aptdc-haritha-lepakshi',
        name: 'APTDC Haritha Hotel Lepakshi',
        distance: '0.3 km from Temple',
        rating: 4.1,
        positiveReviewPercentage: 82,
        reviewSummary: 'Government tourism resort adjacent to the temple, offering clean AC rooms and pure vegetarian South Indian food.',
        facilities: ['Restaurant', 'On-site Parking', 'Lush Lawns', 'AC Rooms'],
        priceRange: '₹1,500 - ₹2,800 / night'
      },
      {
        id: 'hindupur-comfort-inn',
        name: 'Hotel Padmini Deluxe (Hindupur)',
        distance: '14 km from Lepakshi',
        rating: 3.9,
        positiveReviewPercentage: 77,
        reviewSummary: 'Decent transit stay with parking and elevator, convenient for railway travelers.',
        facilities: ['Room Service', 'Wi-Fi', 'Attached Bath'],
        priceRange: '₹1,200 - ₹2,000 / night'
      }
    ],
    officialBooking: {
      portalName: 'Archaeological Survey of India (ASI) Heritage Portal & Andhra Pradesh Tourism',
      url: 'https://asi.nic.in/',
      servicesAvailable: ['Heritage Site Information', 'Official Conservation Guide', 'Cultural Festival Passes'],
      disclaimer: 'Lepakshi Veerabhadra Temple is a centrally protected monument under the Archaeological Survey of India. Entry to the monument is currently free of charge.'
    },
    sources: [
      { title: 'The Vijayanagara Architectural Style in Lepakshi', authority: 'Archaeological Survey of India Memoir No. 78' },
      { title: 'Ceiling Murals of Lepakshi: Chemical and Pigment Analysis', authority: 'National Museum Institute & INTACH' },
      { title: 'Monuments of Penukonda and Lepakshi', authority: 'AP State Heritage Department' }
    ]
  },

  'hampi': {
    id: 'hampi',
    name: 'Vijaya Vittala & Virupaksha Temples',
    shortName: 'Hampi Heritage Complex',
    tagline: 'Resonant Musical Pillars and the Iconic Monolithic Stone Chariot',
    stateId: 'karnataka',
    stateName: 'Karnataka',
    districtId: 'vijayanagara',
    districtName: 'Vijayanagara',
    location: 'Hampi, Tungabhadra River Basin, Vijayanagara District, Karnataka',
    imageFileName: 'HAM.jpeg',
    category: 'UNESCO World Heritage',
    period: '14th-16th Century CE',
    dynasty: 'Vijayanagara Empire (Sangama, Saluva & Tuluva Dynasties)',
    deity: 'Lord Virupaksha (Shiva), Pampa Devi & Lord Vittala (Vishnu)',
    overview: 'Sprawling over 41 square kilometers among colossal boulder-strewn landscapes along the sacred Tungabhadra River, Hampi was the opulent capital of the Vijayanagara Empire and the second largest city in the medieval world. The Vijaya Vittala complex showcases the pinnacle of stone craftsmanship with its iconic monolithic Stone Chariot and 56 musical pillars (SaReGaMa pillars) that emit acoustic musical tones when tapped.',
    highlights: [
      'The world-famous Stone Chariot (Garuda Shrine) featured on the Indian 50-rupee currency note',
      'The Maha Ranga Mandapa with 56 resonant musical pillars sculpted from resonant dolerite stone',
      'Virupaksha Temple with its 50-meter eastern Gopuram featuring an inverted pinhole camera light effect',
      'Tungabhadra boulder-balancing geological landscape and extensive subterranean aqueducts'
    ],
    history: {
      builder: 'Founded by brothers Harihara I and Bukka Raya I in 1336 CE; the Vittala complex was initiated under King Devaraya II (1422-1446 CE) and substantially embellished by Krishnadevaraya.',
      periodEra: '1336 CE to 1565 CE (Battle of Talikota).',
      purpose: 'Constructed as the imperial center of Hindu art, culture, and trade, dedicated to safeguarding Dharma and fostering world trade in gems and horses.',
      dynasticTimeline: [
        { era: '1336 CE', ruler: 'Harihara I & Bukka I', contribution: 'Established the empire under sage Vidyaranya and rebuilt the ancient Virupaksha shrine.' },
        { era: '1509-1529 CE', ruler: 'Emperor Sri Krishnadevaraya', contribution: 'Built the Ranga Mandapa of Virupaksha, the Krishna Temple, and the Vittala stone chariot.' },
        { era: '1986', ruler: 'UNESCO', contribution: 'Inscribed Hampi as a UNESCO World Heritage Site in recognition of outstanding universal value.' }
      ],
      historicalEvents: [
        'Visited by Portuguese chroniclers Domingo Paes and Fernão Nunes, who documented diamonds and rubies sold by the basket in Hampi’s bazaars.',
        'The destruction following the Battle of Talikota in 1565 CE, leaving a magnificent open-air museum of stone.'
      ],
      culturalSignificance: 'The epic Kishkindha of the Ramayana, where Rama met Sugriva, Hanuman, and the Vanara army, and where the ancient Tungabhadra river flows past granite boulders.'
    },
    engineering: {
      architecturalStyle: 'Late Vijayanagara Dravidian Architecture & Imperial Urban Water Engineering',
      materials: ['Grey and Pink Biotite Granite', 'Dolerite Dykes (Musical Lithophones)', 'Lime Plaster', 'Chiseled Stone Aqueducts'],
      geometry: {
        concept: 'Sacred Mandala and Axial Urban Alignment',
        description: 'The monumental axes of Hampi span kilometers, linking temple gopurams directly with mountain peaks like Matanga Hill through wide stone-paved chariot bazaars.',
        mathematicalRatio: 'Pillared mandapa intercolumniation follows strict 1:2 and 1:3 geometric modules'
      },
      structuralInnovations: [
        {
          title: 'Acoustic Musical Pillars (Lithophones)',
          description: 'Each of the 7 cluster pillars surrounding a central pillar emits distinct tonal notes corresponding to the Sapta Svaras (Sa, Re, Ga, Ma, Pa, Dha, Ni) and classical percussions.',
          scienceFact: 'Geological spectrometry reveals high metallic iron and silica content in the dense dolerite, with interior hollow cores tuned by stone-carvers through varying thickness and tension.'
        },
        {
          title: 'The Pinhole Camera Effect in Virupaksha Gopuram',
          description: 'A small aperture in the upper western chamber wall projects an inverted shadow of the 50-meter eastern gopuram onto the inner sanctum wall 100 meters away.',
          scienceFact: 'Demonstrates empirical mastery of geometrical optics and camera obscura principles centuries before European formalization.'
        }
      ],
      acousticFeatures: 'Vittala Mandapa acts as a mechanical sound resonator where dancers’ bells combined with stone vibrations to create immersive harmonic fields.',
      astronomicalAlignment: 'Virupaksha bazaar avenue points directly to the vernal equinox sunrise over the Tungabhadra river bends.',
      seismicOrClimateResilience: 'Mortarless interlocking granite megaliths have withstood flash floods and regional tectonic shifting for seven centuries.'
    },
    info: {
      templeTimings: 'Virupaksha: 06:00 AM - 08:00 PM; Vijaya Vittala: 08:30 AM - 05:30 PM',
      darshanTimings: 'Virupaksha sanctum darshan from 06:30 AM to 01:00 PM and 05:00 PM to 08:00 PM',
      darshanTypes: [
        { name: 'Heritage Site Exploration', duration: 'Full Day', fee: '₹40 (Indians) / ₹600 (Foreigners) covering Vittala and Zenana Enclosure', note: 'Bookable via ASI e-portal' }
      ],
      importantFestivals: [
        { name: 'Hampi Utsav', month: 'November / January', description: 'Three-day mega state cultural extravaganza featuring light and sound shows, fireworks, and classical dance against illuminated ruins.' },
        { name: 'Virupaksha Car Festival (Rathotsavam)', month: 'March / April', description: 'Massive wooden chariot pulled along the ancient Hampi Bazaar street.' }
      ],
      visitorGuidelines: [
        'Electric golf carts operate between the outer parking lot and Vittala temple to protect monuments from vehicular emissions.',
        'Do not tap or strike the musical pillars; physical striking is strictly prohibited by ASI to prevent micro-fracturing.'
      ],
      dressCode: 'Comfortable walking clothing and hat for ruins; traditional respectful attire inside active Virupaksha sanctum.',
      exactAddress: 'Hampi Historical Site, Vijayanagara District, Karnataka 583239',
      nearbyLandmarks: ['Stone Chariot', 'Lotus Mahal', 'Elephant Stables', 'Queen’s Bath', 'Matanga Hill']
    },
    travel: {
      nearestAirport: { name: 'Jindal Vijayanagar Airport, Toranagallu (VDY)', distance: '38 km (domestic flights from Bengaluru & Hyderabad)' },
      nearestRailway: { name: 'Hosapete Junction (HPT)', distance: '13 km' },
      roadConnectivity: 'Excellent 4-lane highway connectivity from Bengaluru (340 km via NH 48 & NH 50) and Goa (320 km).',
      localTransit: 'Bicycles, motorized scooters, and auto-rickshaws widely available for rent throughout Hampi village and Kamalapura.',
      suggestedVisitDuration: '3 Full Days',
      bestSeason: 'October to March (Winter with cool breeze; summer temperatures can exceed 40°C)',
      nearbyAttractions: [
        { name: 'Anegundi (Ancient Kishkindha)', distance: '5 km across river', description: 'Prehistoric rock art, Anjanadri Hill (birthplace of Lord Hanuman), and rustic village culture.' },
        { name: 'Tungabhadra Dam & Musical Gardens', distance: '16 km', description: 'Scenic reservoir with terraced Japanese gardens and evening water musical fountain.' }
      ]
    },
    accommodations: [
      {
        id: 'kstdc-mayura-kamalapura',
        name: 'KSTDC Hotel Mayura Bhuvaneshwari',
        distance: '3.5 km from Vittala Temple',
        rating: 4.2,
        positiveReviewPercentage: 86,
        reviewSummary: 'Karnataka Tourism’s flagship heritage hotel in Kamalapura, serene location with excellent restaurant and tour guides.',
        facilities: ['Restaurant', 'Bar', 'Travel Desk', 'Spacious AC Rooms'],
        priceRange: '₹2,500 - ₹4,500 / night'
      },
      {
        id: 'evolve-back-kamalapura',
        name: 'Evolve Back Kamalapura Palace',
        distance: '6 km from Monuments',
        rating: 4.8,
        positiveReviewPercentage: 96,
        reviewSummary: 'Ultra-luxury resort designed like a Vijayanagara royal fortress with private plunge pools and royal dining.',
        facilities: ['Private Pools', 'Ayurveda Spa', 'Infinity Pool', 'Fine Dining'],
        priceRange: '₹22,000 - ₹40,000 / night'
      },
      {
        id: 'heritage-resort-hampi',
        name: 'Heritage Resort Hampi',
        distance: '7 km from Hampi',
        rating: 4.3,
        positiveReviewPercentage: 84,
        reviewSummary: 'Eco-friendly organic cottage resort surrounded by coconut groves with swimming pool and spa.',
        facilities: ['Swimming Pool', 'Spa', 'Organic Food', 'Cycling Trails'],
        priceRange: '₹5,500 - ₹9,000 / night'
      }
    ],
    officialBooking: {
      portalName: 'Archaeological Survey of India & Karnataka State Tourism Development Corporation',
      url: 'https://asi.nic.in/',
      servicesAvailable: ['Combined ASI Monument E-Ticket', 'KSTDC Package Tours', 'Licensed Guide Booking'],
      disclaimer: 'Always book ASI entrance tickets through the verified central government portal (asi.payumoney.com or asi.nic.in).'
    },
    sources: [
      { title: 'Hampi Vijayanagara: Archaeological Survey of India Monograph', authority: 'ASI Research Series' },
      { title: 'Acoustic Properties of the Musical Pillars of Hampi', authority: 'National Institute of Design & Acoustical Society of India' },
      { title: 'City of Victory: Rise and Fall of Vijayanagara', authority: 'Karnataka Historical Society' }
    ]
  },

  'puri': {
    id: 'puri',
    name: 'Shree Jagannath Temple',
    shortName: 'Jagannath Puri',
    tagline: 'The Sacred Kalinga Chariot City and Aerodynamic Nilachakra',
    stateId: 'odisha',
    stateName: 'Odisha',
    districtId: 'puri',
    districtName: 'Puri',
    location: 'Bada Danda (Grand Road), Puri, Odisha',
    imageFileName: 'PUR.jpeg',
    category: 'Maha Kshetra',
    period: '12th Century CE (1161 CE)',
    dynasty: 'Eastern Ganga Dynasty (King Anantavarman Chodaganga Deva & Ananga Bhima Deva)',
    deity: 'Lord Jagannath (Daru Brahma), Lord Balabhadra & Devi Subhadra',
    overview: 'One of the four supreme Char Dham pilgrimage shrines, the 12th-century Shree Jagannath Temple is a masterpiece of Kalinga architecture soaring to 65 meters on the Bay of Bengal coastline. Built upon the elevated Kurma Beda hillock, the temple is famed for its sacred mysteries—the flag that flutters against the breeze, the 20-foot Nilachakra forged of eight alloys, and the largest traditional kitchen in the world (Roshaghara) feeding thousands daily.',
    highlights: [
      'The majestic 65-meter Deula Shikhara engineered without casting a shadow on the ground at noon',
      'The 20-foot Ashtadhatu Nilachakra mounted atop the spire, visible from anywhere in Puri',
      'Roshaghara: World’s largest open-hearth temple kitchen cooking in unglazed earthen pots stacked seven high',
      'The grand Ratha Yatra: Annual chariot festival pulling three monumental wooden chariots along Bada Danda'
    ],
    history: {
      builder: 'Initiated by Eastern Ganga King Anantavarman Chodaganga Deva in the 12th century and completed by his descendant King Anangabhima Deva in 1198 CE.',
      periodEra: '12th Century (1161 CE onwards).',
      purpose: 'Sanctuary for the worship of Daru Brahma (manifestation of Lord Vishnu in sacred neem wood), uniting tribal, tantric, and Vedic spiritual traditions.',
      dynasticTimeline: [
        { era: '1161 CE', ruler: 'King Anantavarman Chodaganga', contribution: 'Laid the massive granite-khondalite foundation and raised the Vimana and Jagamohana.' },
        { era: '1435 CE', ruler: 'Gajapati Kapilendra Deva', contribution: 'Constructed the outer Meghnad Pacheri boundary wall protecting the complex.' },
        { era: '16th Century', ruler: 'Sri Chaitanya Mahaprabhu', contribution: 'Spent the final 24 years of his divine ecstasy preaching Gaudiya Vaishnavism in Puri.' }
      ],
      historicalEvents: [
        'Nabakalebara ritual: Periodic divine rebirth of the sacred wooden deities every 12-19 years.',
        'Survival against 18 historical maritime and overland invasions through courageous concealment of the deities in Chilika Lake and mountain caves.'
      ],
      culturalSignificance: 'The supreme center of Odia cultural identity where caste distinctions are dissolved before Mahaprasad.'
    },
    engineering: {
      architecturalStyle: 'Rekha Deula & Pidha Deula of Kalinga Architectural Order',
      materials: ['Khondalite Stone', 'Baidala Sandstone', 'Ashtadhatu (Eight Metal Alloy for Nilachakra)', 'Iron Dowels and Corbelled Beams'],
      geometry: {
        concept: 'Pancharatha Plan & Astylar Corbelled Vaulting',
        description: 'The vertical elevation is subdivided into Pabhaga, Jangha, and Gandi, crowned by the massive Amalaka and Kalasa. The spire curves inward with parabolic curvature minimizing wind shear from cyclone gales.',
        mathematicalRatio: 'Height to base ratio of 4:1 with stepped curvature that diffuses ocean gusts'
      },
      structuralInnovations: [
        {
          title: 'Coastal Cyclone Aerodynamics',
          description: 'The parabolic fluting and vertical pagas act as air-foils that break cyclonic coastal wind pressures up to 250 km/h.',
          scienceFact: 'Wind-tunnel tests confirm that the segmented Kalinga Rekha spire dissipates turbulent vortices, shielding the upper stone amalaka from horizontal shear forces.'
        },
        {
          title: 'Seven-Pot Stack Thermodynamic Cooking',
          description: 'In the ancient temple kitchen, food is cooked using pure wood fires in clay pots placed one above the other in vertical stacks of seven.',
          scienceFact: 'Steam rising through the porous clay conducts heat uniformly, causing the top pot to cook simultaneously with the bottom pot through thermodynamic convection.'
        }
      ],
      acousticFeatures: 'Upon stepping through the Simhadwara (Lion Gate), the roar of the Bay of Bengal ocean waves is acoustic-baffled by the thick 20-foot Meghnad Pacheri wall, producing silence.',
      astronomicalAlignment: 'Every day at sunset, a hereditary Sevayat climbs the 65-meter dome barehanded to change the Patitapavana flag, which flutters according to coastal sea-breeze pressure inversions.',
      seismicOrClimateResilience: 'Interlocking khondalite blocks joined with forged iron clamps have survived salt mist corrosion and tectonic tremors for 850 years.'
    },
    info: {
      templeTimings: '05:00 AM - 11:30 PM (With short closures during special Bhog offerings)',
      darshanTimings: 'Mangala Alati: 05:00 AM; Sahanamela (Free General Darshan): 07:00 AM - 08:30 AM (schedule subject to rituals)',
      darshanTypes: [
        { name: 'Sahanamela Public Darshan', duration: '1.5 to 3 hours', fee: 'Free', note: 'Allows devotees close darshan inside Bhitara Katha' },
        { name: 'Parimanik Darshan (Ticketed)', duration: '1 hour', fee: '₹50 (when notified)', note: 'Conducted after certain major daily rituals' }
      ],
      importantFestivals: [
        { name: 'Ratha Yatra (Car Festival)', month: 'Ashadha (June / July)', description: 'World-renowned chariot procession of Lord Jagannath, Balabhadra, and Subhadra to Gundicha Temple.' },
        { name: 'Snana Yatra', month: 'Jyeshtha Purnima (May / June)', description: 'Grand bathing ceremony with 108 pots of sacred water followed by Hathi Besha.' }
      ],
      visitorGuidelines: [
        'Only practicing Hindus are permitted inside the inner sanctum as per age-old customs; other visitors can view the shrine from the Raghunandan Library roof or during Ratha Yatra.',
        'Strict ban on leather items, mobile phones, smartwatches, and cameras inside the Meghnad Pacheri.'
      ],
      dressCode: 'Conservative Indian traditional dress (Dhoti/Kurta for men; Saree/Salwar for women).',
      exactAddress: 'Shree Jagannath Temple, Grand Road, Puri, Odisha 752001',
      nearbyLandmarks: ['Gundicha Temple', 'Golden Beach (Blue Flag certified)', 'Swargadwar', 'Narendra Pokhari']
    },
    travel: {
      nearestAirport: { name: 'Biju Patnaik International Airport, Bhubaneswar (BBI)', distance: '60 km via NH 316' },
      nearestRailway: { name: 'Puri Railway Station (PURI)', distance: '2.5 km' },
      roadConnectivity: 'Smooth 4-lane national expressway connecting Bhubaneswar to Puri in approximately 75 minutes.',
      localTransit: 'Cycle-rickshaws, battery e-rickshaws, and auto-rickshaws dominate Bada Danda; vehicles restricted near temple.',
      suggestedVisitDuration: '2 to 3 Days',
      bestSeason: 'October to February (Pleasant winter beach weather; Ratha Yatra during monsoon)',
      nearbyAttractions: [
        { name: 'Konark Sun Temple (UNESCO World Heritage)', distance: '35 km along marine drive', description: 'Colossal 13th-century stone chariot dedicated to the Sun God Surya.' },
        { name: 'Chilika Lake (Satapada Dolphin Sanctuary)', distance: '48 km', description: 'Asia’s largest brackish water lagoon, home to Irrawaddy dolphins and migratory birds.' }
      ]
    },
    accommodations: [
      {
        id: 'mayfair-heritage-puri',
        name: 'MAYFAIR Heritage Puri',
        distance: '3.5 km from Temple (Chakratirtha Beach)',
        rating: 4.6,
        positiveReviewPercentage: 92,
        reviewSummary: 'Top-rated beachside luxury resort with sea-view rooms, lush landscaping, and exceptional Odia cuisine.',
        facilities: ['Private Beach Access', 'Swimming Pool', 'Spa', 'Multi-Cuisine Dining'],
        priceRange: '₹7,500 - ₹14,000 / night'
      },
      {
        id: 'panthanivas-puri-otdc',
        name: 'OTDC Panthanivas Puri',
        distance: '2.8 km from Temple',
        rating: 4.0,
        positiveReviewPercentage: 78,
        reviewSummary: 'Government-run beach resort with spacious rooms, verified safety, and great seafood restaurant.',
        facilities: ['Sea Facing', 'Restaurant', 'Free Parking'],
        priceRange: '₹2,000 - ₹3,800 / night'
      },
      {
        id: 'unverified-guesthouse-puri',
        name: 'Old Station Road Shady Guesthouse',
        distance: '3.1 km',
        rating: 2.8,
        positiveReviewPercentage: 35,
        reviewSummary: 'Frequent guest complaints of uncleaned bedsheets and water outages. Excluded from verified list.',
        facilities: ['Fan Room'],
        priceRange: '₹500 / night'
      }
    ],
    officialBooking: {
      portalName: 'Shree Jagannath Temple Administration (SJTA) & Odisha Tourism',
      url: 'https://shreejagannatha.in/',
      servicesAvailable: ['Official Ritual Schedule', 'Ratha Yatra Live Broadcast', 'Mahaprasad Information', 'Donation Gateways'],
      disclaimer: 'The Shree Jagannath Temple Administration (SJTA) does not sell VIP darshan tickets through private commercial agents. Rely solely on official SJTA notices.'
    },
    sources: [
      { title: 'Madala Panji (Temple Chronicle of Puri)', authority: 'Historical Archives of SJTA' },
      { title: 'The Cult of Jagannath and the Regional Tradition of Orissa', authority: 'Manohar Publishers & ASI' },
      { title: 'Engineering and Architectural Study of Kalinga Deula Spire', authority: 'IIT Bhubaneswar Civil Engineering Division' }
    ]
  },

  'somnath': {
    id: 'somnath',
    name: 'Shree Somnath Jyotirlinga Temple',
    shortName: 'Somnath Temple',
    tagline: 'First Among the Twelve Jyotirlingas & The Unobstructed Sea-Pillar',
    stateId: 'gujarat',
    stateName: 'Gujarat',
    districtId: 'gir-somnath',
    districtName: 'Gir Somnath',
    location: 'Prabhas Patan, Veraval Coast, Gir Somnath District, Gujarat',
    imageFileName: 'a.jpeg',
    category: 'Jyotirlinga',
    jyotirlingaNumber: 1,
    period: 'Ancient / Modern Kailash Mahameru Prasad Reconstruction (1951 CE)',
    dynasty: 'Solanki / Chaulukya Architectural Heritage; Reconstructed by Sardar Vallabhbhai Patel',
    deity: 'Lord Somnath (Bhairaveshwara)',
    overview: 'Standing majestically on the shores of the Arabian Sea where the holy rivers Hiran, Kapila, and Saraswati converge into the ocean (Triveni Sangam), Shree Somnath is reverently honored as the Aadi Jyotirlinga—the first of the twelve sacred light shrines of Lord Shiva. Celebrated as the "Shrine Eternal," it has risen from destruction over a dozen times, symbolizing the indomitable spirit of Indian civilization.',
    highlights: [
      'The legendary Baan Stambh (Arrow Pillar) marking an unobstructed ocean straight line to Antarctica',
      'Exquisite Kailash Mahameru Prasad architecture carved in golden sandstone by traditional Sompura sculptors',
      'The 155-foot soaring Shikhara crowned with a 10-ton Kalash and 27-foot flag mast',
      'Evening 3D sound-and-light show "Jay Somnath" with voiceover by Amitabh Bachchan on the sea ramparts'
    ],
    history: {
      builder: 'Ancient mythological patron Soma (Moon God); historically rebuilt by Solanki King Kumarapala (1169 CE), King Bhoja of Malwa, and resurrected in independent India by Sardar Vallabhbhai Patel and inaugurated by President Dr. Rajendra Prasad in 1951.',
      periodEra: 'Continuous civilizational presence over 2,000 years; current monument completed 1951-1965 CE.',
      purpose: 'The primary Jyotirlinga shrine where the Moon God worshipped Shiva to cure his curse of waning, obtaining eternal renewal.',
      dynasticTimeline: [
        { era: '649 CE', ruler: 'Maitraka Kings of Vallabhi', contribution: 'Built the second major stone temple at Prabhas Patan.' },
        { era: '1169 CE', ruler: 'Solanki King Kumarapala', contribution: 'Built a magnificent stone temple in the classic Solanki Maru-Gurjara style.' },
        { era: '1947-1951 CE', ruler: 'Sardar Vallabhbhai Patel & K.M. Munshi', contribution: 'Pledged the reconstruction of the temple after Indian independence.' }
      ],
      historicalEvents: [
        'Resisted multiple sackings between 1026 CE and 1706 CE, rising each time as a grander stone monument.',
        'The historic consecration of the Pran-Pratishtha by India’s first President Dr. Rajendra Prasad on May 11, 1951.'
      ],
      culturalSignificance: 'Embodied testimony to the permanence of Indian sacred tradition over transient military destruction.'
    },
    engineering: {
      architecturalStyle: 'Maru-Gurjara (Solanki) Architecture in Kailash Mahameru Prasad Classification',
      materials: ['Dhrangadhra Yellow-Gold Sandstone', 'Lead-Coated Iron Anchors', 'Granite Substructure Foundations'],
      geometry: {
        concept: 'Vastu Shastra Meru Prastara Geometrical Ascent',
        description: 'Designed by master architect Prabhashankar Sompura according to canonical texts. The spire rises in nine receding horizontal bhumis with miniature urushringa turrets reinforcing the central tower.',
        mathematicalRatio: 'Base-to-crest ratio of 1:2.4 with 45-degree corner offset projections'
      },
      structuralInnovations: [
        {
          title: 'The Baan Stambh (Arrow Pillar) Marine Geometry',
          description: 'An ancient navigational pillar inscribed with the Sanskrit verse stating that no land mass exists on the exact meridian heading south from this point to the South Pole.',
          scienceFact: 'Modern satellite GIS cartography confirms that drawing a line from 20°53’17" N, 70°24’05" E due south reaches Antarctica (9,936 km) across open Southern Ocean without touching a single landmass.'
        },
        {
          title: 'Marine Saline Corrosion Defense',
          description: 'Standing 20 meters from breaking ocean surf, the porous sandstone is treated with periodic vacuum-impregnated microcrystalline silicon sealants.',
          scienceFact: 'Engineered perimeter seawalls absorb kinetic wave forces up to 80 kilo-Newtons per square meter.'
        }
      ],
      acousticFeatures: 'The massive Sabha Mandapa dome creates an acoustic natural resonance chamber where conch shell blasts sustain for over 7 seconds.',
      astronomicalAlignment: 'The sanctum entrance faces east towards the Arabian Sea horizon, capturing the morning sun reflections off ocean swells.',
      seismicOrClimateResilience: 'Heavy dry-stacked sandstone blocks with interlocking tongue-and-groove joints allow minor seismic flexibility without brittle cracking.'
    },
    info: {
      templeTimings: '06:00 AM - 10:00 PM (Every day without interruption)',
      darshanTimings: 'Aarti Timings: 07:00 AM, 12:00 PM, and 07:00 PM; General darshan throughout open hours',
      darshanTypes: [
        { name: 'General Public Darshan', duration: '30 to 60 minutes', fee: 'Free', note: 'Continuous flow through air-cooled queue complex' },
        { name: 'Special Puja Registration', duration: 'Conducted during ritual slots', fee: 'Variable (₹100 to ₹1,500)', note: 'Register at the official Trust office or portal' }
      ],
      importantFestivals: [
        { name: 'Maha Shivaratri Fair', month: 'Phalguna (February / March)', description: 'Four-day spiritual fair with over 500,000 pilgrims attending midnight Maha Puja.' },
        { name: 'Kartik Purnima Fair', month: 'November', description: 'Celebrated with traditional folk dances, Bhavai theater, and sacred holy bath at Triveni Sangam.' }
      ],
      visitorGuidelines: [
        'Strict electronic security: Mobiles, cameras, smartwatches, and car keys must be stored in the computerized safe lockers provided free by the Trust.',
        'High-security perimeter with baggage scanners and frisking.'
      ],
      dressCode: 'Modest and traditional clothing. Bermudas, shorts, and miniskirts are strictly prohibited.',
      exactAddress: 'Shree Somnath Jyotirlinga Temple, Prabhas Patan, Veraval, Gujarat 362268',
      nearbyLandmarks: ['Baan Stambh (Arrow Pillar)', 'Triveni Sangam', 'Bhalka Tirth', 'Somnath Promenade & Beach']
    },
    travel: {
      nearestAirport: { name: 'Keshod Airport (IXK) / Diu Airport (DIU)', distance: 'Keshod 55 km, Diu 85 km, Rajkot Airport 195 km' },
      nearestRailway: { name: 'Somnath Railway Station (SMNH) & Veraval Junction (VRL)', distance: 'Somnath 1 km, Veraval 6 km' },
      roadConnectivity: 'Smooth 4-lane coastal highway from Rajkot, Porbandar, and Ahmedabad with luxury AC buses.',
      localTransit: 'Free battery-operated buggies for senior citizens operated by the Trust; auto-rickshaws widely available.',
      suggestedVisitDuration: '1 to 2 Days',
      bestSeason: 'October to March (Pleasant coastal breezes with 15°C to 28°C weather)',
      nearbyAttractions: [
        { name: 'Bhalka Tirth', distance: '4 km', description: 'Sacred spot where Lord Krishna rested under a Peepal tree before ascending to his heavenly abode.' },
        { name: 'Gir National Park (Asiatic Lion Safari)', distance: '45 km', description: 'The only natural habitat in the world of the endangered Asiatic Lion.' }
      ]
    },
    accommodations: [
      {
        id: 'somnath-sagar-darshan',
        name: 'Sagar Darshan Guest House (Somnath Trust)',
        distance: '0.2 km from Temple',
        rating: 4.6,
        positiveReviewPercentage: 91,
        reviewSummary: 'Flagship Trust sea-facing luxury guest house with panoramic Arabian Sea views and immaculate cleanliness.',
        facilities: ['Sea Facing Balcony', 'Trust Dining Hall', 'Elevator', '24/7 Hot Water'],
        priceRange: '₹2,000 - ₹3,500 / night'
      },
      {
        id: 'somnath-maheshwari-bhavan',
        name: 'Shree Maheshwari Bhavan Somnath',
        distance: '0.8 km from Temple',
        rating: 4.2,
        positiveReviewPercentage: 83,
        reviewSummary: 'Clean, spacious community guest house with ample parking and vegetarian dining hall.',
        facilities: ['AC Rooms', 'Pure Veg Canteen', 'Free Parking'],
        priceRange: '₹1,000 - ₹1,800 / night'
      },
      {
        id: 'the-ferns-somnath',
        name: 'The Fern Residency Somnath',
        distance: '7 km from Temple (Veraval bypass)',
        rating: 4.3,
        positiveReviewPercentage: 85,
        reviewSummary: 'Modern eco-sensitive boutique hotel with gym, swimming pool, and premium breakfast buffet.',
        facilities: ['Swimming Pool', 'Gym', 'Restaurant', 'Free Wi-Fi'],
        priceRange: '₹3,500 - ₹6,000 / night'
      }
    ],
    officialBooking: {
      portalName: 'Shree Somnath Trust Official Web Portal',
      url: 'https://somnath.org/',
      servicesAvailable: ['Online Room Booking (Sagar Darshan & Lilavati)', 'Special Puja & Yajna Sankalp', 'Live Darshan Streaming', 'Prasad Couriers'],
      disclaimer: 'The Somnath Trust manages its own guest houses directly. Beware of fraudulent search-engine ads demanding advance UPI payments for guest houses.'
    },
    sources: [
      { title: 'Somanatha: The Many Voices of a History', authority: 'Prof. Romila Thapar / Penguin' },
      { title: 'Shree Somnath Trust Official Heritage Monograph', authority: 'Shree Somnath Trust Research Wing' },
      { title: 'Archaeological Survey of Western India: Prabhas Patan Excavation Reports', authority: 'ASI Vadodara Circle' }
    ]
  },

  'mallikarjuna': {
    id: 'mallikarjuna',
    name: 'Sri Bhramaramba Mallikarjuna Swamy Temple',
    shortName: 'Mallikarjuna Srisailam',
    tagline: 'Rare Confluence of Jyotirlinga and Shakti Peeth atop Nallamala',
    stateId: 'andhra-pradesh',
    stateName: 'Andhra Pradesh',
    districtId: 'nandyal',
    districtName: 'Nandyal',
    location: 'Srisailam Hilltop, Nallamala Forest, Nandyal District, Andhra Pradesh',
    imageFileName: 'b.jpeg',
    category: 'Jyotirlinga',
    jyotirlingaNumber: 2,
    period: '2nd Century CE / 14th Century CE Fortress Fortifications',
    dynasty: 'Ikshvaku, Pallava, Kakatiya, Reddi & Vijayanagara Dynasties',
    deity: 'Lord Mallikarjuna (Shiva) & Goddess Bhramaramba Devi (Shakti)',
    overview: 'Perched atop the ancient Srisailam mountain (Sriparvata) in the dense tiger reserves of the Nallamala forest beside the Krishna river (Pathalaganga), Sri Mallikarjuna is unique in India as one of only three shrines where a Jyotirlinga and an ancient Maha Shakti Peeth co-exist within the same sanctified fortress enclosure. Revered in the Mahabharata and sung by Adi Shankaracharya in his Sivanandalahari.',
    highlights: [
      'Simultaneous 2nd Jyotirlinga and 18th Maha Shakti Peeth (Neck of Sati Devi)',
      'Magnificent 6-meter-high exterior fortress prakaram wall sculpted with over 3,000 narrative bas-relief panels',
      'Sacred Pathalaganga gorge 500 steps below, connected by modern ropeway and ghats',
      'Unique privilege allowing devotees of all castes to touch the sacred Jyotirlinga with their own hands during Sparsha Darshan'
    ],
    history: {
      builder: 'Ancient roots dating to the 2nd century Ikshvakus; extensively expanded by Kakatiya Queen Rudrama Devi, King Prataparudra, and Vijayanagara Emperor Harihara I.',
      periodEra: '2nd Century CE to 15th Century CE.',
      purpose: 'The sacred hill of Sriparvata where Kartikeya meditated and Lord Shiva manifested as jasmine-crowned Mallikarjuna to bless Parvati as Bhramaramba (the Bee Goddess).',
      dynasticTimeline: [
        { era: '1313 CE', ruler: 'Kakatiya Prataparudra', contribution: 'Paved the grand stone steps leading down to the Krishna river (Pathalaganga).' },
        { era: '1398 CE', ruler: 'Reddi Kings of Kondaveedu', contribution: 'Constructed the Mukha Mandapa and golden-plated the Dwajasthambham.' },
        { era: '1520 CE', ruler: 'Emperor Sri Krishnadevaraya', contribution: 'Built the imposing Salu Mandapas and the 5-tiered eastern Rajagopuram.' }
      ],
      historicalEvents: [
        'Chattrapati Shivaji Maharaj visited in 1677 CE, stayed for months in spiritual seclusion, and built the northern gopuram.',
        'Adi Shankaracharya composed the immortal Bhramarambashtakam and Sivanandalahari at Srisailam.'
      ],
      culturalSignificance: 'A major sanctuary for Chenchu tribal devotees who maintain centuries-old customary rights to enter and perform direct archana in the sanctum.'
    },
    engineering: {
      architecturalStyle: 'Dravidian-Kakatiya Fortress Architecture',
      materials: ['Nallamala Dense Grey Granite', 'Sandstone Bas-Reliefs', 'Teakwood Framing', 'Gold-Coated Brass Kalasas'],
      geometry: {
        concept: 'Chathurasra (Square Fortress) Sacred Enclosure',
        description: 'The temple is guarded by a massive outer stone perimeter wall measuring 200m x 150m, constructed with interlocking megalithic ashlar blocks that mimic an impregnable mountain fortress.',
        mathematicalRatio: 'Prakaram panels carved in uniform 3:1 relief bands celebrating Puranic narratives'
      },
      structuralInnovations: [
        {
          title: 'Megalithic Dry-Stone Prakaram Wall',
          description: 'The exterior 6-meter wall was erected without binding mortar, utilizing hidden mortise-tenon stone lugs that lock neighboring blocks under self-weight.',
          scienceFact: 'Tensile load is distributed evenly across 15,000 square meters of stone, resisting mountain slope settlement over 700 years.'
        },
        {
          title: 'Pathalaganga River Valley Hydrology',
          description: 'Deep subterranean natural karst limestone fissures channel mountain rainwater away from the temple foundations into the Krishna river valley.',
          scienceFact: 'High natural groundwater recharge without foundation scouring or wall cracking.'
        }
      ],
      acousticFeatures: 'In the Bhramaramba Devi sanctum, the unique acoustic cavity produces a low hum resembling a swarming bee hive (Bhramara resonance).',
      astronomicalAlignment: 'Oriented precisely to the east; on Maha Shivaratri, midnight planetary configurations align with the northern Gopuram axis.',
      seismicOrClimateResilience: 'Heavy granite foundation blocks grounded directly into Nallamala quartzite bedrock eliminate seismic shear amplification.'
    },
    info: {
      templeTimings: '04:30 AM - 10:00 PM (With afternoon break from 03:30 PM to 06:00 PM for cleaning and alankaram)',
      darshanTimings: 'Sparsha Darshan (Touching the Lingam): 06:00 AM - 02:00 PM and 06:30 PM - 09:30 PM (as per online slots)',
      darshanTypes: [
        { name: 'Sparsha Darshan (Direct Touch)', duration: '1 to 2 hours', fee: '₹500', note: 'Allows devotees to touch the Jyotirlinga directly; traditional dress compulsory' },
        { name: 'Sheeghra Darshan (Fast Track)', duration: '45 to 90 minutes', fee: '₹150', note: 'Dedicated queue bypassing general line' },
        { name: 'Sarva Darshan (Free)', duration: '2 to 5 hours', fee: 'Free', note: 'Standard queue with seating bays and water' }
      ],
      importantFestivals: [
        { name: 'Maha Shivaratri Brahmotsavam', month: 'February / March', description: 'Seven-day grand festival with Kalyanotsavam and Lingodbhava midnight abhishekams.' },
        { name: 'Ugadi Mahotsavam', month: 'March / April', description: 'Massive pilgrimage of Kannada and Maharashtrian devotees walking hundreds of kilometers across the Nallamala forest.' }
      ],
      visitorGuidelines: [
        'Nallamala forest ghat road has night traffic closures from 09:00 PM to 06:00 AM to protect wildlife (tigers, leopards). Plan travel accordingly.',
        'Electronics and leather belts must be left in lockers before entering sanctum.'
      ],
      dressCode: 'Strict Traditional: Men must wear Dhoti with Uttariyam; Women must wear Saree or Chudidar with Dupatta.',
      exactAddress: 'Sri Bhramaramba Mallikarjuna Swamy Temple, Srisailam, Nandyal District, Andhra Pradesh 518101',
      nearbyLandmarks: ['Pathalaganga Ropeway & Ghats', 'Srisailam Dam & Reservoir', 'Sakshi Ganapathi Temple', 'Shikhareswaram Peak']
    },
    travel: {
      nearestAirport: { name: 'Rajiv Gandhi International Airport, Hyderabad (HYD)', distance: '210 km via Dindi & Nallamala forest road' },
      nearestRailway: { name: 'Markapur Road (MRK)', distance: '85 km (frequent buses available)' },
      roadConnectivity: 'Scenic mountain ghat road traversing the Rajiv Gandhi Wildlife Sanctuary with hairpin turns and lush panoramic viewpoints.',
      localTransit: 'APSRTC buses, temple ropeway to Pathalaganga, and battery buggies available on hill.',
      suggestedVisitDuration: '2 Full Days',
      bestSeason: 'September to February (Lush green forest, cool hill climate)',
      nearbyAttractions: [
        { name: 'Akka Mahadevi Caves', distance: '10 km by boat on Krishna river', description: 'Natural limestone caves where the 12th-century Veerashaiva mystic Akka Mahadevi meditated.' },
        { name: 'Shikhareswaram Peak', distance: '8 km', description: 'The highest mountain peak of Srisailam offering a majestic panoramic view of the Krishna river valley.' }
      ]
    },
    accommodations: [
      {
        id: 'srisaila-devasthanam-cottages',
        name: 'Srisaila Devasthanam Ganga Sadan & Gouri Sadan',
        distance: '0.4 km from Temple',
        rating: 4.3,
        positiveReviewPercentage: 87,
        reviewSummary: 'Official temple board cottages offering clean AC and non-AC rooms, online booking via devasthanam website.',
        facilities: ['24/7 Security', 'RO Water', 'Parking', 'Temple Proximity'],
        priceRange: '₹800 - ₹2,500 / night'
      },
      {
        id: 'haritha-resort-srisailam',
        name: 'APTDC Haritha Hotel Srisailam',
        distance: '1.2 km from Temple',
        rating: 4.1,
        positiveReviewPercentage: 81,
        reviewSummary: 'Government tourism property situated on scenic cliff overlooking the valley, with on-site multi-cuisine restaurant.',
        facilities: ['Valley View', 'Restaurant', 'Free Parking', 'AC Deluxe Rooms'],
        priceRange: '₹2,200 - ₹3,800 / night'
      }
    ],
    officialBooking: {
      portalName: 'Sri Bhramaramba Mallikarjuna Swamy Devasthanam Official Portal',
      url: 'https://srisailadevasthanam.org/',
      servicesAvailable: ['Sparsha Darshan Online Slot Booking', 'Devasthanam Hilltop Cottages', 'Arjitha Seva Tokens', 'Nityannadanam Donations'],
      disclaimer: 'Book only through the official AP Government Devasthanam portal. The forest department strictly penalizes parking along unauthorized ghat sections.'
    },
    sources: [
      { title: 'Inscriptions of Srisailam Temple Complex', authority: 'Andhra Pradesh State Epigraphical Series' },
      { title: 'The Puranic Heritage of Sriparvata', authority: 'Srisaila Devasthanam Research Publications' },
      { title: 'Architectural Analysis of the Kakatiya Relief Walls', authority: 'INTACH Hyderabad Chapter' }
    ]
  },

  'mahakaleshwar': {
    id: 'mahakaleshwar',
    name: 'Shri Mahakaleshwar Jyotirlinga Temple',
    shortName: 'Mahakaleshwar Ujjain',
    tagline: 'South-Facing Lord of Time at the Prime Meridian of Ancient Astronomy',
    stateId: 'madhya-pradesh',
    stateName: 'Madhya Pradesh',
    districtId: 'ujjain',
    districtName: 'Ujjain',
    location: 'Rudra Sagar Lake, Shipra River Basin, Ujjain, Madhya Pradesh',
    imageFileName: 'c.jpeg',
    category: 'Jyotirlinga',
    jyotirlingaNumber: 3,
    period: 'Ancient / Rebuilt 1734 CE (Maratha Revival)',
    dynasty: 'Paramara Dynasty & Maratha General Ramchandra Baba Sukhtankar (Scindia Dynasty)',
    deity: 'Lord Mahakal (Dakshinmukhi Shiva)',
    overview: 'Located in the ancient city of Ujjayini (Avanti)—the Greenwich of ancient Indian astronomical calculation situated where the Tropic of Cancer intersects the ancient Prime Meridian—Shri Mahakaleshwar is the only South-facing (Dakshinmukhi) Jyotirlinga among the twelve. Famed worldwide for the daily Bhasma Aarti performed with consecrated sacred ash before dawn, the temple complex features a unique three-tiered sanctum housing Mahakal on the bottom floor, Omkareshwar in the middle, and Nagchandreshwar on the top tier (opened only once a year on Nag Panchami).',
    highlights: [
      'The only South-facing (Dakshinmukhi) Jyotirlinga, master of cosmic time (Kala) and death',
      'The world-renowned daily pre-dawn Bhasma Aarti (04:00 AM) performed with sacred cow-dung ash',
      'Three-tiered sanctum architecture housing three deities vertically',
      'The grand 2.5-kilometer Mahakal Lok corridor decorated with 108 grand sculpted mural pillars and fountains'
    ],
    history: {
      builder: 'Ancient foundation celebrated by Kalidasa in Meghaduta; the current structure was restored in 1734 CE by Ramchandra Baba Sukhtankar under the Scindias of Gwalior.',
      periodEra: 'Continuous ancient existence; rebuilt 18th century (1734 CE onwards).',
      purpose: 'Sanctuary of Mahakala, the cosmic governor of time, dissolution, and eternity in the city of Raja Vikramaditya.',
      dynasticTimeline: [
        { era: '4th-5th Century CE', ruler: 'Gupta Empire & Vikramaditya', contribution: 'Flourished as the intellectual capital of India with Varahamihira and Kalidasa.' },
        { era: '11th Century CE', ruler: 'Paramara Dynasty (King Bhoja)', contribution: 'Expanded the subterranean sanctum and raised a grand stone shikhara.' },
        { era: '1734 CE', ruler: 'Maratha General Ramchandra Shenvi', contribution: 'Reconstructed the temple following Maratha resurgence, initiating modern worship patterns.' }
      ],
      historicalEvents: [
        'Surviving the 1235 CE invasion by Iltutmish; the Jyotirlinga was kept concealed in the nearby Koti Teerth pond.',
        'Inauguration of the 900-meter-long modern Mahakal Lok corridor in October 2022, reviving ancient experiential pilgrimage.'
      ],
      culturalSignificance: 'The heart of the 12-year Ujjain Simhastha Kumbh Mela, where tens of millions gather for the sacred royal bath in the Shipra river.'
    },
    engineering: {
      architecturalStyle: 'Bhumija-Maratha Fusion Architecture with Subterranean Garbhagriha',
      materials: ['Vindhyan Yellow Sandstone', 'Basalt Flagstones', 'Brass and Silver Repoussé Sheetwork'],
      geometry: {
        concept: 'Tropic of Cancer Astronomical Zero-Meridian Alignment',
        description: 'Ujjain was established in ancient astronomical treatises (Surya Siddhanta) as the zero-meridian of terrestrial longitude (Madhyarekha). The sanctum’s orientation aligns with the solar transit at the summer solstice.',
        mathematicalRatio: 'Vertical 3-tier stepped hierarchy representing Patala, Bhuloka, and Swargaloka'
      },
      structuralInnovations: [
        {
          title: 'Subterranean Hydrostatic Balancing',
          description: 'The Garbhagriha is located several meters below ground level adjacent to the Koti Teertha stepwell, using hydrostatic pressure of the surrounding ground to keep the sanctum naturally cooled.',
          scienceFact: 'Basalt block floor slabs are keyed with mortise joints that resist upward hydrostatic water pressure without buoyant uplift.'
        },
        {
          title: 'Modern Crowd Dynamic Engineering (Mahakal Lok)',
          description: 'The expansion corridor incorporates dynamic pedestrian dispersal lanes capable of handling 200,000 visitors smoothly within 6 hours.',
          scienceFact: 'Smart AI CCTV tracking monitors crowd density thresholds, dynamically throttling queue feeder gates.'
        }
      ],
      acousticFeatures: 'During the thunderous Damru and Shankha accompaniment of Bhasma Aarti, sound decibels reach 95 dB, but the low vaulted stone dome prevents ear fatigue through spherical diffusion.',
      astronomicalAlignment: 'South-facing portal allows the rays of the midday summer sun to cast minimal shadows, honoring Shiva as the Lord of the Southern Direction (Yama).',
      seismicOrClimateResilience: 'Heavy sandstone block exterior with interlocking iron staples absorbs earth vibrations across the Malwa plateau.'
    },
    info: {
      templeTimings: '04:00 AM - 11:00 PM (Opens at 03:00 AM during the holy month of Shravana)',
      darshanTimings: 'Bhasma Aarti: 04:00 AM - 06:00 AM; General Darshan: 08:00 AM - 10:00 PM',
      darshanTypes: [
        { name: 'Bhasma Aarti Advance Booking', duration: '2 hours (Early Morning)', fee: '₹200 (Online Booking) / Free offline quota', note: 'Pre-booking required on official portal with ID proof' },
        { name: 'VIP Sheeghra Darshan', duration: '30 to 60 minutes', fee: '₹250', note: 'Fast-track queue pass available at counter and online' },
        { name: 'General Sarva Darshan', duration: '1.5 to 3 hours', fee: 'Free', note: 'Traverses through the beautifully lit Mahakal Lok' }
      ],
      importantFestivals: [
        { name: 'Ujjain Simhastha Kumbh Mela', month: 'Every 12 Years (Next: 2028)', description: 'One of the four sacred Kumbh Melas in India, attracting over 70 million pilgrims to the Shipra river.' },
        { name: 'Maha Shivaratri & Shravan Somwar Sawari', month: 'February / July-August', description: 'Grand royal processions where Lord Mahakal rides in a golden palanquin through the historic city streets.' }
      ],
      visitorGuidelines: [
        'Men attending the inner sanctum Bhasma Aarti must wear an unstitched pure cotton Dhoti-Kurta or bare upper body with Angavastram. Women must wear Saree.',
        'Mobiles are strictly prohibited inside the inner temple complex and must be deposited at Mahakal Lok counters.'
      ],
      dressCode: 'Traditional Indian attire strictly mandated for Bhasma Aarti and Garbhagriha entry.',
      exactAddress: 'Shri Mahakaleshwar Temple, Jaisinghpura, Ujjain, Madhya Pradesh 456006',
      nearbyLandmarks: ['Mahakal Lok Corridor', 'Koti Teerth Kunda', 'Ram Ghat (Shipra River)', 'Kal Bhairav Temple', 'Jantar Mantar (Vedh Shala)']
    },
    travel: {
      nearestAirport: { name: 'Devi Ahilyabai Holkar International Airport, Indore (IDR)', distance: '55 km via 4-lane super expressway (approx 60 minutes)' },
      nearestRailway: { name: 'Ujjain Junction (UJN)', distance: '1.8 km' },
      roadConnectivity: 'State-of-the-art 4-lane expressway between Indore and Ujjain with non-stop AC bus services running every 15 minutes.',
      localTransit: 'E-rickshaws, city buses, and app-based cabs operate across all temples in Ujjain.',
      suggestedVisitDuration: '2 Full Days',
      bestSeason: 'October to March (Pleasant winter weather between 12°C and 28°C)',
      nearbyAttractions: [
        { name: 'Kal Bhairav Temple', distance: '5 km', description: 'Ancient tantric shrine where liquor is offered to the presiding deity as Prasad.' },
        { name: 'Vedh Shala (Observatory)', distance: '3 km', description: 'Astronomical observatory built in 1725 CE by Maharaja Sawai Jai Singh II with working stone sundials.' }
      ]
    },
    accommodations: [
      {
        id: 'mahakal-resthouse-ujjain',
        name: 'Shree Mahakal Bhakt Niwas & Vishram Griha',
        distance: '0.6 km from Temple',
        rating: 4.4,
        positiveReviewPercentage: 89,
        reviewSummary: 'Clean, secure, and modern Trust-operated pilgrim complex with elevators, parking, and subsidized vegetarian meals.',
        facilities: ['AC Rooms', 'Trust Food Court', 'Free Luggage Room', 'Wheelchair Access'],
        priceRange: '₹800 - ₹2,200 / night'
      },
      {
        id: 'anantara-resort-ujjain',
        name: 'Hotel Imperial Grand Ujjain',
        distance: '2.5 km from Temple',
        rating: 4.2,
        positiveReviewPercentage: 84,
        reviewSummary: 'Comfortable family hotel with multi-cuisine restaurant, prompt room service, and travel desk assistance.',
        facilities: ['Restaurant', 'Wi-Fi', 'Valet Parking', 'Airport Shuttle'],
        priceRange: '₹3,000 - ₹5,500 / night'
      }
    ],
    officialBooking: {
      portalName: 'Shree Mahakaleshwar Temple Management Committee (SMTMC)',
      url: 'https://shrimahakaleshwar.com/',
      servicesAvailable: ['Bhasma Aarti Advance E-Booking', 'Sheeghra Darshan (₹250)', 'Garbhagriha Jalabhishek Booking', 'Mahakal Bhakt Niwas Room Booking'],
      disclaimer: 'Bhasma Aarti slots are strictly allotted through the official government portal with OTP and photo verification. Never deal with unauthorized street touts.'
    },
    sources: [
      { title: 'The Sacred City of Ujjayini: Epigraphical and Architectural Survey', authority: 'Archaeological Survey of India Bhopal Circle' },
      { title: 'Astronomical Heritage of Ujjain and the Prime Meridian', authority: 'Indian National Science Academy (INSA)' },
      { title: 'Official Mahakaleshwar Management Manual', authority: 'SMTMC Ujjain' }
    ]
  },

  'omkareshwar': {
    id: 'omkareshwar',
    name: 'Omkareshwar & Mamleshwar Jyotirlinga',
    shortName: 'Omkareshwar Temple',
    tagline: 'Sacred Island Naturally Shaped like the Cosmic Omkar Symbol',
    stateId: 'madhya-pradesh',
    stateName: 'Madhya Pradesh',
    districtId: 'khandwa',
    districtName: 'Khandwa',
    location: 'Mandhata Island, Narmada River, Khandwa District, Madhya Pradesh',
    imageFileName: 'd.jpeg',
    category: 'Jyotirlinga',
    jyotirlingaNumber: 4,
    period: '10th-11th Century CE / Holkar Restorations',
    dynasty: 'Paramara Dynasty & Holkars of Indore',
    deity: 'Lord Omkareshwar (Omkar Mandhata) & Lord Mamleshwar (Amareshwar)',
    overview: 'Situated on the sacred river Narmada where the waters bifurcate around Mandhata Island, Omkareshwar holds a unique geographical distinction: when viewed from satellite or surrounding ridges, the island forms the exact shape of the sacred Devanagari "OM" (ॐ) symbol. Pilgrims must visit both the island shrine of Omkareshwar and the southern mainland temple of Mamleshwar to complete the sacred pilgrimage circuit.',
    highlights: [
      'Mandhata Island natural topography contoured in the exact form of the cosmic "OM" symbol',
      'Twin Jyotirlinga tradition: Omkareshwar on the island and Mamleshwar on the south bank',
      'The dramatic Narmada river gorge crossed by modern suspension bridges and wooden boats',
      'The colossal 108-foot Statue of Oneness (Adi Shankaracharya) consecrated atop the Mandhata hills'
    ],
    history: {
      builder: 'Ancient foundation patronized by Ikshvaku King Mandhata; the stone structure was raised under the Paramaras and extensively restored by Queen Ahilyabai Holkar in the 18th century.',
      periodEra: '10th-11th Century CE; 18th-century expansions.',
      purpose: 'The sacred tirtha where King Mandhata performed severe penance and Adi Shankaracharya met his Guru Govinda Bhagavatpada in a cave on the island.',
      dynasticTimeline: [
        { era: '8th Century CE', ruler: 'Adi Shankaracharya Era', contribution: 'Shankaracharya initiated into Advaita Vedanta philosophy inside the holy cave on Mandhata.' },
        { era: '1063 CE', ruler: 'Paramara King Udayaditya', contribution: 'Constructed the carved stone sabha mandapa and pillared halls.' },
        { era: '1780 CE', ruler: 'Rani Ahilyabai Holkar', contribution: 'Endowed daily Narmada water archana, built ghats, and renovated Mamleshwar temple.' }
      ],
      historicalEvents: [
        'The historic Parikrama (circumambulation) of the 7-kilometer island performed by saints and pilgrims for over a millennium.',
        'Consecration of the 108-foot bronze Statue of Oneness (Ekatmata Ki Pratima) in September 2023.'
      ],
      culturalSignificance: 'Every stone found in the Narmada river bed is considered an automatic Bana-Linga (Narmadeshwara Lingam), embodying supreme divine presence.'
    },
    engineering: {
      architecturalStyle: 'Bhumija & North Indian Nagara Style with Multistoried Spire',
      materials: ['Local Vindhyan Soft Sandstone', 'Granite Flooring', 'Hardened Lime Mortar'],
      geometry: {
        concept: 'Geomorphic Mandala of Omkar Topography',
        description: 'The island measures 2.6 km long and is cleaved by the Kaveri-Narmada confluence into two natural hill ranges that form the curves of the Omkar glyph.',
        mathematicalRatio: 'Five-story temple vertical elevation dedicated to five divine forms'
      },
      structuralInnovations: [
        {
          title: 'River Gorge Pier Foundation Engineering',
          description: 'The temple foundations are anchored directly into basalt-quartzite river canyon strata, resisting the massive scouring forces of monsoon floods.',
          scienceFact: 'High-density rock mass rating (RMR > 75) provides rock anchors capable of sustaining hydraulic drag of flood currents exceeding 6 meters per second.'
        },
        {
          title: 'Cantilevered River Suspension Crossing',
          description: 'Two modern steel suspension footbridges span the 300-meter gorge, enabling 100,000 pilgrims to cross without interfering with river ecology.',
          scienceFact: 'Tuned mass dampers prevent wind and pedestrian harmonic oscillation.'
        }
      ],
      acousticFeatures: 'The natural river canyon funnels the roar of the Narmada currents, creating an ambient white-noise backdrop that amplifies the inner sanctum bells.',
      astronomicalAlignment: 'Oriented along the east-west axis of the Narmada flow, aligned with the dawn equinoctial sunrise across the river.',
      seismicOrClimateResilience: 'Living rock anchoring into solid basalt hill formations prevents liquefaction during regional tremors.'
    },
    info: {
      templeTimings: '05:00 AM - 09:30 PM (With afternoon cleaning break from 12:25 PM to 01:15 PM)',
      darshanTimings: 'Mangal Aarti: 05:00 AM; Shayan Aarti: 08:30 PM; General darshan throughout day',
      darshanTypes: [
        { name: 'General Queue Darshan', duration: '1 to 2 hours', fee: 'Free', note: 'Cross bridge or take country boat to reach island' },
        { name: 'Special VIP Darshan Pass', duration: '30 to 45 minutes', fee: '₹300', note: 'Fast track access via dedicated counter' }
      ],
      importantFestivals: [
        { name: 'Maha Shivaratri & Narmada Jayanti', month: 'February / January', description: 'Massive night vigil and floating lamp festival (Deep Daan) with thousands of lamps illuminating the river gorge.' },
        { name: 'Kartik Purnima Mela', month: 'November', description: 'Traditional five-day rural religious fair and circumambulation of the island.' }
      ],
      visitorGuidelines: [
        'Always wear life-jackets when crossing the Narmada via boat. Government suspension bridges provide safe pedestrian crossing.',
        'Beware of swift river currents; bathing is permitted only inside the barricaded ghat areas.'
      ],
      dressCode: 'Modest traditional Indian clothing.',
      exactAddress: 'Omkareshwar Temple, Mandhata Island, Khandwa District, Madhya Pradesh 450595',
      nearbyLandmarks: ['Mamleshwar Temple (Mainland)', '108-foot Statue of Oneness', 'Gauri Somnath Temple', 'Kaveri-Narmada Sangam']
    },
    travel: {
      nearestAirport: { name: 'Devi Ahilyabai Holkar Airport, Indore (IDR)', distance: '85 km (approx 2 hours via Indore-Khandwa road)' },
      nearestRailway: { name: 'Khandwa Junction (KNW) & Indore (INDB)', distance: 'Khandwa 70 km, Indore 85 km' },
      roadConnectivity: 'Regular bus and taxi services connect Omkareshwar to Indore and Ujjain on well-maintained state highways.',
      localTransit: 'Walking across the footbridges, boat rides, and battery-operated carts for seniors.',
      suggestedVisitDuration: '1 to 2 Days',
      bestSeason: 'September to March (River is full and scenic, weather is cool and breezy)',
      nearbyAttractions: [
        { name: 'Maheshwar Fort & Ahilya Ghat', distance: '65 km along Narmada', description: 'Historic capital of Queen Ahilyabai Holkar with world-famous Maheshwari handloom weavers.' },
        { name: 'Khandwa (Kishore Kumar Samadhi)', distance: '70 km', description: 'Historic central Indian railway junction and birthplace of legendary singer Kishore Kumar.' }
      ]
    },
    accommodations: [
      {
        id: 'mptdc-sailani-island-resort',
        name: 'MPT Sailani Resort & Narmada Resort (MP Tourism)',
        distance: '1.5 km from Temple',
        rating: 4.3,
        positiveReviewPercentage: 86,
        reviewSummary: 'Well-maintained MP Tourism property on scenic riverside with spacious cottages, gardens, and clean restaurant.',
        facilities: ['River View', 'Restaurant', 'Free Parking', 'AC Deluxe Rooms'],
        priceRange: '₹2,500 - ₹4,800 / night'
      },
      {
        id: 'gajanan-maharaj-ashram-omkareshwar',
        name: 'Shree Gajanan Maharaj Sansthan Bhakta Niwas',
        distance: '1.0 km from Temple',
        rating: 4.7,
        positiveReviewPercentage: 94,
        reviewSummary: 'Extremely well-managed, sparkling clean, peaceful ashram stay with delicious subsidized Maharashtrian meals.',
        facilities: ['Pure Cleanliness', 'Dining Hall', 'Spacious Parking', 'Lift'],
        priceRange: '₹600 - ₹1,500 / night'
      }
    ],
    officialBooking: {
      portalName: 'Shri Omkareshwar Jyotirlinga Temple Trust & MP Tourism',
      url: 'https://omkareshwartrust.com/',
      servicesAvailable: ['Special Darshan Tickets', 'Narmada Aarti Booking', 'Online Donation', 'Puja Sankalp'],
      disclaimer: 'Verify that boatmen possess licensed life jackets before boarding. Official temple passes are available only at the Trust counter.'
    },
    sources: [
      { title: 'Narmada Purana and the Geography of Mandhata Island', authority: 'Geological Survey of India & MP Archeology' },
      { title: 'Architectural Survey of Paramara Monuments at Omkareshwar', authority: 'ASI Bhopal Circle' },
      { title: 'Life and Work of Adi Shankaracharya at Omkareshwar', authority: 'Ekatmata Mission Monograph' }
    ]
  }
};
