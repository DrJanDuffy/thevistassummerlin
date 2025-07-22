import 'react';

declare module 'react' {
  namespace JSX {
    interface RealScoutWidgetProps {
      'agent-encoded-id'?: string;
      community?: string;
      // Allow any other props since we don't have full documentation
      [key: string]: unknown;
    }

    type RealScoutElement = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & RealScoutWidgetProps;

    interface IntrinsicElements {
      'realscout-advanced-search': RealScoutElement;
      'realscout-office-listings': RealScoutElement;
      'realscout-simple-search': RealScoutElement;
      'realscout-your-listings': RealScoutElement;
      'realscout-home-value': RealScoutElement;
    }
  }
} 