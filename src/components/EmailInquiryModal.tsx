import React, { useState } from 'react';
import { X, Mail, Check, ArrowRight, Camera } from 'lucide-react';

interface EmailInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export const EmailInquiryModal: React.FC<EmailInquiryModalProps> = ({
  isOpen,
  onClose,
  defaultCategory = 'General Parts Identification',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState(defaultCategory);
  const [description, setDescription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleOpenClient = () => {
    const subject = encodeURIComponent(`Part Identification Request - ${category} - Medina & Son`);
    const body = encodeURIComponent(
      `Hello Medina & Son Counter Team,\n\nI need assistance identifying and sourcing a plumbing part:\n\n` +
      `Name: ${name || 'Customer'}\n` +
      `Phone: ${phone || 'Not provided'}\n` +
      `Category: ${category}\n` +
      `Part Description / Measurements: ${description || 'Please see attached photo'}\n\n` +
      `[Attaching photo of fitting / stem / valve / label]\n\nThank you!`
    );
    window.location.href = `mailto:sales@medinaplumbingsupply.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="email-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#171715]/70 backdrop-blur-xs"
    >
      <div className="relative w-full max-w-lg bg-[#FBF9F5] border border-[#E5E1DA] rounded-xl shadow-2xl p-6 md:p-8 overflow-hidden text-[#585858]">
        {/* Header */}
        <div className="flex justify-between items-start pb-4 border-b border-[#E5E1DA] mb-6">
          <div>
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#A79580] block mb-1">
              COUNTER DISPATCH // EMAIL
            </span>
            <h3 id="email-modal-title" className="font-sans font-bold text-xl md:text-2xl text-[#000000] tracking-tight">
              EMAIL THE COUNTER
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-[#F0EDE7] text-[#585858] hover:text-[#000000] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#171715] text-[#FFFFFF] flex items-center justify-center mx-auto">
              <Check className="w-6 h-6 text-[#A79580]" />
            </div>
            <h4 className="font-sans font-bold text-xl text-[#000000]">
              Inquiry Dispatched to Counter
            </h4>
            <p className="text-sm text-[#585858] max-w-sm mx-auto leading-relaxed">
              Our counter staff reviews part photos and specification requests during regular business hours (Mon–Fri 7am–4:30pm).
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleOpenClient}
                className="btn-eliras text-xs py-2 px-4 h-10 min-h-0"
              >
                <span className="btn-text">OPEN IN EMAIL CLIENT</span>
                <span className="btn-icon">
                  <Mail className="w-3.5 h-3.5 text-[#A79580]" />
                </span>
              </button>
              <button
                onClick={onClose}
                className="btn-eliras-secondary text-xs py-2 px-4 h-10 min-h-0"
              >
                <span className="btn-text">DONE</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-xs md:text-sm text-[#585858] leading-relaxed">
              Send us the measurements, markings, or description. For fastest identification, you can also launch directly to your mail app to attach photos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-[11px] uppercase tracking-wider text-[#171715] block mb-1">
                  Name / Trade Company
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. M. Hernandez / Hernandez Plumbing"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#E5E1DA] rounded text-sm text-[#000000] focus:border-[#171715] focus:outline-none"
                />
              </div>

              <div>
                <label className="font-mono text-[11px] uppercase tracking-wider text-[#171715] block mb-1">
                  Contact Phone
                </label>
                <input
                  type="tel"
                  placeholder="(305) 555-0123"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#E5E1DA] rounded text-sm text-[#000000] focus:border-[#171715] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="font-mono text-[11px] uppercase tracking-wider text-[#171715] block mb-1">
                Your Email Address
              </label>
              <input
                type="email"
                required
                placeholder="contractor@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#E5E1DA] rounded text-sm text-[#000000] focus:border-[#171715] focus:outline-none"
              />
            </div>

            <div>
              <label className="font-mono text-[11px] uppercase tracking-wider text-[#171715] block mb-1">
                Part Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#E5E1DA] rounded text-sm text-[#000000] focus:border-[#171715] focus:outline-none"
              >
                <option value="Tub & Shower Stem / Cartridge">Tub &amp; Shower Stem / Cartridge</option>
                <option value="Fittings & Pipe (Brass, Copper, DWV, PVC)">Fittings &amp; Pipe (Brass, Copper, DWV, PVC)</option>
                <option value="Valves & Regulators">Valves &amp; Regulators</option>
                <option value="Water Heater Elements & Parts">Water Heater Elements &amp; Parts</option>
                <option value="Commercial Fixture & Flushometer">Commercial Fixture &amp; Flushometer</option>
                <option value="Special Order Sourcing">Special Order Sourcing</option>
                <option value="General Inventory Inquiry">General Inventory Inquiry</option>
              </select>
            </div>

            <div>
              <label className="font-mono text-[11px] uppercase tracking-wider text-[#171715] block mb-1">
                Part Markings / Splines / Problem Description
              </label>
              <textarea
                rows={3}
                required
                placeholder="e.g. 16-point broach spline, 3-inch stem, leaking Price Pfister shower valve from 1978..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#E5E1DA] rounded text-sm text-[#000000] focus:border-[#171715] focus:outline-none resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleOpenClient}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-mono tracking-wider text-[#585858] hover:text-[#000000] uppercase py-2 cursor-pointer"
              >
                <Camera className="w-3.5 h-3.5 text-[#A79580]" />
                <span>Attach Photo via Mail App</span>
              </button>

              <button
                type="submit"
                className="w-full sm:w-auto btn-eliras text-xs py-2 px-5 h-10 min-h-0"
              >
                <span className="btn-text">SEND INQUIRY</span>
                <span className="btn-icon">
                  <ArrowRight className="w-3.5 h-3.5 text-[#A79580]" />
                </span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
