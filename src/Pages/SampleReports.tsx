import React, { useState } from 'react';

// --- Types ---

interface SampleReport {
  code: string;
  title: string;
  group: string;
  fields: [string, string][];
  scope: string;
  methodology: string[];
  findings: string[];
  conclusion: string;
}

const DISCLAIMER =
  'SAMPLE REPORT — FOR ILLUSTRATION ONLY. NOT AN ACTUAL CASE FILE. ALL NAMES, ENTITIES AND DETAILS ARE FICTIONAL.';

// --- Report data (verbatim catalogue content) ---

const reports: SampleReport[] = [
  {
    code: 'BGV-B-2201',
    title: 'Background Verification — Basic Package',
    group: 'Background Verification',
    fields: [
      ['Service Line', 'BGV — Basic (ID + Address + Education)'],
      ['Client Type', 'Mid-sized retail company, Bengaluru'],
      ['Candidate', 'Candidate A (Store Associate role)'],
      ['Engagement Fee', '₹599 per candidate'],
      ['Turnaround', '4 business days'],
    ],
    scope:
      'Verify identity, current residential address, and highest claimed educational qualification for a shortlisted candidate ahead of offer confirmation.',
    methodology: [
      'Identity cross-checked against Aadhaar and PAN records.',
      'Residential address confirmed via field visit; photo and neighbour corroboration recorded.',
      "Highest qualification verified directly with the issuing institution's records office.",
    ],
    findings: [
      'Identity: Confirmed. Name, DOB, and photograph match submitted Aadhaar and PAN.',
      'Address: Confirmed. Candidate resident at declared address for 3+ years per landlord and neighbour statements.',
      'Education: Confirmed. B.Com degree verified directly with issuing college; certificate number matches institutional records.',
    ],
    conclusion:
      'No discrepancies identified across the three checks in scope. Candidate cleared at Basic package depth.',
  },
  {
    code: 'BGV-S-2214',
    title: 'Background Verification — Standard Package',
    group: 'Background Verification',
    fields: [
      ['Service Line', 'BGV — Standard (+2 Employment + Court)'],
      ['Client Type', 'IT services company, Bengaluru'],
      ['Candidate', 'Candidate B (Assistant Manager, Operations)'],
      ['Engagement Fee', '₹1,299 per candidate'],
      ['Turnaround', '9 business days'],
    ],
    scope:
      "Verify identity, address, education, and the two most recent employments; screen for pending court records at the candidate's declared addresses.",
    methodology: [
      'Identity, address, and education verified as per Basic package protocol.',
      'Previous employer (Company X Pvt Ltd) and current employer (Company Y Solutions) contacted directly via HR for tenure and role confirmation.',
      'District court record check run against declared address history.',
    ],
    findings: [
      'Identity, address, education: Confirmed, no discrepancies.',
      "Employment — Company Y Solutions: Confirmed. Dates and designation match candidate's declaration.",
      'Employment — Company X Pvt Ltd: Discrepancy noted. Candidate declared 3 years 2 months tenure; employer HR confirmed 2 years 4 months, with an 8-month gap unaccounted for.',
      'Court record check: No pending criminal or civil cases found against declared addresses.',
    ],
    conclusion:
      'One material discrepancy flagged (employment tenure gap). Recommend client raise the gap directly with the candidate before finalising the offer; not an automatic disqualifier but requires explanation on file.',
  },
  {
    code: 'BGV-C-2233',
    title: 'Background Verification — Comprehensive Package',
    group: 'Background Verification',
    fields: [
      ['Service Line', 'BGV — Comprehensive (+Criminal DB + References)'],
      ['Client Type', 'NBFC, Mumbai'],
      ['Candidate', 'Candidate C (Senior Manager, Credit Risk)'],
      ['Engagement Fee', '₹2,199 per candidate'],
      ['Turnaround', '13 business days'],
    ],
    scope:
      'Full-depth verification for a senior, fiduciary-responsibility role: identity, address, education, employment history (3 employers), criminal database screening, and reference checks with two former managers.',
    methodology: [
      'Identity, address, education, and employment verified per Standard package protocol, extended to 3 employers.',
      'Pan-India criminal record database screen conducted, cross-referenced against e-FIR portals for declared address history.',
      'Structured reference calls conducted with two former reporting managers, using a standard competency and integrity questionnaire.',
    ],
    findings: [
      'Identity, address, education: Confirmed.',
      'Employment (3 employers): Confirmed across all three; tenures and designations match declarations.',
      "Criminal database screen: No records found under candidate's name, DOB, and address combinations checked.",
      'Reference checks: Both former managers independently corroborated strong performance; one manager noted a prior verbal warning for a compliance-documentation lapse, resolved without escalation.',
    ],
    conclusion:
      "No disqualifying findings. One minor, resolved integrity note from reference check is included for the client's own risk assessment, not as a recommendation either way.",
  },
  {
    code: 'CI-PA-1187',
    title: 'Corporate Investigation — Preliminary Assessment',
    group: 'Corporate Investigation',
    fields: [
      ['Service Line', 'CI — Preliminary Assessment'],
      ['Client Type', 'D2C consumer brand, Pune'],
      ['Matter', 'Suspected inventory shrinkage, single warehouse'],
      ['Engagement Fee', '₹15,000 flat (creditable against full engagement)'],
      ['Turnaround', '5 business days'],
    ],
    scope:
      'Initial scoping call and desk-level risk read on reported shrinkage pattern, to determine whether a full engagement is warranted and what it should cover.',
    methodology: [
      'Review of client-supplied shrinkage and dispatch reconciliation data for the preceding 4 months.',
      'Informal walkthrough of warehouse access logs and shift rosters (no field placement at this stage).',
      'Risk-pattern comparison against known shrinkage typologies (internal collusion, logistics-partner diversion, documentation manipulation).',
    ],
    findings: [
      'Shrinkage pattern (timing, SKU concentration, shift correlation) is consistent with a collusion typology rather than random pilferage.',
      'Access logs show two personnel with overlapping shift presence during all flagged shrinkage windows.',
      'Data available at this stage is insufficient to confirm cause; a field-based investigation is required to establish evidence.',
    ],
    conclusion:
      'Recommend proceeding to a Standard Engagement (single site) with covert field placement and stock-movement audit. This ₹15,000 fee is creditable against that engagement if the client proceeds within 30 days.',
  },
  {
    code: 'CI-SE-1204',
    title: 'Corporate Investigation — Standard Engagement',
    group: 'Corporate Investigation',
    fields: [
      ['Service Line', 'CI — Standard Engagement (single site, <30 days)'],
      ['Client Type', 'D2C consumer brand, Pune (continuation of CI-PA-1187)'],
      ['Matter', 'Warehouse inventory shrinkage — full investigation'],
      ['Engagement Fee', '₹65,000 (from)'],
      ['Duration', '22 days'],
    ],
    scope:
      'Establish cause of shrinkage identified in preliminary assessment; identify responsible parties; produce evidence usable for disciplinary or legal action.',
    methodology: [
      'Covert field placement of one investigator within warehouse operations for 3 weeks.',
      'Stock-movement audit cross-referencing dispatch manifests against physical counts, shift-by-shift.',
      'Surveillance of two flagged personnel during and outside working hours.',
    ],
    findings: [
      "Confirmed collusion between a shift supervisor and an outbound logistics partner's driver, diverting stock prior to dispatch reconciliation.",
      'Estimated value of diverted stock over the review period: approximately ₹6.8 lakh.',
      'Pattern of diversion concentrated on high-value SKUs during the night shift, timed to reconciliation blind spots in the manifest process.',
    ],
    conclusion:
      'Findings, timestamped photographic evidence, and a full stock-movement audit trail delivered to client legal and HR for disciplinary and recovery action. Recommend a manifest-reconciliation process change to close the identified blind spot.',
  },
  {
    code: 'CI-CX-1256',
    title: 'Corporate Investigation — Complex / Multi-site Engagement',
    group: 'Corporate Investigation',
    fields: [
      ['Service Line', 'CI — Complex / Multi-site Engagement'],
      ['Client Type', 'NBFC, multi-city branch network'],
      ['Matter', 'Suspected vendor kickback scheme across 3 branches'],
      ['Engagement Fee', '₹1,50,000 (from; final quote custom-scoped)'],
      ['Duration', '9 weeks'],
    ],
    scope:
      'Investigate suspected coordinated procurement fraud across three branch locations (Mumbai, Pune, Nashik), involving multiple vendors and at least one regional procurement manager.',
    methodology: [
      'Financial trail analysis across vendor payment records for all three branches, 18-month lookback.',
      'Field surveillance on the regional procurement manager and two flagged vendor principals.',
      'Shell-entity registration checks run against vendor company details (MCA records, registered address verification).',
    ],
    findings: [
      "Identified a shell vendor entity registered at a residential address linked to the regional manager's relative, active across all three branches.",
      'Kickback arrangement estimated at ₹41 lakh over 18 months, structured as inflated invoicing on IT hardware and facility procurement.',
      'Pattern replicated with a second, smaller shell entity at the Nashik branch, suggesting the scheme was being scaled.',
    ],
    conclusion:
      'Full financial trail, MCA filings, and surveillance evidence delivered to client legal for disciplinary action and potential criminal complaint. Recommend a procurement-vendor onboarding audit across all branches, not just the three investigated.',
  },
  {
    code: 'PI-AT-0871',
    title: 'Private Investigation — Asset Trace / Individual Verification',
    group: 'Private Investigation',
    fields: [
      ['Service Line', 'PI — Asset Trace / Individual Verification'],
      ['Client Type', 'Individual, via referring counsel'],
      ['Matter', "Verification of counterparty's declared financial standing before a personal loan agreement"],
      ['Engagement Fee', '₹22,000 (from)'],
      ['Duration', '11 days'],
    ],
    scope:
      "Verify subject's declared assets, employment, and financial standing before client extends a personal loan of ₹15 lakh.",
    methodology: [
      "Property records search against subject's declared address and stated ownership claims.",
      'Employment and income verification via field visit to declared workplace.',
      'Public records check for existing loans, defaults, or litigation involving the subject.',
    ],
    findings: [
      "Declared residential property: Confirmed under subject's name, no encumbrances found on record.",
      "Declared second asset (commercial unit): Not found under subject's name in municipal records; property appears to belong to an unrelated third party.",
      'One unresolved civil recovery suit found against the subject, filed by a separate private lender, currently pending.',
    ],
    conclusion:
      'Material discrepancy identified in declared assets, plus an undisclosed pending recovery suit. Client advised to reassess loan terms and collateral requirements before proceeding.',
  },
  {
    code: 'PI-SV-0902',
    title: 'Private Investigation — Surveillance',
    group: 'Private Investigation',
    fields: [
      ['Service Line', 'PI — Surveillance (single investigator / 2-investigator team)'],
      ['Client Type', 'Individual'],
      ['Matter', "Verification of subject's stated daily routine and workplace attendance"],
      ['Engagement Fee', '₹5,000/day (single) or ₹8,500/day (2-investigator team); minimum 3 days'],
      ['Duration', '4 days, single investigator'],
    ],
    scope:
      "Confirm subject's day-to-day movements, declared workplace attendance, and any undisclosed regular contacts or locations, over a 4-day surveillance window.",
    methodology: [
      "Static and mobile surveillance conducted across all 4 days, covering subject's declared work hours and evening movements.",
      'Timestamped photographic log maintained at each location change.',
      'Vehicle and location tracking logged only where subject was on public roads or premises, in compliance with lawful surveillance practice.',
    ],
    findings: [
      "Day 1–2: Subject's movements matched declared routine — workplace arrival/departure consistent with stated hours.",
      'Day 3: Subject did not attend declared workplace; spent approximately 5 hours at an undisclosed private residence.',
      'Day 4: Movements again matched declared routine.',
    ],
    conclusion:
      "One deviation from declared routine documented with timestamped evidence (Day 3). Full surveillance log and photographic record delivered to client for their own assessment; no interpretation of the deviation's cause is offered in the report.",
  },
  {
    code: 'MI-PM-0451',
    title: 'Matrimonial Investigation — Pre-Matrimonial (Standard)',
    group: 'Matrimonial Investigation',
    fields: [
      ['Service Line', 'MI — Pre-matrimonial, Standard'],
      ['Client Type', 'Family, Delhi NCR'],
      ['Subject', 'Prospective groom, proposed alliance'],
      ['Engagement Fee', '₹28,000'],
      ['Duration', '12 days'],
    ],
    scope:
      "Verify subject's employment, family background, and general reputation ahead of a proposed marriage alliance.",
    methodology: [
      "Employment verified directly with declared employer's HR department.",
      "Field visit to subject's declared residential locality; neighbour and community-source conversations conducted discreetly.",
      "Basic marital-status record check (no prior marriage registration found under subject's name in the searched jurisdictions).",
    ],
    findings: [
      'Employment: Confirmed. Subject employed as declared, 3 years 4 months tenure, designation matches.',
      'Family background: Consistent with declarations; no adverse information from community sources.',
      'Marital status: No prior marriage registration found in the jurisdictions searched.',
    ],
    conclusion:
      'No adverse findings within the Standard package scope. Family may wish to consider a Comprehensive check if financial standing or a wider jurisdictional marital-record search is a specific concern.',
  },
  {
    code: 'MI-PC-0468',
    title: 'Matrimonial Investigation — Pre-Matrimonial (Comprehensive)',
    group: 'Matrimonial Investigation',
    fields: [
      ['Service Line', 'MI — Pre-matrimonial, Comprehensive'],
      ['Client Type', 'Family, Delhi NCR'],
      ['Subject', 'Prospective groom, proposed alliance'],
      ['Engagement Fee', '₹48,000'],
      ['Duration', '19 days'],
    ],
    scope:
      'Standard package scope, extended to financial standing, multi-jurisdiction marital record search, and prior relationship history where discoverable through lawful means.',
    methodology: [
      'Standard package checks (employment, family background, single-jurisdiction marital search) completed as baseline.',
      'Financial standing assessed via declared asset cross-check and credit bureau consent-based pull.',
      "Marital record search extended to two additional states based on subject's stated prior residence history.",
    ],
    findings: [
      'Employment and family background: Confirmed, consistent with Standard package findings.',
      "Financial standing: Subject's declared income consistent with credit bureau data; no undisclosed active loans found.",
      'Extended marital record search: A prior marriage registration was located in a second state, dissolved by mutual consent decree 3 years prior. This was not disclosed by the subject or his family during the alliance discussion.',
    ],
    conclusion:
      'Material finding: undisclosed prior marriage, since legally dissolved. Report and supporting record extract delivered to the family to inform their decision; no recommendation is made on how to proceed.',
  },
  {
    code: 'MI-PS-0512',
    title: 'Matrimonial Investigation — Post-Matrimonial / Infidelity Surveillance',
    group: 'Matrimonial Investigation',
    fields: [
      ['Service Line', 'MI — Post-matrimonial / Infidelity Surveillance'],
      ['Client Type', 'Individual, Mumbai'],
      ['Subject', "Client's spouse"],
      ['Engagement Fee', '₹45,000 (from; duration-based, quoted after scoping call)'],
      ['Duration', '10 days'],
    ],
    scope:
      "Discreet surveillance of subject's movements and contacts to establish or rule out client's stated concerns regarding an undisclosed relationship.",
    methodology: [
      "Mobile and static surveillance conducted across 10 days, focused on subject's stated 'work travel' pattern flagged by client.",
      'Timestamped photographic and video log maintained at each location and contact observed.',
      "No access to subject's private communications, devices, or accounts — surveillance limited to observable public conduct.",
    ],
    findings: [
      "On 4 of 10 surveillance days, subject's declared 'office travel' did not correspond to any workplace visit; subject was tracked to a private residence in a different part of the city.",
      'Subject was observed on 3 occasions meeting the same individual at that residence and at two public locations.',
      'No conclusion is drawn in this report as to the nature of the relationship observed; findings are limited to documented conduct.',
    ],
    conclusion:
      'Evidence log, photographs, and timeline delivered to client. Client advised that findings of this nature are commonly used to inform, but not solely determine, next steps in matrimonial proceedings, and should be reviewed with legal counsel if pursued further.',
  },
  {
    code: 'MI-DE-0533',
    title: 'Matrimonial Investigation — Divorce Evidence / Asset Trace Support',
    group: 'Matrimonial Investigation',
    fields: [
      ['Service Line', 'MI — Divorce Evidence / Asset Trace Support'],
      ['Client Type', 'Individual, via referring counsel, Pune'],
      ['Matter', "Verification of opposing party's declared income and assets in ongoing divorce proceeding"],
      ['Engagement Fee', '₹40,000 (from)'],
      ['Duration', '16 days'],
    ],
    scope:
      "At referring counsel's request, verify opposing party's declared income and asset affidavit against visible lifestyle and available records, structured for potential submission as evidence.",
    methodology: [
      "Property records search across opposing party's name and immediate family members' names.",
      'Business registration check (MCA/GST records) for any undisclosed active business interests.',
      'Lifestyle-consistency review (vehicle registration, visible travel pattern) cross-referenced against declared income in the affidavit.',
    ],
    findings: [
      "One residential property located under the name of opposing party's sibling, purchased during the marriage period, with payment trail indicators suggesting opposing party as the actual funding source.",
      "An active proprietorship business, registered under GST, not disclosed in the affidavit's income statement.",
      'Declared income in affidavit is inconsistent with the value of two vehicle registrations and travel pattern observed during the review period.',
    ],
    conclusion:
      'Findings compiled with supporting documentation (property records, GST registration extract, vehicle registration records) in a format intended for review and potential submission by referring counsel. This office does not provide legal opinion on admissibility or next steps.',
  },
];

const groups = [
  'Background Verification',
  'Corporate Investigation',
  'Private Investigation',
  'Matrimonial Investigation',
];

// --- Report card (accordion item) ---

const ReportCard: React.FC<{
  report: SampleReport;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ report, isOpen, onToggle }) => (
  <div
    data-animate
    className="border border-[#d1cec3] dark:border-zinc-800 bg-[#fbf9f5] dark:bg-[#1e1d1a] transition-colors duration-300"
  >
    {/* Header row */}
    <button
      onClick={onToggle}
      className="w-full flex flex-col md:flex-row md:items-center justify-between gap-3 text-left px-6 md:px-8 py-6 group"
    >
      <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
        <span className="text-[#a4362d] font-mono text-sm tracking-widest">{report.code}</span>
        <span className="font-serif text-xl md:text-2xl text-gray-900 dark:text-gray-100 group-hover:text-[#96762a] dark:group-hover:text-[#c69f44] transition-colors">
          {report.title}
        </span>
      </div>
      <span
        className={`text-[#a4362d] text-xl shrink-0 transition-transform duration-300 ${
          isOpen ? 'rotate-90' : ''
        }`}
      >
        →
      </span>
    </button>

    {/* Expanded body */}
    {isOpen && (
      <div className="px-6 md:px-8 pb-8 border-t border-[#d1cec3] dark:border-zinc-800">
        <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#a4362d] mt-6 mb-6">
          {DISCLAIMER}
        </p>

        {/* Key-value fields */}
        <div className="border border-[#d1cec3] dark:border-zinc-800 mb-8">
          {report.fields.map(([label, value]) => (
            <div
              key={label}
              className="grid grid-cols-1 md:grid-cols-3 border-b last:border-b-0 border-[#d1cec3] dark:border-zinc-800"
            >
              <div className="px-4 py-3 font-mono text-xs tracking-widest uppercase text-gray-500 dark:text-zinc-500 bg-[#f4f1eb] dark:bg-[#1a1917]">
                {label}
              </div>
              <div className="px-4 py-3 md:col-span-2 font-serif text-gray-800 dark:text-gray-200">
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* Scope */}
        <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-[#96762a] dark:text-[#c69f44] mb-3">
          Scope of Engagement
        </h4>
        <p className="font-serif text-gray-800 dark:text-gray-200 leading-relaxed mb-8">{report.scope}</p>

        {/* Methodology */}
        <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-[#96762a] dark:text-[#c69f44] mb-3">
          Methodology
        </h4>
        <ul className="space-y-2 mb-8">
          {report.methodology.map((item, i) => (
            <li key={i} className="font-serif text-gray-800 dark:text-gray-200 leading-relaxed pl-5 relative">
              <span className="absolute left-0 text-[#a4362d]">•</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Findings */}
        <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-[#96762a] dark:text-[#c69f44] mb-3">
          Findings
        </h4>
        <ul className="space-y-2 mb-8">
          {report.findings.map((item, i) => (
            <li key={i} className="font-serif text-gray-800 dark:text-gray-200 leading-relaxed pl-5 relative">
              <span className="absolute left-0 text-[#a4362d]">•</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Conclusion */}
        <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-[#96762a] dark:text-[#c69f44] mb-3">
          Conclusion / Recommendation
        </h4>
        <p className="font-serif text-gray-800 dark:text-gray-200 leading-relaxed mb-8">{report.conclusion}</p>

        <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-gray-500 dark:text-zinc-500 border-t border-[#d1cec3] dark:border-zinc-800 pt-4">
          Confidential. Prepared by OMAC Investigations for the named client only. Not for circulation.
        </p>
      </div>
    )}
  </div>
);

// --- Page ---

const SampleReports: React.FC = () => {
  const [openCode, setOpenCode] = useState<string | null>(reports[0].code);

  return (
    <section className="w-full font-serif">
      {/* Hero */}
      <div
        className="relative bg-[#e7e2d3] dark:bg-[#161513] text-gray-900 dark:text-white py-24 md:py-32 px-6 md:px-16 lg:px-32 transition-colors duration-300"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1920&q=60"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#e7e2d3]/90 dark:bg-[#161513]/85"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <p data-animate="fade" className="text-[#a4362d] font-mono text-xs tracking-[0.25em] uppercase mb-8">
            OMAC Investigations — Sample Report Catalogue
          </p>
          <h1 data-animate className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
            Twelve formats. One{' '}
            <span className="italic text-[#96762a] dark:text-[#c69f44]">standard of evidence.</span>
          </h1>
          <p data-animate data-delay="150" className="font-serif text-gray-700 dark:text-gray-300 text-lg max-w-3xl leading-relaxed">
            Corresponding to OMAC Price List, line items 5–19. 12 illustrative reports, one per distinct
            service format. Bulk BGV pricing tiers (lines 8–9) use the same Standard-package report format
            shown here and are not duplicated.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="bg-[#eeeade] dark:bg-[#1a1917] py-16 md:py-24 px-6 md:px-16 lg:px-32 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          {/* Fictional-content disclaimer */}
          <div data-animate className="border border-[#a4362d] bg-[#fbf9f5] dark:bg-[#1e1d1a] p-6 md:p-8 mb-16">
            <p className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-[#a4362d] mb-4">
              {DISCLAIMER}
            </p>
            <p className="font-serif text-gray-800 dark:text-gray-200 leading-relaxed text-sm">
              Every subject name, company name, and case detail in this catalogue is fictional and
              constructed for illustration. No report in this document reproduces, references, or is derived
              from any real client engagement. Formats reflect how OMAC structures scope, method, findings,
              and conclusion sections in an actual deliverable.
            </p>
          </div>

          {/* Grouped report list */}
          {groups.map((group) => (
            <div key={group} className="mb-16">
              <h2
                data-animate
                className="font-mono text-xs tracking-[0.25em] uppercase text-[#96762a] dark:text-[#c69f44] border-b border-[#d1cec3] dark:border-zinc-800 pb-4 mb-8"
              >
                {group}
              </h2>
              <div className="space-y-6">
                {reports
                  .filter((r) => r.group === group)
                  .map((report) => (
                    <ReportCard
                      key={report.code}
                      report={report}
                      isOpen={openCode === report.code}
                      onToggle={() => setOpenCode(openCode === report.code ? null : report.code)}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SampleReports;
