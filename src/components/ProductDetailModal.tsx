'use client';

import React, { useState } from 'react';
import { Product } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';
import { SHOP_CONFIG } from '@/config/shop';
import { createProductWhatsAppLink } from '@/utils/whatsapp';
import { X, MessageCircle, Phone, CheckCircle2, PackageCheck, AlertCircle, Sparkles } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const { language, t, isTamil } = useLanguage();
  const [selectedPackSize, setSelectedPackSize] = useState<string>('');

  if (!product) return null;

  const title = isTamil ? product.name_ta : product.name_en;
  const secondaryTitle = isTamil ? product.name_en : product.name_ta;
  const description = isTamil ? product.description_ta : product.description_en;
  const activePack = selectedPackSize || product.pack_sizes[0];

  const whatsappUrl = createProductWhatsAppLink(
    product.name_en,
    product.name_ta,
    activePack,
    language
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      
      {/* Modal Container Box */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-200 max-h-[90vh] flex flex-col">
        
        {/* Close Button top right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-amber-950/70 hover:bg-amber-950 text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content Container */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Top Grid: Product Image + Basic Headers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            
            {/* Large Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-amber-50 border border-amber-200 shadow-inner">
              <img
                src={product.image}
                alt={title}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <div className="absolute top-3 left-3 bg-amber-500 text-amber-950 text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center space-x-1">
                  <Sparkles className="w-3.5 h-3.5 fill-amber-950" />
                  <span>{isTamil ? product.badge.ta : product.badge.en}</span>
                </div>
              )}
            </div>

            {/* Product Meta Header */}
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200">
                {product.category === 'rice' ? t.product.categoryRice : t.product.categoryFeed}
              </span>

              <h2 className="text-2xl font-extrabold text-amber-950 leading-tight">
                {title}
              </h2>
              
              <p className="text-sm font-semibold text-amber-800/80">
                {secondaryTitle}
              </p>

              {/* In Stock Badge */}
              <div className="flex items-center space-x-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 w-fit">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{t.product.inStock}</span>
              </div>

              {/* Price Display */}
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 space-y-1">
                <span className="text-xs font-semibold text-gray-500 block">
                  {isTamil ? 'தற்போதைய சந்தை விலை:' : 'Current Rate / Price:'}
                </span>
                <span className="text-xl font-extrabold text-amber-950">
                  {product.price || t.product.priceOnEnquiry}
                </span>
              </div>

            </div>

          </div>

          {/* Detailed Description */}
          <div className="space-y-2 pt-2 border-t border-amber-100">
            <h3 className="text-sm font-bold text-amber-950">
              {isTamil ? 'தயாரிப்பு விவரம்:' : 'Product Description:'}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-2xl border border-gray-100">
              {description}
            </p>
          </div>

          {/* Interactive Pack Size Selector */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-amber-950 block">
              {t.product.selectPackSize}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {product.pack_sizes.map((size) => {
                const isSelected = activePack === size;
                return (
                  <button
                    key={size}
                    onClick={() => setSelectedPackSize(size)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border text-center ${
                      isSelected
                        ? 'bg-amber-800 text-white border-amber-900 shadow-md ring-2 ring-amber-500/30'
                        : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-200'
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Availability Type Indicators */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2 text-xs">
            <h4 className="font-bold text-amber-950 flex items-center space-x-1.5">
              <PackageCheck className="w-4 h-4 text-amber-700" />
              <span>{t.product.availabilityStatus}</span>
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className={`p-2 rounded-lg border text-center font-semibold ${product.availability.packed ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-gray-50 text-gray-400 border-gray-200'}`}>
                {product.availability.packed ? '✓ ' + t.product.packedBadge : '✗ Packed'}
              </div>
              <div className={`p-2 rounded-lg border text-center font-semibold ${product.availability.loose ? 'bg-amber-100 text-amber-900 border-amber-300' : 'bg-gray-50 text-gray-400 border-gray-200'}`}>
                {product.availability.loose ? '✓ ' + t.product.looseBadge : '✗ Loose'}
              </div>
              <div className={`p-2 rounded-lg border text-center font-semibold ${product.availability.wholesale ? 'bg-blue-50 text-blue-900 border-blue-200' : 'bg-gray-50 text-gray-400 border-gray-200'}`}>
                {product.availability.wholesale ? '✓ ' + t.product.wholesaleBadge : '✗ Wholesale'}
              </div>
            </div>
          </div>

          {/* Market Rate Notice */}
          <div className="flex items-start space-x-2 text-xs text-amber-800 bg-amber-100/50 p-3 rounded-xl border border-amber-200">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p>{t.product.estimatedPriceNotice}</p>
          </div>

        </div>

        {/* Modal Sticky Bottom Action Footer */}
        <div className="p-4 bg-amber-950 text-white border-t border-amber-900 flex flex-col sm:flex-row gap-3">
          
          <a
            href={SHOP_CONFIG.phoneCallUrl}
            className="flex-1 py-3 px-4 rounded-xl bg-amber-900 hover:bg-amber-800 border border-amber-700 text-amber-100 font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-colors"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>{t.product.callToOrder}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-lg hover:shadow-emerald-600/40 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span>{t.product.enquireWhatsApp} ({activePack})</span>
          </a>

        </div>

      </div>

    </div>
  );
};
