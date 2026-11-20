import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SHOP_CONFIG } from "@/config/shop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#451a03",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: SHOP_CONFIG.seo.titleEn,
  description: SHOP_CONFIG.seo.descriptionEn,
  keywords: SHOP_CONFIG.seo.keywords,
  authors: [{ name: SHOP_CONFIG.shopName.en }],

  // AEGIS website ownership verification

  other: {
    "rakshak-verification": "b89b110eb462d4899da19b65a6531af4",
  },

  openGraph: {
    title: SHOP_CONFIG.seo.titleEn,
    description: SHOP_CONFIG.seo.descriptionEn,
    type: "website",
    locale: "en_IN",
    siteName: SHOP_CONFIG.shopName.en,
    images: [
      {
        url: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: SHOP_CONFIG.shopName.en,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SHOP_CONFIG.seo.titleEn,
    description: SHOP_CONFIG.seo.descriptionEn,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org LocalBusiness structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: SHOP_CONFIG.shopName.en,
    description: SHOP_CONFIG.seo.descriptionEn,
    telephone: SHOP_CONFIG.phoneNumber,
    address: {
      "@type": "PostalAddress",
      streetAddress: SHOP_CONFIG.address.en,
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "07:00",
        closes: "14:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Rice & Cattle Feed Products",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Rice Varieties",
        },
        {
          "@type": "OfferCatalog",
          name: "Cattle Feed",
        },
      ],
    },
  };

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-amber-50/40 text-amber-950 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
