import React from 'react';
import { Check, AlertTriangle } from 'lucide-react';

interface StatusBadgeProps {
  status: 'Verified' | 'Needs Check';
  size?: 'sm' | 'md';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'sm' }) => {
  if (status === 'Verified') {
    return (
      <span
        id={`badge-${status.toLowerCase().replace(/\s+/g, '-')}`}
        className={`inline-flex items-center gap-1.5 font-bold uppercase tracking-wider rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300/80 ${
          size === 'sm' ? 'px-2.5 py-0.5 text-[10px]' : 'px-3 py-1 text-xs'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
        VERIFIED
      </span>
    );
  }

  return (
    <span
      id={`badge-${status.toLowerCase().replace(/\s+/g, '-')}`}
      className={`inline-flex items-center gap-1.5 font-bold uppercase tracking-wider rounded-full bg-amber-100 text-amber-800 border border-amber-300/80 ${
        size === 'sm' ? 'px-2.5 py-0.5 text-[10px]' : 'px-3 py-1 text-xs'
      }`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
      CHECKING
    </span>
  );
};

