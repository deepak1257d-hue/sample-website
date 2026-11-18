'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { SHOP_CONFIG } from '@/config/shop';
import { createWhatsAppLink } from '@/utils/whatsapp';
import { Phone, MessageCircle, Menu, X, Globe, MapPin } from 'lucide-react';

interface HeaderProps {
  onNavigate?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const { language, toggleLanguage, t, isTamil } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shopDisplayName = isTamil ? SHOP_CONFIG.shopName.ta : SHOP_CONFIG.shopName.en;

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'catalogue', label: t.nav.riceVarieties },
    { id: 'cattle-feed', label: t.nav.cattleFeed },
    { id: 'wholesale', label: t.nav.wholesale },
    { id: 'about', label: t.nav.aboutUs },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-amber-950/95 backdrop-blur-md shadow-lg py-2.5 text-amber-50'
          : 'bg-amber-950 text-amber-50 py-3.5 border-b border-amber-900/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Shop Name */}
          <div 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-bold text-xl group-hover:scale-105 transition-transform shadow-inner">
              🌾
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-amber-100 group-hover:text-amber-300 transition-colors line-clamp-1">
                {shopDisplayName}
              </span>
              <span className="block text-xs text-amber-300/80 font-medium">
                {isTamil ? 'அரிசி & கால்நடை தீவன கடை' : 'Rice & Cattle Feed Merchant'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-amber-100/90 hover:text-amber-300 hover:bg-amber-900/50 transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons & Language Switcher */}
          <div className="hidden sm:flex items-center space-x-3">
            
            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-amber-900/70 hover:bg-amber-800 border border-amber-700/60 text-xs font-semibold text-amber-200 transition-all shadow-sm"
              title="Switch Language / மொழியை மாற்ற"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === 'en' ? 'English' : 'தமிழ்'}</span>
              <span className="text-amber-400 text-[10px] uppercase bg-amber-950 px-1.5 py-0.5 rounded-full border border-amber-800">
                {language === 'en' ? 'TA' : 'EN'}
              </span>
            </button>

            {/* Direct Call Button */}
            <a
              href={SHOP_CONFIG.phoneCallUrl}
              className="hidden md:flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-700/60 hover:bg-emerald-900 text-emerald-200 text-xs font-medium transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.nav.callNow}</span>
            </a>

            {/* WhatsApp CTA */}
            <a
              href={createWhatsAppLink(t.whatsapp.generalMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md hover:shadow-emerald-600/30 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>{t.nav.enquireWhatsApp}</span>
            </a>
          </div>

          {/* Mobile Right Controls: Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-amber-900/80 border border-amber-700/60 text-xs font-bold text-amber-200"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === 'en' ? 'தமிழ்' : 'EN'}</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-amber-200 hover:text-white hover:bg-amber-900/60 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-amber-950 border-b border-amber-900/60 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold text-amber-100 hover:bg-amber-900/70 hover:text-amber-300 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-amber-900/60 grid grid-cols-2 gap-2">
            <a
              href={SHOP_CONFIG.phoneCallUrl}
              className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-amber-900/70 border border-amber-800 text-amber-200 text-xs font-bold"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{t.nav.callNow}</span>
            </a>

            <a
              href={createWhatsAppLink(t.whatsapp.generalMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-emerald-600 text-white text-xs font-bold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.nav.enquireWhatsApp}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
