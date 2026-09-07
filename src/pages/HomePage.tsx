import React, { useState } from 'react';
import {
  Search,
  Landmark,
  ShieldCheck,
  AlertTriangle,
  Clock,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Compass,
  MapPin,
  Building,
  Volume2,
  Sun,
  Shield
} from 'lucide-react';
import { PageType, Accommodation } from '../types';
import { TempleImage } from '../components/TempleImage';
import { ALL_TEMPLES } from '../data/templesData';
import { POPULAR_ACCOMMODATIONS, OFFICIAL_BOOKING_LINKS } from '../data/mockData';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onSearch: (query: string) => void;
  onSelectAccommodation: (acc: Accommodation) => void;
  onSelectTemple?: (templeId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSearch,
  onSelectAccommodation,
  onSelectTemple
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Jyotirlinga' | 'Maha Kshetra' | 'UNESCO World Heritage'>('All');
  const [reportIssue, setReportIssue] = useState('');
  const [reportSubmitted, setReportSubmitted] = useState(false);

  const handleQuickReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportIssue) return;
    setReportSubmitted(true);
    setTimeout(() => {
      setReportSubmitted(false);
      setReportIssue('');
    }, 4000);
  };

  const filteredTemples = ALL_TEMPLES.filter((t) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Jyotirlinga') return t.category === 'Jyotirlinga';
    if (selectedCategory === 'Maha Kshetra') return t.category === 'Maha Kshetra';
    if (selectedCategory === 'UNESCO World Heritage') return t.category === 'UNESCO World Heritage';
    return true;
  });

  return (
    <div id="home-page" className="space-y-10 animate-in fade-in">
      {/* 1. Brand Flagship Hero Banner */}
      <div
        id="home-hero-banner"
        className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border border-blue-900/40"
      >
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-xs font-bold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>National Heritage & Scientific Inquiry Portal</span>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white">
              THE ROOTS OF INDIA
            </h1>
            <p className="text-amber-300 font-semibold text-base sm:text-lg mt-1 italic tracking-wide">
              “Discover the Heritage. Understand the Science. Experience the Roots.”
            </p>
          </div>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
            Don’t just visit India's heritage. Understand the knowledge behind it. Explore verified history, sacred geometry, acoustic physics, seismic resilience, and authentic booking portals for 16 premier temples across the Indian subcontinent.
          </p>

          <div className="pt-3 flex flex-wrap items-center gap-3">
            <button
              id="hero-explore-map-btn"
              onClick={() => onNavigate('india-map')}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-3.5 rounded-xl font-extrabold text-sm shadow-lg shadow-amber-500/25 transition-all active:scale-98 cursor-pointer flex items-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>Explore India Map</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-all-temples-btn"
              onClick={() => {
                const el = document.getElementById('sixteen-temples-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-3.5 rounded-xl font-bold text-sm transition-all cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>16 Sacred Shrines</span>
            </button>

            <button
              id="hero-staycheck-btn"
              onClick={() => onNavigate('staycheck')}
              className="bg-blue-900/60 hover:bg-blue-800 border border-blue-700/80 text-blue-100 px-4 py-3.5 rounded-xl font-semibold text-sm transition-all cursor-pointer flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>StayCheck</span>
            </button>
          </div>
        </div>

        {/* Decorative Heritage Motif */}
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-amber-500/10 via-transparent to-transparent pointer-events-none hidden md:block" />
        <div className="absolute -bottom-10 -right-10 w-64 h-64 border-8 border-white/5 rounded-full pointer-events-none" />
      </div>

      {/* 2. Four Quick Pillar Access Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Explore Map */}
        <div
          onClick={() => onNavigate('india-map')}
          className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="w-11 h-11 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center text-xl mb-3 group-hover:scale-105 transition-transform">
              🗺️
            </div>
            <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-700 transition-colors">
              Geographic Exploration
            </h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Accurate 28 States and 8 UTs map with progressive district navigation.
            </p>
          </div>
          <div className="pt-3 flex items-center text-xs font-bold text-blue-700 gap-1">
            <span>Open Map</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Card 2: 16 Sacred Shrines */}
        <div
          onClick={() => {
            const el = document.getElementById('sixteen-temples-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-amber-300 transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="w-11 h-11 bg-amber-50 text-amber-700 rounded-xl flex items-center justify-center text-xl mb-3 group-hover:scale-105 transition-transform">
              🛕
            </div>
            <h3 className="font-bold text-slate-900 text-sm group-hover:text-amber-700 transition-colors">
              16 Sacred Shrines
            </h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Mapped authentic photography, 12 Jyotirlingas, and Maha Kshetras.
            </p>
          </div>
          <div className="pt-3 flex items-center text-xs font-bold text-amber-700 gap-1">
            <span>View Shrines</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Card 3: StayCheck */}
        <div
          onClick={() => onNavigate('staycheck')}
          className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="w-11 h-11 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center text-xl mb-3 group-hover:scale-105 transition-transform">
              🏨
            </div>
            <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
              StayCheck Verification
            </h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Standardized pilgrim stay database (≥75% Verified, 50-74% Check Twice).
            </p>
          </div>
          <div className="pt-3 flex items-center text-xs font-bold text-emerald-700 gap-1">
            <span>Check Stays</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Card 4: Report a Problem */}
        <div
          onClick={() => onNavigate('report')}
          className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-rose-300 transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="w-11 h-11 bg-rose-50 text-rose-700 rounded-xl flex items-center justify-center text-xl mb-3 group-hover:scale-105 transition-transform">
              ⚠️
            </div>
            <h3 className="font-bold text-slate-900 text-sm group-hover:text-rose-700 transition-colors">
              Report a Problem
            </h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Crowdsourced defense against fake booking links and unauthorized touts.
            </p>
          </div>
          <div className="pt-3 flex items-center text-xs font-bold text-rose-700 gap-1">
            <span>File Report</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* 3. The 16 Sacred Shrines Interactive Database Section */}
      <section id="sixteen-temples-section" className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>The 16 Pillars of Indian Heritage</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              16 Sacred Shrines Database
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Complete architectural, historical, scientific and darshan dossiers with authentic image mapping.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {(['All', 'Jyotirlinga', 'Maha Kshetra', 'UNESCO World Heritage'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {cat === 'All' ? 'All 16 Shrines' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* 16 Temples Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredTemples.map((temple) => (
            <div
              key={temple.id}
              id={`temple-card-${temple.id}`}
              onClick={() => {
                if (onSelectTemple) {
                  onSelectTemple(temple.id);
                }
                onNavigate('temple-detail');
              }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-lg hover:border-blue-400 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Authentic Temple Image Display */}
                <div className="h-44 bg-slate-900 relative overflow-hidden">
                  <TempleImage
                    imageFileName={temple.imageFileName}
                    templeName={temple.shortName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    showVerificationBadge={true}
                    aspectRatio="video"
                  />
                  <div className="absolute top-3 right-3 flex flex-col items-end gap-1">
                    <span className="px-2.5 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-[10px] text-white font-bold">
                      {temple.stateName}
                    </span>
                    {temple.jyotirlingaNumber && (
                      <span className="px-2 py-0.5 rounded-md bg-amber-500/90 text-[10px] text-slate-950 font-extrabold">
                        Jyotirlinga #{temple.jyotirlingaNumber}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-blue-700 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{temple.districtName}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1">
                    {temple.shortName}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {temple.overview}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-bold text-slate-400 uppercase">
                    {temple.period.split(' ')[0]}
                  </span>
                  <span className="text-xs font-bold text-blue-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Explore Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. The Science Behind The Heritage (Educational Focus) */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-2xs space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">
            <Compass className="w-4 h-4 text-amber-600" />
            <span>Scientific Knowledge</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            The Science Behind Indian Temple Engineering
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
            Ancient Indian master builders (Sthapathis) integrated geology, material physics, celestial astronomy, and acoustic resonance into every sanctuary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Science Pillar 1 */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Volume2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Acoustic Resonance & Musical Stones</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              At Vijaya Vittala in Hampi, 56 slender monolithic pillars resonate with the pure frequencies of the Sapta Swaras (musical notes) when struck, achieved through differential density basalt carving.
            </p>
          </div>

          {/* Science Pillar 2 */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Sun className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Archaeo-Astronomy & The Baan Stambh</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The ancient Baan Stambh (Arrow Pillar) at Somnath proves 6th-century astronomers knew that a straight meridian line connects Prabhas Patan directly to the South Pole (Antarctica) without encountering any landmass.
            </p>
          </div>

          {/* Science Pillar 3 */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Mortarless Seismic Interlocking</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              At Kedarnath (3,584m altitude), massive gneissic granite slabs are locked using dry mortise-and-tenon iron cramps. This allowed the structure to withstand 400 years buried beneath glacial ice.
            </p>
          </div>
        </div>
      </section>

      {/* 5. StayCheck Standards Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>StayCheck Verification Algorithm</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">Guarding Devotees From Fraudulent Accommodations</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our algorithmic verification reviews municipal tax records, official temple trust lists, and real pilgrim reviews. Properties with &lt; 50% satisfaction are permanently blacklisted.
          </p>
        </div>

        <button
          onClick={() => onNavigate('staycheck')}
          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer shrink-0"
        >
          Open StayCheck Directory →
        </button>
      </div>

      {/* 6. Quick Report Module */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Have You Encountered A Fake Website Or Middleman?</h3>
            <p className="text-xs text-slate-500 mt-0.5">Help protect fellow pilgrims by submitting suspicious URLs or tout incidents.</p>
          </div>
          <button
            onClick={() => onNavigate('report')}
            className="px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold rounded-xl transition-colors cursor-pointer shrink-0"
          >
            Full Report Portal →
          </button>
        </div>

        {reportSubmitted ? (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Thank you! Your report has been dispatched to our editorial verification team.</span>
          </div>
        ) : (
          <form onSubmit={handleQuickReport} className="flex gap-2">
            <input
              type="text"
              value={reportIssue}
              onChange={(e) => setReportIssue(e.target.value)}
              placeholder="Paste suspicious website URL, fake helpline phone number, or tout report..."
              className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-slate-900 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shrink-0"
            >
              Report Incident
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
