import React, { useRef, useState, useEffect } from 'react';
import archivalImage from '@/src/assets/images/archival_plumbing_shelves_1790968390051.jpg';

export const FamilyBusinessSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        setInView(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[#E5E1DA]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Visual Focus ESTABLISHED 1976 */}
        <div className="lg:col-span-7">
          <div className="font-mono text-[12px] md:text-[13px] tracking-[0.16em] uppercase text-[#A79580] mb-4">
            DOCUMENTARY RECORD //
          </div>

          <div
            className="text-[#000000] font-sans font-bold leading-[0.92] text-balance mb-6"
            style={{
              fontSize: 'clamp(44px, 6.5vw, 84px)',
              letterSpacing: '-0.04em',
            }}
          >
            ESTABLISHED<br />
            1976
          </div>

          <p className="text-lg md:text-xl text-[#585858] font-normal leading-relaxed max-w-xl mb-8">
            A long-running Hialeah plumbing supply business serving trade customers and homeowners. Built on physical counter service, continuous inventory, and reliable product knowledge for South Florida projects.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-[#E5E1DA] font-mono text-[12px] uppercase text-[#585858]">
            <div>
              <span className="block text-[#A79580] text-[10px] tracking-widest mb-1">LOCATION</span>
              <span className="font-medium text-[#000000]">HIALEAH, FL</span>
            </div>
            <div>
              <span className="block text-[#A79580] text-[10px] tracking-widest mb-1">DISCIPLINE</span>
              <span className="font-medium text-[#000000]">PLUMBING SUPPLY</span>
            </div>
            <div>
              <span className="block text-[#A79580] text-[10px] tracking-widest mb-1">SERVICE</span>
              <span className="font-medium text-[#000000]">RETAIL &amp; TRADE</span>
            </div>
          </div>
        </div>

        {/* Right Column: Archival-style Scanned Documentary Image */}
        <div className="lg:col-span-5">
          <div className="relative border border-[#E5E1DA] bg-[#F0EDE7] aspect-[4/3] overflow-hidden">
            <img
              src={archivalImage}
              alt="Archival photograph of organized metal shelves with plumbing fittings"
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
                inView ? 'grayscale-0 opacity-100' : 'grayscale-[45%] opacity-85'
              }`}
            />

            {/* Subtle Archival Tag overlay */}
            <div className="absolute bottom-3 left-3 bg-[#171715]/80 text-[#FFFFFF] font-mono text-[10px] tracking-[0.18em] px-2.5 py-1 uppercase backdrop-blur-xs">
              ARCHIVE // 75 W 4TH ST
            </div>
          </div>

          <div className="mt-2.5 flex justify-between font-mono text-[11px] text-[#A79580] tracking-widest uppercase">
            <span>HISTORICAL RECORD</span>
            <span>HIALEAH / MIAMI-DADE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
