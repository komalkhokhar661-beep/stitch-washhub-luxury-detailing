import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PackagesPage() {
  const [selectedMarque, setSelectedMarque] = useState('All Marques');

  const marques = [
    'All Marques',
    'Porsche 911 / Cayman',
    'Ferrari / Lambo V12',
    'Luxury Sedans & SUVs',
  ];

  return (
    <div className="w-full bg-[#121317] pt-24 pb-20">
      {/* Atmospheric Glow Scrim */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[380px] bg-[#e2c399]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-96 -right-32 w-[400px] h-[400px] bg-[#46494d]/20 rounded-full blur-[100px] pointer-events-none" />

        {/* Editorial Header Section */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#e2c399] animate-pulse" />
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#e2c399]">
                  Atelier Grade Specifications // 2025
                </span>
                <span className="text-[#4d463c] font-mono text-[11px]">/</span>
                <span className="font-mono text-[11px] text-[#998f83] tracking-widest uppercase">
                  Panipat Laboratory
                </span>
              </div>
              <h1 className="font-['Syne'] text-4xl sm:text-5xl lg:text-6xl uppercase text-[#e3e2e8] tracking-tight leading-tight">
                Curated Detailing Tiers
              </h1>
              <p className="text-base sm:text-lg text-[#d1c5b8] mt-4 max-w-2xl leading-relaxed font-light">
                Bespoke preservation suites calibrated for daily drivers, grand tourers, and exotics. Master-level micro-restoration executed under controlled cleanroom lighting.
              </p>
            </div>

            {/* Telemetry Stats Pill Strip */}
            <div className="flex items-center gap-6 bg-[#1a1b20] px-6 py-4 rounded-xl border border-white/5 shadow-lg self-start lg:self-auto">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-[#998f83] uppercase tracking-widest">
                  Target Finish
                </span>
                <span className="font-['Syne'] text-xl font-semibold text-[#e2c399] tracking-tight">
                  99.4% Defect Free
                </span>
              </div>
              <div className="w-px h-8 bg-[#343439]" />
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-[#998f83] uppercase tracking-widest">
                  Coating Curing
                </span>
                <span className="font-mono text-xs text-[#e3e2e8] font-semibold">
                  Infrared Bake 60°C
                </span>
              </div>
            </div>
          </div>

          {/* Quick Segment Selector */}
          <div className="flex flex-wrap items-center gap-3 mt-10">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#998f83] mr-2">
              Calibrated For:
            </span>
            {marques.map((marque) => (
              <button
                key={marque}
                type="button"
                onClick={() => setSelectedMarque(marque)}
                className={`px-4 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all border ${
                  selectedMarque === marque
                    ? 'bg-[#292a2e] text-[#e2c399] border-[#e2c399]/40 shadow-sm'
                    : 'bg-[#0d0e12] text-[#d1c5b8] border-white/5 hover:text-white hover:bg-[#1a1b20]'
                }`}
              >
                {marque}
              </button>
            ))}
          </div>
        </section>

        {/* Packages Bento Grid: 3 Bespoke Cards */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* CARD 1: Essential Care */}
            <div className="lg:col-span-4 flex flex-col justify-between bg-[#1a1b20]/90 backdrop-blur-xl p-8 rounded-xl border border-white/5 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-[#c5a880]/30 group">
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-white/5">
                  <span className="font-mono text-[11px] uppercase text-[#998f83] tracking-[0.2em] font-medium">
                    [PKG-01 // TIER I]
                  </span>
                  <span className="font-mono text-[10px] uppercase px-2.5 py-1 rounded bg-[#343439] text-[#d1c5b8] tracking-wider">
                    Studio Wash
                  </span>
                </div>

                <div className="mt-4">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#e2c399]">
                    Maintenance &amp; Studio Wash
                  </span>
                  <h2 className="font-['Syne'] text-2xl font-semibold uppercase text-[#e3e2e8] tracking-tight mt-1 group-hover:text-[#e2c399] transition-colors">
                    Essential Care
                  </h2>
                  <p className="text-xs text-[#d1c5b8] mt-3 leading-relaxed font-light">
                    Bi-weekly or monthly baseline preservation. Contactless active surfactants paired with demineralized water prevents micro-marring.
                  </p>
                </div>

                <div className="mt-6 p-4 rounded bg-[#0d0e12] border border-white/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-[#998f83] uppercase tracking-wider">
                      Estimated Duration
                    </span>
                    <span className="font-mono text-xs text-[#e3e2e8] font-semibold">
                      3.5 — 4.5 Hours
                    </span>
                  </div>
                  <svg className="w-12 h-6 text-[#e2c399]" fill="none" viewBox="0 0 48 24">
                    <path
                      d="M2 18L10 14L18 16L26 8L34 11L46 4"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <circle cx="46" cy="4" fill="currentColor" r="2" />
                  </svg>
                </div>

                <div className="mt-8 space-y-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#998f83] block">
                    Scope of Restoration
                  </span>
                  <ul className="space-y-3">
                    {[
                      'Multi-stage active foam cleanse with pH-neutral snow soaps',
                      'De-ionized water spot-free rinse (0 PPM purity rating)',
                      'Neutral wheel face, barrel, and rim caliper de-greasing',
                      'Microfiber streak-free warm filtered drying & crystal glass buff',
                      'Interior cockpit vacuum & satin dash UV conditioning',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-[#e2c399] text-[18px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span className="text-xs text-[#e3e2e8] leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Price & CTA */}
              <div className="mt-10 pt-6 bg-[#1f1f24]/60 -mx-8 -mb-8 p-8 rounded-b-xl border-t border-white/5">
                <div className="flex items-baseline justify-between mb-5">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#998f83] block">
                      Investment
                    </span>
                    <span className="font-['Syne'] text-lg font-semibold text-[#e3e2e8] tracking-tight">
                      Contact for Price
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#e2c399] uppercase tracking-wider">
                    PANIPAT STUDIO
                  </span>
                </div>
                <Link
                  to="/contact-booking?service=essential-care-pkg"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded bg-[#38393e] text-[#e3e2e8] hover:bg-[#c5a880] hover:text-[#402d0f] text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md"
                >
                  <span>Select Essential</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* CARD 2: Premium Care (FEATURED TIER) */}
            <div className="lg:col-span-4 flex flex-col justify-between bg-[#1f1f24]/95 backdrop-blur-2xl p-8 rounded-xl border border-[#c5a880]/40 shadow-2xl relative transition-all duration-300 hover:shadow-[0_0_40px_rgba(226,195,153,0.18)] hover:-translate-y-2 group lg:-mt-4 lg:mb-[-1rem]">
              {/* Featured Specular Halo Header */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#e2c399] text-[#402d0f] px-4 py-1 rounded-full shadow-[0_0_16px_rgba(226,195,153,0.4)] flex items-center gap-1.5 z-20">
                <span className="material-symbols-outlined text-[14px]">star</span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
                  Recommended Tier
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between pb-5 pt-2 border-b border-white/10">
                  <span className="font-mono text-[11px] uppercase text-[#e2c399] font-semibold tracking-[0.2em]">
                    [PKG-02 // SIGNATURE]
                  </span>
                  <span className="font-mono text-[10px] uppercase px-2.5 py-1 rounded bg-[#e2c399]/10 text-[#e2c399] tracking-wider border border-[#e2c399]/20">
                    Paint Correction
                  </span>
                </div>

                <div className="mt-4">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#e2c399]">
                    Comprehensive Correction &amp; Shield
                  </span>
                  <h2 className="font-['Syne'] text-2xl font-semibold uppercase text-[#e2c399] tracking-tight mt-1">
                    Premium Care
                  </h2>
                  <p className="text-xs text-[#d1c5b8] mt-3 leading-relaxed font-light">
                    The gold standard for enthusiast luxury transport. Eliminates up to 75% surface swirls while restoring factory optical clarity and leather suppleness.
                  </p>
                </div>

                <div className="mt-6 p-4 rounded bg-[#0d0e12]/80 border border-white/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-[#e2c399] uppercase tracking-wider">
                      Preservation Level
                    </span>
                    <span className="font-mono text-xs text-[#e3e2e8] font-semibold">
                      1-Day Studio Intensive
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-6 bg-[#e2c399] rounded-full" />
                    <span className="w-1.5 h-6 bg-[#e2c399] rounded-full" />
                    <span className="w-1.5 h-4 bg-[#e2c399]/40 rounded-full" />
                    <span className="w-1.5 h-2 bg-[#e2c399]/20 rounded-full" />
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#e2c399] block font-semibold">
                      Engineered Deliverables
                    </span>
                    <span className="font-mono text-[10px] text-[#d1c5b8] uppercase tracking-widest">
                      + Essential Suite
                    </span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#e2c399] text-[18px] shrink-0 mt-0.5">
                        verified
                      </span>
                      <span className="text-xs text-[#e3e2e8] font-medium leading-snug">
                        Everything in Essential Care baseline package
                      </span>
                    </li>
                    {[
                      'Full body chemical ferrous iron bath & fine-grade clay bar decontamination',
                      '1-Stage machine jeweling polisher polish for severe gloss amplification',
                      'Deep interior pressurized steam sanitation & aniline leather conditioning',
                      'Engine compartment dry steam cleansing & non-greasy dressing',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-[#e2c399] text-[18px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span className="text-xs text-[#e3e2e8] leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Price & CTA */}
              <div className="mt-10 pt-6 bg-[#292a2e] -mx-8 -mb-8 p-8 rounded-b-xl border-t border-white/10 shadow-inner">
                <div className="flex items-baseline justify-between mb-5">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#e2c399] block">
                      Investment
                    </span>
                    <span className="font-['Syne'] text-lg font-bold text-[#e3e2e8] tracking-tight">
                      Contact for Price
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#998f83] uppercase tracking-wider">
                    Priority Slot
                  </span>
                </div>
                <Link
                  to="/contact-booking?service=premium-care-pkg"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded bg-[#c5a880] text-[#402d0f] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_24px_rgba(226,195,153,0.35)] hover:bg-[#e2c399] hover:shadow-[0_0_32px_rgba(226,195,153,0.5)]"
                >
                  <span>Select Premium</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* CARD 3: Luxury Detailing (FLAGSHIP ATELIER) */}
            <div className="lg:col-span-4 flex flex-col justify-between bg-[#1a1b20]/90 backdrop-blur-xl p-8 rounded-xl border border-white/5 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-[#c5a880]/30 group">
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-white/5">
                  <span className="font-mono text-[11px] uppercase text-[#998f83] tracking-[0.2em] font-medium">
                    [PKG-03 // PINNACLE]
                  </span>
                  <span className="font-mono text-[10px] uppercase px-2.5 py-1 rounded bg-[#46494d] text-[#e3e2e8] tracking-wider">
                    Nano Armor
                  </span>
                </div>

                <div className="mt-4">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#e2c399]">
                    Master Rebirth &amp; Ceramic Armor
                  </span>
                  <h2 className="font-['Syne'] text-2xl font-semibold uppercase text-[#e3e2e8] tracking-tight mt-1 group-hover:text-[#e2c399] transition-colors">
                    Luxury Detailing
                  </h2>
                  <p className="text-xs text-[#d1c5b8] mt-3 leading-relaxed font-light">
                    Total hypercar restoration. Multi-stage compounding corrects defects to microscopic tolerances, sealed under permanent 9H ceramic matrix coats.
                  </p>
                </div>

                <div className="mt-6 p-4 rounded bg-[#0d0e12] border border-white/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-[#998f83] uppercase tracking-wider">
                      Atelier Residency
                    </span>
                    <span className="font-mono text-xs text-[#e3e2e8] font-semibold">
                      2 — 3 Full Days
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[10px] text-[#e2c399] uppercase font-bold">
                      9H Hardness
                    </span>
                    <span className="material-symbols-outlined text-[#e2c399] text-[18px]">
                      verified_user
                    </span>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#998f83] block">
                      Atelier Rebirth Protocol
                    </span>
                    <span className="font-mono text-[10px] text-[#d1c5b8] uppercase tracking-widest">
                      + Premium Suite
                    </span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#e2c399] text-[18px] shrink-0 mt-0.5">
                        verified
                      </span>
                      <span className="text-xs text-[#e3e2e8] font-medium leading-snug">
                        Everything in Premium Care comprehensive package
                      </span>
                    </li>
                    {[
                      'Multi-stage compound paint correction (swirl, scratch & hologram purge)',
                      'Professional 9H multi-year nano-ceramic crystal coating on bodywork',
                      'Hydrophobic glass barrier on windshield, side windows & mirrors',
                      'Full cockpit leather ceramic shield & deep textile hydrophobic barrier',
                      'Wheel faces, arches, and high-temp brake caliper ceramic fusion seal',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-[#e2c399] text-[18px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span className="text-xs text-[#e3e2e8] leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Price & CTA */}
              <div className="mt-10 pt-6 bg-[#1f1f24]/60 -mx-8 -mb-8 p-8 rounded-b-xl border-t border-white/5">
                <div className="flex items-baseline justify-between mb-5">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#998f83] block">
                      Investment
                    </span>
                    <span className="font-['Syne'] text-lg font-semibold text-[#e3e2e8] tracking-tight">
                      Contact for Price
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#e2c399] uppercase tracking-wider">
                    CERTIFICATE ISSUED
                  </span>
                </div>
                <Link
                  to="/contact-booking?service=luxury-detailing-pkg"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded bg-[#38393e] text-[#e3e2e8] hover:bg-[#c5a880] hover:text-[#402d0f] text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md"
                >
                  <span>Select Luxury</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Comparison Matrix */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20">
          <div className="bg-[#1a1b20] rounded-xl p-8 lg:p-12 shadow-2xl border border-white/5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#e2c399] block mb-1">
                  Comparative Analysis
                </span>
                <h3 className="font-['Syne'] text-2xl uppercase text-[#e3e2e8]">Scientific Matrix</h3>
              </div>
              <div className="flex items-center gap-4 text-[#998f83] font-mono text-[11px]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#e2c399]" /> Full Inclusions
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#4d463c]" /> Non-Applicable
                </span>
              </div>
            </div>

            {/* Table Grid */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#0d0e12] border-b border-white/10">
                    <th className="py-4 px-6 font-mono text-[11px] uppercase tracking-widest text-[#998f83]">
                      Metric / Specification
                    </th>
                    <th className="py-4 px-6 font-mono text-[11px] uppercase tracking-widest text-[#998f83]">
                      Essential Care
                    </th>
                    <th className="py-4 px-6 font-mono text-[11px] uppercase tracking-widest text-[#e2c399] font-semibold">
                      Premium Care
                    </th>
                    <th className="py-4 px-6 font-mono text-[11px] uppercase tracking-widest text-[#998f83]">
                      Luxury Detailing
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#343439]/30 text-xs text-[#e3e2e8]">
                  <tr className="hover:bg-[#1f1f24]/60 transition-colors">
                    <td className="py-4 px-6 font-medium text-[#e3e2e8] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#998f83] text-[16px]">water_drop</span>
                      0-PPM De-ionized Spot-Free Rinse
                    </td>
                    <td className="py-4 px-6 text-[#e2c399]">Included</td>
                    <td className="py-4 px-6 text-[#e2c399] font-medium">Included</td>
                    <td className="py-4 px-6 text-[#e2c399]">Included</td>
                  </tr>
                  <tr className="hover:bg-[#1f1f24]/60 transition-colors">
                    <td className="py-4 px-6 font-medium text-[#e3e2e8] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#998f83] text-[16px]">auto_fix_high</span>
                      Swirl &amp; Defect Correction Rate
                    </td>
                    <td className="py-4 px-6 text-[#4d463c]">Gloss Cleansing Only</td>
                    <td className="py-4 px-6 text-[#e3e2e8] font-medium">65% — 75% Correction</td>
                    <td className="py-4 px-6 text-[#e2c399] font-bold">90% — 98% Elimination</td>
                  </tr>
                  <tr className="hover:bg-[#1f1f24]/60 transition-colors">
                    <td className="py-4 px-6 font-medium text-[#e3e2e8] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#998f83] text-[16px]">shield</span>
                      Protective Coating Chemistry
                    </td>
                    <td className="py-4 px-6 text-[#4d463c]">Hydrophobic Sealant Spray</td>
                    <td className="py-4 px-6 text-[#e3e2e8]">Polymer Jeweling Glaze</td>
                    <td className="py-4 px-6 text-[#e2c399] font-bold">9H Nano-Ceramic Armor</td>
                  </tr>
                  <tr className="hover:bg-[#1f1f24]/60 transition-colors">
                    <td className="py-4 px-6 font-medium text-[#e3e2e8] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#998f83] text-[16px]">
                        airline_seat_recline_extra
                      </span>
                      Leather &amp; Textile Protection
                    </td>
                    <td className="py-4 px-6 text-[#4d463c]">Surface Dust Cleanse</td>
                    <td className="py-4 px-6 text-[#e3e2e8]">Deep Steam &amp; Condition</td>
                    <td className="py-4 px-6 text-[#e2c399] font-bold">Hydrophobic Ceramic Guard</td>
                  </tr>
                  <tr className="hover:bg-[#1f1f24]/60 transition-colors">
                    <td className="py-4 px-6 font-medium text-[#e3e2e8] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#998f83] text-[16px]">tire_repair</span>
                      Wheel Barrel &amp; Caliper Sealing
                    </td>
                    <td className="py-4 px-6 text-[#4d463c]">Exterior Face Wash</td>
                    <td className="py-4 px-6 text-[#e3e2e8]">Iron Decontamination</td>
                    <td className="py-4 px-6 text-[#e2c399] font-bold">High-Temp Ceramic Coat</td>
                  </tr>
                  <tr className="hover:bg-[#1f1f24]/60 transition-colors">
                    <td className="py-4 px-6 font-medium text-[#e3e2e8] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#998f83] text-[16px]">timer</span>
                      Studio Completion Window
                    </td>
                    <td className="py-4 px-6 text-[#d1c5b8] font-mono text-xs">4 Hours</td>
                    <td className="py-4 px-6 text-[#e3e2e8] font-mono text-xs">1 Day</td>
                    <td className="py-4 px-6 text-[#e2c399] font-mono text-xs font-bold">2 — 3 Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Cleanroom Vignettes */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-xl overflow-hidden group shadow-lg border border-white/5">
              <img
                src="/assets/rotary-polishing.png"
                alt="Inspection under LED studio lights"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-mono text-[10px] text-[#e2c399] uppercase tracking-widest block">
                  Cleanroom Protocol
                </span>
                <p className="font-['Syne'] text-base uppercase text-[#e3e2e8] mt-1 font-semibold">
                  Multi-Spectrum Lighting
                </p>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden group shadow-lg border border-white/5">
              <img
                src="/assets/ceramic-coating.png"
                alt="Ceramic coating application"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-mono text-[10px] text-[#e2c399] uppercase tracking-widest block">
                  Ceramic Matrix
                </span>
                <p className="font-['Syne'] text-base uppercase text-[#e3e2e8] mt-1 font-semibold">
                  9H Crystalline Seal
                </p>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden group shadow-lg border border-white/5">
              <img
                src="/assets/interior-leather.png"
                alt="Leather interior treatment"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-mono text-[10px] text-[#e2c399] uppercase tracking-widest block">
                  Cockpit Preservation
                </span>
                <p className="font-['Syne'] text-base uppercase text-[#e3e2e8] mt-1 font-semibold">
                  Aniline Leather Shield
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Banner: Vishu Rana Consultation */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-12">
          <div className="relative rounded-xl overflow-hidden bg-[#292a2e] p-8 lg:p-12 shadow-2xl border border-white/5">
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#e2c399]/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#e2c399]" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#e2c399]">
                    Bespoke Atelier Advisory
                  </span>
                </div>
                <h3 className="font-['Syne'] text-2xl uppercase text-[#e3e2e8] tracking-tight leading-snug">
                  Need a tailored solution for track cars, matte finishes, or vintage vehicles?
                </h3>
                <p className="text-sm text-[#d1c5b8] mt-3 leading-relaxed font-light">
                  Every clearcoat reacts differently based on resin composition and age. Consult directly with Master Detailer <span className="text-[#e3e2e8] font-medium">Vishu Rana</span> at our Samalkha atelier for personalized micron-depth assessments and custom PPF hybrid programs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
                <Link
                  to="/contact-booking"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded bg-[#c5a880] text-[#402d0f] font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_24px_rgba(197,168,128,0.25)] hover:bg-[#e2c399] hover:text-[#281800] hover:shadow-[0_0_36px_rgba(197,168,128,0.4)]"
                >
                  <span>Request Bespoke Consultation</span>
                  <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                </Link>
              </div>
            </div>

            {/* Founder Signature Strip */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-[#998f83] font-mono text-[11px] uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#e2c399] text-[16px]">location_on</span>
                <span>Samalkha, Panipat, Haryana 132101</span>
              </div>
              <div className="flex items-center gap-6">
                <span>Direct Desk: +91 (Studio Booking)</span>
                <span>Inspection Bay: By Appointment Only</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
