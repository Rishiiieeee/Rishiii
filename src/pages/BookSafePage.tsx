import React, { useState } from 'react';
import {
  ShieldAlert,
  CheckCircle2,
  ExternalLink,
  Lock,
  Copy,
  Check,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Search
} from 'lucide-react';
import { PageType } from '../types';
import { ALL_TEMPLES } from '../data/templesData';

interface BookSafePageProps {
  onNavigate: (page: PageType) => void;
}

export const BookSafePage: React.FC<BookSafePageProps> = ({ onNavigate }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCopy = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Official portal entries from 16 temples
  const officialPortals = ALL_TEMPLES.map((temple) => ({
    id: temple.id,
    title: temple.officialBooking.portalName,
    subtitle: `${temple.shortName}, ${temple.stateName}`,
    url: temple.officialBooking.url,
    services: temple.officialBooking.servicesAvailable,
    disclaimer: temple.officialBooking.disclaimer,
  }));

  const filteredPortals = officialPortals.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.url.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="booksafe-page" className="max-w-4xl mx-auto space-y-8 animate-in fade-in">
      {/* 1. Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
          <ShieldCheck className="w-4 h-4" />
          <span>Anti-Fraud Cyber Guidance</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          BookSafe: Official Temple Trust Gateways
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm mt-1">
          Avoid fraudulent middlemen, cloned websites, and unverified social media handles. All links below lead directly to legitimate government and temple trust portals.
        </p>
      </div>

      {/* 2. Critical Security Alert Banner */}
      <div className="bg-rose-50 border border-rose-200 p-6 rounded-3xl flex items-start gap-4 shadow-2xs">
        <span className="text-3xl select-none">🚨</span>
        <div className="space-y-1.5">
          <h2 className="font-bold text-rose-950 text-sm sm:text-base">Anti-Fraud Security Directive</h2>
          <p className="text-xs sm:text-sm text-rose-900 leading-relaxed">
            Never transfer money via personal UPI handles (e.g. <em>@paytm</em> or personal phone numbers) for VIP passes, early morning aarti slots, or cottage allocations. Official temple trusts never solicit payments via WhatsApp or Telegram groups.
          </p>
          <div className="pt-1 text-[11px] font-semibold text-rose-800">
            Verify official domain suffixes: <strong>.gov.in</strong> or certified statutory trusts (e.g. <strong>ttdevasthanams.ap.gov.in</strong>, <strong>somnath.org</strong>, <strong>shrimahakaleshwar.com</strong>).
          </div>
        </div>
      </div>

      {/* 3. Search Filter */}
      <div className="flex justify-between items-center gap-4">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Verified Portals Directory ({officialPortals.length})
        </span>
        <div className="w-64 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter by shrine or trust name..."
            className="w-full pl-8 pr-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* 4. Official Links Directory */}
      <div className="space-y-4">
        {filteredPortals.map((link) => {
          const isCopied = copiedId === link.id;
          return (
            <div
              key={link.id}
              id={`booking-link-card-${link.id}`}
              className="p-6 bg-white border border-slate-200 rounded-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-blue-300 transition-all shadow-2xs space-y-2 sm:space-y-0"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-200">
                    Official Portal
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{link.subtitle}</span>
                </div>

                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  {link.title}
                </h3>

                <p className="text-xs text-blue-700 font-mono flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-emerald-600" />
                  <span>{link.url}</span>
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {link.services.map((srv, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] text-slate-700 font-medium">
                      ✓ {srv}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 pt-2 sm:pt-0">
                <button
                  onClick={() => handleCopy(link.id, link.url)}
                  className="px-3 py-2 text-xs text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl transition-colors cursor-pointer flex items-center gap-1 bg-slate-50 hover:bg-slate-100"
                  title="Copy official URL"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{isCopied ? 'Copied' : 'Copy'}</span>
                </button>

                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
                >
                  <span>Open Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* 5. Report a Phishing Website Callout */}
      <div className="p-6 bg-slate-100 rounded-3xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-slate-900 text-sm">Found A Cloned Website Or Suspicious Agent?</h3>
          <p className="text-xs text-slate-600 mt-0.5">Submit the incident so our security registry can blacklist it and warn other devotees.</p>
        </div>
        <button
          onClick={() => onNavigate('report')}
          className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shrink-0"
        >
          Report Suspicious Entity →
        </button>
      </div>
    </div>
  );
};
