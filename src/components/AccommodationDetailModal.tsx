import React from 'react';
import { X, MapPin, ShieldCheck, AlertTriangle, ExternalLink, CheckCircle2, Phone } from 'lucide-react';
import { Accommodation, PageType } from '../types';
import { StatusBadge } from './StatusBadge';

interface AccommodationDetailModalProps {
  accommodation: Accommodation | null;
  onClose: () => void;
  onNavigate: (page: PageType) => void;
}

export const AccommodationDetailModal: React.FC<AccommodationDetailModalProps> = ({
  accommodation,
  onClose,
  onNavigate,
}) => {
  if (!accommodation) return null;

  return (
    <div
      id="accommodation-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="accommodation-modal-content"
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Close */}
        <div className="relative h-48 sm:h-52 w-full shrink-0">
          <img
            src={accommodation.image}
            alt={accommodation.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
          <button
            id="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-3 right-3 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <StatusBadge status={accommodation.status} />
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-white/20 text-white backdrop-blur-xs">
                  {accommodation.category}
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-white">{accommodation.name}</h3>
              <p className="text-xs text-slate-200 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" /> {accommodation.location}
              </p>
            </div>
            <div className="text-right bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
              <span className="text-lg font-bold text-emerald-400">₹{accommodation.price}</span>
              <span className="text-xs text-slate-300">{accommodation.priceUnit}</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-4 text-sm text-slate-700">
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-1">Description</h4>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">{accommodation.description}</p>
          </div>

          {accommodation.verifiedFeatures && accommodation.verifiedFeatures.length > 0 && (
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">Verified Highlights</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {accommodation.verifiedFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-200/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {accommodation.warningNote && (
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-300 text-xs text-amber-900 flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block">Vigilance Warning:</span>
                {accommodation.warningNote}
              </div>
            </div>
          )}

          <div className="p-3 bg-blue-50/80 rounded-xl border border-blue-200 text-xs text-blue-900 space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-blue-800">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              How to Book Safely:
            </div>
            <p className="text-slate-700 leading-relaxed">
              {accommodation.officialBookingTip || 'Ensure to obtain an official receipt and verify property identification on arrival.'}
            </p>
          </div>

          {accommodation.contact && (
            <div className="flex items-center gap-2 text-xs text-slate-600 pt-1 border-t border-slate-100">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>Contact / Desk: <strong className="text-slate-800">{accommodation.contact}</strong></span>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <button
            id="modal-report-link"
            onClick={() => {
              onClose();
              onNavigate('report');
            }}
            className="text-xs font-semibold text-rose-600 hover:text-rose-700 hover:underline cursor-pointer"
          >
            Report an issue with this stay
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onNavigate('booksafe');
              }}
              className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-1 shadow-xs cursor-pointer"
            >
              <span>Book Safely</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
