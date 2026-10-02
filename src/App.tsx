/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { CounterSection } from './components/CounterSection';
import { MaterialsIndex } from './components/MaterialsIndex';
import { HardToFindSection } from './components/HardToFindSection';
import { ProductsSection } from './components/ProductsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { FamilyBusinessSection } from './components/FamilyBusinessSection';
import { CustomerSignalSection } from './components/CustomerSignalSection';
import { ReviewsSection } from './components/ReviewsSection';
import { VisitSection } from './components/VisitSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { EmailInquiryModal } from './components/EmailInquiryModal';

export default function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [inquiryCategory, setInquiryCategory] = useState<string>('General Parts Identification');

  const handleOpenEmail = (category = 'General Parts Identification') => {
    setInquiryCategory(category);
    setIsEmailModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#585858] relative selection:bg-[#171715] selection:text-[#FBF9F5]">
      {/* Preloader: "The Parts Drawer" */}
      {!preloaderComplete && (
        <Preloader onComplete={() => setPreloaderComplete(true)} />
      )}

      {/* Floating Dark Navigation Container */}
      <Navigation onOpenEmail={() => handleOpenEmail('Navigation Direct Inquiry')} />

      {/* Main Single Page Content */}
      <main id="main-content">
        <Hero onOpenEmail={() => handleOpenEmail('Hero Direct Part Photo')} />
        <CounterSection />
        <MaterialsIndex />
        <HardToFindSection onOpenEmail={() => handleOpenEmail('Special Order / Hard-To-Find')} />
        <ProductsSection />
        <ExperienceSection />
        <FamilyBusinessSection />
        <CustomerSignalSection />
        <ReviewsSection onOpenEmailModal={(cat) => handleOpenEmail(cat || 'Trade Review Inquiry')} />
        <VisitSection onOpenEmail={() => handleOpenEmail('Visit & Counter Inquiry')} />
        <FinalCtaSection onOpenEmail={() => handleOpenEmail('Final Call Part Sourcing')} />
      </main>

      {/* Editorial Black Footer */}
      <Footer onOpenEmail={() => handleOpenEmail('Footer Inquiry')} />

      {/* Email / Part Photo Modal */}
      <EmailInquiryModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        defaultCategory={inquiryCategory}
      />
    </div>
  );
}
