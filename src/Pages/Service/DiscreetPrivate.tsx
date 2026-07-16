import React from 'react';

const PrivateInvestigations = () => {
  return (
    <div className="font-serif min-h-screen text-gray-900 dark:text-gray-100 bg-[#f0ece3] dark:bg-[#141414] transition-colors duration-300">
      
      {/* Hero Section (Reference: image_23871c.png) */}
      <section className="bg-[#e7e2d3] dark:bg-[#151514] text-gray-900 dark:text-white px-6 py-24 md:py-32 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1920&q=60"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#e7e2d3]/90 dark:bg-[#151514]/85"></div>
        {/* Subtle background grid pattern */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        ></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <p data-animate="fade" className="text-[#a63c32] uppercase tracking-[0.2em] text-xs font-sans font-semibold mb-6">
            File No. 03 — Private Practice
          </p>
          <h1 data-animate className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Discreet <span className="text-[#96762a] dark:text-[#c29b46] italic font-serif">Private</span> Investigations
          </h1>
          <p data-animate data-delay="150" className="text-gray-700 dark:text-gray-300 text-xl max-w-2xl font-light">
            Answers you can trust, obtained with complete discretion.
          </p>
        </div>
      </section>

      {/* Main Content & How We Help (Reference: image_238756.png) */}
      <section className="px-6 py-20 md:py-28 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Text */}
          <div data-animate="fade-left" className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black dark:text-white">
              Confidential enquiries for private individuals
            </h2>
            <p>
              Some questions are too personal, too sensitive, or too important to leave 
              unanswered. Verity's private investigation practice supports individuals and 
              families who need discreet, reliable answers — delivered without judgement and 
              protected by absolute confidentiality.
            </p>
            <p>
              Our services include locating missing persons and estranged relatives, tracing assets and 
              hidden financial interests, and building factual personal profiles for due-diligence 
              purposes. Whether you are reconnecting with family, protecting an inheritance, or 
              verifying the intentions of someone new in your life, our investigators approach each case 
              with sensitivity and rigour.
            </p>
            <p>
              Every enquiry is conducted strictly within the bounds of the law. We do not engage in 
              harassment, unlawful surveillance or any activity that would compromise your interests or 
              ours. The evidence we gather is legitimate, verifiable and handled with the utmost 
              discretion.
            </p>
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=60"
              alt="Discreet surveillance operations"
              loading="lazy"
              data-animate
              className="w-full h-64 object-cover border border-[#d1cec3] dark:border-zinc-800 grayscale hover:grayscale-0 transition-all duration-500 mt-8"
            />
          </div>

          {/* Right Column: Dark Box */}
          <div className="lg:col-span-5">
            <div data-animate="fade-right" data-delay="150" className="bg-[#e7e2d3] dark:bg-[#151514] text-gray-900 dark:text-white p-10 shadow-lg mt-2 lg:mt-0">
              <h3 className="text-[#96762a] dark:text-[#c29b46] uppercase tracking-widest text-xs font-sans font-semibold mb-8">
                How We Help
              </h3>
              <ul className="space-y-6">
                <li data-animate data-delay="150" className="border-b border-[#d1cec3] dark:border-gray-800 pb-4 text-gray-800 dark:text-gray-200">
                  Missing persons & skip tracing
                </li>
                <li data-animate data-delay="270" className="border-b border-[#d1cec3] dark:border-gray-800 pb-4 text-gray-800 dark:text-gray-200">
                  Asset & financial tracing
                </li>
                <li data-animate data-delay="390" className="border-b border-[#d1cec3] dark:border-gray-800 pb-4 text-gray-800 dark:text-gray-200">
                  Personal profiling & verification
                </li>
                <li data-animate data-delay="510" className="text-gray-800 dark:text-gray-200 pt-2">
                  Surveillance within legal limits
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </section>

      {/* CTA Section (Reference: image_2391e2.png) */}
      <section className="bg-[#8a2424] px-6 py-16 mt-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <h2 data-animate="fade-left" className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-0 leading-snug">
            Speak to an investigator in <br className="hidden md:block"/> confidence
          </h2>
          <button data-animate="fade-right" className="bg-[#151514] hover:bg-black text-white px-8 py-4 uppercase tracking-widest text-xs font-sans font-semibold transition-colors duration-300 flex items-center gap-2 whitespace-nowrap">
            Contact Us Privately <span>&rarr;</span>
          </button>
        </div>
      </section>

    </div>
  );
};

export default PrivateInvestigations;