'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck, PackageCheck, Truck, HeartHandshake, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const { t, isTamil } = useLanguage();

  const cards = [
    {
      icon: ShieldCheck,
      iconBg: 'bg-amber-100 text-amber-800 border-amber-300',
      title: t.about.card1Title,
      desc: t.about.card1Desc,
    },
    {
      icon: PackageCheck,
      iconBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      title: t.about.card2Title,
      desc: t.about.card2Desc,
    },
    {
      icon: Truck,
      iconBg: 'bg-blue-100 text-blue-800 border-blue-300',
      title: t.about.card3Title,
      desc: t.about.card3Desc,
    },
    {
      icon: HeartHandshake,
      iconBg: 'bg-amber-100 text-amber-900 border-amber-300',
      title: t.about.card4Title,
      desc: t.about.card4Desc,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-amber-50/70 border-y border-amber-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-200/80 px-3.5 py-1 rounded-full">
            {isTamil ? 'எங்கள் சிறப்பு' : 'Local Business Trust'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-950">
            {t.about.whyChooseTitle}
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            {t.about.whyChooseSubtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 shadow-sm border border-amber-200/80 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4 hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-inner ${card.iconBg}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-amber-950">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-2 flex items-center space-x-1 text-xs font-semibold text-amber-800">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>{isTamil ? 'உறுதியான தரம்' : 'Guaranteed Quality'}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
