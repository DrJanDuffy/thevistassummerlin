import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Search - Find Your Perfect Home in The Vistas Summerlin",
  description: "Search through 500+ luxury properties in The Vistas Summerlin. Advanced AI-powered search tools help you find homes that match your lifestyle across 28 exclusive subcommunities.",
  keywords: [
    "property search",
    "homes for sale",
    "The Vistas Summerlin",
    "luxury homes",
    "real estate search",
    "Las Vegas homes",
    "property finder",
    "home search",
    "real estate listings",
    "property types",
    "single family homes",
    "townhomes",
    "condos",
    "Dr. Jan Duffy",
    "Berkshire Hathaway HomeServices"
  ],
  openGraph: {
    title: "Property Search - Find Your Perfect Home in The Vistas Summerlin",
    description: "Search through 500+ luxury properties in The Vistas Summerlin. Advanced AI-powered search tools help you find homes that match your lifestyle.",
    url: "https://www.thevistassummerlin.com/search",
    images: [
      {
        url: "/subcommunities/IMG_0737.JPG",
        width: 1200,
        height: 630,
        alt: "The Vistas Summerlin Luxury Properties Search",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Property Search - Find Your Perfect Home in The Vistas Summerlin",
    description: "Search through 500+ luxury properties in The Vistas Summerlin. Advanced AI-powered search tools help you find homes that match your lifestyle.",
    images: ["/subcommunities/IMG_0737.JPG"],
  },
  alternates: {
    canonical: "https://www.thevistassummerlin.com/search",
  },
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}