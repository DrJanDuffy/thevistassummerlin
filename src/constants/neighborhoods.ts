export const neighborhoods = [
  { name: "Barrington", slug: "barrington", description: "Luxury single-family homes with mountain views", priceRange: "$850K-$1.2M" },
  { name: "Kingwood", slug: "kingwood", description: "Elegant homes with resort-style amenities", priceRange: "$875K-$1.4M" },
  { name: "Santalina", slug: "santalina", description: "Mediterranean-inspired architecture with private courtyards", priceRange: "$900K-$1.5M" },
  { name: "Bella Vista", slug: "bella-vista", description: "Panoramic city and mountain views from elevated lots", priceRange: "$950K-$1.8M" },
  { name: "Miraleste", slug: "miraleste", description: "Contemporary homes with smart home technology", priceRange: "$800K-$1.3M" },
  { name: "Solano", slug: "solano", description: "Spanish Colonial revival with premium finishes", priceRange: "$875K-$1.4M" },
  { name: "Canterra", slug: "canterra", description: "Tuscan-inspired villas with wine cellars", priceRange: "$1M-$2M" },
  { name: "Miramonte", slug: "miramonte", description: "Custom estates with private pools and spas", priceRange: "$1.2M-$2.5M" },
  { name: "Somerset", slug: "somerset", description: "Traditional elegance with modern amenities", priceRange: "$825K-$1.3M" },
  { name: "Capri", slug: "capri", description: "Italian-inspired homes with outdoor living spaces", priceRange: "$850K-$1.4M" },
  { name: "Monterosa", slug: "monterosa", description: "Mountain-view homes with premium landscaping", priceRange: "$900K-$1.6M" },
  { name: "Sonesta", slug: "sonesta", description: "Resort-style living with community amenities", priceRange: "$800K-$1.2M" },
  { name: "Cara Vella", slug: "cara-vella", description: "Luxury townhomes with rooftop terraces", priceRange: "$750K-$1.1M" },
  { name: "Palmilla", slug: "palmilla", description: "Mediterranean estates with private courtyards", priceRange: "$950K-$1.7M" },
  { name: "Summerfield", slug: "summerfield", description: "Family-friendly homes with community pools", priceRange: "$800K-$1.3M" },
  { name: "Casa Rosa", slug: "casa-rosa", description: "Spanish-style homes with custom features", priceRange: "$875K-$1.4M" },
  { name: "Paradiso", slug: "paradiso", description: "Paradise-inspired living with resort amenities", priceRange: "$900K-$1.6M" },
  { name: "Talaverde", slug: "talaverde", description: "Green living with energy-efficient features", priceRange: "$825K-$1.3M" },
  { name: "Encanto", slug: "encanto", description: "Charming homes with character and style", priceRange: "$800K-$1.2M" },
  { name: "Portofino", slug: "portofino", description: "Italian coastal-inspired luxury living", priceRange: "$1M-$1.8M" },
  { name: "Talega", slug: "talega", description: "Contemporary design with mountain views", priceRange: "$850K-$1.4M" },
  { name: "Estancia", slug: "estancia", description: "Estate-style homes with equestrian facilities", priceRange: "$1.1M-$2.2M" },
  { name: "Sage Hills", slug: "sage-hills", description: "Natural beauty with hiking trails nearby", priceRange: "$875K-$1.5M" },
  { name: "Vista Verde", slug: "vista-verde", description: "Green views with sustainable features", priceRange: "$800K-$1.3M" },
  { name: "Hillstone", slug: "hillstone", description: "Stone-accented homes with premium finishes", priceRange: "$900K-$1.6M" },
  { name: "San Marcos", slug: "san-marcos", description: "Spanish mission-style with modern amenities", priceRange: "$850K-$1.4M" },
  { name: "Casa Blanca", slug: "casa-blanca", description: "White-washed elegance with ocean-inspired design", priceRange: "$925K-$1.6M" },
  { name: "Villa Rosa", slug: "villa-rosa", description: "Italian villa-inspired luxury estates", priceRange: "$1.1M-$2M" }
];

// Helper function to get neighborhood by slug
export const getNeighborhoodBySlug = (slug: string) => {
  return neighborhoods.find(neighborhood => neighborhood.slug === slug);
};

// Helper function to get all neighborhood names
export const getNeighborhoodNames = () => {
  return neighborhoods.map(neighborhood => neighborhood.name);
};

// Helper function to get all neighborhood slugs
export const getNeighborhoodSlugs = () => {
  return neighborhoods.map(neighborhood => neighborhood.slug);
};

// Total count of neighborhoods
export const NEIGHBORHOOD_COUNT = neighborhoods.length; 