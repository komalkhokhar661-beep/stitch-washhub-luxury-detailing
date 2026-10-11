import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [conciergeOpen, setConciergeOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer and concierge on route transition
  useEffect(() => {
    setMobileMenuOpen(false);
    setConciergeOpen(false);
  }, [location.pathname]);

  // Track scroll for enhanced glassmorphism header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Packages', path: '/packages' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact / Booking', path: '/contact-booking' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0d0e12]/95 backdrop-blur-2xl shadow-[0_4px_24px_rgba(0,0,0,0.6)] border-b border-white/5'
          : 'bg-[#0d0e12]/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.4)]'
      }`}
    >
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Brand Logo & Atelier Label */}
        <Link
          to="/"
          className="flex items-center gap-4 shrink-0 group focus:outline-none focus:ring-1 focus:ring-[#e2c399] rounded p-1"
          aria-label="WashHub Home"
        >
          {/* Custom SVG Brand Mark from Stitch */}
          <svg
            className="h-9 w-auto text-white transition-transform duration-300 group-hover:scale-105"
            viewBox="0 0 240 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 36L22 14H32L42 36H33.5L30.5 29H23.5L20.5 36H12ZM25 24H29L27 19.5L25 24Z"
              fill="#E3E2E8"
              fillOpacity="0.95"
            />
            <path d="M8 12L27 6L46 12L44 14L27 8.5L10 14L8 12Z" fill="#C5A880" />
            <text
              x="56"
              y="32"
              fontFamily="'Syne', 'Montserrat', sans-serif"
              fontWeight="800"
              fontSize="22"
              letterSpacing="3"
              fill="#FFFFFF"
            >
              WASH<tspan fill="#C5A880">HUB</tspan>
            </text>
            <text
              x="57"
              y="42"
              fontFamily="'Hanken Grotesk', sans-serif"
              fontWeight="500"
              fontSize="7.5"
              letterSpacing="4.5"
              fill="#9CA3AF"
            >
              STUDIO DETAILING
            </text>
            <circle cx="218" cy="24" r="2" fill="#C5A880" />
          </svg>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `text-[15px] tracking-wide transition-colors duration-200 focus:outline-none focus:underline ${
                  isActive
                    ? 'text-[#e2c399] font-medium tracking-wide'
                    : 'text-[#d1c5b8] hover:text-[#e3e2e8]'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Actions Cluster: Book Detailing CTA + Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact-booking"
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded bg-[#c5a880] text-[#402d0f] text-[13px] font-semibold tracking-wide uppercase transition-all duration-300 shadow-[0_0_24px_rgba(197,168,128,0.18)] hover:bg-[#e2c399] hover:text-[#281800] hover:shadow-[0_0_32px_rgba(197,168,128,0.35)] focus:outline-none focus:ring-2 focus:ring-[#e2c399]"
          >
            Book Detailing
          </Link>

          {/* Interactive User / Concierge Badge */}
          <div className="relative hidden lg:block">
            <button
              type="button"
              onClick={() => setConciergeOpen(!conciergeOpen)}
              className="w-8 h-8 rounded-full bg-[#e2c399] flex items-center justify-center text-[#402d0f] hover:bg-[#fedeb2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#e2c399]"
              title="Studio Concierge"
              aria-label="Open Studio Concierge"
              aria-expanded={conciergeOpen}
            >
              <span className="material-symbols-outlined text-[18px]">person</span>
            </button>

            {conciergeOpen && (
              <div
                className="absolute right-0 top-11 w-64 bg-[#1a1b20] border border-white/10 rounded-xl p-4 shadow-2xl z-50 text-left animate-fadeIn"
                role="dialog"
                aria-label="Studio Concierge Details"
              >
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#c5a880] text-[#402d0f] flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[20px]">verified_user</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-['Syne'] text-sm uppercase text-[#e3e2e8] font-semibold">Vishu Rana</span>
                    <span className="font-mono text-[10px] text-[#e2c399] uppercase tracking-wider">Master Detailer</span>
                  </div>
                </div>
                <div className="py-3 space-y-2 font-mono text-[11px] text-[#d1c5b8]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#e2c399] text-[15px]">location_on</span>
                    <span>Samalkha, Panipat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#e2c399] text-[15px]">schedule</span>
                    <span>09:00 — 20:00 IST</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center justify-center gap-2 py-2 px-3 rounded bg-[#292a2e] hover:bg-[#343439] text-xs font-mono uppercase tracking-wider text-[#e3e2e8] transition-colors"
                  >
                    <span className="material-symbols-outlined text-[14px] text-[#e2c399]">call</span>
                    <span>+91 98765 43210</span>
                  </a>
                  <Link
                    to="/contact-booking"
                    onClick={() => setConciergeOpen(false)}
                    className="text-center py-2 px-3 rounded bg-[#c5a880] hover:bg-[#e2c399] text-[#402d0f] text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
                  >
                    Reserve Bay Slot
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded text-[#e3e2e8] hover:text-[#e2c399] hover:bg-white/5 transition-colors focus:outline-none focus:ring-1 focus:ring-[#e2c399]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0e12]/98 border-b border-white/10 px-6 py-6 backdrop-blur-2xl transition-all animate-fadeIn">
          <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `text-base py-2.5 px-3 rounded transition-colors tracking-wide ${
                    isActive
                      ? 'text-[#e2c399] bg-[#1a1b20] font-semibold'
                      : 'text-[#d1c5b8] hover:text-[#e3e2e8] hover:bg-[#1a1b20]'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <Link
                to="/contact-booking"
                className="w-full text-center py-3.5 px-4 rounded bg-[#c5a880] text-[#402d0f] text-sm font-semibold uppercase tracking-wider shadow-lg hover:bg-[#e2c399]"
              >
                Book Detailing Session
              </Link>
              <div className="flex items-center justify-between text-xs text-[#998f83] px-1 font-mono uppercase tracking-wider">
                <span>Panipat Studio</span>
                <span>09:00 — 20:00 IST</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
