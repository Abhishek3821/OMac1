import React, { useState } from 'react';

// Reusable component for the clickable redacted text
const RedactedText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <span
      onClick={() => setIsRevealed(true)}
      className={`inline-block transition-all duration-300 cursor-pointer ${
        isRevealed
          ? 'bg-[#e2dfd5] dark:bg-zinc-700 text-gray-900 dark:text-white px-1 rounded-sm'
          : 'bg-[#161513] text-transparent hover:bg-gray-800 selection:bg-transparent dark:bg-black dark:hover:bg-zinc-900'
      }`}
      title={isRevealed ? "" : "Click to reveal"}
    >
      {children}
    </span>
  );
};

// Data structure for the cases
const caseFiles = [
  {
    id: 'PI-152',
    meta: 'Pune · Asset & Surveillance',
    title: 'Asset concealment, ongoing divorce proceeding',
    content: (
      <>
        <p>
          Counsel representing a client in a Pune divorce proceeding requested verification of{' '}
          <RedactedText>a portfolio of real estate holding companies</RedactedText>, which appeared understated relative to visible lifestyle.
        </p>
        <p>
          Investigation traced{' '}
          <RedactedText>hidden accounts in Mauritius and Singapore</RedactedText>, later submitted as evidence in the proceeding.
        </p>
      </>
    )
  },
  {
    id: 'BGV-311',
    meta: 'Hyderabad · Pharma',
    title: 'Fabricated pharmacy degree, QA hire',
    content: (
      <>
        <p>
          A pharma manufacturing client requested BGV on a shortlisted{' '}
          <RedactedText>Quality Assurance Manager candidate</RedactedText>.
        </p>
        <p>
          Direct verification with the issuing institution found{' '}
          <RedactedText>no record of the candidate ever attending</RedactedText>. The client escalated to a formal rejection with documentation on file.
        </p>
      </>
    )
  },
  {
    id: 'CI-276',
    meta: 'Kolkata · D2C Retail',
    title: 'Inventory shrinkage, warehouse operations',
    content: (
      <>
        <p>
          A D2C retail brand's Kolkata warehouse was running{' '}
          <RedactedText>unexplained inventory deficits of up to 14%</RedactedText>, with no clear internal explanation.
        </p>
        <p>
          Covert field placement and stock-movement audit identified{' '}
          <RedactedText>systematic theft by night-shift supervisors</RedactedText>. Findings supported termination and recovery action.
        </p>
      </>
    )
  }
];

const CaseFilesSection: React.FC = () => {
  return (
    <section className="w-full">
      {/* Top Section - Dark Header with Grid (Replacing the light header) */}
      <div 
        className="relative bg-[#e7e2d3] dark:bg-[#161513] text-gray-900 dark:text-white py-24 md:py-32 px-6 md:px-16 lg:px-32 transition-colors duration-300"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      >
        <div className="max-w-6xl mx-auto">
         
          <h1 data-animate className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-8">
            Selected engagements,<br className="hidden md:block" />
            <span className="italic text-[#96762a] dark:text-[#c69f44]">declassified.</span>
          </h1>
          <p data-animate data-delay="150" className="font-serif text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed">
            Click a redacted line to reveal it. Details below are composite, anonymised 
            accounts drawn from patterns typical of this work — client names, 
            companies, and identifying facts have been altered or withheld to 
            preserve confidentiality.
          </p>
        </div>
      </div>

      {/* Bottom Section - Case Files List */}
      <div className="bg-[#eeeade] dark:bg-[#1a1917] py-16 md:py-24 px-6 md:px-16 lg:px-32 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col">
            
            {/* Case List Mapping */}
            {caseFiles.map((caseFile, index) => (
              <div
                key={caseFile.id}
                data-animate
                data-delay={index * 120}
                className="flex flex-col md:flex-row items-start py-10 md:py-14 border-b border-[#d1cec3] dark:border-zinc-800"
              >
                {/* Left Column - Meta */}
                <div className="w-full md:w-56 shrink-0 mb-6 md:mb-0 md:pr-8">
                  <h3 className="font-sans font-bold text-gray-900 dark:text-gray-100 text-lg mb-2">
                    {caseFile.id}
                  </h3>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-gray-500 dark:text-zinc-500 uppercase leading-relaxed">
                    {caseFile.meta}
                  </p>
                </div>

                {/* Right Column - Content */}
                <div className="flex-1">
                  <h4 className="font-serif text-xl md:text-2xl text-gray-900 dark:text-gray-100 font-bold mb-6">
                    {caseFile.title}
                  </h4>
                  
                  <div className="font-serif text-gray-800 dark:text-gray-200 text-[1.05rem] leading-loose space-y-6">
                    {caseFile.content}
                  </div>

                  <p className="font-mono text-[10px] tracking-[0.2em] text-[#a4362d] uppercase mt-8">
                    Tap redacted text to reveal
                  </p>
                </div>
              </div>
            ))}

          </div>

          {/* Footer Note */}
          <div data-animate="fade" className="mt-12 max-w-3xl">
            <p className="font-sans text-sm text-gray-500 dark:text-zinc-500 leading-relaxed">
              Note: All case details above are illustrative composites built from recurring patterns across 
              this line of work, not verbatim client files. No real names, companies, or case numbers are 
              used. Actual engagement details are shared with prospective clients under a signed 
              confidentiality agreement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseFilesSection;