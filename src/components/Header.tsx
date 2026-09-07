import React, { useState } from 'react';
import { Search, Menu, X, ShieldAlert } from 'lucide-react';
import { PageType } from '../types';
import { TempleLogo } from './TempleLogo';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onSearch: (query: string) => void;
  currentSearchQuery: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onSearch,
  currentSearchQuery
}) => {
  const [searchInput, setSearchInput] = useState(currentSearchQuery);
  const [selectedLanguage, setSelectedLanguage] = useState<'EN' | 'TE' | 'HI'>('EN');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput.trim());
    } else {
      onSearch('Darshan timings');
    }
  };

  const navLinks: { id: PageType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'india-map', label: 'Explore India' },
    { id: 'staycheck', label: 'StayCheck' },
    { id: 'booksafe', label: 'BookSafe' },
    { id: 'report', label: 'Report a Problem' },
  ];

  const isHierarchyPage =
    currentPage === 'india-map' ||
    currentPage === 'state-selection' ||
    currentPage === 'district-selection' ||
    currentPage === 'temple-selection' ||
    currentPage === 'destination-info' ||
    currentPage === 'temple-detail';

  return (
    <header
      id="top-utility-bar"
      className="h-16 bg-white border-b border-slate-200 flex items-center px-4 sm:px-6 lg:px-8 justify-between z-30 sticky top-0 shrink-0"
    >
      {/* Brand Logo & Navigation */}
      <div className="flex items-center gap-4 lg:gap-8">
        <button
          id="mobile-nav-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer lg:hidden"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <TempleLogo onClick={() => onNavigate('home')} />

        {/* Desktop Horizontal Navigation Links matching reference image */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                id={`top-nav-${link.id}`}
                onClick={() => onNavigate(link.id)}
                className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'text-blue-700 bg-blue-50 font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Right Side: Map Switcher, Search Input, and Language */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Switch to India Map quick link */}
        <button
          onClick={() => onNavigate('india-map')}
          title="Change location / Explore India Map"
          className={`hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
            isHierarchyPage
              ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
          }`}
        >
          <span>🇮🇳</span>
          <span>Explore Map</span>
        </button>

        {/* Clean Utility Search Input Pill */}
        <div className="w-44 sm:w-56 md:w-64 lg:w-72 relative">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none">
              <Search className="w-3.5 h-3.5 text-slate-400" />
            </span>
            <input
              id="utility-search-input"
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search..."
              className="w-full pl-8 pr-3 py-1.5 bg-slate-100 border border-transparent rounded-full text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-slate-200 transition-all"
            />
          </form>
        </div>

        {/* Language Switcher */}
        <div className="hidden md:flex items-center gap-1 text-xs font-semibold">
          <button
            id="lang-btn-en"
            onClick={() => setSelectedLanguage('EN')}
            className={`px-2 py-0.5 rounded text-xs transition-colors cursor-pointer ${
              selectedLanguage === 'EN'
                ? 'text-blue-700 bg-blue-50 font-bold border border-blue-200/60'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            EN
          </button>
          <button
            id="lang-btn-te"
            onClick={() => setSelectedLanguage('TE')}
            className={`px-2 py-0.5 rounded text-xs transition-colors cursor-pointer ${
              selectedLanguage === 'TE'
                ? 'text-blue-700 bg-blue-50 font-bold border border-blue-200/60'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            TE
          </button>
          <button
            id="lang-btn-hi"
            onClick={() => setSelectedLanguage('HI')}
            className={`px-2 py-0.5 rounded text-xs transition-colors cursor-pointer ${
              selectedLanguage === 'HI'
                ? 'text-blue-700 bg-blue-50 font-bold border border-blue-200/60'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            HI
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden absolute top-16 left-0 right-0 border-b border-slate-200 bg-white px-4 py-4 space-y-2 shadow-xl z-50 animate-in fade-in duration-150"
        >
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
            Navigation
          </div>
          <div className="grid grid-cols-1 gap-1">
            <button
              onClick={() => {
                onNavigate('india-map');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                isHierarchyPage
                  ? 'bg-blue-50 text-blue-700 font-bold border-l-4 border-blue-700'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>🇮🇳 Explore India Map</span>
              {isHierarchyPage && <span className="w-1.5 h-1.5 rounded-full bg-blue-700" />}
            </button>

            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-bold border-l-4 border-blue-700'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-700" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="text-slate-400 text-[10px] uppercase font-bold">Language:</span>
              <button
                onClick={() => setSelectedLanguage('EN')}
                className={`px-2 py-0.5 rounded text-xs ${selectedLanguage === 'EN' ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600'}`}
              >
                EN
              </button>
              <button
                onClick={() => setSelectedLanguage('TE')}
                className={`px-2 py-0.5 rounded text-xs ${selectedLanguage === 'TE' ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600'}`}
              >
                TE
              </button>
              <button
                onClick={() => setSelectedLanguage('HI')}
                className={`px-2 py-0.5 rounded text-xs ${selectedLanguage === 'HI' ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600'}`}
              >
                HI
              </button>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Online</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
