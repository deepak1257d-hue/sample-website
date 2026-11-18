'use client';

import React from 'react';
import { Product } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';
import { createProductWhatsAppLink } from '@/utils/whatsapp';
import { MessageCircle, Eye, Check, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const { language, t, isTamil } = useLanguage();

  const title = isTamil ? product.name_ta : product.name_en;
  const subtitle = isTamil ? product.name_en : product.name_ta;
  const description = isTamil ? product.description_ta : product.description_en;
  const badgeText = product.badge ? (isTamil ? product.badge.ta : product.badge.en) : null;

  const whatsappUrl = createProductWhatsAppLink(
    product.name_en,
    product.name_ta,
    product.pack_sizes[0],
    language
  );

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-amber-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      
      {/* Top Image & Badge Container */}
      <div className="relative aspect-[4/3] bg-amber-50 overflow-hidden cursor-pointer" onClick={() => onViewDetails(product)}>
        <img
          src={product.image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            // Fallback placeholder image if URL fails
            (e.target as HTMLImageElement).src =
              product.category === 'rice'
                ? 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80'
                : 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80';
          }}
        />

        {/* Category Pill top left */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-amber-950/80 text-amber-200 backdrop-blur-md shadow-md">
            {product.category === 'rice' ? (isTamil ? 'அரிசி' : 'Rice') : (isTamil ? 'தீவனம்' : 'Cattle Feed')}
          </span>
        </div>

        {/* Featured Badge top right */}
        {badgeText && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500 text-amber-950 shadow-md flex items-center space-x-1">
              <Sparkles className="w-3 h-3 fill-amber-950" />
              <span>{badgeText}</span>
            </span>
          </div>
        )}

        {/* Availability Type Badges Overlay Bottom */}
        <div className="absolute bottom-2 inset-x-2 flex flex-wrap gap-1">
          {product.availability.packed && (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-950/80 text-emerald-200 border border-emerald-500/40 backdrop-blur-sm">
              {t.product.packedBadge}
            </span>
          )}
          {product.availability.loose && (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-950/80 text-amber-200 border border-amber-500/40 backdrop-blur-sm">
              {t.product.looseBadge}
            </span>
          )}
          {product.availability.wholesale && (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-950/80 text-blue-200 border border-blue-500/40 backdrop-blur-sm">
              {t.product.wholesaleBadge}
            </span>
          )}
        </div>
      </div>

      {/* Product Information Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          {/* Main Title & Subtitle */}
          <div className="cursor-pointer" onClick={() => onViewDetails(product)}>
            <h3 className="text-lg font-bold text-amber-950 group-hover:text-amber-700 transition-colors line-clamp-1">
              {title}
            </h3>
            <p className="text-xs text-amber-800/70 font-medium mb-2 line-clamp-1">
              {subtitle}
            </p>
          </div>

          {/* Short Description */}
          <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-3">
            {description}
          </p>

          {/* Pack Sizes Pills */}
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-gray-500 block">
              {t.product.availablePackSizes}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {product.pack_sizes.map((size, index) => (
                <span
                  key={index}
                  className="px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200 text-xs font-semibold"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-3 border-t border-amber-100 space-y-3">
          
          {/* Price Tag */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-500">
              {isTamil ? 'விலை / Rate:' : 'Price Rate:'}
            </span>
            <span className="text-sm font-extrabold text-amber-900 bg-amber-100/70 px-2.5 py-0.5 rounded-lg border border-amber-200">
              {product.price || t.product.priceOnEnquiry}
            </span>
          </div>

          {/* Buttons: View Details + WhatsApp Enquiry */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onViewDetails(product)}
              className="px-3 py-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 text-xs font-bold transition-all flex items-center justify-center space-x-1 border border-amber-300 active:scale-95"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{t.product.viewDetails}</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center justify-center space-x-1 shadow-md hover:shadow-emerald-600/30 active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
              <span className="truncate">{t.product.enquireWhatsApp}</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};
