import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Property Search - Find Your Perfect Home in The Vistas Summerlin',
  description: 'Search luxury homes for sale in The Vistas Summerlin with advanced filters. Find your dream home from $800K-$2.5M+ with Dr. Jan Duffy\'s expert guidance. View 28+ subcommunities including Portofino, Kingwood & Barrington.',
  keywords: [
    'The Vistas Summerlin homes for sale',
    'luxury homes Summerlin',
    'property search The Vistas',
    'homes for sale Las Vegas',
    'Dr. Jan Duffy real estate',
    'Summerlin property search'
  ],
  openGraph: {
    title: 'Property Search - Find Your Perfect Home in The Vistas Summerlin',
    description: 'Advanced property search with detailed filters and real-time results.',
    url: 'https://www.thevistassummerlin.com/search',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevistassummerlin.com/search',
  },
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
