import { SHOP_CONFIG } from '@/config/shop';
import { Language } from '@/data/translations';

/**
 * Clean phone number for WhatsApp URL
 */
export function getWhatsAppNumber(): string {
  // Remove non-digit characters except leading plus if any
  const cleaned = SHOP_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  return cleaned || '919876543210';
}

/**
 * Generate a dynamic WhatsApp web/app link with pre-filled message
 */
export function createWhatsAppLink(message: string): string {
  const phone = getWhatsAppNumber();
  const shopNamePlaceholderReplaced = message.replace(
    /\[SHOP NAME\]/g,
    SHOP_CONFIG.shopName.en.replace(/ - Quality Rice & Cattle Feed/, '')
  );
  const encodedText = encodeURIComponent(shopNamePlaceholderReplaced);
  return `https://wa.me/${phone}?text=${encodedText}`;
}

/**
 * Create WhatsApp link for a specific product enquiry
 */
export function createProductWhatsAppLink(
  productNameEn: string,
  productNameTa: string,
  packSize?: string,
  lang: Language = 'en'
): string {
  const productName = lang === 'ta' ? productNameTa : productNameEn;
  let text = '';
  
  if (lang === 'ta') {
    text = `வணக்கம்! எனக்கு ${productName}${packSize ? ` (${packSize})` : ''} தேவைப்படுகிறது. தற்போதைய விலை மற்றும் இருப்பு விவரங்களை தெரிவிக்கவும்.`;
  } else {
    text = `Hello! I am interested in ${productName}${packSize ? ` (${packSize} pack)` : ''}. Please share today's price and shop availability.`;
  }
  
  return createWhatsAppLink(text);
}

/**
 * Create WhatsApp link for wholesale inquiries
 */
export function createWholesaleWhatsAppLink(
  name?: string,
  phone?: string,
  product?: string,
  quantity?: string,
  notes?: string,
  lang: Language = 'en'
): string {
  let text = '';
  
  if (lang === 'ta') {
    text = `வணக்கம்! மொத்த ஆர்டர் (Wholesale Order) பற்றி விசாரிக்க விரும்புகிறேன்.\n\n`;
    if (name) text += `பெயர்: ${name}\n`;
    if (phone) text += `தொடர்பு எண்: ${phone}\n`;
    if (product) text += `தேவையான பொருள்: ${product}\n`;
    if (quantity) text += `தேவையான அளவு: ${quantity}\n`;
    if (notes) text += `கூடுதல் விவரம்: ${notes}\n`;
    text += `\nமொத்த விலை மற்றும் டெலிவரி விவரங்களை தெரிவிக்கவும்.`;
  } else {
    text = `Hello! I would like to inquire about a Bulk Wholesale Order.\n\n`;
    if (name) text += `Name: ${name}\n`;
    if (phone) text += `Phone: ${phone}\n`;
    if (product) text += `Product: ${product}\n`;
    if (quantity) text += `Required Quantity: ${quantity}\n`;
    if (notes) text += `Note: ${notes}\n`;
    text += `\nPlease share wholesale rates and shop availability.`;
  }
  
  return createWhatsAppLink(text);
}
