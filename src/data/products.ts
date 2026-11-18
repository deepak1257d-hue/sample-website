export interface Product {
  id: string;
  name_en: string;
  name_ta: string;
  description_en: string;
  description_ta: string;
  category: 'rice' | 'cattle-feed';
  subCategory: 'everyday' | 'premium' | 'traditional' | 'raw' | 'boiled' | 'feed-mix' | 'cake-bran' | 'loose-grain';
  pack_sizes: string[];
  availability: {
    packed: boolean;
    loose: boolean;
    wholesale: boolean;
  };
  price: string | null;
  unit: string;
  image: string;
  available: boolean;
  isPopular?: boolean;
  featured?: boolean;
  badge?: {
    en: string;
    ta: string;
  };
}

export const SAMPLE_PRODUCTS: Product[] = [
  // --- RICE PRODUCTS ---
  {
    id: "rice-001",
    name_en: "Super Deluxe Ponni Boiled Rice",
    name_ta: "சூப்பர் டீலக்ஸ் பொன்னி புழுங்கல் அரிசி",
    description_en: "Aged premium Ponni rice. Cooked grains remain fluffy, slender, non-sticky, and soft. Ideal for everyday meals.",
    description_ta: "நன்கு பழைமையான உயர்தர பொன்னி அரிசி. சமைத்த பின் உதிரியாகவும் மென்மையாகவும் இருக்கும். தினசரி உணவுக்கு ஏற்றது.",
    category: "rice",
    subCategory: "everyday",
    pack_sizes: ["5 kg", "10 kg", "26 kg (Standard Bag)", "50 kg"],
    availability: {
      packed: true,
      loose: true,
      wholesale: true
    },
    price: "₹52 - ₹58 / kg",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    available: true,
    isPopular: true,
    featured: true,
    badge: {
      en: "Best Seller",
      ta: "அதிக விற்பனை"
    }
  },
  {
    id: "rice-002",
    name_en: "Idli Rice (Kundu Arisi)",
    name_ta: "இட்லி அரிசி (குண்டு அரிசி)",
    description_en: "Specially processed short-grain rice yielding super soft, fluffy idlis and crisp, golden dosas.",
    description_ta: "பஞ்ச போன்ற மென்மையான இட்லி மற்றும் மொறுமொறுப்பான தோசை தயாரிக்க உதவும் சிறப்பு குண்டு அரிசி.",
    category: "rice",
    subCategory: "everyday",
    pack_sizes: ["5 kg", "10 kg", "26 kg (Standard Bag)", "50 kg"],
    availability: {
      packed: true,
      loose: true,
      wholesale: true
    },
    price: "₹38 - ₹44 / kg",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80",
    available: true,
    isPopular: true,
    featured: true,
    badge: {
      en: "Soft Idli Special",
      ta: "இட்லி ஸ்பெஷல்"
    }
  },
  {
    id: "rice-003",
    name_en: "Seeraga Samba Rice",
    name_ta: "சீரக சம்பா அரிசி",
    description_en: "Aromatic small-grain rice prized across Tamil Nadu for authentic Dindigul and Chettinad biryanis and special occasions.",
    description_ta: "திண்டுக்கல் மற்றும் செட்டிநாடு பிரியாணிக்கு மிகவும் புகழ்பெற்ற மணமிக்க சிறுதானிய பாரம்பரிய அரிசி.",
    category: "rice",
    subCategory: "traditional",
    pack_sizes: ["1 kg", "5 kg", "25 kg Bag"],
    availability: {
      packed: true,
      loose: true,
      wholesale: true
    },
    price: "₹105 - ₹120 / kg",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
    available: true,
    isPopular: true,
    featured: true,
    badge: {
      en: "Biryani Special",
      ta: "பிரியாணி சிறப்பு"
    }
  },
  {
    id: "rice-004",
    name_en: "Pure Ponni Raw Rice (Pachai Arisi)",
    name_ta: "சுத்தமான பொன்னி பச்சரிசி",
    description_en: "High purity raw rice perfect for Pongal, temple offerings, traditional sweets, and daily cooking.",
    description_ta: "பொங்கல், விசேஷ பூஜைகள் மற்றும் பலகாரங்கள் செய்ய உகந்த சுத்தமான பொன்னி பச்சரிசி.",
    category: "rice",
    subCategory: "raw",
    pack_sizes: ["5 kg", "10 kg", "26 kg Bag", "50 kg"],
    availability: {
      packed: true,
      loose: true,
      wholesale: true
    },
    price: "₹48 - ₹54 / kg",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80",
    available: true
  },
  {
    id: "rice-005",
    name_en: "Mappillai Samba Rice (Traditional Heritage)",
    name_ta: "மாப்பிள்ளை சம்பா அரிசி",
    description_en: "Nutrient-rich red traditional rice known for stamina, fiber, and controlling blood sugar. Grown organically.",
    description_ta: "உடலுக்கு மிகுந்த பலமும் நாரீச்சத்தும் தரும் பாரம்பரிய சிவப்பு அரிசி வகை.",
    category: "rice",
    subCategory: "traditional",
    pack_sizes: ["1 kg", "5 kg", "25 kg"],
    availability: {
      packed: true,
      loose: true,
      wholesale: true
    },
    price: "₹85 - ₹95 / kg",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    available: true,
    badge: {
      en: "Health Special",
      ta: "ஆரோக்கிய சிறப்பு"
    }
  },
  {
    id: "rice-006",
    name_en: "Karuppu Kavuni Rice (Black Rice)",
    name_ta: "கருப்பு கவுனி அரிசி",
    description_en: "Ancient royal Tamil rice packed with antioxidants, iron, and deep natural flavor. Excellent for sweet porridge (Kavuni Arisi Sweet).",
    description_ta: "ஆன்டி-ஆக்ஸிடண்ட்ஸ் நிறைந்த பண்டைய ராஜ பாரம்பரிய கருப்பு அரிசி. இனிப்பு கவுனி கஞ்சிக்கு சிறந்தது.",
    category: "rice",
    subCategory: "traditional",
    pack_sizes: ["1 kg", "5 kg", "25 kg"],
    availability: {
      packed: true,
      loose: true,
      wholesale: true
    },
    price: "₹130 - ₹150 / kg",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    available: true
  },
  {
    id: "rice-007",
    name_en: "BPT Single Boiled Rice",
    name_ta: "பிபிடி சிங்கிள் பாயில்டு அரிசி",
    description_en: "Slender grain single-boiled rice with low starch content. Digests easily and popular in southern households.",
    description_ta: "மெல்லிய தானிய சிங்கிள் புழுங்கல் அரிசி. எளிதில் செரிமானம் ஆகக்கூடியது.",
    category: "rice",
    subCategory: "boiled",
    pack_sizes: ["10 kg", "26 kg Bag", "50 kg"],
    availability: {
      packed: true,
      loose: true,
      wholesale: true
    },
    price: "₹45 - ₹50 / kg",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80",
    available: true
  },
  {
    id: "rice-008",
    name_en: "Broken Rice (Kurunai Arisi)",
    name_ta: "அரிசி குருணை",
    description_en: "Clean broken rice suitable for kanji (porridge), batter, snacks, and livestock feed preparation.",
    description_ta: "கஞ்சி, பலகாரம் மற்றும் கால்நடை உணவுக்கு ஏற்ற சுத்தமான அரிசி குருணை.",
    category: "rice",
    subCategory: "everyday",
    pack_sizes: ["5 kg", "25 kg Bag", "50 kg Bag"],
    availability: {
      packed: true,
      loose: true,
      wholesale: true
    },
    price: "₹28 - ₹32 / kg",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80",
    available: true
  },

  // --- CATTLE FEED PRODUCTS ---
  {
    id: "feed-001",
    name_en: "High Milk Yield Cattle Feed Pellets",
    name_ta: "அதிக பால் தரும் மாட்டு தீவன மாத்திரைகள் (Pellets)",
    description_en: "Scientifically balanced compound feed enriched with protein, calcium, and minerals for maximum milk fat & yield in cows & buffaloes.",
    description_ta: "புரதம், கால்சியம் மற்றும் தாதுக்கள் நிறைந்த சமச்சீர் பால் மாட்டு தீவனம். அதிக பால் மற்றும் கொழுப்பு சத்து பெற உதவும்.",
    category: "cattle-feed",
    subCategory: "feed-mix",
    pack_sizes: ["10 kg", "25 kg Bag", "50 kg Bag"],
    availability: {
      packed: true,
      loose: true,
      wholesale: true
    },
    price: "₹24 - ₹28 / kg",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80",
    available: true,
    isPopular: true,
    featured: true,
    badge: {
      en: "Dairy Choice",
      ta: "பண்ணை தேர்வு"
    }
  },
  {
    id: "feed-002",
    name_en: "Cottonseed Oil Cake (Paruthi Kottai Punnaku)",
    name_ta: "பருத்தி கொட்டை புண்ணாக்கு",
    description_en: "First-quality cold-pressed cottonseed cake. Excellent source of protein and fat for dairy cattle.",
    description_ta: "உயர்தர பருத்தி கொட்டை புண்ணாக்கு. மாடுகளுக்கு சிறந்த புரதச்சத்து மற்றும் கொழுப்புச்சத்து அளிக்கும்.",
    category: "cattle-feed",
    subCategory: "cake-bran",
    pack_sizes: ["5 kg", "25 kg Bag", "50 kg Bag"],
    availability: {
      packed: true,
      loose: true,
      wholesale: true
    },
    price: "₹34 - ₹40 / kg",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6928e14b?auto=format&fit=crop&w=800&q=80",
    available: true,
    isPopular: true,
    featured: true
  },
  {
    id: "feed-003",
    name_en: "Groundnut Oil Cake (Kadalai Punnaku)",
    name_ta: "கடலை புண்ணாக்கு",
    description_en: "Natural pure groundnut cake rich in digestible energy and protein. Enhances health and digestive stamina.",
    description_ta: "இயற்கையான சுத்தமான கடலை புண்ணாக்கு. கால்நடைகளின் ஆரோக்கியத்தையும் செரிமானத்தையும் அதிகரிக்கும்.",
    category: "cattle-feed",
    subCategory: "cake-bran",
    pack_sizes: ["5 kg", "25 kg Bag", "50 kg Bag"],
    availability: {
      packed: true,
      loose: true,
      wholesale: true
    },
    price: "₹42 - ₹48 / kg",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6928e14b?auto=format&fit=crop&w=800&q=80",
    available: true
  },
  {
    id: "feed-004",
    name_en: "Pure Wheat Bran (Gothumai Thavudu)",
    name_ta: "சுத்தமான கோதுமை தவுடு",
    description_en: "Clean, dry wheat bran rich in fiber and digestible energy. Ideal for mixing with cattle feed, wet fodder, or loose feeding.",
    description_ta: "நாரீச்சத்து நிறைந்த சுத்தமான கோதுமை தவுடு. மாட்டுத் தீவனத்துடன் கலந்து கொடுக்க சிறந்தது. உதிரியாகவும் கிடைக்கும்.",
    category: "cattle-feed",
    subCategory: "cake-bran",
    pack_sizes: ["Loose (per kg)", "20 kg Bag", "40 kg Bag"],
    availability: {
      packed: true,
      loose: true,
      wholesale: true
    },
    price: "₹20 - ₹25 / kg",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    available: true,
    badge: {
      en: "Loose Available",
      ta: "உதிரியாக கிடைக்கும்"
    }
  },
  {
    id: "feed-005",
    name_en: "De-oiled Rice Bran (Arisi Thavudu)",
    name_ta: "அரிசி தவுடு",
    description_en: "Fine quality rice bran for livestock energy feed. Available in bulk bags and loose quantity per kg.",
    description_ta: "கால்நடைகளுக்கு ஏற்ற நல்ல தரமான அரிசி தவுடு. மூட்டையாகவும் கிலோ கணக்கில் உதிரியாகவும் கிடைக்கும்.",
    category: "cattle-feed",
    subCategory: "cake-bran",
    pack_sizes: ["Loose (per kg)", "25 kg Bag", "50 kg Bag"],
    availability: {
      packed: true,
      loose: true,
      wholesale: true
    },
    price: "₹18 - ₹22 / kg",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    available: true
  },
  {
    id: "feed-006",
    name_en: "Crushed Maize / Corn Mash (Makka Cholam)",
    name_ta: "உடைத்த மக்காச்சோளம்",
    description_en: "Coarse crushed yellow corn providing high carbohydrates for cattle, poultry, and goat feed.",
    description_ta: "மாடு, ஆடு மற்றும் கோழிகளுக்கு சத்தான ஆற்றல் தரும் உடைத்த மஞ்சள் மக்காச்சோளம்.",
    category: "cattle-feed",
    subCategory: "loose-grain",
    pack_sizes: ["Loose (per kg)", "25 kg Bag", "50 kg Bag"],
    availability: {
      packed: true,
      loose: true,
      wholesale: true
    },
    price: "₹26 - ₹30 / kg",
    unit: "kg",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80",
    available: true,
    isPopular: true
  }
];
