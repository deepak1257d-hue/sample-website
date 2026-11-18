'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { SHOP_CONFIG } from '@/config/shop';
import { createWhatsAppLink } from '@/utils/whatsapp';
import { Phone, MessageCircle, MapPin, Wheat } from 'lucide-react';

interface MobileActionBarProps {
  onNavigate?: (id: string) => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const handleCatalogueClick = () => {
    if (onNavigate) {
      onNavigate('catalogue');
      return;
    }
    const elem = document.getElementById('catalogue');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-amber-950/95 backdrop-blur-md border-t border-amber-800/60 py-2 px-3 shadow-2xl">
      <div className="grid grid-cols-4 gap-1 text-center">
        
        {/* 1. Call Shop */}
        <a
          href={SHOP_CONFIG.phoneCallUrl}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-amber-100 hover:bg-amber-900/60 transition-colors active:scale-95"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-900/80 text-emerald-400 flex items-center justify-center mb-0.5 border border-emerald-700/60">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold tracking-tight">
            {t.mobileBar.call}
          </span>
        </a>

        {/* 2. WhatsApp Chat */}
        <a
          href={createWhatsAppLink(t.whatsapp.generalMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-amber-100 hover:bg-amber-900/60 transition-colors active:scale-95"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-0.5 shadow-md">
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
          </div>
          <span className="text-[11px] font-bold tracking-tight">
            {t.mobileBar.whatsapp}
          </span>
        </a>

        {/* 3. Directions */}
        <a
          href={SHOP_CONFIG.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-amber-100 hover:bg-amber-900/60 transition-colors active:scale-95"
        >
          <div className="w-8 h-8 rounded-full bg-amber-900 text-amber-300 flex items-center justify-center mb-0.5 border border-amber-700">
            <MapPin className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold tracking-tight">
            {t.mobileBar.directions}
          </span>
        </a>

        {/* 4. Products Catalogue */}
        <button
          onClick={handleCatalogueClick}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-amber-100 hover:bg-amber-900/60 transition-colors active:scale-95"
        >
          <div className="w-8 h-8 rounded-full bg-amber-500 text-amber-950 flex items-center justify-center mb-0.5 shadow-md">
            <Wheat className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold tracking-tight">
            {t.mobileBar.catalogue}
          </span>
        </button>

      </div>
    </div>
  );
};
