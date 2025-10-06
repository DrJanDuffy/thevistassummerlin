// Site Configuration Constants
export const SITE_CONFIG = {
  name: 'The Vistas Summerlin',
  description: 'Discover your perfect home in one of 28 vibrant subcommunities in The Vistas Summerlin. Get instant home valuations, market insights, and expert guidance.',
  url: 'https://www.thevistassummerlin.com',
  ogImage: '/subcommunities/IMG_0737.JPG',
  links: {
    twitter: 'https://twitter.com/thevistassummerlin',
    github: 'https://github.com/thevistassummerlin',
  },
} as const;

// Navigation Configuration
export const NAVIGATION = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Communities', href: '/communities' },
    { name: 'Market Data', href: '/market' },
    { name: 'Valuation', href: '/valuation' },
    { name: 'Contact', href: '/contact' },
  ],
  footer: {
    communities: [
      { name: 'All Communities', href: '/communities' },
      { name: 'Featured', href: '/communities/featured' },
      { name: 'New Construction', href: '/communities/new-construction' },
    ],
    services: [
      { name: 'Home Valuation', href: '/valuation' },
      { name: 'Market Analysis', href: '/market' },
      { name: 'Property Search', href: '/search' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'FAQ', href: '/faq' },
      { name: 'About', href: '/about' },
    ],
  },
} as const;

// RealScout Configuration
export const REALSCOUT_CONFIG = {
  agentId: '225050',
  agentEncodedId: 'QWdlbnQtMjI1MDUw',
  widgets: {
    homeValue: {
      styles: {
        '--rs-hvw-background-color': '#ffffff',
        '--rs-hvw-title-color': '#2C3E50',
        '--rs-hvw-subtitle-color': '#666666',
        '--rs-hvw-primary-button-text-color': '#ffffff',
        '--rs-hvw-primary-button-color': '#007BFF',
        '--rs-hvw-secondary-button-text-color': '#007BFF',
        '--rs-hvw-secondary-button-color': '#ffffff',
        '--rs-hvw-widget-width': '100%',
        '--rs-hvw-border-radius': '8px',
        '--rs-hvw-box-shadow': '0 2px 10px rgba(0,0,0,0.1)',
      },
    },
    advancedSearch: {
      styles: {
        '--rs-as-button-text-color': '#ffffff',
        '--rs-as-background-color': '#ffffff',
        '--rs-as-button-color': '#007BFF',
        '--rs-as-widget-width': '100%',
        '--rs-as-border-radius': '8px',
        '--rs-as-box-shadow': '0 2px 10px rgba(0,0,0,0.1)',
      },
    },
  },
} as const;

// Design System Constants
export const DESIGN_SYSTEM = {
  colors: {
    primary: {
      navy: '#2C3E50',
      blue: '#007BFF',
      green: '#28A745',
    },
    text: {
      dark: '#333333',
      light: '#666666',
    },
    background: {
      white: '#FFFFFF',
      lightGray: '#F8F9FA',
    },
  },
  fonts: {
    primary: 'Source Sans Pro',
    secondary: 'Open Sans',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
  borderRadius: {
    default: '8px',
    lg: '12px',
    xl: '16px',
  },
} as const; 