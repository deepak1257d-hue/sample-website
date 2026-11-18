'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { SHOP_CONFIG } from '@/config/shop';
import { createWholesaleWhatsAppLink } from '@/utils/whatsapp';
import { Package, MessageCircle, PhoneCall, CheckCircle2, Building2, Truck, ShieldCheck } from 'lucide-react';

export const WholesaleSection: React.FC = () => {
  const { language, t, isTamil } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: '',
    quantity: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = createWholesaleWhatsAppLink(
      formData.name,
      formData.phone,
      formData.product,
      formData.quantity,
      formData.notes,
      language
    );
    window.open(link, '_blank');
  };

  return (
    <section id="wholesale" className="py-14 md:py-20 bg-gradient-to-b from-amber-950 via-amber-900 to-amber-950 text-white relative overflow-hidden">
      
      {/* Background Subtle Patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Information & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-900/80 border border-amber-600/50 text-amber-200 text-xs font-extrabold">
              <Package className="w-4 h-4 text-amber-400" />
              <span>{t.wholesale.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {t.wholesale.title}
            </h2>

            <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed">
              {t.wholesale.subtitle}
            </p>

            {/* Feature Cards Grid */}
            <div className="space-y-4 pt-2">
              
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-amber-900/50 border border-amber-700/40">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-100">{t.wholesale.feature1Title}</h4>
                  <p className="text-xs text-amber-200/80 mt-0.5">{t.wholesale.feature1Desc}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-amber-900/50 border border-amber-700/40">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-100">{t.wholesale.feature2Title}</h4>
                  <p className="text-xs text-amber-200/80 mt-0.5">{t.wholesale.feature2Desc}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-amber-900/50 border border-amber-700/40">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-500/30">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-100">{t.wholesale.feature3Title}</h4>
                  <p className="text-xs text-amber-200/80 mt-0.5">{t.wholesale.feature3Desc}</p>
                </div>
              </div>

            </div>

            {/* Direct Call Button */}
            <div className="pt-2">
              <a
                href={SHOP_CONFIG.phoneCallUrl}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-amber-900 hover:bg-amber-800 border border-amber-600/60 text-amber-100 font-bold text-sm transition-all shadow-md"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>{t.wholesale.callDirectlyButton}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Wholesale WhatsApp Enquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 text-amber-950 shadow-2xl border-4 border-amber-500/30 relative">
              
              <div className="mb-6 space-y-1">
                <h3 className="text-xl font-extrabold text-amber-950 flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-600" />
                  <span>{t.wholesale.formTitle}</span>
                </h3>
                <p className="text-xs text-gray-500">
                  {isTamil
                    ? 'விவரங்களை பூர்த்தி செய்து உடனே WhatsApp மூலம் அனுப்பலாம்.'
                    : 'Fill details to send an instant wholesale request via WhatsApp.'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-amber-950 mb-1">
                    {t.wholesale.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.wholesale.namePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-950 focus:border-amber-600 focus:bg-white focus:outline-none font-medium"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-amber-950 mb-1">
                    {t.wholesale.phoneLabel} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t.wholesale.phonePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-950 focus:border-amber-600 focus:bg-white focus:outline-none font-medium"
                  />
                </div>

                {/* Product Required */}
                <div>
                  <label className="block text-xs font-bold text-amber-950 mb-1">
                    {t.wholesale.productLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    placeholder={t.wholesale.productPlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-950 focus:border-amber-600 focus:bg-white focus:outline-none font-medium"
                  />
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-xs font-bold text-amber-950 mb-1">
                    {t.wholesale.quantityLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder={t.wholesale.quantityPlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-950 focus:border-amber-600 focus:bg-white focus:outline-none font-medium"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-amber-950 mb-1">
                    {t.wholesale.messageLabel}
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={t.wholesale.messagePlaceholder}
                    className="w-full px-4 py-2 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-950 focus:border-amber-600 focus:bg-white focus:outline-none font-medium resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm transition-all shadow-lg hover:shadow-emerald-600/30 flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                  <span>{t.wholesale.submitButton}</span>
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
