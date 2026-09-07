import React, { useState } from 'react';
import {
  Sparkles,
  Search,
  ShieldCheck,
  ArrowRight,
  MapPin,
  Calendar,
  CheckCircle2,
  Building2,
  Navigation2,
  Landmark,
  X
} from 'lucide-react';
import { PageType } from '../types';
import { INDIA_GEO_STATES, GeoState } from '../data/indiaMapData';

interface IndiaMapPageProps {
  onNavigate: (page: PageType) => void;
  onSelectState: (stateId: string) => void;
}

export const IndiaMapPage: React.FC<IndiaMapPageProps> = ({
  onNavigate,
  onSelectState,
}) => {
  const [hoveredStateId, setHoveredStateId] = useState<string | null>(null);
  const [selectedStateInfo, setSelectedStateInfo] = useState<GeoState | null>(null);
  const [stateFilter, setStateFilter] = useState('');

  const hoveredState = INDIA_GEO_STATES.find((s) => s.id === hoveredStateId);

  const handleStateClick = (state: GeoState) => {
    if (state.available) {
      onSelectState(state.id);
      onNavigate('state-selection');
    } else {
      setSelectedStateInfo(state);
    }
  };

  const filteredStates = INDIA_GEO_STATES.filter((s) =>
    s.name.toLowerCase().includes(stateFilter.toLowerCase())
  );

  return (
    <div id="india-map-landing" className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Title & Subtitle */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 text-blue-700">
          <Sparkles className="w-5 h-5 fill-blue-100" />
          <span className="text-xs uppercase font-bold tracking-widest text-blue-800">
            The Roots Of India • National Heritage Directory
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Explore India's Sacred Heritage
        </h1>
        <p className="text-slate-500 text-sm sm:text-base max-w-3xl">
          Select a state on the authentic map to discover historic districts, sacred architectural sanctums, and verified pilgrimage guides.
        </p>
      </div>

      {/* Main Grid: Left = Large Accurate Interactive India Map; Right = Supporting Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Map Box */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-4 sm:p-6 lg:p-7 shadow-2xs relative">
          {/* Quick Search & Status Indicators */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                value={stateFilter}
                onChange={(e) => setStateFilter(e.target.value)}
                placeholder="Search state (e.g. Andhra Pradesh, Karnataka)..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-blue-600 inline-block shadow-xs"></span>
                <span className="font-semibold text-slate-800">Active Heritage Regions</span>
              </span>
              <span className="text-slate-300">|</span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-slate-200 border border-slate-300 inline-block"></span>
                <span>In Verification</span>
              </span>
            </div>
          </div>

          {/* Authentic Geographic SVG Map of India (28 States + 8 UTs) */}
          <div className="relative w-full aspect-1/1 sm:aspect-8/9 flex items-center justify-center bg-slate-50/70 rounded-2xl p-2 sm:p-4 border border-slate-100 overflow-hidden">
            <svg
              viewBox="0 0 800 900"
              className="w-full h-full max-h-[640px] drop-shadow-sm select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Surrounding Seas Labels */}
              <text x="60" y="700" fill="#94a3b8" fontSize="13" fontWeight="bold" letterSpacing="2">
                ARABIAN SEA
              </text>
              <text x="590" y="700" fill="#94a3b8" fontSize="13" fontWeight="bold" letterSpacing="2">
                BAY OF BENGAL
              </text>
              <text x="320" y="875" fill="#94a3b8" fontSize="13" fontWeight="bold" letterSpacing="2">
                INDIAN OCEAN
              </text>

              {/* All Geographically Accurate States and UTs */}
              <g id="india-accurate-states">
                {INDIA_GEO_STATES.map((state) => {
                  const isHovered = hoveredStateId === state.id;
                  const isActive = state.available;

                  return (
                    <path
                      key={state.id}
                      id={`state-${state.id}`}
                      d={state.path}
                      onClick={() => handleStateClick(state)}
                      onMouseEnter={() => setHoveredStateId(state.id)}
                      onMouseLeave={() => setHoveredStateId(null)}
                      className={`cursor-pointer transition-colors duration-150 ${
                        isActive
                          ? isHovered
                            ? 'fill-blue-800 stroke-white stroke-[2.5]'
                            : 'fill-blue-600 stroke-white stroke-[1.5]'
                          : isHovered
                          ? 'fill-sky-200 stroke-slate-400 stroke-[1.5]'
                          : 'fill-slate-100 hover:fill-slate-200 stroke-slate-300 stroke-[0.8]'
                      }`}
                    />
                  );
                })}
              </g>

              {/* Active State Pin Badges */}
              {/* Andhra Pradesh (Tirupati & Lepakshi) */}
              <g
                className="cursor-pointer pointer-events-none"
                transform="translate(340, 680)"
              >
                <circle cx="0" cy="0" r="14" fill="#1e3a8a" opacity="0.2" className="animate-ping" />
                <circle cx="0" cy="0" r="6" fill="#fbbf24" stroke="#ffffff" strokeWidth="2" />
                <rect x="-65" y="-34" width="130" height="22" rx="6" fill="#1e3a8a" stroke="#ffffff" strokeWidth="1" />
                <text x="0" y="-19" fill="#ffffff" fontSize="9.5" fontWeight="bold" textAnchor="middle">
                  Andhra Pradesh ★
                </text>
              </g>

              {/* Karnataka (Hampi) */}
              <g
                className="cursor-pointer pointer-events-none"
                transform="translate(245, 660)"
              >
                <circle cx="0" cy="0" r="14" fill="#1e3a8a" opacity="0.2" className="animate-ping" />
                <circle cx="0" cy="0" r="6" fill="#fbbf24" stroke="#ffffff" strokeWidth="2" />
                <rect x="-55" y="-34" width="110" height="22" rx="6" fill="#1e3a8a" stroke="#ffffff" strokeWidth="1" />
                <text x="0" y="-19" fill="#ffffff" fontSize="9.5" fontWeight="bold" textAnchor="middle">
                  Karnataka ★
                </text>
              </g>

              {/* Odisha (Puri) */}
              <g
                className="cursor-pointer pointer-events-none"
                transform="translate(485, 520)"
              >
                <circle cx="0" cy="0" r="14" fill="#1e3a8a" opacity="0.2" className="animate-ping" />
                <circle cx="0" cy="0" r="6" fill="#fbbf24" stroke="#ffffff" strokeWidth="2" />
                <rect x="-45" y="-34" width="90" height="22" rx="6" fill="#1e3a8a" stroke="#ffffff" strokeWidth="1" />
                <text x="0" y="-19" fill="#ffffff" fontSize="9.5" fontWeight="bold" textAnchor="middle">
                  Odisha ★
                </text>
              </g>
            </svg>

            {/* Hover Tooltip / Floating Card */}
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs border border-slate-200 px-3.5 py-2 rounded-xl shadow-md text-xs max-w-xs">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <MapPin className="w-3.5 h-3.5 text-blue-700" />
                <span>{hoveredState ? hoveredState.name : 'Select an Active State'}</span>
                {hoveredState?.available && (
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.2 rounded border border-blue-200 ml-1">
                    Active
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5 truncate">
                {hoveredState
                  ? hoveredState.available
                    ? 'Click to open verified heritage directory'
                    : hoveredState.description || 'Verified guide in cataloguing'
                  : 'Hover over or click any state to begin'}
              </p>
            </div>
          </div>

          {/* Quick-Select Pills */}
          <div className="mt-4 pt-4 border-t border-slate-100">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Browse All 28 States & 8 Union Territories:
            </span>
            <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1">
              {filteredStates.map((st) => (
                <button
                  key={st.id}
                  onClick={() => handleStateClick(st)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    st.available
                      ? 'bg-blue-600 text-white shadow-xs hover:bg-blue-700 ring-2 ring-blue-300'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{st.name}</span>
                  {st.available && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: 4 Supporting Cards + Active Destination Shortcuts */}
        <div className="lg:col-span-4 space-y-4">
          {/* Active Featured Heritage Hubs Card */}
          <div className="p-5 rounded-3xl bg-linear-to-br from-slate-900 to-blue-950 text-white shadow-md space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200">
                Verified Heritage Gateways
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Explore our thoroughly documented and verified heritage destinations:
            </p>

            <div className="space-y-2">
              {/* Andhra Pradesh (Tirupati & Lepakshi) */}
              <button
                onClick={() => {
                  onSelectState('andhra-pradesh');
                  onNavigate('state-selection');
                }}
                className="w-full p-2.5 bg-white/10 hover:bg-white/20 rounded-2xl text-left transition-all flex items-center justify-between border border-white/10 cursor-pointer"
              >
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>Andhra Pradesh</span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-bold">
                      2 Destinations
                    </span>
                  </div>
                  <div className="text-[11px] text-blue-200">
                    Tirupati (Tirumala) & Lepakshi
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-white shrink-0" />
              </button>

              {/* Karnataka (Hampi) */}
              <button
                onClick={() => {
                  onSelectState('karnataka');
                  onNavigate('state-selection');
                }}
                className="w-full p-2.5 bg-white/10 hover:bg-white/20 rounded-2xl text-left transition-all flex items-center justify-between border border-white/10 cursor-pointer"
              >
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>Karnataka</span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-bold">
                      UNESCO
                    </span>
                  </div>
                  <div className="text-[11px] text-blue-200">
                    Hampi (Vijayanagara)
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-white shrink-0" />
              </button>

              {/* Odisha (Puri) */}
              <button
                onClick={() => {
                  onSelectState('odisha');
                  onNavigate('state-selection');
                }}
                className="w-full p-2.5 bg-white/10 hover:bg-white/20 rounded-2xl text-left transition-all flex items-center justify-between border border-white/10 cursor-pointer"
              >
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>Odisha</span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-bold">
                      Char Dham
                    </span>
                  </div>
                  <div className="text-[11px] text-blue-200">
                    Puri (Shree Jagannath Temple)
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-white shrink-0" />
              </button>
            </div>
          </div>

          {/* Card 1: Discover Temples */}
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-2xs hover:border-blue-300 transition-all space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100">
              <Building2 className="w-5 h-5 text-blue-700" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Discover Temples & Monuments
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Select a state to view its verified districts, heritage sanctums, and timeless architectural monuments.
            </p>
          </div>

          {/* Card 2: Authentic Information */}
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-2xs hover:border-blue-300 transition-all space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100">
              <ShieldCheck className="w-5 h-5 text-blue-700" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Authentic Information
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Verified data directly linked to official temple devasthanams, ASI records, and state tourism boards.
            </p>
          </div>

          {/* Card 3: Easy Navigation */}
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-2xs hover:border-blue-300 transition-all space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100">
              <Navigation2 className="w-5 h-5 text-blue-700" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Easy Navigation
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              India → State → District → Heritage Destination. A seamless, crystal-clear journey for devotees.
            </p>
          </div>

          {/* Card 4: Plan Your Visit */}
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-2xs hover:border-blue-300 transition-all space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100">
              <Calendar className="w-5 h-5 text-blue-700" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Plan Your Visit
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Access verified darshan rules, authentic stay options, certified guidelines, and fraud prevention alerts.
            </p>
          </div>
        </div>
      </div>

      {/* State Preview Modal for states being catalogued */}
      {selectedStateInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-xl border border-slate-200 space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{selectedStateInfo.name}</h3>
                  <span className="text-[10px] font-bold uppercase text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    Cataloguing In Progress
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedStateInfo(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {selectedStateInfo.description || 'Our trust verification team is currently compiling official temple timings, stay options, and booking guidelines for this state.'}
            </p>

            {selectedStateInfo.heritageSites && selectedStateInfo.heritageSites.length > 0 && (
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                  Upcoming Heritage Sites
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedStateInfo.heritageSites.map((site, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold"
                    >
                      {site}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <div className="p-3 bg-blue-50 rounded-2xl text-xs text-blue-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" />
                <span>You can explore the active heritage destinations right now:</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => {
                    setSelectedStateInfo(null);
                    onSelectState('andhra-pradesh');
                    onNavigate('state-selection');
                  }}
                  className="py-2 px-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-[11px] font-bold text-center cursor-pointer"
                >
                  Andhra Pradesh
                </button>
                <button
                  onClick={() => {
                    setSelectedStateInfo(null);
                    onSelectState('karnataka');
                    onNavigate('state-selection');
                  }}
                  className="py-2 px-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-[11px] font-bold text-center cursor-pointer"
                >
                  Karnataka
                </button>
                <button
                  onClick={() => {
                    setSelectedStateInfo(null);
                    onSelectState('odisha');
                    onNavigate('state-selection');
                  }}
                  className="py-2 px-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-[11px] font-bold text-center cursor-pointer"
                >
                  Odisha
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
