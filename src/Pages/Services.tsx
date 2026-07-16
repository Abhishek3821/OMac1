import React from 'react';
import { Link } from 'react-router-dom';

// Data for the services list to keep the component clean
const servicesData = [
  {
    id: '01',
    title: 'Corporate Investigations & Fraud Detection',
    description: 'Protect your enterprise from internal fraud, espionage and IP theft with rigorous, court-ready enquiries.',
    path: '/services/corporate-investigations'
  },
  {
    id: '02',
    title: 'Background Verification (BGV)',
    description: 'Fast, accurate employee screening, criminal record, education and address checks with Pan-India coverage.',
    path: '/services/background-verification'
  },
  {
    id: '03',
    title: 'Private Investigations',
    description: 'Missing persons, asset tracing and personal profiling delivered with strict privacy and legal compliance.',
    path: '/services/private-investigations'
  },
  {
    id: '04',
    title: 'Matrimonial & Divorce Investigations',
    description: 'Pre & post-matrimonial checks, fidelity enquiries and evidence gathering handled with total anonymity.',
    path: '/services/matrimonial-investigations'
  }
];

const PracticesSection: React.FC = () => {
  return (
    <section className="w-full font-serif">
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
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=60"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#e7e2d3]/90 dark:bg-[#161513]/85"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <p data-animate="fade" className="text-[#a4362d] font-mono text-xs tracking-[0.25em] uppercase mb-8">
            Index — Practices
          </p>
          <h2 data-animate className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight">
            Four practices. One standard <br className="hidden md:block" />
            of <span className="italic text-[#96762a] dark:text-[#c69f44]">discretion.</span>
          </h2>
        </div>
      </div>

      {/* Bottom Section - Services List */}
      <div className="bg-[#eeeade] dark:bg-[#1a1917] py-20 md:py-32 px-6 md:px-16 lg:px-32 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col">
            {servicesData.map((service, index) => (
              <Link
                to={service.path}
                key={service.id}
                data-animate
                data-delay={index * 120}
                className="group flex flex-col md:flex-row items-start py-10 md:py-12 border-b border-[#d1cec3] dark:border-zinc-800 cursor-pointer hover:bg-[#e8e4d8] dark:hover:bg-[#22201c] transition-colors duration-300 -mx-6 px-6 md:mx-0 md:px-0"
              >
                {/* Number Column */}
                <div className="w-16 md:w-24 shrink-0 mb-4 md:mb-0">
                  <span className="text-[#a4362d] font-mono text-sm tracking-widest mt-1 block">
                    {service.id}
                  </span>
                </div>

                {/* Content Column */}
                <div className="flex-1 md:pr-12">
                  <h3 className="font-serif text-2xl md:text-3xl text-gray-900 dark:text-gray-100 mb-4">
                    {service.title}
                  </h3>
                  <p className="font-serif text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-3xl">
                    {service.description}
                  </p>
                </div>

                {/* Arrow Column */}
                <div className="shrink-0 text-[#a4362d] mt-6 md:mt-2 self-end md:self-start">
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 md:group-hover:translate-x-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M4 12h16m0 0l-6-6m6 6l-6 6" 
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticesSection;