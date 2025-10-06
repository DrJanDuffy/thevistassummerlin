import React from 'react';

// E-E-A-T Schema for Real Estate Expertise
export function RealEstateExpertSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Jan Duffy",
    "description": "15+ years specializing in The Vistas Summerlin luxury real estate",
    "url": "https://www.thevistassummerlin.com",
    "telephone": "+1-702-XXX-XXXX",
    "email": "jan@thevistassummerlin.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "The Vistas",
      "addressLocality": "Summerlin",
      "addressRegion": "NV",
      "postalCode": "89134",
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
        "name": "The Vistas, Summerlin"
      },
      {
        "@type": "Place", 
        "name": "Summerlin, Las Vegas"
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
      "The Vistas Summerlin real estate",
      "Luxury home sales",
      "Summerlin market trends",
      "The Vistas community amenities"
    ],
    "sameAs": [
      "https://www.facebook.com/thevistassummerlin",
      "https://www.instagram.com/thevistassummerlin",
      "https://www.linkedin.com/in/janduffy"
    ]
  };

  return (
    <script
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
    "name": "The Vistas Summerlin Real Estate",
    "image": "https://www.thevistassummerlin.com/subcommunities/IMG_0737.JPG",
    "description": "Premier real estate services specializing in The Vistas Summerlin luxury homes",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "The Vistas",
      "addressLocality": "Summerlin",
      "addressRegion": "NV",
      "postalCode": "89134",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1699",
      "longitude": "-115.1398"
    },
    "url": "https://www.thevistassummerlin.com",
    "telephone": "+1-702-XXX-XXXX",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "36.1699",
        "longitude": "-115.1398"
      },
      "geoRadius": "5000"
    },
    "sameAs": [
      "https://www.facebook.com/thevistassummerlin",
      "https://www.instagram.com/thevistassummerlin",
      "https://www.linkedin.com/in/janduffy"
    ]
  };

  return (
    <script
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
    "description": "Exclusive luxury homes in The Vistas Summerlin community",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "The Vistas",
      "addressLocality": "Summerlin",
      "addressRegion": "NV",
      "postalCode": "89134"
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
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
