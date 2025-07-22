// Market Analysis Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    loadMarketData();
    initializeCharts();
    addMarketAnalysisStyles();
    initializeMarketInteractions();
    trackPageAnalytics();
});

// Enhanced market data with comprehensive statistics
function loadMarketData() {
    const marketData = {
        // Current market statistics
        medianPrice: 875000,
        daysOnMarket: 45,
        homesSold: 156,
        inventory: 89,
        
        // Price trends
        priceChange: 5.2,
        priceChangeType: 'positive',
        
        // Sales activity
        salesChange: 8.3,
        salesChangeType: 'positive',
        
        // Inventory trends
        inventoryChange: -15,
        inventoryChangeType: 'negative',
        
        // Market performance
        priceAppreciation: 5.8,
        rentalGrowth: 5.1,
        marketActivity: 'Excellent',
        
        // Quarterly trends
        quarterlyTrends: [
            { period: 'Q1 2024', price: 850000, sales: 42, days: 52 },
            { period: 'Q2 2024', price: 865000, sales: 38, days: 48 },
            { period: 'Q3 2024', price: 875000, sales: 45, days: 45 },
            { period: 'Q4 2024', price: 890000, sales: 31, days: 42 }
        ],
        
        // Market insights
        insights: [
            'Strong buyer demand',
            'Limited inventory driving prices',
            'High-quality properties in demand',
            'Growing investment interest'
        ]
    };
    
    // Update all market statistics displays
    updateMarketStats(marketData);
    updateQuarterlyTrends(marketData.quarterlyTrends);
    updateMarketInsights(marketData.insights);
    updatePerformanceMetrics(marketData);
}

// Update market statistics display
function updateMarketStats(data) {
    // Update hero stats
    const heroStats = document.querySelectorAll('.hero-stat .stat-value');
    if (heroStats.length >= 4) {
        heroStats[0].textContent = `$${data.medianPrice.toLocaleString()}`;
        heroStats[1].textContent = data.daysOnMarket;
        heroStats[2].textContent = data.homesSold;
        heroStats[3].textContent = data.inventory;
    }
    
    // Update market stat cards
    const statCards = document.querySelectorAll('.market-stat-card .stat-value');
    if (statCards.length >= 4) {
        statCards[0].textContent = `$${data.medianPrice.toLocaleString()}`;
        statCards[1].textContent = data.daysOnMarket;
        statCards[2].textContent = data.homesSold;
        statCards[3].textContent = data.inventory;
    }
    
    // Update change indicators
    updateChangeIndicators(data);
}

// Update change indicators with proper styling
function updateChangeIndicators(data) {
    const changes = document.querySelectorAll('.stat-change');
    changes.forEach((change, index) => {
        switch(index) {
            case 0: // Median Price
                change.textContent = `${data.priceChange > 0 ? '+' : ''}${data.priceChange}%`;
                change.className = `stat-change ${data.priceChangeType}`;
                break;
            case 1: // Days on Market
                change.textContent = `${data.daysOnMarket > 0 ? '+' : ''}${data.daysOnMarket}%`;
                change.className = `stat-change ${data.daysOnMarket > 0 ? 'negative' : 'positive'}`;
                break;
            case 2: // Homes Sold
                change.textContent = `${data.salesChange > 0 ? '+' : ''}${data.salesChange}%`;
                change.className = `stat-change ${data.salesChangeType}`;
                break;
            case 3: // Inventory
                change.textContent = `${data.inventoryChange > 0 ? '+' : ''}${data.inventoryChange}%`;
                change.className = `stat-change ${data.inventoryChangeType}`;
                break;
        }
    });
}

// Update quarterly trends in chart placeholders
function updateQuarterlyTrends(trends) {
    const priceChart = document.getElementById('price-trends-chart');
    const salesChart = document.getElementById('sales-activity-chart');
    
    if (priceChart) {
        const priceData = priceChart.querySelector('.chart-data');
        if (priceData) {
            priceData.innerHTML = trends.map(trend => `
                <div class="data-point">
                    <span class="period">${trend.period}</span>
                    <span class="value">$${(trend.price / 1000).toFixed(0)}K</span>
                </div>
            `).join('');
        }
    }
    
    if (salesChart) {
        const salesData = salesChart.querySelector('.chart-data');
        if (salesData) {
            salesData.innerHTML = trends.map(trend => `
                <div class="data-point">
                    <span class="period">${trend.period}</span>
                    <span class="value">${trend.sales} sales</span>
                    <span class="sub-value">${trend.days} days avg</span>
                </div>
            `).join('');
        }
    }
}

// Update market insights
function updateMarketInsights(insights) {
    const indicators = document.querySelectorAll('.indicator span');
    insights.forEach((insight, index) => {
        if (indicators[index]) {
            indicators[index].textContent = insight;
        }
    });
}

// Update performance metrics
function updatePerformanceMetrics(data) {
    const metrics = document.querySelectorAll('.metric-value');
    if (metrics.length >= 3) {
        metrics[0].textContent = `+${data.priceAppreciation}%`;
        metrics[1].textContent = `+${data.rentalGrowth}%`;
        metrics[2].textContent = data.marketActivity;
    }
}

// Initialize interactive charts (placeholder for future chart library integration)
function initializeCharts() {
    console.log('Charts initialized - ready for Chart.js or similar library integration');
    
    // Add click handlers for chart placeholders
    const chartPlaceholders = document.querySelectorAll('.chart-placeholder');
    chartPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            showChartUpgradeMessage();
        });
    });
}

// Show message about chart upgrade
function showChartUpgradeMessage() {
    const message = document.createElement('div');
    message.className = 'chart-upgrade-message';
    message.innerHTML = `
        <div class="upgrade-content">
            <h4>Interactive Charts Coming Soon!</h4>
            <p>We're working on adding interactive charts with Chart.js integration for better data visualization.</p>
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

// Initialize market interactions
function initializeMarketInteractions() {
    // Add hover effects for trend cards
    const trendCards = document.querySelectorAll('.trend-card');
    trendCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click handlers for CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-buttons .btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            trackMarketAnalysisEvent('cta_click', {
                button_text: this.textContent,
                button_type: this.classList.contains('btn-primary') ? 'primary' : 'secondary'
            });
        });
    });
    
    // Add click handlers for article links
    const articleLinks = document.querySelectorAll('.article-link');
    articleLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            trackMarketAnalysisEvent('article_click', {
                article_title: this.closest('.article-card').querySelector('h3').textContent
            });
            // In a real implementation, this would navigate to the article
            alert('Article page coming soon!');
        });
    });
}

// Enhanced market analysis specific styles
function addMarketAnalysisStyles() {
    const marketAnalysisCSS = `
        .chart-upgrade-message .upgrade-content h4 {
            color: #0A2540;
            margin-bottom: 1rem;
        }
        
        .chart-upgrade-message .upgrade-content p {
            color: #666;
            margin-bottom: 1.5rem;
            line-height: 1.5;
        }
        
        .chart-upgrade-message .upgrade-content button {
            background: #3A8DDE;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            transition: background 0.3s ease;
        }
        
        .chart-upgrade-message .upgrade-content button:hover {
            background: #0A2540;
        }
        
        .market-chart {
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .market-chart:hover {
            border-color: #16B286;
            background: #F0F8F5;
        }
        
        .data-point {
            transition: transform 0.3s ease;
        }
        
        .data-point:hover {
            transform: scale(1.05);
        }
        
        .trend-card {
            cursor: pointer;
        }
        
        .market-stat-card {
            cursor: default;
        }
        
        .article-card {
            cursor: pointer;
        }
        
        /* Animation for stat cards */
        .market-stat-card {
            animation: fadeInUp 0.6s ease forwards;
            opacity: 0;
            transform: translateY(20px);
        }
        
        .market-stat-card:nth-child(1) { animation-delay: 0.1s; }
        .market-stat-card:nth-child(2) { animation-delay: 0.2s; }
        .market-stat-card:nth-child(3) { animation-delay: 0.3s; }
        .market-stat-card:nth-child(4) { animation-delay: 0.4s; }
        
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        /* Loading animation for charts */
        .chart-placeholder {
            position: relative;
        }
        
        .chart-placeholder::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            animation: loading 1.5s infinite;
        }
        
        @keyframes loading {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = marketAnalysisCSS;
    document.head.appendChild(styleSheet);
}

// Track market analysis interactions
function trackMarketAnalysisEvent(eventType, details) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventType, {
            custom_parameters: details,
            page_title: 'Market Analysis',
            page_location: window.location.href
        });
    }
    
    // Also log to console for development
    console.log('Market Analysis Event:', eventType, details);
}

// Track page analytics
function trackPageAnalytics() {
    // Track page view
    trackMarketAnalysisEvent('page_view', {
        page_title: 'Market Analysis',
        page_type: 'market_analysis'
    });
    
    // Track when users view market data sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                trackMarketAnalysisEvent('section_view', {
                    section: entry.target.className,
                    section_title: entry.target.querySelector('h2, h3')?.textContent || 'Unknown'
                });
            }
        });
    });
    
    // Observe all major sections
    const sections = document.querySelectorAll('.market-stats-section, .charts-section, .market-insights, .market-trends-analysis, .cta-section, .market-insights-articles');
    sections.forEach(section => observer.observe(section));
    
    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            if (maxScroll % 25 === 0) { // Track at 25%, 50%, 75%, 100%
                trackMarketAnalysisEvent('scroll_depth', {
                    depth: maxScroll
                });
            }
        }
    });
}

// Export functions for potential external use
window.MarketAnalysis = {
    loadMarketData,
    updateMarketStats,
    initializeCharts,
    trackMarketAnalysisEvent
}; 