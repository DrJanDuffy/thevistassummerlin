// Global type definitions
export interface Metadata {
  title: string;
  description: string;
  openGraph?: {
    title: string;
    description: string;
    url: string;
    type: string;
  };
}

// Real Estate Types
export interface Property {
  id: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  imageUrl: string;
  community: string;
  status: 'active' | 'pending' | 'sold';
}

export interface Community {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  priceRange: {
    min: number;
    max: number;
  };
  amenities: string[];
  homesAvailable: number;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Form Types
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyInterest?: string;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

// RealScout Widget Types
export interface RealScoutConfig {
  agentEncodedId: string;
  widgetType: 'home-value' | 'advanced-search' | 'office-listings';
  styles?: Record<string, string>;
} 