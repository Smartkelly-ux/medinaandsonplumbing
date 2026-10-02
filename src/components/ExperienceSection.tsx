import React, { useState, useEffect, useRef } from 'react';
import heroImg from '@/src/assets/images/hero_plumbing_fittings_1790968351304.jpg';
import counterImg from '@/src/assets/images/counter_supply_interior_1790968364688.jpg';
import hardToFindImg from '@/src/assets/images/hard_to_find_brass_valves_1790968378613.jpg';

interface StepData {
  step: string;
  sub: string;
  description: string;
  image: string;
}

const STEPS: StepData[] = [
  {
    step: 'IDENTIFY',
    sub: 'STEP 01',
    description: 'We inspect threads, broach splines, stem lengths, and pipe tolerances on the counter.',
    image: heroImg,
  },
  {
    step: 'MATCH',
    sub: 'STEP 02',
    description: 'Direct cross-referencing against manufacturer catalogs and legacy fitting archives.',
    image: hardToFindImg,
  },
  {
    step: 'SOLVE',
    sub: 'STEP 03',
    description: 'Leave with the exact replacement component or verified compatible alternative ready to install.',
    image: counterImg,
  },
];

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // When the section is in view
      if (rect.top <= 100 && rect.bottom >= windowHeight * 0.5) {
        const scrolled = Math.abs(rect.top - 100);
        const scrollable = rect.height - windowHeight;
        if (scrollable > 0) {
          const ratio = Math.max(0, Math.min(1, scrolled / scrollable));
          if (ratio < 0.35) {
            setActiveStepIndex(0);
          } else if (ratio < 0.7) {
            setActiveStepIndex(1);
          } else {
            setActiveStepIndex(2);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentStep = STEPS[activeStepIndex];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[160vh] lg:min-h-[200vh] py-24 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[#E5E1DA]"
    >
      {/* Sticky Content Container */}
      <div className="lg:sticky lg:top-28 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Spacious Off-White Headline & Copy */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="font-mono text-[12px] md:text-[13px] tracking-[0.16em] uppercase text-[#A79580] mb-4">
                03 / EXPERIENCE
              </div>

              <h2
                className="text-[#000000] font-sans font-bold leading-[1.0] text-balance mb-8"
                style={{
                  fontSize: 'clamp(36px, 5vw, 64px)',
                  letterSpacing: '-0.035em',
                }}
              >
                KNOW WHAT<br />
                YOU'RE LOOKING FOR?
              </h2>

              <div className="space-y-4 text-lg md:text-xl text-[#585858] font-normal leading-relaxed max-w-md">
                <p>Bring the old part.</p>
                <p>Bring a photo.</p>
                <p>Bring the measurements.</p>
                <p className="font-medium text-[#000000] pt-2">
                  We'll start from there.
                </p>
              </div>
            </div>

            <p className="text-sm md:text-base text-[#585858] mt-8 max-w-md leading-relaxed">
              No guessing with blister packs or buying three sizes hoping one fits. Our counter staff has served Hialeah and South Florida plumbing professionals and homeowners for decades.
            </p>
          </div>

          {/* Right Column: Anchored Words (IDENTIFY / MATCH / SOLVE) + Changing Image */}
          <div className="lg:col-span-6 flex flex-col h-full">
            <div className="p-8 md:p-10 border border-[#E5E1DA] bg-[#F0EDE7]/50 rounded-lg flex-1 flex flex-col justify-between min-h-[460px] lg:min-h-full">
              {/* Three Editorial Anchored Words */}
              <div className="flex justify-between items-center border-b border-[#E5E1DA] pb-6 mb-8">
                {STEPS.map((s, idx) => {
                  const isActive = activeStepIndex === idx;
                  return (
                    <button
                      key={s.step}
                      onClick={() => setActiveStepIndex(idx)}
                      className={`font-mono text-base md:text-xl tracking-[0.18em] transition-all duration-300 cursor-pointer text-left ${
                        isActive
                          ? 'text-[#000000] font-bold underline decoration-2 underline-offset-8 decoration-[#A79580]'
                          : 'text-[#585858]/40 hover:text-[#585858]'
                      }`}
                    >
                      {s.step}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Changing Card & Image */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center my-auto py-4">
                <div className="sm:col-span-7">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-[#A79580] uppercase block mb-1">
                    {currentStep.sub}
                  </span>
                  <h4 className="text-xl md:text-2xl font-bold font-sans text-[#000000] mb-2 tracking-tight">
                    {currentStep.step}
                  </h4>
                  <p className="text-sm md:text-base text-[#585858] leading-relaxed">
                    {currentStep.description}
                  </p>
                </div>

                <div className="sm:col-span-5">
                  <div className="w-full aspect-[4/3] bg-[#E5E1DA] border border-[#E5E1DA] overflow-hidden">
                    <img
                      src={currentStep.image}
                      alt={currentStep.step}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale-[15%] transition-all duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Technical Indicator inside bottom of card */}
              <div className="pt-6 border-t border-[#E5E1DA] flex justify-between font-mono text-[11px] text-[#A79580] uppercase tracking-widest">
                <span>STAGE 0{activeStepIndex + 1} OF 03</span>
                <span>MATCH PROTOCOL</span>
              </div>
            </div>

            <div className="mt-4 flex justify-between font-mono text-[11px] text-[#A79580] uppercase tracking-widest px-1">
              <span>COUNTER KNOWLEDGE · EST. 1976</span>
              <span>SCROLL TO ADVANCE //</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
