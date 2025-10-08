import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Dr. Jan Duffy - The Vistas Summerlin | Homes by Dr. Jan Duffy',
  description: 'Meet Dr. Jan Duffy, your trusted real estate expert for The Vistas Summerlin. 12+ years experience, flexible scheduling, and personalized service for discerning buyers and sellers.',
  openGraph: {
    title: 'About Dr. Jan Duffy - The Vistas Summerlin | Homes by Dr. Jan Duffy',
    description: 'Trusted real estate expert with 12+ years experience serving The Vistas Summerlin community with flexible scheduling.',
    url: 'https://www.thevistassummerlin.com/about',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevistassummerlin.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
