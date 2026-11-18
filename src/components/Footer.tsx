'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { SHOP_CONFIG } from '@/config/shop';
import { Globe, MapPin, Phone, MessageCircle, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate?: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { language, toggleLanguage, t, isTamil } = useLanguage();
  const shopName = isTamil ? SHOP_CONFIG.shopName.ta : SHOP_CONFIG.shopName.en;
  const address = isTamil ? SHOP_CONFIG.address.ta : SHOP_CONFIG.address.en;

  const scrollTo = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-amber-950 text-amber-100 pt-12 pb-24 lg:pb-12 border-t border-amber-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Col 1: Shop Brand info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollTo('home')}>
              <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-bold text-xl">
                🌾
              </div>
              <span className="text-xl font-bold text-amber-100">
                {shopName}
              </span>
            </div>

            <p className="text-xs text-amber-200/80 leading-relaxed max-w-sm">
              {isTamil
                ? 'தமிழ்நாட்டில் உயர்தர பொன்னி, சீரக சம்பா, இட்லி அரிசி மற்றும் அதிக பால் தரும் கால்நடை தீவனங்களை சில்லறை மற்றும் மொத்த விலையில் வழங்கும் நம்பகமான கடை.'
                : 'Your trusted local shop in Tamil Nadu for premium rice varieties, traditional grains, and high-fat nutritious cattle feed in retail & wholesale packs.'}
            </p>

            {/* Language Switcher in Footer */}
            <div className="pt-2">
              <button
                onClick={toggleLanguage}
                className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-900/80 hover:bg-amber-900 border border-amber-700/60 text-xs font-semibold text-amber-200 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>{language === 'en' ? 'Switch to தமிழ்' : 'Switch to English'}</span>
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-amber-200/90 font-medium">
              <li>
                <button onClick={() => scrollTo('home')} className="hover:text-amber-400 transition-colors">
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('catalogue')} className="hover:text-amber-400 transition-colors">
                  {t.nav.riceVarieties}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('cattle-feed')} className="hover:text-amber-400 transition-colors">
                  {t.nav.cattleFeed}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('wholesale')} className="hover:text-amber-400 transition-colors">
                  {t.nav.wholesale}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-amber-400 transition-colors">
                  {t.nav.aboutUs}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="hover:text-amber-400 transition-colors">
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Range List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
              {t.footer.productsTitle}
            </h4>
            <ul className="space-y-1.5 text-xs text-amber-200/90">
              <li>🌾 {isTamil ? 'பொன்னி புழுங்கல் & பச்சரிசி' : 'Super Deluxe Ponni Rice'}</li>
              <li>🌾 {isTamil ? 'இட்லி அரிசி (குண்டு அரிசி)' : 'Soft Kundu Idli Rice'}</li>
              <li>🌾 {isTamil ? 'சீரக சம்பா அரிசி' : 'Seeraga Samba Rice'}</li>
              <li>🌾 {isTamil ? 'மாப்பிள்ளை சம்பா & கருப்பு கவுனி' : 'Mappillai Samba & Black Rice'}</li>
              <li>🐄 {isTamil ? 'தீவன மாத்திரைகள் (Pellets)' : 'High Milk-Yield Feed Pellets'}</li>
              <li>🐄 {isTamil ? 'பருத்தி & கடலை புண்ணாக்கு' : 'Cottonseed & Groundnut Cake'}</li>
              <li>🐄 {isTamil ? 'கோதுமை தவுடு (உதிரி)' : 'Pure Wheat Bran (Loose)'}</li>
            </ul>
          </div>

          {/* Col 4: Shop Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-2 text-xs text-amber-200/90 leading-relaxed">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{SHOP_CONFIG.phoneNumber}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {SHOP_CONFIG.whatsappFormatted}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Bottom Copyright Bar */}
        <div className="pt-8 border-t border-amber-900/80 space-y-3 text-center text-xs text-amber-300/70">
          <p className="max-w-3xl mx-auto italic">
            * {t.footer.disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-amber-400/80 font-medium">
            <span>© {new Date().getFullYear()} {shopName}. {t.footer.copyright}</span>
            <span className="flex items-center space-x-1 text-amber-300">
              <span>Crafted for Tamil Nadu Local Business</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
