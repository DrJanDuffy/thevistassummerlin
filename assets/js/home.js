// Homepage Functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeHomeValuationWidget();
    addHomepageStyles();
    initializeQuickLinks();
});

// Initialize RealScout Home Valuation Widget
function initializeHomeValuationWidget() {
    const valuationContainer = document.getElementById('home-valuation-widget');
    
    if (valuationContainer) {
        // Create RealScout home valuation widget
        const valuationWidget = document.createElement('realscout-home-value');
        valuationWidget.setAttribute('agent-id', '225050'); // Your RealScout Agent ID
        valuationWidget.setAttribute('theme', 'light');
        valuationWidget.setAttribute('show-form', 'true');
        
        valuationContainer.appendChild(valuationWidget);
    }
}

// Add homepage-specific styles
function addHomepageStyles() {
    const homepageCSS = `
        .hero-cta {
            margin-top: 2rem;
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .quick-links {
            background-color: #F7F9FC;
            padding: 4rem 0;
        }
        
        .quick-links-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .quick-link-card {
            background-color: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            text-align: center;
            text-decoration: none;
            color: inherit;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .quick-link-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 4px 16px rgba(0,0,0,0.12);
        }
        
        .card-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        
        .quick-link-card h3 {
            color: #0A2540;
            margin-bottom: 0.5rem;
        }
        
        .quick-link-card p {
            color: #666;
            margin-bottom: 0;
        }
        
        .home-valuation {
            background-color: white;
            padding: 4rem 0;
        }
        
        .home-valuation h2 {
            text-align: center;
            margin-bottom: 1rem;
        }
        
        .home-valuation p {
            text-align: center;
            margin-bottom: 2rem;
            color: #666;
        }
        
        #home-valuation-widget {
            max-width: 600px;
            margin: 0 auto;
        }
        
        .featured-content {
            background-color: #F7F9FC;
            padding: 4rem 0;
        }
        
        .featured-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .featured-item {
            background-color: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        
        .featured-item h3 {
            color: #0A2540;
            margin-bottom: 1rem;
        }
        
        .featured-item p {
            color: #666;
            margin-bottom: 1.5rem;
        }
        
        @media (max-width: 768px) {
            .hero-cta {
                flex-direction: column;
                align-items: center;
            }
            
            .quick-links-grid,
            .featured-grid {
                grid-template-columns: 1fr;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = homepageCSS;
    document.head.appendChild(styleSheet);
}

// Initialize quick links with hover effects
function initializeQuickLinks() {
    const quickLinkCards = document.querySelectorAll('.quick-link-card');
    
    quickLinkCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Track homepage interactions
function trackHomepageEvent(eventType, details) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventType, {
            custom_parameters: details
        });
    }
}

// Track quick link clicks
document.addEventListener('DOMContentLoaded', function() {
    const quickLinks = document.querySelectorAll('.quick-link-card');
    
    quickLinks.forEach(link => {
        link.addEventListener('click', function() {
            const linkText = this.querySelector('h3').textContent;
            trackHomepageEvent('quick_link_click', {
                link_name: linkText,
                link_url: this.href
            });
        });
    });
    
    // Track CTA button clicks
    const ctaButtons = document.querySelectorAll('.hero-cta .btn');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            trackHomepageEvent('cta_click', {
                button_text: this.textContent,
                button_url: this.href
            });
        });
    });
});

// Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', addScrollAnimations);

// Performance optimization
function optimizePerformance() {
    // Preload critical resources
    const criticalLinks = [
        'pages/search.html',
        'pages/communities.html'
    ];
    
    criticalLinks.forEach(link => {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'prefetch';
        preloadLink.href = link;
        document.head.appendChild(preloadLink);
    });
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', optimizePerformance); 