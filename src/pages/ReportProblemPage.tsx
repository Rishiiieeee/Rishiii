import React, { useState } from 'react';
import {
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  Send,
  RefreshCw,
  ArrowLeft
} from 'lucide-react';
import { PageType } from '../types';
import { ALL_TEMPLES } from '../data/templesData';

interface ReportProblemPageProps {
  onNavigate: (page: PageType) => void;
}

export const ReportProblemPage: React.FC<ReportProblemPageProps> = ({ onNavigate }) => {
  const [selectedTemple, setSelectedTemple] = useState<string>('all');
  const [issueType, setIssueType] = useState<string>('Fake Website / Fraud Attempt');
  const [details, setDetails] = useState<string>('');
  const [suspectUrl, setSuspectUrl] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [reportId, setReportId] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!issueType) return;
    const generatedId = `ROI-${Math.floor(100000 + Math.random() * 900000)}`;
    setReportId(generatedId);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setDetails('');
    setSuspectUrl('');
    setIssueType('Fake Website / Fraud Attempt');
    setSelectedTemple('all');
  };

  return (
    <div id="report-page" className="max-w-xl mx-auto py-4 animate-in fade-in">
      {isSubmitted ? (
        /* Success State matching Design HTML */
        <div
          id="report-success"
          className="bg-emerald-50 border border-emerald-100 p-10 sm:p-12 rounded-3xl text-center flex flex-col items-center shadow-xs"
        >
          <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-sm">
            ✓
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-950 mb-2">
            Report Submitted
          </h2>
          <p className="text-emerald-800 text-sm mb-4 leading-relaxed">
            Thank you. Our team will verify this information shortly.
          </p>
          <div className="px-4 py-2 bg-white/80 rounded-xl font-mono font-bold text-xs text-emerald-900 border border-emerald-200 mb-8">
            Case Ref: {reportId}
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-white border border-emerald-200 text-emerald-800 font-bold text-xs rounded-xl hover:bg-emerald-100 transition-colors cursor-pointer"
            >
              Send Another
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="px-6 py-2.5 bg-emerald-700 text-white font-bold text-xs rounded-xl hover:bg-emerald-800 transition-colors cursor-pointer"
            >
              Return Home
            </button>
          </div>
        </div>
      ) : (
        /* Report Form matching Design HTML */
        <div
          id="report-form"
          className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
            Report a Problem
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mb-8">
            Help us keep information accurate for all devotees.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase font-black text-slate-400 mb-2 tracking-wider">
                Select Temple Shrine (Optional)
              </label>
              <select
                value={selectedTemple}
                onChange={(e) => setSelectedTemple(e.target.value)}
                className="w-full p-3.5 sm:p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              >
                <option value="all">General / Not Shrine Specific</option>
                {ALL_TEMPLES.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.shortName} ({t.stateName})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] uppercase font-black text-slate-400 mb-2 tracking-wider">
                What is the issue?
              </label>
              <select
                value={issueType}
                onChange={(e) => setIssueType(e.target.value)}
                className="w-full p-3.5 sm:p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              >
                <option value="Fake Website / Fraud Attempt">Fake Website / Fraud Attempt</option>
                <option value="Incorrect Temple Timings">Incorrect Temple Timings</option>
                <option value="Suspicious Accommodation">Suspicious Accommodation</option>
                <option value="Middleman Solicitation">Middleman Solicitation</option>
                <option value="Engineering & Architectural Correction">Engineering & Architectural Correction</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] uppercase font-black text-slate-400 mb-2 tracking-wider">
                Suspicious Link or Contact (Optional)
              </label>
              <input
                type="text"
                value={suspectUrl}
                onChange={(e) => setSuspectUrl(e.target.value)}
                placeholder="e.g., https://fake-darshan-booking.org or phone number"
                className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase font-black text-slate-400 mb-2 tracking-wider">
                Description (Optional)
              </label>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={4}
                className="w-full p-3.5 sm:p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white resize-none"
                placeholder="Provide more details here..."
              />
            </div>

            <button
              type="submit"
              id="report-submit-btn"
              className="w-full py-3.5 sm:py-4 bg-red-600 hover:bg-red-700 active:scale-98 text-white font-bold text-sm rounded-2xl shadow-lg shadow-red-100 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Submit Report</span>
              <Send className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 pt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Submissions are strictly confidential and shared with cyber vigilance teams.</span>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
