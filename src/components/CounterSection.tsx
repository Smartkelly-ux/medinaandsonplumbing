import React, { useRef, useState, useEffect } from 'react';
import counterImage from '@/src/assets/images/counter_supply_interior_1790968364688.jpg';

type Perspective = 'counter' | 'shelves' | 'details';

export const CounterSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activePerspective, setActivePerspective] = useState<Perspective>('counter');

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // When the section is in view, calculate scroll progress through the section
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const totalDist = windowHeight + rect.height;
        const currentDist = windowHeight - rect.top;
        const progress = Math.max(0, Math.min(1, currentDist / totalDist));

        if (progress < 0.4) {
          setActivePerspective('counter');
        } else if (progress < 0.72) {
          setActivePerspective('shelves');
        } else {
          setActivePerspective('details');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Object position matching perspectives
  const getObjectPosition = () => {
    switch (activePerspective) {
      case 'counter':
        return 'center 75%';
      case 'shelves':
        return 'center 25%';
      case 'details':
        return '85% 50%';
      default:
        return 'center center';
    }
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[#E5E1DA]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Split Editorial Text */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="font-mono text-[12px] md:text-[13px] tracking-[0.16em] uppercase text-[#A79580] mb-4">
            01 / THE COUNTER
          </div>

          <h2
            className="text-[#000000] font-sans font-bold leading-[1.0] text-balance mb-6"
            style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              letterSpacing: '-0.035em',
            }}
          >
            BRING THE PART.<br />
            WE'LL FIND IT.
          </h2>

          <p className="text-lg md:text-xl text-[#585858] font-normal leading-relaxed mb-8 max-w-lg">
            A traditional plumbing supply counter with parts, fixtures and practical product knowledge. Whether you are replacing a discontinued stem, running commercial DWV, or repiping an older home in Miami-Dade, we match the physical piece in your hand.
          </p>

          {/* Perspective Selector (Functional tabs to inspect counter viewpoints) */}
          <div className="pt-4 border-t border-[#E5E1DA]">
            <div className="font-mono text-[11px] tracking-[0.18em] text-[#A79580] uppercase mb-3">
              COUNTER VIEWPOINT //
            </div>
            <div className="flex items-center gap-2">
              {(['counter', 'shelves', 'details'] as Perspective[]).map((p) => (
                <button
                  key={p}
                  onClick={() => setActivePerspective(p)}
                  className={`px-3 py-1.5 font-mono text-[12px] tracking-[0.12em] uppercase rounded border transition-colors cursor-pointer ${
                    activePerspective === p
                      ? 'bg-[#171715] text-[#FFFFFF] border-[#171715]'
                      : 'bg-transparent text-[#585858] border-[#E5E1DA] hover:border-[#171715] hover:text-[#000000]'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Controlled Stationary Image with Shifting Focal Crop */}
        <div className="lg:col-span-6">
          <div className="relative overflow-hidden bg-[#F0EDE7] aspect-[4/3] border border-[#E5E1DA]">
            <img
              src={counterImage}
              alt="Medina & Son plumbing supply store counter interior and organized shelves"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] scale-110"
              style={{
                objectPosition: getObjectPosition(),
              }}
            />

            {/* Tiny Overlay Metadata */}
            <div className="absolute top-4 left-4 font-mono text-[11px] tracking-[0.16em] uppercase text-white/90 bg-[#171715]/75 px-3 py-1.5 backdrop-blur-sm">
              <span>FIXTURES</span>
              <span className="mx-2 text-[#A79580]">·</span>
              <span>FITTINGS</span>
              <span className="mx-2 text-[#A79580]">·</span>
              <span>REPAIR PARTS</span>
            </div>

            <div className="absolute bottom-4 right-4 font-mono text-[10px] tracking-[0.16em] uppercase text-white/80 bg-[#171715]/60 px-2.5 py-1">
              FOCUS // {activePerspective.toUpperCase()}
            </div>
          </div>

          <div className="mt-3 flex justify-between items-center font-mono text-[11px] text-[#A79580] tracking-widest uppercase">
            <span>75 W 4TH ST · COUNTER SERVICE</span>
            <span>NO GUESSWORK</span>
          </div>
        </div>
      </div>
    </section>
  );
};
