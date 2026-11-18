'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { SHOP_CONFIG } from '@/config/shop';
import { createWhatsAppLink } from '@/utils/whatsapp';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Mail, Store } from 'lucide-react';

export const ContactAndMap: React.FC = () => {
  const { t, isTamil } = useLanguage();

  const address = isTamil ? SHOP_CONFIG.address.ta : SHOP_CONFIG.address.en;
  const hoursWeekdays = isTamil ? SHOP_CONFIG.openingHours.ta.weekdays : SHOP_CONFIG.openingHours.en.weekdays;
  const hoursSunday = isTamil ? SHOP_CONFIG.openingHours.ta.sunday : SHOP_CONFIG.openingHours.en.sunday;
  const shopName = isTamil ? SHOP_CONFIG.shopName.ta : SHOP_CONFIG.shopName.en;

  return (
    <section id="contact" className="py-14 md:py-20 bg-amber-50/60 border-t border-amber-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-amber-900 bg-amber-200 px-3.5 py-1 rounded-full">
            {isTamil ? 'முகவரி & தொடர்பு' : 'Contact Us & Location'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-950">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Top Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* CARD 1: Shop Address & Tap for Directions */}
          <div className="bg-white rounded-3xl p-6 shadow-md border border-amber-200 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center border border-amber-300 shadow-inner">
                <MapPin className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-lg font-bold text-amber-950">
                {t.contact.addressLabel}
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {address}
              </p>
            </div>

            <a
              href={SHOP_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold text-xs transition-colors flex items-center justify-center space-x-2 border border-amber-300"
            >
              <Navigation className="w-4 h-4 text-amber-800" />
              <span>{t.contact.getDirectionsBtn}</span>
            </a>
          </div>

          {/* CARD 2: Phone & WhatsApp Tap to Call/Chat */}
          <div className="bg-white rounded-3xl p-6 shadow-md border border-amber-200 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center border border-emerald-300 shadow-inner">
                <Phone className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-lg font-bold text-amber-950">
                {isTamil ? 'போன் & WhatsApp தொடர்பு' : 'Phone & WhatsApp'}
              </h3>
              
              <div className="space-y-1 text-xs sm:text-sm text-gray-700 font-semibold">
                <p>📞 {SHOP_CONFIG.phoneNumber}</p>
                <p>💬 WhatsApp: {SHOP_CONFIG.whatsappFormatted}</p>
                <p>✉️ {SHOP_CONFIG.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={SHOP_CONFIG.phoneCallUrl}
                className="py-3 px-3 rounded-2xl bg-amber-900 hover:bg-amber-950 text-white font-bold text-xs transition-colors flex items-center justify-center space-x-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.contact.callUsBtn}</span>
              </a>

              <a
                href={createWhatsAppLink(t.whatsapp.generalMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center justify-center space-x-1.5 shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
                <span className="truncate">{t.contact.chatWhatsAppBtn}</span>
              </a>
            </div>
          </div>

          {/* CARD 3: Opening Hours */}
          <div className="bg-white rounded-3xl p-6 shadow-md border border-amber-200 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center border border-amber-300 shadow-inner">
                <Clock className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-lg font-bold text-amber-950">
                {t.contact.hoursLabel}
              </h3>
              
              <div className="space-y-2 text-xs sm:text-sm text-gray-700 font-medium">
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200">
                  <span className="font-bold text-amber-950 block mb-0.5">
                    {isTamil ? 'திங்கள் - சனி' : 'Monday - Saturday'}
                  </span>
                  <span>{hoursWeekdays}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200">
                  <span className="font-bold text-amber-950 block mb-0.5">
                    {isTamil ? 'ஞாயிற்றுக்கிழமை' : 'Sunday'}
                  </span>
                  <span>{hoursSunday}</span>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-emerald-800 font-bold bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 text-center">
              ✓ {isTamil ? 'கடையில் நேரடி பிக்கப் வசதி உண்டு' : 'Direct shop pickup available'}
            </div>
          </div>

        </div>

        {/* Interactive Google Maps Embed Container */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-lg border border-amber-200 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Store className="w-5 h-5 text-amber-800" />
              <h3 className="text-base sm:text-lg font-bold text-amber-950">
                {isTamil ? 'கடை அமைந்துள்ள இடம் (Google Maps)' : 'Shop Location Map'}
              </h3>
            </div>
            
            <a
              href={SHOP_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-amber-800 hover:text-amber-950 underline flex items-center space-x-1"
            >
              <span>{t.contact.getDirectionsBtn}</span>
              <Navigation className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-amber-200 bg-amber-100">
            <iframe
              title="Shop Google Maps Location"
              src={SHOP_CONFIG.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
