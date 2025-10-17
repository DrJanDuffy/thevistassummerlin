import React from 'react';
import Script from 'next/script';

// E-E-A-T Schema for Real Estate Expertise
export function RealEstateExpertSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Dr. Jan Duffy",
    "description": "Las Vegas real estate expert with flexible scheduling that works around YOUR lifestyle. Based in Summerlin, serving discerning buyers, sellers, and investors across Henderson, Enterprise, and Southwest Vegas. With 12+ years of Nevada market expertise.",
    "url": "https://www.thevistassummerlin.com",
    "telephone": "+1-702-500-0607",
    "email": "DrJanSells@TheVistasSummerlin.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11312 Parkside Way",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "postalCode": "89138",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1699",
      "longitude": "-115.1398"
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "Paradise, NV"
      },
      {
        "@type": "Place", 
        "name": "Henderson, NV"
      },
      {
        "@type": "Place",
        "name": "Las Vegas, NV"
      },
      {
        "@type": "Place",
        "name": "Enterprise, NV"
      },
      {
        "@type": "Place",
        "name": "Clark County, NV"
      },
      {
        "@type": "Place",
        "name": "Summerlin, Las Vegas, NV"
      }
    ],
    "serviceType": [
      "Real Estate Sales",
      "Property Valuation",
      "Market Analysis",
      "Buyer Representation",
      "Seller Representation",
      "Investment Consulting"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Real Estate License",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Nevada Real Estate Division"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Real Estate Agent",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Berkshire Hathaway HomeServices Nevada Properties"
        }
      }
    ],
    "knowsAbout": [
      "The Vistas Summerlin Real Estate",
      "Las Vegas Luxury Homes",
      "Summerlin Master-Planned Community",
      "Nevada Real Estate Market",
      "Property Investment Analysis",
      "Home Valuation",
      "Real Estate Market Trends"
    ],
    "sameAs": [
      "https://www.thevistassummerlin.com",
      "https://www.facebook.com/RealtorDrJanDuffySummerlin",
      "https://www.instagram.com/drjanduffy/",
      "https://www.linkedin.com/showcase/berkshire-hathaway-homeservices-summerlin/",
      "https://www.youtube.com/@DrDuffy",
      "https://twitter.com/drjanduffy",
      "https://www.pinterest.com/DrJanDuffy/"
    ],
    "image": "https://www.thevistassummerlin.com/logo.png",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of Nevada, Las Vegas"
    },
    "award": [
      "Berkshire Hathaway HomeServices Nevada Properties Agent",
      "Top Producer - The Vistas Summerlin",
      "Luxury Home Specialist"
    ],
    "memberOf": {
      "@type": "Organization",
      "name": "Berkshire Hathaway HomeServices Nevada Properties"
    }
  };

  return (
    <Script
      id="real-estate-expert-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema for common questions
export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is The Vistas Summerlin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Vistas Summerlin is a prestigious master-planned community in Las Vegas featuring luxury homes, world-class amenities, and access to TPC Summerlin golf course. It offers over 28 distinct subcommunities with homes ranging from $800K to over $2.5M."
        }
      },
      {
        "@type": "Question",
        "name": "Who is Dr. Jan Duffy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dr. Jan Duffy is a Las Vegas real estate expert specializing in The Vistas Summerlin with over 12 years of experience. She offers flexible scheduling that works around your lifestyle and provides personalized service for buyers, sellers, and investors."
        }
      },
      {
        "@type": "Question",
        "name": "What are the HOA fees in The Vistas Summerlin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HOA fees in The Vistas Summerlin typically range from $200 to $400 per month, depending on the specific subcommunity and amenities included."
        }
      },
      {
        "@type": "Question",
        "name": "What schools serve The Vistas Summerlin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Vistas Summerlin is served by Palo Verde High School, Sig Rogich Middle School, and several top-rated elementary schools including Ernest May Elementary."
        }
      },
      {
        "@type": "Question",
        "name": "What amenities are available in The Vistas Summerlin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Vistas Summerlin offers golf course access, community pools, tennis courts, walking trails, parks, and proximity to TPC Summerlin golf course."
        }
      }
    ]
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Local Business Schema
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Berkshire Hathaway HomeServices Nevada Properties - Dr. Jan Duffy",
    "description": "Premier real estate services for The Vistas Summerlin luxury community. Expert guidance from Dr. Jan Duffy with flexible scheduling.",
    "url": "https://www.thevistassummerlin.com",
    "telephone": "+1-702-500-0607",
    "email": "DrJanSells@TheVistasSummerlin.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11312 Parkside Way",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "postalCode": "89138",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1699",
      "longitude": "-115.1398"
    },
    "openingHours": "Mo-Su 08:00-20:00",
    "priceRange": "$$$",
    "paymentAccepted": "Cash, Check, Credit Card, Financing",
    "currenciesAccepted": "USD",
    "areaServed": {
      "@type": "Place",
      "name": "The Vistas Summerlin, Las Vegas, NV"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "36.1699",
        "longitude": "-115.1398"
      },
      "geoRadius": "50000"
    }
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Real Estate Listing Schema
export function RealEstateListingSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": "Luxury Homes in The Vistas Summerlin",
    "description": "Discover luxury homes for sale in The Vistas Summerlin, Las Vegas's premier master-planned community.",
    "url": "https://www.thevistassummerlin.com/search",
    "priceRange": "$800,000 - $2,500,000+",
    "numberOfRooms": "4-6 bedrooms",
    "floorSize": {
      "@type": "QuantitativeValue",
      "minValue": "2500",
      "maxValue": "5000",
      "unitCode": "SQF"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "postalCode": "89138",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1699",
      "longitude": "-115.1398"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Golf Course Access",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Community Pool",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Tennis Courts",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Walking Trails",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Mountain Views",
        "value": true
      }
    ],
    "datePosted": new Date().toISOString(),
    "validThrough": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
  };

  return (
    <Script
      id="real-estate-listing-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Website Schema
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "The Vistas Summerlin | Homes by Dr. Jan Duffy",
    "description": "Premier real estate services for The Vistas Summerlin luxury community. Expert guidance from Dr. Jan Duffy.",
    "url": "https://www.thevistassummerlin.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.thevistassummerlin.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "The Vistas Summerlin | Homes by Dr. Jan Duffy",
      "url": "https://www.thevistassummerlin.com"
    }
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Organization Schema
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Berkshire Hathaway HomeServices Nevada Properties - The Vistas Summerlin | Dr. Jan Duffy",
    "description": "Premier real estate services specializing in The Vistas Summerlin luxury community.",
    "url": "https://www.thevistassummerlin.com",
    "logo": "https://www.thevistassummerlin.com/berkshire-hathaway-logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-702-500-0607",
      "contactType": "customer service",
      "email": "DrJanSells@TheVistasSummerlin.com",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11312 Parkside Way",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "postalCode": "89138",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.thevistassummerlin.com"
    ]
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Community Schema for individual community pages
export function CommunitySchema({ 
  communityName, 
  description, 
  priceRange, 
  homeCount, 
  amenities = [] 
}: {
  communityName: string;
  description: string;
  priceRange: string;
  homeCount: number;
  amenities?: string[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ResidentialComplex",
    "name": `${communityName} - The Vistas Summerlin`,
    "description": description,
    "url": `https://www.thevistassummerlin.com/communities/${communityName.toLowerCase().replace(/\s+/g, '-')}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "postalCode": "89138",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1699",
      "longitude": "-115.1398"
    },
    "priceRange": priceRange,
    "numberOfUnits": homeCount,
    "amenityFeature": amenities.map(amenity => ({
      "@type": "LocationFeatureSpecification",
      "name": amenity,
      "value": true
    })),
    "isPartOf": {
      "@type": "Place",
      "name": "The Vistas Summerlin"
    }
  };

  return (
    <Script
      id="community-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Breadcrumb Schema for navigation
export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Property Schema for individual listings
export function PropertySchema({
  address,
  price,
  bedrooms,
  bathrooms,
  squareFeet,
  description,
  imageUrl,
  mlsNumber
}: {
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  description: string;
  imageUrl: string;
  mlsNumber?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": address,
    "description": description,
    "url": `https://www.thevistassummerlin.com/properties/${address.toLowerCase().replace(/\s+/g, '-')}`,
    "price": price,
    "priceCurrency": "USD",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address,
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "postalCode": "89138",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1699",
      "longitude": "-115.1398"
    },
    "numberOfRooms": bedrooms,
    "numberOfBathroomsTotal": bathrooms,
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": squareFeet,
      "unitCode": "SQF"
    },
    "image": imageUrl,
    "identifier": mlsNumber ? {
      "@type": "PropertyValue",
      "propertyID": mlsNumber
    } : undefined,
    "datePosted": new Date().toISOString(),
    "validThrough": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
  };

  return (
    <Script
      id="property-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Review Schema for testimonials
export function ReviewSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dr. Jan Duffy - The Vistas Summerlin Real Estate Expert",
    "description": "Premier real estate services for The Vistas Summerlin luxury community with flexible scheduling that works around YOUR lifestyle.",
    "url": "https://www.thevistassummerlin.com",
    "telephone": "+1-702-500-0607",
    "email": "DrJanSells@TheVistasSummerlin.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11312 Parkside Way",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "postalCode": "89138",
      "addressCountry": "US"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Dr. Jan Duffy made our home buying experience in The Vistas Summerlin seamless. Her flexible scheduling worked perfectly with our busy lifestyle, and her expertise in the community was invaluable."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Michael R."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "We found our dream home in Canterra thanks to Dr. Jan's knowledge of The Vistas Summerlin's unique communities. Her attention to detail and personalized service exceeded our expectations."
      }
    ]
  };

  return (
    <Script
      id="review-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Service Schema for real estate services
export function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "The Vistas Summerlin Real Estate Services",
    "description": "Expert real estate services for The Vistas Summerlin luxury community including buying, selling, and investment consulting with flexible scheduling.",
    "provider": {
      "@type": "RealEstateAgent",
      "name": "Dr. Jan Duffy",
      "telephone": "+1-702-500-0607",
      "email": "DrJanSells@TheVistasSummerlin.com"
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "The Vistas Summerlin, Las Vegas, NV"
      },
      {
        "@type": "Place",
        "name": "Henderson, NV"
      },
      {
        "@type": "Place",
        "name": "Enterprise, NV"
      },
      {
        "@type": "Place",
        "name": "Southwest Vegas, NV"
      }
    ],
    "serviceType": [
      "Real Estate Sales",
      "Property Valuation",
      "Market Analysis",
      "Buyer Representation",
      "Seller Representation",
      "Investment Consulting"
    ],
    "offers": {
      "@type": "Offer",
      "description": "Flexible scheduling that works around YOUR lifestyle - available early mornings, evenings, and weekends"
    }
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}