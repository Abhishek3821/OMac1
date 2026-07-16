import React from 'react';

// --- Interfaces for data-driven sections ---

interface PracticeItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface WhyVerityItem {
  id: string;
  title: string;
  description: string;
}

// --- Mock Data ---

const practiceItems: PracticeItem[] = [
  {
    id: '01',
    title: 'Corporate Investigations',
    description: 'Fraud detection, corporate espionage defence, due diligence and internal misconduct enquiries for businesses.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=60',
  },
  {
    id: '02',
    title: 'Background Verification',
    description: 'Employment screening, criminal record checks, education and address verification with Pan-India coverage.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=60',
  },
  {
    id: '03',
    title: 'Private Investigations',
    description: 'Missing persons, asset tracing and confidential personal profiling conducted within strict legal compliance.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=60',
  },
  {
    id: '04',
    title: 'Matrimonial & Divorce',
    description: 'Pre & post-matrimonial checks, fidelity enquiries and lawful evidence gathering handled with total anonymity.',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=60',
  },
];

const whyVerityItems: WhyVerityItem[] = [
  {
    id: '/ 01',
    title: 'Ethical',
    description: 'Every enquiry is conducted lawfully and ethically. We gather only evidence that is legitimate, verifiable and admissible.',
  },
  {
    id: '/ 02',
    title: 'Secure',
    description: 'Encrypted communications, secure case files and strict need-to-know handling protect your identity at every step.',
  },
  {
    id: '/ 03',
    title: 'Experienced',
    description: 'A decade of casework and a network of vetted field agents across India deliver results others simply cannot.',
  },
];

// --- Sub-components for each section ---

const HeroSection: React.FC = () => (
  <section className="bg-[#eeeade] dark:bg-[#141414] py-32 px-10 md:px-20 lg:px-40 relative border-b border-[#d1cec3] dark:border-zinc-800 transition-colors duration-300">
    <img
      src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=60"
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-[#eeeade]/90 dark:bg-[#141414]/85"></div>
    {/* Grid Background */}
    <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex flex-col items-start gap-1">
        <span data-animate="fade" className="text-[#8B2F1D] text-sm tracking-[0.2em] uppercase font-mono">FILE NO. 001 —</span>
      </div>
    </div>
    
    <div className="relative z-10 max-w-4xl mt-12">
      <h1 data-animate className="text-5xl md:text-6xl font-serif text-gray-900 dark:text-white leading-tight">
        Uncovering truth with <span className="text-[#96762a] dark:text-[#D4AA6A] italic">absolute confidentiality.</span>
      </h1>
      <p data-animate data-delay="150" className="text-gray-600 dark:text-zinc-400 mt-10 max-w-2xl text-lg md:text-xl font-light">
        India's premier agency for corporate and private investigations — discreet, ethical, and legally admissible from first contact to final report.
      </p>
      <div data-animate data-delay="300" className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-16">
        <button className="bg-[#7F2F1D] text-white text-sm tracking-widest uppercase font-semibold px-10 py-5 flex items-center gap-2 group border border-transparent hover:border-[#D4AA6A]">
          REQUEST A CALLBACK 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
        <button className="text-gray-800 dark:text-zinc-200 text-sm tracking-widest uppercase font-semibold border-b border-gray-500 dark:border-zinc-500 pb-1 hover:border-gray-800 dark:hover:border-zinc-200">
          EXPLORE SERVICES
        </button>
      </div>
    </div>
  </section>
);

const StatsSection: React.FC = () => (
  <section className="bg-[#eeeade] dark:bg-[#141414] py-20 px-10 md:px-20 lg:px-40 relative border-b border-[#d1cec3] dark:border-zinc-800 transition-colors duration-300">
     {/* Grid Background */}
     <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
     
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
      <div data-animate="zoom" data-delay="0" className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
        <span className="text-5xl md:text-6xl font-serif text-[#96762a] dark:text-[#D4AA6A]">10+</span>
        <span className="text-gray-500 dark:text-zinc-500 text-sm tracking-[0.2em] uppercase font-mono">YEARS EXPERIENCE</span>
      </div>
      <div data-animate="zoom" data-delay="150" className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
        <span className="text-5xl md:text-6xl font-serif text-[#96762a] dark:text-[#D4AA6A]">500+</span>
        <span className="text-gray-500 dark:text-zinc-500 text-sm tracking-[0.2em] uppercase font-mono">CASES SOLVED</span>
      </div>
      <div data-animate="zoom" data-delay="300" className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
        <span className="text-5xl md:text-6xl font-serif text-[#96762a] dark:text-[#D4AA6A]">100%</span>
        <span className="text-gray-500 dark:text-zinc-500 text-sm tracking-[0.2em] uppercase font-mono">CONFIDENTIAL</span>
      </div>
    </div>
  </section>
);

const PracticesSection: React.FC = () => (
  <section className="bg-[#eeeade] dark:bg-[#141414] py-32 px-10 md:px-20 lg:px-40 relative transition-colors duration-300">
    <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>

    <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-12 border-b border-[#d1cec3] dark:border-zinc-800">
      <div data-animate className="flex flex-col items-start gap-3">
        <span className="text-[#8B2F1D] text-sm tracking-[0.2em] uppercase font-mono">SECTION 01 — PRACTICES</span>
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white leading-tight max-w-xl">
          Specialised investigation, handled discreetly
        </h2>
      </div>
      <div data-animate className="flex items-center gap-3">
        <p className="text-gray-600 dark:text-zinc-400 max-w-sm text-lg font-light leading-relaxed">
          Four core practices, each led by vetted field investigators.
        </p>
      </div>
    </div>

    <div className="relative z-10 mt-10">
      {practiceItems.map((item, index) => (
        <div key={item.id} data-animate data-delay={index * 120} className={`grid grid-cols-12 gap-8 items-center py-10 ${index < practiceItems.length - 1 ? 'border-b border-[#d1cec3] dark:border-zinc-800' : ''} group`}>
          <div className="col-span-12 md:col-span-1 flex items-center justify-start md:justify-center">
            <span className="text-[#8B2F1D] text-sm tracking-widest uppercase font-mono">{item.id}</span>
          </div>
          <div className="col-span-12 md:col-span-2 hidden md:flex items-center justify-center">
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-28 h-20 object-cover border border-[#d1cec3] dark:border-zinc-800 grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="col-span-12 md:col-span-8 flex flex-col items-start gap-3">
            <h3 className="text-2xl font-serif text-gray-900 dark:text-white group-hover:text-[#96762a] dark:group-hover:text-[#D4AA6A] transition-colors">{item.title}</h3>
            <p className="text-gray-600 dark:text-zinc-400 text-base font-light leading-relaxed">{item.description}</p>
          </div>
          <div className="col-span-12 md:col-span-1 flex items-center justify-end md:justify-center">
            <span className="text-[#7F2F1D] text-xl group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const WhyVeritySection: React.FC = () => (
  <section className="bg-[#eeeade] dark:bg-[#121212] py-32 px-10 md:px-20 lg:px-40 relative transition-colors duration-300">
     <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
     
    <div data-animate className="relative z-10 flex flex-col items-start gap-4 pb-12 mb-16">
        <span className="text-[#8B2F1D] text-sm tracking-[0.2em] uppercase font-mono">SECTION 02 — WHY VERITY</span>
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white leading-tight max-w-xl">
          A partner you can trust with the truth
        </h2>
    </div>

    <div className="relative z-10 border border-[#d1cec3] dark:border-zinc-800 bg-[#f4f1eb] dark:bg-[#141414] rounded-lg shadow-inner grid grid-cols-1 md:grid-cols-3 divide-x divide-[#d1cec3] dark:divide-zinc-800">
      {whyVerityItems.map((item, index) => (
        <div key={item.id} data-animate data-delay={index * 150} className={`flex flex-col items-start gap-6 p-10 ${index === whyVerityItems.length - 1 ? 'md:border-none' : ''}`}>
           <span className="text-[#96762a] dark:text-[#D4AA6A] text-sm tracking-[0.1em] uppercase font-mono">{item.id}</span>
           <h3 className="text-2xl font-serif text-gray-900 dark:text-white">{item.title}</h3>
           <p className="text-gray-600 dark:text-zinc-400 text-base font-light leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

const ContactSection: React.FC = () => (
  <section className="bg-[#7F2F1D] py-24 px-10 md:px-20 lg:px-40 relative">
    <img
      src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=1920&q=60"
      alt=""
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-[#7F2F1D]/90"></div>
    <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
    
    <div className="relative z-10 grid grid-cols-12 gap-8 items-center">
      <div data-animate="fade-left" className="col-span-12 md:col-span-8 flex flex-col items-start gap-4">
        <span className="text-zinc-300 text-sm tracking-[0.2em] uppercase font-mono">CONFIDENTIAL ENQUIRY</span>
        <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight max-w-2xl">
          Need discreet help? Contact us securely today.
        </h2>
      </div>
      <div className="col-span-12 md:col-span-4 flex items-center justify-end">
         <div data-animate="fade-right" className="bg-[#fbf9f5] dark:bg-[#1A1A1A] text-gray-800 dark:text-zinc-300 text-sm tracking-widest uppercase font-semibold p-6 flex items-center gap-3 border border-zinc-700 hover:border-zinc-500 cursor-pointer">
            CONTACT US SECURELY
            <span className="text-zinc-500 group-hover:translate-x-1 transition-transform">→</span>
          </div>
      </div>
    </div>
  </section>
);

// --- Main Page Component ---

const InvestigativeServicesPage: React.FC = () => {
  return (
    <div className="font-sans antialiased bg-[#eeeade] dark:bg-[#111111] min-h-screen text-gray-700 dark:text-zinc-200 transition-colors duration-300">
      <HeroSection />
      <StatsSection />
      <PracticesSection />
      <WhyVeritySection />
      <ContactSection />
    </div>
  );
};

export default InvestigativeServicesPage;