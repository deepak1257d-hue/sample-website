'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { SHOP_CONFIG } from '@/config/shop';
import { createWhatsAppLink } from '@/utils/whatsapp';
import { MessageCircle, ArrowRight, ShieldCheck, Truck, Package, PhoneCall } from 'lucide-react';

interface HeroProps {
  onExploreClick?: () => void;
  onWholesaleClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onWholesaleClick }) => {
  const { t, isTamil } = useLanguage();
  const shopName = isTamil ? SHOP_CONFIG.shopName.ta : SHOP_CONFIG.shopName.en;

  const scrollToCatalogue = () => {
    if (onExploreClick) {
      onExploreClick();
      return;
    }
    const elem = document.getElementById('catalogue');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWholesale = () => {
    if (onWholesaleClick) {
      onWholesaleClick();
      return;
    }
    const elem = document.getElementById('wholesale');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-b from-amber-950 via-amber-900 to-amber-950 text-amber-50 pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      
      {/* Decorative background grid and lighting glows */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-900/80 border border-amber-600/40 text-amber-200 text-xs sm:text-sm font-medium shadow-inner">
              <span className="animate-pulse text-amber-400">🌾</span>
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              <span className="block text-amber-100">{t.hero.titleLine1}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-emerald-300">
                {t.hero.titleLine2}
              </span>
            </h1>

            {/* Shop Name Display */}
            <div className="text-base sm:text-lg font-semibold text-emerald-300 flex items-center justify-center lg:justify-start space-x-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{shopName}</span>
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-amber-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              
              {/* Primary Explore CTA */}
              <button
                onClick={scrollToCatalogue}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-amber-500/30 flex items-center justify-center space-x-2 group cursor-pointer active:scale-95"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* WhatsApp Secondary CTA */}
              <a
                href={createWhatsAppLink(t.whatsapp.generalMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-emerald-600/30 flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>{t.hero.ctaSecondary}</span>
              </a>

              {/* Wholesale Direct CTA */}
              <button
                onClick={scrollToWholesale}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-amber-900/60 hover:bg-amber-900 border border-amber-600/50 text-amber-200 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <Package className="w-4 h-4 text-amber-400" />
                <span>{t.hero.ctaWholesale}</span>
              </button>

            </div>

            {/* Quick Feature Highlights */}
            <div className="pt-6 grid grid-cols-3 gap-2 sm:gap-4 border-t border-amber-900/60 max-w-xl mx-auto lg:mx-0 text-center">
              <div className="p-2 sm:p-3 rounded-lg bg-amber-900/40 border border-amber-800/40">
                <ShieldCheck className="w-5 h-5 mx-auto text-amber-400 mb-1" />
                <span className="block text-xs font-semibold text-amber-100">{t.hero.trustBadge1}</span>
              </div>
              <div className="p-2 sm:p-3 rounded-lg bg-amber-900/40 border border-amber-800/40">
                <Truck className="w-5 h-5 mx-auto text-emerald-400 mb-1" />
                <span className="block text-xs font-semibold text-amber-100">{t.hero.trustBadge2}</span>
              </div>
              <div className="p-2 sm:p-3 rounded-lg bg-amber-900/40 border border-amber-800/40">
                <PhoneCall className="w-5 h-5 mx-auto text-amber-300 mb-1" />
                <span className="block text-xs font-semibold text-amber-100">{t.hero.trustBadge3}</span>
              </div>
            </div>

          </div>

          {/* Right Visual Image Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Main Card Graphic Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-700/40 bg-amber-900 group">
                <img
                  src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1000&q=80"
                  alt="Quality Tamil Nadu Rice & Cattle Feed"
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                
                {/* Floating Badge overlay top right */}
                <div className="absolute top-4 right-4 bg-amber-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-500/40 shadow-lg flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-amber-200">
                    {isTamil ? 'அரிசி & தீவனம் தயார்' : 'Retail & Wholesale Ready'}
                  </span>
                </div>

                {/* Floating Glass Box bottom overlay */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-amber-950/90 backdrop-blur-md border border-amber-700/50 shadow-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-amber-100">
                        {isTamil ? 'பொன்னி & சீரக சம்பா அரிசி' : 'Ponni & Seeraga Samba Rice'}
                      </h4>
                      <p className="text-xs text-amber-300/90">
                        {isTamil ? '5kg, 10kg, 26kg மூட்டைகளில் கிடைக்கும்' : 'Available in 5kg, 10kg, 26kg & 50kg bags'}
                      </p>
                    </div>
                    <span className="text-2xl">🌾</span>
                  </div>

                  <div className="pt-2 border-t border-amber-800/60 flex items-center justify-between text-xs font-semibold text-emerald-300">
                    <span>🐄 {isTamil ? 'மாட்டு தீவனம் உதிரியாகவும் கிடைக்கும்' : 'Cattle Feed Loose & Packed'}</span>
                    <span className="underline cursor-pointer" onClick={scrollToCatalogue}>
                      {isTamil ? 'பார்க்க →' : 'View →'}
                    </span>
                  </div>
                </div>

              </div>

              {/* Backing Accent Glow */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-3xl border-2 border-amber-500/30 bg-amber-600/10 pointer-events-none hidden sm:block" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
