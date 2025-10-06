import React from 'react';
import Script from 'next/script';

// E-E-A-T Schema for Real Estate Expertise
export function RealEstateExpertSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Dr. Jan Duffy",
    "description": "Las Vegas real estate expert with flexible scheduling that works around YOUR lifestyle. Based in Summerlin, serving discerning buyers, sellers, and investors across Henderson, Enterprise, and Southwest Vegas. With 12+ years of Nevada market expertise.",
    "url": "https://summerlin-real-estate.localo.site/",
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
    "serviceType": "Real Estate Services",
    "priceRange": "$$$",
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Real Estate License",
        "recognizedBy": "Nevada Real Estate Division"
      }
    ],
    "knowsAbout": [
      "Las Vegas real estate",
      "Summerlin luxury homes",
      "Henderson real estate",
      "Enterprise real estate",
      "Southwest Vegas real estate",
      "Real estate investment",
      "Home valuation",
      "Market analysis"
    ],
    "sameAs": [
      "https://www.youtube.com/@DrDuffy",
      "https://www.tiktok.com/@dr.janduffy",
      "https://www.instagram.com/drjanduffy/",
      "https://twitter.com/drjanduffy",
      "https://www.linkedin.com/showcase/berkshire-hathaway-homeservices-summerlin/",
      "https://www.pinterest.com/DrJanDuffy/",
      "https://www.facebook.com/RealtorDrJanDuffySummerlin"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "06:00",
      "closes": "21:00"
    },
    "foundingDate": "2013-09-01",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Veteran-owned business",
        "value": true
      },
      {
        "@type": "PropertyValue", 
        "name": "Women-owned business",
        "value": true
      },
      {
        "@type": "PropertyValue",
        "name": "LGBTQ+ friendly",
        "value": true
      },
      {
        "@type": "PropertyValue",
        "name": "Wheelchair accessible",
        "value": true
      }
    ]
  };

  return (
    <Script
      id="real-estate-expert-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema for Answer Engine Optimization
export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the average home price in The Vistas Summerlin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The average home price in The Vistas Summerlin ranges from $800,000 to $2.5 million, with luxury estates reaching $5+ million. Prices vary by home size, location within The Vistas, and amenities."
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
      },
      {
        "@type": "Question",
        "name": "Is The Vistas Summerlin a good place to live?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, The Vistas Summerlin is considered one of Las Vegas' premier communities, offering luxury homes, excellent schools, golf course access, and a family-friendly environment."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Local Business Schema for The Vistas
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "The Vistas Summerlin | Homes by Dr. Jan Duffy",
    "image": "https://www.thevistassummerlin.com/subcommunities/IMG_0737.JPG",
    "description": "Homes by Dr. Jan Duffy - Las Vegas real estate expert with flexible scheduling that works around YOUR lifestyle. Based in Summerlin, serving discerning buyers, sellers, and investors across Henderson, Enterprise, and Southwest Vegas. With 12+ years of Nevada market expertise.",
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
    "url": "https://summerlin-real-estate.localo.site/",
    "telephone": "+1-702-500-0607",
    "email": "DrJanSells@TheVistasSummerlin.com",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "06:00",
      "closes": "21:00"
    },
    "serviceArea": [
      {
        "@type": "Place",
        "name": "Paradise, NV, USA"
      },
      {
        "@type": "Place",
        "name": "Henderson, NV, USA"
      },
      {
        "@type": "Place",
        "name": "Las Vegas, NV, USA"
      },
      {
        "@type": "Place",
        "name": "Enterprise, NV, USA"
      },
      {
        "@type": "Place",
        "name": "Clark County, NV, USA"
      },
      {
        "@type": "Place",
        "name": "Summerlin, Las Vegas, NV, USA"
      }
    ],
    "sameAs": [
      "https://www.youtube.com/@DrDuffy",
      "https://www.tiktok.com/@dr.janduffy",
      "https://www.instagram.com/drjanduffy/",
      "https://twitter.com/drjanduffy",
      "https://www.linkedin.com/showcase/berkshire-hathaway-homeservices-summerlin/",
      "https://www.pinterest.com/DrJanDuffy/",
      "https://www.facebook.com/RealtorDrJanDuffySummerlin"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Real Estate Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Home Buying Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Home Selling Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Property Valuation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Market Analysis"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Investment Consulting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Luxury Real Estate"
          }
        }
      ]
    },
    "foundingDate": "2013-09-01",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Veteran-owned business",
        "value": true
      },
      {
        "@type": "PropertyValue", 
        "name": "Women-owned business",
        "value": true
      },
      {
        "@type": "PropertyValue",
        "name": "LGBTQ+ friendly",
        "value": true
      },
      {
        "@type": "PropertyValue",
        "name": "Wheelchair accessible",
        "value": true
      },
      {
        "@type": "PropertyValue",
        "name": "Online appointments available",
        "value": true
      },
      {
        "@type": "PropertyValue",
        "name": "Onsite services available",
        "value": true
      }
    ]
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
    "name": "The Vistas Summerlin Luxury Homes",
    "description": "Exclusive luxury homes in The Vistas Summerlin community with world-class amenities",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "The Vistas",
      "addressLocality": "Summerlin",
      "addressRegion": "NV",
      "postalCode": "89138"
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
        "name": "Parks and Recreation",
        "value": true
      }
    ],
    "floorSize": {
      "@type": "QuantitativeValue",
      "minValue": 2500,
      "maxValue": 8000,
      "unitCode": "SQF"
    },
    "numberOfRooms": {
      "@type": "QuantitativeValue", 
      "minValue": 3,
      "maxValue": 6
    },
    "priceRange": {
      "@type": "PriceRange",
      "minValue": 800000,
      "maxValue": 5000000,
      "currency": "USD"
    }
  };

  return (
    <Script
      id="real-estate-listing-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Website Schema for better SEO
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "The Vistas Summerlin Real Estate",
    "description": "Premier real estate services specializing in The Vistas Summerlin luxury homes",
    "url": "https://www.thevistassummerlin.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.thevistassummerlin.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dr. Jan Duffy Real Estate",
      "url": "https://www.thevistassummerlin.com"
    },
    "mainEntity": {
      "@type": "RealEstateAgent",
      "name": "Dr. Jan Duffy",
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
    "name": "The Vistas Summerlin Real Estate",
    "description": "Premier real estate services specializing in The Vistas Summerlin luxury homes",
    "url": "https://www.thevistassummerlin.com",
    "logo": "https://www.thevistassummerlin.com/subcommunities/IMG_0737.JPG",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-702-555-1234",
      "contactType": "customer service",
      "email": "DrJanSells@TheVistasSummerlin.com",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "The Vistas",
      "addressLocality": "Summerlin",
      "addressRegion": "NV",
      "postalCode": "89138",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.facebook.com/thevistassummerlin",
      "https://www.instagram.com/thevistassummerlin",
      "https://www.linkedin.com/in/janduffy"
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
