// TypeScript declarations for RealScout custom elements
declare namespace JSX {
  interface IntrinsicElements {
    'realscout-office-listings': {
      'agent-encoded-id'?: string;
      'sort-order'?: 'PRICE_LOW' | 'PRICE_HIGH' | 'NEWEST' | 'OLDEST';
      'listing-status'?: 'For Sale' | 'Sold' | 'Pending';
      'property-types'?: string;
      'price-min'?: string;
      'price-max'?: string;
      className?: string;
      style?: React.CSSProperties;
    };
  }
}
