// Search Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeSearchWidget();
    initializeQuickFilters();
    loadFeaturedListings();
});

// Initialize RealScout Search Widget
function initializeSearchWidget() {
    const searchContainer = document.getElementById('realscout-search-widget');
    
    if (searchContainer) {
        // Create RealScout search widget
        const searchWidget = document.createElement('realscout-advanced-search');
        searchWidget.setAttribute('agent-id', '225050'); // Your RealScout Agent ID
        searchWidget.setAttribute('theme', 'light');
        searchWidget.setAttribute('show-filters', 'true');
        
        searchContainer.appendChild(searchWidget);
    }
}

// Initialize Quick Search Filters
function initializeQuickFilters() {
    const filters = document.querySelectorAll('.quick-filters select');
    
    filters.forEach(filter => {
        filter.addEventListener('change', function() {
            updateSearchResults();
        });
    });
}

// Update search results based on filters
function updateSearchResults() {
    const priceFilter = document.querySelector('.filter:nth-child(1) select').value;
    const bedroomFilter = document.querySelector('.filter:nth-child(2) select').value;
    const bathroomFilter = document.querySelector('.filter:nth-child(3) select').value;
    
    // Here you would typically make an API call to get filtered results
    console.log('Filters changed:', { priceFilter, bedroomFilter, bathroomFilter });
    
    // For demo purposes, show a message
    showFilterMessage(`Showing results for: ${priceFilter}, ${bedroomFilter} bedrooms, ${bathroomFilter} bathrooms`);
}

// Show filter message
function showFilterMessage(message) {
    let messageElement = document.querySelector('.filter-message');
    
    if (!messageElement) {
        messageElement = document.createElement('div');
        messageElement.className = 'filter-message';
        messageElement.style.cssText = `
            background-color: #3A8DDE;
            color: white;
            padding: 1rem;
            border-radius: 6px;
            margin: 1rem 0;
            text-align: center;
        `;
        
        const searchWidget = document.querySelector('.search-widget .container');
        searchWidget.appendChild(messageElement);
    }
    
    messageElement.textContent = message;
    
    // Remove message after 3 seconds
    setTimeout(() => {
        messageElement.remove();
    }, 3000);
}

// Load featured listings
function loadFeaturedListings() {
    const featuredListings = [
        {
            id: 1,
            address: '123 Vistas Way',
            price: '$850,000',
            beds: 4,
            baths: 3,
            sqft: 2800,
            image: '../assets/images/listing-1.jpg'
        },
        {
            id: 2,
            address: '456 Summerlin Blvd',
            price: '$750,000',
            beds: 3,
            baths: 2,
            sqft: 2200,
            image: '../assets/images/listing-2.jpg'
        },
        {
            id: 3,
            address: '789 Vista Circle',
            price: '$1,200,000',
            beds: 5,
            baths: 4,
            sqft: 3500,
            image: '../assets/images/listing-3.jpg'
        }
    ];
    
    // Create featured listings section
    const featuredSection = document.createElement('section');
    featuredSection.className = 'featured-listings';
    featuredSection.innerHTML = `
        <div class="container">
            <h2>Featured Listings</h2>
            <div class="listings-grid">
                ${featuredListings.map(listing => `
                    <div class="listing-card">
                        <div class="listing-image">
                            <img src="${listing.image}" alt="${listing.address}" loading="lazy">
                        </div>
                        <div class="listing-details">
                            <h3>${listing.address}</h3>
                            <p class="price">${listing.price}</p>
                            <p class="details">${listing.beds} beds • ${listing.baths} baths • ${listing.sqft} sqft</p>
                            <a href="#" class="btn btn-primary">View Details</a>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Add featured listings after the quick filters section
    const quickFiltersSection = document.querySelector('.quick-filters');
    if (quickFiltersSection) {
        quickFiltersSection.parentNode.insertBefore(featuredSection, quickFiltersSection.nextSibling);
    }
}

// Add CSS for featured listings
const featuredListingsCSS = `
    .featured-listings {
        background-color: #F7F9FC;
        padding: 3rem 0;
    }
    
    .listings-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
    }
    
    .listing-card {
        background-color: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        transition: transform 0.3s ease;
    }
    
    .listing-card:hover {
        transform: translateY(-4px);
    }
    
    .listing-image {
        height: 200px;
        overflow: hidden;
    }
    
    .listing-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .listing-details {
        padding: 1.5rem;
    }
    
    .listing-details h3 {
        margin-bottom: 0.5rem;
        color: #0A2540;
    }
    
    .price {
        font-size: 1.5rem;
        font-weight: 600;
        color: #3A8DDE;
        margin-bottom: 0.5rem;
    }
    
    .details {
        color: #666;
        margin-bottom: 1rem;
    }
    
    @media (max-width: 768px) {
        .listings-grid {
            grid-template-columns: 1fr;
        }
    }
`;

// Inject featured listings CSS
const featuredStyleSheet = document.createElement('style');
featuredStyleSheet.textContent = featuredListingsCSS;
document.head.appendChild(featuredStyleSheet);

// Search analytics tracking
function trackSearchEvent(searchType, filters) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'search', {
            search_term: searchType,
            custom_parameters: filters
        });
    }
}

// Track when users interact with search filters
document.addEventListener('DOMContentLoaded', function() {
    const filterSelects = document.querySelectorAll('.quick-filters select');
    
    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            trackSearchEvent('quick_filter', {
                filter_type: this.previousElementSibling.textContent,
                filter_value: this.value
            });
        });
    });
}); 