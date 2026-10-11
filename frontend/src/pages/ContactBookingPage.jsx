import React from 'react';
import { useSearchParams } from 'react-router-dom';
import BookingForm from '../components/BookingForm';

export default function ContactBookingPage() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || '';

  return (
    <div className="w-full bg-[#121317] pt-24 pb-20">
      <section className="relative w-full overflow-hidden bg-[#0d0e12]">
        {/* Background Atmospheric Scrim */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/porsche-gt3.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0e12]/80 via-[#121317]/90 to-[#121317] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-16">
          {/* Header Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-2.5 h-2.5 rounded-full bg-[#e2c399] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#e2c399]">
                Bay Reservation • Active Allocation
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#998f83]">
                Ref Code:
              </span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#d1c5b8] bg-[#292a2e] px-2.5 py-1 rounded border border-white/5">
                ATELIER-PANIPAT-2025
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Atelier Leadership & Details */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#e0c298]">
                  Studio Atelier Concierge
                </span>
                <h1 className="font-['Syne'] text-4xl sm:text-5xl uppercase text-[#e3e2e8] tracking-tight leading-tight">
                  Reserve Your <br className="hidden sm:block" />
                  <span className="text-[#e2c399]">Preservation Bay</span>
                </h1>
                <p className="text-base text-[#d1c5b8] max-w-xl font-light leading-relaxed">
                  WashHub is a premium car washing and detailing centre in Samalkha, Panipat, focused on quality car care and a professional customer experience.
                </p>
              </div>

              {/* Founder Leadership Card */}
              <div className="bg-[#1a1b20] p-6 rounded-lg backdrop-blur-xl border border-white/5 relative overflow-hidden group shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#e2c399]/5 rounded-full blur-2xl pointer-events-none" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-[#343439] shadow-md border border-[#e2c399]/30 flex items-center justify-center text-[#e2c399]">
                      <span className="material-symbols-outlined text-[32px]">verified_user</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-[10px] text-[#e2c399] uppercase tracking-[0.18em]">
                        Craft Leadership
                      </span>
                      <span className="font-['Syne'] text-xl uppercase text-[#e3e2e8] font-semibold">
                        Vishu Rana
                      </span>
                      <span className="text-xs text-[#998f83]">Founder, WashHub Atelier</span>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-end justify-between sm:justify-center border-t sm:border-t-0 pt-3 sm:pt-0 border-white/5">
                    <span className="font-mono text-[10px] text-[#4d463c] uppercase">
                      Studio Certification
                    </span>
                    <span className="font-mono text-xs text-[#e2c399] tracking-wider font-semibold">
                      IDA • Certified Detailer
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#d1c5b8] mt-4 leading-relaxed font-light italic">
                  “Every vehicle that enters our bays receives bespoke surface calibration under aerospace lighting standards. We prioritize long-term finish integrity above all else.”
                </p>
              </div>

              {/* Location & Schedule 2-Up Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#1a1b20] p-5 rounded-lg border border-white/5 flex flex-col justify-between shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-[#e2c399] text-[20px]">location_on</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#998f83]">
                      Studio Location
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[#e3e2e8]">Samalkha, Panipat</p>
                  <p className="text-xs text-[#d1c5b8]">Haryana, India — 132101</p>
                  <a
                    href="https://maps.google.com/?q=Samalkha,Panipat,Haryana,India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#e2c399] mt-3 uppercase tracking-wider hover:text-[#fedeb2] transition-colors"
                  >
                    <span>View Coordinates</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                  </a>
                </div>

                <div className="bg-[#1a1b20] p-5 rounded-lg border border-white/5 flex flex-col justify-between shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-[#e2c399] text-[20px]">schedule</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#998f83]">
                      Operating Rhythm
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[#e3e2e8]">Mon — Sun</p>
                  <p className="text-xs text-[#d1c5b8]">09:00 AM — 08:00 PM IST</p>
                  <span className="font-mono text-[10px] text-[#998f83] mt-3 uppercase tracking-wider">
                    Bespoke Intake Hours
                  </span>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="bg-[#1a1b20] p-5 rounded-lg border border-white/5 flex flex-col gap-4 shadow-lg">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#998f83]">
                  Direct Communication Lines
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-3 p-3 rounded bg-[#1f1f24] hover:bg-[#292a2e] transition-colors group border border-white/5"
                  >
                    <span className="material-symbols-outlined text-[#e2c399] text-[20px] group-hover:scale-110 transition-transform">
                      phone_in_talk
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="font-mono text-[10px] text-[#998f83] uppercase tracking-wider">
                        Direct Studio Bay
                      </span>
                      <span className="text-xs text-[#e3e2e8] font-medium truncate">
                        +91 98765 43210
                      </span>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded bg-[#1f1f24] hover:bg-[#292a2e] transition-colors group border border-white/5"
                  >
                    <span className="material-symbols-outlined text-[#e2c399] text-[20px] group-hover:scale-110 transition-transform">
                      chat
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="font-mono text-[10px] text-[#998f83] uppercase tracking-wider">
                        WhatsApp Dispatch
                      </span>
                      <span className="text-xs text-[#e3e2e8] font-medium truncate">
                        Instant Consultation
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Quality Standards Chips */}
              <div className="bg-[#0d0e12] p-5 rounded-lg border border-white/5 flex flex-col gap-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#998f83]">
                  Studio Bay Quality Standards
                </span>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-2 bg-[#292a2e] px-3 py-1.5 rounded border border-white/5">
                    <span className="material-symbols-outlined text-[#e2c399] text-[16px]">thermostat</span>
                    <span className="font-mono text-[11px] text-[#e3e2e8]">Climate-controlled bays</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#292a2e] px-3 py-1.5 rounded border border-white/5">
                    <span className="material-symbols-outlined text-[#e2c399] text-[16px]">air</span>
                    <span className="font-mono text-[11px] text-[#e3e2e8]">Dust-free coating suite</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#292a2e] px-3 py-1.5 rounded border border-white/5">
                    <span className="material-symbols-outlined text-[#e2c399] text-[16px]">verified_user</span>
                    <span className="font-mono text-[11px] text-[#e3e2e8]">Insured custody</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Full Interactive Booking Form */}
            <div className="lg:col-span-6 relative">
              <BookingForm initialService={initialService} />

              <div className="mt-4 p-4 rounded-lg bg-[#0d0e12]/80 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#e2c399] text-[18px]">lock</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#998f83]">
                    Confidential Garage Privacy Protocol
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#e2c399]">
                  Zero Plate Leaks
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Atelier Location Map Blueprint */}
      <section className="w-full bg-[#121317] py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#e2c399]">
                Studio Blueprint • Samalkha
              </span>
              <h3 className="font-['Syne'] text-2xl uppercase text-[#e3e2e8]">
                Integrated Atelier Location
              </h3>
              <p className="text-sm text-[#d1c5b8] leading-relaxed font-light">
                Conveniently accessible along the arterial Grand Trunk corridor in Samalkha, Panipat. Private enclosed transporter offloading available on schedule.
              </p>
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex items-center gap-2 text-[#d1c5b8] text-xs">
                  <span className="material-symbols-outlined text-[#e2c399] text-[16px]">local_shipping</span>
                  <span>Enclosed vehicle flatbed transit support</span>
                </div>
                <div className="flex items-center gap-2 text-[#d1c5b8] text-xs">
                  <span className="material-symbols-outlined text-[#e2c399] text-[16px]">security</span>
                  <span>24/7 Monitored perimeter &amp; fireproof shelter</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 overflow-hidden rounded-xl bg-[#1a1b20] border border-white/5 shadow-2xl relative min-h-[340px]">
              {/* Map background graphic */}
              <div
                className="w-full h-full min-h-[340px] bg-cover bg-center opacity-60"
                style={{
                  backgroundImage:
                    "radial-gradient(#292a2e 1.5px, transparent 1.5px), radial-gradient(#1f1f24 1.5px, #0d0e12 1.5px)",
                  backgroundSize: '30px 30px',
                  backgroundPosition: '0 0, 15px 15px',
                }}
              >
                {/* Visual Radar / Coordinate Marker */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-[#e2c399]/10 animate-ping absolute" />
                    <div className="w-16 h-16 rounded-full bg-[#e2c399]/20 border border-[#e2c399]/40 flex items-center justify-center shadow-lg">
                      <span className="material-symbols-outlined text-[#e2c399] text-[28px]">
                        directions_car
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Address Floater */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0d0e12]/90 backdrop-blur-md p-4 rounded border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#c5a880] text-[#402d0f] flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[18px]">assistant_navigation</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] uppercase text-[#998f83]">
                      Panipat District Studio
                    </span>
                    <span className="text-xs sm:text-sm text-[#e3e2e8] font-semibold">
                      WashHub Automotive Atelier, Samalkha, Panipat 132101
                    </span>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Samalkha,Panipat,Haryana,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded bg-[#292a2e] hover:bg-[#e2c399] hover:text-[#402d0f] font-mono text-[11px] uppercase tracking-wider text-[#e3e2e8] transition-colors shrink-0 border border-white/5"
                >
                  Open In Navigation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
