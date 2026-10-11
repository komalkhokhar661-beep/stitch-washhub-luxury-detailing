import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d0e12] py-12 mt-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-['Syne'] text-2xl font-bold uppercase tracking-wider text-[#e3e2e8]">
                Wash<span className="text-[#e2c399]">Hub</span>
              </span>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#e0c298] mb-3">
              Studio Detailing &amp; Paint Protection
            </p>
            <p className="text-sm text-[#998f83] max-w-sm leading-relaxed">
              Aerospace-grade ceramics, high-precision paint correction, and custom PPF installations engineered for exotic and luxury marques.
            </p>
          </div>

          {/* Location & Hours */}
          <div className="md:col-span-4 flex flex-col justify-start">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#998f83] mb-2">
              Studio Atelier Location
            </span>
            <p className="text-sm font-medium text-[#e3e2e8] mb-1">Samalkha, Panipat</p>
            <p className="text-sm text-[#d1c5b8]">Haryana, India — 132101</p>
            <p className="font-mono text-xs text-[#998f83] mt-4 uppercase tracking-wider">
              Hours: Mon — Sun / 09:00 — 20:00 IST
            </p>
          </div>

          {/* Craft Leadership & Direct Links */}
          <div className="md:col-span-3 flex flex-col justify-start">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#998f83] mb-2">
              Craft Leadership
            </span>
            <p className="text-sm font-semibold text-[#e3e2e8] mb-0.5">Vishu Rana</p>
            <p className="font-mono text-xs text-[#e2c399] uppercase tracking-widest mb-4">
              Founder &amp; Master Detailer
            </p>
            <div className="flex items-center gap-3 text-sm text-[#d1c5b8]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-[#998f83] hover:text-[#e2c399] transition-colors focus:outline-none"
              >
                Instagram
              </a>
              <span className="text-[#4d463c]">/</span>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-[#998f83] hover:text-[#e2c399] transition-colors focus:outline-none"
              >
                WhatsApp
              </a>
              <span className="text-[#4d463c]">/</span>
              <Link
                to="/packages"
                className="font-mono text-xs uppercase tracking-widest text-[#998f83] hover:text-[#e2c399] transition-colors focus:outline-none"
              >
                Catalog
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-[#998f83] uppercase tracking-wider">
            © 2025 WashHub Atelier. All rights reserved.
          </p>
          <p className="font-mono text-xs text-[#4d463c] uppercase tracking-widest">
            Clinical Precision • Bespoke Preservation
          </p>
        </div>
      </div>
    </footer>
  );
}
