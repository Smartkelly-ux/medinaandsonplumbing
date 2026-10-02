import React from 'react';

const FEEDBACK_THEMES = [
  {
    theme: 'WELL STOCKED',
    note: 'Extensive on-hand inventory across brass, copper, DWV, PVC and specialty valves.',
  },
  {
    theme: 'FAIR PRICES',
    note: 'Competitive supply-house pricing for licensed plumbing contractors and DIY homeowners alike.',
  },
  {
    theme: 'KNOWLEDGEABLE HELP',
    note: 'Decades of counter experience solving non-standard fittings, threads, and legacy connections.',
  },
  {
    theme: 'SPECIAL ORDERS',
    note: 'Direct factory access for rare fixtures, commercial units, and uncommon parts.',
  },
  {
    theme: 'HARD-TO-FIND PARTS',
    note: 'The local counter plumbers check when big-box home centers do not carry the specific stem or gasket.',
  },
];

export const CustomerSignalSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[#E5E1DA]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="font-mono text-[12px] md:text-[13px] tracking-[0.16em] uppercase text-[#A79580] mb-3">
            FROM THE COUNTER //
          </div>
          <h2
            className="text-[#000000] font-sans font-bold leading-[1.0] text-balance"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 54px)',
              letterSpacing: '-0.035em',
            }}
          >
            QUIET PROOF.
          </h2>
        </div>

        <p className="font-mono text-[12px] text-[#A79580] tracking-[0.14em] uppercase max-w-sm">
          <span>PUBLIC CUSTOMER THEMES</span>
          <span className="block font-sans text-sm text-[#585858] normal-case tracking-normal mt-1">
            Documented feedback reflected directly at the counter week after week.
          </span>
        </p>
      </div>

      {/* Five Factual Themes - Clean Editorial Grid without Fake Stars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 border-t border-[#E5E1DA] pt-8">
        {FEEDBACK_THEMES.map((item, idx) => (
          <div
            key={item.theme}
            className="p-5 border border-[#E5E1DA] bg-[#F0EDE7]/40 rounded-lg flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-[11px] text-[#A79580] tracking-widest block mb-2">
                SIGNAL 0{idx + 1}
              </span>
              <h3 className="font-sans font-bold text-lg text-[#000000] tracking-tight mb-2">
                {item.theme}
              </h3>
            </div>
            <p className="text-xs md:text-sm text-[#585858] leading-relaxed pt-2 border-t border-[#E5E1DA]/60">
              {item.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
