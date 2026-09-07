import React from 'react';
import { ShieldCheck, Users, Smile, ExternalLink, Phone } from 'lucide-react';
import { PageType } from '../types';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="site-footer" className="mt-auto bg-white border-t border-slate-200">
      {/* 4 Core Trust Indicators - Clean Utility Row */}
      <div className="bg-slate-50/70 border-b border-slate-100 py-3.5 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-700 font-medium">
            <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600">Trusted Information</span>
          </div>

          <div className="flex items-center gap-2 text-slate-700 font-medium">
            <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Users className="w-3.5 h-3.5" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600">Safer Travel</span>
          </div>

          <div className="flex items-center gap-2 text-slate-700 font-medium">
            <span className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
              <Smile className="w-3.5 h-3.5" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600">Better Experience</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span>TTD Toll-Free: 1800 425 4141</span>
          </div>
        </div>
      </div>

      {/* Clean Utility Minimal Footer Bar from Design HTML */}
      <div className="h-12 bg-white/90 backdrop-blur px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-400 font-bold uppercase tracking-widest gap-2">
        <div className="truncate">
          The Roots Of India • Verified Heritage & Pilgrimage Guide
        </div>
        <div className="flex items-center gap-6">
          <button
            onClick={() => onNavigate('booksafe')}
            className="hover:text-blue-700 transition-colors cursor-pointer"
          >
            Official Sources
          </button>
          <button
            onClick={() => onNavigate('report')}
            className="hover:text-rose-600 transition-colors cursor-pointer"
          >
            Report Fraud
          </button>
          <span>Student Demo</span>
        </div>
      </div>
    </footer>
  );
};
