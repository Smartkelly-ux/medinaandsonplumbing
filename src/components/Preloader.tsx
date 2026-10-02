import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const INVENTORY_ITEMS = [
  { label: 'PIPE', offset: '-8px' },
  { label: 'FITTING', offset: '12px' },
  { label: 'VALVE', offset: '-14px' },
  { label: 'FIXTURE', offset: '6px' },
  { label: 'PART', offset: '-10px' },
  { label: 'SUPPLY', offset: '16px' },
];

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isSnapped, setIsSnapped] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Step 1: Progressively reveal the 6 inventory lines
    const lineInterval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < INVENTORY_ITEMS.length) {
          return prev + 1;
        }
        clearInterval(lineInterval);
        return prev;
      });
    }, 180);

    // Step 2: Snap lines into perfect vertical index
    const snapTimer = setTimeout(() => {
      setIsSnapped(true);
    }, 1300);

    // Step 3: Reveal MEDINA & SON through vertical mask
    const brandTimer = setTimeout(() => {
      setShowBrand(true);
    }, 1700);

    // Step 4: Slide up inventory drawer and exit
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2200);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearInterval(lineInterval);
      clearTimeout(snapTimer);
      clearTimeout(brandTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      role="status"
      aria-label="Loading Medina & Son Plumbing Supply"
      className={`fixed inset-0 z-50 flex flex-col justify-between p-8 md:p-14 bg-[#FBF9F5] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isExiting ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
    >
      {/* Top Header: Technical inventory label */}
      <div className="flex justify-between items-start font-mono text-[11px] md:text-[13px] tracking-[0.16em] uppercase text-[#585858]">
        <div>
          <span className="block font-semibold text-[#000000]">MEDINA &amp; SON</span>
          <span className="block text-[#A79580]">PLUMBING SUPPLY</span>
        </div>
        <div className="text-right">
          <span className="block">75 W 4TH ST</span>
          <span className="block">HIALEAH / FL</span>
        </div>
      </div>

      {/* Center: The Parts Drawer - 6 inventory lines */}
      <div className="w-full max-w-xl mx-auto my-auto py-12">
        <div className="mb-6 font-mono text-[11px] tracking-[0.2em] text-[#A79580] uppercase">
          INVENTORY INDEX // DRAWER 01
        </div>

        <div className="border-t border-b border-[#E5E1DA] py-6 flex flex-col gap-3 font-mono text-xl md:text-2xl tracking-[0.18em] text-[#000000]">
          {INVENTORY_ITEMS.map((item, idx) => {
            const isVisible = idx < visibleCount;
            const currentOffset = isSnapped ? '0px' : item.offset;

            return (
              <div
                key={item.label}
                className="overflow-hidden h-8 flex items-center justify-between"
              >
                <div
                  className="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center gap-4"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? `translateX(${currentOffset})`
                      : 'translateY(16px)',
                  }}
                >
                  <span className="text-[12px] text-[#A79580] font-normal tracking-normal">
                    0{idx + 1}
                  </span>
                  <span className="font-medium">{item.label}</span>
                </div>

                <span
                  className="text-[11px] text-[#A79580] tracking-widest transition-opacity duration-300"
                  style={{ opacity: isSnapped ? 0.7 : 0 }}
                >
                  INDEXED
                </span>
              </div>
            );
          })}
        </div>

        {/* Brand reveal through clean vertical mask */}
        <div className="mt-8 overflow-hidden h-10 flex items-center">
          <div
            className={`font-sans text-2xl md:text-3xl font-semibold tracking-tight text-[#000000] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              showBrand ? 'translate-y-0' : 'translate-y-12'
            }`}
          >
            MEDINA &amp; SON
          </div>
        </div>
      </div>

      {/* Bottom Metadata & Skip button */}
      <div className="flex justify-between items-end font-mono text-[11px] tracking-[0.16em] uppercase text-[#A79580]">
        <div>
          <span>EST. 1976</span>
          <span className="mx-2">·</span>
          <span>HIALEAH, FL</span>
        </div>
        <button
          onClick={onComplete}
          className="text-[#585858] hover:text-[#000000] transition-colors cursor-pointer py-1 px-2 -mr-2"
          aria-label="Skip intro animation"
        >
          SKIP [ESC]
        </button>
      </div>
    </div>
  );
};
