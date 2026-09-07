import React from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { PageType } from '../types';

interface BreadcrumbNavProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onBack?: () => void;
  stateName?: string;
  districtName?: string;
  destinationName?: string;
}

export const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({
  currentPage,
  onNavigate,
  onBack,
  stateName = 'Andhra Pradesh',
  districtName = 'Tirupati District',
  destinationName = 'Tirumala Venkateswara Swamy Temple',
}) => {
  if (currentPage === 'india-map') {
    return null;
  }

  const handleBackDefault = () => {
    if (onBack) {
      onBack();
      return;
    }
    if (currentPage === 'state-selection') onNavigate('india-map');
    else if (currentPage === 'district-selection') onNavigate('state-selection');
    else if (currentPage === 'temple-selection') onNavigate('district-selection');
    else if (currentPage === 'destination-info') onNavigate('district-selection');
    else if (currentPage === 'temple-detail') onNavigate('district-selection');
    else if (currentPage === 'home') onNavigate('india-map');
    else onNavigate('home');
  };

  return (
    <div id="breadcrumb-navigation" className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-2">
      {/* Back Button */}
      <button
        id="nav-back-button"
        onClick={handleBackDefault}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 text-xs sm:text-sm font-semibold transition-all shadow-2xs cursor-pointer group"
      >
        <ArrowLeft className="w-4 h-4 text-slate-500 group-hover:-translate-x-0.5 transition-transform" />
        <span>Back</span>
      </button>

      {/* Breadcrumb Path */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 overflow-x-auto py-1">
        <button
          onClick={() => onNavigate('india-map')}
          className="hover:text-blue-700 font-medium whitespace-nowrap cursor-pointer hover:underline"
        >
          India
        </button>

        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <button
          onClick={() => onNavigate('state-selection')}
          className={`whitespace-nowrap hover:underline cursor-pointer ${
            currentPage === 'state-selection' ? 'font-bold text-blue-700' : 'hover:text-blue-700 font-medium'
          }`}
        >
          {stateName}
        </button>

        {currentPage !== 'state-selection' && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <button
              onClick={() => onNavigate('district-selection')}
              className={`whitespace-nowrap hover:underline cursor-pointer ${
                currentPage === 'district-selection' ? 'font-bold text-blue-700' : 'hover:text-blue-700 font-medium'
              }`}
            >
              {districtName}
            </button>
          </>
        )}

        {currentPage === 'destination-info' && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-bold text-blue-700 whitespace-nowrap">
              Heritage Guide
            </span>
          </>
        )}

        {(currentPage === 'temple-selection' ||
          currentPage === 'home' ||
          currentPage === 'temple-info' ||
          currentPage === 'staycheck' ||
          currentPage === 'booksafe' ||
          currentPage === 'report' ||
          currentPage === 'search-results') && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <button
              onClick={() => onNavigate('temple-selection')}
              className={`whitespace-nowrap hover:underline cursor-pointer ${
                currentPage === 'temple-selection' ? 'font-bold text-blue-700' : 'hover:text-blue-700 font-medium'
              }`}
            >
              {destinationName}
            </button>
          </>
        )}

        {currentPage === 'home' && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-bold text-slate-900 whitespace-nowrap">
              Trust Guide Home
            </span>
          </>
        )}
      </nav>
    </div>
  );
};
