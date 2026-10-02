import React, { useState } from 'react';
import heroImg from '@/src/assets/images/hero_plumbing_fittings_1790968351304.jpg';
import counterImg from '@/src/assets/images/counter_supply_interior_1790968364688.jpg';
import hardToFindImg from '@/src/assets/images/hard_to_find_brass_valves_1790968378613.jpg';
import archivalImg from '@/src/assets/images/archival_plumbing_shelves_1790968390051.jpg';
import visitImg from '@/src/assets/images/visit_counter_wide_1790968400403.jpg';

interface MaterialItem {
  id: string;
  name: string;
  code: string;
  specs: string;
  image: string;
  cropPosition: string;
}

const MATERIALS: MaterialItem[] = [
  {
    id: 'pipe',
    name: 'PIPE',
    code: 'SEC.01',
    specs: 'Copper Type L & M, PVC Sch 40 & 80, CPVC, Galvanized, DWV',
    image: heroImg,
    cropPosition: 'center 20%',
  },
  {
    id: 'fittings',
    name: 'FITTINGS',
    code: 'SEC.02',
    specs: 'Wrot copper, threaded brass nipples, malleable iron, press fittings',
    image: hardToFindImg,
    cropPosition: 'center 40%',
  },
  {
    id: 'valves',
    name: 'VALVES',
    code: 'SEC.03',
    specs: 'Full-port brass ball valves, gate valves, check valves, pressure regulators',
    image: hardToFindImg,
    cropPosition: 'center 75%',
  },
  {
    id: 'fixtures',
    name: 'FIXTURES',
    code: 'SEC.04',
    specs: 'Vitreous china, commercial urinals, water closets, service sinks',
    image: visitImg,
    cropPosition: 'center 30%',
  },
  {
    id: 'repair-parts',
    name: 'REPAIR PARTS',
    code: 'SEC.05',
    specs: 'Tub & shower stems, ceramic disc cartridges, flappers, rebuild kits',
    image: archivalImg,
    cropPosition: 'center 60%',
  },
  {
    id: 'faucets',
    name: 'FAUCETS',
    code: 'SEC.06',
    specs: 'Kitchen pull-downs, commercial pre-rinse units, lavatory faucets',
    image: visitImg,
    cropPosition: 'center 50%',
  },
  {
    id: 'water-heaters',
    name: 'WATER HEATERS',
    code: 'SEC.07',
    specs: 'Residential & commercial units, elements, T&P relief valves, anode rods',
    image: counterImg,
    cropPosition: 'center 80%',
  },
  {
    id: 'plumbing-hardware',
    name: 'PLUMBING HARDWARE',
    code: 'SEC.08',
    specs: 'Hangers, unistrut, wax rings, supply lines, chemical cements & tapes',
    image: heroImg,
    cropPosition: 'center 60%',
  },
];

export const MaterialsIndex: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<MaterialItem | null>(null);
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(null);

  const toggleMobileItem = (id: string) => {
    setExpandedMobileId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="materials" className="py-24 md:py-32 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[#E5E1DA]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="font-mono text-[12px] md:text-[13px] tracking-[0.16em] uppercase text-[#A79580] mb-3">
            02 / MATERIALS
          </div>
          <h2
            className="text-[#000000] font-sans font-bold leading-[1.0] text-balance"
            style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              letterSpacing: '-0.035em',
            }}
          >
            PLUMBING, DOWN TO<br />
            THE DETAILS.
          </h2>
        </div>

        <div className="font-mono text-[12px] text-[#A79580] tracking-[0.14em] uppercase max-w-xs">
          <span>COMPLETE INVENTORY COUNTER</span>
          <span className="block text-[#585858] mt-1 font-sans text-sm tracking-normal">
            Physical stock for tradesmen, contractors, and residential owners.
          </span>
        </div>
      </div>

      {/* Editorial Text Index with Generous Horizontal Rules */}
      <div className="relative border-t border-[#E5E1DA]">
        {MATERIALS.map((item, idx) => {
          const isHovered = hoveredItem?.id === item.id;
          const isExpanded = expandedMobileId === item.id;

          return (
            <div
              key={item.id}
              className="border-b border-[#E5E1DA] transition-colors hover:bg-[#F0EDE7]/40"
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div
                onClick={() => toggleMobileItem(item.id)}
                className="py-6 md:py-8 flex items-center justify-between cursor-pointer select-none group"
              >
                <div className="flex items-center gap-6 md:gap-12">
                  <span className="font-mono text-[12px] md:text-[14px] text-[#A79580] w-8">
                    0{idx + 1}
                  </span>
                  <span
                    className="font-sans font-bold text-2xl md:text-4xl lg:text-5xl text-[#000000] transition-transform duration-200 ease-out"
                    style={{
                      transform: isHovered ? 'translateX(6px)' : 'translateX(0)',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {item.name}
                  </span>
                </div>

                <div className="flex items-center gap-6">
                  {/* Desktop Item Specs preview */}
                  <span className="hidden md:inline font-mono text-[12px] tracking-[0.12em] text-[#585858] uppercase">
                    {item.specs}
                  </span>

                  {/* Desktop Hover Image Thumbnail (moves 8-12px) */}
                  <div
                    className="hidden lg:block w-24 h-16 overflow-hidden bg-[#E5E1DA] border border-[#A79580]/40 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? 'translateX(0)' : 'translateX(10px)',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale-[20%]"
                      style={{ objectPosition: item.cropPosition }}
                    />
                  </div>

                  {/* Mobile toggle indicator */}
                  <span className="lg:hidden font-mono text-[12px] text-[#A79580]">
                    {isExpanded ? '—' : '+'}
                  </span>
                </div>
              </div>

              {/* Mobile/Tablet Accordion Expand */}
              {isExpanded && (
                <div className="lg:hidden pb-6 pt-2 px-2 flex flex-col sm:flex-row gap-4 items-start border-t border-[#E5E1DA]/60">
                  <div className="w-full sm:w-36 h-24 overflow-hidden border border-[#E5E1DA] bg-[#F0EDE7]">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: item.cropPosition }}
                    />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-[#A79580] tracking-widest block uppercase mb-1">
                      SPECIFICATIONS
                    </span>
                    <p className="text-sm text-[#000000] font-mono leading-relaxed">
                      {item.specs}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
