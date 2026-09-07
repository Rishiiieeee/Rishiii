import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  Shirt,
  Bus,
  Train,
  Plane,
  AlertTriangle,
  ExternalLink,
  BookOpen,
  Compass,
  Building,
  Volume2,
  Sun,
  Shield,
  Layers,
  ArrowLeft,
  ChevronRight,
  Share2,
  Award,
  Info
} from 'lucide-react';
import { PageType, TempleDetail, Accommodation } from '../types';
import { TempleImage } from '../components/TempleImage';
import { getTempleById, ALL_TEMPLES } from '../data/templesData';

interface TempleDetailPageProps {
  templeId: string;
  onNavigate: (page: PageType) => void;
  onSelectAccommodation?: (acc: Accommodation) => void;
  onSelectTemple?: (templeId: string) => void;
}

type TabKey = 'overview' | 'history' | 'engineering' | 'darshan' | 'guidelines' | 'travel' | 'staycheck' | 'sources';

export const TempleDetailPage: React.FC<TempleDetailPageProps> = ({
  templeId,
  onNavigate,
  onSelectAccommodation,
  onSelectTemple,
}) => {
  const [activeTab, setActiveTab] = useState<TabKey>('overview');
  const [copiedShare, setCopiedShare] = useState(false);

  const temple: TempleDetail | undefined = getTempleById(templeId) || ALL_TEMPLES[0];

  if (!temple) {
    return (
      <div className="p-8 text-center bg-white rounded-3xl border border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Temple Not Found</h2>
        <p className="text-sm text-slate-500 mt-2">The requested temple could not be located.</p>
        <button
          onClick={() => onNavigate('india-map')}
          className="mt-4 px-5 py-2.5 bg-blue-700 text-white text-xs font-bold rounded-xl cursor-pointer"
        >
          Return to Explore India
        </button>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  const tabs: { id: TabKey; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Overview', icon: <Info className="w-4 h-4" /> },
    { id: 'history', label: 'History & Origin', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'engineering', label: 'Science & Engineering', icon: <Compass className="w-4 h-4" /> },
    { id: 'darshan', label: 'Darshan & Festivals', icon: <Clock className="w-4 h-4" /> },
    { id: 'guidelines', label: 'Rules & Dress Code', icon: <Shirt className="w-4 h-4" /> },
    { id: 'travel', label: 'How to Reach', icon: <Plane className="w-4 h-4" /> },
    { id: 'staycheck', label: 'StayCheck Accommodations', icon: <Building className="w-4 h-4" /> },
    { id: 'sources', label: 'Official Portals & Sources', icon: <ExternalLink className="w-4 h-4" /> },
  ];

  // Stay Check verification filter logic:
  // >= 75%: Verified (display with green trust badge)
  // 50-74%: Check Twice (display with amber warning badge)
  // < 50%: Do not display (automatically filtered out)
  const validAccommodations = temple.accommodations.filter(
    (acc) => acc.positiveReviewPercentage >= 50
  );

  return (
    <div id={`temple-detail-${temple.id}`} className="space-y-6 animate-in fade-in">
      {/* Top Breadcrumb Trail */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 bg-white px-4 py-2.5 rounded-xl border border-slate-200">
        <div className="flex flex-wrap items-center gap-1.5 font-medium">
          <button
            onClick={() => onNavigate('india-map')}
            className="hover:text-blue-700 cursor-pointer flex items-center gap-1"
          >
            <span>Explore India</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <button
            onClick={() => onNavigate('state-selection')}
            className="hover:text-blue-700 cursor-pointer"
          >
            {temple.stateName}
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <button
            onClick={() => onNavigate('district-selection')}
            className="hover:text-blue-700 cursor-pointer"
          >
            {temple.districtName}
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">{temple.shortName}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 text-xs font-semibold cursor-pointer transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedShare ? 'Copied Link!' : 'Share'}</span>
          </button>
          <button
            onClick={() => onNavigate('report')}
            className="inline-flex items-center gap-1 px-3 py-1 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded-lg text-xs font-semibold cursor-pointer transition-colors border border-amber-200"
          >
            <AlertTriangle className="w-3 h-3 text-amber-600" />
            <span>Report Info</span>
          </button>
        </div>
      </div>

      {/* Hero Visual Banner with Mapped Authentic Image */}
      <div className="relative rounded-3xl overflow-hidden bg-slate-950 text-white shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Column: Authentic Temple Image */}
          <div className="lg:col-span-5 h-72 sm:h-96 lg:h-auto min-h-[320px] relative bg-slate-900">
            <TempleImage
              imageFileName={temple.imageFileName}
              templeName={temple.name}
              className="w-full h-full object-cover"
              showVerificationBadge={true}
              aspectRatio="auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 lg:hidden pointer-events-none" />
          </div>

          {/* Right Column: Key Details */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-bold uppercase tracking-wider">
                  {temple.category}
                </span>
                {temple.jyotirlingaNumber && (
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Jyotirlinga #{temple.jyotirlingaNumber}
                  </span>
                )}
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Temple
                </span>
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                  {temple.name}
                </h1>
                <p className="text-amber-300/90 text-sm sm:text-base font-medium mt-1.5 italic">
                  "{temple.tagline}"
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{temple.location}</span>
              </div>

              {/* Fast Fact Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl">
                  <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Presiding Deity</div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5 line-clamp-1">{temple.deity}</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl">
                  <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Historical Era</div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5 line-clamp-1">{temple.period}</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl col-span-2 sm:col-span-1">
                  <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Architecture</div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5 line-clamp-1">{temple.engineering.architecturalStyle}</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-6 mt-4 border-t border-white/10">
              <a
                href={temple.officialBooking.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl transition-colors shadow-md shadow-amber-500/20"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Official Booking Portal</span>
              </a>
              <button
                onClick={() => setActiveTab('staycheck')}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-colors border border-white/15 cursor-pointer"
              >
                <Building className="w-3.5 h-3.5 text-blue-300" />
                <span>StayCheck ({validAccommodations.length} verified)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-2 shadow-2xs overflow-x-auto">
        <div className="flex items-center gap-1 min-w-max">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Tab Content Panels */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
        {/* 1. OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Sacred Essence & Heritage</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                About {temple.name}
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {temple.overview}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-400">
                Key Architectural & Spiritual Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {temple.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3 hover:border-blue-300 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Snapshot Summary Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-2xl border border-blue-100">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Temple Timings</span>
                <p className="text-xs font-bold text-slate-900 mt-1">{temple.info.templeTimings}</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Best Season</span>
                <p className="text-xs font-bold text-slate-900 mt-1">{temple.travel.bestSeason}</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Suggested Duration</span>
                <p className="text-xs font-bold text-slate-900 mt-1">{temple.travel.suggestedVisitDuration}</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Nearest Hub</span>
                <p className="text-xs font-bold text-slate-900 mt-1">{temple.travel.nearestRailway.name}</p>
              </div>
            </div>
          </div>
        )}

        {/* 2. HISTORY & ORIGIN TAB */}
        {activeTab === 'history' && (
          <div className="space-y-8 animate-in fade-in">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
                <BookOpen className="w-4 h-4" />
                <span>Historical Genesis & Dynastic Lineage</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Origin and Centuries of Devotion
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900">
                  Original Builder & Era
                </h3>
                <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
                  {temple.history.builder}
                </p>
                <div className="pt-2 text-xs text-amber-800">
                  <strong>Period:</strong> {temple.history.periodEra}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200/80 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900">
                  Sacred Purpose & Foundation
                </h3>
                <p className="text-xs sm:text-sm text-blue-950 leading-relaxed font-medium">
                  {temple.history.purpose}
                </p>
              </div>
            </div>

            {/* Dynastic Timeline */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-400">
                Dynastic Chronology & Patrons
              </h3>
              <div className="space-y-3">
                {temple.history.dynasticTimeline.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold text-[11px]">
                          {item.era}
                        </span>
                        <span className="font-bold text-slate-900 text-xs sm:text-sm">
                          {item.ruler}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 pl-1">
                        {item.contribution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Historical Milestones */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-400">
                Pivotal Historical Events
              </h3>
              <ul className="space-y-2.5">
                {temple.history.historicalEvents.map((event, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{event}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cultural Significance */}
            <div className="p-5 rounded-2xl bg-slate-900 text-slate-100 space-y-2">
              <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                Enduring Cultural Significance
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-200">
                {temple.history.culturalSignificance}
              </p>
            </div>
          </div>
        )}

        {/* 3. ENGINEERING & SCIENCE TAB */}
        {activeTab === 'engineering' && (
          <div className="space-y-8 animate-in fade-in">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
                <Compass className="w-4 h-4" />
                <span>The Science Behind The Stones</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Ancient Engineering & Sacred Mathematics
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                "Don’t just visit India's heritage. Understand the knowledge behind it."
              </p>
            </div>

            {/* Materials & Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Architectural Style</span>
                <p className="text-sm font-bold text-slate-900">{temple.engineering.architecturalStyle}</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Core Building Materials</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {temple.engineering.materials.map((mat, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sacred Geometry */}
            <div className="p-6 rounded-2xl bg-blue-900 text-white space-y-3">
              <div className="flex items-center gap-2 text-blue-300 text-xs font-bold uppercase tracking-wider">
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Sacred Geometry: {temple.engineering.geometry.concept}</span>
              </div>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                {temple.engineering.geometry.description}
              </p>
              {temple.engineering.geometry.mathematicalRatio && (
                <div className="pt-2 border-t border-blue-800 text-xs text-amber-300 font-mono">
                  <strong>Mathematical Alignment:</strong> {temple.engineering.geometry.mathematicalRatio}
                </div>
              )}
            </div>

            {/* Structural Innovations with Science Facts */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-400">
                Ingenious Structural Innovations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {temple.engineering.structuralInnovations.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-700 text-white text-[10px] flex items-center justify-center font-bold">
                          {idx + 1}
                        </span>
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-900 text-xs space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-emerald-800">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Scientific Truth</span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-emerald-950 font-medium">
                        {item.scienceFact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Acoustic, Astronomical & Seismic Triple Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
                <div className="flex items-center gap-1.5 text-amber-900 font-bold text-xs uppercase tracking-wider">
                  <Volume2 className="w-4 h-4 text-amber-700" />
                  <span>Acoustic Physics</span>
                </div>
                <p className="text-xs text-amber-950 leading-relaxed font-medium">
                  {temple.engineering.acousticFeatures}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2">
                <div className="flex items-center gap-1.5 text-blue-900 font-bold text-xs uppercase tracking-wider">
                  <Sun className="w-4 h-4 text-blue-700" />
                  <span>Archaeo-Astronomy</span>
                </div>
                <p className="text-xs text-blue-950 leading-relaxed font-medium">
                  {temple.engineering.astronomicalAlignment}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                <div className="flex items-center gap-1.5 text-emerald-900 font-bold text-xs uppercase tracking-wider">
                  <Shield className="w-4 h-4 text-emerald-700" />
                  <span>Seismic Resilience</span>
                </div>
                <p className="text-xs text-emerald-950 leading-relaxed font-medium">
                  {temple.engineering.seismicOrClimateResilience}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 4. DARSHAN & FESTIVALS TAB */}
        {activeTab === 'darshan' && (
          <div className="space-y-8 animate-in fade-in">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>Sacred Timing & Darshan Schedule</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Pooja Timings and Darshan Packages
              </h2>
            </div>

            {/* Timings Highlight Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Temple Gates Open</span>
                <p className="text-sm font-bold text-slate-900">{temple.info.templeTimings}</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Darshan Intervals</span>
                <p className="text-sm font-bold text-slate-900">{temple.info.darshanTimings}</p>
              </div>
            </div>

            {/* Darshan Types */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-400">
                Available Darshan Protocols
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {temple.info.darshanTypes.map((type, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-sm font-bold text-slate-900">{type.name}</h4>
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold text-xs">
                          {type.fee}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-2 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>Approx: {type.duration}</span>
                      </p>
                    </div>

                    <div className="p-2.5 bg-slate-50 rounded-xl text-[11px] text-slate-600 border border-slate-100">
                      {type.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Annual Festivals */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-400">
                Major Annual Festivals & Utsavams
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {temple.info.importantFestivals.map((fest, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-amber-50/40 border border-amber-200/70 space-y-2"
                  >
                    <div className="flex justify-between items-center gap-2">
                      <h4 className="text-sm font-bold text-amber-950">{fest.name}</h4>
                      <span className="text-xs font-semibold text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-full">
                        {fest.month}
                      </span>
                    </div>
                    <p className="text-xs text-amber-900/90 leading-relaxed">
                      {fest.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 5. GUIDELINES & DRESS CODE TAB */}
        {activeTab === 'guidelines' && (
          <div className="space-y-8 animate-in fade-in">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
                <Shirt className="w-4 h-4" />
                <span>Prescribed Decorum & Pilgrim Protocol</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Dress Code & Security Rules
              </h2>
            </div>

            {/* Dress Code Spotlight */}
            <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-300 text-slate-900 space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <Shirt className="w-5 h-5 text-amber-700" />
                <span>Mandatory Dress Code</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-950 font-medium leading-relaxed">
                {temple.info.dressCode}
              </p>
            </div>

            {/* Visitor Guidelines List */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-400">
                Visitor Rules & Advisory
              </h3>
              <div className="space-y-2.5">
                {temple.info.visitorGuidelines.map((guide, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3"
                  >
                    <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-snug">{guide}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Exact Address & Landmarks */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Official Physical Address</span>
                <p className="text-xs sm:text-sm font-bold text-slate-900 mt-1">{temple.info.exactAddress}</p>
              </div>
              <div className="pt-2 border-t border-slate-200">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Nearby Landmarks</span>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {temple.info.nearbyLandmarks.map((mark, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs text-slate-700 font-medium">
                      {mark}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 6. HOW TO REACH & TRAVEL LOGISTICS TAB */}
        {activeTab === 'travel' && (
          <div className="space-y-8 animate-in fade-in">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
                <Plane className="w-4 h-4" />
                <span>Travel Infrastructure & Logistics</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                How to Reach {temple.shortName}
              </h2>
            </div>

            {/* Airport, Railway, Road Triad */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <Plane className="w-4 h-4" />
                  <span>Nearest Airport</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">{temple.travel.nearestAirport.name}</h4>
                <p className="text-xs text-slate-500">{temple.travel.nearestAirport.distance}</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <Train className="w-4 h-4" />
                  <span>Nearest Railway</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">{temple.travel.nearestRailway.name}</h4>
                <p className="text-xs text-slate-500">{temple.travel.nearestRailway.distance}</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <Bus className="w-4 h-4" />
                  <span>Road & Local Transit</span>
                </div>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">{temple.travel.roadConnectivity}</p>
              </div>
            </div>

            {/* Season and Duration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-blue-50/50 border border-blue-100">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">Best Season to Visit</span>
                <p className="text-xs sm:text-sm font-bold text-slate-900 mt-1">{temple.travel.bestSeason}</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">Suggested Itinerary Duration</span>
                <p className="text-xs sm:text-sm font-bold text-slate-900 mt-1">{temple.travel.suggestedVisitDuration}</p>
              </div>
            </div>

            {/* Nearby Heritage Circuit */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-400">
                Connected Heritage Circuit
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {temple.travel.nearbyAttractions.map((att, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">{att.name}</h4>
                      <span className="text-[11px] font-semibold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-md">
                        {att.distance}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{att.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 7. STAY CHECK (ACCOMMODATIONS) TAB */}
        {activeTab === 'staycheck' && (
          <div className="space-y-8 animate-in fade-in">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>StayCheck Verification System</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Verified Pilgrim Accommodations
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Every property undergoes verification against official temple trust databases, municipal licenses, and authentic pilgrim feedback.
              </p>
            </div>

            {/* Verification Rules Explanation Banner */}
            <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Roots of India StayCheck Verification Standards</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-bold text-emerald-400 block">≥ 75% Positive Reviews</span>
                  <span className="text-slate-300 text-[11px]">Badge: <strong className="text-emerald-300">Verified</strong>. Full trust, transparent pricing, verified management.</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-bold text-amber-400 block">50% - 74% Positive Reviews</span>
                  <span className="text-slate-300 text-[11px]">Badge: <strong className="text-amber-300">Check Twice</strong>. Moderate feedback, verify peak festival tariffs.</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-bold text-rose-400 block">&lt; 50% Positive Reviews</span>
                  <span className="text-slate-300 text-[11px]">Excluded: Automatically removed from our directory to safeguard pilgrims.</span>
                </div>
              </div>
            </div>

            {/* Accommodation Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {validAccommodations.map((acc) => {
                const isVerified = acc.positiveReviewPercentage >= 75;
                return (
                  <div
                    key={acc.id}
                    id={`stay-detail-${acc.id}`}
                    className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <h4 className="text-base font-bold text-slate-900">{acc.name}</h4>
                          <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            <span>{acc.distance}</span>
                          </p>
                        </div>
                        {isVerified ? (
                          <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            Verified ({acc.positiveReviewPercentage}%)
                          </span>
                        ) : (
                          <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-bold flex items-center gap-1">
                            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                            Check Twice ({acc.positiveReviewPercentage}%)
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">{acc.reviewSummary}</p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {acc.facilities.map((fac, idx) => (
                          <span key={idx} className="px-2.5 py-0.5 bg-slate-100 rounded-md text-[11px] font-medium text-slate-700">
                            {fac}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-bold block">Estimated Tariff</span>
                        <span className="text-sm font-bold text-blue-700">{acc.priceRange}</span>
                      </div>
                      <button
                        onClick={() => {
                          if (onSelectAccommodation) {
                            onSelectAccommodation({
                              id: acc.id,
                              name: acc.name,
                              location: `${temple.shortName} (${acc.distance})`,
                              price: 1500,
                              priceUnit: '/night',
                              status: isVerified ? 'Verified' : 'Needs Check',
                              category: 'Hotels',
                              image: '/TIR.jpeg',
                              rating: acc.rating,
                              description: acc.reviewSummary,
                              verifiedFeatures: acc.facilities,
                              positiveReviewPercentage: acc.positiveReviewPercentage,
                            });
                          }
                        }}
                        className="px-4 py-2 bg-slate-900 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                      >
                        Inspect Details
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 8. SOURCES & OFFICIAL PORTALS TAB */}
        {activeTab === 'sources' && (
          <div className="space-y-8 animate-in fade-in">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
                <ExternalLink className="w-4 h-4" />
                <span>Verified Authority & Research Sources</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Official Portals & Scholarly References
              </h2>
            </div>

            {/* Official Booking Portal Spotlight */}
            <div className="p-6 rounded-3xl bg-blue-50 border border-blue-200 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-200 text-blue-900 text-[10px] font-bold uppercase tracking-wider">
                    Official Government / Devasthanam Portal
                  </span>
                  <h3 className="text-lg font-bold text-blue-950 mt-1">
                    {temple.officialBooking.portalName}
                  </h3>
                </div>
                <a
                  href={temple.officialBooking.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold rounded-xl transition-colors shrink-0"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Official Portal</span>
                </a>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-blue-200/80">
                <span className="text-[11px] font-bold text-blue-900">Services Provided Directly:</span>
                <div className="flex flex-wrap gap-2">
                  {temple.officialBooking.servicesAvailable.map((srv, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-white rounded-lg text-xs font-medium text-blue-900 border border-blue-200">
                      ✓ {srv}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Security Advisory:</strong> {temple.officialBooking.disclaimer}</span>
              </div>
            </div>

            {/* Academic & Archaeological Authorities */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-400">
                Peer-Reviewed & Archaeological Sources
              </h3>
              <div className="space-y-2.5">
                {temple.sources.map((src, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="space-y-0.5">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">{src.title}</h4>
                      <p className="text-xs text-slate-500 font-medium">Authority: {src.authority}</p>
                    </div>
                    <span className="text-[11px] text-blue-700 font-bold bg-blue-50 px-2.5 py-1 rounded-md shrink-0">
                      Verified Citation
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Explore Other Temples Carousel/Grid */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">Explore Other Sacred Sites</h3>
            <p className="text-xs text-slate-500">Discover more temples in {temple.stateName} and across India</p>
          </div>
          <button
            onClick={() => onNavigate('india-map')}
            className="text-xs font-bold text-blue-700 hover:underline cursor-pointer"
          >
            View All 16 Temples →
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
          {ALL_TEMPLES.filter((t) => t.id !== temple.id)
            .slice(0, 4)
            .map((other) => (
              <button
                key={other.id}
                onClick={() => {
                  if (onSelectTemple) {
                    onSelectTemple(other.id);
                  }
                }}
                className="text-left rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-400 hover:shadow-md transition-all group cursor-pointer bg-slate-50"
              >
                <div className="h-28 bg-slate-800 overflow-hidden relative">
                  <TempleImage
                    imageFileName={other.imageFileName}
                    templeName={other.shortName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    aspectRatio="video"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-[10px] text-white font-bold">
                      {other.stateName}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1">
                    {other.shortName}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{other.deity}</p>
                </div>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};
