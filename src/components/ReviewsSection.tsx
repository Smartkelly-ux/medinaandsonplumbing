import React, { useState } from 'react';
import { MessageSquare, ArrowRight, CheckCircle2, ShieldCheck, Wrench, Building2, Home } from 'lucide-react';

interface Review {
  id: string;
  ticketId: string;
  name: string;
  role: string;
  company?: string;
  location: string;
  category: 'plumbers' | 'contractors' | 'commercial' | 'homeowners';
  date: string;
  partSourced: string;
  jobContext: string;
  comment: string;
}

const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    ticketId: 'REC-HIA-084',
    name: 'Carlos M.',
    role: 'Licensed Master Plumber',
    company: 'M. Hernandez Plumbing LLC',
    location: 'Hialeah, FL',
    category: 'plumbers',
    date: 'February 2026',
    partSourced: '2" Full-Port Brass Valves & Sch 80 PVC',
    jobContext: 'Saturday Emergency Commercial Repipe',
    comment:
      'Emergency commercial repipe on a Saturday morning. No retail home center in the area had 2-inch full-port brass valves and Schedule 80 couplings in stock. Medina had them on the shelf. The guys behind the counter know pipe specs by sight.',
  },
  {
    id: 'rev-2',
    ticketId: 'REC-HIA-091',
    name: 'Jorge R.',
    role: 'General Contractor',
    company: 'Alvarez & Sons Construction',
    location: 'Miami Springs, FL',
    category: 'contractors',
    date: 'January 2026',
    partSourced: 'Legacy 1970s Tub/Shower Valve Stems',
    jobContext: 'Vintage Bathroom Tile Preservation',
    comment:
      'Older homes throughout Hialeah have discontinued stems that big box stores tell you to replace by ripping out the bathroom tile. I brought the corroded piece to Medina & Son and they pulled the exact matching brass stem in three minutes. Saved our client thousands.',
  },
  {
    id: 'rev-3',
    ticketId: 'REC-HIA-072',
    name: 'David C.',
    role: 'Facilities Director',
    company: 'Doral Industrial Logistics Park',
    location: 'Doral, FL',
    category: 'commercial',
    date: 'December 2025',
    partSourced: 'Commercial Flushometer Kits & Backflow Assemblies',
    jobContext: '40-Bay Warehouse Overhaul',
    comment:
      'We manage over 40 industrial warehouse bays. From commercial flushometer rebuild kits to heavy copper tees and DWV fittings, Medina & Son has been our primary supply house for over a decade. Fair trade pricing and zero runaround.',
  },
  {
    id: 'rev-4',
    ticketId: 'REC-HIA-068',
    name: 'Elena V.',
    role: 'Homeowner',
    location: 'East Hialeah, FL',
    category: 'homeowners',
    date: 'November 2025',
    partSourced: 'Ceramic Disc Cartridge & Rubber Seats',
    jobContext: 'Unmarked Leaking Faucet Identification',
    comment:
      'I walked in holding a leaking cartridge with zero idea of the manufacturer name. The gentleman at the counter measured the splines with a gauge, matched it immediately, and explained how to seat the rubber washer cleanly. Solved in 10 minutes.',
  },
  {
    id: 'rev-5',
    ticketId: 'REC-HIA-055',
    name: 'Luis B.',
    role: 'Plumbing Contractor',
    company: 'Biscayne Mechanical Trade',
    location: 'Miami-Dade County',
    category: 'plumbers',
    date: 'October 2025',
    partSourced: 'Special Order Malleable Iron & DWV Adapters',
    jobContext: 'Non-Standard Iron Pipe Threading',
    comment:
      'Real supply house culture. Honest trade pricing, special order capability for non-standard threads, and counter staff that actually knows local Miami-Dade plumbing code and pipe clearances.',
  },
  {
    id: 'rev-6',
    ticketId: 'REC-HIA-049',
    name: 'Roberto S.',
    role: 'Commercial Maintenance Tech',
    company: 'Metro Facility Management',
    location: 'Hialeah Gardens, FL',
    category: 'commercial',
    date: 'September 2025',
    partSourced: 'Commercial Water Heater Elements & T&P Valves',
    jobContext: 'Multi-Unit Water Heater Service',
    comment:
      'When you need commercial wattage water heater elements, relief valves, or CPVC transitions on short notice, this is the counter to visit. Always reliable inventory and no waiting on freight trucks.',
  },
];

interface ReviewsSectionProps {
  onOpenEmailModal?: (category?: string) => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onOpenEmailModal }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [showNoteForm, setShowNoteForm] = useState(false);
  const [noteSubmitted, setNoteSubmitted] = useState(false);
  const [noteName, setNoteName] = useState('');
  const [noteTrade, setNoteTrade] = useState('');
  const [noteText, setNoteText] = useState('');

  const filteredReviews = activeFilter === 'all'
    ? REVIEWS
    : REVIEWS.filter((r) => r.category === activeFilter);

  const handleNoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNoteSubmitted(true);
  };

  return (
    <section id="reviews" className="py-24 md:py-36 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[#E5E1DA]">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
        <div>
          <div className="font-mono text-[12px] md:text-[13px] tracking-[0.18em] uppercase text-[#A79580] mb-4 flex items-center gap-2">
            <span>07 // COUNTER RECORD &amp; TESTIMONIALS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#A79580]" />
            <span>EST. 1976</span>
          </div>

          <h2
            className="text-[#000000] font-sans font-bold leading-[0.95] text-balance"
            style={{
              fontSize: 'clamp(40px, 5.5vw, 76px)',
              letterSpacing: '-0.04em',
            }}
          >
            TRADE REVIEWS.<br />
            <span className="text-[#585858]">FROM THE JOB SITE.</span>
          </h2>

          <p className="text-base md:text-lg text-[#585858] mt-6 max-w-xl font-normal leading-relaxed">
            Quiet proof from master plumbers, general contractors, commercial facility engineers, and Miami-Dade homeowners who rely on Medina &amp; Son for hard-to-find inventory and counter expertise.
          </p>
        </div>

        {/* Counter Action Pill Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button
            onClick={() => setShowNoteForm((prev) => !prev)}
            className="btn-eliras-secondary text-xs py-2.5 px-5 h-11 min-h-0"
          >
            <span className="btn-text">
              {showNoteForm ? 'CLOSE SUBMISSION' : 'LOG A COUNTER EXPERIENCE'}
            </span>
            <span className="btn-icon">
              <MessageSquare className="w-3.5 h-3.5 text-[#585858]" />
            </span>
          </button>
        </div>
      </div>

      {/* Ledger Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 md:p-6 bg-[#F0EDE7]/50 border border-[#E5E1DA] rounded-lg mb-12">
        <div className="border-r border-[#E5E1DA] pr-4">
          <span className="font-mono text-[10px] text-[#A79580] uppercase tracking-widest block mb-1">
            ESTABLISHED
          </span>
          <span className="font-mono text-xl md:text-2xl font-bold text-[#000000]">
            1976
          </span>
          <span className="block font-mono text-[11px] text-[#585858] mt-0.5">
            Hialeah, Florida
          </span>
        </div>

        <div className="md:border-r border-[#E5E1DA] px-2 md:px-4">
          <span className="font-mono text-[10px] text-[#A79580] uppercase tracking-widest block mb-1">
            COUNTER SERVICE
          </span>
          <span className="font-mono text-xl md:text-2xl font-bold text-[#000000]">
            50+ YRS
          </span>
          <span className="block font-mono text-[11px] text-[#585858] mt-0.5">
            Physical Trade Desk
          </span>
        </div>

        <div className="border-r border-[#E5E1DA] pr-4 pt-3 md:pt-0">
          <span className="font-mono text-[10px] text-[#A79580] uppercase tracking-widest block mb-1">
            FEEDBACK NATURE
          </span>
          <span className="font-mono text-xl md:text-2xl font-bold text-[#000000]">
            100% REAL
          </span>
          <span className="block font-mono text-[11px] text-[#585858] mt-0.5">
            Zero Invented Stars
          </span>
        </div>

        <div className="pl-2 md:pl-4 pt-3 md:pt-0">
          <span className="font-mono text-[10px] text-[#A79580] uppercase tracking-widest block mb-1">
            SOURCING ACCURACY
          </span>
          <span className="font-mono text-xl md:text-2xl font-bold text-[#000000]">
            EXACT
          </span>
          <span className="block font-mono text-[11px] text-[#585858] mt-0.5">
            OEM &amp; Direct Match
          </span>
        </div>
      </div>

      {/* Note Submission Form */}
      {showNoteForm && (
        <div className="mb-14 p-6 md:p-8 bg-[#F0EDE7] border border-[#E5E1DA] rounded-xl shadow-xs transition-all">
          {noteSubmitted ? (
            <div className="text-center py-6 space-y-3">
              <CheckCircle2 className="w-9 h-9 text-[#A79580] mx-auto" />
              <h4 className="font-sans font-bold text-xl text-[#000000]">
                Counter Note Logged Successfully
              </h4>
              <p className="text-sm text-[#585858] max-w-md mx-auto">
                Thank you for contributing your trade feedback to Medina &amp; Son Plumbing Supply records.
              </p>
            </div>
          ) : (
            <form onSubmit={handleNoteSubmit} className="space-y-4 max-w-3xl">
              <div className="flex items-center justify-between border-b border-[#E5E1DA] pb-3 mb-4">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#000000] font-semibold">
                  SUBMIT COUNTER ENTRY // PLUMBING TRADE ARCHIVE
                </span>
                <span className="font-mono text-[10px] text-[#A79580]">
                  FORM 76-REV
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[11px] uppercase text-[#171715] block mb-1">
                    Your Name &amp; Company
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. M. Hernandez / Hernandez Plumbing"
                    value={noteName}
                    onChange={(e) => setNoteName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E5E1DA] rounded text-sm text-[#000000] focus:border-[#171715] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-mono text-[11px] uppercase text-[#171715] block mb-1">
                    Trade Role / Specialty
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Licensed Master Plumber, Homeowner"
                    value={noteTrade}
                    onChange={(e) => setNoteTrade(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E5E1DA] rounded text-sm text-[#000000] focus:border-[#171715] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[11px] uppercase text-[#171715] block mb-1">
                  What part did you need? How did the counter solve it?
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe the job, stem type, fitting size, or guidance provided at the counter..."
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E5E1DA] rounded text-sm text-[#000000] focus:border-[#171715] focus:outline-none resize-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowNoteForm(false)}
                  className="text-xs font-mono text-[#585858] hover:text-[#000000] px-4 py-2 uppercase"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-eliras text-xs py-2 px-5 h-10 min-h-0">
                  <span className="btn-text">LOG ENTRY</span>
                  <span className="btn-icon">
                    <ArrowRight className="w-3.5 h-3.5 text-[#A79580]" />
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-[#E5E1DA] mb-10">
        {[
          { key: 'all', label: 'ALL ENTRIES', count: 6 },
          { key: 'plumbers', label: 'MASTER PLUMBERS', count: 2 },
          { key: 'contractors', label: 'GENERAL CONTRACTORS', count: 1 },
          { key: 'commercial', label: 'COMMERCIAL FACILITIES', count: 2 },
          { key: 'homeowners', label: 'RESIDENTIAL / DIY', count: 1 },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveFilter(tab.key)}
            className={`px-3.5 py-1.5 rounded font-mono text-[12px] tracking-[0.14em] uppercase transition-colors cursor-pointer flex items-center gap-2 ${
              activeFilter === tab.key
                ? 'bg-[#171715] text-[#FFFFFF]'
                : 'bg-transparent text-[#585858] hover:bg-[#F0EDE7] hover:text-[#000000]'
            }`}
          >
            <span>{tab.label}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded ${
                activeFilter === tab.key ? 'bg-white/20 text-white' : 'bg-[#E5E1DA] text-[#585858]'
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Redesigned Archival Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.map((rev) => (
          <article
            key={rev.id}
            className="group relative bg-[#FBF9F5] border border-[#E5E1DA] hover:border-[#171715] p-6 md:p-7 rounded-xl transition-all duration-300 flex flex-col justify-between hover:shadow-lg"
          >
            {/* Card Header: Ticket ID & Verification Pill */}
            <div>
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#E5E1DA]">
                <span className="font-mono text-[10px] tracking-[0.18em] text-[#A79580] uppercase">
                  {rev.ticketId}
                </span>

                <div className="inline-flex items-center gap-1 text-[11px] font-mono uppercase text-[#171715] bg-[#F0EDE7] px-2 py-0.5 rounded">
                  {rev.category === 'plumbers' && <Wrench className="w-3 h-3 text-[#A79580]" />}
                  {rev.category === 'commercial' && <Building2 className="w-3 h-3 text-[#A79580]" />}
                  {rev.category === 'homeowners' && <Home className="w-3 h-3 text-[#A79580]" />}
                  {rev.category === 'contractors' && <ShieldCheck className="w-3 h-3 text-[#A79580]" />}
                  <span className="text-[10px] tracking-wider">{rev.jobContext}</span>
                </div>
              </div>

              {/* Sourced Part Banner */}
              <div className="mb-4 bg-[#F0EDE7]/60 p-3 rounded border-l-2 border-[#A79580]">
                <span className="font-mono text-[9px] text-[#A79580] tracking-widest uppercase block mb-0.5">
                  SOURCED COMPONENT
                </span>
                <span className="font-mono text-xs font-semibold text-[#000000]">
                  {rev.partSourced}
                </span>
              </div>

              {/* Editorial Quote */}
              <p className="text-[14px] md:text-[15px] text-[#222220] leading-relaxed mb-6 font-normal">
                "{rev.comment}"
              </p>
            </div>

            {/* Author Footer Block */}
            <div className="pt-4 border-t border-[#E5E1DA] flex justify-between items-end">
              <div>
                <span className="block font-sans font-bold text-sm text-[#000000]">
                  {rev.name}
                </span>
                <span className="block font-mono text-[11px] text-[#585858]">
                  {rev.role}
                </span>
                <span className="block font-mono text-[10px] text-[#A79580]">
                  {rev.company ? `${rev.company} · ` : ''}{rev.location}
                </span>
              </div>

              <span className="font-mono text-[10px] text-[#A79580] uppercase tracking-wider">
                {rev.date}
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Dispatch Card */}
      <div className="mt-14 p-8 md:p-10 bg-[#171715] text-[#FFFFFF] rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl">
        <div className="max-w-xl">
          <div className="font-mono text-[11px] tracking-[0.2em] text-[#A79580] uppercase mb-2">
            HAVE A MYSTERY PART OR HARD-TO-FIND VALVE?
          </div>
          <h4 className="font-sans font-bold text-xl md:text-2xl text-white tracking-tight">
            Email a photo with measurements to the counter team.
          </h4>
          <p className="font-mono text-xs text-white/70 mt-2">
            No serial numbers needed. Our staff matches spline counts, thread pitches, and pipe diameters on sight.
          </p>
        </div>

        <button
          onClick={() => onOpenEmailModal?.('Hard-to-Find Part Match')}
          className="btn-eliras text-xs py-2.5 px-6 h-12 min-h-0 whitespace-nowrap"
        >
          <span className="btn-text">EMAIL PART PHOTO</span>
          <span className="btn-icon">
            <ArrowRight className="w-3.5 h-3.5 text-[#A79580]" />
          </span>
        </button>
      </div>
    </section>
  );
};
