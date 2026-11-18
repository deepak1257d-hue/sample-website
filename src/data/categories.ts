export interface CategoryMeta {
  id: 'rice' | 'cattle-feed';
  title_en: string;
  title_ta: string;
  description_en: string;
  description_ta: string;
  iconName: string;
  subCategories: {
    id: string;
    label_en: string;
    label_ta: string;
  }[];
}

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'rice',
    title_en: 'Rice Varieties & Grain Packs',
    title_ta: 'அரிசி வகைகள் & மூட்டைகள்',
    description_en: 'Explore premium aged Ponni, Idli rice, Seeraga Samba, raw rice, and traditional Tamil heritage varieties in 5kg, 10kg, 26kg, and 50kg bags.',
    description_ta: 'பொன்னி, இட்லி அரிசி, சீரக சம்பா, பச்சரிசி மற்றும் பாரம்பரிய அரிசி வகைகளை 5கி, 10கி, 26கி மற்றும் 50கி மூட்டைகளில் பெறலாம்.',
    iconName: 'Wheat',
    subCategories: [
      { id: 'all', label_en: 'All Rice', label_ta: 'அனைத்து அரிசி' },
      { id: 'everyday', label_en: 'Everyday Rice', label_ta: 'தினசரி அரிசி' },
      { id: 'traditional', label_en: 'Traditional Rice', label_ta: 'பாரம்பரிய அரிசி' },
      { id: 'raw', label_en: 'Raw Rice (Pachai)', label_ta: 'பச்சரிசி' },
      { id: 'boiled', label_en: 'Boiled Rice (Pulungal)', label_ta: 'புழுங்கல் அரிசி' },
      { id: 'wholesale', label_en: 'Wholesale Bags', label_ta: 'மொத்த மூட்டைகள்' },
    ],
  },
  {
    id: 'cattle-feed',
    title_en: 'Cattle Feed & Farm Grains',
    title_ta: 'கால்நடை தீவனம் & தானியங்கள்',
    description_en: 'Nutritious milk-yield compound feeds, cottonseed cake, groundnut cake, wheat bran, and crushed corn available in packed bags or loose per kg.',
    description_ta: 'அதிக பால் தரும் மாட்டு தீவனங்கள், பருத்தி கொட்டை புண்ணாக்கு, கடலை புண்ணாக்கு, கோதுமை தவுடு - மூட்டையாகவும் உதிரியாகவும் கிடைக்கும்.',
    iconName: 'Sprout',
    subCategories: [
      { id: 'all', label_en: 'All Cattle Feed', label_ta: 'அனைத்து தீவனம்' },
      { id: 'feed-mix', label_en: 'Cattle Feed Pellets', label_ta: 'தீவன மாத்திரைகள்' },
      { id: 'cake-bran', label_en: 'Oil Cakes & Bran', label_ta: 'புண்ணாக்கு & தவுடு' },
      { id: 'loose-grain', label_en: 'Loose Feed Grains', label_ta: 'உதிரி தானியங்கள்' },
      { id: 'wholesale', label_en: 'Bulk Wholesale Feed', label_ta: 'மொத்த தீவன மூட்டைகள்' },
    ],
  },
];
