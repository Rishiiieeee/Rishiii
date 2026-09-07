import React, { useState } from 'react';
import {
  ShieldCheck,
  MapPin,
  Calendar,
  Clock,
  ExternalLink,
  ChevronRight,
  ArrowRight,
  Info,
  Sparkles,
  Award,
  Landmark,
  Share2,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Camera,
  Car,
  Plane,
  Train,
  Check,
  Compass
} from 'lucide-react';
import { PageType } from '../types';
import { BreadcrumbNav } from '../components/BreadcrumbNav';
import { HERITAGE_DESTINATIONS, HeritageDestination, HeritageAttraction } from '../data/destinationsData';

interface DestinationInfoPageProps {
  destinationId: string;
  onNavigate: (page: PageType) => void;
  onSelectTemple: (templeId: string) => void;
}

export const DestinationInfoPage: React.FC<DestinationInfoPageProps> = ({
  destinationId,
  onNavigate,
}) => {
  const destination: HeritageDestination =
    HERITAGE_DESTINATIONS[destinationId] || HERITAGE_DESTINATIONS['lepakshi'];

  const [activeTab, setActiveTab] = useState<'overview' | 'history' | 'architecture' | 'attractions' | 'visitor-info' | 'connectivity'>('overview');
  const [selectedAttraction, setSelectedAttraction] = useState<HeritageAttraction | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div id="destination-info-page" className="max-w-7xl mx-auto space-y-6 animate-in fade-in duration-300">
      {/* Breadcrumb Navigation */}
      <BreadcrumbNav
        currentPage="destination-info"
        onNavigate={onNavigate}
        onBack={() => onNavigate('district-selection')}
      />

      {/* Top Heritage Destination Hero Card */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs">
        {/* Banner with visual overlay */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full bg-slate-900 overflow-hidden">
          <img
            src={destination.bannerImage}
            alt={destination.name}
            className="w-full h-full object-cover opacity-85"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />

          {/* Top badges */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-xs font-bold text-slate-800 shadow-sm">
              <Landmark className="w-3.5 h-3.5 text-blue-700" />
              <span>{destination.statusTag}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-600/95 backdrop-blur-md rounded-full text-xs font-bold text-white shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Heritage Guide</span>
            </span>
          </div>

          {/* Action buttons on top right */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-white/90 hover:bg-white text-slate-700 shadow-sm backdrop-blur-md transition-all cursor-pointer text-xs font-semibold flex items-center gap-1.5"
              title="Share destination"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{copiedLink ? 'Copied' : 'Share'}</span>
            </button>
          </div>

          {/* Destination Header Title on Bottom */}
          <div className="absolute bottom-6 left-4 right-4 sm:left-8 sm:right-8 text-white space-y-2">
            <div className="flex items-center gap-2 text-blue-300 text-xs font-semibold">
              <MapPin className="w-4 h-4 shrink-0 text-blue-400" />
              <span>{destination.districtName}, {destination.stateName}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {destination.name}
            </h1>
            <p className="text-slate-200 text-xs sm:text-base max-w-3xl line-clamp-2 sm:line-clamp-none">
              {destination.subtitle}
            </p>
          </div>
        </div>

        {/* Quick Facts Strip matching Clean Utility / Minimal design */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 sm:px-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div className="space-y-0.5">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Heritage Era</span>
            <p className="font-bold text-slate-800">{destination.heritageEra}</p>
          </div>
          <div className="space-y-0.5">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Architecture</span>
            <p className="font-bold text-slate-800 truncate" title={destination.architecturalStyle}>
              {destination.architecturalStyle}
            </p>
          </div>
          <div className="space-y-0.5">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Timings</span>
            <p className="font-bold text-slate-800">{destination.timings}</p>
          </div>
          <div className="space-y-0.5">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Entry Fee</span>
            <p className="font-bold text-emerald-700">{destination.entryFee}</p>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs matching reference style */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 border-b border-slate-200">
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'history', label: 'History & Legends' },
          { id: 'architecture', label: 'Architecture & Wonders' },
          { id: 'attractions', label: 'Important Attractions' },
          { id: 'visitor-info', label: 'Visitor Information' },
          { id: 'connectivity', label: 'Location & Connectivity' },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Main overview card & Side highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                  Heritage Profile
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  About {destination.name}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2">
                  {destination.overview}
                </p>
              </div>

              {/* Heritage Highlights Cards Grid */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-400">
                  Key Heritage Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {destination.heritageHighlights.map((hl, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors space-y-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{hl.icon}</span>
                        <h4 className="font-bold text-xs sm:text-sm text-slate-900">{hl.title}</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{hl.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cultural quick notice */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-amber-900">Cultural Living Sanctum</span>
                  <p className="text-amber-800 leading-relaxed">
                    {destination.culturalSignificance.spiritualBelief}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Quick Actions & Visit Essentials */}
            <div className="lg:col-span-4 space-y-6">
              {/* Quick Visit Card */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-2xs space-y-5">
                <h3 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100 flex items-center justify-between">
                  <span>Visit Essentials</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </h3>

                <div className="space-y-3.5 text-xs">
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Visiting Hours</span>
                      <span className="font-bold text-slate-800">{destination.timings}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Best Season</span>
                      <span className="font-bold text-slate-800">{destination.bestTimeToVisit}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Dynasty / Era</span>
                      <span className="font-bold text-slate-800">{destination.dynasty}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Location</span>
                      <span className="font-bold text-slate-800">{destination.locationConnectivity.address}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <button
                    onClick={() => setActiveTab('visitor-info')}
                    className="w-full py-2.5 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-blue-700/10 transition-all cursor-pointer"
                  >
                    <span>View Visitor Guidelines</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onNavigate('district-selection')}
                    className="w-full py-2 px-3 text-slate-500 hover:text-slate-800 text-xs font-semibold text-center cursor-pointer hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    ← Back to {destination.districtName}
                  </button>
                </div>
              </div>

              {/* Safe Travel Verified Tips Card */}
              <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 space-y-3 text-xs">
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified Travel Guidance</span>
                </h4>
                <ul className="space-y-2 text-slate-600">
                  {destination.safeTravelTips.slice(0, 3).map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: HISTORY & LEGENDS */}
      {activeTab === 'history' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                Chronicles & Epic Lore
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {destination.history.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {destination.history.summary}
              </p>
            </div>

            {/* Legend Highlight Box */}
            <div className="p-5 rounded-2xl bg-blue-50/80 border border-blue-200 space-y-2">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-blue-700" />
                <span>Sacred Epic Legend</span>
              </div>
              <p className="text-xs sm:text-sm text-blue-950 leading-relaxed italic">
                "{destination.history.legend}"
              </p>
            </div>

            {/* Structured Historical Timeline Cards */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-base font-bold text-slate-900">Historical Timeline</h3>
              <div className="space-y-3">
                {destination.history.timelinePoints.map((point, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center gap-3 justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-lg bg-blue-700 text-white font-bold text-xs shrink-0">
                        {point.era}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                        {point.event}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: ARCHITECTURE & WONDERS */}
      {activeTab === 'architecture' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                Architectural Marvels
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {destination.architecture.title}
              </h2>
              <p className="text-sm font-semibold text-blue-700">
                Style: {destination.architecture.styleName}
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {destination.architecture.summary}
              </p>
            </div>

            {/* Architecture key features grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
              {destination.architecture.keyFeatures.map((feat, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-3 hover:border-blue-400 transition-all shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold uppercase tracking-wider">
                      {feat.highlightBadge}
                    </span>
                    <Landmark className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: IMPORTANT ATTRACTIONS */}
      {activeTab === 'attractions' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Attractions at {destination.name}
              </h2>
              <p className="text-slate-500 text-sm">
                Explore the key monuments, sanctums, and monolithic sculptures within this destination.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {destination.importantAttractions.map((attraction) => (
                <div
                  key={attraction.id}
                  className="rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-all bg-white flex flex-col"
                >
                  <div className="relative h-48 w-full bg-slate-100">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {attraction.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-white/95 text-slate-800 text-[10px] font-bold shadow-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <h3 className="font-bold text-base text-slate-900">{attraction.name}</h3>
                      <p className="text-xs text-blue-700 font-semibold">{attraction.significance}</p>
                      <p className="text-xs text-slate-600 leading-relaxed">{attraction.description}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{attraction.timing}</span>
                      </span>
                      <span className="font-bold text-slate-700">{attraction.entryFee}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: VISITOR INFORMATION */}
      {activeTab === 'visitor-info' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Visitor Rules & Practical Guidelines
              </h2>
              <p className="text-slate-500 text-sm">
                Essential regulations, clothing requirements, and ritual schedules for devotees and travelers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Timings & Operating Hours</span>
                <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                  {destination.visitorInformation.generalTimings}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Special Rituals & Aarti</span>
                <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                  {destination.visitorInformation.specialRituals}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Dress Code Rules</span>
                <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                  {destination.visitorInformation.dressCode}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Photography & Electronic Gadgets</span>
                <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                  {destination.visitorInformation.photographyRules}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Footwear Storage</span>
                <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                  {destination.visitorInformation.footwearRule}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Verified Tour Guides</span>
                <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                  {destination.visitorInformation.guideAvailability}
                </p>
              </div>
            </div>

            {/* Festivals Card */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h3 className="text-base font-bold text-slate-900">Annual Sacred Festivals</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.culturalSignificance.festivals.map((fest, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-blue-950">{fest.name}</h4>
                      <span className="px-2 py-0.5 rounded bg-blue-200 text-blue-900 text-[10px] font-bold">
                        {fest.period}
                      </span>
                    </div>
                    <p className="text-xs text-blue-900 leading-relaxed">{fest.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: LOCATION & CONNECTIVITY */}
      {activeTab === 'connectivity' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                How to Reach {destination.name}
              </h2>
              <p className="text-slate-500 text-sm">
                Connectivity options by air, rail, and road with nearby excursion spots.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Plane className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900">By Air</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {destination.locationConnectivity.byAir}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Train className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900">By Rail</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {destination.locationConnectivity.byRail}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Car className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900">By Road</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {destination.locationConnectivity.byRoad}
                </p>
              </div>
            </div>

            {/* Nearby Excursions */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h3 className="text-base font-bold text-slate-900">Nearby Heritage Excursions</h3>
              <div className="flex flex-wrap gap-2">
                {destination.locationConnectivity.nearbyExcursions.map((spot, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200"
                  >
                    📍 {spot}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
