import React, { FormEvent, useState } from 'react';

const ContactSection: React.FC = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '', website: '' });
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Unable to send your enquiry.');
      setStatus({ type: 'success', message: result.message });
      setForm({ name: '', phone: '', email: '', service: '', message: '', website: '' });
    } catch (error) {
      setStatus({ type: 'error', message: error instanceof Error ? error.message : 'Unable to send your enquiry.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full">
      {/* Top Section - Dark Header with Grid */}
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
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=60"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#e7e2d3]/90 dark:bg-[#161513]/85"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <p data-animate="fade" className="text-[#a4362d] font-mono text-xs tracking-[0.25em] uppercase mb-8">
            Secure Channel — Contact
          </p>
          <h1 data-animate className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
            Request a <span className="italic text-[#96762a] dark:text-[#c69f44]">confidential</span><br className="hidden md:block" />
            {' '}consultation
          </h1>
          <p data-animate data-delay="150" className="font-serif text-gray-700 dark:text-gray-300 text-lg max-w-xl leading-relaxed">
            Reach out securely. A senior investigator will respond within one business day.
          </p>
        </div>
      </div>

      {/* Bottom Section - Form & Info */}
      <div className="bg-[#eeeade] dark:bg-[#1a1917] py-16 md:py-24 px-6 md:px-16 lg:px-32 transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-12">
          
          {/* Left Column - Form */}
          <div data-animate="fade-left" className="flex-1 bg-[#fbf9f5] dark:bg-[#1e1d1a] border border-[#e2dfd5] dark:border-zinc-800 p-8 md:p-12 transition-colors duration-300">
            <div className="mb-10">
              <h2 className="text-[#a4362d] font-mono text-xs tracking-[0.25em] uppercase mb-3">
                Secure Enquiry Form
              </h2>
              <p className="font-serif text-gray-600 dark:text-gray-400">
                All fields are transmitted over an encrypted connection.
              </p>
            </div>

            <form className="space-y-10" onSubmit={handleSubmit}>
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={updateField('website')}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Full Name */}
                <div className="flex flex-col">
                  <label className="text-gray-900 dark:text-gray-100 font-mono text-[10px] font-bold tracking-widest uppercase mb-2">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    value={form.name}
                    onChange={updateField('name')}
                    required
                    className="w-full border-b border-gray-300 dark:border-zinc-600 bg-transparent py-2 font-serif text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:border-[#a4362d] transition-colors"
                  />
                </div>
                {/* Phone */}
                <div className="flex flex-col">
                  <label className="text-gray-900 dark:text-gray-100 font-mono text-[10px] font-bold tracking-widest uppercase mb-2">
                    Phone
                  </label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000" 
                    value={form.phone}
                    onChange={updateField('phone')}
                    required
                    className="w-full border-b border-gray-300 dark:border-zinc-600 bg-transparent py-2 font-serif text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:border-[#a4362d] transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-gray-900 dark:text-gray-100 font-mono text-[10px] font-bold tracking-widest uppercase mb-2">
                  Email
                </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={updateField('email')}
                    required
                  className="w-full border-b border-gray-300 dark:border-zinc-600 bg-transparent py-2 font-serif text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:border-[#a4362d] transition-colors"
                />
              </div>

              {/* Service Required */}
              <div className="flex flex-col">
                <label className="text-gray-900 dark:text-gray-100 font-mono text-[10px] font-bold tracking-widest uppercase mb-2">
                  Service Required
                </label>
                <select value={form.service} onChange={updateField('service')} required className="w-full border-b border-gray-300 dark:border-zinc-600 bg-transparent py-2 font-serif text-gray-800 dark:text-gray-200 focus:outline-none focus:border-[#a4362d] transition-colors appearance-none cursor-pointer">
                  <option value="" disabled>Select a service..</option>
                  <option value="corporate">Corporate Investigations</option>
                  <option value="background">Background Verification</option>
                  <option value="private">Private Investigations</option>
                  <option value="matrimonial">Matrimonial & Divorce</option>
                </select>
                {/* Custom select arrow can be positioned over the select if needed, handled via appearance-none */}
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="text-gray-900 dark:text-gray-100 font-mono text-[10px] font-bold tracking-widest uppercase mb-2">
                  Message
                </label>
                <textarea 
                  rows={3}
                  placeholder="Briefly describe your situation. Do not include sensitive personal identifiers here." 
                  value={form.message}
                  onChange={updateField('message')}
                  required
                  className="w-full border-b border-gray-300 dark:border-zinc-600 bg-transparent py-2 font-serif text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:border-[#a4362d] transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#a4362d] hover:bg-[#8b2d24] disabled:cursor-not-allowed disabled:opacity-60 text-white font-mono text-xs tracking-[0.2em] uppercase py-5 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : <>Send Secure Enquiry <span className="text-lg leading-none">&rarr;</span></>}
              </button>

              {status && (
                <p role="status" className={`text-center font-serif text-sm ${status.type === 'success' ? 'text-green-700 dark:text-green-400' : 'text-[#a4362d]'}`}>
                  {status.message}
                </p>
              )}

              {/* Footer Note */}
              <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-zinc-500 mt-6">
                <svg className="w-3 h-3 text-[#c69f44]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="font-mono text-[10px] tracking-wider uppercase">
                  Your information is encrypted and strictly confidential.
                </span>
              </div>
            </form>
          </div>

          {/* Right Column - Info Blocks */}
          <div className="lg:w-[400px] shrink-0 flex flex-col gap-8">
            
            {/* Dark Info Box */}
            <div data-animate="fade-right" data-delay="150" className="bg-[#e7e2d3] dark:bg-[#161513] p-10 text-gray-900 dark:text-white transition-colors duration-300">
              <h3 className="text-[#96762a] dark:text-[#c69f44] font-mono text-xs tracking-[0.25em] uppercase mb-10">
                Reach Us Securely
              </h3>
              
              <div className="space-y-8">
                {/* Head Office */}
                <div>
                  <p className="text-gray-600 dark:text-gray-400 font-mono text-[10px] tracking-widest uppercase mb-3">
                    Head Office
                  </p>
                  <p className="font-serif text-gray-800 dark:text-gray-200 leading-relaxed">
                    2733, 3rd Floor, 16th Cross Road,<br />
                    27th Main Road, 1st Sector,<br />
                    HSR Layout, Bengaluru,<br />
                    Karnataka 560102, India
                  </p>
                </div>
                
                <hr className="border-[#d1cec3] dark:border-gray-800" />
                
                {/* Helpline */}
                <div>
                  <p className="text-gray-600 dark:text-gray-400 font-mono text-[10px] tracking-widest uppercase mb-3">
                    24/7 Helpline
                  </p>
                  <a href="tel:+918116645359" className="font-serif text-2xl text-gray-800 dark:text-gray-200 hover:text-[#96762a] dark:hover:text-[#c69f44] transition-colors">
                    +91 81166 45359
                  </a>
                </div>
                
                <hr className="border-[#d1cec3] dark:border-gray-800" />
                
                {/* Email */}
                <div>
                  <p className="text-gray-600 dark:text-gray-400 font-mono text-[10px] tracking-widest uppercase mb-3">
                    Encrypted Email
                  </p>
                  <a href="mailto:ceo@omacinvestigations.com" className="font-mono text-sm text-gray-800 dark:text-gray-200 hover:text-[#96762a] dark:hover:text-[#c69f44] transition-colors break-all">
                    ceo@omacinvestigations.com
                  </a>
                </div>
              </div>
            </div>

            {/* Privacy Notice Box */}
            <div data-animate="fade-right" data-delay="300" className="border border-[#a4362d] bg-[#fbf9f5] dark:bg-[#1e1d1a] p-8 transition-colors duration-300">
              <h4 className="text-[#a4362d] font-mono text-[10px] font-bold tracking-widest uppercase mb-4">
                Privacy Notice
              </h4>
              <p className="font-serif text-gray-800 dark:text-gray-200 leading-relaxed text-sm">
                Your information is encrypted and strictly confidential. We never share client details with third parties.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
