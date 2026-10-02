import React from 'react';
import { Phone, ArrowDownRight, Mail } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenEmail?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenEmail }) => {
  const scrollToVisit = () => {
    const el = document.getElementById('visit');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-28 md:py-40 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[#E5E1DA]">
      <div className="max-w-4xl">
        <div className="font-mono text-[12px] md:text-[13px] tracking-[0.16em] uppercase text-[#A79580] mb-6">
          THE PART YOU NEED //
        </div>

        <h2
          className="text-[#000000] font-sans font-bold leading-[0.92] text-balance mb-6"
          style={{
            fontSize: 'clamp(44px, 6.5vw, 88px)',
            letterSpacing: '-0.04em',
          }}
        >
          COME WITH<br />
          THE QUESTION.
        </h2>

        <p className="text-xl md:text-2xl text-[#585858] font-normal leading-relaxed mb-12 max-w-lg">
          Leave with the right part.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="tel:3058871611"
            aria-label="Call Medina & Son"
            className="btn-eliras group"
          >
            <span className="btn-text">CALL COUNTER</span>
            <span className="btn-icon">
              <Phone className="w-4 h-4 text-[#A79580]" />
            </span>
          </a>

          <button
            onClick={onOpenEmail}
            className="btn-eliras-secondary group cursor-pointer"
          >
            <span className="btn-text">EMAIL THE COUNTER</span>
            <span className="btn-icon">
              <Mail className="w-4 h-4 text-[#A79580]" />
            </span>
          </button>

          <button
            onClick={scrollToVisit}
            className="btn-eliras-secondary group cursor-pointer"
          >
            <span className="btn-text">VISIT MEDINA &amp; SON</span>
            <span className="btn-icon">
              <ArrowDownRight className="w-4 h-4 text-[#585858] group-hover:text-[#000000]" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
