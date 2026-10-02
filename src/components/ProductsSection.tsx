import React, { useRef, useState, useEffect } from 'react';
import heroImg from '@/src/assets/images/hero_plumbing_fittings_1790968351304.jpg';
import counterImg from '@/src/assets/images/counter_supply_interior_1790968364688.jpg';
import hardToFindImg from '@/src/assets/images/hard_to_find_brass_valves_1790968378613.jpg';
import archivalImg from '@/src/assets/images/archival_plumbing_shelves_1790968390051.jpg';
import visitImg from '@/src/assets/images/visit_counter_wide_1790968400403.jpg';

interface CategoryItem {
  number: string;
  name: string;
  summary: string;
  materials: string[];
  image: string;
  cropPosition: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    number: '01',
    name: 'FITTINGS & PIPE',
    summary: 'Full inventory across commercial, industrial, and residential pipe diameters.',
    materials: ['PVC SCH 40 & 80', 'CPVC CTS & IPS', 'COPPER TYPE L/M', 'GALVANIZED MALLEABLE', 'DWV DRAINAGE'],
    image: heroImg,
    cropPosition: 'center 30%',
  },
  {
    number: '02',
    name: 'REPAIR PARTS',
    summary: 'Individual replacement components for discontinued and contemporary systems.',
    materials: ['TUB & SHOWER STEMS', 'CERAMIC CARTRIDGES', 'FLUSH VALVES', 'BALLCOCK ASSEMBLIES', 'O-RINGS & PACKINGS'],
    image: archivalImg,
    cropPosition: 'center 45%',
  },
  {
    number: '03',
    name: 'FAUCETS & FIXTURES',
    summary: 'Durable architectural and commercial fixtures engineered for continuous service.',
    materials: ['LAVATORY FAUCETS', 'KITCHEN SPOUTS', 'SERVICE SINKS', 'COMMERCIAL URINALS', 'WATER CLOSETS'],
    image: visitImg,
    cropPosition: 'center 50%',
  },
  {
    number: '04',
    name: 'WATER HEATERS',
    summary: 'Water heating units, heating elements, thermostats, and code-mandated relief valves.',
    materials: ['RESIDENTIAL TANKS', 'COMMERCIAL SYSTEMS', 'T&P RELIEF VALVES', 'MAGNESIUM ANODE RODS', 'HEATING ELEMENTS'],
    image: counterImg,
    cropPosition: 'center 60%',
  },
  {
    number: '05',
    name: 'PLUMBING HARDWARE',
    summary: 'Installation supplies, structural supports, sealing chemicals, and specialty hand tools.',
    materials: ['STRUT & HANGERS', 'WAX GASKETS', 'THREAD SEALANTS', 'PVC SOLVENT CEMENT', 'BRASS NIPPLES'],
    image: hardToFindImg,
    cropPosition: 'center 55%',
  },
];

export const ProductsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [revealedItems, setRevealedItems] = useState<boolean[]>([false, false, false, false, false]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 0.8) {
        // Trigger catalog page stagger
        CATEGORIES.forEach((_, idx) => {
          setTimeout(() => {
            setRevealedItems((prev) => {
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          }, idx * 140);
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[#E5E1DA]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="font-mono text-[12px] md:text-[13px] tracking-[0.16em] uppercase text-[#A79580] mb-3">
            CATALOG DIVISIONS //
          </div>
          <h2
            className="text-[#000000] font-sans font-bold leading-[1.0] text-balance"
            style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              letterSpacing: '-0.035em',
            }}
          >
            BUILT AROUND<br />
            THE JOB.
          </h2>
        </div>

        <div className="font-mono text-[12px] text-[#A79580] tracking-[0.14em] uppercase max-w-sm">
          <span>MATERIAL SPECIFICATIONS</span>
          <p className="font-sans text-sm text-[#585858] mt-1 normal-case tracking-normal">
            Every category stocked with trade-grade tolerances. Select a division to view material specifications.
          </p>
        </div>
      </div>

      {/* 5 Large Categories with Catalog Page Reveal */}
      <div className="space-y-6">
        {CATEGORIES.map((cat, idx) => {
          const isRevealed = revealedItems[idx];
          const isSelected = activeCategory === idx;

          return (
            <div
              key={cat.number}
              onClick={() => setActiveCategory(idx)}
              className={`p-6 md:p-8 rounded-lg border transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'bg-[#F0EDE7] border-[#A79580]'
                  : 'bg-transparent border-[#E5E1DA] hover:border-[#171715]/40'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* 1. Number */}
                <div className="lg:col-span-1">
                  <span
                    className="font-mono text-xl md:text-2xl text-[#A79580] transition-opacity duration-500"
                    style={{ opacity: isRevealed ? 1 : 0 }}
                  >
                    {cat.number}
                  </span>
                </div>

                {/* 2. Category Name */}
                <div className="lg:col-span-5">
                  <h3
                    className="text-2xl md:text-3xl font-bold text-[#000000] font-sans transition-all duration-500"
                    style={{
                      letterSpacing: '-0.03em',
                      opacity: isRevealed ? 1 : 0,
                      transform: isRevealed ? 'translateY(0)' : 'translateY(8px)',
                    }}
                  >
                    {cat.name}
                  </h3>
                  <p className="text-sm md:text-base text-[#585858] mt-1">
                    {cat.summary}
                  </p>
                </div>

                {/* 3. Materials List */}
                <div className="lg:col-span-4">
                  {/* Extending rule */}
                  <div
                    className="h-px bg-[#A79580]/40 mb-3 transition-all duration-700 ease-out origin-left"
                    style={{
                      transform: isRevealed ? 'scaleX(1)' : 'scaleX(0)',
                    }}
                  />
                  <div className="flex flex-wrap gap-2">
                    {cat.materials.map((mat) => (
                      <span
                        key={mat}
                        className="font-mono text-[11px] tracking-[0.1em] text-[#171715] bg-white/70 px-2.5 py-1 border border-[#E5E1DA]"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4. Small Image Crop */}
                <div className="lg:col-span-2 flex justify-end">
                  <div
                    className="w-full sm:w-28 h-20 overflow-hidden border border-[#E5E1DA] bg-white transition-opacity duration-700"
                    style={{ opacity: isRevealed ? 1 : 0 }}
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale-[20%]"
                      style={{ objectPosition: cat.cropPosition }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
