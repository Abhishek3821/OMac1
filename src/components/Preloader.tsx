import React, { useEffect, useState } from 'react';

/**
 * Full-screen branded preloader shown once on initial page load.
 * Plays a short brand reveal + progress bar, then fades out and unmounts.
 */
const Preloader: React.FC = () => {
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const fadeTimer = setTimeout(() => {
      setFading(true);
      document.body.style.overflow = '';
    }, 2200);
    const hideTimer = setTimeout(() => setHidden(true), 2950);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#12110e] flex flex-col items-center justify-center transition-opacity duration-700 ease-out ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden={fading}
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center">
        <p className="preloader-rise text-[#9b2a2a] font-mono text-[11px] tracking-[0.35em] uppercase mb-6">
          Case File — Opening<span className="preloader-blink">_</span>
        </p>

        <div className="preloader-rise-delay flex items-baseline gap-3 mb-10">
          <span className="text-5xl md:text-6xl font-serif text-[#f2ecda]">Verity</span>
          <span className="text-xs tracking-[0.3em] text-[#c69f44] font-medium uppercase">
            Investigations
          </span>
        </div>

        {/* Progress line */}
        <div className="w-56 md:w-72 h-px bg-[#2a2823] overflow-hidden">
          <div className="preloader-bar-fill h-full bg-[#c69f44]"></div>
        </div>

        <p className="preloader-rise-delay text-[#88806c] font-mono text-[10px] tracking-[0.25em] uppercase mt-6">
          Strictly Confidential
        </p>
      </div>
    </div>
  );
};

export default Preloader;
