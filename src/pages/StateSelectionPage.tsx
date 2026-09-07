import React, { useState } from 'react';
import {
  MapPin,
  ChevronRight,
  Search,
  ShieldCheck,
  Building2,
  Landmark,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { PageType } from '../types';
import { ALL_DISTRICTS_BY_STATE, AP_DISTRICTS } from '../data/hierarchyData';
import { STATE_GEO_MAPS, INDIA_GEO_STATES } from '../data/indiaMapData';
import { BreadcrumbNav } from '../components/BreadcrumbNav';
import { ComingSoonModal } from '../components/ComingSoonModal';

interface StateSelectionPageProps {
  selectedState: string;
  onNavigate: (page: PageType) => void;
  onSelectDistrict: (districtId: string) => void;
}

export const StateSelectionPage: React.FC<StateSelectionPageProps> = ({
  selectedState,
  onNavigate,
  onSelectDistrict,
}) => {
  const [selectedComingSoon, setSelectedComingSoon] = useState<string | null>(null);
  const [districtFilter, setDistrictFilter] = useState('');
  const [hoveredDistrictId, setHoveredDistrictId] = useState<string | null>(null);

  // Retrieve state metadata and geo map
  const stateMeta = INDIA_GEO_STATES.find((s) => s.id === selectedState) || {
    id: selectedState,
    name: selectedState === 'karnataka' ? 'Karnataka' : selectedState === 'odisha' ? 'Odisha' : 'Andhra Pradesh',
    description: 'Explore sacred shrines, temple architecture and verified guides.'
  };

  const stateGeoMap = STATE_GEO_MAPS[selectedState];
  const districts = ALL_DISTRICTS_BY_STATE[selectedState] || AP_DISTRICTS;

  const handleDistrictClick = (districtId: string, districtName: string, isAvailable: boolean) => {
    if (isAvailable) {
      onSelectDistrict(districtId);
      onNavigate('district-selection');
    } else {
      setSelectedComingSoon(districtName);
    }
  };

  const filteredDistricts = districts.filter((d) =>
    d.name.toLowerCase().includes(districtFilter.toLowerCase())
  );

  const activeDistrictCount = districts.filter((d) => d.available).length;
  const hoveredDistrict = stateGeoMap?.districts.find((d) => d.id === hoveredDistrictId) ||
    districts.find((d) => d.id === hoveredDistrictId);

  return (
    <div id="state-selection-page" className="max-w-7xl mx-auto space-y-6 animate-in fade-in duration-300">
      {/* Breadcrumbs & Back */}
      <BreadcrumbNav
        currentPage="state-selection"
        onNavigate={onNavigate}
        onBack={() => onNavigate('india-map')}
      />

      {/* Page Title & Subtitle */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-blue-700">
          <Landmark className="w-4 h-4" />
          <span className="text-xs uppercase font-bold tracking-wider text-blue-800">
            State Level Heritage Exploration
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          {stateMeta.name}
        </h1>
        <p className="text-slate-500 text-sm sm:text-base">
          Select a district to view temples, architectural wonders, and verified pilgrimage guides.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Authentic State Geographic SVG Map */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-2xs space-y-4 relative">
          <div className="flex items-center justify-between">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Geographic District Map
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              {activeDistrictCount} Verified {activeDistrictCount === 1 ? 'Destination' : 'Destinations'}
            </span>
          </div>

          {/* Interactive State Map Container */}
          <div className="relative w-full aspect-4/3 flex items-center justify-center bg-slate-50/70 rounded-2xl p-3 sm:p-5 border border-slate-100 overflow-hidden">
            {stateGeoMap ? (
              <svg
                viewBox={stateGeoMap.viewBox || "0 0 600 600"}
                className="w-full h-full max-h-[480px] drop-shadow-sm select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* State outline background */}
                {stateGeoMap.outline && (
                  <path
                    d={stateGeoMap.outline}
                    fill="#f1f5f9"
                    stroke="#cbd5e1"
                    strokeWidth="1.5"
                    opacity="0.8"
                  />
                )}

                {/* Individual District Boundaries */}
                {stateGeoMap.districts.map((dist) => {
                  const isHovered = hoveredDistrictId === dist.id;
                  const isActive = dist.available;

                  return (
                    <path
                      key={dist.id}
                      id={`district-geo-${dist.id}`}
                      d={dist.path}
                      onClick={() => handleDistrictClick(dist.id, dist.name, dist.available)}
                      onMouseEnter={() => setHoveredDistrictId(dist.id)}
                      onMouseLeave={() => setHoveredDistrictId(null)}
                      className={`cursor-pointer transition-colors duration-150 ${
                        isActive
                          ? isHovered
                            ? 'fill-blue-900 stroke-white stroke-[2.5]'
                            : 'fill-blue-700 stroke-white stroke-[1.5]'
                          : isHovered
                          ? 'fill-sky-200 stroke-slate-400 stroke-[1.2]'
                          : 'fill-slate-100 hover:fill-slate-200 stroke-slate-300 stroke-[0.8]'
                      }`}
                    />
                  );
                })}

                {/* Active District Beacons and Labels */}
                {stateGeoMap.districts.filter((d) => d.available).map((dist) => (
                  <g
                    key={`beacon-${dist.id}`}
                    transform={`translate(${dist.centroid[0]}, ${dist.centroid[1]})`}
                    className="pointer-events-none"
                  >
                    <circle cx="0" cy="0" r="10" fill="#38bdf8" className="animate-ping opacity-60" />
                    <circle cx="0" cy="0" r="4.5" fill="#ffffff" stroke="#1e3a8a" strokeWidth="2" />
                    <rect x="-42" y="-24" width="84" height="18" rx="5" fill="#1e3a8a" stroke="#ffffff" strokeWidth="1" />
                    <text x="0" y="-12" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">
                      ★ {dist.heritageSpot || dist.name}
                    </text>
                  </g>
                ))}
              </svg>
            ) : (
              <div className="text-center p-8 space-y-2">
                <Compass className="w-12 h-12 text-blue-600 mx-auto animate-pulse" />
                <p className="text-sm font-bold text-slate-800">Interactive Map View</p>
                <p className="text-xs text-slate-500">Please select from the district directory on the right.</p>
              </div>
            )}

            {/* Floating Selection Prompt */}
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs border border-slate-200 px-3.5 py-1.5 rounded-xl shadow-xs text-xs">
              <span className="text-slate-400">Inspecting: </span>
              <span className="font-bold text-blue-700">
                {hoveredDistrict ? hoveredDistrict.name : 'Click a highlighted district to explore'}
              </span>
            </div>
          </div>

          <div className="text-xs text-slate-500 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" />
            <span>Click on any highlighted district on the map or choose from the list on the right.</span>
          </div>
        </div>

        {/* Right Column: Districts List */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 shadow-2xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-900">
              Districts in {stateMeta.name}
            </h3>
            <span className="text-xs text-slate-400">{districts.length} Regions</span>
          </div>

          {/* Search box */}
          <div className="relative">
            <input
              type="text"
              value={districtFilter}
              onChange={(e) => setDistrictFilter(e.target.value)}
              placeholder="Search district or heritage site..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          {/* Interactive list items */}
          <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
            {filteredDistricts.map((district) => {
              const isActive = district.available;
              return (
                <button
                  key={district.id}
                  onClick={() => handleDistrictClick(district.id, district.name, district.available)}
                  className={`w-full flex items-center justify-between p-3.5 rounded-2xl text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-50 border-2 border-blue-600 text-blue-900 font-bold shadow-xs'
                      : 'border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold flex items-center gap-1.5 flex-wrap">
                        <span>{district.name}</span>
                        {isActive && (
                          <span className="text-[10px] uppercase font-bold bg-blue-600 text-white px-1.5 py-0.2 rounded-md">
                            Verified Hub
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        {district.templeCount} {district.templeCount === 1 ? 'Temple guide' : 'Temples & Monuments listed'}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {isActive ? (
                      <span className="text-xs text-blue-700 font-bold hidden sm:inline">
                        Explore
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
                </button>
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
