// Community page template generator with RealScout integration
export const COMMUNITY_TEMPLATES = {
  'ashton-park': {
    name: 'Ashton Park',
    description: 'Modern luxury living with landscaped grounds',
    priceRange: '$500,000 - $1,200,000',
    priceMin: '500000',
    priceMax: '1200000',
    homeCount: 25,
    theme: 'green',
    amenities: ['Modern Architecture', 'Landscaped Grounds', 'Community Pool', 'Walking Trails', 'Tennis Courts', 'Community Center']
  },
  'bella-vista': {
    name: 'Bella Vista',
    description: 'Beautiful views and elegant homes',
    priceRange: '$600,000 - $1,500,000',
    priceMin: '600000',
    priceMax: '1500000',
    homeCount: 30,
    theme: 'purple',
    amenities: ['Mountain Views', 'Elegant Architecture', 'Private Patios', 'Landscaped Gardens', 'Community Pool', 'Walking Paths']
  },
  'canterra': {
    name: 'Canterra',
    description: 'Contemporary living with resort-style amenities',
    priceRange: '$550,000 - $1,300,000',
    priceMin: '550000',
    priceMax: '1300000',
    homeCount: 22,
    theme: 'blue',
    amenities: ['Resort Pool', 'Modern Design', 'Tennis Courts', 'Fitness Center', 'Community Events', 'Landscaped Grounds']
  },
  'cara-vella': {
    name: 'Cara Vella',
    description: 'Mediterranean-inspired luxury',
    priceRange: '$700,000 - $1,800,000',
    priceMin: '700000',
    priceMax: '1800000',
    homeCount: 18,
    theme: 'orange',
    amenities: ['Mediterranean Architecture', 'Private Courtyards', 'Resort Amenities', 'Golf Course Access', 'Mountain Views', 'Community Center']
  },
  'casa-rosa': {
    name: 'Casa Rosa',
    description: 'Spanish-inspired elegance',
    priceRange: '$650,000 - $1,600,000',
    priceMin: '650000',
    priceMax: '1600000',
    homeCount: 20,
    theme: 'rose',
    amenities: ['Spanish Architecture', 'Private Patios', 'Landscaped Gardens', 'Community Pool', 'Walking Paths', 'Community Center']
  },
  'encanto': {
    name: 'Encanto',
    description: 'Charming community living',
    priceRange: '$500,000 - $1,100,000',
    priceMin: '500000',
    priceMax: '1100000',
    homeCount: 28,
    theme: 'teal',
    amenities: ['Charming Architecture', 'Community Gardens', 'Pool Area', 'Playground', 'Walking Trails', 'Community Events']
  },
  'estancia': {
    name: 'Estancia',
    description: 'Ranch-style luxury',
    priceRange: '$600,000 - $1,400,000',
    priceMin: '600000',
    priceMax: '1400000',
    homeCount: 24,
    theme: 'brown',
    amenities: ['Ranch Architecture', 'Open Spaces', 'Horse Trails', 'Community Pool', 'Tennis Courts', 'Community Center']
  },
  'hillstone': {
    name: 'Hillstone',
    description: 'Mountain view homes',
    priceRange: '$700,000 - $1,700,000',
    priceMin: '700000',
    priceMax: '1700000',
    homeCount: 16,
    theme: 'stone',
    amenities: ['Mountain Views', 'Stone Architecture', 'Private Patios', 'Hiking Access', 'Community Pool', 'Scenic Trails']
  },
  'miraleste': {
    name: 'Miraleste',
    description: 'Elevated living',
    priceRange: '$750,000 - $1,900,000',
    priceMin: '750000',
    priceMax: '1900000',
    homeCount: 14,
    theme: 'silver',
    amenities: ['Elevated Views', 'Modern Design', 'Private Terraces', 'Golf Course Access', 'Community Pool', 'Fitness Center']
  },
  'monterossa': {
    name: 'Monterossa',
    description: 'Mediterranean luxury',
    priceRange: '$800,000 - $2,000,000',
    priceMin: '800000',
    priceMax: '2000000',
    homeCount: 12,
    theme: 'red',
    amenities: ['Mediterranean Style', 'Mountain Views', 'Private Courtyards', 'Resort Amenities', 'Golf Access', 'Community Center']
  },
  'palmilla': {
    name: 'Palmilla',
    description: 'Resort-style amenities',
    priceRange: '$650,000 - $1,500,000',
    priceMin: '650000',
    priceMax: '1500000',
    homeCount: 26,
    theme: 'palm',
    amenities: ['Resort Pool', 'Palm Landscaping', 'Tennis Courts', 'Spa Facilities', 'Community Events', 'Walking Paths']
  },
  'paradiso': {
    name: 'Paradiso',
    description: 'Paradise living',
    priceRange: '$600,000 - $1,400,000',
    priceMin: '600000',
    priceMax: '1400000',
    homeCount: 22,
    theme: 'paradise',
    amenities: ['Tropical Landscaping', 'Resort Pool', 'Private Patios', 'Community Gardens', 'Walking Trails', 'Community Center']
  },
  'sage-hills': {
    name: 'Sage Hills',
    description: 'Natural beauty',
    priceRange: '$550,000 - $1,200,000',
    priceMin: '550000',
    priceMax: '1200000',
    homeCount: 30,
    theme: 'sage',
    amenities: ['Natural Landscaping', 'Hiking Trails', 'Community Pool', 'Native Gardens', 'Walking Paths', 'Community Center']
  },
  'san-marcos': {
    name: 'San Marcos',
    description: 'Spanish colonial charm',
    priceRange: '$650,000 - $1,500,000',
    priceMin: '650000',
    priceMax: '1500000',
    homeCount: 20,
    theme: 'colonial',
    amenities: ['Spanish Colonial', 'Private Courtyards', 'Community Pool', 'Tennis Courts', 'Walking Paths', 'Community Center']
  },
  'solano': {
    name: 'Solano',
    description: 'Contemporary design',
    priceRange: '$500,000 - $1,100,000',
    priceMin: '500000',
    priceMax: '1100000',
    homeCount: 32,
    theme: 'contemporary',
    amenities: ['Contemporary Design', 'Modern Amenities', 'Community Pool', 'Fitness Center', 'Walking Trails', 'Community Events']
  },
  'somerset': {
    name: 'Somerset',
    description: 'Traditional luxury',
    priceRange: '$600,000 - $1,400,000',
    priceMin: '600000',
    priceMax: '1400000',
    homeCount: 24,
    theme: 'traditional',
    amenities: ['Traditional Architecture', 'Formal Gardens', 'Community Pool', 'Tennis Courts', 'Walking Paths', 'Community Center']
  },
  'sonesta': {
    name: 'Sonesta',
    description: 'Resort-style living',
    priceRange: '$700,000 - $1,600,000',
    priceMin: '700000',
    priceMax: '1600000',
    homeCount: 18,
    theme: 'resort',
    amenities: ['Resort Amenities', 'Spa Facilities', 'Community Pool', 'Tennis Courts', 'Fitness Center', 'Community Events']
  },
  'summerfield': {
    name: 'Summerfield',
    description: 'Summer living',
    priceRange: '$500,000 - $1,200,000',
    priceMin: '500000',
    priceMax: '1200000',
    homeCount: 28,
    theme: 'summer',
    amenities: ['Summer Activities', 'Community Pool', 'Playground', 'Walking Trails', 'Community Events', 'Family Amenities']
  },
  'talaverde': {
    name: 'Talaverde',
    description: 'Modern amenities',
    priceRange: '$550,000 - $1,300,000',
    priceMin: '550000',
    priceMax: '1300000',
    homeCount: 26,
    theme: 'modern',
    amenities: ['Modern Amenities', 'Contemporary Design', 'Community Pool', 'Fitness Center', 'Walking Trails', 'Community Center']
  },
  'talega': {
    name: 'Talega',
    description: 'Contemporary luxury',
    priceRange: '$650,000 - $1,500,000',
    priceMin: '650000',
    priceMax: '1500000',
    homeCount: 20,
    theme: 'luxury',
    amenities: ['Luxury Amenities', 'Modern Design', 'Private Patios', 'Community Pool', 'Tennis Courts', 'Community Center']
  },
  'vista-verde': {
    name: 'Vista Verde',
    description: 'Green views',
    priceRange: '$600,000 - $1,400,000',
    priceMin: '600000',
    priceMax: '1400000',
    homeCount: 22,
    theme: 'green',
    amenities: ['Green Landscaping', 'Mountain Views', 'Community Gardens', 'Walking Trails', 'Community Pool', 'Natural Beauty']
  }
};

export default COMMUNITY_TEMPLATES;
