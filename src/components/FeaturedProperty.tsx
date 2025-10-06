import React from 'react';
import Link from 'next/link';
import { MapPin, Bed, Bath, Square, Calendar, DollarSign, Car, Home, ArrowRight } from 'lucide-react';

export function FeaturedProperty() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 text-blue-800 font-medium mb-6">
            <Home className="w-4 h-4" />
            <span>Featured Property</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Golden Moments Avenue
            <span className="block text-blue-600">Move-In Ready Luxury</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover this exceptional 4-bedroom, 3-bath home in The Vistas Summerlin. 
            Two spacious primary suites and a modern chef's kitchen await.
          </p>
        </div>

        {/* Property Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0">
            
            {/* Property Image */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 flex items-center justify-center">
              <div className="text-center text-white">
                <Home className="w-20 h-20 mx-auto mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-2">11773 Golden Moments Avenue</h3>
                <p className="text-blue-100">Professional photos coming soon</p>
              </div>
            </div>
            
            {/* Property Details */}
            <div className="p-8 lg:p-12">
              
              {/* Price */}
              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">$738,700</div>
                <div className="text-lg text-gray-600">$303 per sqft</div>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Bed className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold">4 Bedrooms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Bath className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold">3 Bathrooms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Square className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold">2,436 Sq Ft</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Car className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold">2-Car Garage</span>
                </div>
              </div>
              
              {/* Highlights */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Two spacious primary suites</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Modern chef's kitchen</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Huge landscaped yard</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Gas fireplace in living room</span>
                  </li>
                </ul>
              </div>
              
              {/* Location & MLS */}
              <div className="mb-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>Canterra At The Vistas, Summerlin</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>MLS #2722090 • Listed Sep 24, 2025</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://drjanduffy.realscout.com/homesearch/listings/p-11773-golden-moments-avenue-las-vegas-89138-glvartrestle-139" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center space-x-2"
                >
                  <span>View Full Listing</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="tel:+1702XXX" 
                  className="flex-1 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center"
                >
                  Call Jan Duffy
                </a>
              </div>
              
              {/* Open House Notice */}
              <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 text-green-800">
                  <Calendar className="w-4 h-4" />
                  <span className="font-semibold">Open House: Thursday, Oct 9th • 3:00-6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Looking for other properties in The Vistas Summerlin?
          </p>
          <Link 
            href="/properties"
            className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
          >
            <span>View All Properties</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
