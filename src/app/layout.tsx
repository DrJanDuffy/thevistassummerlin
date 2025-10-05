import React from 'react';
import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/realscout-widgets.css";
import ErrorReporter from "@/components/ErrorReporter";
import Script from 'next/script';
import { ReactNode } from 'react';

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
  title: "The Vistas Summerlin | Homes by Dr. Jan Duffy - Preferred Realtor",
  description: "Award-winning realtor Dr. Jan Duffy guides you through 28 prestigious subcommunities in The Vistas Summerlin. Get VIP access to luxury homes with expert guidance and insider market insights.",
  openGraph: {
    title: "The Vistas Summerlin | Homes by Dr. Jan Duffy - Preferred Realtor",
    description: "Discover luxury homes in The Vistas Summerlin with Dr. Jan Duffy, the preferred realtor offering award-winning service and exclusive access to premium properties.",
    url: "https://www.thevistassummerlin.com",
    type: "website",
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
