import React, { useEffect, useState } from 'react';
import { Phone, ArrowDownRight, Mail } from 'lucide-react';
import heroImage from '@/src/assets/images/hero_plumbing_fittings_1790968351304.jpg';

interface HeroProps {
  onOpenEmail?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEmail }) => {
  const [loadStage, setLoadStage] = useState(0);

  useEffect(() => {
    // Stage 1: Headline tracking settle starts
    const t1 = setTimeout(() => setLoadStage(1), 100);
    // Stage 2: Image vertical clip reveal
    const t2 = setTimeout(() => setLoadStage(2), 350);
    // Stage 3: Metadata opacity + tracking
    const t3 = setTimeout(() => setLoadStage(3), 600);
    // Stage 4: CTAs appear last
    const t4 = setTimeout(() => setLoadStage(4), 850);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto flex flex-col justify-between">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Small Mono Metadata */}
          <div
            className={`font-mono text-[12px] md:text-[13px] tracking-[0.16em] uppercase text-[#A79580] mb-6 md:mb-8 flex items-center gap-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              loadStage >= 3 ? 'opacity-100 tracking-[0.16em]' : 'opacity-0 tracking-[0.3em]'
            }`}
          >
            <span>HIALEAH / FL</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#A79580]" aria-hidden="true" />
            <span>EST. 1976</span>
          </div>

          {/* Large Headline with letter-spacing settling */}
          <h1
            className="text-[#000000] font-sans font-bold leading-[0.93] text-balance mb-8"
            style={{
              fontSize: 'clamp(42px, 6.5vw, 92px)',
            }}
          >
            <span
              className="block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                letterSpacing: loadStage >= 1 ? '-0.04em' : '0.12em',
                opacity: loadStage >= 1 ? 1 : 0,
              }}
            >
              THE RIGHT
            </span>
            <span
              className="block transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                letterSpacing: loadStage >= 1 ? '-0.04em' : '0.12em',
                opacity: loadStage >= 1 ? 1 : 0,
              }}
            >
              PART
            </span>
            <span
              className="block text-[#171715] transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                letterSpacing: loadStage >= 1 ? '-0.04em' : '0.12em',
                opacity: loadStage >= 1 ? 1 : 0,
              }}
            >
              MATTERS.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p
            className={`text-lg md:text-xl text-[#585858] max-w-xl font-normal leading-relaxed mb-10 transition-all duration-700 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              loadStage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Plumbing fixtures, parts and supplies for the job at hand. Practical know-how at the counter since 1976.
          </p>

          {/* CTAs (Appear last) */}
          <div
            className={`flex flex-wrap items-center gap-3 md:gap-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              loadStage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={() => scrollToSection('visit')}
              className="btn-eliras group"
            >
              <span className="btn-text">VISIT THE COUNTER</span>
              <span className="btn-icon">
                <ArrowDownRight className="w-4 h-4 text-[#A79580]" />
              </span>
            </button>

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
              href="tel:3058871611"
              aria-label="Call Medina & Son"
              className="btn-eliras-secondary group"
            >
              <span className="btn-text">CALL COUNTER</span>
              <span className="btn-icon">
                <Phone className="w-4 h-4 text-[#585858]" />
              </span>
            </a>
          </div>
        </div>

        {/* Right Column: Tall Photographic Editorial Crop */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-md lg:max-w-none relative">
            {/* Image Frame with bottom-to-top reveal */}
            <div className="relative overflow-hidden bg-[#F0EDE7] aspect-[3/4] border border-[#E5E1DA]">
              <div
                className="w-full h-full transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden"
                style={{
                  clipPath:
                    loadStage >= 2
                      ? 'inset(0% 0 0% 0)'
                      : 'inset(100% 0 0% 0)',
                }}
              >
                <img
                  src={heroImage}
                  alt="Organized brass plumbing fittings, valves and precision parts on supply counter"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]"
                />
              </div>

              {/* Technical Tag overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-3.5 bg-gradient-to-t from-[#171715]/80 via-[#171715]/40 to-transparent flex items-center justify-between font-mono text-[11px] tracking-[0.16em] uppercase text-white/90">
                <span>MATERIAL / 001</span>
                <span className="text-[#A79580]">BRASS &amp; COPPER ARCHIVE</span>
              </div>
            </div>

            {/* Subtle hairline technical ruler below */}
            <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-[#A79580] tracking-widest uppercase">
              <span>FIG. 01A // STOCK INVENTORY</span>
              <span>75 W 4TH ST</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
