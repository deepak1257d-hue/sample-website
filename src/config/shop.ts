export interface ShopConfig {
  shopName: {
    en: string;
    ta: string;
  };
  shopTagline: {
    en: string;
    ta: string;
  };
  phoneNumber: string; // Formatted for calling e.g. "+91 98765 43210"
  phoneCallUrl: string; // tel: link
  whatsappNumber: string; // E.164 format without '+' e.g. "919876543210"
  whatsappFormatted: string; // Formatted display e.g. "+91 98765 43210"
  email: string;
  address: {
    en: string;
    ta: string;
  };
  googleMapsUrl: string; // External Google Maps directions URL
  googleMapsEmbedUrl: string; // Embed URL for iframe
  openingHours: {
    en: {
      weekdays: string;
      sunday: string;
    };
    ta: {
      weekdays: string;
      sunday: string;
    };
  };
  businessYears: string; // e.g. "Trusted local shop" or placeholder
  wholesaleAvailable: boolean;
  looseCattleFeedAvailable: boolean;
  seo: {
    titleEn: string;
    titleTa: string;
    descriptionEn: string;
    descriptionTa: string;
    keywords: string[];
  };
}

/**
 * SHOP CONFIGURATION FILE
 * 
 * Replace placeholders like [SHOP NAME], [PHONE NUMBER], [WHATSAPP NUMBER] with actual business details.
 * Do not edit code files directly for business details - edit this configuration file.
 */
export const SHOP_CONFIG: ShopConfig = {
  shopName: {
    en: "[SHOP NAME] - Quality Rice & Cattle Feed",
    ta: "[கடை பெயர்] - தரமான அரிசி & கால்நடை தீவனம்",
  },
  shopTagline: {
    en: "Premium Tamil Nadu Rice Varieties & Nutritious Cattle Feed (Retail & Wholesale)",
    ta: "தரமான அரிசி வகைகள் மற்றும் சத்தான கால்நடை தீவனம் (சில்லறை & மொத்த வியாபாரம்)",
  },
  // PLACEHOLDER: Replace with shop phone number (e.g. "+91 98765 43210")
  phoneNumber: "[PHONE NUMBER]", 
  phoneCallUrl: "tel:[PHONE NUMBER]",
  
  // PLACEHOLDER: Replace with WhatsApp phone number including country code (e.g. "919876543210")
  whatsappNumber: "[WHATSAPP NUMBER]",
  whatsappFormatted: "[WHATSAPP NUMBER]",
  
  // PLACEHOLDER: Replace with shop email
  email: "enquiry@[SHOP_DOMAIN].com",
  
  // PLACEHOLDER: Replace with shop address in Tamil Nadu
  address: {
    en: "[SHOP ADDRESS, MAIN ROAD, TOWN/CITY, TAMIL NADU, INDIA - PINCODE]",
    ta: "[கடை முகவரி, முதன்மை சாலை, ஊர்/நகரம், தமிழ்நாடு, இந்தியா - அஞ்சல் குறியீடு]",
  },
  
  // PLACEHOLDER: Replace with exact Google Maps Location link
  googleMapsUrl: "https://maps.google.com/?q=[SHOP+ADDRESS+PLACEHOLDER]",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.495!2d78.1192!3d9.9252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTUnMzAuNyJOIDc4wrAwNycwOS4xIkU!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",

  openingHours: {
    en: {
      weekdays: "Monday - Saturday: 7:00 AM - 9:00 PM",
      sunday: "Sunday: 7:00 AM - 2:00 PM",
    },
    ta: {
      weekdays: "திங்கள் - சனி: காலை 7:00 - இரவு 9:00",
      sunday: "ஞாயிறு: காலை 7:00 - மதியம் 2:00",
    },
  },
  
  businessYears: "Trusted Local Shop",
  wholesaleAvailable: true,
  looseCattleFeedAvailable: true,

  seo: {
    titleEn: "[SHOP NAME] | Best Rice & Cattle Feed Shop in Tamil Nadu",
    titleTa: "[கடை பெயர்] | அரிசி & கால்நடை தீவன கடை - தமிழ்நாடு",
    descriptionEn: "Buy top quality Ponni, Idli, Raw, Boiled & Traditional Rice, along with premium Cattle Feed in retail, loose, and wholesale quantities directly from our local shop in Tamil Nadu.",
    descriptionTa: "தரமான பொன்னி, இட்லி, பச்சரிசி, புழுங்கல் அரிசி மற்றும் சத்தான கால்நடை தீவனங்களை சில்லறை மற்றும் மொத்த விலையில் நேரில் வாங்குங்கள்.",
    keywords: [
      "rice shop tamil nadu",
      "ponni rice wholesale",
      "cattle feed shop",
      "cow feed loose",
      "idli rice 25kg price",
      "traditional tamil rice",
      "seeraga samba wholesale",
      "அரிசி கடை",
      "கால்நடை தீவனம்",
    ],
  },
};
