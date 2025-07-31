export const neighborhoods = [
  { name: "Altessa", slug: "altessa" },
  { name: "Ashton Park", slug: "ashton-park" },
  { name: "Barrington", slug: "barrington" },
  { name: "Bella Vista", slug: "bella-vista" },
  { name: "Canterra", slug: "canterra" },
  { name: "Capri", slug: "capri" },
  { name: "Cara Vella", slug: "cara-vella" },
  { name: "Casa Rosa", slug: "casa-rosa" },
  { name: "Encanto", slug: "encanto" },
  { name: "Estancia", slug: "estancia" },
  { name: "Hillstone", slug: "hillstone" },
  { name: "Kingwood", slug: "kingwood" },
  { name: "Miraleste", slug: "miraleste" },
  { name: "Miramonte", slug: "miramonte" },
  { name: "Monterosa", slug: "monterosa" },
  { name: "Palmilla", slug: "palmilla" },
  { name: "Paradiso", slug: "paradiso" },
  { name: "Portofino", slug: "portofino" },
  { name: "Sage Hills", slug: "sage-hills" },
  { name: "San Marcos", slug: "san-marcos" },
  { name: "Santalina", slug: "santalina" },
  { name: "Solano", slug: "solano" },
  { name: "Somerset", slug: "somerset" },
  { name: "Sonesta", slug: "sonesta" },
  { name: "Summerfield", slug: "summerfield" },
  { name: "Talaverde", slug: "talaverde" },
  { name: "Talega", slug: "talega" },
  { name: "Vista Verde", slug: "vista-verde" }
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