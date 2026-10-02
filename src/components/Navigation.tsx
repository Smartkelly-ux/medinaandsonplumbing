import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';

interface NavigationProps {
  onOpenEmail?: () => void;
}

const MENU_ITEMS = [
  { id: 'materials', label: 'PRODUCTS', code: '01' },
  { id: 'products', label: 'PARTS', code: '02' },
  { id: 'hard-to-find', label: 'FIXTURES', code: '03' },
  { id: 'about', label: 'ABOUT', code: '04' },
  { id: 'reviews', label: 'REVIEWS', code: '05' },
  { id: 'visit', label: 'VISIT', code: '06' },
];

export const Navigation: React.FC<NavigationProps> = ({ onOpenEmail }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navContainerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="fixed top-4 sm:top-5 left-0 right-0 z-40 px-3 sm:px-5 lg:px-8 w-full max-w-[97vw] 2xl:max-w-[1536px] mx-auto pointer-events-none">
      <div
        ref={navContainerRef}
        className="pointer-events-auto bg-[#171715] text-[#FFFFFF] rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden w-full backdrop-blur-md"
      >
        {/* Main Bar: 1025px+ full desktop vs <=1024px tablet/mobile */}
        <div className="flex items-center justify-between px-5 sm:px-6 lg:px-10 py-3.5 w-full">
          {/* Brand mark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-base sm:text-lg font-semibold tracking-tight text-white hover:text-white/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A79580]"
          >
            MEDINA &amp; SON
          </a>

          {/* Desktop Center Links: only on 1025px+ */}
          <nav
            aria-label="Desktop primary navigation"
            className="hidden lg:flex items-center gap-8 lg:gap-10 xl:gap-14 text-[13px] font-mono tracking-[0.14em] uppercase text-white/70"
          >
            <button
              onClick={() => handleLinkClick('products')}
              className="editorial-link hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A79580]"
            >
              PRODUCTS
            </button>
            <button
              onClick={() => handleLinkClick('about')}
              className="editorial-link hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A79580]"
            >
              ABOUT
            </button>
            <button
              onClick={() => handleLinkClick('reviews')}
              className="editorial-link hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A79580]"
            >
              REVIEWS
            </button>
            <button
              onClick={() => handleLinkClick('visit')}
              className="editorial-link hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#A79580]"
            >
              VISIT
            </button>
          </nav>

          {/* Right Action: Call + Email Buttons (Desktop) / Hamburger + Actions (Tablet & Mobile) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Email Button */}
            <button
              onClick={onOpenEmail}
              aria-label="Email Medina & Son Counter"
              className="inline-flex items-center gap-1.5 h-9 px-3 sm:px-3.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-[12px] font-mono tracking-[0.12em] text-white uppercase transition-all duration-200 cursor-pointer active:scale-95 group"
            >
              <Mail className="w-3.5 h-3.5 text-[#A79580] transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
              <span className="hidden sm:inline transition-transform duration-200 group-hover:-translate-x-0.5">EMAIL</span>
            </button>

            {/* Call Button */}
            <a
              href="tel:3058871611"
              aria-label="Call Medina & Son"
              className="hidden sm:inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-[12px] font-mono tracking-[0.12em] text-white uppercase transition-all duration-200 active:scale-95 group"
            >
              <Phone className="w-3.5 h-3.5 text-[#A79580] transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
              <span className="transition-transform duration-200 group-hover:-translate-x-0.5">CALL</span>
            </a>

            {/* Compact Mechanical Hamburger Button for Tablet & Mobile (<=1024px) */}
            <button
              type="button"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-drawer-menu"
              aria-label={isOpen ? 'Close parts drawer menu' : 'Open parts drawer menu'}
              className="lg:hidden p-2 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A79580]"
            >
              <div className="w-5 h-4 flex flex-col justify-between items-end">
                <span
                  className={`h-0.5 bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? 'w-5 translate-y-1.5 rotate-45' : 'w-5'
                  }`}
                />
                <span
                  className={`h-0.5 bg-white transition-all duration-200 ease-linear ${
                    isOpen ? 'opacity-0 w-0' : 'w-3.5 opacity-100'
                  }`}
                />
                <span
                  className={`h-0.5 bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? 'w-5 -translate-y-2 -rotate-45' : 'w-4'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Physical Drawer Menu: Tablet & Mobile (<=1024px) */}
        {/* Height expansion via CSS grid-rows transition with top-recessed shadow & clipping reveal */}
        <div
          id="mobile-drawer-menu"
          className={`lg:hidden grid transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden border-t border-white/10 ${
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
          }`}
          style={{
            boxShadow: isOpen ? 'inset 0 6px 16px rgba(0,0,0,0.45)' : 'none',
          }}
        >
          <div
            className="min-h-0 overflow-hidden px-5 sm:px-7 pt-4 pb-6 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: isOpen ? 'translateY(0)' : 'translateY(-14px)',
            }}
          >
            {/* Vertical Menu Items with Physical Clipping Reveals */}
            <div className="flex flex-col font-mono text-[15px] sm:text-[16px] tracking-[0.16em] uppercase text-white/90 divide-y divide-white/5">
              {MENU_ITEMS.map((item, idx) => (
                <div
                  key={item.id}
                  className="overflow-hidden"
                  style={{
                    clipPath: isOpen ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)',
                    transition: `clip-path 0.35s cubic-bezier(0.16,1,0.3,1) ${idx * 35}ms, transform 0.35s cubic-bezier(0.16,1,0.3,1) ${idx * 35}ms`,
                    transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
                  }}
                >
                  <button
                    onClick={() => handleLinkClick(item.id)}
                    className="w-full text-left py-2.5 sm:py-3 hover:text-white flex items-center justify-between group cursor-pointer active:bg-white/5 px-1 rounded transition-colors"
                  >
                    <span className="transition-transform duration-200 ease-out group-hover:translate-x-1.5 flex items-center gap-3">
                      <span className="text-[11px] text-[#A79580] font-normal tracking-normal w-5">
                        {item.code}
                      </span>
                      <span className="font-medium tracking-[0.16em]">{item.label}</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#A79580] opacity-30 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Tactical Drawer Quick Shelf: Actions on small screens */}
            <div className="pt-4 border-t border-white/10 mt-3 flex flex-col sm:flex-row gap-2.5">
              <a
                href="tel:3058871611"
                className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 text-[12px] font-mono tracking-[0.14em] text-white uppercase transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#A79580]" />
                <span>CALL</span>
              </a>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenEmail?.();
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 rounded-lg bg-[#F0EDE7]/15 hover:bg-[#F0EDE7]/25 border border-[#A79580]/30 text-[12px] font-mono tracking-[0.14em] text-white uppercase transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-[#A79580]" />
                <span>EMAIL PART PHOTO</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
