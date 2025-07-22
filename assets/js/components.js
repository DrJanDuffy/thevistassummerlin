// Components Loader
document.addEventListener('DOMContentLoaded', function() {
    loadComponents();
    initializeMobileMenu();
    setActivePage();
    initializeNewsletter();
});

// Load HTML components
async function loadComponents() {
    try {
        // Load header
        const headerResponse = await fetch('../components/header.html');
        const headerHtml = await headerResponse.text();
        document.getElementById('header-component').innerHTML = headerHtml;

        // Load navigation
        const navResponse = await fetch('../components/nav.html');
        const navHtml = await navResponse.text();
        document.getElementById('nav-component').innerHTML = navHtml;

        // Load footer
        const footerResponse = await fetch('../components/footer.html');
        const footerHtml = await footerResponse.text();
        document.getElementById('footer-component').innerHTML = footerHtml;

        // Re-initialize mobile menu after loading nav
        initializeMobileMenu();
    } catch (error) {
        console.error('Error loading components:', error);
    }
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
            mobileToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });

        // Handle dropdown toggles on mobile
        const dropdownParents = navMenu.querySelectorAll('.dropdown-parent');
        dropdownParents.forEach(parent => {
            const link = parent.querySelector('a');
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    const isExpanded = link.getAttribute('aria-expanded') === 'true';
                    link.setAttribute('aria-expanded', !isExpanded);
                    parent.classList.toggle('active');
                }
            });
        });

        // Close menu when clicking on a link (non-dropdown)
        const navLinks = navMenu.querySelectorAll('a:not(.dropdown-parent > a)');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !mobileToggle.contains(event.target)) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

// Set active page highlighting
function setActivePage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a[data-page]');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        const linkPage = link.getAttribute('data-page');
        
        // Remove existing active states
        link.removeAttribute('aria-current');
        
        // Check if this is the current page
        if (currentPath.includes(linkPage) || 
            (currentPath === '/' && linkPage === 'home') ||
            (currentPath === '/index.html' && linkPage === 'home')) {
            link.setAttribute('aria-current', 'page');
        }
    });
}

// Newsletter functionality
function initializeNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email) {
                // Here you would typically send the email to your backend
                console.log('Newsletter subscription:', email);
                
                // Show success message
                showNewsletterMessage('Thank you for subscribing!', 'success');
                emailInput.value = '';
            } else {
                showNewsletterMessage('Please enter a valid email address.', 'error');
            }
        });
    }
}

// Show newsletter messages
function showNewsletterMessage(message, type) {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (!newsletterForm) return;
    
    // Remove existing messages
    const existingMessage = newsletterForm.querySelector('.newsletter-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageElement = document.createElement('div');
    messageElement.className = `newsletter-message ${type}`;
    messageElement.textContent = message;
    
    // Insert after the form
    newsletterForm.appendChild(messageElement);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        if (messageElement.parentNode) {
            messageElement.remove();
        }
    }, 5000);
}

// Add mobile menu styles dynamically
const mobileStyles = `
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            flex-direction: column;
            padding: 1rem;
            z-index: 1000;
        }
        
        .nav-menu.active {
            display: flex;
        }
        
        .nav-menu li {
            margin: 0.5rem 0;
        }
        
        .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    }
`;

// Inject mobile styles
const styleSheet = document.createElement('style');
styleSheet.textContent = mobileStyles;
document.head.appendChild(styleSheet);

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Analytics tracking
function trackPageView() {
    // Google Analytics 4 tracking
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: document.title,
            page_location: window.location.href
        });
    }
}

// Track page views
document.addEventListener('DOMContentLoaded', trackPageView);

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    // You can send errors to your analytics service here
});

// Performance monitoring
window.addEventListener('load', function() {
    if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
    }
}); 