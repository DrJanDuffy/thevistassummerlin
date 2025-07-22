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
  title: "The Vistas Summerlin - Luxury Homes in Las Vegas",
  description: "Discover your perfect home in one of 28 vibrant subcommunities in The Vistas Summerlin. Get instant home valuations, market insights, and expert guidance.",
  openGraph: {
    title: "The Vistas Summerlin - Luxury Homes in Las Vegas",
    description: "Explore local market insights, community events, and find your dream home in The Vistas Summerlin.",
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
        
        {/* RealScout Widget Script */}
        <Script 
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js" 
          type="module" 
          strategy="lazyOnload" 
        />


      </head>
      <body className={`antialiased ${playfair.variable} ${lato.variable} font-secondary text-text-dark bg-white`}>
        <ErrorReporter />
        {children}
      </body>
    </html>
  );
}
