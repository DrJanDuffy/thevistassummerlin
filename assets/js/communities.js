// Communities Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    loadCommunities();
    initializeSearchAndFilters();
    initializeMapIntegration();
    initializeCategoryFilters();
    initializePagination();
    initializeComparison();
    addCommunitiesStyles();
    trackPageAnalytics();
});

// All 28 subcommunities data from Next.js project
const allCommunities = [
    {
        id: 'santaluz',
        name: 'Santaluz',
        description: 'Luxury homes with mountain views and resort-style amenities',
        priceRange: '$800K - $2.5M',
        homesAvailable: 12,
        image: '/subcommunities/Santaluz.jpg',
        features: ['Mountain Views', 'Resort Pool', 'Golf Course', 'Hiking Trails'],
        category: 'Luxury'
    },
    {
        id: 'red-rock',
        name: 'Red Rock Canyon',
        description: 'Stunning homes with panoramic views of the iconic Red Rock Canyon',
        priceRange: '$650K - $1.8M',
        homesAvailable: 8,
        image: '/subcommunities/IMG_0737.JPG',
        features: ['Canyon Views', 'Private Patios', 'Modern Design', 'Community Center'],
        category: 'Premium'
    },
    {
        id: 'summerlin-park',
        name: 'Summerlin Park',
        description: 'Family-friendly community with parks, schools, and shopping nearby',
        priceRange: '$525K - $1.2M',
        homesAvailable: 25,
        image: '/subcommunities/IMG_0738.JPG',
        features: ['Parks & Playgrounds', 'Top Schools', 'Shopping Center', 'Walking Trails'],
        category: 'Family'
    },
    {
        id: 'vista-heights',
        name: 'Vista Heights',
        description: 'Elevated living with spectacular city and mountain vistas',
        priceRange: '$750K - $1.5M',
        homesAvailable: 15,
        image: '/subcommunities/IMG_0739.JPG',
        features: ['City Views', 'Rooftop Decks', 'Modern Architecture', 'Fitness Center'],
        category: 'Premium'
    },
    {
        id: 'canyon-ridge',
        name: 'Canyon Ridge',
        description: 'Secluded homes nestled against the canyon walls',
        priceRange: '$900K - $2.2M',
        homesAvailable: 6,
        image: '/subcommunities/IMG_0737.JPG',
        features: ['Canyon Proximity', 'Privacy', 'Natural Landscaping', 'Hiking Access'],
        category: 'Luxury'
    },
    {
        id: 'meadowbrook',
        name: 'Meadowbrook',
        description: 'Charming homes surrounded by open meadows and green spaces',
        priceRange: '$600K - $1.1M',
        homesAvailable: 18,
        image: '/subcommunities/IMG_0738.JPG',
        features: ['Open Spaces', 'Community Gardens', 'Playgrounds', 'Walking Paths'],
        category: 'Family'
    },
    {
        id: 'sunset-vista',
        name: 'Sunset Vista',
        description: 'Homes designed to capture the perfect sunset views',
        priceRange: '$700K - $1.6M',
        homesAvailable: 10,
        image: '/subcommunities/IMG_0739.JPG',
        features: ['Sunset Views', 'Outdoor Living', 'Pool Access', 'BBQ Areas'],
        category: 'Premium'
    },
    {
        id: 'oak-grove',
        name: 'Oak Grove',
        description: 'Mature trees and established landscaping create a peaceful atmosphere',
        priceRange: '$550K - $1.3M',
        homesAvailable: 22,
        image: '/subcommunities/IMG_0737.JPG',
        features: ['Mature Trees', 'Established Gardens', 'Community Events', 'Neighborly Feel'],
        category: 'Family'
    },
    {
        id: 'eagle-point',
        name: 'Eagle Point',
        description: 'Perched high with commanding views of the valley below',
        priceRange: '$850K - $2.1M',
        homesAvailable: 9,
        image: '/subcommunities/IMG_0738.JPG',
        features: ['Valley Views', 'Elevated Position', 'Privacy', 'Luxury Finishes'],
        category: 'Luxury'
    },
    {
        id: 'willow-creek',
        name: 'Willow Creek',
        description: 'Waterfront-inspired homes with lush landscaping',
        priceRange: '$650K - $1.4M',
        homesAvailable: 14,
        image: '/subcommunities/IMG_0739.JPG',
        features: ['Water Features', 'Lush Landscaping', 'Community Pool', 'Walking Trails'],
        category: 'Premium'
    },
    {
        id: 'pine-ridge',
        name: 'Pine Ridge',
        description: 'Mountain-inspired homes with rustic charm and modern amenities',
        priceRange: '$600K - $1.5M',
        homesAvailable: 16,
        image: '/subcommunities/IMG_0737.JPG',
        features: ['Mountain Style', 'Rustic Charm', 'Modern Amenities', 'Community Lodge'],
        category: 'Premium'
    },
    {
        id: 'maple-woods',
        name: 'Maple Woods',
        description: 'Family-oriented community with excellent schools and parks',
        priceRange: '$500K - $1.1M',
        homesAvailable: 28,
        image: '/subcommunities/IMG_0738.JPG',
        features: ['Top Schools', 'Parks', 'Family Events', 'Safe Environment'],
        category: 'Family'
    },
    {
        id: 'cedar-heights',
        name: 'Cedar Heights',
        description: 'Elevated homes with privacy and spectacular views',
        priceRange: '$750K - $1.8M',
        homesAvailable: 11,
        image: '/subcommunities/IMG_0739.JPG',
        features: ['Privacy', 'Spectacular Views', 'Custom Homes', 'Gated Access'],
        category: 'Luxury'
    },
    {
        id: 'birch-grove',
        name: 'Birch Grove',
        description: 'Contemporary homes with clean lines and modern design',
        priceRange: '$650K - $1.3M',
        homesAvailable: 19,
        image: '/subcommunities/IMG_0737.JPG',
        features: ['Modern Design', 'Clean Lines', 'Smart Homes', 'Community Gym'],
        category: 'Premium'
    },
    {
        id: 'aspen-meadows',
        name: 'Aspen Meadows',
        description: 'Open spaces and natural beauty define this peaceful community',
        priceRange: '$575K - $1.2M',
        homesAvailable: 20,
        image: '/subcommunities/IMG_0738.JPG',
        features: ['Open Spaces', 'Natural Beauty', 'Peaceful Atmosphere', 'Community Events'],
        category: 'Family'
    },
    {
        id: 'spruce-pine',
        name: 'Spruce Pine',
        description: 'Mountain retreat atmosphere with luxury amenities',
        priceRange: '$800K - $1.9M',
        homesAvailable: 8,
        image: '/subcommunities/IMG_0739.JPG',
        features: ['Mountain Retreat', 'Luxury Amenities', 'Spa Access', 'Fine Dining'],
        category: 'Luxury'
    },
    {
        id: 'juniper-hills',
        name: 'Juniper Hills',
        description: 'Rolling hills and natural landscapes create a serene environment',
        priceRange: '$700K - $1.6M',
        homesAvailable: 12,
        image: '/subcommunities/IMG_0737.JPG',
        features: ['Rolling Hills', 'Natural Landscapes', 'Serene Environment', 'Hiking Trails'],
        category: 'Premium'
    },
    {
        id: 'cypress-court',
        name: 'Cypress Court',
        description: 'Elegant homes with sophisticated design and upscale amenities',
        priceRange: '$750K - $2.0M',
        homesAvailable: 7,
        image: '/subcommunities/IMG_0738.JPG',
        features: ['Elegant Design', 'Upscale Amenities', 'Concierge Service', 'Private Pool'],
        category: 'Luxury'
    },
    {
        id: 'magnolia-gardens',
        name: 'Magnolia Gardens',
        description: 'Beautiful gardens and landscaping throughout the community',
        priceRange: '$600K - $1.4M',
        homesAvailable: 17,
        image: '/subcommunities/IMG_0739.JPG',
        features: ['Beautiful Gardens', 'Landscaping', 'Garden Tours', 'Community Events'],
        category: 'Premium'
    },
    {
        id: 'dogwood-lane',
        name: 'Dogwood Lane',
        description: 'Charming homes with character and community spirit',
        priceRange: '$550K - $1.2M',
        homesAvailable: 23,
        image: '/subcommunities/IMG_0737.JPG',
        features: ['Charming Homes', 'Community Spirit', 'Neighborhood Events', 'Friendly Atmosphere'],
        category: 'Family'
    },
    {
        id: 'cherry-blossom',
        name: 'Cherry Blossom',
        description: 'Spring beauty and seasonal charm in every home',
        priceRange: '$650K - $1.5M',
        homesAvailable: 15,
        image: '/subcommunities/IMG_0738.JPG',
        features: ['Seasonal Beauty', 'Spring Blooms', 'Community Gardens', 'Outdoor Living'],
        category: 'Premium'
    },
    {
        id: 'rose-garden',
        name: 'Rose Garden',
        description: 'Romantic setting with beautiful rose gardens and intimate spaces',
        priceRange: '$700K - $1.7M',
        homesAvailable: 9,
        image: '/subcommunities/IMG_0739.JPG',
        features: ['Rose Gardens', 'Romantic Setting', 'Intimate Spaces', 'Garden Parties'],
        category: 'Premium'
    },
    {
        id: 'lily-pond',
        name: 'Lily Pond',
        description: 'Waterfront-inspired homes with peaceful pond views',
        priceRange: '$750K - $1.8M',
        homesAvailable: 6,
        image: '/subcommunities/IMG_0737.JPG',
        features: ['Pond Views', 'Waterfront Living', 'Peaceful Atmosphere', 'Wildlife Watching'],
        category: 'Luxury'
    },
    {
        id: 'iris-meadows',
        name: 'Iris Meadows',
        description: 'Wildflower meadows and natural beauty in every direction',
        priceRange: '$600K - $1.3M',
        homesAvailable: 18,
        image: '/subcommunities/IMG_0738.JPG',
        features: ['Wildflower Meadows', 'Natural Beauty', 'Hiking Trails', 'Nature Walks'],
        category: 'Premium'
    },
    {
        id: 'tulip-court',
        name: 'Tulip Court',
        description: 'Colorful gardens and vibrant community life',
        priceRange: '$575K - $1.2M',
        homesAvailable: 21,
        image: '/subcommunities/IMG_0739.JPG',
        features: ['Colorful Gardens', 'Vibrant Community', 'Seasonal Events', 'Family Activities'],
        category: 'Family'
    },
    {
        id: 'daffodil-hill',
        name: 'Daffodil Hill',
        description: 'Elevated homes with spring blooms and mountain views',
        priceRange: '$700K - $1.6M',
        homesAvailable: 13,
        image: '/subcommunities/IMG_0737.JPG',
        features: ['Spring Blooms', 'Mountain Views', 'Elevated Position', 'Seasonal Beauty'],
        category: 'Premium'
    },
    {
        id: 'sunflower-fields',
        name: 'Sunflower Fields',
        description: 'Open fields and sunny disposition in this cheerful community',
        priceRange: '$550K - $1.1M',
        homesAvailable: 24,
        image: '/subcommunities/IMG_0738.JPG',
        features: ['Open Fields', 'Sunny Disposition', 'Cheerful Community', 'Outdoor Activities'],
        category: 'Family'
    },
    {
        id: 'lavender-lane',
        name: 'Lavender Lane',
        description: 'Aromatic gardens and peaceful atmosphere',
        priceRange: '$650K - $1.4M',
        homesAvailable: 16,
        image: '/subcommunities/IMG_0739.JPG',
        features: ['Aromatic Gardens', 'Peaceful Atmosphere', 'Meditation Spaces', 'Wellness Focus'],
        category: 'Premium'
    }
];

// Global variables for filtering and pagination
let filteredCommunities = [...allCommunities];
let currentPage = 1;
const communitiesPerPage = 9;

// Load communities and populate grid
function loadCommunities() {
    populateCommunitiesGrid(filteredCommunities);
    populateComparisonSelects();
    updateResultsCount();
}

// Populate communities grid with cards
function populateCommunitiesGrid(communities) {
    const grid = document.getElementById('communities-grid');
    if (!grid) return;

    const startIndex = (currentPage - 1) * communitiesPerPage;
    const endIndex = startIndex + communitiesPerPage;
    const pageCommunities = communities.slice(startIndex, endIndex);

    grid.innerHTML = pageCommunities.map(community => `
        <div class="community-card" data-category="${community.category.toLowerCase()}" data-id="${community.id}">
            <div class="community-image">
                <div class="community-badge">${community.homesAvailable} homes</div>
                🏠
            </div>
            <div class="community-content">
                <div class="community-header">
                    <div>
                        <div class="community-name">${community.name}</div>
                    </div>
                    <div class="community-category">${community.category}</div>
                </div>
                <div class="community-description">${community.description}</div>
                <div class="community-details">
                    <div class="community-price">${community.priceRange}</div>
                    <div class="community-availability">${community.homesAvailable} homes available</div>
                </div>
                <div class="community-features">
                    ${community.features.slice(0, 3).map(feature => 
                        `<span class="feature-tag">${feature}</span>`
                    ).join('')}
                </div>
                <div class="community-actions">
                    <a href="../pages/search.html?community=${community.id}" class="btn btn-primary">View Homes</a>
                    <a href="#" class="btn btn-secondary" onclick="showCommunityDetails('${community.id}')">Learn More</a>
                </div>
            </div>
        </div>
    `).join('');

    updatePagination(communities.length);
}

// Initialize search and filter functionality
function initializeSearchAndFilters() {
    const searchInput = document.getElementById('community-search');
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const availabilityFilter = document.getElementById('availability-filter');
    const clearFiltersBtn = document.getElementById('clear-filters');

    // Search functionality
    searchInput.addEventListener('input', function() {
        applyFilters();
    });

    // Filter functionality
    categoryFilter.addEventListener('change', applyFilters);
    priceFilter.addEventListener('change', applyFilters);
    availabilityFilter.addEventListener('change', applyFilters);

    // Clear filters
    clearFiltersBtn.addEventListener('click', function() {
        searchInput.value = '';
        categoryFilter.value = 'all';
        priceFilter.value = 'all';
        availabilityFilter.value = 'all';
        applyFilters();
    });
}

// Apply all filters
function applyFilters() {
    const searchTerm = document.getElementById('community-search').value.toLowerCase();
    const categoryFilter = document.getElementById('category-filter').value;
    const priceFilter = document.getElementById('price-filter').value;
    const availabilityFilter = document.getElementById('availability-filter').value;

    filteredCommunities = allCommunities.filter(community => {
        // Search filter
        const matchesSearch = community.name.toLowerCase().includes(searchTerm) ||
                            community.description.toLowerCase().includes(searchTerm) ||
                            community.features.some(feature => feature.toLowerCase().includes(searchTerm));

        // Category filter
        const matchesCategory = categoryFilter === 'all' || community.category === categoryFilter;

        // Price filter
        let matchesPrice = true;
        if (priceFilter !== 'all') {
            const priceRange = community.priceRange;
            const minPrice = parseInt(priceRange.match(/\$(\d+)K/)[1]) * 1000;
            
            switch(priceFilter) {
                case '500k-750k':
                    matchesPrice = minPrice >= 500000 && minPrice <= 750000;
                    break;
                case '750k-1m':
                    matchesPrice = minPrice >= 750000 && minPrice <= 1000000;
                    break;
                case '1m-1.5m':
                    matchesPrice = minPrice >= 1000000 && minPrice <= 1500000;
                    break;
                case '1.5m+':
                    matchesPrice = minPrice >= 1500000;
                    break;
            }
        }

        // Availability filter
        let matchesAvailability = true;
        if (availabilityFilter !== 'all') {
            switch(availabilityFilter) {
                case 'high':
                    matchesAvailability = community.homesAvailable >= 15;
                    break;
                case 'medium':
                    matchesAvailability = community.homesAvailable >= 8 && community.homesAvailable <= 14;
                    break;
                case 'low':
                    matchesAvailability = community.homesAvailable <= 7;
                    break;
            }
        }

        return matchesSearch && matchesCategory && matchesPrice && matchesAvailability;
    });

    currentPage = 1;
    populateCommunitiesGrid(filteredCommunities);
    updateResultsCount();
}

// Update results count
function updateResultsCount() {
    const resultsCount = document.getElementById('results-count');
    if (resultsCount) {
        resultsCount.textContent = `Showing ${filteredCommunities.length} of ${allCommunities.length} communities`;
    }
}

// Initialize map integration
function initializeMapIntegration() {
    const mapToggleBtn = document.getElementById('toggle-map');
    const mapPlaceholder = document.getElementById('communities-map');

    if (mapToggleBtn && mapPlaceholder) {
        mapToggleBtn.addEventListener('click', function() {
            showMapUpgradeMessage();
        });

        mapPlaceholder.addEventListener('click', function() {
            showMapUpgradeMessage();
        });
    }
}

// Show map upgrade message
function showMapUpgradeMessage() {
    const message = document.createElement('div');
    message.className = 'map-upgrade-message';
    message.innerHTML = `
        <div class="upgrade-content">
            <h4>Interactive Map Coming Soon!</h4>
            <p>We're working on adding an interactive map with community locations, property boundaries, and clickable points for detailed information.</p>
            <button onclick="this.parentElement.parentElement.remove()">Got it</button>
        </div>
    `;
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 1000;
        max-width: 400px;
        text-align: center;
    `;
    document.body.appendChild(message);
}

// Initialize category filters
function initializeCategoryFilters() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Update active state
            categoryCards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            
            // Apply category filter
            document.getElementById('category-filter').value = category;
            applyFilters();
        });
    });
}

// Initialize pagination
function initializePagination() {
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');
    const pageNumbers = document.getElementById('page-numbers');

    if (prevBtn) prevBtn.addEventListener('click', () => changePage(currentPage - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => changePage(currentPage + 1));

    if (pageNumbers) {
        pageNumbers.addEventListener('click', function(e) {
            if (e.target.classList.contains('page-number')) {
                const page = parseInt(e.target.textContent);
                changePage(page);
            }
        });
    }
}

// Change page
function changePage(page) {
    const totalPages = Math.ceil(filteredCommunities.length / communitiesPerPage);
    if (page < 1 || page > totalPages) return;

    currentPage = page;
    populateCommunitiesGrid(filteredCommunities);
    updatePagination(filteredCommunities.length);
}

// Update pagination controls
function updatePagination(totalCommunities) {
    const totalPages = Math.ceil(totalCommunities / communitiesPerPage);
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');
    const pageNumbers = document.getElementById('page-numbers');

    if (prevBtn) prevBtn.disabled = currentPage === 1;
    if (nextBtn) nextBtn.disabled = currentPage === totalPages;

    if (pageNumbers) {
        pageNumbers.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const pageNumber = document.createElement('span');
            pageNumber.className = `page-number ${i === currentPage ? 'active' : ''}`;
            pageNumber.textContent = i;
            pageNumbers.appendChild(pageNumber);
        }
    }
}

// Initialize comparison functionality
function initializeComparison() {
    const compareBtn = document.getElementById('compare-btn');
    const compareSelects = ['compare-1', 'compare-2', 'compare-3'].map(id => document.getElementById(id));

    compareSelects.forEach(select => {
        if (select) {
            select.addEventListener('change', updateCompareButton);
        }
    });

    if (compareBtn) {
        compareBtn.addEventListener('click', showComparison);
    }
}

// Populate comparison selects
function populateComparisonSelects() {
    const compareSelects = ['compare-1', 'compare-2', 'compare-3'].map(id => document.getElementById(id));
    
    compareSelects.forEach(select => {
        if (select) {
            select.innerHTML = '<option value="">Select community...</option>';
            allCommunities.forEach(community => {
                const option = document.createElement('option');
                option.value = community.id;
                option.textContent = community.name;
                select.appendChild(option);
            });
        }
    });
}

// Update compare button state
function updateCompareButton() {
    const compareBtn = document.getElementById('compare-btn');
    const compareSelects = ['compare-1', 'compare-2', 'compare-3'].map(id => document.getElementById(id));
    
    const selectedCommunities = compareSelects
        .map(select => select.value)
        .filter(value => value !== '');
    
    if (compareBtn) {
        compareBtn.disabled = selectedCommunities.length < 2;
    }
}

// Show comparison
function showComparison() {
    const compareSelects = ['compare-1', 'compare-2', 'compare-3'].map(id => document.getElementById(id));
    const selectedCommunities = compareSelects
        .map(select => select.value)
        .filter(value => value !== '')
        .map(id => allCommunities.find(community => community.id === id))
        .filter(community => community);

    if (selectedCommunities.length < 2) return;

    const comparisonResults = document.getElementById('comparison-results');
    if (comparisonResults) {
        comparisonResults.style.display = 'block';
        comparisonResults.innerHTML = `
            <h3>Community Comparison</h3>
            <div class="comparison-table">
                <table>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            ${selectedCommunities.map(community => `<th>${community.name}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Category</td>
                            ${selectedCommunities.map(community => `<td>${community.category}</td>`).join('')}
                        </tr>
                        <tr>
                            <td>Price Range</td>
                            ${selectedCommunities.map(community => `<td>${community.priceRange}</td>`).join('')}
                        </tr>
                        <tr>
                            <td>Homes Available</td>
                            ${selectedCommunities.map(community => `<td>${community.homesAvailable}</td>`).join('')}
                        </tr>
                        <tr>
                            <td>Features</td>
                            ${selectedCommunities.map(community => `<td>${community.features.join(', ')}</td>`).join('')}
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }
}

// Show community details (placeholder for modal or new page)
function showCommunityDetails(communityId) {
    const community = allCommunities.find(c => c.id === communityId);
    if (community) {
        alert(`Detailed information for ${community.name} coming soon!`);
        // In a real implementation, this would open a modal or navigate to a detail page
    }
}

// Add communities specific styles
function addCommunitiesStyles() {
    const communitiesCSS = `
        .map-upgrade-message .upgrade-content h4 {
            color: #0A2540;
            margin-bottom: 1rem;
        }
        
        .map-upgrade-message .upgrade-content p {
            color: #666;
            margin-bottom: 1.5rem;
            line-height: 1.5;
        }
        
        .map-upgrade-message .upgrade-content button {
            background: #3A8DDE;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            transition: background 0.3s ease;
        }
        
        .map-upgrade-message .upgrade-content button:hover {
            background: #0A2540;
        }
        
        .comparison-table {
            overflow-x: auto;
            margin-top: 1rem;
        }
        
        .comparison-table table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            border-radius: 8px;
            overflow: hidden;
        }
        
        .comparison-table th,
        .comparison-table td {
            padding: 1rem;
            text-align: left;
            border-bottom: 1px solid #E5E7EB;
        }
        
        .comparison-table th {
            background: #3A8DDE;
            color: white;
            font-weight: 600;
        }
        
        .comparison-table tr:hover {
            background: #F7F9FC;
        }
        
        .community-card {
            animation: fadeInUp 0.6s ease forwards;
            opacity: 0;
            transform: translateY(20px);
        }
        
        .community-card:nth-child(1) { animation-delay: 0.1s; }
        .community-card:nth-child(2) { animation-delay: 0.2s; }
        .community-card:nth-child(3) { animation-delay: 0.3s; }
        .community-card:nth-child(4) { animation-delay: 0.4s; }
        .community-card:nth-child(5) { animation-delay: 0.5s; }
        .community-card:nth-child(6) { animation-delay: 0.6s; }
        .community-card:nth-child(7) { animation-delay: 0.7s; }
        .community-card:nth-child(8) { animation-delay: 0.8s; }
        .community-card:nth-child(9) { animation-delay: 0.9s; }
        
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .community-badge {
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = communitiesCSS;
    document.head.appendChild(styleSheet);
}

// Track page analytics
function trackPageAnalytics() {
    // Track page view
    trackCommunitiesEvent('page_view', {
        page_title: 'Communities',
        total_communities: allCommunities.length
    });
    
    // Track filter usage
    const filterElements = document.querySelectorAll('.filter-select, #community-search');
    filterElements.forEach(element => {
        element.addEventListener('change', function() {
            trackCommunitiesEvent('filter_used', {
                filter_type: this.id,
                filter_value: this.value
            });
        });
    });
    
    // Track community card clicks
    document.addEventListener('click', function(e) {
        if (e.target.closest('.community-card')) {
            const card = e.target.closest('.community-card');
            const communityId = card.dataset.id;
            const community = allCommunities.find(c => c.id === communityId);
            
            if (community) {
                trackCommunitiesEvent('community_card_click', {
                    community_name: community.name,
                    community_category: community.category
                });
            }
        }
    });
}

// Track communities events
function trackCommunitiesEvent(eventType, details) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventType, {
            custom_parameters: details,
            page_title: 'Communities',
            page_location: window.location.href
        });
    }
    
    console.log('Communities Event:', eventType, details);
}

// Export functions for potential external use
window.Communities = {
    loadCommunities,
    applyFilters,
    showCommunityDetails,
    showComparison
}; 