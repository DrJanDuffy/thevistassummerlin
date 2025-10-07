import React from 'react';

interface RealScoutListingsProps {
  agentEncodedId?: string;
  sortOrder?: 'PRICE_LOW' | 'PRICE_HIGH' | 'NEWEST' | 'OLDEST';
  listingStatus?: 'For Sale' | 'Sold' | 'Pending';
  propertyTypes?: string;
  priceMin?: string;
  priceMax?: string;
  className?: string;
  title?: string;
  description?: string;
  showTitle?: boolean;
}

export default function RealScoutListings({
  agentEncodedId = "QWdlbnQtMjI1MDUw",
  sortOrder = "PRICE_LOW",
  listingStatus = "For Sale",
  propertyTypes = ",SFR,OTHER",
  priceMin = "500000",
  priceMax = "600000",
  className = "",
  title = "Current Luxury Homes for Sale in The Vistas Summerlin",
  description = "Discover our curated selection of luxury homes in The Vistas Summerlin. Each property offers exceptional value with premium amenities, mountain views, and access to world-class community features.",
  showTitle = true
}: RealScoutListingsProps) {
  return (
    <section className={`py-16 bg-gradient-to-br from-blue-50 to-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>
        )}
        
        {/* RealScout Widget Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              🏡 Live Property Search Results
            </h3>
            <p className="text-gray-600">
              Browse our current inventory of luxury homes in The Vistas Summerlin
            </p>
          </div>
          
          {/* RealScout Custom Element */}
          <realscout-office-listings
            agent-encoded-id={agentEncodedId}
            sort-order={sortOrder}
            listing-status={listingStatus}
            property-types={propertyTypes}
            price-min={priceMin}
            price-max={priceMax}
            className="w-full"
          />
          
          {/* Additional CTA */}
          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-600 mb-4">
              Don't see what you're looking for? Let us help you find your perfect home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17025000607"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                📞 Call Dr. Jan Duffy
              </a>
              <a
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                💬 Get Personalized Help
              </a>
            </div>
          </div>
        </div>
        
        {/* SEO Content */}
        <div className="mt-12 prose prose-lg max-w-none text-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why Choose The Vistas Summerlin for Your Next Home?
          </h3>
          <p className="mb-6">
            The Vistas Summerlin represents the pinnacle of luxury real estate in Las Vegas. 
            Our curated selection of homes offers exceptional value with features like mountain views, 
            golf course access, and proximity to world-class amenities. Each property in our inventory 
            has been carefully selected to meet the highest standards of luxury living.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">🏔️ Mountain Views</h4>
              <p className="text-gray-600">
                Many homes in The Vistas offer breathtaking views of the Las Vegas Strip and surrounding mountains.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">🏌️ Golf Access</h4>
              <p className="text-gray-600">
                Enjoy access to TPC Summerlin golf course and other premier golf facilities in the area.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">🏫 Top Schools</h4>
              <p className="text-gray-600">
                Located near Palo Verde High School, Sig Rogich Middle School, and Ernest May Elementary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
