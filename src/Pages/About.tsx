import React from 'react';

const AboutVerity: React.FC = () => {
  return (
    <section className="w-full">
      {/* Top Section - Dark Header with Grid */}
      <div 
        className="relative bg-[#e7e2d3] dark:bg-[#161513] text-gray-900 dark:text-white py-24 md:py-32 px-6 md:px-16 lg:px-32 transition-colors duration-300"
        style={{
          // Adds the subtle background grid from the image
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=60"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#e7e2d3]/90 dark:bg-[#161513]/85"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <p data-animate="fade" className="text-[#a4362d] font-mono text-xs tracking-[0.25em] uppercase mb-8">
            File No. 000 — About Verity
          </p>
          <h1 data-animate className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight">
            A decade of discreet, <span className="italic text-[#96762a] dark:text-[#c69f44]">decisive</span><br className="hidden md:block" />
            {' '}investigation.
          </h1>
        </div>
      </div>

      {/* Bottom Section - Content & Stats */}
      <div className="bg-[#eeeade] dark:bg-[#1a1917] py-20 md:py-32 px-6 md:px-16 lg:px-32 transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Content - Paragraphs */}
          <div data-animate="fade-left" className="flex-1 space-y-8 font-serif text-[1.1rem] leading-relaxed">
            <p className="text-gray-900 dark:text-gray-100">
              Verity Investigations is a licensed private investigation and background 
              verification agency operating across India. For over ten years we have 
              supported corporations, law firms, HR teams and private individuals with 
              intelligence that stands up to scrutiny — in the boardroom and in court.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Our team blends former law-enforcement professionals, corporate risk analysts and 
              vetted field operatives. Every case is assigned a dedicated case manager who is your 
              single, secure point of contact from consultation to final report.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              We do not take shortcuts. We do not fabricate. We deliver clear, factual, legally 
              admissible findings — and we protect your identity at every step of the way.
            </p>
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=60"
              alt="Verity Investigations office"
              loading="lazy"
              data-animate
              className="w-full h-64 object-cover border border-[#d1cec3] dark:border-zinc-800 grayscale hover:grayscale-0 transition-all duration-500 mt-6"
            />
          </div>

          {/* Right Content - Stats Box */}
          <div className="lg:w-[400px] shrink-0">
            <div data-animate="fade-right" data-delay="150" className="border border-[#d1cec3] dark:border-zinc-800 p-10 h-full flex flex-col">
              <p className="text-[#a4362d] font-mono text-xs tracking-[0.25em] uppercase mb-12">
                By the numbers
              </p>
              
              <div className="flex flex-col space-y-8">
                {/* Stat 1 */}
                <div data-animate="zoom">
                  <h3 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-3">10+</h3>
                  <p className="font-mono text-xs tracking-widest text-gray-500 dark:text-zinc-500 uppercase">
                    Years in operation
                  </p>
                </div>
                
                <hr className="border-[#d1cec3] dark:border-zinc-800" />
                
                {/* Stat 2 */}
                <div data-animate="zoom" data-delay="150">
                  <h3 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-3">500+</h3>
                  <p className="font-mono text-xs tracking-widest text-gray-500 dark:text-zinc-500 uppercase">
                    Cases closed
                  </p>
                </div>
                
                <hr className="border-[#d1cec3] dark:border-zinc-800" />
                
                {/* Stat 3 */}
                <div data-animate="zoom" data-delay="300">
                  <h3 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-3">100%</h3>
                  <p className="font-mono text-xs tracking-widest text-gray-500 dark:text-zinc-500 uppercase">
                    Confidentiality
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutVerity;