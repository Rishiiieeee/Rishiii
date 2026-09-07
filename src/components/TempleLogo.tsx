import React from 'react';

interface TempleLogoProps {
  onClick?: () => void;
}

export const TempleLogo: React.FC<TempleLogoProps> = ({ onClick }) => {
  return (
    <button
      id="brand-logo-button"
      onClick={onClick}
      className="flex items-center gap-3 text-left group transition-transform active:scale-98 cursor-pointer"
      title="Go to Home - The Roots Of India"
    >
      {/* Clean Utility Minimal Icon Badge */}
      <div className="w-9 h-9 bg-blue-700 hover:bg-blue-800 rounded-xl flex items-center justify-center text-white font-bold text-base shadow-xs transition-colors shrink-0">
        R
      </div>

      <div className="flex flex-col">
        <h1 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-tight group-hover:text-blue-700 transition-colors">
          THE ROOTS OF INDIA
        </h1>
        <p className="text-[10px] sm:text-[11px] text-amber-700 font-semibold tracking-wide hidden sm:block">
          Discover the Heritage. Understand the Science. Experience the Roots.
        </p>
      </div>
    </button>
  );
};
