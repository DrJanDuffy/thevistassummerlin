'use client';

import { useEffect } from 'react';

// Declare gtag as a global function
declare global {
  function gtag(...args: any[]): void;
}

// Core Web Vitals monitoring for 2025 SEO
export default function CoreWebVitalsMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Import web-vitals library dynamically
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      // Cumulative Layout Shift (CLS)
      onCLS((metric) => {
        console.log('CLS:', metric);
        // Send to analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'CLS',
            value: Math.round(metric.value * 1000), // Convert to milliseconds
            non_interaction: true,
          });
        }
      });

      // Interaction to Next Paint (INP) - replaces FID
      onINP((metric) => {
        console.log('INP:', metric);
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'INP',
            value: Math.round(metric.value),
            non_interaction: true,
          });
        }
      });

      // First Contentful Paint (FCP)
      onFCP((metric) => {
        console.log('FCP:', metric);
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'FCP',
            value: Math.round(metric.value),
            non_interaction: true,
          });
        }
      });

      // Largest Contentful Paint (LCP)
      onLCP((metric) => {
        console.log('LCP:', metric);
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'LCP',
            value: Math.round(metric.value),
            non_interaction: true,
          });
        }
      });

      // Time to First Byte (TTFB)
      onTTFB((metric) => {
        console.log('TTFB:', metric);
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'TTFB',
            value: Math.round(metric.value),
            non_interaction: true,
          });
        }
      });
    }).catch((error) => {
      console.warn('Failed to load web-vitals:', error);
    });

    // Note: SEO monitoring removed to prevent client-side errors
  }, []);

  return null; // This component doesn't render anything
}

// Performance monitoring utilities
export const performanceUtils = {
  // Measure page load time
  measurePageLoad: () => {
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'page_load_time', {
          event_category: 'Performance',
          event_label: 'Page Load',
          value: Math.round(loadTime),
          non_interaction: true,
        });
      }
      
      return loadTime;
    }
    return 0;
  },

  // Measure image load performance
  measureImageLoad: (imageSrc: string) => {
    if (typeof window !== 'undefined') {
      const startTime = performance.now();
      const img = new Image();
      
      img.onload = () => {
        const loadTime = performance.now() - startTime;
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'image_load_time', {
            event_category: 'Performance',
            event_label: imageSrc,
            value: Math.round(loadTime),
            non_interaction: true,
          });
        }
      };
      
      img.src = imageSrc;
    }
  },

  // Monitor resource loading
  monitorResourceLoading: () => {
    if (typeof window !== 'undefined' && window.performance) {
      const resources = window.performance.getEntriesByType('resource');
      
      resources.forEach((resource) => {
        const loadTime = resource.responseEnd - resource.startTime;
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'resource_load_time', {
            event_category: 'Performance',
            event_label: resource.name,
            value: Math.round(loadTime),
            non_interaction: true,
          });
        }
      });
    }
  }
};
