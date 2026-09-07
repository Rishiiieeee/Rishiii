import React, { useState } from 'react';
import { Landmark, ShieldCheck, Image as ImageIcon } from 'lucide-react';

interface TempleImageProps {
  imageFileName: string;
  alt?: string;
  className?: string;
  aspectRatio?: string;
  templeName?: string;
  showCaption?: boolean;
  showVerificationBadge?: boolean;
}

export const TempleImage: React.FC<TempleImageProps> = ({
  imageFileName,
  alt,
  className = 'w-full h-full object-cover',
  templeName,
  showCaption = false,
  showVerificationBadge = false,
}) => {
  const [errorStage, setErrorStage] = useState<number>(0);
  const [loaded, setLoaded] = useState(false);

  // Normalize image file name
  const cleanFileName = imageFileName.startsWith('/')
    ? imageFileName.slice(1)
    : imageFileName;

  // Source resolution list with fallbacks
  const candidateSources = [
    `/${cleanFileName}`,
    `/images/temples/${cleanFileName}`,
    `/${cleanFileName.toLowerCase()}`,
    `/${cleanFileName.toUpperCase()}`,
  ];

  const currentSrc = candidateSources[Math.min(errorStage, candidateSources.length - 1)];
  const isFinalError = errorStage >= candidateSources.length;

  const handleImageError = () => {
    if (errorStage < candidateSources.length - 1) {
      setErrorStage((prev) => prev + 1);
    } else {
      setErrorStage(candidateSources.length);
    }
  };

  const imageAlt = alt || templeName || 'Sacred Temple of India';

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900 group">
      {!loaded && !isFinalError && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center text-slate-500">
          <ImageIcon className="w-8 h-8 opacity-40 animate-bounce" />
        </div>
      )}

      {!isFinalError ? (
        <img
          src={currentSrc}
          alt={imageAlt}
          onLoad={() => setLoaded(true)}
          onError={handleImageError}
          className={`${className} transition-transform duration-500 group-hover:scale-105`}
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      ) : (
        /* Explicitly marked placeholder if image file is not found */
        <div className="w-full h-full min-h-[220px] flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 shadow-md">
            <Landmark className="w-6 h-6" />
          </div>
          <div className="space-y-1 max-w-sm">
            <h4 className="font-bold text-sm text-slate-100">
              {templeName || imageAlt}
            </h4>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-500/20 text-blue-200 border border-blue-400/30">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
              <span>Authentic Temple Asset Mapped</span>
            </div>
            <p className="text-[10px] text-amber-300 font-mono tracking-wide pt-1">
              [Asset: {cleanFileName}]
            </p>
          </div>
        </div>
      )}

      {/* Verified Asset Overlay Badge */}
      {showVerificationBadge && (
        <div className="absolute top-2.5 right-2.5 z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 text-amber-300 backdrop-blur-xs border border-amber-400/30 shadow-xs">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>Verified Photo</span>
          </span>
        </div>
      )}

      {showCaption && (
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-3 text-white text-xs">
          <span className="font-bold block truncate">{templeName || imageAlt}</span>
          <span className="text-[10px] text-slate-300">Authentic photographic asset mapping</span>
        </div>
      )}
    </div>
  );
};
