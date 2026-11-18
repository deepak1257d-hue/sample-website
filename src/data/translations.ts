export type Language = 'en' | 'ta';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    riceVarieties: string;
    cattleFeed: string;
    wholesale: string;
    aboutUs: string;
    contact: string;
    enquireWhatsApp: string;
    callNow: string;
  };
  // Hero
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaWholesale: string;
    trustBadge1: string;
    trustBadge2: string;
    trustBadge3: string;
  };
  // Catalogue & Filters
  catalogue: {
    sectionTitle: string;
    sectionSubtitle: string;
    searchPlaceholder: string;
    filterAll: string;
    filterRice: string;
    filterFeed: string;
    packSizeLabel: string;
    allSizes: string;
    noResultsTitle: string;
    noResultsDesc: string;
    clearFilters: string;
    resultsFound: string;
  };
  // Product Card & Details
  product: {
    viewDetails: string;
    enquireWhatsApp: string;
    callToOrder: string;
    availablePackSizes: string;
    availabilityStatus: string;
    packedBadge: string;
    looseBadge: string;
    wholesaleBadge: string;
    inStock: string;
    outOfStock: string;
    priceOnEnquiry: string;
    selectPackSize: string;
    estimatedPriceNotice: string;
    categoryRice: string;
    categoryFeed: string;
  };
  // WhatsApp Messages
  whatsapp: {
    generalMessage: string;
    productMessage: (productName: string, packSize?: string) => string;
    wholesaleMessage: (productName?: string, quantity?: string) => string;
  };
  // Wholesale Section & Form
  wholesale: {
    badge: string;
    title: string;
    subtitle: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    productLabel: string;
    productPlaceholder: string;
    quantityLabel: string;
    quantityPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    callDirectlyButton: string;
  };
  // About & Why Choose Us
  about: {
    title: string;
    subtitle: string;
    storyTitle: string;
    storyParagraph1: string;
    storyParagraph2: string;
    whyChooseTitle: string;
    whyChooseSubtitle: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
  };
  // Contact & Location
  contact: {
    title: string;
    subtitle: string;
    addressLabel: string;
    phoneLabel: string;
    whatsappLabel: string;
    hoursLabel: string;
    getDirectionsBtn: string;
    callUsBtn: string;
    chatWhatsAppBtn: string;
  };
  // Mobile Action Bar
  mobileBar: {
    call: string;
    whatsapp: string;
    directions: string;
    catalogue: string;
  };
  // Footer
  footer: {
    quickLinks: string;
    productsTitle: string;
    contactInfo: string;
    copyright: string;
    disclaimer: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      riceVarieties: "Rice Varieties",
      cattleFeed: "Cattle Feed",
      wholesale: "Wholesale",
      aboutUs: "About Shop",
      contact: "Contact & Location",
      enquireWhatsApp: "WhatsApp Enquiry",
      callNow: "Call Shop",
    },
    hero: {
      badge: "🌾 Authentic Tamil Nadu Quality Since Day One",
      titleLine1: "Quality Rice & Cattle Feed",
      titleLine2: "You Can Trust Always",
      subtitle: "Explore premium aged Ponni, Idli rice, Seeraga Samba, and high-fat Cattle Feed. Available in retail packs, loose quantity, and wholesale bags directly from our shop.",
      ctaPrimary: "Explore Products",
      ctaSecondary: "Chat on WhatsApp",
      ctaWholesale: "Bulk Wholesale Deals",
      trustBadge1: "Retail & Bulk Packs",
      trustBadge2: "Loose Cattle Feed Available",
      trustBadge3: "Direct Shop Price",
    },
    catalogue: {
      sectionTitle: "Our Products & Varieties",
      sectionSubtitle: "Search by rice name, feed type, or pack size. Available in retail bags, wholesale quantities, and loose weight.",
      searchPlaceholder: "Search Ponni Rice, Idli Rice, Cattle Feed, Wheat Bran...",
      filterAll: "All Products",
      filterRice: "🌾 Rice Varieties",
      filterFeed: "🐄 Cattle Feed",
      packSizeLabel: "Filter by Weight",
      allSizes: "All Pack Sizes",
      noResultsTitle: "No matching products found",
      noResultsDesc: "Try adjusting your search terms or clearing selected filters.",
      clearFilters: "Clear All Filters",
      resultsFound: "Products Available",
    },
    product: {
      viewDetails: "View Product",
      enquireWhatsApp: "Enquire on WhatsApp",
      callToOrder: "Call to Order",
      availablePackSizes: "Available Weights / Bags:",
      availabilityStatus: "Availability:",
      packedBadge: "✓ Packaged Bags",
      looseBadge: "✓ Loose Weight",
      wholesaleBadge: "✓ Wholesale Quantity",
      inStock: "In Stock at Shop",
      outOfStock: "Ask for Availability",
      priceOnEnquiry: "Price on Enquiry / Today's Rate",
      selectPackSize: "Select Bag Size / Weight:",
      estimatedPriceNotice: "Prices are updated daily according to market rates. Contact shop for exact today's rate.",
      categoryRice: "Rice Variety",
      categoryFeed: "Cattle Feed",
    },
    whatsapp: {
      generalMessage: "Hello! I want to inquire about products at [SHOP NAME]. Please share current availability.",
      productMessage: (productName: string, packSize?: string) => 
        `Hello! I am interested in ${productName}${packSize ? ` (${packSize} pack)` : ''}. Please share today's price and availability.`,
      wholesaleMessage: (productName?: string, quantity?: string) =>
        `Hello! I have a bulk/wholesale inquiry${productName ? ` for ${productName}` : ''}${quantity ? ` (Quantity: ${quantity})` : ''}. Please share your wholesale rates and shop availability.`,
    },
    wholesale: {
      badge: "📦 Wholesale & Commercial Bulk Orders",
      title: "Looking for Wholesale Quantities?",
      subtitle: "We supply bulk rice bags and cattle feed to hotels, wedding caterers, dairy farms, institutions, and local retailers.",
      feature1Title: "Competitive Wholesale Pricing",
      feature1Desc: "Special rates for 26kg/50kg bags and bulk cattle feed orders.",
      feature2Title: "Reliable Daily Supply",
      feature2Desc: "Consistent quality and ready inventory in our shop warehouse.",
      feature3Title: "Retailers & Farm Supply",
      feature3Desc: "Direct shop pickup or doorstep dispatch for bulk quantities.",
      formTitle: "Quick Wholesale Enquiry",
      nameLabel: "Your Name",
      namePlaceholder: "Enter your full name",
      phoneLabel: "Phone / WhatsApp Number",
      phonePlaceholder: "e.g. 9876543210",
      productLabel: "Product Required",
      productPlaceholder: "e.g. Ponni Rice 26kg bags / Cottonseed Cake",
      quantityLabel: "Required Quantity / Weight",
      quantityPlaceholder: "e.g. 10 bags of 26kg or 500 kg",
      messageLabel: "Additional Note (Optional)",
      messagePlaceholder: "Mention delivery location or special requirements...",
      submitButton: "Send Wholesale Order via WhatsApp",
      callDirectlyButton: "Call Shop for Instant Quote",
    },
    about: {
      title: "About Our Local Shop",
      subtitle: "Serving local households, hotels, caterers, and dairy farmers with genuine grains and animal feed.",
      storyTitle: "Our Commitment to Local Quality",
      storyParagraph1: "For years, our shop has been a trusted supplier of authentic Tamil Nadu rice varieties and nutritious cattle feed. We source directly to guarantee clean grains, proper aging, and honest weight.",
      storyParagraph2: "Whether you need a single 5kg bag of Ponni rice for home, a bag of Seeraga Samba for a family function, or loose cattle feed for your dairy farm, we are here to serve you with warmth and honesty.",
      whyChooseTitle: "Why Customers Trust Us",
      whyChooseSubtitle: "Simple, honest service built on local trust and genuine quality products.",
      card1Title: "Genuine Quality Rice",
      card1Desc: "Properly aged, carefully screened grains with excellent cooking taste and softness.",
      card2Title: "Retail & Wholesale Packs",
      card2Desc: "Available from 1kg loose samples up to 50kg commercial wholesale bags.",
      card3Title: "Cattle Feed in Loose Weight",
      card3Desc: "Buy cattle feed pellets, wheat bran, and oil cakes in loose weight (per kg) or full bags.",
      card4Title: "Friendly Local Service",
      card4Desc: "Direct phone & WhatsApp contact. Fast responses and warm local shop hospitality.",
    },
    contact: {
      title: "Contact & Shop Location",
      subtitle: "Visit our shop in person or get in touch via phone or WhatsApp for quick enquiries.",
      addressLabel: "Shop Address",
      phoneLabel: "Phone Number",
      whatsappLabel: "WhatsApp Enquiry",
      hoursLabel: "Shop Opening Hours",
      getDirectionsBtn: "Get Directions on Google Maps",
      callUsBtn: "Call Shop Now",
      chatWhatsAppBtn: "Chat on WhatsApp",
    },
    mobileBar: {
      call: "Call",
      whatsapp: "WhatsApp",
      directions: "Location",
      catalogue: "Products",
    },
    footer: {
      quickLinks: "Quick Navigation",
      productsTitle: "Product Range",
      contactInfo: "Shop Info",
      copyright: "All Rights Reserved. Local Shop Catalogue System.",
      disclaimer: "Product availability and daily rates are subject to market conditions. Contact shop directly for exact quotes.",
    },
  },

  ta: {
    nav: {
      home: "முகப்பு",
      riceVarieties: "அரிசி வகைகள்",
      cattleFeed: "கால்நடை தீவனம்",
      wholesale: "மொத்த வியாபாரம்",
      aboutUs: "எங்கள் கடை பற்றி",
      contact: "தொடர்பு & முகவரி",
      enquireWhatsApp: "WhatsApp தொடர்பு",
      callNow: "கடைக்கு அழைக்க",
    },
    hero: {
      badge: "🌾 தலைமுறை தலைமுறையாக நம்பகமான தமிழ்நாட்டு கடை",
      titleLine1: "தரமான அரிசி & கால்நடை தீவனம்",
      titleLine2: "எப்போதும் உங்கள் நம்பிக்கையுடன்",
      subtitle: "பொன்னி, இட்லி அரிசி, சீரக சம்பா அரிசி மற்றும் அதிக பால் தரும் சத்தான கால்நடை தீவனங்கள் சில்லறை, உதிரி மற்றும் மொத்த விலையில் நேரடியாகக் கிடைக்கும்.",
      ctaPrimary: "அரிசி & தீவனம் பார்க்க",
      ctaSecondary: "WhatsApp-இல் தொடர்புகொள்ள",
      ctaWholesale: "மொத்த வியாபார சலுகைகள்",
      trustBadge1: "சில்லறை & மொத்த மூட்டைகள்",
      trustBadge2: "உதிரி தீவனம் கிடைக்கும்",
      trustBadge3: "நேரடி கடை விலை",
    },
    catalogue: {
      sectionTitle: "எங்கள் தயாரிப்புகள் & அரிசி வகைகள்",
      sectionSubtitle: "அரிசி பெயர், தீவன வகை அல்லது எடையை வைத்து தேடுங்கள். சில்லறையாகவும் மூட்டையாகவும் உதிரியாகவும் கிடைக்கும்.",
      searchPlaceholder: "பொன்னி அரிசி, இட்லி அரிசி, கோதுமை தவுடு, புண்ணாக்கு...",
      filterAll: "அனைத்து பொருட்கள்",
      filterRice: "🌾 அரிசி வகைகள்",
      filterFeed: "🐄 கால்நடை தீவனம்",
      packSizeLabel: "எடை வாரியாக",
      allSizes: "அனைத்து எடைகளும்",
      noResultsTitle: "தேடிய பொருள் கிடைக்கவில்லை",
      noResultsDesc: "தேடுதல் சொல்லை மாற்றி அல்லது பில்டர்களை நீக்கி மீண்டும் முயற்சிக்கவும்.",
      clearFilters: "அனைத்தையும் நீக்கு",
      resultsFound: "பொருட்கள் உள்ளன",
    },
    product: {
      viewDetails: "விவரம் பார்க்க",
      enquireWhatsApp: "WhatsApp மூலம் விசாரிக்க",
      callToOrder: "போன் மூலம் ஆர்டர் செய்ய",
      availablePackSizes: "கிடைக்கும் அளவுகள் / மூட்டைகள்:",
      availabilityStatus: "கிடைக்கும் நிலை:",
      packedBadge: "✓ பாக்கெட் மூட்டைகள்",
      looseBadge: "✓ உதிரி கிலோ கணக்கில்",
      wholesaleBadge: "✓ மொத்த வியாபாரம்",
      inStock: "கடையில் இருப்பு உள்ளது",
      outOfStock: "இருப்பு அறிய தொடர்புகொள்ளவும்",
      priceOnEnquiry: "இன்றைய சந்தை விலை அறிய அழைக்கவும்",
      selectPackSize: "தேவையான எடையைத் தேர்ந்தெடுக்கவும்:",
      estimatedPriceNotice: "தினசரி சந்தை விலைக்கு ஏற்ப மாறும். துல்லியமான இன்றைய விலைக்கு கடையை தொடர்புகொள்ளவும்.",
      categoryRice: "அரிசி வகை",
      categoryFeed: "கால்நடை தீவனம்",
    },
    whatsapp: {
      generalMessage: "வணக்கம்! [SHOP NAME] கடையில் உள்ள பொருட்கள் பற்றி விசாரிக்க விரும்புகிறேன்.",
      productMessage: (productName: string, packSize?: string) => 
        `வணக்கம்! எனக்கு ${productName}${packSize ? ` (${packSize})` : ''} தேவைப்படுகிறது. தற்போதைய விலை மற்றும் இருப்பு விவரங்களை தெரிவிக்கவும்.`,
      wholesaleMessage: (productName?: string, quantity?: string) =>
        `வணக்கம்! மொத்த வியாபாரமாக (Wholesale)${productName ? ` ${productName}` : ''}${quantity ? ` (அளவு: ${quantity})` : ''} வாங்க விரும்புகிறேன். மொத்த விலை விவரங்களை தெரிவிக்கவும்.`,
    },
    wholesale: {
      badge: "📦 மொத்த வியாபாரம் (Wholesale Orders)",
      title: "மொத்தமாக வாங்க விரும்புகிறீர்களா?",
      subtitle: "ஹோட்டல்கள், கல்யாண சமையல் ஆர்டர்கள், மாட்டுப் பண்ணைகள் மற்றும் சில்லறை கடைக்காரர்களுக்கு சிறப்பு மொத்த விலையில் வழங்குகிறோம்.",
      feature1Title: "சிறப்பான மொத்த விலை",
      feature1Desc: "26கி/50கி மூட்டைகள் மற்றும் மொத்த தீவன ஆர்டர்களுக்கு பிரத்யேக விலை.",
      feature2Title: "தினசரி தொடர் விநியோகம்",
      feature2Desc: "எப்போதும் தயார் நிலையில் உள்ள தரமான அரிசி மூட்டைகள்.",
      feature3Title: "பண்ணை & கடைக்காரர்களுக்கு",
      feature3Desc: "நேரடி கடை பிக்கப் அல்லது மொத்த ஆர்டர் வசதி.",
      formTitle: "மொத்த ஆர்டர் விசாரணை",
      nameLabel: "உங்கள் பெயர்",
      namePlaceholder: "உங்கள் முழு பெயரை உள்ளிடவும்",
      phoneLabel: "போன் / WhatsApp எண்",
      phonePlaceholder: "எ.கா. 9876543210",
      productLabel: "தேவையான பொருள்",
      productPlaceholder: "எ.கா. பொன்னி அரிசி 26கி மூட்டைகள் / பருத்தி புண்ணாக்கு",
      quantityLabel: "தேவையான அளவு / எடை",
      quantityPlaceholder: "எ.கா. 10 மூட்டைகள் அல்லது 500 கிலோ",
      messageLabel: "கூடுதல் தகவல் (விருப்பமானால்)",
      messagePlaceholder: "இடம் அல்லது சிறப்பு தேவைகள் குறிப்பிடவும்...",
      submitButton: "WhatsApp மூலம் மொத்த ஆர்டர் அனுப்ப",
      callDirectlyButton: "உடனடி விலைக்கு கடைகிற்கு அழைக்க",
    },
    about: {
      title: "எங்கள் கடை பற்றி",
      subtitle: "தமிழ்நாட்டு குடும்பங்கள், உணவகங்கள் மற்றும் கால்நடை வளர்ப்போருக்கு நேர்மையான சேவை.",
      storyTitle: "பாரம்பரியமும் தரமும் கொண்ட சேவை",
      storyParagraph1: "பல ஆண்டுகளாக எங்கள் கடை தரமான அரிசி வகைகள் மற்றும் சத்தான கால்நடை தீவனங்களை நியாயமான விலையில் வழங்கி வருகிறது.",
      storyParagraph2: "வீட்டிற்குத் தேவையான 5கி பொன்னி அரிசியாக இருந்தாலும், விசேஷங்களுக்குத் தேவையான சீரக சம்பாவாக இருந்தாலும், மாடுகளுக்கான உதிரி தீவனமாக இருந்தாலும் அன்போடு வழங்குகிறோம்.",
      whyChooseTitle: "வாடிக்கையாளர்கள் எங்களை தேர்வு செய்யக் காரணம்",
      whyChooseSubtitle: "சுத்தமான தரம், நேர்மையான எடை மற்றும் சிறந்த உள்ளூர் சேவை.",
      card1Title: "சுத்தமான தரமான அரிசி",
      card1Desc: "நன்கு பழைமையான, உதிரியாக சமையலுக்கு ஏற்ற சுத்தமான அரிசி.",
      card2Title: "சில்லறை & மொத்த மூட்டைகள்",
      card2Desc: "1கிலோ உதிரி முதல் 50கிலோ மொத்த மூட்டைகள் வரை கிடைக்கும்.",
      card3Title: "உதிரியாக கிடைக்கும் கால்நடை தீவனம்",
      card3Desc: "தீவன மாத்திரைகள், கோதுமை தவுடு மற்றும் புண்ணாக்கு உதிரியாகவும் கிடைக்கும்.",
      card4Title: "நம்பகமான உள்ளூர் சேவை",
      card4Desc: "நேரடி தொலைபேசி & WhatsApp தொடர்பு. விரைவான உபசரிப்பு.",
    },
    contact: {
      title: "தொடர்பு & கடை முகவரி",
      subtitle: "நேரில் கடையை பார்வையிடலாம் அல்லது போன் மற்றும் WhatsApp மூலம் தொடர்புகொள்ளலாம்.",
      addressLabel: "கடை முகவரி",
      phoneLabel: "தொலைபேசி எண்",
      whatsappLabel: "WhatsApp தொடர்பு",
      hoursLabel: "கடை திறக்கும் நேரம்",
      getDirectionsBtn: "Google Maps-இல் வழித்தடம் பார்க்க",
      callUsBtn: "இப்போதே அழைக்க",
      chatWhatsAppBtn: "WhatsApp-இல் அரட்டையடிக்க",
    },
    mobileBar: {
      call: "அழைக்க",
      whatsapp: "WhatsApp",
      directions: "முகவரி",
      catalogue: "பொருட்கள்",
    },
    footer: {
      quickLinks: "விரைவு இணைப்புகள்",
      productsTitle: "தயாரிப்பு வகைகள்",
      contactInfo: "கடை தகவல்",
      copyright: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. உள்ளூர் கடை டிஜிட்டல் சிஸ்டம்.",
      disclaimer: "தினசரி சந்தை விலைக்கு ஏற்ப அரிசி & தீவன விலைகள் மாறுபடலாம். துல்லியமான விலைக்கு கடையைத் தொடர்புகொள்ளவும்.",
    },
  },
};
