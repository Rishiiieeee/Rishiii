import React from 'react';
import {
  ExternalLink,
  ShieldCheck,
  Calendar,
  Sparkles,
  ArrowRight,
  Info,
  CheckCircle2,
  Clock,
  Compass,
  Building2,
  Check
} from 'lucide-react';
import { PageType } from '../types';
import { BreadcrumbNav } from '../components/BreadcrumbNav';

interface TempleSelectionPageProps {
  onNavigate: (page: PageType) => void;
}

export const TempleSelectionPage: React.FC<TempleSelectionPageProps> = ({
  onNavigate,
}) => {
  return (
    <div id="temple-selection-page" className="max-w-7xl mx-auto space-y-6 animate-in fade-in duration-300">
      {/* Breadcrumb Navigation matching Screen 4 */}
      <BreadcrumbNav
        currentPage="temple-selection"
        onNavigate={onNavigate}
        onBack={() => onNavigate('district-selection')}
      />

      {/* Title & Verified Badge */}
      <div className="space-y-1">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tirumala Venkateswara Swamy Temple
          </h1>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified</span>
          </span>
        </div>
        <p className="text-slate-500 text-sm sm:text-base">
          Tirumala, Tirupati District, Andhra Pradesh
        </p>
      </div>

      {/* Two-Column Layout matching Screen 4 in reference image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Temple Image, Overview, and Notice Container */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-2xs space-y-6">
          {/* Main Temple Gallery / Hero Image */}
          <div className="relative w-full aspect-16/9 sm:aspect-21/9 rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-900">
            <img
              src="/TIR.jpeg"
              alt="Tirumala Venkateswara Swamy Temple"
              className="w-full h-full object-cover brightness-95"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4 sm:p-6">
              <div className="text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest bg-blue-600/90 backdrop-blur-xs px-2.5 py-1 rounded-md mb-1 inline-block">
                  Srivari Sannidhi
                </span>
                <p className="text-xs sm:text-sm text-slate-200">
                  The sacred Ananda Nilayam Vimana on the Seven Hills
                </p>
              </div>
            </div>
          </div>

          {/* Temple Overview Paragraph matching reference image #4 */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-slate-900">
              Temple Overview
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Tirumala Venkateswara Swamy Temple is one of the most revered temples in the world, attracting millions of devotees every year. The temple is dedicated to Lord Venkateswara, an incarnation of Lord Vishnu, and is managed by TTD (Tirumala Tirupati Devasthanams).
            </p>
          </div>

          {/* Blue Info Notice Container matching Screen 4 */}
          <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100 flex items-start gap-3 text-sky-900 text-xs sm:text-sm">
            <Info className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <div className="font-bold text-blue-900">
                Official Verification Notice
              </div>
              <div className="text-xs text-slate-600">
                All information is verified from official TTD bulletins or official Andhra Pradesh government sources.
              </div>
            </div>
          </div>

          {/* Action CTA: Proceed to Home */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
            <div className="text-xs text-slate-500">
              Proceed to browse the live darshan wait times, verified cottages, and safe booking portals.
            </div>
            <button
              id="proceed-to-guide-home-btn"
              onClick={() => onNavigate('home')}
              className="w-full sm:w-auto px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-700/20 transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Proceed to The Roots Of India Guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Column: Quick Info Card matching Screen 4 */}
        <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200 p-6 shadow-2xs space-y-6">
          <h3 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
            Quick Info
          </h3>

          <div className="space-y-4">
            {/* Deity */}
            <div className="flex items-start gap-3 text-xs">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Deity
                </span>
                <span className="font-bold text-slate-900 text-sm">
                  Sri Venkateswara Swamy
                </span>
              </div>
            </div>

            {/* Main Festival */}
            <div className="flex items-start gap-3 text-xs">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Main Festival
                </span>
                <span className="font-bold text-slate-900 text-sm">
                  Srivari Brahmotsavam
                </span>
                <span className="block text-[11px] text-slate-500 mt-0.5">
                  Annual 9-day grand celebrations
                </span>
              </div>
            </div>

            {/* Best Time to Visit */}
            <div className="flex items-start gap-3 text-xs">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Best Time to Visit
                </span>
                <span className="font-bold text-slate-900 text-sm">
                  Oct — Feb
                </span>
                <span className="block text-[11px] text-slate-500 mt-0.5">
                  Pleasant weather on Seven Hills
                </span>
              </div>
            </div>

            {/* Official Website */}
            <div className="flex items-start gap-3 text-xs">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Official Website
                </span>
                <a
                  href="https://ttd.tirumala.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-700 hover:underline inline-flex items-center gap-1 text-xs break-all mt-0.5"
                >
                  <span>https://ttd.tirumala.gov.in</span>
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Access to Main Guide */}
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <button
              onClick={() => onNavigate('home')}
              className="w-full py-2.5 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 shadow-md shadow-blue-700/10 transition-all cursor-pointer"
            >
              <span>Explore The Roots Of India Guide</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('district-selection')}
              className="w-full py-2 px-3 text-slate-500 hover:text-slate-800 text-xs font-semibold text-center cursor-pointer hover:bg-slate-50 rounded-lg transition-colors"
            >
              ← Choose another temple in Tirupati
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
