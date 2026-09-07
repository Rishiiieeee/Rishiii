import React from 'react';
import { Sparkles, MapPin, X, ArrowRight } from 'lucide-react';
import { PageType } from '../types';

interface ComingSoonModalProps {
  regionName: string | null;
  onClose: () => void;
  onNavigate: (page: PageType) => void;
}

export const ComingSoonModal: React.FC<ComingSoonModalProps> = ({
  regionName,
  onClose,
  onNavigate,
}) => {
  if (!regionName) return null;

  return (
    <div
      id="coming-soon-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="coming-soon-card"
        className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative text-center space-y-5 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100 shadow-inner">
          <Sparkles className="w-7 h-7 text-blue-700" />
        </div>

        <div className="space-y-2">
          <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
            Prototype Preview
          </span>
          <h3 className="text-xl font-bold text-slate-900">
            {regionName}
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Coming soon in the full version! We are currently curating verified temple databases, official quotas, and StayCheck records for {regionName}.
          </p>
        </div>

        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-left text-xs space-y-1.5 text-slate-600">
          <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
            <MapPin className="w-3.5 h-3.5 text-blue-700" />
            <span>Fully Working Prototype:</span>
          </div>
          <p className="text-[11px] text-slate-500 pl-5">
            India → Andhra Pradesh → Tirupati District → Tirumala Venkateswara Swamy Temple
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <button
            onClick={() => {
              onClose();
              onNavigate('state-selection');
            }}
            className="flex-1 py-2.5 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 shadow-md shadow-blue-700/10 transition-all cursor-pointer"
          >
            <span>Explore Andhra Pradesh</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
