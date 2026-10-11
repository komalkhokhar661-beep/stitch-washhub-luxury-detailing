import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeModalImage, setActiveModalImage] = useState(null);

  const galleryItems = [
    {
      id: 'frame-01',
      title: 'Porsche 911 GT3 RS • Finished Mirror Gloss',
      subtitle: 'Preservation Showcase',
      description:
        'Subjected to complete single-stage rotary jeweling, dual infrared ceramic cure cycles, and cleanroom air ionization inside our Panipat clean suite.',
      category: ['paint-correction', 'ceramic-coating'],
      badge: 'Final Inspection // Stage 3',
      frameNumber: 'Frame #01',
      specMeta: '-3.8 µm Preserved',
      aperture: 'ƒ/2.8 • 5600K Continuous',
      image: '/assets/porsche-gt3.png',
      colSpan: 'md:col-span-12',
      aspectRatio: 'aspect-[16/9] lg:aspect-[21/9]',
      duration: '12-Hour Master Finish',
    },
    {
      id: 'frame-02',
      title: 'Active Snow Foam Bath • BMW M8 Competition',
      subtitle: 'Process 01 // Contactless Prep',
      description:
        'Hyper-dense citrus surfactant suspension encapsulates abrasive surface particulates before mechanical mitt contact. Paired with triple-filtered deionized water.',
      category: ['foam-wash'],
      badge: 'Decontamination',
      tagHover: 'pH 7.2 Neutral',
      metaLeft: 'Dwell Time: 8.5 Mins',
      metaRight: 'Hydrophobic Lift',
      image: '/assets/foam-wash.png',
      colSpan: 'md:col-span-7',
      aspectRatio: 'aspect-[4/3] md:aspect-[16/10]',
    },
    {
      id: 'frame-03',
      title: 'Precision 9H Ceramic Application • McLaren 720S',
      subtitle: 'Process 03 // Matrix Bond',
      description:
        'Micro-layering of cross-linking silicon dioxide formulas onto Paris Blue metallic clear, calibrated for extreme contact angle (>115°) water repellence.',
      category: ['ceramic-coating'],
      badge: 'Nano-Molecular',
      metaLeft: 'Bond Hardness: 9H Lab',
      metaRight: '5-Year Warranty',
      image: '/assets/ceramic-coating.png',
      colSpan: 'md:col-span-5',
      aspectRatio: 'aspect-[4/3] md:aspect-[16/10]',
    },
    {
      id: 'frame-04',
      title: 'Cockpit Detail & Leather Rejuvenation • Aston Martin',
      subtitle: 'Interior Architecture',
      description:
        'Natural boar-bristle agility brushwork across gloss twill carbon console and aniline hide conditioning with zero greasy residue.',
      category: ['interior-detailing'],
      badge: 'Bespoke Interior',
      metaLeft: 'Aniline Treatment',
      metaRight: 'Matte OEM Tactile',
      image: '/assets/interior-leather.png',
      colSpan: 'md:col-span-5',
      aspectRatio: 'aspect-[4/3] md:aspect-[16/10]',
    },
    {
      id: 'frame-05',
      title: 'Rotary Paint Correction • Ferrari F8 Tributo',
      subtitle: 'Process 02 // Defect Removal',
      description:
        'Diminishing micro-abrasives under dual-action rotary orbital motion to eradicate holograms, wash marring, and bird strike etching from Rosso Corsa sheetmetal.',
      category: ['paint-correction'],
      badge: 'Multi-Stage Correction',
      specTop: 'Micro-Scratch Elimination: 96.5%',
      metaLeft: 'Rupes BigFoot 21mm',
      metaRight: 'True Defect Eradication',
      image: '/assets/rotary-polishing.png',
      colSpan: 'md:col-span-7',
      aspectRatio: 'aspect-[4/3] md:aspect-[16/10]',
    },
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category.includes(activeFilter);
  });

  return (
    <div className="w-full bg-[#121317] pt-24 pb-20">
      {/* Top Atmospheric Lighting Scrim */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[340px] bg-[#e2c399]/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Editorial Header Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/5">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block w-2 h-2 rounded-full bg-[#e2c399] animate-pulse" />
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#e2c399]">
                  Archive // Vol. 04
                </span>
                <span className="text-[#4d463c] font-mono text-[11px]">/</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#998f83]">
                  Panipat Bay Observations
                </span>
              </div>
              <h1 className="font-['Syne'] text-4xl sm:text-5xl uppercase tracking-tight text-[#e3e2e8]">
                The Visual Craft
              </h1>
              <p className="text-base sm:text-lg text-[#d1c5b8] max-w-2xl mt-3 font-light leading-relaxed">
                Witness the pursuit of automotive perfection inside the WashHub bay. Every reflection calculated, every substrate stabilized.
              </p>
            </div>

            {/* Telemetry Stats Strip */}
            <div className="flex items-center gap-6 sm:gap-8 shrink-0 py-3 px-5 rounded-lg bg-[#1f1f24]/80 backdrop-blur-md border border-white/5">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#998f83]">
                  Atelier Specs
                </span>
                <span className="font-mono text-xs text-[#e2c399] mt-1 font-semibold">
                  CRI 98+ Scrims
                </span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#998f83]">
                  Gloss Target
                </span>
                <span className="font-mono text-xs text-[#e3e2e8] mt-1 font-semibold">
                  99.4 GU @ 60°
                </span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#998f83]">
                  Vehicles Logged
                </span>
                <span className="font-mono text-xs text-[#e3e2e8] mt-1 font-semibold">
                  348 Exotic Units
                </span>
              </div>
            </div>
          </div>

          {/* Filter Controls Strip */}
          <div className="pt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex p-1 rounded-lg bg-[#1a1b20]/90 backdrop-blur-xl border border-white/5">
              {[
                { label: 'All Works [05]', val: 'all' },
                { label: 'Foam Wash', val: 'foam-wash' },
                { label: 'Ceramic Coating', val: 'ceramic-coating' },
                { label: 'Paint Correction', val: 'paint-correction' },
                { label: 'Interior Detailing', val: 'interior-detailing' },
              ].map((btn) => (
                <button
                  key={btn.val}
                  type="button"
                  onClick={() => setActiveFilter(btn.val)}
                  className={`px-4 sm:px-5 py-2 rounded font-mono text-[11px] uppercase tracking-[0.16em] transition-all duration-300 ${
                    activeFilter === btn.val
                      ? 'bg-[#c5a880] text-[#402d0f] font-semibold shadow-md'
                      : 'text-[#998f83] hover:text-[#e3e2e8]'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3 text-[#998f83]">
              <span className="font-mono text-[10px] uppercase tracking-widest">Display Matrix</span>
              <span className="font-mono text-[10px] text-[#e2c399] font-semibold">
                Asymmetric Studio Grid
              </span>
            </div>
          </div>
        </section>

        {/* Master Showcase Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className={`${item.colSpan} group relative rounded-lg overflow-hidden bg-[#1a1b20] border border-white/5 transition-all duration-500 hover:shadow-[0_24px_60px_rgba(0,0,0,0.8)] hover:border-[#c5a880]/30 cursor-pointer flex flex-col justify-between`}
                onClick={() => setActiveModalImage(item)}
              >
                <div className={`relative w-full ${item.aspectRatio} overflow-hidden bg-[#0d0e12]`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-[#0d0e12]/30 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-75" />

                  {/* Header Badge Float */}
                  <div className="absolute top-5 left-5 flex items-center gap-2">
                    <span className="px-3 py-1 rounded bg-[#0d0e12]/80 backdrop-blur-md font-mono text-[10px] uppercase tracking-[0.18em] text-[#e2c399] border border-white/5">
                      {item.badge}
                    </span>
                    {item.frameNumber && (
                      <span className="px-3 py-1 rounded bg-[#0d0e12]/60 backdrop-blur-md font-mono text-[10px] text-[#d1c5b8] font-medium border border-white/5">
                        {item.frameNumber}
                      </span>
                    )}
                  </div>

                  {item.duration && (
                    <div className="absolute top-5 right-5 hidden sm:flex items-center gap-2 px-3 py-1 rounded bg-[#0d0e12]/80 backdrop-blur-md text-[#998f83] font-mono text-[10px] border border-white/5">
                      <span className="material-symbols-outlined text-[14px] text-[#e2c399]">tune</span>
                      <span>{item.duration}</span>
                    </div>
                  )}

                  {item.tagHover && (
                    <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-2.5 py-1 rounded bg-[#e2c399] text-[#402d0f] font-mono text-[10px] uppercase tracking-widest font-semibold">
                        {item.tagHover}
                      </span>
                    </div>
                  )}

                  {item.specTop && (
                    <div className="absolute top-5 right-5 px-3 py-1 rounded bg-[#0d0e12]/80 backdrop-blur-md font-mono text-[10px] text-[#e3e2e8] border border-white/5">
                      {item.specTop}
                    </div>
                  )}
                </div>

                {/* Card Text & Metadata Deck */}
                <div className="p-6 md:p-8 bg-[#1a1b20] flex flex-col justify-between flex-grow">
                  <div>
                    <span className="font-mono text-[10px] text-[#e2c399] uppercase tracking-[0.2em] block mb-2 font-semibold">
                      {item.subtitle}
                    </span>
                    <h2 className="font-['Syne'] text-xl sm:text-2xl uppercase text-[#e3e2e8] tracking-tight mb-2 group-hover:text-[#e2c399] transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#d1c5b8] font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {(item.specMeta || item.metaLeft) && (
                    <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[#998f83] font-mono text-[10px] uppercase tracking-wider">
                      <span>{item.specMeta ? `Clear Coat Delta: ${item.specMeta}` : item.metaLeft}</span>
                      <span className="text-[#e2c399] font-medium">{item.aperture || item.metaRight}</span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Atelier Standard Blueprint Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
          <div className="rounded-xl p-8 lg:p-12 bg-[#1f1f24]/60 backdrop-blur-xl relative overflow-hidden border border-white/5">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#e2c399]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#e2c399] mb-2 block">
                  The WashHub Technical Standard
                </span>
                <h3 className="font-['Syne'] text-3xl font-semibold uppercase text-[#e3e2e8] tracking-tight mb-4">
                  Zero Holograms. Zero Fillers. Pure Optical Clarity.
                </h3>
                <p className="text-sm text-[#d1c5b8] font-light max-w-2xl leading-relaxed">
                  Every photograph featured in our catalog reflects honest, unfiltered atelier lighting without silicon glazing agents. When we deliver a completed vehicle at our Samalkha facility, what you observe under direct midday sunlight matches the studio bay precision.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
                <Link
                  to="/contact-booking"
                  className="w-full text-center px-6 py-4 rounded bg-[#e2c399] text-[#402d0f] font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-[#fedeb2] shadow-[0_0_24px_rgba(197,168,128,0.25)]"
                >
                  Reserve Detailing Session
                </Link>
                <Link
                  to="/packages"
                  className="w-full text-center px-6 py-4 rounded bg-[#292a2e] text-[#e3e2e8] font-mono text-xs font-medium uppercase tracking-wider transition-all duration-300 hover:bg-[#343439] border border-white/5"
                >
                  Explore Atelier Packages
                </Link>
              </div>
            </div>

            {/* Metric Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 mt-10 border-t border-white/5">
              <div>
                <div className="font-['Syne'] text-3xl leading-tight text-[#e3e2e8] font-bold">100%</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#998f83] mt-1">
                  Deionized Water Wash
                </div>
              </div>
              <div>
                <div className="font-['Syne'] text-3xl leading-tight text-[#e3e2e8] font-bold">0 µm</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#998f83] mt-1">
                  Filler Glaze Masking
                </div>
              </div>
              <div>
                <div className="font-['Syne'] text-3xl leading-tight text-[#e3e2e8] font-bold">±1 µm</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#998f83] mt-1">
                  Ultrasonic Depth Gauge
                </div>
              </div>
              <div>
                <div className="font-['Syne'] text-3xl leading-tight text-[#e2c399] font-bold">ISO-5</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#998f83] mt-1">
                  Cleanroom PPF Bay
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox Inspection Modal */}
      {activeModalImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#0d0e12]/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#1a1b20] rounded-xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModalImage(null)}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-[#0d0e12]/80 text-[#e3e2e8] hover:text-[#e2c399] flex items-center justify-center border border-white/10"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeModalImage.image}
                alt={activeModalImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>
            <div className="p-6 bg-[#1a1b20] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="font-mono text-[10px] text-[#e2c399] uppercase tracking-widest block">
                  {activeModalImage.subtitle}
                </span>
                <h3 className="font-['Syne'] text-xl uppercase text-[#e3e2e8]">{activeModalImage.title}</h3>
              </div>
              <Link
                to="/contact-booking"
                className="px-6 py-2.5 rounded bg-[#c5a880] text-[#402d0f] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#e2c399]"
              >
                Inquire For This Vehicle
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
