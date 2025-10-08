import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "The Vistas Summerlin | Luxury Homes by Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
  description: "Discover luxury homes in The Vistas Summerlin, Las Vegas's premier master-planned community. Dr. Jan Duffy offers expert real estate services with flexible scheduling. Featured Canterra community with oversized lots and dual master suites.",
  keywords: [
    "The Vistas Summerlin",
    "Vistas Summerlin homes for sale",
    "The Vistas Las Vegas",
    "Dr. Jan Duffy realtor",
    "Summerlin luxury homes",
    "Las Vegas luxury real estate",
    "Canterra community",
    "oversized lots Summerlin",
    "dual master suites",
    "Berkshire Hathaway HomeServices",
    "Berkshire Hathaway Nevada Properties",
    "BHHS Nevada Properties",
    "flexible scheduling real estate",
    "The Vistas community center",
    "11312 Parkside Way",
    "Las Vegas real estate expert"
  ],
  openGraph: {
    title: "The Vistas Summerlin | Luxury Homes by Dr. Jan Duffy",
    description: "Discover luxury homes in The Vistas Summerlin, Las Vegas's premier master-planned community. Dr. Jan Duffy offers expert real estate services with flexible scheduling.",
    url: "https://www.thevistassummerlin.com",
    siteName: "The Vistas Summerlin | Homes by Dr. Jan Duffy",
    images: [
      {
        url: "/subcommunities/IMG_0737.JPG",
        width: 1200,
        height: 630,
        alt: "The Vistas Summerlin Luxury Homes - Featured Canterra Community",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Vistas Summerlin | Luxury Homes by Dr. Jan Duffy",
    description: "Discover luxury homes in The Vistas Summerlin, Las Vegas's premier master-planned community. Dr. Jan Duffy offers expert real estate services with flexible scheduling.",
    images: ["/subcommunities/IMG_0737.JPG"],
  },
  alternates: {
    canonical: "https://www.thevistassummerlin.com",
  },
};

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
