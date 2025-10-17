import React from 'react';

const PropertySearchFallback: React.FC = () => {
  return (
    <div className="property-search-fallback">
      <div className="text-center p-8 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Las Vegas Real Estate Search
        </h3>
        <p className="text-gray-600 mb-6">
          Property listings are temporarily unavailable. Please contact Dr. Janet Duffy for assistance.
        </p>
        <div className="space-y-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Agent
          </button>
          <div className="text-sm text-gray-500">
            <p>Phone: (702) 500-0607</p>
            <p>Email: janet@lasvegasrealestate.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySearchFallback;
