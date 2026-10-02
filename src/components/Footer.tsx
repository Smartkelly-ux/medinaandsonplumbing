import React, { useRef, useState, useEffect } from 'react';
import { Phone, ArrowUp, Mail, ArrowUpRight } from 'lucide-react';

const FOOTER_PRODUCTS = ['PIPE', 'FITTINGS', 'FIXTURES', 'PARTS'];

interface FooterProps {
  onOpenEmail?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEmail }) => {
  const footerRef = useRef<HTMLElement>(null);
  const [productReveal, setProductReveal] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;
      const rect = footerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        // Trigger sequential letter-spacing reveal for the 4 product words
        FOOTER_PRODUCTS.forEach((_, idx) => {
          setTimeout(() => {
            setProductReveal((prev) => Math.max(prev, idx + 1));
          }, idx * 180);
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className="bg-[#171715] text-[#FFFFFF] pt-20 pb-14 px-6 md:px-12 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top: Wordmark + Back to top */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-12 border-b border-white/10 gap-6">
          <div>
            <span className="block font-sans font-bold text-xl md:text-2xl text-white tracking-tight">
              MEDINA &amp; SON
            </span>
            <span className="font-mono text-[12px] tracking-[0.2em] text-[#A79580] uppercase">
              PLUMBING SUPPLY
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase text-white/60 hover:text-white transition-all duration-200 cursor-pointer group"
          >
            <span className="transition-transform duration-200 group-hover:-translate-y-0.5">BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#A79580] transition-transform duration-200 group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Narrow Horizontal Product Strip with Sequential Letter-Spacing Settle */}
        <div className="py-10 border-b border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-6 font-mono text-sm md:text-base tracking-[0.16em] uppercase text-white/80">
            {FOOTER_PRODUCTS.map((prod, idx) => {
              const isSettled = productReveal > idx;
              return (
                <div key={prod} className="flex items-center gap-3">
                  <span
                    className="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] font-medium"
                    style={{
                      letterSpacing: isSettled ? '0.2em' : '0.45em',
                      opacity: isSettled ? 1 : 0.2,
                    }}
                  >
                    {prod}
                  </span>
                  {idx < FOOTER_PRODUCTS.length - 1 && (
                    <span className="hidden md:inline text-[#A79580] mx-4" aria-hidden="true">
                      ·
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Middle: Contact Block & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12 border-b border-white/10">
          <div className="md:col-span-6">
            <span className="font-mono text-[11px] text-[#A79580] tracking-widest block uppercase mb-3">
              PHYSICAL COUNTER
            </span>
            <p className="font-mono text-base md:text-lg text-white mb-1">
              75 W 4TH ST, HIALEAH, FL 33010
            </p>
            <p className="font-mono text-sm text-[#A79580] mb-3">
              TEL: (305) 887-1611
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-3">
              <a
                href="tel:3058871611"
                aria-label="Call Medina & Son"
                className="font-mono text-sm md:text-base text-white/80 hover:text-white transition-colors inline-flex items-center gap-2 group"
              >
                <Phone className="w-4 h-4 text-[#A79580] transition-transform duration-200 group-hover:scale-110" />
                <span className="editorial-link">CALL COUNTER</span>
              </a>

              <button
                onClick={onOpenEmail}
                className="font-mono text-sm md:text-base text-white/80 hover:text-white transition-colors inline-flex items-center gap-2 group cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#A79580] transition-transform duration-200 group-hover:scale-110" />
                <span className="editorial-link">EMAIL THE COUNTER</span>
              </button>
            </div>

            {/* Embedded Google Maps component for driving directions */}
            <div className="mt-6 rounded-lg overflow-hidden border border-white/10 bg-black/40 relative max-w-md">
              <iframe
                title="Google Map Directions 75 W 4th St Hialeah"
                src="https://maps.google.com/maps?q=75+W+4th+St,+Hialeah,+FL+33010&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-32 border-0 grayscale-[40%] contrast-[110%] opacity-85 hover:opacity-100 transition-opacity"
                loading="lazy"
                aria-label="Google Map directions to 75 W 4th St Hialeah FL"
              />
              <div className="p-2.5 bg-[#171715]/95 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#A79580] uppercase">
                <span>75 W 4TH ST // HIALEAH</span>
                <a
                  href="https://maps.google.com/?q=75+W+4th+St,+Hialeah,+FL+33010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#A79580] flex items-center gap-1 transition-colors"
                >
                  <span>GET DIRECTIONS</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 flex flex-col sm:flex-row justify-between gap-8 md:pl-8">
            <div>
              <span className="font-mono text-[11px] text-[#A79580] tracking-widest block uppercase mb-3">
                INDEX
              </span>
              <ul className="space-y-2.5 font-mono text-[13px] tracking-[0.14em] uppercase text-white/70">
                <li>
                  <button
                    onClick={() => scrollToId('products')}
                    className="editorial-link hover:text-white transition-colors cursor-pointer"
                  >
                    PRODUCTS
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToId('reviews')}
                    className="editorial-link hover:text-white transition-colors cursor-pointer"
                  >
                    REVIEWS
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToId('visit')}
                    className="editorial-link hover:text-white transition-colors cursor-pointer"
                  >
                    VISIT
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenEmail}
                    className="editorial-link hover:text-white transition-colors cursor-pointer"
                  >
                    EMAIL INQUIRY
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-mono text-[11px] text-[#A79580] tracking-widest block uppercase mb-3">
                SERVICE JURISDICTION
              </span>
              <p className="font-mono text-[12px] tracking-[0.12em] text-white/60 uppercase max-w-xs leading-relaxed">
                Hialeah, Miami Springs, Doral, Medley, and greater Miami-Dade County.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom: Legal & Region */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[11px] tracking-[0.14em] text-white/50 uppercase">
          <div>HIALEAH / FLORIDA</div>
          <div>© 2026 MEDINA &amp; SON PLUMBING SUPPLY. ALL RIGHTS RESERVED.</div>
        </div>
      </div>
    </footer>
  );
};
