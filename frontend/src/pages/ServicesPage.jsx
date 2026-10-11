import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const services = [
    {
      id: 'SRV-01',
      badge: 'Decon Pure',
      category: 'decon',
      icon: 'water_drop',
      title: 'Premium Car Wash',
      duration: '120 MIN',
      description: 'Touchless snow foam, pH-neutral dual-bucket wash, and scratch-free microfiber drying.',
      specLabel: 'Formula Base',
      specValue: 'Deionized Pure H2O',
      image: '/assets/foam-wash.png',
      slug: 'premium-wash',
    },
    {
      id: 'SRV-02',
      badge: 'Sanitization',
      category: 'decon',
      icon: 'airline_seat_recline_extra',
      title: 'Interior Deep Cleaning',
      duration: '240 MIN',
      description: 'Steam sterilization, conditioned leather treatment, and deep cockpit extraction.',
      specLabel: 'Target Zone',
      specValue: 'Full Cockpit & Hide',
      image: '/assets/interior-leather.png',
      slug: 'interior-deep',
    },
    {
      id: 'SRV-03',
      badge: 'Showroom Tier',
      category: 'correction',
      icon: 'auto_awesome',
      title: 'Car Detailing',
      duration: 'FULL DAY',
      description: 'Full interior and exterior rejuvenation engineered to revive showroom prestige.',
      specLabel: 'Concours Grade',
      specValue: '360-Degree Rebirth',
      image: '/assets/porsche-gt3.png',
      slug: 'car-detailing',
    },
    {
      id: 'SRV-04',
      badge: '9H Matrix',
      category: 'shield',
      icon: 'shield',
      title: 'Ceramic Coating',
      duration: 'MULTI-YEAR',
      description: '9H multi-year hydrophobic nano-ceramic shield for unparalleled gloss and UV resistance.',
      specLabel: 'Surface Bond',
      specValue: 'SiO2 Liquid Quartz',
      image: '/assets/ceramic-coating.png',
      slug: 'ceramic-coating',
    },
    {
      id: 'SRV-05',
      badge: 'PPF Armor',
      category: 'shield',
      icon: 'verified_user',
      title: 'Paint Protection (PPF)',
      duration: '10 YR WAR.',
      description: 'Self-healing thermoplastic urethane film guarding against rock chips and road hazards.',
      specLabel: 'Membrane Spec',
      specValue: '8.5 Mil Optical TPU',
      image: '/assets/porsche-gt3.png',
      slug: 'paint-protection',
    },
    {
      id: 'SRV-06',
      badge: 'Multi-Stage',
      category: 'correction',
      icon: 'flare',
      title: 'Polishing',
      duration: '99% DEFECT-FREE',
      description: 'Multi-stage machine paint correction eliminating swirls, holograms, and oxidation.',
      specLabel: 'Calibration',
      specValue: 'Digital Micron Gauged',
      image: '/assets/rotary-polishing.png',
      slug: 'multi-stage-polishing',
    },
  ];

  const filteredServices = services.filter((srv) => {
    if (activeFilter === 'all') return true;
    return srv.category === activeFilter;
  });

  return (
    <div className="w-full bg-[#121317] pt-24 pb-20">
      {/* Architectural Ambient Glows */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#e2c399]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-96 right-10 w-[420px] h-[420px] bg-[#343439]/40 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Header Section */}
          <section className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-white/5">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded bg-[#292a2e]/80 backdrop-blur-md mb-6 border border-white/10 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e2c399] animate-pulse" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#e2c399]">
                    Atelier Protocols • Edition 2025
                  </span>
                </div>
                <h1 className="font-['Syne'] text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#e3e2e8] leading-none mb-4">
                  Studio <span className="text-[#e2c399] font-light">Services</span>
                </h1>
                <p className="text-base sm:text-lg text-[#d1c5b8] max-w-xl font-light">
                  Meticulous automotive restoration and bespoke paint preservation.
                </p>
              </div>

              {/* Studio Live Telemetry Indicator */}
              <div className="flex items-center gap-6 bg-[#1a1b20]/90 backdrop-blur-xl p-5 rounded-lg border border-white/10 shadow-xl shrink-0">
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#998f83]">
                    Lab Environment
                  </span>
                  <span className="font-mono text-xs text-[#e3e2e8] font-semibold tracking-wider mt-0.5">
                    ISO Class 6 Cleanroom
                  </span>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#998f83]">
                    Relative Humidity
                  </span>
                  <span className="font-mono text-xs text-[#e2c399] font-semibold tracking-wider mt-0.5">
                    42% Constant
                  </span>
                </div>
              </div>
            </div>

            {/* Filter Sub-Nav / Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-8">
              <div className="flex items-center gap-2" role="tablist" aria-label="Service categories">
                <button
                  type="button"
                  onClick={() => setActiveFilter('all')}
                  className={`px-4 py-1.5 rounded font-mono text-[11px] uppercase tracking-widest transition-all ${
                    activeFilter === 'all'
                      ? 'bg-[#e2c399] text-[#402d0f] font-semibold shadow-[0_0_16px_rgba(226,195,153,0.25)]'
                      : 'bg-[#1f1f24] hover:bg-[#292a2e] text-[#d1c5b8]'
                  }`}
                >
                  All Disciplines
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter('decon')}
                  className={`px-4 py-1.5 rounded font-mono text-[11px] uppercase tracking-widest transition-all ${
                    activeFilter === 'decon'
                      ? 'bg-[#e2c399] text-[#402d0f] font-semibold shadow-[0_0_16px_rgba(226,195,153,0.25)]'
                      : 'bg-[#1f1f24] hover:bg-[#292a2e] text-[#d1c5b8]'
                  }`}
                >
                  Surface Decon
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter('correction')}
                  className={`px-4 py-1.5 rounded font-mono text-[11px] uppercase tracking-widest transition-all ${
                    activeFilter === 'correction'
                      ? 'bg-[#e2c399] text-[#402d0f] font-semibold shadow-[0_0_16px_rgba(226,195,153,0.25)]'
                      : 'bg-[#1f1f24] hover:bg-[#292a2e] text-[#d1c5b8]'
                  }`}
                >
                  Correction
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter('shield')}
                  className={`px-4 py-1.5 rounded font-mono text-[11px] uppercase tracking-widest transition-all ${
                    activeFilter === 'shield'
                      ? 'bg-[#e2c399] text-[#402d0f] font-semibold shadow-[0_0_16px_rgba(226,195,153,0.25)]'
                      : 'bg-[#1f1f24] hover:bg-[#292a2e] text-[#d1c5b8]'
                  }`}
                >
                  Molecular Shield
                </button>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#998f83]">
                Total Services // {String(filteredServices.length).padStart(2, '0')} Cataloged
              </span>
            </div>
          </section>

          {/* Services Grid: 6 High-Impact Visual Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((srv) => (
              <article
                key={srv.id}
                className="group relative flex flex-col bg-[#1a1b20]/80 backdrop-blur-2xl rounded-xl overflow-hidden border border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] hover:border-[#c5a880]/30"
              >
                {/* Specular Highlight Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-transparent to-white/[0.04] pointer-events-none z-10" />

                {/* Image Canvas */}
                <div className="relative w-full h-72 overflow-hidden bg-[#0d0e12]">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-[#0d0e12]/90 backdrop-blur-md font-mono text-[10px] uppercase tracking-widest text-[#e2c399] font-medium shadow-md">
                      [{srv.id}]
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#343439]/80 backdrop-blur-md font-mono text-[10px] uppercase tracking-widest text-[#e3e2e8] shadow-md">
                      {srv.badge}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 z-20">
                    <span className="w-8 h-8 rounded-full bg-[#0d0e12]/80 backdrop-blur-md flex items-center justify-center text-[#e2c399] shadow-lg">
                      <span className="material-symbols-outlined text-[18px]">{srv.icon}</span>
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="relative z-20 flex flex-col flex-1 p-7 bg-[#1a1b20]/90">
                  <div className="flex items-baseline justify-between mb-2">
                    <h2 className="font-['Syne'] text-xl font-semibold text-[#e3e2e8] group-hover:text-[#e2c399] transition-colors">
                      {srv.title}
                    </h2>
                    <span className="font-mono text-[10px] text-[#998f83] tracking-widest">
                      {srv.duration}
                    </span>
                  </div>
                  <p className="text-sm text-[#d1c5b8] font-light mb-6 flex-1 leading-relaxed">
                    {srv.description}
                  </p>
                  <div className="pt-5 border-t border-white/5 flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#998f83]">
                        {srv.specLabel}
                      </span>
                      <span className="text-xs text-[#e3e2e8] font-medium">{srv.specValue}</span>
                    </div>
                    <Link
                      to={`/contact-booking?service=${srv.slug}`}
                      className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#e2c399] hover:text-[#fedeb2] transition-colors group/link"
                    >
                      <span>Inquire Service</span>
                      <span className="material-symbols-outlined text-[16px] transition-transform group-hover/link:translate-x-1">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </section>

          {/* Technical Standards Strip */}
          <section className="mt-24 p-8 lg:p-12 rounded-2xl bg-[#0d0e12] relative overflow-hidden shadow-2xl border border-white/5">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#e2c399]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-4">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#e2c399]">
                  The Atelier Standard
                </span>
                <h3 className="font-['Syne'] text-3xl font-semibold text-[#e3e2e8] mt-2 mb-3">
                  Uncompromising Execution.
                </h3>
                <p className="text-xs sm:text-sm text-[#d1c5b8] font-light leading-relaxed">
                  Every appointment is confined to a dedicated bay equipped with specialized chromatic temperature lighting arrays and HEPA airflow filtration.
                </p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg bg-[#292a2e]/60 backdrop-blur-md border border-white/5">
                  <span className="font-['Syne'] text-3xl font-bold text-[#e2c399] block leading-none mb-2">
                    99.4%
                  </span>
                  <span className="font-['Syne'] text-base uppercase text-[#e3e2e8] block mb-1">
                    Optical Clarity
                  </span>
                  <p className="text-xs text-[#998f83]">
                    Measurable depth index verified by triple-probe digital spectrophotometer.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-[#292a2e]/60 backdrop-blur-md border border-white/5">
                  <span className="font-['Syne'] text-3xl font-bold text-[#e2c399] block leading-none mb-2">
                    350+
                  </span>
                  <span className="font-['Syne'] text-base uppercase text-[#e3e2e8] block mb-1">
                    Exotics Curated
                  </span>
                  <p className="text-xs text-[#998f83]">
                    Bespoke commissions from Ferrari, Porsche, Lamborghini, and Aston Martin.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-[#292a2e]/60 backdrop-blur-md border border-white/5">
                  <span className="font-['Syne'] text-3xl font-bold text-[#e2c399] block leading-none mb-2">
                    10 YR
                  </span>
                  <span className="font-['Syne'] text-base uppercase text-[#e3e2e8] block mb-1">
                    Shield Guarantee
                  </span>
                  <p className="text-xs text-[#998f83]">
                    Official certified installers backed by nationwide warranty registry.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Bespoke Consultation Banner */}
          <section className="mt-16 flex flex-col md:flex-row items-center justify-between p-8 rounded-xl bg-[#1a1b20] border border-white/5 shadow-lg gap-6">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-lg bg-[#c5a880]/20 border border-[#c5a880]/40 flex items-center justify-center text-[#e2c399] shrink-0">
                <span className="material-symbols-outlined text-[28px]">design_services</span>
              </div>
              <div>
                <h4 className="font-['Syne'] text-lg font-semibold uppercase text-[#e3e2e8]">
                  Require a custom multi-stage commission?
                </h4>
                <p className="text-xs sm:text-sm text-[#d1c5b8] font-light mt-0.5">
                  Consult directly with Founder &amp; Master Detailer Vishu Rana at our Samalkha atelier.
                </p>
              </div>
            </div>
            <Link
              to="/contact-booking"
              className="shrink-0 px-8 py-3.5 rounded bg-[#c5a880] text-[#402d0f] font-mono text-xs font-semibold tracking-wider uppercase shadow-[0_0_20px_rgba(197,168,128,0.2)] hover:bg-[#e2c399] hover:text-[#281800] transition-all duration-300"
            >
              Request Evaluation
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
