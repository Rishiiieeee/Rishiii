import React, { useState } from 'react';
import {
  MapPin,
  ChevronRight,
  Search,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building,
  Landmark,
  Compass
} from 'lucide-react';
import { PageType, TempleItem } from '../types';
import { ALL_TEMPLES_BY_DISTRICT } from '../data/hierarchyData';
import { BreadcrumbNav } from '../components/BreadcrumbNav';
import { ComingSoonModal } from '../components/ComingSoonModal';
import { TempleImage } from '../components/TempleImage';

interface DistrictSelectionPageProps {
  selectedDistrict: string;
  onNavigate: (page: PageType) => void;
  onSelectTemple: (templeId: string) => void;
  onSelectDestination?: (destId: string) => void;
}

export const DistrictSelectionPage: React.FC<DistrictSelectionPageProps> = ({
  selectedDistrict,
  onNavigate,
  onSelectTemple,
  onSelectDestination,
}) => {
  const [selectedComingSoon, setSelectedComingSoon] = useState<string | null>(null);
  const [templeFilter, setTempleFilter] = useState('');
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  // Derive district metadata
  const districtNameMap: Record<string, { title: string; subtitle: string; centralName: string; destId?: string }> = {
    'tirupati': {
      title: 'Tirupati District',
      subtitle: 'Select a temple to view verified darshan schedules, stays, and booking procedures.',
      centralName: 'Tirumala Venkateswara Swamy',
      destId: 'tirupati'
    },
    'sri-sathya-sai': {
      title: 'Sri Sathya Sai / Anantapur District',
      subtitle: 'Home to the legendary 16th-century Vijayanagara architectural wonder of Lepakshi.',
      centralName: 'Veerabhadra Swamy & Hanging Pillar',
      destId: 'lepakshi'
    },
    'anantapur': {
      title: 'Sri Sathya Sai / Anantapur District',
      subtitle: 'Home to the legendary 16th-century Vijayanagara architectural wonder of Lepakshi.',
      centralName: 'Veerabhadra Swamy & Hanging Pillar',
      destId: 'lepakshi'
    },
    'nandyal': {
      title: 'Nandyal District (Srisailam)',
      subtitle: 'Sacred seat of Mallikarjuna Swamy 2nd Jyotirlinga and Bhramaramba Shakti Peeth.',
      centralName: 'Sri Bhramaramba Mallikarjuna Swamy',
      destId: 'mallikarjuna'
    },
    'vijayanagara': {
      title: 'Vijayanagara / Ballari District',
      subtitle: 'Explore the UNESCO World Heritage capital of Hampi, boulder hills and stone monuments.',
      centralName: 'Vijaya Vittala & Stone Chariot',
      destId: 'hampi'
    },
    'puri': {
      title: 'Puri District',
      subtitle: 'Sacred coastal realm of Shree Jagannath, ancient mathas, and the monumental Rath Yatra.',
      centralName: 'Shree Jagannath Temple & Complex',
      destId: 'puri'
    },
    'gir-somnath': {
      title: 'Gir Somnath District',
      subtitle: 'Home to the First of the Twelve Sacred Jyotirlingas on the Saurashtra Arabian Sea coast.',
      centralName: 'Shree Somnath Jyotirlinga Temple',
      destId: 'somnath'
    },
    'devbhumi-dwarka': {
      title: 'Devbhumi Dwarka District',
      subtitle: 'Sacred Darukavana coastal forest home to Nageshwar Jyotirlinga and Lord Krishna.',
      centralName: 'Nageshwar Jyotirlinga Temple',
      destId: 'nageshwar'
    },
    'ujjain': {
      title: 'Ujjain District (Avanti Kshetra)',
      subtitle: 'Sacred Kshipra river banks home to Mahakaleshwar Dakshinmukhi Swayambhu Jyotirlinga.',
      centralName: 'Shri Mahakaleshwar Jyotirlinga',
      destId: 'mahakaleshwar'
    },
    'khandwa': {
      title: 'Khandwa District (Narmada Valley)',
      subtitle: 'Sacred Om-shaped river island Mandhata home to Omkareshwar & Mamleshwar Jyotirlingas.',
      centralName: 'Omkareshwar Jyotirlinga Temple',
      destId: 'omkareshwar'
    },
    'rudraprayag': {
      title: 'Rudraprayag District (Garhwal Himalayas)',
      subtitle: 'Highest of the 12 Jyotirlingas at 3,584m altitude nestled beneath Mount Kedar Dome.',
      centralName: 'Shri Kedarnath Dham Jyotirlinga',
      destId: 'kedarnath'
    },
    'pune': {
      title: 'Pune District (Sahyadri Hills)',
      subtitle: 'Western Ghats biodiversity reserve and source of Bhima river at Bhimashankar Jyotirlinga.',
      centralName: 'Bhimashankar Jyotirlinga Temple',
      destId: 'bhimashankar'
    },
    'varanasi': {
      title: 'Varanasi District (Kashi)',
      subtitle: 'Eternal city on sacred Ganga river home to the golden spire of Kashi Vishwanath.',
      centralName: 'Kashi Vishwanath Jyotirlinga',
      destId: 'kashi-vishwanath'
    },
    'nashik': {
      title: 'Nashik District (Brahmagiri Hills)',
      subtitle: 'Source of the sacred Godavari river and three-faced Linga of Trimbakeshwar.',
      centralName: 'Trimbakeshwar Jyotirlinga',
      destId: 'trimbakeshwar'
    },
    'deoghar': {
      title: 'Deoghar District (Santhal Parganas)',
      subtitle: 'Sacred Baidyanath Dham (Kamna Linga) where Lord Shiva accepted Ravana’s penance.',
      centralName: 'Baba Baidyanath Jyotirlinga',
      destId: 'vaidyanath'
    },
    'ramanathapuram': {
      title: 'Ramanathapuram District (Rameswaram Island)',
      subtitle: 'Southernmost Jyotirlinga consecrated by Lord Rama with 1,200m magnificent pillared corridors.',
      centralName: 'Ramanathaswamy Jyotirlinga',
      destId: 'rameshwaram'
    },
    'chhatrapati-sambhajinagar': {
      title: 'Chhatrapati Sambhajinagar District (Ellora)',
      subtitle: '12th Jyotirlinga rebuilt by Queen Ahilyabai Holkar adjacent to Ellora World Heritage caves.',
      centralName: 'Grishneshwar Jyotirlinga Temple',
      destId: 'grishneshwar'
    }
  };

  const currentMeta = districtNameMap[selectedDistrict] || {
    title: `${selectedDistrict.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')} District`,
    subtitle: 'Explore verified temple guides, sacred history, and authentic visitor logistics.',
    centralName: 'Sacred Heritage Shrine',
    destId: selectedDistrict
  };
  const temples = ALL_TEMPLES_BY_DISTRICT[selectedDistrict] || ALL_TEMPLES_BY_DISTRICT['tirupati'] || [];

  const handleTempleClick = (temple: TempleItem) => {
    // Map temple id to corresponding TempleDetail id
    const idMap: Record<string, string> = {
      'tirumala-venkateswara': 'tirupati',
      'lepakshi-veerabhadra': 'lepakshi',
      'hampi-heritage': 'hampi',
      'puri-jagannath': 'puri',
    };
    const targetId = idMap[temple.id] || temple.id;

    if (temple.available) {
      onSelectTemple(targetId);
      onNavigate('temple-detail');
    } else {
      setSelectedComingSoon(temple.name);
    }
  };

  const filteredTemples = temples.filter(
    (t) =>
      t.name.toLowerCase().includes(templeFilter.toLowerCase()) ||
      t.location.toLowerCase().includes(templeFilter.toLowerCase())
  );

  return (
    <div id="district-selection-page" className="max-w-7xl mx-auto space-y-6 animate-in fade-in duration-300">
      {/* Breadcrumbs & Back */}
      <BreadcrumbNav
        currentPage="district-selection"
        onNavigate={onNavigate}
        onBack={() => onNavigate('state-selection')}
      />

      {/* Page Title & Subtitle */}
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          {currentMeta.title}
        </h1>
        <p className="text-slate-500 text-sm sm:text-base">
          {currentMeta.subtitle}
        </p>
      </div>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Visual Map / Regional Overview */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-4 relative">
          <div className="flex items-center justify-between">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Regional Topography & Monuments
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Verified Heritage Zone
            </span>
          </div>

          {/* Regional Contour Map */}
          <div className="relative w-full aspect-square max-h-[460px] flex items-center justify-center bg-slate-50/70 rounded-2xl p-4 border border-slate-100 overflow-hidden">
            <svg
              viewBox="0 0 500 500"
              className="w-full h-full drop-shadow-sm select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Boundary Shape */}
              <path
                d="M140,90 L260,70 L380,100 L440,200 L430,320 L370,430 L260,450 L160,410 L90,320 L90,200 Z"
                fill="#93c5fd"
                stroke="#ffffff"
                strokeWidth="3"
                opacity="0.75"
              />

              {/* Sub-region areas */}
              <path
                d="M140,90 L260,70 L300,160 L190,180 Z"
                fill="#60a5fa"
                stroke="#ffffff"
                strokeWidth="1.5"
                opacity="0.5"
              />
              <text x="210" y="125" fill="#1e3a8a" fontSize="10" fontWeight="600" opacity="0.8">
                Sacred Hill Range
              </text>

              {/* Secondary Point 1 */}
              <g
                className="cursor-pointer group"
                onClick={() => setSelectedComingSoon('North Sanctum Route')}
                onMouseEnter={() => setHoveredLocation('North Route')}
                onMouseLeave={() => setHoveredLocation(null)}
              >
                <circle cx="370" cy="180" r="14" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
                <circle cx="370" cy="180" r="4" fill="#2563eb" />
                <text x="370" y="160" fill="#1e40af" fontSize="9" fontWeight="bold" textAnchor="middle">
                  Heritage Excursion
                </text>
              </g>

              {/* Secondary Point 2 */}
              <g
                className="cursor-pointer group"
                onClick={() => setSelectedComingSoon('South Sanctum Route')}
                onMouseEnter={() => setHoveredLocation('South Route')}
                onMouseLeave={() => setHoveredLocation(null)}
              >
                <circle cx="210" cy="360" r="14" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
                <circle cx="210" cy="360" r="4" fill="#2563eb" />
                <text x="210" y="385" fill="#1e40af" fontSize="9" fontWeight="bold" textAnchor="middle">
                  Pilgrim Rest Area
                </text>
              </g>

              {/* CENTRAL VERIFIED DESTINATION BEACON */}
              <g
                className="cursor-pointer group"
                onClick={() => {
                  const activeTemple = temples.find((t) => t.available);
                  if (activeTemple) handleTempleClick(activeTemple);
                }}
                onMouseEnter={() => setHoveredLocation(currentMeta.centralName)}
                onMouseLeave={() => setHoveredLocation(null)}
              >
                {/* Glowing ripple beacon */}
                <circle cx="270" cy="235" r="32" fill="#1e3a8a" opacity="0.15" />
                <circle cx="270" cy="235" r="22" fill="#2563eb" opacity="0.25" className="animate-ping" />
                <circle cx="270" cy="235" r="16" fill="#1e3a8a" stroke="#ffffff" strokeWidth="2.5" />

                {/* Star icon inside */}
                <text x="270" y="240" fill="#ffffff" fontSize="13" textAnchor="middle">
                  ★
                </text>

                {/* Location Badge Box */}
                <rect x="200" y="260" width="140" height="26" rx="8" fill="#1e3a8a" stroke="#ffffff" strokeWidth="1.5" />
                <text x="270" y="277" fill="#ffffff" fontSize="9.5" fontWeight="bold" textAnchor="middle">
                  📍 {currentMeta.title.split(' ')[0]} Hub
                </text>
              </g>
            </svg>

            {/* Floating indicator */}
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs border border-slate-200 px-3.5 py-1.5 rounded-xl shadow-xs text-xs">
              <span className="text-slate-400">Selected Target: </span>
              <span className="font-bold text-blue-700">
                {hoveredLocation || currentMeta.centralName}
              </span>
            </div>
          </div>

          <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100 flex items-center justify-between text-xs">
            <span className="text-blue-900 font-medium truncate pr-2">
              Featured Guide: <strong>{currentMeta.centralName}</strong>
            </span>
            <button
              onClick={() => {
                const activeTemple = temples.find((t) => t.available);
                if (activeTemple) handleTempleClick(activeTemple);
              }}
              className="px-3 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-bold text-xs cursor-pointer flex items-center gap-1 shrink-0"
            >
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Column: Temples & Monuments in District List */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 p-6 shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-900">
              Temples & Monuments ({temples.length})
            </h3>
            <span className="text-xs text-slate-400">
              Verified Heritage
            </span>
          </div>

          {/* Quick search */}
          <div className="relative">
            <input
              type="text"
              value={templeFilter}
              onChange={(e) => setTempleFilter(e.target.value)}
              placeholder="Search temple name or location..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          {/* Temple Cards List */}
          <div className="space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
            {filteredTemples.map((temple) => {
              const isActive = temple.available;
              return (
                <div
                  key={temple.id}
                  onClick={() => handleTempleClick(temple)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isActive
                      ? 'bg-blue-50/80 border-2 border-blue-600 text-slate-900 shadow-xs ring-1 ring-blue-200'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Temple Thumbnail */}
                    <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-slate-200 relative bg-slate-100">
                      <TempleImage
                        imageFileName={temple.imageFileName || temple.image}
                        templeName={temple.name}
                        className="w-full h-full object-cover"
                        aspectRatio="square"
                        showVerificationBadge={false}
                      />
                      {isActive && (
                        <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-blue-600 rounded-bl-md" />
                      )}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <h4 className="font-bold text-xs sm:text-sm text-slate-900 truncate">
                          {temple.name}
                        </h4>
                        {temple.verified && (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                            Verified
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 truncate mt-0.5">
                        {temple.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    {isActive ? (
                      <span className="text-xs font-bold text-blue-700 hidden sm:inline-flex items-center gap-1">
                        <span>Open Guide</span>
                      </span>
                    ) : (
                      <span className="text-[10px] text-slate-400 hidden sm:inline">
                        Coming Soon
                      </span>
                    )}
                    <ChevronRight
                      className={`w-4 h-4 ${
                        isActive ? 'text-blue-700 stroke-[2.5]' : 'text-slate-400'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Coming Soon Modal */}
      <ComingSoonModal
        regionName={selectedComingSoon}
        onClose={() => setSelectedComingSoon(null)}
        onNavigate={onNavigate}
      />
    </div>
  );
};
