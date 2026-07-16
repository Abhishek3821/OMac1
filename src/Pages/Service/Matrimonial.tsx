import React from 'react';

const MatrimonialInvestigations = () => {
  return (
    <div className="font-serif min-h-screen text-gray-900 dark:text-gray-100 bg-[#f0ece3] dark:bg-[#141414] transition-colors duration-300">
      
      {/* Hero Section (Reference: image_2382fb.png) */}
      <section className="bg-[#e7e2d3] dark:bg-[#151514] text-gray-900 dark:text-white px-6 py-24 md:py-32 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1920&q=60"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#e7e2d3]/90 dark:bg-[#151514]/85"></div>
        {/* Subtle background grid pattern */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        ></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <p data-animate="fade" className="text-[#a63c32] uppercase tracking-[0.2em] text-xs font-sans font-semibold mb-6">
            File No. 04 — Matrimonial Practice
          </p>
          <h1 data-animate className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Pre & Post-Matrimonial <br className="hidden md:block" />
            <span className="text-[#96762a] dark:text-[#c29b46] italic font-serif">Investigations</span>
          </h1>
          <p data-animate data-delay="150" className="text-gray-700 dark:text-gray-300 text-xl max-w-2xl font-light">
            Clarity and peace of mind for one of life's most important decisions.
          </p>
        </div>
      </section>

      {/* Main Content (Reference: image_23831f.png) */}
      <section className="px-6 py-20 md:py-28 max-w-5xl mx-auto">
        
        {/* Text Content */}
        <div className="mb-16">
          <h2 data-animate className="text-3xl md:text-4xl font-bold mb-8 text-black dark:text-white">
            Handled with empathy. Protected by anonymity.
          </h2>
          <div data-animate data-delay="150" className="space-y-6 text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            <p>
              Marriage is built on trust — and trust deserves to be well-founded. Whether you are considering a proposal or navigating a difficult chapter in an existing relationship, having clear, honest facts allows you to make decisions with confidence rather than doubt. We understand how personal these matters are, and we treat every client with discretion, respect and genuine care.
            </p>
            <p>
              Our pre-matrimonial investigations discreetly verify a prospective partner's background — their employment and financial standing, family circumstances, reputation, lifestyle and the accuracy of the information shared during matchmaking. For those already married, we offer sensitive fidelity enquiries and post-matrimonial checks that confirm facts and put uncertainty to rest.
            </p>
            <p>
              When a relationship reaches divorce, we assist clients and their legal counsel by gathering lawful, admissible evidence to support their case. Throughout every enquiry, your identity remains completely anonymous — the subject of the investigation is never made aware that any checks have taken place.
            </p>
            <img
              src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=60"
              alt="Trust and fidelity"
              loading="lazy"
              data-animate
              className="w-full h-64 object-cover border border-[#d1cec3] dark:border-zinc-800 grayscale hover:grayscale-0 transition-all duration-500 mt-8"
            />
          </div>
        </div>

        {/* Info Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-300/70 dark:border-zinc-800">
          
          <div data-animate="zoom" className="p-8 border-b md:border-b-0 md:border-r border-gray-300/70 dark:border-zinc-800">
            <h4 className="text-xl font-bold mb-3 text-black dark:text-white">Pre-Matrimonial Checks</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Verify background, finances, family and reputation before you commit.
            </p>
          </div>

          <div data-animate="zoom" data-delay="120" className="p-8 border-b md:border-b-0 md:border-r border-gray-300/70 dark:border-zinc-800">
            <h4 className="text-xl font-bold mb-3 text-black dark:text-white">Fidelity Enquiries</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Discreet, respectful investigation to confirm the facts and ease uncertainty.
            </p>
          </div>

          <div data-animate="zoom" data-delay="240" className="p-8">
            <h4 className="text-xl font-bold mb-3 text-black dark:text-white">Divorce Evidence</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Lawful, admissible evidence gathering in support of your legal proceedings.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section (Reference: image_23833e.png) */}
      <section className="bg-[#8a2424] px-6 py-16 mt-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <h2 data-animate="fade-left" className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-0 leading-snug">
            Your enquiry stays completely <br className="hidden md:block"/> anonymous
          </h2>
          <button data-animate="fade-right" className="bg-[#151514] hover:bg-black text-white px-8 py-4 uppercase tracking-widest text-xs font-sans font-semibold transition-colors duration-300 flex items-center gap-2 whitespace-nowrap">
            Talk To Us <span>&rarr;</span>
          </button>
        </div>
      </section>

    </div>
  );
};

export default MatrimonialInvestigations;