// SEO Audit Utilities for 2025 Google Standards
export const seoAuditUtils = {
  // Check canonical URL consistency
  checkCanonicalConsistency: () => {
    if (typeof window === 'undefined') return false;
    
    const canonical = document.querySelector('link[rel="canonical"]');
    const currentUrl = window.location.href;
    
    if (!canonical) {
      console.warn('SEO Audit: No canonical URL found');
      return false;
    }
    
    const canonicalUrl = canonical.getAttribute('href');
    const isConsistent = currentUrl === canonicalUrl;
    
    if (!isConsistent) {
      console.warn('SEO Audit: Canonical URL mismatch', {
        current: currentUrl,
        canonical: canonicalUrl
      });
    }
    
    return isConsistent;
  },

  // Check meta description quality
  checkMetaDescription: () => {
    if (typeof window === 'undefined') return false;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    
    if (!metaDescription) {
      console.warn('SEO Audit: No meta description found');
      return false;
    }
    
    const description = metaDescription.getAttribute('content') || '';
    const isOptimalLength = description.length >= 120 && description.length <= 160;
    
    if (!isOptimalLength) {
      console.warn('SEO Audit: Meta description length issue', {
        length: description.length,
        description: description
      });
    }
    
    return isOptimalLength;
  },

  // Check title tag quality
  checkTitleTag: () => {
    if (typeof window === 'undefined') return false;
    
    const title = document.title;
    const isOptimalLength = title.length >= 30 && title.length <= 60;
    
    if (!isOptimalLength) {
      console.warn('SEO Audit: Title tag length issue', {
        length: title.length,
        title: title
      });
    }
    
    return isOptimalLength;
  },

  // Check heading structure
  checkHeadingStructure: () => {
    if (typeof window === 'undefined') return false;
    
    const h1s = document.querySelectorAll('h1');
    const h2s = document.querySelectorAll('h2');
    
    if (h1s.length === 0) {
      console.warn('SEO Audit: No H1 tag found');
      return false;
    }
    
    if (h1s.length > 1) {
      console.warn('SEO Audit: Multiple H1 tags found', h1s.length);
      return false;
    }
    
    if (h2s.length === 0) {
      console.warn('SEO Audit: No H2 tags found');
      return false;
    }
    
    return true;
  },

  // Check image alt text
  checkImageAltText: () => {
    if (typeof window === 'undefined') return false;
    
    const images = document.querySelectorAll('img');
    let missingAlt = 0;
    let emptyAlt = 0;
    
    images.forEach((img) => {
      const alt = img.getAttribute('alt');
      if (!alt) {
        missingAlt++;
      } else if (alt.trim() === '') {
        emptyAlt++;
      }
    });
    
    if (missingAlt > 0 || emptyAlt > 0) {
      console.warn('SEO Audit: Image alt text issues', {
        missingAlt,
        emptyAlt,
        totalImages: images.length
      });
      return false;
    }
    
    return true;
  },

  // Check internal linking
  checkInternalLinking: () => {
    if (typeof window === 'undefined') return false;
    
    const links = document.querySelectorAll('a[href]');
    let internalLinks = 0;
    let externalLinks = 0;
    
    links.forEach((link) => {
      const href = link.getAttribute('href');
      if (href) {
        if (href.startsWith('/') || href.includes('thevistassummerlin.com')) {
          internalLinks++;
        } else if (href.startsWith('http')) {
          externalLinks++;
        }
      }
    });
    
    const hasGoodInternalLinking = internalLinks >= 3;
    
    if (!hasGoodInternalLinking) {
      console.warn('SEO Audit: Insufficient internal linking', {
        internalLinks,
        externalLinks
      });
    }
    
    return hasGoodInternalLinking;
  },

  // Check schema markup
  checkSchemaMarkup: () => {
    if (typeof window === 'undefined') return false;
    
    const schemaScripts = document.querySelectorAll('script[type="application/ld+json"]');
    
    if (schemaScripts.length === 0) {
      console.warn('SEO Audit: No schema markup found');
      return false;
    }
    
    let validSchemas = 0;
    
    schemaScripts.forEach((script) => {
      try {
        const schema = JSON.parse(script.textContent || '');
        if (schema['@context'] && schema['@type']) {
          validSchemas++;
        }
      } catch (error) {
        console.warn('SEO Audit: Invalid schema markup', error);
      }
    });
    
    return validSchemas > 0;
  },

  // Run complete SEO audit
  runCompleteAudit: () => {
    if (typeof window === 'undefined') return;
    
    console.log('🔍 Running SEO Audit...');
    
    const results = {
      canonical: seoAuditUtils.checkCanonicalConsistency(),
      metaDescription: seoAuditUtils.checkMetaDescription(),
      titleTag: seoAuditUtils.checkTitleTag(),
      headingStructure: seoAuditUtils.checkHeadingStructure(),
      imageAltText: seoAuditUtils.checkImageAltText(),
      internalLinking: seoAuditUtils.checkInternalLinking(),
      schemaMarkup: seoAuditUtils.checkSchemaMarkup(),
    };
    
    const score = Object.values(results).filter(Boolean).length;
    const total = Object.keys(results).length;
    const percentage = Math.round((score / total) * 100);
    
    console.log('📊 SEO Audit Results:', {
      score: `${score}/${total}`,
      percentage: `${percentage}%`,
      results
    });
    
    // Send to analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'seo_audit_score', {
        event_category: 'SEO',
        event_label: 'Audit Score',
        value: percentage,
        non_interaction: true,
      });
    }
    
    return results;
  }
};

// Performance monitoring for Core Web Vitals
export const performanceMonitoring = {
  // Monitor page load performance
  monitorPageLoad: () => {
    if (typeof window === 'undefined') return;
    
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        const metrics = {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          firstByte: navigation.responseStart - navigation.requestStart,
          domInteractive: navigation.domInteractive - navigation.fetchStart,
        };
        
        console.log('📈 Page Load Metrics:', metrics);
        
        // Send to analytics
        if (typeof gtag !== 'undefined') {
          Object.entries(metrics).forEach(([key, value]) => {
            gtag('event', 'page_performance', {
              event_category: 'Performance',
              event_label: key,
              value: Math.round(value),
              non_interaction: true,
            });
          });
        }
      }, 1000);
    });
  },

  // Monitor resource loading
  monitorResourceLoading: () => {
    if (typeof window === 'undefined') return;
    
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'resource') {
          const resource = entry as PerformanceResourceTiming;
          const loadTime = resource.responseEnd - resource.startTime;
          
          // Only log slow resources
          if (loadTime > 1000) {
            console.warn('🐌 Slow Resource:', {
              name: resource.name,
              loadTime: Math.round(loadTime),
              size: resource.transferSize
            });
          }
        }
      });
    });
    
    observer.observe({ entryTypes: ['resource'] });
  }
};

// Initialize SEO monitoring
export const initializeSEOMonitoring = () => {
  if (typeof window === 'undefined') return;
  
  // Run SEO audit after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      seoAuditUtils.runCompleteAudit();
    }, 2000);
  });
  
  // Initialize performance monitoring
  performanceMonitoring.monitorPageLoad();
  performanceMonitoring.monitorResourceLoading();
};
