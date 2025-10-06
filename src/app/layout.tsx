import React from 'react';
import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/realscout-widgets.css";
import ErrorReporter from "@/components/ErrorReporter";
import Script from 'next/script';
import { ReactNode } from 'react';
import { 
  RealEstateExpertSchema, 
  FAQSchema, 
  LocalBusinessSchema, 
  RealEstateListingSchema 
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
  title: {
    default: "The Vistas Summerlin Homes - Luxury Real Estate in Las Vegas | Jan Duffy",
    template: "%s | The Vistas Summerlin Real Estate"
  },
  description: "The Vistas Summerlin offers luxury homes starting at $800K. Located in Summerlin, Las Vegas. HOA fees $200/month. Top-rated schools: Palo Verde High School. Expert realtor Jan Duffy with 15+ years specializing in The Vistas community.",
  keywords: [
    "The Vistas Summerlin homes",
    "The Vistas Las Vegas real estate", 
    "luxury homes Summerlin",
    "The Vistas community",
    "Jan Duffy realtor",
    "The Vistas Summerlin realtor",
    "homes for sale The Vistas",
    "Summerlin luxury real estate"
  ],
  authors: [{ name: "Jan Duffy", url: "https://www.thevistassummerlin.com" }],
  creator: "Jan Duffy - The Vistas Summerlin Real Estate Expert",
  publisher: "The Vistas Summerlin Real Estate",
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
    title: "The Vistas Summerlin Homes - Luxury Real Estate in Las Vegas",
    description: "The Vistas Summerlin offers luxury homes starting at $800K. Located in Summerlin, Las Vegas. Expert realtor Jan Duffy with 15+ years specializing in The Vistas community.",
    url: "https://www.thevistassummerlin.com",
    siteName: "The Vistas Summerlin Real Estate",
    images: [
      {
        url: "/the-vistas-hero.jpg",
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
    title: "The Vistas Summerlin Homes - Luxury Real Estate",
    description: "The Vistas Summerlin offers luxury homes starting at $800K. Expert realtor Jan Duffy specializing in The Vistas community.",
    images: ["/the-vistas-twitter.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
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
        
        {/* 2025 SEO Schema Markup */}
        <RealEstateExpertSchema />
        <FAQSchema />
        <LocalBusinessSchema />
        <RealEstateListingSchema />
        
        {/* RealScout Widget Script - Loaded once for all pages */}
        <Script 
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js" 
          type="module" 
          strategy="beforeInteractive"
          id="realscout-widgets"
        />
      </head>
      <body className={`antialiased ${playfair.variable} ${lato.variable} font-secondary text-text-dark bg-white`}>
        <ErrorReporter />
        {children}
      </body>
    </html>
  );
}
