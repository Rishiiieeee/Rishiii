import { StateItem, DistrictItem, TempleItem } from '../types';

export const INDIA_STATES: StateItem[] = [
  { id: 'andhra-pradesh', name: 'Andhra Pradesh', available: true, templeCount: 42, description: 'Tirumala Venkateswara, Lepakshi Veerabhadra & Srisailam Mallikarjuna' },
  { id: 'karnataka', name: 'Karnataka', available: true, templeCount: 84, description: 'UNESCO Hampi ruins, musical pillars, Stone Chariot & Virupaksha' },
  { id: 'odisha', name: 'Odisha', available: true, templeCount: 52, description: 'Sacred Dham of Shree Jagannath Puri & Konark Sun Temple' },
  { id: 'gujarat', name: 'Gujarat', available: true, templeCount: 64, description: 'First Jyotirlinga Somnath & Daarukavanam Nageshwar Jyotirlinga' },
  { id: 'madhya-pradesh', name: 'Madhya Pradesh', available: true, templeCount: 70, description: 'Dakshinmukhi Mahakaleshwar Ujjain & Island of Omkareshwar' },
  { id: 'uttarakhand', name: 'Uttarakhand', available: true, templeCount: 55, description: 'Himalayan sanctuary of Shri Kedarnath Jyotirlinga & Badrinath Dham' },
  { id: 'maharashtra', name: 'Maharashtra', available: true, templeCount: 92, description: 'Holy Jyotirlingas: Bhimashankar, Trimbakeshwar & Grishneshwar' },
  { id: 'uttar-pradesh', name: 'Uttar Pradesh', available: true, templeCount: 130, description: 'Cosmic center of Shri Kashi Vishwanath on the crescent of Ganga' },
  { id: 'jharkhand', name: 'Jharkhand', available: true, templeCount: 26, description: 'Baba Baidyanath Dham Jyotirlinga & Shravan Kanwar Yatra' },
  { id: 'tamil-nadu', name: 'Tamil Nadu', available: true, templeCount: 156, description: 'Rameshwaram Ramanathaswamy 1200m corridors & 22 holy Theerthams' },
  { id: 'rajasthan', name: 'Rajasthan', available: true, templeCount: 75, description: 'Sacred Pushkar Brahma temple, Khatu Shyam & Dilwara marble' },
  { id: 'kerala', name: 'Kerala', available: true, templeCount: 68, description: 'Padmanabhaswamy, Sabarimala & historic Guruvayur shrines' },
  { id: 'telangana', name: 'Telangana', available: true, templeCount: 38, description: 'UNESCO Ramappa, Yadagirigutta & Bhadrachalam Rama temple' },
  { id: 'west-bengal', name: 'West Bengal', available: true, templeCount: 48, description: 'Kalighat Shaktipeeth, Dakshineswar Kali & Bishnupur terracotta' },
  { id: 'punjab', name: 'Punjab', available: true, templeCount: 30, description: 'Golden Temple Amritsar (Harmandir Sahib) & Durgiana Mandir' },
  { id: 'himachal-pradesh', name: 'Himachal Pradesh', available: true, templeCount: 40, description: 'Dev Bhoomi sacred pine valleys, Hidimba & Baijnath Shiva' },
  { id: 'bihar', name: 'Bihar', available: true, templeCount: 35, description: 'Bodh Gaya Mahabodhi Temple, Vishnupad Gaya & Mahavir Mandir' },
  { id: 'assam', name: 'Assam', available: true, templeCount: 28, description: 'Nilachal hill Maa Kamakhya Shaktipeeth & Umananda Peacock Island' },
  { id: 'chhattisgarh', name: 'Chhattisgarh', available: true, templeCount: 25, description: 'Bhoramdeo Temple, Danteshwari Shaktipeeth & Sirpur monuments' },
  { id: 'haryana', name: 'Haryana', available: true, templeCount: 22, description: 'Kurukshetra Brahma Sarovar, Jyotisar & Mansa Devi Panchkula' },
  { id: 'goa', name: 'Goa', available: true, templeCount: 20, description: 'Shanta Durga, Mangueshi Temple & Tambdi Surla 12th century Kadamba' },
  { id: 'jammu-kashmir', name: 'Jammu and Kashmir', available: true, templeCount: 32, description: 'Holy Vaishno Devi Katra, Amarnath cave & Shankaracharya' },
  { id: 'ladakh', name: 'Ladakh', available: true, templeCount: 24, description: 'Ancient Himalayan monasteries: Thiksey, Hemis, Diskit & Alchi' },
  { id: 'delhi', name: 'Delhi (UT)', available: true, templeCount: 36, description: 'Akshardham, Lotus Temple, Bangla Sahib & Kalkaji' }
];

export const AP_DISTRICTS: DistrictItem[] = [
  { id: 'tirupati', name: 'Tirupati (Tirumala Balaji)', stateId: 'andhra-pradesh', available: true, templeCount: 18 },
  { id: 'sri-sathya-sai', name: 'Sri Sathya Sai (Lepakshi Veerabhadra)', stateId: 'andhra-pradesh', available: true, templeCount: 12 },
  { id: 'nandyal', name: 'Nandyal (Srisailam Mallikarjuna)', stateId: 'andhra-pradesh', available: true, templeCount: 20 },
  { id: 'visakhapatnam', name: 'Visakhapatnam (Simhachalam)', stateId: 'andhra-pradesh', available: false, templeCount: 15 },
  { id: 'krishna', name: 'Krishna (Vijayawada Kanaka Durga)', stateId: 'andhra-pradesh', available: false, templeCount: 18 },
];

export const KARNATAKA_DISTRICTS: DistrictItem[] = [
  { id: 'vijayanagara', name: 'Vijayanagara (Hampi Heritage & Vittala)', stateId: 'karnataka', available: true, templeCount: 24 },
  { id: 'mysuru', name: 'Mysuru (Chamundeshwari Temple)', stateId: 'karnataka', available: false, templeCount: 18 },
  { id: 'hassan', name: 'Hassan (Belur & Halebidu Hoysala Temples)', stateId: 'karnataka', available: false, templeCount: 16 },
  { id: 'bagalkote', name: 'Bagalkote (Badami, Aihole & Pattadakal)', stateId: 'karnataka', available: false, templeCount: 22 },
];

export const ODISHA_DISTRICTS: DistrictItem[] = [
  { id: 'puri', name: 'Puri District (Shree Jagannath Temple & Konark)', stateId: 'odisha', available: true, templeCount: 16 },
  { id: 'khordha', name: 'Khordha (Bhubaneswar Lingaraj Temple)', stateId: 'odisha', available: false, templeCount: 32 },
  { id: 'cuttack', name: 'Cuttack (Chandi Temple & Dhabaleswar)', stateId: 'odisha', available: false, templeCount: 18 },
];

export const GUJARAT_DISTRICTS: DistrictItem[] = [
  { id: 'gir-somnath', name: 'Gir Somnath (Shree Somnath Jyotirlinga)', stateId: 'gujarat', available: true, templeCount: 14 },
  { id: 'devbhumi-dwarka', name: 'Devbhumi Dwarka (Nageshwar Jyotirlinga & Dwarkadhish)', stateId: 'gujarat', available: true, templeCount: 18 },
  { id: 'mehsana', name: 'Mehsana (Sun Temple Modhera)', stateId: 'gujarat', available: false, templeCount: 12 },
];

export const MP_DISTRICTS: DistrictItem[] = [
  { id: 'ujjain', name: 'Ujjain (Shri Mahakaleshwar Jyotirlinga)', stateId: 'madhya-pradesh', available: true, templeCount: 22 },
  { id: 'khandwa', name: 'Khandwa (Omkareshwar & Mamleshwar Jyotirlinga)', stateId: 'madhya-pradesh', available: true, templeCount: 12 },
  { id: 'chhatarpur', name: 'Chhatarpur (Khajuraho UNESCO Temples)', stateId: 'madhya-pradesh', available: false, templeCount: 16 },
];

export const UTTARAKHAND_DISTRICTS: DistrictItem[] = [
  { id: 'rudraprayag', name: 'Rudraprayag (Shri Kedarnath Jyotirlinga)', stateId: 'uttarakhand', available: true, templeCount: 15 },
  { id: 'chamoli', name: 'Chamoli (Badrinath Temple & Tungnath)', stateId: 'uttarakhand', available: false, templeCount: 18 },
  { id: 'haridwar', name: 'Haridwar (Chandi Devi, Mansa Devi & Har Ki Pauri)', stateId: 'uttarakhand', available: false, templeCount: 25 },
];

export const MAHARASHTRA_DISTRICTS: DistrictItem[] = [
  { id: 'pune', name: 'Pune District (Bhimashankar Jyotirlinga)', stateId: 'maharashtra', available: true, templeCount: 28 },
  { id: 'nashik', name: 'Nashik (Shri Trimbakeshwar Jyotirlinga & Panchavati)', stateId: 'maharashtra', available: true, templeCount: 24 },
  { id: 'chhatrapati-sambhajinagar', name: 'Chhatrapati Sambhajinagar (Grishneshwar & Ellora)', stateId: 'maharashtra', available: true, templeCount: 18 },
  { id: 'ahmednagar', name: 'Ahmednagar (Shirdi Sai Baba Sansthan)', stateId: 'maharashtra', available: false, templeCount: 14 },
];

export const UP_DISTRICTS: DistrictItem[] = [
  { id: 'varanasi', name: 'Varanasi (Shri Kashi Vishwanath Temple)', stateId: 'uttar-pradesh', available: true, templeCount: 35 },
  { id: 'ayodhya', name: 'Ayodhya (Ram Janmabhoomi & Hanumangarhi)', stateId: 'uttar-pradesh', available: false, templeCount: 28 },
  { id: 'mathura', name: 'Mathura & Vrindavan (Bankey Bihari & Krishna Janmasthan)', stateId: 'uttar-pradesh', available: false, templeCount: 32 },
];

export const JHARKHAND_DISTRICTS: DistrictItem[] = [
  { id: 'deoghar', name: 'Deoghar (Baba Baidyanath Jyotirlinga Dham)', stateId: 'jharkhand', available: true, templeCount: 14 },
  { id: 'dumka', name: 'Dumka (Basukinath Temple)', stateId: 'jharkhand', available: false, templeCount: 8 },
];

export const TAMIL_NADU_DISTRICTS: DistrictItem[] = [
  { id: 'ramanathapuram', name: 'Ramanathapuram (Arulmigu Ramanathaswamy Rameshwaram)', stateId: 'tamil-nadu', available: true, templeCount: 16 },
  { id: 'madurai', name: 'Madurai (Meenakshi Sundareswarar Temple)', stateId: 'tamil-nadu', available: false, templeCount: 24 },
  { id: 'thanjavur', name: 'Thanjavur (Brihadisvara UNESCO Great Living Chola Temple)', stateId: 'tamil-nadu', available: false, templeCount: 30 },
];

export const ALL_DISTRICTS_BY_STATE: Record<string, DistrictItem[]> = {
  'andhra-pradesh': AP_DISTRICTS,
  'karnataka': KARNATAKA_DISTRICTS,
  'odisha': ODISHA_DISTRICTS,
  'gujarat': GUJARAT_DISTRICTS,
  'madhya-pradesh': MP_DISTRICTS,
  'uttarakhand': UTTARAKHAND_DISTRICTS,
  'maharashtra': MAHARASHTRA_DISTRICTS,
  'uttar-pradesh': UP_DISTRICTS,
  'jharkhand': JHARKHAND_DISTRICTS,
  'tamil-nadu': TAMIL_NADU_DISTRICTS,
};

// Mapped temple items for each district
export const ALL_TEMPLES_BY_DISTRICT: Record<string, TempleItem[]> = {
  'tirupati': [
    {
      id: 'tirupati',
      name: 'Sri Venkateswara Swamy Temple',
      districtId: 'tirupati',
      stateId: 'andhra-pradesh',
      location: 'Tirumala Hills, Tirupati District',
      image: '/TIR.jpeg',
      imageFileName: 'TIR.jpeg',
      verified: true,
      available: true,
      overview: 'Perched on the sacred Seshachalam range, Sri Venkateswara Temple is the most visited sacred shrine on earth, famed for the golden Ananda Nilayam Vimana.',
      deity: 'Lord Sri Venkateswara (Lord Balaji)',
      festival: 'Srivari Brahmotsavam',
      bestTime: 'October to February',
      website: 'https://ttdevasthanams.ap.gov.in',
      category: 'Maha Kshetra',
      period: '9th-16th Century CE'
    }
  ],
  'sri-sathya-sai': [
    {
      id: 'lepakshi',
      name: 'Veerabhadra Swamy Temple & Hanging Pillar',
      districtId: 'sri-sathya-sai',
      stateId: 'andhra-pradesh',
      location: 'Lepakshi Village, Sri Sathya Sai District',
      image: '/LEP.jpeg',
      imageFileName: 'LEP.jpeg',
      verified: true,
      available: true,
      overview: '16th-century Vijayanagara architectural masterpiece famed for the gravity-defying Hanging Pillar, colossal monolithic Nandi, and Asia’s largest ceiling fresco.',
      deity: 'Lord Veerabhadra Swamy',
      festival: 'Maha Shivaratri & Lepakshi Utsav',
      bestTime: 'October to March',
      website: 'https://asi.nic.in',
      category: 'Ancient Monument',
      period: '1530-1540 CE'
    }
  ],
  'nandyal': [
    {
      id: 'mallikarjuna',
      name: 'Sri Bhramaramba Mallikarjuna Swamy Temple',
      districtId: 'nandyal',
      stateId: 'andhra-pradesh',
      location: 'Srisailam, Nallamala Hills, Nandyal District',
      image: '/b.jpeg',
      imageFileName: 'b.jpeg',
      verified: true,
      available: true,
      overview: 'Rare confluence of the 2nd Jyotirlinga and ancient Shakti Peeth on Sriparvata, featuring an impregnable 6m sculpted fortress prakaram wall.',
      deity: 'Lord Mallikarjuna & Goddess Bhramaramba',
      festival: 'Maha Shivaratri Brahmotsavam',
      bestTime: 'September to February',
      website: 'https://srisailadevasthanam.org',
      category: 'Jyotirlinga',
      period: '2nd-14th Century CE'
    }
  ],
  'vijayanagara': [
    {
      id: 'hampi',
      name: 'Vijaya Vittala & Virupaksha Temples',
      districtId: 'vijayanagara',
      stateId: 'karnataka',
      location: 'Hampi, Vijayanagara District',
      image: '/HAM.jpeg',
      imageFileName: 'HAM.jpeg',
      verified: true,
      available: true,
      overview: 'UNESCO World Heritage imperial capital of the Vijayanagara Empire, famed for 56 acoustic musical pillars, the iconic Stone Chariot, and Tungabhadra landscapes.',
      deity: 'Lord Vittala & Lord Virupaksha',
      festival: 'Hampi Utsav',
      bestTime: 'October to March',
      website: 'https://asi.nic.in',
      category: 'UNESCO World Heritage',
      period: '14th-16th Century CE'
    }
  ],
  'puri': [
    {
      id: 'puri',
      name: 'Shree Jagannath Temple',
      districtId: 'puri',
      stateId: 'odisha',
      location: 'Grand Road (Bada Danda), Puri',
      image: '/PUR.jpeg',
      imageFileName: 'PUR.jpeg',
      verified: true,
      available: true,
      overview: 'One of the four supreme Char Dham pilgrimage sanctums of India, towering 65 meters with the sacred Nilachakra, world’s largest kitchen, and annual Ratha Yatra.',
      deity: 'Lord Jagannath, Balabhadra & Devi Subhadra',
      festival: 'Ratha Yatra (Car Festival)',
      bestTime: 'October to March',
      website: 'https://shreejagannatha.in',
      category: 'Maha Kshetra',
      period: '12th Century CE (1161 CE)'
    }
  ],
  'gir-somnath': [
    {
      id: 'somnath',
      name: 'Shree Somnath Jyotirlinga Temple',
      districtId: 'gir-somnath',
      stateId: 'gujarat',
      location: 'Prabhas Patan, Veraval, Gir Somnath District',
      image: '/a.jpeg',
      imageFileName: 'a.jpeg',
      verified: true,
      available: true,
      overview: 'The first of the twelve sacred Jyotirlingas, standing on the Arabian Sea coast, featuring the historic Baan Stambh with its unobstructed path to Antarctica.',
      deity: 'Lord Somnath (Bhairaveshwara)',
      festival: 'Maha Shivaratri & Kartik Purnima',
      bestTime: 'October to March',
      website: 'https://somnath.org',
      category: 'Jyotirlinga',
      period: 'Ancient / Rebuilt 1951 CE'
    }
  ],
  'devbhumi-dwarka': [
    {
      id: 'nageshwar',
      name: 'Shri Nageshwar Jyotirlinga Temple',
      districtId: 'devbhumi-dwarka',
      stateId: 'gujarat',
      location: 'Daarukavanam, Near Dwarka',
      image: '/j.jpeg',
      imageFileName: 'j.jpeg',
      verified: true,
      available: true,
      overview: 'The tenth Jyotirlinga, protector from all poisons, identified by its colossal 85-foot seated statue of Lord Shiva in deep meditation.',
      deity: 'Lord Nageshwara (Lord of Serpents)',
      festival: 'Maha Shivaratri',
      bestTime: 'October to March',
      website: 'https://dwarkadhish.org',
      category: 'Jyotirlinga',
      period: 'Ancient / Modern Renovation'
    }
  ],
  'ujjain': [
    {
      id: 'mahakaleshwar',
      name: 'Shri Mahakaleshwar Jyotirlinga Temple',
      districtId: 'ujjain',
      stateId: 'madhya-pradesh',
      location: 'Shipra Riverbank, Ujjain',
      image: '/c.jpeg',
      imageFileName: 'c.jpeg',
      verified: true,
      available: true,
      overview: 'The only South-facing (Dakshinmukhi) Jyotirlinga at the prime meridian of ancient Indian astronomy, famed worldwide for daily Bhasma Aarti and Mahakal Lok.',
      deity: 'Lord Mahakal (Dakshinmukhi Shiva)',
      festival: 'Ujjain Simhastha Kumbh & Maha Shivaratri',
      bestTime: 'October to March',
      website: 'https://shrimahakaleshwar.com',
      category: 'Jyotirlinga',
      period: 'Ancient / Rebuilt 1734 CE'
    }
  ],
  'khandwa': [
    {
      id: 'omkareshwar',
      name: 'Omkareshwar & Mamleshwar Jyotirlinga',
      districtId: 'khandwa',
      stateId: 'madhya-pradesh',
      location: 'Mandhata Island, Narmada River, Khandwa',
      image: '/d.jpeg',
      imageFileName: 'd.jpeg',
      verified: true,
      available: true,
      overview: 'The fourth Jyotirlinga on an island naturally shaped like the cosmic "OM" symbol on the holy Narmada River, with the twin shrine of Mamleshwar.',
      deity: 'Lord Omkareshwar & Mamleshwar',
      festival: 'Narmada Jayanti & Maha Shivaratri',
      bestTime: 'September to March',
      website: 'https://omkareshwartrust.com',
      category: 'Jyotirlinga',
      period: '10th-11th Century CE'
    }
  ],
  'rudraprayag': [
    {
      id: 'kedarnath',
      name: 'Shri Kedarnath Jyotirlinga Temple',
      districtId: 'rudraprayag',
      stateId: 'uttarakhand',
      location: 'Mandakini Valley, Garhwal Himalayas',
      image: '/e.jpeg',
      imageFileName: 'e.jpeg',
      verified: true,
      available: true,
      overview: 'Highest among all twelve Jyotirlingas at 3,584m altitude, constructed of interlocking grey granite blocks that survived 400 years buried under glacial ice.',
      deity: 'Lord Kedarnath (Sada Shiva)',
      festival: 'Kapat Opening & Closing Ceremonies',
      bestTime: 'May-June & September-October',
      website: 'https://badrinath-kedarnath.gov.in',
      category: 'Jyotirlinga',
      period: '8th Century CE'
    }
  ],
  'pune': [
    {
      id: 'bhimashankar',
      name: 'Bhimashankar Jyotirlinga Temple',
      districtId: 'pune',
      stateId: 'maharashtra',
      location: 'Bhorgiri, Sahyadri Range, Pune District',
      image: '/f.jpeg',
      imageFileName: 'f.jpeg',
      verified: true,
      available: true,
      overview: 'Sixth Jyotirlinga and source of the Bhima River, surrounded by rainforest sanctuary, built in dry-stone Hemadpanthi style with historic Portuguese bell.',
      deity: 'Lord Bhimashankar',
      festival: 'Maha Shivaratri & Shravan Somwar',
      bestTime: 'August to March',
      website: 'https://bhimashankar.in',
      category: 'Jyotirlinga',
      period: '13th-18th Century CE'
    }
  ],
  'varanasi': [
    {
      id: 'kashi-vishwanath',
      name: 'Shri Kashi Vishwanath Temple',
      districtId: 'varanasi',
      stateId: 'uttar-pradesh',
      location: 'Vishwanath Gali, Ganga Riverbank, Varanasi',
      image: '/g.jpeg',
      imageFileName: 'g.jpeg',
      verified: true,
      available: true,
      overview: 'Spiritual epicenter of India, restored by Rani Ahilyabai Holkar with 1,000 kg golden spire donated by Maharaja Ranjit Singh, and the grand 2021 Dham corridor.',
      deity: 'Lord Vishweshwara (Ruler of Universe)',
      festival: 'Dev Deepawali & Maha Shivaratri',
      bestTime: 'October to March',
      website: 'https://shrikashivishwanath.org',
      category: 'Jyotirlinga',
      period: '1780 CE / 2021 Corridor'
    }
  ],
  'nashik': [
    {
      id: 'trimbakeshwar',
      name: 'Shri Trimbakeshwar Shiva Temple',
      districtId: 'nashik',
      stateId: 'maharashtra',
      location: 'Trimbak, Foothills of Brahmagiri, Nashik',
      image: '/h.jpeg',
      imageFileName: 'h.jpeg',
      verified: true,
      available: true,
      overview: 'Eighth Jyotirlinga at the source of the Godavari River, featuring the unique tripartite lingam representing Brahma, Vishnu, and Rudra in black basalt.',
      deity: 'Lord Trimbakeshwar (Brahma, Vishnu, Rudra)',
      festival: 'Simhastha Kumbh Mela & Tripurari Purnima',
      bestTime: 'September to March',
      website: 'https://trimbakeshwartrust.com',
      category: 'Jyotirlinga',
      period: '1755-1786 CE'
    }
  ],
  'deoghar': [
    {
      id: 'vaidyanath',
      name: 'Baba Baidyanath Jyotirlinga Temple',
      districtId: 'deoghar',
      stateId: 'jharkhand',
      location: 'Deoghar, Santhal Pargana, Jharkhand',
      image: '/i.jpeg',
      imageFileName: 'i.jpeg',
      verified: true,
      available: true,
      overview: 'The ninth Jyotirlinga of the divine healer, crowned by the unique five-pronged Panchashula, and the center of the world’s longest 108km Kanwar Yatra.',
      deity: 'Lord Vaidyanath (Supreme Physician)',
      festival: 'Shravani Mela (Kanwar Yatra)',
      bestTime: 'October to March',
      website: 'https://babadham.org',
      category: 'Jyotirlinga',
      period: '8th-16th Century CE'
    }
  ],
  'ramanathapuram': [
    {
      id: 'rameshwaram',
      name: 'Arulmigu Ramanathaswamy Temple',
      districtId: 'ramanathapuram',
      stateId: 'tamil-nadu',
      location: 'Rameswaram Island, Gulf of Mannar',
      image: '/K.jpeg',
      imageFileName: 'K.jpeg',
      verified: true,
      available: true,
      overview: 'Southern anchor of the Char Dham with the longest sculpted pillared corridors in the world (1,200m) and 22 sacred mineral Theerthams consecrated by Sri Rama.',
      deity: 'Lord Ramanathaswamy & Parvathavardhini Ambal',
      festival: 'Maha Shivaratri & Thirukalyanam',
      bestTime: 'October to April',
      website: 'https://hrce.tn.gov.in',
      category: 'Jyotirlinga',
      period: '12th-17th Century CE'
    }
  ],
  'chhatrapati-sambhajinagar': [
    {
      id: 'grishneshwar',
      name: 'Shri Grishneshwar Jyotirlinga Temple',
      districtId: 'chhatrapati-sambhajinagar',
      stateId: 'maharashtra',
      location: 'Verul Village, Near Ellora Caves',
      image: '/l.jpeg',
      imageFileName: 'l.jpeg',
      verified: true,
      available: true,
      overview: 'The twelfth and final Jyotirlinga in red basalt, rebuilt by Rani Ahilyabai Holkar, situated 1 km from the monumental monolithic Kailasa Temple of Ellora.',
      deity: 'Lord Grishneshwar (Ghushmeshwar)',
      festival: 'Maha Shivaratri & Ellora Festival',
      bestTime: 'October to March',
      website: 'https://grishneshwar.org',
      category: 'Jyotirlinga',
      period: '18th Century CE (1769 CE)'
    }
  ]
};
