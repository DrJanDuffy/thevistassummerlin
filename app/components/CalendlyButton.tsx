'use client';
import { useEffect } from 'react';

export function CalendlyButton({ url }: { url: string }) {
  useEffect(() => {
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        // @ts-ignore
        window.Calendly.initPopupWidget({ url });
      }}
      type="button"
    >
      Schedule with Calendly
    </button>
  );
} 