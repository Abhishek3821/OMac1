import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#eeeade] dark:bg-[#151514] text-gray-700 dark:text-gray-300 px-6 py-16 md:py-20 font-serif border-t border-[#d1cec3] dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Logo & About (Takes up 4 columns on large screens) */}
          <div data-animate data-delay="0" className="lg:col-span-4 lg:pr-8">
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">Verity</span>
              <span className="text-[#a63c32] uppercase tracking-[0.2em] text-xs font-sans font-semibold">
                Investigations
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              India's premier licensed agency for corporate and private investigations. 
              Discreet, ethical, and legally admissible from first contact to final report.
            </p>
          </div>

          {/* Quick Links (Takes up 2 columns) */}
          <div data-animate data-delay="100" className="lg:col-span-2">
            <h4 className="text-[#96762a] dark:text-[#c29b46] uppercase tracking-[0.15em] text-xs font-sans font-semibold mb-8">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300">Services</Link>
              </li>
              <li>
                <Link to="/sample-reports" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300">Sample Reports</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services (Takes up 3 columns) */}
          <div data-animate data-delay="200" className="lg:col-span-3">
            <h4 className="text-[#96762a] dark:text-[#c29b46] uppercase tracking-[0.15em] text-xs font-sans font-semibold mb-8">
              Services
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/services/corporate-investigations" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300">Corporate Investigations</Link>
              </li>
              <li>
                <Link to="/services/background-verification" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300">Background Verification</Link>
              </li>
              <li>
                <Link to="/services/private-investigations" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300">Private Investigations</Link>
              </li>
              <li>
                <Link to="/services/matrimonial-investigations" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300">Matrimonial & Divorce</Link>
              </li>
            </ul>
          </div>

          {/* Contact (Takes up 3 columns) */}
          <div data-animate data-delay="300" className="lg:col-span-3">
            <h4 className="text-[#96762a] dark:text-[#c29b46] uppercase tracking-[0.15em] text-xs font-sans font-semibold mb-8">
              Contact
            </h4>
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Level 9, Meridian Tower, BKC,<br />
                Mumbai 400051, India
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-mono text-sm tracking-wider">
                +91 22 4000 8899
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-mono text-sm">
                <a href="mailto:secure@verityinvestigations.com" className="hover:text-black dark:hover:text-white transition-colors duration-300">
                  secure@verityinvestigations.com
                </a>
              </p>
            </div>
          </div>
          
        </div>

        {/* Disclaimer Section */}
        <div data-animate="fade" className="border-t border-[#d1cec3] dark:border-gray-800/80 pt-8 pb-8">
          <p className="text-gray-500 dark:text-[#8c8a85] text-sm leading-relaxed max-w-5xl">
            <span className="text-gray-600 dark:text-gray-400">Confidentiality Disclaimer.</span> All communications with Verity Investigations 
            are treated as strictly confidential. Our services are provided in full compliance with applicable Indian law. 
            We do not undertake any assignment that is unlawful or that infringes upon the legal rights or privacy of any individual.
          </p>
        </div>

        {/* Bottom Copyright Section */}
        <div data-animate="fade" className="border-t border-[#d1cec3] dark:border-gray-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-gray-500 dark:text-[#8c8a85]">
            © 2026 Verity Investigations Pvt. Ltd. All rights reserved.
          </p>
          <p className="font-mono text-xs text-gray-500 dark:text-[#8c8a85]">
            Licensed Private Investigation Agency
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;