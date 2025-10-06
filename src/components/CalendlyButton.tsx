'use client';
import { useEffect } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

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
      className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
      onClick={() => {
        // @ts-expect-error: Calendly is loaded as an external script
        window.Calendly.initPopupWidget({ url });
      }}
      type="button"
    >
      <Calendar className="w-5 h-5" />
      <span>Schedule with Calendly</span>
      <ArrowRight className="w-5 h-5" />
    </button>
  );
} 