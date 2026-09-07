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
  AlertCircle,
  Footprints
} from 'lucide-react';
import { PageType } from '../types';
import { StatusBadge } from '../components/StatusBadge';
import { DARSHAN_TYPES } from '../data/mockData';

interface TempleInfoPageProps {
  onNavigate: (page: PageType) => void;
}

type TabType = 'overview' | 'darshan' | 'timings' | 'guidelines' | 'dresscode' | 'reach';

export const TempleInfoPage: React.FC<TempleInfoPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const navTabs: { id: TabType; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'darshan', label: 'Darshan Types' },
    { id: 'timings', label: 'Timings' },
    { id: 'guidelines', label: 'Guidelines' },
    { id: 'dresscode', label: 'Dress Code' },
    { id: 'reach', label: 'How to Reach' },
  ];

  return (
    <div id="temple-info-page" className="space-y-6 animate-in fade-in">
      {/* 1. Header Banner matching Clean Utility Theme */}
      <div
        id="temple-hero-banner"
        className="bg-blue-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl shadow-blue-950/10"
      >
        <div className="relative z-10 max-w-xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-800/80 border border-blue-600/50 text-blue-200 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
            <span>Official TTD Guidelines</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Temple Information
          </h1>
          <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
            Essential facts, darshan types, timings, and rules for Sri Venkateswara Swamy Temple.
          </p>
        </div>
      </div>

      {/* 2. Main Two-Column Layout from Design HTML */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Left Aside Navigation from Design HTML */}
        <aside className="w-full md:w-56 shrink-0 bg-white rounded-2xl border border-slate-200 p-3 space-y-1 shadow-2xs">
          <div className="px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Navigation
          </div>
          {navTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`temple-nav-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 font-bold border-l-4 border-blue-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </aside>

        {/* Right Content Area: Clean Utility White Card with rounded-3xl */}
        <div className="flex-1 min-w-0 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-8">
          {/* Temple Title & Verified Badge matching Design HTML */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Sri Venkateswara Swamy
              </h2>
              <StatusBadge status="Verified" />
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <MapPin className="w-3.5 h-3.5 text-blue-700" />
              <span>Tirumala Hills, Tirupati District, Andhra Pradesh</span>
            </div>
          </div>

          {/* Clean Blue Info Callout from Design HTML */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 text-xs sm:text-sm text-blue-800 leading-relaxed rounded-r-xl">
            <strong>Verified Source:</strong> All schedules, quota releases, and entry guidelines are cross-referenced directly from the Tirumala Tirupati Devasthanams (TTD) official bulletin.
          </div>

          {/* Tab 1: Overview */}
          {(activeTab === 'overview' || activeTab === 'darshan') && (
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900">Darshan Types</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  TTD offers multiple darshan channels structured according to queue capacity and advance quota booking.
                </p>

                {/* 2-Column Darshan Cards matching Design HTML */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  {DARSHAN_TYPES.map((darshan) => (
                    <div
                      key={darshan.id}
                      className="p-5 border border-slate-200 rounded-2xl bg-white hover:border-blue-300 transition-all shadow-2xs space-y-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-bold text-slate-900 text-sm">{darshan.title}</h4>
                        <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60 uppercase tracking-widest">
                          {darshan.ticketPrice || 'Free'}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{darshan.description}</p>
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                        <span>Wait Time: <strong className="text-slate-800">{darshan.waitDuration || 'Varies'}</strong></span>
                        <span className="text-blue-700 font-bold uppercase tracking-wider text-[10px]">
                          {darshan.bookingMethod || 'Official Entry'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Timings Tab */}
          {(activeTab === 'overview' || activeTab === 'timings') && (
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-base font-bold text-slate-900">Temple Open & Close Timings</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">
                    Morning Darshan & Suprabhata Seva
                  </span>
                  <div className="font-bold text-slate-900 text-base">3:00 AM — 11:00 AM</div>
                  <div className="text-slate-500 text-xs mt-1">Suprabhatam begins at 3:00 AM. Free queue opens right after.</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">
                    Evening Darshan & Ekantha Seva
                  </span>
                  <div className="font-bold text-slate-900 text-base">4:00 PM — 1:00 AM</div>
                  <div className="text-slate-500 text-xs mt-1">Temple sanctum concludes with Ekantha Seva at midnight.</div>
                </div>
              </div>
            </div>
          )}

          {/* Dress Code Guidelines - matching Amber Box from Design HTML */}
          {(activeTab === 'overview' || activeTab === 'dresscode' || activeTab === 'guidelines') && (
            <div className="bg-amber-50 border border-amber-200/80 p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-2">
                <Shirt className="w-5 h-5 text-amber-800" />
                <h4 className="font-bold text-amber-950 text-sm">Dress Code Guidelines</h4>
              </div>
              <p className="text-xs text-amber-900 leading-relaxed">
                Traditional Indian dress is strictly mandatory for all devotees entering the Vaikuntam Queue Complex.
              </p>
              <ul className="text-xs sm:text-sm text-amber-900 space-y-2 list-disc ml-5 font-medium">
                <li><strong>Men:</strong> Dhoti with Uttariyam, or traditional Kurta-Pyjama. Lungis, jeans, shorts, and T-shirts are prohibited.</li>
                <li><strong>Women:</strong> Saree, Half-Saree, or Chudidar/Salwar with Dupatta. Western wear like pants, skirts, or leggings is strictly prohibited.</li>
                <li>Devotees in non-prescribed attire will be redirected at queue verification gates.</li>
              </ul>
            </div>
          )}

          {/* How to Reach Guidelines */}
          {(activeTab === 'overview' || activeTab === 'reach') && (
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-base font-bold text-slate-900">How to Reach Tirumala from Tirupati</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <Bus className="w-5 h-5 text-blue-700 mb-2" />
                  <h5 className="font-bold text-slate-900 mb-1">APSRTC Electric Buses</h5>
                  <p className="text-slate-600">Continuous 24x7 service from Tirupati Central Bus Station and Railway Station up the Ghat Road (approx. 50 mins).</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <Footprints className="w-5 h-5 text-emerald-600 mb-2" />
                  <h5 className="font-bold text-slate-900 mb-1">Trekking Footpaths</h5>
                  <p className="text-slate-600">Alipiri Mettu (3,550 steps, open 24/7) and Srivari Mettu (2,388 steps, open 6:00 AM to 6:00 PM).</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <Train className="w-5 h-5 text-indigo-600 mb-2" />
                  <h5 className="font-bold text-slate-900 mb-1">Railway & Airport</h5>
                  <p className="text-slate-600">Tirupati Main (TPTY) & Renigunta (RU) connect pan-India. Tirupati Airport (TIR) has direct flights to major metros.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
