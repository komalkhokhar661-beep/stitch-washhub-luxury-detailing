import React, { useState, useRef, useCallback } from 'react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 5) position = 5;
    if (position > 95) position = 95;
    setSliderPosition(position);
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={(e) => isDragging && handleMove(e.clientX)}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        className="relative w-full h-80 sm:h-96 md:h-[440px] rounded-lg overflow-hidden shadow-2xl select-none cursor-ew-resize bg-[#121317] border border-white/10"
        role="slider"
        aria-label="Before and after paint correction comparison"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={5}
        aria-valuemax={95}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') setSliderPosition((prev) => Math.max(5, prev - 5));
          if (e.key === 'ArrowRight') setSliderPosition((prev) => Math.min(95, prev + 5));
        }}
      >
        {/* AFTER IMAGE (Underlying Full Layer) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/rotary-polishing.png"
            alt="After Paint Correction Studio Finish"
            className="w-full h-full object-cover pointer-events-none"
          />
          <span className="absolute top-4 right-4 font-mono text-[10px] sm:text-xs px-3 py-1 rounded bg-[#0d0e12]/85 text-[#e2c399] backdrop-blur-md uppercase tracking-wider border border-[#e2c399]/30">
            Post-Correction // 9H Cured
          </span>
        </div>

        {/* BEFORE IMAGE (Clipped Left Layer) */}
        <div
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src="/assets/foam-wash.png"
            alt="Before Detailing and Preparation"
            className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none filter brightness-75 contrast-125 saturate-50"
            style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
          />
          <span className="absolute top-4 left-4 font-mono text-[10px] sm:text-xs px-3 py-1 rounded bg-[#0d0e12]/85 text-[#998f83] backdrop-blur-md uppercase tracking-wider border border-white/10">
            Pre-Decon // Swirled
          </span>
        </div>

        {/* SLIDER DIVIDER BAR */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[#e2c399] pointer-events-none flex items-center justify-center shadow-[0_0_12px_rgba(226,195,153,0.8)] -translate-x-1/2"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-[#e2c399] text-[#402d0f] flex items-center justify-center shadow-lg border-2 border-[#121317]">
            <span className="material-symbols-outlined text-[16px]">drag_indicator</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-3 text-[#998f83] px-1 font-mono text-[10px] uppercase tracking-widest">
        <span>← Drag Left for Restored Gloss</span>
        <span>Interactive Inspection Frame →</span>
      </div>
    </div>
  );
}
