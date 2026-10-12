import React, { useState } from 'react';
import { apiClient } from '../api/client';

export default function BookingForm({ initialService = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    carModel: '',
    serviceTier: initialService || '',
    preferredDate: '',
    custodyShift: 'morning',
    specialRequirements: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successData, setSuccessData] = useState(null);

  // Today's date string for input min attribute
  const todayStr = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id === 'full-name'
        ? 'fullName'
        : id === 'phone-number'
        ? 'phoneNumber'
        : id === 'car-model'
        ? 'carModel'
        : id === 'service-tier'
        ? 'serviceTier'
        : id === 'preferred-date'
        ? 'preferredDate'
        : id === 'special-requirements'
        ? 'specialRequirements'
        : id]: value,
    }));
    if (error) setError(null);
  };

  const handleShiftSelect = (shift) => {
    setFormData((prev) => ({ ...prev, custodyShift: shift }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Client-side validation
    if (!formData.fullName.trim()) {
      setError('Please provide your full name.');
      return;
    }
    if (!formData.phoneNumber.trim() || formData.phoneNumber.trim().length < 8) {
      setError('Please provide a valid contact phone number.');
      return;
    }
    if (!formData.carModel.trim()) {
      setError('Please specify your vehicle make & model (e.g. Porsche 911 GT3).');
      return;
    }
    if (!formData.serviceTier) {
      setError('Please select a preservation service tier.');
      return;
    }
    if (!formData.preferredDate) {
      setError('Please select a preferred intake date.');
      return;
    }

    setLoading(true);

    try {
      const response = await apiClient.createBooking(formData);
      setSuccessData(response.data);
    } catch (err) {
      const msg = err?.message || '';
      let userFriendlyError = msg;
      if (
        !msg ||
        msg.includes('Unexpected end of JSON input') ||
        msg.includes('is not valid JSON') ||
        msg.includes('JSON.parse')
      ) {
        userFriendlyError = 'The atelier reservation server returned an unexpected response. Please try again shortly or contact concierge on WhatsApp.';
      }
      setError(userFriendlyError);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSuccessData(null);
    setFormData({
      fullName: '',
      phoneNumber: '',
      carModel: '',
      serviceTier: '',
      preferredDate: '',
      custodyShift: 'morning',
      specialRequirements: '',
    });
  };

  if (successData) {
    return (
      <div className="bg-[#1f1f24] rounded-xl p-8 border border-[#c5a880]/30 shadow-2xl text-center flex flex-col items-center gap-4 animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-[#c5a880]/20 text-[#e2c399] flex items-center justify-center border border-[#c5a880]/40">
          <span className="material-symbols-outlined text-[36px]">verified</span>
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#e2c399] block mb-1">
            [ALLOCATION REGISTERED]
          </span>
          <h3 className="font-['Syne'] text-2xl font-bold uppercase text-[#e3e2e8]">
            Bay Slot Provisionally Locked
          </h3>
          <p className="text-sm text-[#d1c5b8] mt-2 max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-white">{successData.fullName}</strong>. The WashHub atelier concierge in Samalkha has registered your vehicle intake request.
          </p>
        </div>

        {/* Telemetry Voucher Box */}
        <div className="w-full max-w-md bg-[#0d0e12] rounded-lg p-5 border border-white/10 text-left my-2 space-y-2 font-mono text-xs">
          <div className="flex justify-between items-center pb-2 border-b border-white/10">
            <span className="text-[#998f83] uppercase">Reservation Code</span>
            <span className="text-[#e2c399] font-bold text-sm tracking-wider">{successData.referenceCode}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#998f83]">Vehicle Spec:</span>
            <span className="text-[#e3e2e8]">{successData.carModel}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#998f83]">Intake Date:</span>
            <span className="text-[#e3e2e8]">
              {new Date(successData.preferredDate).toLocaleDateString('en-IN', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#998f83]">Shift Window:</span>
            <span className="text-[#e3e2e8] uppercase">
              {successData.custodyShift === 'morning' ? '09:00 - 13:00' : '14:00 - 19:00'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#998f83]">Studio Bay:</span>
            <span className="text-[#e2c399]">Samalkha Atelier, Panipat</span>
          </div>
        </div>

        <p className="font-mono text-xs text-[#998f83]">
          Our studio manager will confirm your slot via call / WhatsApp within 2 business hours.
        </p>

        <button
          type="button"
          onClick={handleReset}
          className="mt-2 px-6 py-2.5 rounded bg-[#292a2e] text-[#e3e2e8] hover:bg-[#343439] hover:text-[#e2c399] text-xs font-mono uppercase tracking-wider transition-colors"
        >
          Book Another Vehicle
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#1a1b20]/90 backdrop-blur-2xl rounded-xl p-6 sm:p-8 shadow-2xl relative border border-white/5">
      <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/5">
        <div className="flex flex-col">
          <span className="font-mono text-[10px] text-[#e2c399] uppercase tracking-[0.2em]">
            Priority Bay Allocation
          </span>
          <h2 className="font-['Syne'] text-2xl uppercase tracking-tight text-[#e3e2e8]">
            Atelier Reservation
          </h2>
        </div>
        <span className="font-mono text-[10px] text-[#998f83] uppercase tracking-wider bg-[#292a2e] px-2.5 py-1 rounded">
          Form // 01
        </span>
      </div>

      {error && (
        <div
          role="alert"
          className="mb-5 p-4 rounded bg-[#93000a]/20 border border-[#ffb4ab]/40 text-[#ffb4ab] text-xs flex items-center gap-3 animate-fadeIn"
        >
          <span className="material-symbols-outlined text-[20px] text-[#ffb4ab]">error</span>
          <span className="flex-1">{error}</span>
          <button
            type="button"
            onClick={() => setError(null)}
            className="text-[#ffb4ab] hover:text-white"
            aria-label="Dismiss error"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
        {/* Name and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="full-name" className="font-mono text-[11px] uppercase tracking-wider text-[#998f83]">
              Full Name <span className="text-[#e2c399]">*</span>
            </label>
            <input
              id="full-name"
              type="text"
              required
              placeholder="e.g. Kabir Varma"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-[#0d0e12] text-[#e3e2e8] text-sm px-4 py-3 rounded placeholder:text-[#4d463c] border border-white/10 focus:outline-none focus:border-[#e2c399] focus:ring-1 focus:ring-[#e2c399] transition-all"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone-number" className="font-mono text-[11px] uppercase tracking-wider text-[#998f83]">
              Phone Number <span className="text-[#e2c399]">*</span>
            </label>
            <input
              id="phone-number"
              type="tel"
              required
              placeholder="+91 98000 00000"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full bg-[#0d0e12] text-[#e3e2e8] text-sm px-4 py-3 rounded placeholder:text-[#4d463c] border border-white/10 focus:outline-none focus:border-[#e2c399] focus:ring-1 focus:ring-[#e2c399] transition-all"
            />
          </div>
        </div>

        {/* Vehicle Model and Service Tier */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="car-model" className="font-mono text-[11px] uppercase tracking-wider text-[#998f83]">
              Vehicle Specification <span className="text-[#e2c399]">*</span>
            </label>
            <input
              id="car-model"
              type="text"
              required
              placeholder="e.g. Porsche 911 GT3 / BMW M4"
              value={formData.carModel}
              onChange={handleChange}
              className="w-full bg-[#0d0e12] text-[#e3e2e8] text-sm px-4 py-3 rounded placeholder:text-[#4d463c] border border-white/10 focus:outline-none focus:border-[#e2c399] focus:ring-1 focus:ring-[#e2c399] transition-all"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="service-tier" className="font-mono text-[11px] uppercase tracking-wider text-[#998f83]">
              Preservation Service <span className="text-[#e2c399]">*</span>
            </label>
            <div className="relative">
              <select
                id="service-tier"
                required
                value={formData.serviceTier}
                onChange={handleChange}
                className="w-full bg-[#0d0e12] text-[#e3e2e8] text-sm px-4 py-3 rounded border border-white/10 focus:outline-none focus:border-[#e2c399] focus:ring-1 focus:ring-[#e2c399] transition-all appearance-none cursor-pointer pr-10"
              >
                <option value="" disabled className="text-[#4d463c]">
                  Select Service Tier
                </option>
                <option value="premium-wash">Premium Car Wash [SRV-01]</option>
                <option value="interior-deep">Interior Deep Cleaning [SRV-02]</option>
                <option value="car-detailing">Car Detailing [SRV-03]</option>
                <option value="ceramic-coating">Ceramic Coating 9H [SRV-04]</option>
                <option value="paint-protection">Paint Protection PPF [SRV-05]</option>
                <option value="multi-stage-polishing">Multi-Stage Polishing [SRV-06]</option>
                <option value="essential-care-pkg">Package: Essential Care [PKG-01]</option>
                <option value="premium-care-pkg">Package: Premium Care [PKG-02]</option>
                <option value="luxury-detailing-pkg">Package: Luxury Detailing [PKG-03]</option>
              </select>
              <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-[#998f83] pointer-events-none text-[18px]">
                expand_more
              </span>
            </div>
          </div>
        </div>

        {/* Date and Shift */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="preferred-date" className="font-mono text-[11px] uppercase tracking-wider text-[#998f83]">
              Preferred Intake Date <span className="text-[#e2c399]">*</span>
            </label>
            <input
              id="preferred-date"
              type="date"
              required
              min={todayStr}
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full bg-[#0d0e12] text-[#e3e2e8] text-sm px-4 py-3 rounded border border-white/10 focus:outline-none focus:border-[#e2c399] focus:ring-1 focus:ring-[#e2c399] transition-all cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[11px] uppercase tracking-wider text-[#998f83]">
              Custody Timeframe
            </label>
            <div className="grid grid-cols-2 gap-2 h-[46px]">
              <button
                type="button"
                onClick={() => handleShiftSelect('morning')}
                className={`text-xs font-mono uppercase tracking-wider rounded px-3 py-2 text-center transition-all focus:outline-none border ${
                  formData.custodyShift === 'morning'
                    ? 'bg-[#1f1f24] text-[#e2c399] border-[#e2c399]/40 shadow-sm'
                    : 'bg-[#0d0e12] text-[#998f83] border-white/10 hover:text-white'
                }`}
              >
                09:00 - 13:00
              </button>
              <button
                type="button"
                onClick={() => handleShiftSelect('evening')}
                className={`text-xs font-mono uppercase tracking-wider rounded px-3 py-2 text-center transition-all focus:outline-none border ${
                  formData.custodyShift === 'evening'
                    ? 'bg-[#1f1f24] text-[#e2c399] border-[#e2c399]/40 shadow-sm'
                    : 'bg-[#0d0e12] text-[#998f83] border-white/10 hover:text-white'
                }`}
              >
                14:00 - 19:00
              </button>
            </div>
          </div>
        </div>

        {/* Vehicle Notes & Diagnostics */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="special-requirements" className="font-mono text-[11px] uppercase tracking-wider text-[#998f83]">
            Vehicle Notes &amp; Diagnostics <span className="text-[#4d463c] font-normal">(Optional)</span>
          </label>
          <textarea
            id="special-requirements"
            rows="3"
            placeholder="Specify existing coatings, clear coat sensitivity, matte vinyl areas, or interior leather restoration needs..."
            value={formData.specialRequirements}
            onChange={handleChange}
            className="w-full bg-[#0d0e12] text-[#e3e2e8] text-sm p-4 rounded placeholder:text-[#4d463c] border border-white/10 focus:outline-none focus:border-[#e2c399] focus:ring-1 focus:ring-[#e2c399] transition-all resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col gap-3 pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-6 rounded bg-[#c5a880] text-[#402d0f] font-['Syne'] text-base uppercase tracking-wider font-semibold transition-all duration-300 shadow-[0_0_28px_rgba(197,168,128,0.22)] hover:bg-[#e2c399] hover:text-[#281800] hover:shadow-[0_0_36px_rgba(197,168,128,0.4)] active:scale-[0.99] flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-[#402d0f]" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Transmitting Request...</span>
              </>
            ) : (
              <>
                <span>Book Now</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </>
            )}
          </button>
          <div className="flex items-center justify-center gap-2 text-center">
            <span className="material-symbols-outlined text-[#e2c399] text-[15px]">verified</span>
            <p className="font-mono text-[10px] text-[#998f83] uppercase tracking-wider">
              Our studio manager will confirm your slot within 2 business hours.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
