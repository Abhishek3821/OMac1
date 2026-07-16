import React from 'react';

const BackgroundVerification = () => {
  return (
    <div className="font-serif min-h-screen text-gray-900 dark:text-gray-100 bg-[#f0ece3] dark:bg-[#141414] transition-colors duration-300">
      
      {/* Hero Section (Reference: image_239a43.png) */}
      <section className="bg-[#e7e2d3] dark:bg-[#151514] text-gray-900 dark:text-white px-6 py-24 md:py-32 relative overflow-hidden">
        {/* Subtle background grid pattern */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        ></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <p data-animate="fade" className="text-[#a63c32] uppercase tracking-[0.2em] text-xs font-sans font-semibold mb-6">
            File No. 02 — Background Verification
          </p>
          <h1 data-animate className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Comprehensive Background <br className="hidden md:block" />
            <span className="text-[#96762a] dark:text-[#c29b46] italic font-serif">Verification</span> Services
          </h1>
          <p data-animate data-delay="150" className="text-gray-700 dark:text-gray-300 text-xl max-w-2xl font-light">
            Hire with confidence. Verify with certainty.
          </p>
        </div>
      </section>

      {/* Main Content & Stats (Reference: image_239d04.png) */}
      <section className="px-6 py-20 md:py-24 max-w-5xl mx-auto">
        
        {/* Text Content */}
        <div className="mb-16">
          <h2 data-animate className="text-3xl md:text-4xl font-bold mb-8 text-black dark:text-white">
            Why fast, accurate BGV is critical for hiring
          </h2>
          <div data-animate data-delay="150" className="space-y-6 text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            <p>
              A single bad hire can cost far more than a salary. Falsified credentials, undisclosed criminal history and fabricated experience expose organisations to fraud, liability and reputational harm. Verity's background verification services give HR and hiring teams a complete, dependable picture of every candidate — before an offer is signed.
            </p>
            <p>
              Our checks cover employment history and reference validation, criminal and court record searches, education and qualification verification, and current and permanent address confirmation. Where required, we extend screening to credit history, professional licence checks and global database searches for senior and sensitive roles.
            </p>
            <p>
              Speed matters in a competitive hiring market. Our processes are built to return accurate results quickly, without cutting corners — because a verification that is fast but wrong is worse than no verification at all. Every report is source-documented, compliant and ready to support your hiring decision.
            </p>
          </div>
        </div>

        {/* Info Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-300/70 dark:border-zinc-800">
          
          <div data-animate="zoom" className="p-8 border-b md:border-b-0 md:border-r border-gray-300/70 dark:border-zinc-800">
            <div className="text-lg text-[#a63c32] font-mono mb-4">01</div>
            <h4 className="text-xl font-bold mb-3 text-black dark:text-white">Fast Turnaround</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Structured workflows and dedicated verifiers deliver results in days, not weeks.
            </p>
          </div>

          <div data-animate="zoom" data-delay="120" className="p-8 border-b md:border-b-0 md:border-r border-gray-300/70 dark:border-zinc-800">
            <div className="text-lg text-[#a63c32] font-mono mb-4">02</div>
            <h4 className="text-xl font-bold mb-3 text-black dark:text-white">Pan-India Coverage</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              A verified field network reaching every state, district and tier-II & III town.
            </p>
          </div>

          <div data-animate="zoom" data-delay="240" className="p-8">
            <div className="text-lg text-[#a63c32] font-mono mb-4">03</div>
            <h4 className="text-xl font-bold mb-3 text-black dark:text-white">100% Accuracy</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Dual-source validation and documented evidence on every single check.
            </p>
          </div>

        </div>
      </section>

      {/* What We Screen Section (Reference: image_239d22.png) */}
      <section className="px-6 pb-20 md:pb-28 max-w-5xl mx-auto">
        <div className="border border-gray-300/70 dark:border-zinc-800 p-8 md:p-12">
          <h3 data-animate className="text-[#a63c32] uppercase tracking-[0.2em] text-xs font-sans font-semibold mb-8">
            What We Screen
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {/* Top Row */}
            <div data-animate className="border-b border-gray-300/70 dark:border-zinc-800 pb-5 mb-5 text-gray-800 dark:text-gray-200 text-lg">
              Employment & reference checks
            </div>
            <div data-animate data-delay="120" className="border-b border-gray-300/70 dark:border-zinc-800 pb-5 mb-5 text-gray-800 dark:text-gray-200 text-lg">
              Criminal & court record checks
            </div>

            {/* Bottom Row */}
            <div data-animate data-delay="240" className="text-gray-800 dark:text-gray-200 text-lg">
              Education & qualification verification
            </div>
            <div data-animate data-delay="360" className="text-gray-800 dark:text-gray-200 text-lg">
              Current & permanent address checks
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (Reference: image_239d2b.png) */}
      <section className="bg-[#8a2424] px-6 py-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <h2 data-animate="fade-left" className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-0">
            Verify your next hire with confidence
          </h2>
          <button data-animate="fade-right" className="bg-[#151514] hover:bg-black text-white px-8 py-4 uppercase tracking-widest text-xs font-sans font-semibold transition-colors duration-300 flex items-center gap-2 whitespace-nowrap">
            Start A Verification <span>&rarr;</span>
          </button>
        </div>
      </section>

    </div>
  );
};

export default BackgroundVerification;