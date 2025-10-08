import React from 'react';
import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/realscout-widgets.css";
import Script from 'next/script';
import { ReactNode } from 'react';
import { 
  RealEstateExpertSchema, 
  FAQSchema, 
  LocalBusinessSchema, 
  RealEstateListingSchema,
  WebsiteSchema,
  OrganizationSchema,
  ReviewSchema,
  ServiceSchema
} from '@/components/StructuredData';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thevistassummerlin.com'),
  title: {
    default: "The Vistas Summerlin | Berkshire Hathaway HomeServices Nevada Properties - Dr. Jan Duffy",
    template: "%s | The Vistas Summerlin | Berkshire Hathaway HomeServices Nevada Properties"
  },
  description: "The Vistas Summerlin offers luxury homes starting at $800K. Expert realtor Dr. Jan Duffy with Berkshire Hathaway HomeServices Nevada Properties specializing in The Vistas community with flexible scheduling that works around YOUR lifestyle.",
  keywords: [
    "The Vistas Summerlin",
    "Vistas Summerlin homes for sale",
    "The Vistas Las Vegas",
    "Dr. Jan Duffy realtor",
    "Summerlin luxury homes",
    "Las Vegas luxury real estate",
    "The Vistas community center",
    "11312 Parkside Way",
    "flexible scheduling real estate",
    "Berkshire Hathaway HomeServices",
    "Berkshire Hathaway Nevada Properties",
    "BHHS Nevada Properties",
    "Berkshire Hathaway real estate agent"
  ],
  authors: [{ name: "Dr. Jan Duffy", url: "https://www.thevistassummerlin.com" }],
  creator: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties Real Estate Expert",
  publisher: "Berkshire Hathaway HomeServices Nevada Properties | Dr. Jan Duffy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "The Vistas Summerlin | Homes by Dr. Jan Duffy - Las Vegas Expert",
    description: "The Vistas Summerlin offers luxury homes starting at $800K. Expert realtor Dr. Jan Duffy specializing in The Vistas community with flexible scheduling that works around YOUR lifestyle.",
    url: "https://www.thevistassummerlin.com",
    siteName: "The Vistas Summerlin | Homes by Dr. Jan Duffy",
    images: [
      {
        url: "/subcommunities/IMG_0737.JPG",
        width: 1200,
        height: 630,
        alt: "The Vistas Summerlin Luxury Homes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Vistas Summerlin | Homes by Dr. Jan Duffy - Las Vegas Expert",
    description: "The Vistas Summerlin offers luxury homes starting at $800K. Expert realtor Dr. Jan Duffy specializing in The Vistas community with flexible scheduling that works around YOUR lifestyle.",
    images: ["/subcommunities/IMG_0737.JPG"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "your-google-verification-code",
  },
  other: {
    'google-site-verification': process.env.GOOGLE_SITE_VERIFICATION || "your-google-verification-code",
    'msvalidate.01': process.env.BING_SITE_VERIFICATION || "",
    'yandex-verification': process.env.YANDEX_SITE_VERIFICATION || "",
  },
  alternates: {
    canonical: "https://www.thevistassummerlin.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Theme color for supported browsers (Chrome, Safari, Edge) */}
        <meta name="theme-color" content="#2C3E50" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1a252f" media="(prefers-color-scheme: dark)" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="US-NV" />
        <meta name="geo.placename" content="Las Vegas" />
        <meta name="geo.position" content="36.1699;-115.1398" />
        <meta name="ICBM" content="36.1699, -115.1398" />
        <meta name="language" content="en-US" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Business Information */}
        <meta name="business:contact_data:locality" content="Las Vegas" />
        <meta name="business:contact_data:region" content="NV" />
        <meta name="business:contact_data:postal_code" content="89138" />
        <meta name="business:contact_data:country_name" content="United States" />
        
        {/* 2025 SEO Schema Markup */}
        <RealEstateExpertSchema />
        <FAQSchema />
        <LocalBusinessSchema />
        <RealEstateListingSchema />
        <WebsiteSchema />
        <OrganizationSchema />
        <ReviewSchema />
        <ServiceSchema />
        
        {/* RealScout Widget Script - Loaded once for all pages */}
        <Script 
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js" 
          type="module" 
          strategy="beforeInteractive"
          id="realscout-widgets"
        />
      </head>
      <body className={`antialiased ${playfair.variable} ${lato.variable} font-secondary text-text-dark bg-white`}>
        {children}
      </body>
    </html>
  );
}
