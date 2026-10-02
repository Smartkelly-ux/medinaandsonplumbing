import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import hardToFindImage from '@/src/assets/images/hard_to_find_brass_valves_1790968378613.jpg';

interface HardToFindSectionProps {
  onOpenEmail?: () => void;
}

export const HardToFindSection: React.FC<HardToFindSectionProps> = ({ onOpenEmail }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cropOffset, setCropOffset] = useState(50);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Scroll progress while in viewport
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const total = windowHeight + rect.height;
        const current = windowHeight - rect.top;
        const progress = Math.max(0, Math.min(1, current / total));
        // Shift crop from 20% to 80% without moving the outer frame
        setCropOffset(20 + progress * 60);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hard-to-find"
      ref={containerRef}
      className="relative bg-[#171715] text-[#FFFFFF] py-28 md:py-36 overflow-hidden"
    >
      {/* Fixed Frame with Changing Crop (Stationary container, shifting object-position) */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <img
          src={hardToFindImage}
          alt="Heavy industrial brass plumbing valves and rare fittings"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-[object-position] duration-300 ease-out"
          style={{
            objectPosition: `center ${cropOffset}%`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171715] via-[#171715]/80 to-[#171715]/50" />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          {/* Small Label */}
          <div className="font-mono text-[12px] md:text-[13px] tracking-[0.16em] uppercase text-[#A79580] mb-6 flex items-center gap-3">
            <span>SPECIAL ORDERS</span>
            <span className="text-[#A79580]/50">/</span>
            <span>PARTS</span>
            <span className="text-[#A79580]/50">/</span>
            <span>FITTINGS</span>
          </div>

          {/* Headline */}
          <h2
            className="font-sans font-bold leading-[0.96] text-white text-balance mb-8"
            style={{
              fontSize: 'clamp(36px, 5.2vw, 68px)',
              letterSpacing: '-0.035em',
            }}
          >
            SOME PARTS<br />
            AREN'T FOUND<br />
            ON EVERY SHELF.
          </h2>

          {/* Supporting Copy */}
          <p className="text-lg md:text-xl text-[#A79580] font-normal leading-relaxed mb-10 max-w-2xl">
            Find the fitting, replacement part or fixture your job actually calls for. When dealing with older Miami homes, legacy valve stems, or non-standard thread counts, we help identify the match and place direct special orders when rare inventory is required.
          </p>

          {/* Practical Callout */}
          <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg max-w-xl mb-10">
            <div className="font-mono text-[11px] tracking-[0.16em] text-[#A79580] uppercase mb-2">
              COUNTER PROTOCOL
            </div>
            <p className="text-sm font-sans text-white/80 leading-relaxed">
              Bring the worn stem, broken cartridge, or take a clear photo with a ruler. Our counter team matches manufacturer specifications on the spot.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="tel:3058871611"
              aria-label="Check Part Availability"
              className="btn-eliras group"
            >
              <span className="btn-text">CHECK PART AVAILABILITY</span>
              <span className="btn-icon">
                <Phone className="w-4 h-4 text-[#A79580]" />
              </span>
            </a>

            <button
              onClick={onOpenEmail}
              className="btn-eliras-secondary group !text-white !border-2 !border-white hover:!bg-white hover:!text-[#171715] transition-all"
            >
              <span className="btn-text !text-white group-hover:!text-[#171715]">EMAIL PART PHOTO</span>
              <span className="btn-icon">
                <Mail className="w-4 h-4 text-white group-hover:!text-[#171715] transition-colors" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
