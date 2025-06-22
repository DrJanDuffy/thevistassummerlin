import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import ClientLayoutShell from "./components/ClientLayoutShell";
import Script from 'next/script';
import { ReactNode } from 'react';
import AudioPlayer from '@/components/AudioPlayer';

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- SEO Best Practices: All canonical/meta tags use www.thevistassummerlin.com ---
export const metadata: Metadata = {
  metadataBase: new URL('https://www.thevistassummerlin.com'),
  title: "The Vistas Summerlin",
  description: "Discover your perfect home in one of 28 vibrant subcommunities.",
  openGraph: {
    title: "The Vistas Summerlin",
    description: "Explore local market insights, community events, and more.",
    url: "https://www.thevistassummerlin.com",
    images: ["/subcommunities/Santaluz.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Vistas Summerlin",
    description: "Find your dream home in Summerlin.",
    images: ["/subcommunities/Santaluz.jpg"],
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
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0A2540" />

        {/* RealScout Widget Script */}
        <Script 
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js" 
          type="module" 
          strategy="lazyOnload" 
        />

        <style dangerouslySetInnerHTML={{__html: `
          realscout-office-listings {
            --rs-listing-divider-color: rgb(101, 141, 172);
            width: 100%;
          }
        `}} />
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "The Vistas Summerlin",
              "url": "https://www.thevistassummerlin.com"
            })
          }}
        />
        <style>{`
          realscout-simple-search {
            --rs-ss-font-primary-color: #6a6d72;
            --rs-ss-searchbar-border-color: hsl(0, 0%, 80%);
            --rs-ss-box-shadow: 0 10px 15px -3px #0000001a;
            --rs-ss-widget-width: 500px !important;
          }
          realscout-advanced-search {
            --rs-as-button-text-color: #ffffff;
            --rs-as-background-color: #ffffff;
            --rs-as-button-color: rgb(35, 93, 137);
            --rs-as-widget-width: 500px !important;
          }
          realscout-your-listings {
            --rs-listing-divider-color: rgb(101, 141, 172);
            width: 100%;
          }
          realscout-home-value {
            --rs-hvw-background-color: #ffffff;
            --rs-hvw-title-color: #000000;
            --rs-hvw-subtitle-color: rgba(28, 30, 38, 0.5);
            --rs-hvw-primary-button-text-color: #ffffff;
            --rs-hvw-primary-button-color: rgb(35, 93, 137);
            --rs-hvw-secondary-button-text-color: rgb(35, 93, 137);
            --rs-hvw-secondary-button-color: #ffffff;
            --rs-hvw-widget-width: auto;
          }
        `}</style>
        <link rel="preconnect" href="https://em.realscout.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        {/* Google Analytics (GA4) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-PW6F30EHD8" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PW6F30EHD8');
          `}
        </Script>
      </head>
      <body
        className={"min-h-screen bg-white text-gray-900 antialiased font-sans "+inter.variable+" "+robotoMono.variable}
      >
        <ClientLayoutShell>
          {/* Global Audio Player */}
          <AudioPlayer src="/audio/home-guide.mp3" title="Home Buying & Selling Audio Guide" />
          {children}
        </ClientLayoutShell>
      </body>
    </html>
  );
}