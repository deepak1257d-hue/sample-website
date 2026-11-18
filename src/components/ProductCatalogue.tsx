'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { SAMPLE_PRODUCTS, Product } from '@/data/products';
import { CATEGORIES } from '@/data/categories';
import { useLanguage } from '@/context/LanguageContext';
import { ProductCard } from './ProductCard';
import { ProductDetailModal } from './ProductDetailModal';
import { Search, Filter, X, Wheat, Sprout, SlidersHorizontal, Check } from 'lucide-react';

interface ProductCatalogueProps {
  initialCategory?: 'all' | 'rice' | 'cattle-feed';
}

export const ProductCatalogue: React.FC<ProductCatalogueProps> = ({ initialCategory = 'all' }) => {
  const { isTamil, t } = useLanguage();
  
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'rice' | 'cattle-feed'>(initialCategory);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPackSize, setSelectedPackSize] = useState<string>('all');
  const [availabilityFilter, setAvailabilityFilter] = useState<'all' | 'packed' | 'loose' | 'wholesale'>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  // Handle Category Change
  const handleCategoryChange = (cat: 'all' | 'rice' | 'cattle-feed') => {
    setSelectedCategory(cat);
    setSelectedSubCategory('all');
  };

  // Filter products algorithm
  const filteredProducts = useMemo(() => {
    return SAMPLE_PRODUCTS.filter((product) => {
      // 1. Primary Category Filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // 2. Sub Category Filter
      if (selectedSubCategory !== 'all') {
        if (selectedSubCategory === 'wholesale') {
          if (!product.availability.wholesale) return false;
        } else if (product.subCategory !== selectedSubCategory) {
          return false;
        }
      }

      // 3. Pack Size Filter
      if (selectedPackSize !== 'all') {
        if (selectedPackSize === 'loose') {
          if (!product.availability.loose) return false;
        } else {
          const hasPack = product.pack_sizes.some((size) =>
            size.toLowerCase().includes(selectedPackSize.toLowerCase())
          );
          if (!hasPack) return false;
        }
      }

      // 4. Availability Type Filter
      if (availabilityFilter !== 'all') {
        if (availabilityFilter === 'packed' && !product.availability.packed) return false;
        if (availabilityFilter === 'loose' && !product.availability.loose) return false;
        if (availabilityFilter === 'wholesale' && !product.availability.wholesale) return false;
      }

      // 5. Search Query (Matches English & Tamil names and descriptions)
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const nameEn = product.name_en.toLowerCase();
        const nameTa = product.name_ta.toLowerCase();
        const descEn = product.description_en.toLowerCase();
        const descTa = product.description_ta.toLowerCase();

        return (
          nameEn.includes(query) ||
          nameTa.includes(query) ||
          descEn.includes(query) ||
          descTa.includes(query)
        );
      }

      return true;
    });
  }, [selectedCategory, selectedSubCategory, selectedPackSize, availabilityFilter, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedSubCategory('all');
    setSearchQuery('');
    setSelectedPackSize('all');
    setAvailabilityFilter('all');
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedSubCategory !== 'all' ||
    searchQuery !== '' ||
    selectedPackSize !== 'all' ||
    availabilityFilter !== 'all';

  return (
    <section id="catalogue" className="py-12 md:py-16 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-200">
            {isTamil ? 'அரிசி & தீவன பட்டியல்' : 'Digital Product Catalogue'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-950">
            {t.catalogue.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            {t.catalogue.sectionSubtitle}
          </p>
        </div>

        {/* Filter Controls Box */}
        <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-lg border border-amber-200/80 space-y-5">
          
          {/* Top Row: Search Input + Major Category Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            
            {/* Search Input Bar */}
            <div className="lg:col-span-6 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-amber-800">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.catalogue.searchPlaceholder}
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-amber-50/60 border border-amber-200 focus:border-amber-600 focus:bg-white focus:outline-none text-sm text-amber-950 placeholder-amber-800/50 font-medium transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Main Category Filter Tabs */}
            <div className="lg:col-span-6 flex items-center justify-start lg:justify-end gap-2 overflow-x-auto pb-1 lg:pb-0">
              
              <button
                onClick={() => handleCategoryChange('all')}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all shrink-0 flex items-center space-x-1.5 ${
                  selectedCategory === 'all'
                    ? 'bg-amber-950 text-white shadow-md'
                    : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200'
                }`}
              >
                <span>{t.catalogue.filterAll}</span>
              </button>

              <button
                onClick={() => handleCategoryChange('rice')}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all shrink-0 flex items-center space-x-1.5 ${
                  selectedCategory === 'rice'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200'
                }`}
              >
                <Wheat className="w-3.5 h-3.5" />
                <span>{t.catalogue.filterRice}</span>
              </button>

              <button
                onClick={() => handleCategoryChange('cattle-feed')}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all shrink-0 flex items-center space-x-1.5 ${
                  selectedCategory === 'cattle-feed'
                    ? 'bg-emerald-700 text-white shadow-md'
                    : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200'
                }`}
              >
                <Sprout className="w-3.5 h-3.5" />
                <span>{t.catalogue.filterFeed}</span>
              </button>

            </div>

          </div>

          {/* Secondary Sub-category & Filter Chips */}
          <div className="pt-4 border-t border-amber-100 flex flex-wrap items-center justify-between gap-3">
            
            {/* Sub category Chips */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-amber-950/70 mr-1 flex items-center space-x-1">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>{isTamil ? 'வகை:' : 'Type:'}</span>
              </span>

              {/* Sub Categories based on active category */}
              {(selectedCategory === 'all' || selectedCategory === 'rice') && (
                <>
                  <button
                    onClick={() => setSelectedSubCategory('everyday')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      selectedSubCategory === 'everyday'
                        ? 'bg-amber-800 text-white'
                        : 'bg-gray-100 hover:bg-amber-100 text-gray-700'
                    }`}
                  >
                    {isTamil ? 'தினசரி அரிசி' : 'Everyday Rice'}
                  </button>

                  <button
                    onClick={() => setSelectedSubCategory('traditional')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      selectedSubCategory === 'traditional'
                        ? 'bg-amber-800 text-white'
                        : 'bg-gray-100 hover:bg-amber-100 text-gray-700'
                    }`}
                  >
                    {isTamil ? 'பாரம்பரிய அரிசி' : 'Traditional Rice'}
                  </button>

                  <button
                    onClick={() => setSelectedSubCategory('raw')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      selectedSubCategory === 'raw'
                        ? 'bg-amber-800 text-white'
                        : 'bg-gray-100 hover:bg-amber-100 text-gray-700'
                    }`}
                  >
                    {isTamil ? 'பச்சரிசி' : 'Raw Rice'}
                  </button>
                </>
              )}

              {(selectedCategory === 'all' || selectedCategory === 'cattle-feed') && (
                <>
                  <button
                    onClick={() => setSelectedSubCategory('feed-mix')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      selectedSubCategory === 'feed-mix'
                        ? 'bg-emerald-800 text-white'
                        : 'bg-gray-100 hover:bg-emerald-100 text-gray-700'
                    }`}
                  >
                    {isTamil ? 'தீவன மாத்திரைகள்' : 'Feed Pellets'}
                  </button>

                  <button
                    onClick={() => setSelectedSubCategory('cake-bran')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      selectedSubCategory === 'cake-bran'
                        ? 'bg-emerald-800 text-white'
                        : 'bg-gray-100 hover:bg-emerald-100 text-gray-700'
                    }`}
                  >
                    {isTamil ? 'புண்ணாக்கு & தவுடு' : 'Oil Cake & Bran'}
                  </button>

                  <button
                    onClick={() => setSelectedSubCategory('loose-grain')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      selectedSubCategory === 'loose-grain'
                        ? 'bg-emerald-800 text-white'
                        : 'bg-gray-100 hover:bg-emerald-100 text-gray-700'
                    }`}
                  >
                    {isTamil ? 'உதிரி தானியங்கள்' : 'Loose Grains'}
                  </button>
                </>
              )}
            </div>

            {/* Pack Size & Availability Dropdown Filters */}
            <div className="flex flex-wrap items-center gap-2">
              
              {/* Pack Size Filter */}
              <select
                value={selectedPackSize}
                onChange={(e) => setSelectedPackSize(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-950 focus:outline-none"
              >
                <option value="all">{t.catalogue.allSizes}</option>
                <option value="5 kg">5 kg Bags</option>
                <option value="10 kg">10 kg Bags</option>
                <option value="25 kg">25 kg / 26 kg Bags</option>
                <option value="50 kg">50 kg Bags</option>
                <option value="loose">{isTamil ? 'உதிரி (Loose)' : 'Loose Weight'}</option>
              </select>

              {/* Availability Filter */}
              <select
                value={availabilityFilter}
                onChange={(e) => setAvailabilityFilter(e.target.value as any)}
                className="px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-950 focus:outline-none"
              >
                <option value="all">{isTamil ? 'அனைத்து இருப்பு' : 'All Availability'}</option>
                <option value="packed">{isTamil ? 'பாக்கெட் மூட்டைகள்' : 'Packed Bags Only'}</option>
                <option value="loose">{isTamil ? 'உதிரியாக கிடைக்கும்' : 'Loose Quantity'}</option>
                <option value="wholesale">{isTamil ? 'மொத்த வியாபாரம்' : 'Wholesale Bags'}</option>
              </select>

              {/* Clear Filters Button */}
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="px-3 py-1.5 rounded-xl bg-red-100 hover:bg-red-200 text-red-800 text-xs font-bold transition-colors flex items-center space-x-1"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>{t.catalogue.clearFilters}</span>
                </button>
              )}

            </div>

          </div>

        </div>

        {/* Results Counter & Active Filter Status */}
        <div className="flex items-center justify-between text-xs font-bold text-gray-500 px-2">
          <div>
            <span>{filteredProducts.length} {t.catalogue.resultsFound}</span>
          </div>
          {hasActiveFilters && (
            <span className="text-amber-800 underline cursor-pointer" onClick={resetFilters}>
              {t.catalogue.clearFilters}
            </span>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={(prod) => setActiveModalProduct(prod)}
              />
            ))}
          </div>
        ) : (
          /* Empty Search Results State */
          <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-amber-200 max-w-lg mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto text-2xl font-bold">
              🌾
            </div>
            <h3 className="text-lg font-bold text-amber-950">
              {t.catalogue.noResultsTitle}
            </h3>
            <p className="text-xs text-gray-500">
              {t.catalogue.noResultsDesc}
            </p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs transition-colors"
            >
              {t.catalogue.clearFilters}
            </button>
          </div>
        )}

      </div>

      {/* Product Details Modal */}
      <ProductDetailModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </section>
  );
};
