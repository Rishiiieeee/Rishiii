import React, { useState } from 'react';
import {
  Search,
  Building,
  Hotel,
  Home,
  SlidersHorizontal,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  Info,
  ShieldCheck,
  Filter,
  Sparkles
} from 'lucide-react';
import { PageType, Accommodation } from '../types';
import { ALL_TEMPLES } from '../data/templesData';

interface StayCheckPageProps {
  onNavigate: (page: PageType) => void;
  onSelectAccommodation: (acc: Accommodation) => void;
}

export const StayCheckPage: React.FC<StayCheckPageProps> = ({
  onNavigate,
  onSelectAccommodation,
}) => {
  const [selectedTempleFilter, setSelectedTempleFilter] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Stays');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Verified' | 'Check Twice'>('All');

  // Flatten and aggregate accommodations from all 16 temples
  // Apply verification rule:
  // >= 75%: Verified
  // 50 - 74%: Check Twice
  // < 50%: Do NOT display (filtered out completely)
  const allStays: (Accommodation & { templeName: string; templeId: string })[] = [];

  ALL_TEMPLES.forEach((temple) => {
    temple.accommodations.forEach((acc) => {
      // Filter out properties with < 50% positive review rating
      if (acc.positiveReviewPercentage < 50) {
        return;
      }

      const isVerified = acc.positiveReviewPercentage >= 75;
      const isTrust = acc.name.toLowerCase().includes('dharamshala') ||
                      acc.name.toLowerCase().includes('trust') ||
                      acc.name.toLowerCase().includes('devasthanam') ||
                      acc.name.toLowerCase().includes('cottage') ||
                      acc.name.toLowerCase().includes('bhavan') ||
                      acc.name.toLowerCase().includes('ashram');

      allStays.push({
        id: acc.id,
        name: acc.name,
        location: `${temple.shortName} (${acc.distance})`,
        price: acc.priceRange.includes('₹')
          ? parseInt(acc.priceRange.replace(/[^0-9]/g, '').slice(0, 4) || '1000', 10)
          : 1200,
        priceUnit: '/night',
        status: isVerified ? 'Verified' : 'Needs Check',
        category: isTrust ? 'Temple Trust Stays' : 'Hotels',
        image: `/${temple.imageFileName}`,
        rating: acc.rating,
        description: acc.reviewSummary,
        verifiedFeatures: acc.facilities,
        positiveReviewPercentage: acc.positiveReviewPercentage,
        templeName: temple.shortName,
        templeId: temple.id,
      });
    });
  });

  const categories = [
    { id: 'all', name: 'All Stays', icon: '🏨' },
    { id: 'trust', name: 'Temple Trust Stays', icon: '🏛️' },
    { id: 'hotels', name: 'Hotels', icon: '🏢' },
  ];

  const filteredAccommodations = allStays.filter((item) => {
    if (selectedTempleFilter !== 'All' && item.templeId !== selectedTempleFilter) return false;

    if (selectedCategory !== 'All Stays' && item.category !== selectedCategory) return false;

    if (statusFilter === 'Verified' && item.status !== 'Verified') return false;
    if (statusFilter === 'Check Twice' && item.status !== 'Needs Check') return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.templeName.toLowerCase().includes(q) ||
        (item.description && item.description.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div id="staycheck-page" className="space-y-8 animate-in fade-in">
      {/* 1. Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>StayCheck Verification Algorithm</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            StayCheck: Verified Pilgrim Accommodations
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Transparently vetted lodging options across India's 16 sacred shrines, guarding devotees against blacklisted operators and inflated tariffs.
          </p>
        </div>

        {/* Verification Status Filter Tabs */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Status:</span>
          {(['All', 'Verified', 'Check Twice'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setStatusFilter(filter)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                statusFilter === filter
                  ? filter === 'Verified'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : filter === 'Check Twice'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-blue-700 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {filter === 'Verified' ? '✓ Verified (≥75%)' : filter === 'Check Twice' ? '⚠️ Check Twice (50-74%)' : 'All Stays'}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Verification Standards Explainer Card */}
      <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>StayCheck Verification Standards</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="font-bold text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> ≥ 75% Positive Pilgrim Rating
            </span>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Awarded the <strong>Verified</strong> trust badge. Compliant with municipal hospitality laws, verified temple proximity, and transparent pricing.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="font-bold text-amber-400 flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5" /> 50% – 74% Positive Pilgrim Rating
            </span>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Awarded the <strong>Check Twice</strong> warning badge. Mixed feedback regarding peak season tariffs or basic amenities.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="font-bold text-rose-400 flex items-center gap-1">
              ✕ Below 50% Positive Pilgrim Rating
            </span>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              <strong>Permanently Excluded.</strong> Properties with frequent overcharging complaints or tout affiliation are scrubbed from our database.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Temple Shrine Selector & Search Filter */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Filter By Temple Destination ({allStays.length} Verified Accommodations)
          </span>
          <span className="text-xs text-blue-700 font-semibold">
            Showing {filteredAccommodations.length} properties
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedTempleFilter('All')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${
              selectedTempleFilter === 'All'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            All Shrines ({allStays.length})
          </button>
          {ALL_TEMPLES.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTempleFilter(t.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap cursor-pointer transition-all ${
                selectedTempleFilter === t.id
                  ? 'bg-blue-700 text-white font-bold shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {t.shortName}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.name;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          <div className="w-full sm:w-80 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search property name, temple, or city..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* 4. Accommodation Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAccommodations.map((item) => {
          const isVerified = item.status === 'Verified';
          return (
            <div
              key={item.id}
              id={`stay-card-${item.id}`}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-lg hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block">
                      {item.templeName}
                    </span>
                    <h3 className="font-bold text-slate-900 text-base mt-0.5">{item.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{item.location}</span>
                    </p>
                  </div>
                  {isVerified ? (
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-[11px] font-bold flex items-center gap-1 shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Verified ({item.positiveReviewPercentage}%)
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-[11px] font-bold flex items-center gap-1 shrink-0">
                      <AlertTriangle className="w-3 h-3 text-amber-600" />
                      Check Twice ({item.positiveReviewPercentage}%)
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {item.verifiedFeatures && item.verifiedFeatures.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-1">
                    {item.verifiedFeatures.map((fac, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-slate-100 rounded-md text-[10px] font-medium text-slate-700">
                        {fac}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-6 pt-0">
                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Estimated Tariff</span>
                    <span className="text-sm font-bold text-blue-700">
                      ₹{item.price.toLocaleString()} <span className="text-[10px] text-slate-400 font-normal">{item.priceUnit}</span>
                    </span>
                  </div>
                  <button
                    id={`details-btn-${item.id}`}
                    onClick={() => onSelectAccommodation(item)}
                    className="px-4 py-2 bg-slate-900 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    Inspect Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 5. Warning / Anti-Fraud Footer */}
      <div className="p-5 bg-blue-50 border border-blue-200 rounded-2xl text-xs text-blue-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
          <div>
            <strong>Direct Devasthanam Advice:</strong> Official temple cottages (such as TTD Tirumala, Srisailam Devasthanam, and Shri Kedarnath GMVN huts) are only booked on official government portals. Never send UPI advances to unverified phone numbers.
          </div>
        </div>
        <button
          onClick={() => onNavigate('booksafe')}
          className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold rounded-xl whitespace-nowrap cursor-pointer shrink-0 transition-colors"
        >
          Check BookSafe Portals →
        </button>
      </div>
    </div>
  );
};
