'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { SHOP_CONFIG } from '@/config/shop';
import { Award, Store, Users, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t, isTamil } = useLanguage();
  const shopName = isTamil ? SHOP_CONFIG.shopName.ta : SHOP_CONFIG.shopName.en;

  return (
    <section id="about" className="py-14 md:py-20 bg-white border-b border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image collage / Visual representation */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-amber-200 bg-amber-100">
              <img
                src="https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=80"
                alt="About Local Shop"
                className="w-full h-80 sm:h-96 object-cover"
              />
              
              {/* Floating overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-amber-950/90 text-white backdrop-blur-md border border-amber-700/60 shadow-lg space-y-1">
                <div className="flex items-center space-x-2">
                  <Store className="w-5 h-5 text-amber-400" />
                  <h4 className="text-sm font-bold text-amber-100">{shopName}</h4>
                </div>
                <p className="text-xs text-amber-300">
                  {isTamil ? 'உள்ளூர் குடும்பங்கள் & பண்ணையாளர்களின் நம்பிக்கை' : 'Serving Local Households & Farmers'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Text Story & Mission */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
                {isTamil ? 'எங்கள் கதை' : 'About Our Shop'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-950 leading-tight">
                {t.about.storyTitle}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {t.about.storyParagraph1}
            </p>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {t.about.storyParagraph2}
            </p>

            {/* Core Values Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-amber-950">
                  {isTamil ? 'பழமையான தரமான அரிசி' : 'Properly Aged Ponni & Idli Rice'}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-amber-950">
                  {isTamil ? 'அதிக பால் தரும் சத்தான தீவனம்' : 'High Milk-Yield Cattle Feed Pellets'}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-amber-950">
                  {isTamil ? 'உதிரியாகவும் மூட்டையாகவும் பெறலாம்' : 'Available in Retail Bags & Loose Weight'}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-amber-950">
                  {isTamil ? 'மொத்த வியாபார சலுகை விலை' : 'Wholesale Discounts for Bulk Buyers'}
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
