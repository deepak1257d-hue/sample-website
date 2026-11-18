'use client';

import React, { useState } from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CategoryOverview } from '@/components/CategoryOverview';
import { ProductCatalogue } from '@/components/ProductCatalogue';
import { WholesaleSection } from '@/components/WholesaleSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { AboutSection } from '@/components/AboutSection';
import { ContactAndMap } from '@/components/ContactAndMap';
import { MobileActionBar } from '@/components/MobileActionBar';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [catalogueCategory, setCatalogueCategory] = useState<'all' | 'rice' | 'cattle-feed'>('all');

  const handleSelectCategoryFromOverview = (categoryId: 'rice' | 'cattle-feed') => {
    setCatalogueCategory(categoryId);
    const catalogueElem = document.getElementById('catalogue');
    if (catalogueElem) {
      catalogueElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'cattle-feed') {
      setCatalogueCategory('cattle-feed');
      const catalogueElem = document.getElementById('catalogue');
      if (catalogueElem) {
        catalogueElem.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (sectionId === 'rice') {
      setCatalogueCategory('rice');
      const catalogueElem = document.getElementById('catalogue');
      if (catalogueElem) {
        catalogueElem.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-amber-50/30 text-amber-950 font-sans flex flex-col selection:bg-amber-200 selection:text-amber-950">
        
        {/* Sticky Header */}
        <Header onNavigate={handleNavigate} />

        {/* Page Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero
            onExploreClick={() => handleNavigate('catalogue')}
            onWholesaleClick={() => handleNavigate('wholesale')}
          />

          {/* Primary Category Overview Cards */}
          <CategoryOverview onSelectCategory={handleSelectCategoryFromOverview} />

          {/* Main Product Catalogue & Filters */}
          <ProductCatalogue initialCategory={catalogueCategory} />

          {/* Wholesale Enquiry Section */}
          <WholesaleSection />

          {/* Why Choose Us Trust Cards */}
          <WhyChooseUs />

          {/* About The Shop Section */}
          <AboutSection />

          {/* Contact Information & Google Maps Embed */}
          <ContactAndMap />
        </main>

        {/* Footer */}
        <Footer onNavigate={handleNavigate} />

        {/* Sticky Mobile Action Bar (Call, WhatsApp, Location, Catalogue) */}
        <MobileActionBar onNavigate={handleNavigate} />

      </div>
    </LanguageProvider>
  );
}
