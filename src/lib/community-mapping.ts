// Community mapping for navigation and routing
export const COMMUNITY_MAPPING = {
  // Map display names to actual image slugs
  "Barrington": "img-0737",
  "Kingwood": "img-0738", 
  "Santalina": "img-0739",
  
  // Additional communities that can be added later
  "Portofino": "img-0737", // Using existing image as placeholder
  "Capri": "img-0738",     // Using existing image as placeholder
  "Hillstone": "img-0739", // Using existing image as placeholder
};

// Convert display name to slug for navigation
export function getCommunitySlug(displayName: string): string {
  return COMMUNITY_MAPPING[displayName as keyof typeof COMMUNITY_MAPPING] || displayName.toLowerCase().replace(/\s+/g, "-");
}

// Get display name from slug
export function getCommunityDisplayName(slug: string): string {
  const entry = Object.entries(COMMUNITY_MAPPING).find(([_, mappedSlug]) => mappedSlug === slug);
  return entry ? entry[0] : slug.replace(/[-_]/g, " ").replace(/\b\w/g, l => l.toUpperCase());
}

// Get available communities for navigation
export function getAvailableCommunities(): string[] {
  return Object.keys(COMMUNITY_MAPPING);
}
