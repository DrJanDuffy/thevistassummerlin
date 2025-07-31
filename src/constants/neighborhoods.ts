export const neighborhoods = [
  { name: "Barrington", slug: "barrington" },
  { name: "Kingwood", slug: "kingwood" },
  { name: "Santalina", slug: "santalina" },
  { name: "Bella Vista", slug: "bella-vista" },
  { name: "Miraleste", slug: "miraleste" },
  { name: "Solano", slug: "solano" },
  { name: "Canterra", slug: "canterra" },
  { name: "Miramonte", slug: "miramonte" },
  { name: "Somerset", slug: "somerset" },
  { name: "Capri", slug: "capri" },
  { name: "Monterosa", slug: "monterosa" },
  { name: "Sonesta", slug: "sonesta" },
  { name: "Cara Vella", slug: "cara-vella" },
  { name: "Palmilla", slug: "palmilla" },
  { name: "Summerfield", slug: "summerfield" },
  { name: "Casa Rosa", slug: "casa-rosa" },
  { name: "Paradiso", slug: "paradiso" },
  { name: "Talaverde", slug: "talaverde" },
  { name: "Encanto", slug: "encanto" },
  { name: "Portofino", slug: "portofino" },
  { name: "Talega", slug: "talega" },
  { name: "Estancia", slug: "estancia" },
  { name: "Sage Hills", slug: "sage-hills" },
  { name: "Vista Verde", slug: "vista-verde" },
  { name: "Hillstone", slug: "hillstone" },
  { name: "San Marcos", slug: "san-marcos" }
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