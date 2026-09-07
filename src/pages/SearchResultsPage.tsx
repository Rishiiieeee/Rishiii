import React, { useState } from 'react';
import {
  Clock,
  ExternalLink,
  Search,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MapPin
} from 'lucide-react';
import { PageType } from '../types';
import { StatusBadge } from '../components/StatusBadge';
import { ALL_TEMPLES } from '../data/templesData';

interface SearchResultsPageProps {
  searchQuery: string;
  onSearch: (query: string) => void;
  onNavigate: (page: PageType) => void;
}

export const SearchResultsPage: React.FC<SearchResultsPageProps> = ({
  searchQuery,
  onSearch,
  onNavigate,
}) => {
  const [localQuery, setLocalQuery] = useState(searchQuery || 'Darshan timings');

  const handleQuerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localQuery.trim()) {
      onSearch(localQuery.trim());
    }
  };

  const currentDisplayQuery = searchQuery || 'Darshan';
  const q = currentDisplayQuery.toLowerCase().trim();

  // Dynamic search across all 16 temples using TempleDetail schema
  const matchedTemples = ALL_TEMPLES.filter((temple) => {
    return (
      temple.name.toLowerCase().includes(q) ||
      temple.shortName.toLowerCase().includes(q) ||
      temple.stateName.toLowerCase().includes(q) ||
      temple.districtName.toLowerCase().includes(q) ||
      temple.overview.toLowerCase().includes(q) ||
      temple.history.purpose.toLowerCase().includes(q) ||
      temple.history.culturalSignificance.toLowerCase().includes(q) ||
      temple.engineering.structuralInnovations.some((feat) =>
        feat.title.toLowerCase().includes(q) || feat.scienceFact.toLowerCase().includes(q)
      ) ||
      temple.info.templeTimings.toLowerCase().includes(q) ||
      temple.info.darshanTimings.toLowerCase().includes(q) ||
      temple.info.dressCode.toLowerCase().includes(q)
    );
  });

  return (
    <div id="search-results-page" className="max-w-4xl mx-auto space-y-6 animate-in fade-in">
      {/* 1. Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1 tracking-tight">
          Search Heritage & Darshan
        </h1>
        <p className="text-slate-500 text-sm sm:text-base">
          Showing verified results across 16 Sacred Shrines for <span className="font-bold text-blue-700">"{currentDisplayQuery}"</span>
        </p>
      </div>

      {/* 2. Search & Suggestion Bar */}
      <div className="bg-white rounded-3xl border border-slate-200 p-5 space-y-3 shadow-2xs">
        <form onSubmit={handleQuerySubmit} className="flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              placeholder="Search temple name, science, engineering, or darshan..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
          <button
            type="submit"
            className="px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded-2xl transition-colors cursor-pointer shadow-xs"
          >
            Search
          </button>
        </form>

        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 pt-1">
          <span className="font-semibold text-slate-700">Quick queries:</span>
          {['Acoustic resonance', 'Hanging pillar', 'Darshan timings', 'Dress code', 'Earthquake resistance', 'Tirupati', 'Kedarnath', 'Somnath'].map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setLocalQuery(tag);
                onSearch(tag);
              }}
              className="px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs transition-colors cursor-pointer font-medium"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Results List */}
      <div className="space-y-4">
        {matchedTemples.length > 0 ? (
          matchedTemples.map((temple) => (
            <div
              key={temple.id}
              className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-2xs hover:shadow-md transition-all space-y-4"
            >
              <div className="flex flex-wrap justify-between items-start gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                      {temple.stateName} • {temple.districtName}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-200">
                      Verified Heritage
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                    {temple.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{temple.location}</span>
                  </p>
                </div>

                <button
                  onClick={() => onNavigate('temple-detail')}
                  className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl cursor-pointer transition-colors shadow-2xs"
                >
                  Explore Shrine
                </button>
              </div>

              {/* Darshan & Timings Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="font-bold text-slate-700 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600" /> Temple & Darshan Timings
                  </span>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    {temple.info.darshanTimings}
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="font-bold text-slate-700 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Scientific & Architectural Highlight
                  </span>
                  <p className="text-slate-600 text-[11px] leading-relaxed line-clamp-2">
                    {temple.engineering.structuralInnovations[0]?.title}: {temple.engineering.structuralInnovations[0]?.scienceFact}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Dress code: {temple.info.dressCode}</span>
                <button
                  onClick={() => onNavigate('staycheck')}
                  className="text-blue-700 hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span>Check verified stays ({temple.accommodations.length})</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white p-10 rounded-3xl border border-slate-200 text-center space-y-3">
            <span className="text-4xl">🔍</span>
            <h3 className="text-lg font-bold text-slate-900">No exact matches found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              We couldn't find a direct match for "{currentDisplayQuery}". Try searching for one of the 16 shrines (Tirupati, Lepakshi, Hampi, Puri, Somnath, Kedarnath) or explore via the interactive India Map.
            </p>
            <button
              onClick={() => onNavigate('india-map')}
              className="px-5 py-2.5 bg-blue-700 text-white text-xs font-bold rounded-xl hover:bg-blue-800 transition-colors cursor-pointer"
            >
              Explore India Map →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
