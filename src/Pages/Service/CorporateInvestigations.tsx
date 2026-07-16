import React from 'react';

const CorporateInvestigations = () => {
  return (
    <div className="font-serif min-h-screen text-gray-900 dark:text-gray-100 bg-[#f0ece3] dark:bg-[#141414] transition-colors duration-300">
      
      {/* Hero Section (Reference: image_239e21.png) */}
      <section className="bg-[#e7e2d3] dark:bg-[#151514] text-gray-900 dark:text-white px-6 py-24 md:py-32 relative overflow-hidden transition-colors duration-300">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=60"
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
            File No. 01 — Corporate Practice
          </p>
          <h1 data-animate className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Corporate Investigations & <br className="hidden md:block" />
            <span className="text-[#96762a] dark:text-[#c29b46] italic font-serif">Fraud Detection</span>
          </h1>
          <p data-animate data-delay="150" className="text-gray-700 dark:text-gray-300 text-xl max-w-2xl font-light">
            Intelligence that protects your revenue, reputation and intellectual property.
          </p>
        </div>
      </section>

      {/* Main Content & What We Uncover (Reference: image_23a0cc.png) */}
      <section className="px-6 py-20 md:py-28 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Text */}
          <div data-animate="fade-left" className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-gray-800 dark:text-gray-200">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black dark:text-white">
              Protecting your business from the inside out
            </h2>
            <p>
              The most damaging threats a company faces rarely arrive through the front door. 
              Corporate espionage, internal fraud and the theft of intellectual property are 
              frequently orchestrated by trusted insiders — employees, vendors or partners with 
              privileged access to your systems and secrets. Verity gives leadership the factual 
              clarity needed to act decisively and lawfully.
            </p>
            <p>
              Our corporate practice conducts discreet enquiries into financial misappropriation, 
              procurement and vendor fraud, conflict-of-interest and kickback schemes, data leakage 
              and the exfiltration of trade secrets. We perform pre-employment and pre-deal due 
              diligence, verify the antecedents of prospective partners, and support internal HR and 
              legal teams during sensitive misconduct investigations.
            </p>
            <p>
              Every engagement is handled under strict confidentiality. Evidence is documented to an 
              admissible standard so that, should the matter proceed to disciplinary action, arbitration 
              or litigation, your position is fully supported.
            </p>
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=60"
              alt="Financial records under audit"
              loading="lazy"
              data-animate
              className="w-full h-64 object-cover border border-[#d1cec3] dark:border-zinc-800 grayscale hover:grayscale-0 transition-all duration-500 mt-8"
            />
          </div>

          {/* Right Column: Dark Box */}
          <div className="lg:col-span-5">
            <div data-animate="fade-right" data-delay="150" className="bg-[#e7e2d3] dark:bg-[#151514] text-gray-900 dark:text-white p-10 shadow-lg mt-2 lg:mt-0 transition-colors duration-300">
              <h3 className="text-[#96762a] dark:text-[#c29b46] uppercase tracking-widest text-xs font-sans font-semibold mb-8">
                What We Uncover
              </h3>
              <ul className="space-y-6">
                <li className="border-b border-[#d1cec3] dark:border-gray-800 pb-4 text-gray-800 dark:text-gray-200">
                  Financial misappropriation & billing fraud
                </li>
                <li className="border-b border-[#d1cec3] dark:border-gray-800 pb-4 text-gray-800 dark:text-gray-200">
                  Vendor kickbacks & conflicts of interest
                </li>
                <li className="border-b border-[#d1cec3] dark:border-gray-800 pb-4 text-gray-800 dark:text-gray-200">
                  Data leakage & trade-secret theft
                </li>
                <li className="text-gray-800 dark:text-gray-200 pt-2">
                  Employee & partner background risks
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </section>

      {/* Protocol / Process Section (Reference: image_23a104.png) */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div data-animate className="mb-10">
          <p className="text-[#a63c32] uppercase tracking-[0.2em] text-xs font-sans font-semibold mb-4">
            Protocol — How We Work
          </p>
          <h2 className="text-4xl font-bold text-black dark:text-white">A disciplined, four-stage process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-gray-300/70 dark:border-zinc-800">
          
          {/* Step 1 */}
          <div data-animate="zoom" data-delay="0" className="border-r border-b border-gray-300/70 dark:border-zinc-800 p-8">
            <div className="text-2xl text-[#a63c32] font-mono mb-6">01</div>
            <h4 className="text-xl font-bold mb-3 text-black dark:text-white">Consultation</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              A confidential briefing to understand your concerns, objectives and constraints.
            </p>
          </div>

          {/* Step 2 */}
          <div data-animate="zoom" data-delay="120" className="border-r border-b border-gray-300/70 dark:border-zinc-800 p-8 bg-[#f4f1eb] dark:bg-[#1e1d19]">
            <div className="text-2xl text-[#a63c32] font-mono mb-6">02</div>
            <h4 className="text-xl font-bold mb-3 text-black dark:text-white">Strategy</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              A tailored, lawful investigation plan with clear scope, timelines and deliverables.
            </p>
          </div>

          {/* Step 3 */}
          <div data-animate="zoom" data-delay="240" className="border-r border-b border-gray-300/70 dark:border-zinc-800 p-8 bg-[#f4f1eb] dark:bg-[#1e1d19]">
            <div className="text-2xl text-[#a63c32] font-mono mb-6">03</div>
            <h4 className="text-xl font-bold mb-3 text-black dark:text-white">Investigation</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Field and forensic work executed discreetly by vetted specialists.
            </p>
          </div>

          {/* Step 4 */}
          <div data-animate="zoom" data-delay="360" className="border-r border-b border-gray-300/70 dark:border-zinc-800 p-8 bg-[#f4f1eb] dark:bg-[#1e1d19]">
            <div className="text-2xl text-[#a63c32] font-mono mb-6">04</div>
            <h4 className="text-xl font-bold mb-3 text-black dark:text-white">Detailed Reporting</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              A clear, evidence-backed report built to withstand legal scrutiny.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section (Reference: image_23a127.png) */}
      <section className="bg-[#8a2424] px-6 py-16 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <h2 data-animate="fade-left" className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-0">
            Secure Your Business
          </h2>
          <button data-animate="fade-right" className="bg-[#151514] hover:bg-black text-white px-8 py-4 uppercase tracking-widest text-xs font-sans font-semibold transition-colors duration-300 flex items-center gap-2">
            Contact Us <span>&rarr;</span>
          </button>
        </div>
      </section>

    </div>
  );
};

export default CorporateInvestigations;