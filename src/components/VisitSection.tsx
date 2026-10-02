import React, { useRef, useState, useEffect } from 'react';
import { MapPin, Phone, ArrowUpRight, Mail, Compass, Navigation as NavIcon } from 'lucide-react';
import visitImage from '@/src/assets/images/visit_counter_wide_1790968400403.jpg';

interface VisitSectionProps {
  onOpenEmail?: () => void;
}

export const VisitSection: React.FC<VisitSectionProps> = ({ onOpenEmail }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [viewMode, setViewMode] = useState<'photo' | 'map'>('photo');

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        setHasEntered(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="visit"
      ref={sectionRef}
      className="py-24 md:py-36 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[#E5E1DA]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-14">
        {/* Left Column: COME BY. */}
        <div className="lg:col-span-5">
          <div className="font-mono text-[12px] md:text-[13px] tracking-[0.16em] uppercase text-[#A79580] mb-4">
            LOCATION //
          </div>
          <h2
            className="text-[#000000] font-sans font-bold leading-[0.94] text-balance"
            style={{
              fontSize: 'clamp(44px, 6.5vw, 84px)',
              letterSpacing: '-0.04em',
            }}
          >
            COME BY.
          </h2>
          <p className="text-base md:text-lg text-[#585858] mt-6 max-w-sm font-normal leading-relaxed">
            Conveniently situated in Hialeah off West 4th Street. Easy street parking and fast counter turnaround for work trucks, licensed tradesmen, and homeowners.
          </p>

          <div className="mt-8 pt-6 border-t border-[#E5E1DA] space-y-2 font-mono text-[12px] text-[#585858]">
            <div className="flex items-center gap-2 text-[#000000]">
              <MapPin className="w-3.5 h-3.5 text-[#A79580]" />
              <span>COORDINATES: 25.8260° N, 80.2858° W</span>
            </div>
            <div className="text-[#A79580]">
              HIALEAH / MIAMI-DADE COUNTY, FLORIDA
            </div>
          </div>
        </div>

        {/* Right Column: Address, Phone, Hours, and Actions */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="border-b border-[#E5E1DA] pb-8 mb-8">
            <div className="font-mono text-[11px] tracking-[0.18em] text-[#A79580] uppercase mb-2">
              HIALEAH / MIAMI-DADE
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-sans text-[#000000] tracking-tight mb-3">
              MEDINA &amp; SON PLUMBING SUPPLY
            </h3>
            <p className="font-mono text-base md:text-lg text-[#000000] mb-1">
              75 W 4TH ST, HIALEAH, FL 33010
            </p>
            <p className="font-mono text-sm text-[#585858] mb-3">
              Between Palm Ave &amp; Okeechobee Rd corridor
            </p>
            <a
              href="tel:3058871611"
              aria-label="Call Medina & Son"
              className="font-mono text-base text-[#585858] hover:text-[#000000] transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#A79580]" />
              <span>(305) 887-1611</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div>
              <span className="font-mono text-[11px] text-[#A79580] tracking-widest block uppercase mb-1">
                COUNTER HOURS
              </span>
              <p className="text-sm font-mono text-[#000000] leading-snug">
                MON – FRI: 7:00 AM – 4:30 PM<br />
                SAT: 7:30 AM – 12:00 PM<br />
                SUN: CLOSED
              </p>
            </div>

            <div className="flex flex-wrap sm:justify-end gap-3">
              <button
                onClick={onOpenEmail}
                className="btn-eliras-secondary group"
              >
                <span className="btn-text">EMAIL COUNTER</span>
                <span className="btn-icon">
                  <Mail className="w-4 h-4 text-[#A79580]" />
                </span>
              </button>

              <a
                href="https://maps.google.com/?q=75+W+4th+St,+Hialeah,+FL+33010"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-eliras group"
              >
                <span className="btn-text">GET DIRECTIONS</span>
                <span className="btn-icon">
                  <ArrowUpRight className="w-4 h-4 text-[#A79580]" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Media Mode Selector: Storefront Photography vs Interactive Google Map */}
      <div className="flex items-center justify-between mb-3 border-b border-[#E5E1DA] pb-2 font-mono text-[11px] uppercase tracking-wider">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setViewMode('photo')}
            className={`px-3 py-1 rounded transition-colors cursor-pointer ${
              viewMode === 'photo'
                ? 'bg-[#171715] text-[#FFFFFF]'
                : 'text-[#585858] hover:text-[#000000]'
            }`}
          >
            FIG. 08A // STORE PHOTOGRAPHY
          </button>
          <button
            onClick={() => setViewMode('map')}
            className={`px-3 py-1 rounded transition-colors cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'map'
                ? 'bg-[#171715] text-[#FFFFFF]'
                : 'text-[#585858] hover:text-[#000000]'
            }`}
          >
            <Compass className="w-3 h-3 text-[#A79580]" />
            <span>FIG. 08B // GOOGLE MAPS DIRECTORY</span>
          </button>
        </div>

        <a
          href="https://maps.google.com/?q=75+W+4th+St,+Hialeah,+FL+33010"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1 text-[#A79580] hover:text-[#000000] transition-colors"
        >
          <span>OPEN FULL MAP</span>
          <NavIcon className="w-3 h-3" />
        </a>
      </div>

      {/* Main Display Container: Photography OR Embedded Google Maps */}
      <div className="relative overflow-hidden bg-[#F0EDE7] border border-[#E5E1DA] aspect-[16/8] md:aspect-[21/9]">
        {viewMode === 'photo' ? (
          <>
            <img
              src={visitImage}
              alt="Medina & Son plumbing supply store counter and inventory layout in Hialeah"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: hasEntered ? 'translateX(0px)' : 'translateX(-35px)',
              }}
            />
            {/* Clean corner technical label */}
            <div className="absolute bottom-4 left-4 bg-[#171715]/85 text-[#FFFFFF] font-mono text-[10px] md:text-[11px] tracking-[0.16em] uppercase px-3 py-1.5 backdrop-blur-xs">
              <span>SUPPLY COUNTER // EST. 1976</span>
              <span className="mx-2 text-[#A79580]">·</span>
              <span>75 W 4TH ST</span>
            </div>
          </>
        ) : (
          <div className="w-full h-full relative">
            <iframe
              title="Medina & Son Plumbing Supply Google Map Location"
              src="https://maps.google.com/maps?q=75+W+4th+St,+Hialeah,+FL+33010&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 grayscale-[25%] contrast-[105%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Interactive Google Map showing 75 W 4th St, Hialeah, FL 33010"
            />
            <div className="absolute top-4 left-4 bg-[#171715]/90 text-[#FFFFFF] font-mono text-[10px] md:text-[11px] tracking-[0.16em] uppercase px-3 py-1.5 backdrop-blur-xs flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#A79580]" />
              <span>75 W 4TH ST, HIALEAH, FL 33010</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
