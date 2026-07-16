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

// OMAC Investigations — Service Catalogue
const catalogueData = [
  {
    fileType: 'CI',
    serviceLine: 'Corporate Investigations',
    covers: 'Vendor collusion, procurement fraud, conflict of interest, workplace misconduct, internal theft, whistleblower-triggered inquiries.',
    duration: '2–6 weeks',
    deliverable: 'Investigation report + evidence file, usable for HR/legal action'
  },
  {
    fileType: 'BGV',
    serviceLine: 'Background Verification',
    covers: 'Employment history, education, address, identity, criminal/court record, reference checks — field-verified, not database-only.',
    duration: '3–15 business days',
    deliverable: 'Per-candidate verification report'
  },
  {
    fileType: 'PI',
    serviceLine: 'Private Investigations',
    covers: 'Asset tracing, surveillance, location and identity verification, counterparty due diligence.',
    duration: '3 days–4 weeks',
    deliverable: 'Surveillance log, photo/video evidence, findings report'
  },
  {
    fileType: 'MI',
    serviceLine: 'Matrimonial & Divorce Investigations',
    covers: 'Pre-matrimonial background checks, infidelity investigations, concealed asset tracing, misrepresented status verification.',
    duration: '1–6 weeks',
    deliverable: 'Findings report, evidence usable in legal proceedings where applicable'
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

          {/* Service Catalogue */}
          <div className="mt-24 md:mt-32">
            <div data-animate className="pb-8 border-b border-[#d1cec3] dark:border-zinc-800 mb-10">
              <p className="text-[#a4362d] font-mono text-xs tracking-[0.25em] uppercase mb-6">
                OMAC Investigations — Service Catalogue
              </p>
              <p className="font-serif italic text-gray-600 dark:text-gray-400 text-lg">
                Corporate, background verification, private and matrimonial investigation services — India
              </p>
            </div>

            {/* Desktop table */}
            <div data-animate className="hidden lg:block border border-[#d1cec3] dark:border-zinc-800">
              {/* Header row */}
              <div className="grid grid-cols-12 bg-[#161513] dark:bg-black text-white">
                <div className="col-span-1 px-4 py-4 font-mono text-[10px] tracking-[0.2em] uppercase">File Type</div>
                <div className="col-span-2 px-4 py-4 font-mono text-[10px] tracking-[0.2em] uppercase">Service Line</div>
                <div className="col-span-5 px-4 py-4 font-mono text-[10px] tracking-[0.2em] uppercase">What It Covers</div>
                <div className="col-span-2 px-4 py-4 font-mono text-[10px] tracking-[0.2em] uppercase">Typical Duration</div>
                <div className="col-span-2 px-4 py-4 font-mono text-[10px] tracking-[0.2em] uppercase">Deliverable</div>
              </div>
              {catalogueData.map((row, index) => (
                <div
                  key={row.fileType}
                  className={`grid grid-cols-12 ${index < catalogueData.length - 1 ? 'border-b border-[#d1cec3] dark:border-zinc-800' : ''} hover:bg-[#e8e4d8] dark:hover:bg-[#22201c] transition-colors duration-300`}
                >
                  <div className="col-span-1 px-4 py-6 font-mono text-sm text-[#a4362d] tracking-widest">{row.fileType}</div>
                  <div className="col-span-2 px-4 py-6 font-serif text-gray-900 dark:text-gray-100">{row.serviceLine}</div>
                  <div className="col-span-5 px-4 py-6 font-serif text-gray-600 dark:text-gray-400 leading-relaxed">{row.covers}</div>
                  <div className="col-span-2 px-4 py-6 font-serif text-gray-900 dark:text-gray-100">{row.duration}</div>
                  <div className="col-span-2 px-4 py-6 font-serif text-gray-600 dark:text-gray-400 leading-relaxed">{row.deliverable}</div>
                </div>
              ))}
            </div>

            {/* Mobile / tablet stacked cards */}
            <div className="lg:hidden space-y-6">
              {catalogueData.map((row, index) => (
                <div
                  key={row.fileType}
                  data-animate
                  data-delay={index * 100}
                  className="border border-[#d1cec3] dark:border-zinc-800 bg-[#fbf9f5] dark:bg-[#1e1d1a] p-6"
                >
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="font-mono text-sm text-[#a4362d] tracking-widest">{row.fileType}</span>
                    <h3 className="font-serif text-xl text-gray-900 dark:text-gray-100">{row.serviceLine}</h3>
                  </div>
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-500 dark:text-zinc-500 mb-1">What It Covers</p>
                  <p className="font-serif text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{row.covers}</p>
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-500 dark:text-zinc-500 mb-1">Typical Duration</p>
                  <p className="font-serif text-gray-900 dark:text-gray-100 mb-4">{row.duration}</p>
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-500 dark:text-zinc-500 mb-1">Deliverable</p>
                  <p className="font-serif text-gray-600 dark:text-gray-400 leading-relaxed">{row.deliverable}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticesSection;