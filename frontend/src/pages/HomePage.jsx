import React from 'react';
import { Link } from 'react-router-dom';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

export default function HomePage() {
  const coreDisciplines = [
    {
      step: '01 // DECONTAMINATION',
      title: 'Active Foam Wash',
      desc: 'Multi-stage pH-neutral hyper-foaming bath, dual-bucket grit isolation, iron fallout extraction, and scratchless air blow-dry.',
      tag: 'Touchless Protocol',
      image: '/assets/foam-wash.png',
      serviceKey: 'premium-wash',
    },
    {
      step: '02 // SURFACE BARRIER',
      title: 'Ceramic Coating',
      desc: 'Molecular-bonding SiO2 and graphene barriers providing extreme UV rejection, chemical resistance, and permanent deep gloss.',
      tag: 'Up to 5 Yr Shield',
      image: '/assets/ceramic-coating.png',
      serviceKey: 'ceramic-coating',
    },
    {
      step: '03 // CABIN SANCTUARY',
      title: 'Interior Detailing',
      desc: 'Horsehair brush micro-extraction, aniline leather conditioning, Alcantara revival, ozone sanitization, and matte factory finishes.',
      tag: 'Pure Conditioning',
      image: '/assets/interior-leather.png',
      serviceKey: 'interior-deep',
    },
    {
      step: '04 // OPTICAL CLARITY',
      title: 'Paint Correction',
      desc: 'Micron-accurate rotary and dual-action stage polishing eradicating spiderwebs, oxidation, and scratches for mirror reflection.',
      tag: 'Defect Eradication',
      image: '/assets/rotary-polishing.png',
      serviceKey: 'multi-stage-polishing',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#121317]">
      {/* CINEMATIC HERO SECTION */}
      <section className="relative w-full min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0d0e12]">
        {/* Hero Image Canvas with Precision Reflection Overlays */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 scale-105 opacity-65"
          style={{ backgroundImage: "url('/assets/porsche-gt3.png')" }}
          aria-hidden="true"
        />

        {/* Multi-layered Atmospheric Chiaroscuro Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121317] via-[#121317]/70 to-[#0d0e12]/85 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121317] via-transparent to-[#121317]/90 pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-[#e2c399]/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col justify-end">
          <div className="max-w-4xl">
            {/* Telemetry Spec Badge */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded bg-[#292a2e]/80 backdrop-blur-md mb-6 border border-white/10 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e2c399] animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#e2c399]">
                Atelier Detailing • Samalkha 132101
              </span>
              <span className="font-mono text-[11px] text-[#4d463c] hidden sm:inline">|</span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#998f83] hidden sm:inline">
                Panipat Studio
              </span>
            </div>

            {/* Luxury Headline */}
            <h1 className="font-['Syne'] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#e3e2e8] uppercase tracking-tight leading-none mb-6">
              Where Your Car Gets the{' '}
              <span className="text-[#e2c399] italic font-light block sm:inline">Care It Deserves.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#d1c5b8] max-w-2xl mb-10 leading-relaxed font-light">
              Premium car care. Professional finish. We engineer flawless optical reflections, hospital-grade interior hygiene, and aerospace ceramic barriers for discerning owners.
            </p>

            {/* CTA Cluster */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
              <Link
                to="/contact-booking"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded bg-[#c5a880] text-[#402d0f] text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_36px_rgba(197,168,128,0.28)] hover:bg-[#e2c399] hover:text-[#281800] hover:shadow-[0_0_48px_rgba(197,168,128,0.45)] group"
              >
                <span>Book a Service</span>
                <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded bg-[#1a1b20]/80 backdrop-blur-md text-[#e3e2e8] text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#343439] hover:text-[#e2c399] border border-white/10"
              >
                <span>Explore Services</span>
                <span className="material-symbols-outlined text-[18px] text-[#998f83]">tune</span>
              </Link>
            </div>
          </div>

          {/* Live Studio Diagnostics Strip */}
          <div className="mt-16 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#0d0e12]/70 backdrop-blur-xl px-6 py-5 rounded-lg border border-white/5">
            <div className="flex flex-col">
              <span className="font-mono text-[10px] uppercase text-[#998f83] tracking-widest mb-1">Standard</span>
              <span className="font-['Syne'] text-xl font-semibold text-[#e2c399] tracking-wide">9H / 10H Matrix</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] uppercase text-[#998f83] tracking-widest mb-1">Defect Removal</span>
              <span className="font-['Syne'] text-xl font-semibold text-[#e3e2e8] tracking-wide">Up to 98%</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] uppercase text-[#998f83] tracking-widest mb-1">Water Contact Angle</span>
              <span className="font-['Syne'] text-xl font-semibold text-[#e2c399] tracking-wide">118° Hydrophobic</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] uppercase text-[#998f83] tracking-widest mb-1">Curing Chamber</span>
              <span className="font-['Syne'] text-xl font-semibold text-[#e3e2e8] tracking-wide">Infrared Heated</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK HIGHLIGHTS TICKER */}
      <section className="w-full bg-[#292a2e] py-4 overflow-hidden relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-[#d1c5b8]">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#e2c399] text-[18px]">verified</span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#e3e2e8]">Master Craftsmen</span>
          </div>
          <span className="text-[#4d463c] hidden sm:inline">•</span>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#e2c399] text-[18px]">wb_twilight</span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#e3e2e8]">Swirl-Free Studio</span>
          </div>
          <span className="text-[#4d463c] hidden sm:inline">•</span>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#e2c399] text-[18px]">shield_lock</span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#e3e2e8]">Precision Coating</span>
          </div>
          <span className="text-[#4d463c] hidden sm:inline">•</span>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#e2c399] text-[18px]">pin_drop</span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#e0c298]">Panipat, Haryana</span>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES SHOWCASE */}
      <section className="w-full py-24 bg-[#121317] relative" id="services">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header with Bespoke Asymmetry */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-[#e2c399] uppercase tracking-[0.25em]">[ CORE DISCIPLINES ]</span>
              </div>
              <h2 className="font-['Syne'] text-3xl sm:text-4xl font-semibold uppercase text-[#e3e2e8] tracking-tight">
                Precision Automotive <span className="text-[#e2c399] italic font-light">Services</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#d1c5b8] max-w-md font-light leading-relaxed">
              Each procedure executed in sealed micro-filtered lighting bays using surgical compound formulations and calibrated digital gauges.
            </p>
          </div>

          {/* 4 Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreDisciplines.map((item, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col bg-[#1a1b20] rounded-lg overflow-hidden border border-white/5 shadow-lg transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#c5a880]/30"
              >
                <div className="relative h-60 w-full overflow-hidden bg-[#1f1f24]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b20] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 font-mono text-[10px] px-2.5 py-1 rounded bg-[#0d0e12]/80 text-[#e2c399] backdrop-blur-md">
                    {item.step}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between bg-[#1a1b20]">
                  <div>
                    <h3 className="font-['Syne'] text-xl uppercase text-[#e3e2e8] mb-2 tracking-wide group-hover:text-[#e2c399] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#d1c5b8] mb-6 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                  <Link
                    to={`/contact-booking?service=${item.serviceKey}`}
                    className="pt-4 border-t border-white/5 flex items-center justify-between text-[#998f83] group-hover:text-[#e2c399] transition-colors"
                  >
                    <span className="font-mono text-xs uppercase tracking-wider">{item.tag}</span>
                    <span className="material-symbols-outlined text-[18px]">north_east</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE BEFORE / AFTER CLINICAL COMPARISON */}
      <section className="w-full py-16 bg-[#0d0e12]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-[#1a1b20] rounded-xl p-8 lg:p-12 shadow-2xl relative overflow-hidden border border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 flex flex-col">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#e2c399] mb-3">
                  SURGICAL FIDELITY
                </span>
                <h3 className="font-['Syne'] text-3xl font-semibold uppercase text-[#e3e2e8] mb-6 leading-tight">
                  Swirl Eradication • 0.00% Hologram Tolerance
                </h3>
                <p className="text-sm text-[#d1c5b8] mb-8 leading-relaxed font-light">
                  Factory clearcoats accumulate micro-marring and wash-induced hazing that dulls depth. WashHub restores genuine optical refraction through precision multi-step abrasive levelling.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-[#1f1f24] px-4 py-3 rounded border border-white/5">
                    <span className="text-sm text-[#e3e2e8]">Measured Paint Depth (Elcometer)</span>
                    <span className="font-mono text-xs text-[#e2c399] font-bold">124.6 µm (Safe)</span>
                  </div>
                  <div className="flex items-center justify-between bg-[#1f1f24] px-4 py-3 rounded border border-white/5">
                    <span className="text-sm text-[#e3e2e8]">Glossmeter Reading (GU Units)</span>
                    <span className="font-mono text-xs text-[#e2c399] font-bold">96.8 / 100</span>
                  </div>
                </div>
              </div>

              {/* Interactive Before / After Splitter Container */}
              <div className="lg:col-span-7">
                <BeforeAfterSlider />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ELEGANT MINIMAL ABOUT PREVIEW SNIPPET */}
      <section className="w-full py-24 bg-[#1a1b20] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Statement & Vision */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#e2c399]" />
                <span className="font-mono text-xs text-[#e2c399] uppercase tracking-[0.25em]">
                  ATELIER HERITAGE
                </span>
              </div>
              <blockquote className="font-['Syne'] text-2xl sm:text-3xl uppercase tracking-tight text-[#e3e2e8] mb-8 leading-snug">
                "WashHub is a premium car washing and detailing centre in Samalkha, Panipat, focused on quality car care and a professional customer experience."
              </blockquote>
              <p className="text-sm sm:text-base text-[#d1c5b8] max-w-2xl mb-8 leading-relaxed font-light">
                Founded on the principle that modern automotive clearcoats require aerospace precision rather than aggressive speed. We reject automated tunnel washes and corner-cutting techniques, treating every chassis with the surgical dignity demanded by automotive enthusiasts.
              </p>
              {/* Founder Badge */}
              <div className="flex items-center gap-4 p-4 rounded-lg bg-[#292a2e] w-fit shadow-md border border-white/5">
                <div className="w-12 h-12 rounded-full bg-[#c5a880] text-[#402d0f] flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-[24px]">verified_user</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-['Syne'] text-base uppercase text-[#e3e2e8] tracking-wide font-semibold">
                    Vishu Rana
                  </span>
                  <span className="font-mono text-[11px] text-[#e2c399] uppercase tracking-widest">
                    Founder • WashHub Studio
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Diagnostic Metrics Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-6 rounded-lg bg-[#292a2e] flex flex-col justify-between shadow-md border border-white/5">
                <span className="font-mono text-[10px] text-[#998f83] uppercase tracking-wider mb-4">Water Purity</span>
                <span className="font-['Syne'] text-4xl font-bold text-[#e2c399] leading-none mb-1">000</span>
                <span className="text-xs text-[#d1c5b8]">TDS de-ionized spotless rinse protocol.</span>
              </div>
              <div className="p-6 rounded-lg bg-[#292a2e] flex flex-col justify-between shadow-md border border-white/5">
                <span className="font-mono text-[10px] text-[#998f83] uppercase tracking-wider mb-4">Curing Temp</span>
                <span className="font-['Syne'] text-4xl font-bold text-[#e3e2e8] leading-none mb-1">65°C</span>
                <span className="text-xs text-[#d1c5b8]">Uniform shortwave IR cross-linking.</span>
              </div>
              <div className="p-6 rounded-lg bg-[#292a2e] flex flex-col justify-between shadow-md border border-white/5">
                <span className="font-mono text-[10px] text-[#998f83] uppercase tracking-wider mb-4">Lighting Array</span>
                <span className="font-['Syne'] text-4xl font-bold text-[#e3e2e8] leading-none mb-1">6500K</span>
                <span className="text-xs text-[#d1c5b8]">Surgical CRI 98 swirl-revealing illumination.</span>
              </div>
              <div className="p-6 rounded-lg bg-[#292a2e] flex flex-col justify-between shadow-md border border-white/5">
                <span className="font-mono text-[10px] text-[#998f83] uppercase tracking-wider mb-4">Studio Location</span>
                <span className="font-['Syne'] text-2xl font-bold text-[#e2c399] leading-tight mb-1">Samalkha</span>
                <span className="text-xs text-[#d1c5b8]">Panipat District, Haryana.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO APPOINTMENT BANNER */}
      <section className="w-full py-16 bg-[#0d0e12]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="relative rounded-2xl bg-gradient-to-r from-[#292a2e] via-[#1f1f24] to-[#292a2e] p-8 sm:p-12 overflow-hidden shadow-2xl border border-white/5">
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#e2c399] block mb-2">
                  LIMITED STUDIO SLOTS
                </span>
                <h3 className="font-['Syne'] text-2xl sm:text-3xl font-semibold uppercase text-[#e3e2e8] tracking-tight mb-3">
                  Ready to restore your vehicle's perfection?
                </h3>
                <p className="text-sm text-[#d1c5b8] font-light">
                  Reserve your slot for Active Foam Wash, Multi-stage Correction, or Ceramic Armor at our Samalkha atelier.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
                <Link
                  to="/contact-booking"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded bg-[#c5a880] text-[#402d0f] text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_32px_rgba(197,168,128,0.2)] hover:bg-[#e2c399] hover:text-[#281800]"
                >
                  Book Detailing Session
                </Link>
                <Link
                  to="/packages"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded bg-[#343439] text-[#e3e2e8] text-xs font-semibold tracking-wider uppercase hover:bg-[#38393e] transition-colors border border-white/5"
                >
                  View Packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
