'use client';

import { useEffect } from 'react';
import { initializeSEOMonitoring } from '@/utils/seoAuditUtils';

// Core Web Vitals monitoring for 2025 SEO
export default function CoreWebVitalsMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Import web-vitals library dynamically
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Cumulative Layout Shift (CLS)
      getCLS((metric) => {
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

      // First Input Delay (FID)
      getFID((metric) => {
        console.log('FID:', metric);
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'FID',
            value: Math.round(metric.value),
            non_interaction: true,
          });
        }
      });

      // First Contentful Paint (FCP)
      getFCP((metric) => {
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
      getLCP((metric) => {
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
      getTTFB((metric) => {
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

    // Initialize SEO monitoring
    initializeSEOMonitoring();
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
