import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT', to: '/about' },
  { label: 'SERVICES', to: '/services' },
  { label: 'CASES', to: '/cases' },
  { label: 'CONTACT', to: '/contact' },
];

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <nav className="w-full bg-[#eeeade] dark:bg-[#12110e] px-12 py-5 flex items-center justify-between border-b border-[#d1cec3] dark:border-[#23211c] transition-colors duration-300">

      {/* Logo Section */}
      <Link to="/" className="flex items-baseline space-x-3 cursor-pointer">
        <span className="text-3xl font-serif text-gray-900 dark:text-[#f2ecda]">Verity</span>
        <span className="text-xs tracking-[0.25em] text-[#9b2a2a] font-medium uppercase">
          Investigations
        </span>
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center space-x-10 text-[13px] tracking-[0.15em] font-semibold">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? 'text-gray-900 hover:text-black dark:text-[#f2ecda] dark:hover:text-white transition-colors'
                  : 'text-[#88806c] hover:text-gray-900 dark:hover:text-[#f2ecda] transition-colors'
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Call to Action Button + Theme Toggle */}
      <div className="flex items-center gap-4">
        <Link
          to="/contact"
          className="hidden sm:flex items-center space-x-2 border border-[#9b2a2a] px-6 py-2.5 text-[13px] tracking-[0.1em] font-medium text-gray-900 dark:text-[#f2ecda] hover:bg-[#9b2a2a] hover:text-white dark:hover:text-white transition-all duration-300"
        >
          <span>GET CONSULTATION</span>
          <span className="text-lg leading-none mb-0.5">&rarr;</span>
        </Link>

        {/* Dark / Light Mode Toggle */}
        <button
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          className="p-2.5 border border-[#d1cec3] dark:border-[#3a372f] text-gray-900 dark:text-[#f2ecda] hover:border-[#9b2a2a] dark:hover:border-[#9b2a2a] transition-colors duration-300"
        >
          {theme === 'dark' ? (
            /* Sun icon — click to go light */
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5m0 15V21m9-9h-1.5M4.5 12H3m15.36-6.36l-1.06 1.06M6.7 17.3l-1.06 1.06m12.72 0l-1.06-1.06M6.7 6.7L5.64 5.64M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          ) : (
            /* Moon icon — click to go dark */
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </button>
      </div>

    </nav>
  );
};

export default Navbar;
