// ===== MAIN JAVASCRIPT FILE =====
// The Vistas Summerlin Real Estate Website - Optimized for Performance

// ===== UTILITY FUNCTIONS =====
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            // Use requestIdleCallback for better performance
            if ('requestIdleCallback' in window) {
                requestIdleCallback(() => inThrottle = false);
            } else {
                setTimeout(() => inThrottle = false, limit);
            }
        }
    };
};

// ===== OPTIMIZED COMPONENT LOADING SYSTEM =====
class ComponentLoader {
    constructor() {
        this.components = {};
        this.loadedComponents = new Set();
    }

    async loadComponent(name, path) {
        if (this.loadedComponents.has(name)) {
            return this.components[name];
        }

        try {
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error(`Failed to load component: ${response.statusText}`);
            }
            
            const html = await response.text();
            this.components[name] = html;
            this.loadedComponents.add(name);
            return html;
        } catch (error) {
            console.error(`Error loading component ${name}:`, error);
            return `<div class="error">Failed to load ${name} component</div>`;
        }
    }

    async injectComponent(placeholderId, componentName, componentPath) {
        const placeholder = document.getElementById(placeholderId);
        if (!placeholder) {
            console.error(`Placeholder with id '${placeholderId}' not found`);
            return;
        }

        const html = await this.loadComponent(componentName, componentPath);
        placeholder.innerHTML = html;
        
        // Initialize component-specific functionality
        this.initializeComponent(componentName);
    }

    initializeComponent(componentName) {
        switch (componentName) {
            case 'header':
                this.initializeHeader();
                break;
            case 'nav':
                this.initializeNavigation();
                break;
            case 'footer':
                this.initializeFooter();
                break;
        }
    }

    initializeHeader() {
        // Use event delegation for better performance
        document.addEventListener('click', (e) => {
            if (e.target.matches('.header-contact')) {
                e.preventDefault();
                console.log('Contact button clicked');
            }
        });
    }

    initializeNavigation() {
        // Use event delegation for mobile menu
        document.addEventListener('click', (e) => {
            if (e.target.matches('.mobile-menu-toggle')) {
                const menu = document.querySelector('.mobile-menu');
                if (menu) {
                    menu.classList.toggle('hidden');
                }
            }
            
            if (e.target.matches('.mobile-menu-overlay')) {
                const menu = document.querySelector('.mobile-menu');
                if (menu) {
                    menu.classList.add('hidden');
                }
            }
        });
    }

    initializeFooter() {
        // Footer-specific functionality
        console.log('Footer initialized');
    }
}
        const mobileMenu = document.querySelector('.mobile-menu');
        const overlay = document.querySelector('.mobile-overlay');

        if (mobileMenuToggle && mobileMenu) {
            mobileMenuToggle.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
                document.body.classList.toggle('menu-open');
                
                // Update aria-expanded
                const isExpanded = mobileMenu.classList.contains('active');
                mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
            });
        }

        // Close mobile menu when clicking overlay
        if (overlay) {
            overlay.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            });
        }

        // Dropdown functionality
        const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                const dropdown = toggle.nextElementSibling;
                const isOpen = dropdown.classList.contains('active');
                
                // Close all other dropdowns
                document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
                    if (menu !== dropdown) {
                        menu.classList.remove('active');
                    }
                });
                
                // Toggle current dropdown
                dropdown.classList.toggle('active');
                toggle.setAttribute('aria-expanded', !isOpen);
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown')) {
                document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
                    menu.classList.remove('active');
                });
                document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
                    toggle.setAttribute('aria-expanded', 'false');
                });
            }
        });

        // Active page highlighting
        this.highlightActivePage();
    }

    initializeFooter() {
        // Footer-specific functionality
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleNewsletterSignup(e.target);
            });
        }
    }

    highlightActivePage() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.main-nav a');
        
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (linkPath === currentPath || 
                (currentPath.includes(linkPath) && linkPath !== '/')) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });
    }

    async handleNewsletterSignup(form) {
        const email = form.querySelector('input[type="email"]').value;
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = 'Subscribing...';
        submitButton.disabled = true;
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Show success message
            this.showNotification('Thank you for subscribing to our newsletter!', 'success');
            form.reset();
        } catch (error) {
            this.showNotification('Failed to subscribe. Please try again.', 'error');
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
}

// ===== SMOOTH SCROLLING =====
class SmoothScroller {
    constructor() {
        this.init();
    }

    init() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    this.scrollToElement(target);
                }
            });
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('.main-nav a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    this.scrollToElement(target);
                    
                    // Close mobile menu if open
                    const mobileMenu = document.querySelector('.mobile-menu');
                    if (mobileMenu && mobileMenu.classList.contains('active')) {
                        mobileMenu.classList.remove('active');
                        document.body.classList.remove('menu-open');
                    }
                }
            });
        });
    }

    scrollToElement(element, offset = 80) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// ===== FORM VALIDATION =====
class FormValidator {
    constructor() {
        this.init();
    }

    init() {
        const forms = document.querySelectorAll('form[data-validate]');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                if (!this.validateForm(form)) {
                    e.preventDefault();
                }
            });

            // Real-time validation
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.addEventListener('blur', () => this.validateField(input));
                input.addEventListener('input', debounce(() => this.validateField(input), 300));
            });
        });
    }

    validateForm(form) {
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        return isValid;
    }

    validateField(field) {
        const value = field.value.trim();
        const type = field.type;
        const required = field.hasAttribute('required');
        
        // Remove existing error messages
        this.removeFieldError(field);
        
        // Check if required field is empty
        if (required && !value) {
            this.showFieldError(field, 'This field is required');
            return false;
        }
        
        // Type-specific validation
        if (value) {
            switch (type) {
                case 'email':
                    if (!this.isValidEmail(value)) {
                        this.showFieldError(field, 'Please enter a valid email address');
                        return false;
                    }
                    break;
                case 'tel':
                    if (!this.isValidPhone(value)) {
                        this.showFieldError(field, 'Please enter a valid phone number');
                        return false;
                    }
                    break;
                case 'url':
                    if (!this.isValidUrl(value)) {
                        this.showFieldError(field, 'Please enter a valid URL');
                        return false;
                    }
                    break;
            }
        }
        
        // Mark field as valid
        field.classList.add('valid');
        return true;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    isValidPhone(phone) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
    }

    isValidUrl(url) {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }

    showFieldError(field, message) {
        field.classList.add('error');
        field.classList.remove('valid');
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.setAttribute('role', 'alert');
        
        field.parentNode.appendChild(errorDiv);
    }

    removeFieldError(field) {
        field.classList.remove('error');
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }
}

// ===== LAZY LOADING =====
class LazyLoader {
    constructor() {
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            this.observeImages();
            this.observeComponents();
        } else {
            this.loadAllImages();
        }
    }

    observeImages() {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    this.loadImage(img);
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px'
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    observeComponents() {
        const componentObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const component = entry.target;
                    this.loadComponent(component);
                    observer.unobserve(component);
                }
            });
        }, {
            rootMargin: '100px 0px'
        });

        document.querySelectorAll('[data-lazy-component]').forEach(component => {
            componentObserver.observe(component);
        });
    }

    loadImage(img) {
        const src = img.getAttribute('data-src');
        if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
        }
    }

    loadComponent(component) {
        const componentType = component.getAttribute('data-lazy-component');
        // Initialize component-specific functionality
        switch (componentType) {
            case 'market-charts':
                this.initializeMarketCharts(component);
                break;
            case 'property-map':
                this.initializePropertyMap(component);
                break;
        }
    }

    initializeMarketCharts(container) {
        // Initialize market data charts
        console.log('Initializing market charts');
        // Add chart initialization logic here
    }

    initializePropertyMap(container) {
        // Initialize property map
        console.log('Initializing property map');
        // Add map initialization logic here
    }

    loadAllImages() {
        document.querySelectorAll('img[data-src]').forEach(img => {
            this.loadImage(img);
        });
    }
}

// ===== ANALYTICS =====
class Analytics {
    constructor() {
        this.init();
    }

    init() {
        // Track page views
        this.trackPageView();
        
        // Track user interactions
        this.trackInteractions();
        
        // Track form submissions
        this.trackFormSubmissions();
        
        // Track RealScout widget interactions
        this.trackRealScoutInteractions();
    }

    trackPageView() {
        const pageData = {
            page_title: document.title,
            page_url: window.location.href,
            page_path: window.location.pathname,
            referrer: document.referrer
        };
        
        // Send to analytics service
        this.sendEvent('page_view', pageData);
    }

    trackInteractions() {
        // Use event delegation for better performance
        document.addEventListener('click', (e) => {
            if (e.target.matches('button, .btn, a[href]')) {
                // Use requestIdleCallback to defer analytics processing
                if ('requestIdleCallback' in window) {
                    requestIdleCallback(() => {
                        const element = e.target;
                        const eventData = {
                            element_type: element.tagName.toLowerCase(),
                            element_text: element.textContent.trim(),
                            element_href: element.href || null,
                            page_url: window.location.href
                        };
                        this.sendEvent('element_click', eventData);
                    });
                } else {
                    // Fallback for browsers without requestIdleCallback
                    setTimeout(() => {
                        const element = e.target;
                        const eventData = {
                            element_type: element.tagName.toLowerCase(),
                            element_text: element.textContent.trim(),
                            element_href: element.href || null,
                            page_url: window.location.href
                        };
                        this.sendEvent('element_click', eventData);
                    }, 0);
                }
            }
        });

        // Track scroll depth with optimized throttling
        let maxScroll = 0;
        const trackScroll = throttle(() => {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                if (maxScroll % 25 === 0) { // Track at 25%, 50%, 75%, 100%
                    // Defer analytics processing
                    if ('requestIdleCallback' in window) {
                        requestIdleCallback(() => this.sendEvent('scroll_depth', { depth: maxScroll }));
                    } else {
                        setTimeout(() => this.sendEvent('scroll_depth', { depth: maxScroll }), 0);
                    }
                }
            }
        }, 1000);

        window.addEventListener('scroll', trackScroll, { passive: true });
    }

    trackFormSubmissions() {
        document.addEventListener('submit', (e) => {
            const form = e.target;
            // Defer form analytics processing
            if ('requestIdleCallback' in window) {
                requestIdleCallback(() => {
                    const formData = {
                        form_id: form.id || 'unknown',
                        form_action: form.action,
                        page_url: window.location.href
                    };
                    this.sendEvent('form_submit', formData);
                });
            } else {
                setTimeout(() => {
                    const formData = {
                        form_id: form.id || 'unknown',
                        form_action: form.action,
                        page_url: window.location.href
                    };
                    this.sendEvent('form_submit', formData);
                }, 0);
            }
        });
    }

    trackRealScoutInteractions() {
        // Track RealScout widget interactions with deferred processing
        document.addEventListener('click', (e) => {
            if (e.target.closest('realscout-office-listings, realscout-simple-search')) {
                // Defer analytics processing
                if ('requestIdleCallback' in window) {
                    requestIdleCallback(() => {
                        const widgetData = {
                            widget_type: e.target.tagName.toLowerCase(),
                            page_url: window.location.href
                        };
                        this.sendEvent('realscout_interaction', widgetData);
                    });
                } else {
                    setTimeout(() => {
                        const widgetData = {
                            widget_type: e.target.tagName.toLowerCase(),
                            page_url: window.location.href
                        };
                        this.sendEvent('realscout_interaction', widgetData);
                    }, 0);
                }
            }
        });
    }

    sendEvent(eventName, eventData) {
        // Google Analytics 4
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, eventData);
        }
        
        // Custom analytics endpoint
        fetch('/api/analytics', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                event: eventName,
                data: eventData,
                timestamp: new Date().toISOString()
            })
        }).catch(error => {
            console.error('Analytics error:', error);
        });
    }
}

// ===== PERFORMANCE MONITORING =====
class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        // Monitor Core Web Vitals
        this.monitorLCP();
        this.monitorFID();
        this.monitorCLS();
        
        // Monitor RealScout widget performance
        this.monitorRealScoutPerformance();
    }

    monitorLCP() {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                
                this.sendMetric('LCP', lastEntry.startTime);
            });
            
            observer.observe({ entryTypes: ['largest-contentful-paint'] });
        }
    }

    monitorFID() {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach(entry => {
                    this.sendMetric('FID', entry.processingStart - entry.startTime);
                });
            });
            
            observer.observe({ entryTypes: ['first-input'] });
        }
    }

    monitorCLS() {
        if ('PerformanceObserver' in window) {
            let clsValue = 0;
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach(entry => {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                    }
                });
            });
            
            observer.observe({ entryTypes: ['layout-shift'] });
            
            // Send CLS value on page unload
            window.addEventListener('beforeunload', () => {
                this.sendMetric('CLS', clsValue);
            });
        }
    }

    monitorRealScoutPerformance() {
        // Monitor RealScout widget load times
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach(entry => {
                if (entry.name.includes('realscout')) {
                    this.sendMetric('RealScout_Load_Time', entry.duration);
                }
            });
        });
        
        observer.observe({ entryTypes: ['resource'] });
    }

    sendMetric(metricName, value) {
        // Send to analytics service
        fetch('/api/metrics', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                metric: metricName,
                value: value,
                timestamp: new Date().toISOString(),
                url: window.location.href
            })
        }).catch(error => {
            console.error('Metric error:', error);
        });
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all systems
    const componentLoader = new ComponentLoader();
    const smoothScroller = new SmoothScroller();
    const formValidator = new FormValidator();
    const lazyLoader = new LazyLoader();
    const analytics = new Analytics();
    const performanceMonitor = new PerformanceMonitor();

    // Load components
    componentLoader.injectComponent('header-placeholder', 'header', 'components/header.html');
    componentLoader.injectComponent('nav-placeholder', 'nav', 'components/nav.html');
    componentLoader.injectComponent('footer-placeholder', 'footer', 'components/footer.html');

    // Initialize page-specific functionality
    initializePageSpecific();
});

// ===== PAGE-SPECIFIC FUNCTIONALITY =====
function initializePageSpecific() {
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('market-analysis')) {
        initializeMarketAnalysis();
    } else if (currentPage.includes('communities')) {
        initializeCommunities();
    } else if (currentPage.includes('search')) {
        initializeSearch();
    } else if (currentPage.includes('investment')) {
        initializeInvestment();
    } else if (currentPage.includes('about')) {
        initializeAbout();
    }
}

function initializeMarketAnalysis() {
    // Market analysis specific functionality
    const chartToggleBtn = document.getElementById('toggle-charts');
    if (chartToggleBtn) {
        chartToggleBtn.addEventListener('click', () => {
            console.log('Toggle charts clicked');
            // Add chart toggle functionality
        });
    }
}

function initializeCommunities() {
    // Communities specific functionality
    loadCommunitiesData();
}

function initializeSearch() {
    // Search specific functionality
    initializeSearchFilters();
}

function initializeInvestment() {
    // Investment specific functionality
    initializeROICalculator();
}

function initializeAbout() {
    // About specific functionality
    // Add any about page specific features
}

// ===== DATA LOADING FUNCTIONS =====
async function loadCommunitiesData() {
    try {
        // Simulate loading community data
        const communities = [
            { name: 'Red Rock Views', type: 'Luxury', properties: 45 },
            { name: 'Canyon Views', type: 'Family', properties: 32 },
            { name: 'Mountain Vista', type: 'Luxury', properties: 28 },
            // Add more communities...
        ];
        
        const container = document.querySelector('.communities-container');
        if (container) {
            communities.forEach(community => {
                const card = createCommunityCard(community);
                container.appendChild(card);
            });
        }
    } catch (error) {
        console.error('Error loading communities:', error);
    }
}

function createCommunityCard(community) {
    const card = document.createElement('div');
    card.className = 'community-card';
    card.innerHTML = `
        <div class="community-image">🏠</div>
        <div class="community-content">
            <span class="community-badge">${community.type}</span>
            <h3>${community.name}</h3>
            <p>${community.properties} properties available</p>
            <a href="#" class="btn btn-secondary">View Properties</a>
        </div>
    `;
    return card;
}

function initializeSearchFilters() {
    // Initialize search filter functionality
    console.log('Initializing search filters');
}

function initializeROICalculator() {
    // Initialize ROI calculator functionality
    console.log('Initializing ROI calculator');
}

// ===== GLOBAL ERROR HANDLING =====
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    // Send error to analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
            description: event.error.message,
            fatal: false
        });
    }
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    // Send error to analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
            description: event.reason,
            fatal: false
        });
    }
}); 