import React from 'react';
import { PageType } from '../types';
import { TempleLogo } from './TempleLogo';

interface SidebarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentPage, onNavigate }) => {
  const navItems: { id: PageType; label: string; icon: string }[] = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'temple-info', label: 'Temple Info', icon: '🛕' },
    { id: 'staycheck', label: 'StayCheck', icon: '🏨' },
    { id: 'booksafe', label: 'BookSafe', icon: '🛡️' },
    { id: 'report', label: 'Report Problem', icon: '⚠️' },
  ];

  return (
    <aside
      id="app-sidebar"
      className="hidden md:flex w-64 bg-white border-r border-slate-200 flex-col shrink-0 select-none z-30 sticky top-0 h-screen overflow-y-auto"
    >
      {/* Brand Header */}
      <div className="p-6 border-b border-slate-100">
        <TempleLogo onClick={() => onNavigate('home')} />
      </div>

      {/* Navigation links */}
      <nav className="flex-1 py-4 space-y-0.5">
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              id={`sidebar-link-${item.id}`}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center px-6 py-3.5 text-sm font-medium transition-colors cursor-pointer text-left ${
                isActive
                  ? 'text-blue-700 bg-blue-50 border-r-4 border-blue-700 font-semibold'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className="mr-3 text-base">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Status Updates Footer in Sidebar */}
      <div className="p-6 border-t border-slate-100 bg-slate-50">
        <div className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest">
          Status Updates
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Systems Online</span>
        </div>
        <div className="text-[10px] text-slate-400 mt-1">
          TTD API Feed: Normal
        </div>
      </div>
    </aside>
  );
};
