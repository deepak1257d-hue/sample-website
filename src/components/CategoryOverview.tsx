'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CATEGORIES } from '@/data/categories';
import { Wheat, Sprout, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CategoryOverviewProps {
  onSelectCategory: (categoryId: 'rice' | 'cattle-feed') => void;
}

export const CategoryOverview: React.FC<CategoryOverviewProps> = ({ onSelectCategory }) => {
  const { isTamil } = useLanguage();

  return (
    <section className="py-12 bg-amber-50/60 border-b border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-200/70 px-3 py-1 rounded-full">
            {isTamil ? 'தயாரிப்பு பிரிவுகள்' : 'Product Categories'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-950">
            {isTamil ? 'அரிசி மற்றும் கால்நடை தீவனப் பிரிவுகள்' : 'Explore Our Primary Categories'}
          </h2>
          <p className="text-sm sm:text-base text-amber-900/80">
            {isTamil
              ? 'உங்கள் வீட்டுத் தேவை மற்றும் பண்ணைத் தேவைகளுக்கு ஏற்ற சிறந்த பொருட்கள்.'
              : 'Quality grain varieties for home cooking and balanced feed for livestock.'}
          </p>
        </div>

        {/* 2 Main Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CATEGORY 1: RICE */}
          <div
            onClick={() => onSelectCategory('rice')}
            className="group relative bg-white rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-amber-100 hover:border-amber-400 cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            {/* Background Decorative Accent */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-amber-100/60 rounded-bl-full transition-transform group-hover:scale-110 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <Wheat className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                  {isTamil ? 'சில்லறை & மொத்த மூட்டை' : 'Retail & Wholesale Bags'}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-amber-950 group-hover:text-amber-800 transition-colors mb-2">
                {isTamil ? CATEGORIES[0].title_ta : CATEGORIES[0].title_en}
              </h3>

              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                {isTamil ? CATEGORIES[0].description_ta : CATEGORIES[0].description_en}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-2 mb-6 text-xs text-amber-900 font-semibold">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{isTamil ? 'பொன்னி & இட்லி அரிசி' : 'Ponni & Idli Rice'}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{isTamil ? 'சீரக சம்பா அரிசி' : 'Seeraga Samba'}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{isTamil ? '5kg, 10kg, 26kg, 50kg' : '5kg to 50kg Bags'}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{isTamil ? 'பாரம்பரிய அரிசிகள்' : 'Traditional Grains'}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-amber-100 flex items-center justify-between text-sm font-bold text-amber-800 group-hover:text-amber-900">
              <span>{isTamil ? 'அரிசி வகைகளை காண்க' : 'Browse Rice Varieties'}</span>
              <div className="w-8 h-8 rounded-full bg-amber-100 group-hover:bg-amber-600 group-hover:text-white flex items-center justify-center transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* CATEGORY 2: CATTLE FEED */}
          <div
            onClick={() => onSelectCategory('cattle-feed')}
            className="group relative bg-white rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-emerald-100 hover:border-emerald-400 cursor-pointer flex flex-col justify-between overflow-hidden"
          >
            {/* Background Decorative Accent */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-100/60 rounded-bl-full transition-transform group-hover:scale-110 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <Sprout className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                  {isTamil ? 'மூட்டை & உதிரி கிடைக்கும்' : 'Packed & Loose Weight'}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-amber-950 group-hover:text-emerald-900 transition-colors mb-2">
                {isTamil ? CATEGORIES[1].title_ta : CATEGORIES[1].title_en}
              </h3>

              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                {isTamil ? CATEGORIES[1].description_ta : CATEGORIES[1].description_en}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-2 mb-6 text-xs text-emerald-950 font-semibold">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{isTamil ? 'தீவன மாத்திரைகள்' : 'Feed Pellets'}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{isTamil ? 'பருத்தி & கடலை புண்ணாக்கு' : 'Oil Cakes (Cotton & GNut)'}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{isTamil ? 'கோதுமை & அரிசி தவுடு' : 'Wheat & Rice Bran'}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{isTamil ? 'உதிரி கிலோ கணக்கில்' : 'Loose Weight Per KG'}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-emerald-100 flex items-center justify-between text-sm font-bold text-emerald-800 group-hover:text-emerald-950">
              <span>{isTamil ? 'கால்நடை தீவனங்கள் காண்க' : 'Browse Cattle Feed'}</span>
              <div className="w-8 h-8 rounded-full bg-emerald-100 group-hover:bg-emerald-700 group-hover:text-white flex items-center justify-center transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
