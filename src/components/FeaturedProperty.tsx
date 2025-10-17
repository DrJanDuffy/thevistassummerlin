import React from 'react';
import Link from 'next/link';
import { MapPin, Bed, Bath, Square, Calendar, DollarSign, Car, Home, ArrowRight, ExternalLink, Phone } from 'lucide-react';
import Image from 'next/image';

export function FeaturedProperty() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 rounded-full px-6 py-3 text-blue-800 font-medium mb-6">
            <Home className="w-5 h-5" />
            <span>Featured Property</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Golden Moments Avenue
            <span className="block text-blue-600">Move-In Ready Luxury</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover this exceptional 4-bedroom, 3-bath home in The Vistas Summerlin. 
            Two spacious primary suites and a modern chef's kitchen await your family.
          </p>
        </div>

        {/* Property Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0">
            
            {/* Property Image */}
            <div className="relative h-96 lg:h-full">
              <Image
                src="/subcommunities/IMG_0737.JPG"
                alt="11773 Golden Moments Avenue - Front exterior view"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Image Overlay Content */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl font-bold mb-2">11773 Golden Moments Avenue</h3>
                <div className="flex items-center space-x-2 text-blue-100">
                  <MapPin className="w-4 h-4" />
                  <span>The Vistas Summerlin</span>
                </div>
              </div>
              
              {/* Price Badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4">
                <div className="text-3xl font-bold text-gray-900">$738,700</div>
                <div className="text-sm text-gray-600">$303/sqft</div>
              </div>
            </div>
            
            {/* Property Details */}
            <div className="p-8 lg:p-12">
              
              {/* Key Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-blue-50 rounded-2xl">
                  <Bed className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">4</div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-2xl">
                  <Bath className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">3</div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-2xl">
                  <Square className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">2,436</div>
                  <div className="text-sm text-gray-600">Sq Ft</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-2xl">
                  <Car className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">2</div>
                  <div className="text-sm text-gray-600">Garage</div>
                </div>
              </div>
              
              {/* Highlights */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Two spacious primary suites</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Modern chef's kitchen with island</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Huge landscaped yard</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Gas fireplace in living room</span>
                  </div>
                </div>
              </div>
              
              {/* Location & MLS */}
              <div className="mb-8 p-4 bg-gray-50 rounded-2xl">
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Canterra At The Vistas, Summerlin</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">MLS #2722090 • Listed Sep 24, 2025</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="space-y-4">
                <a 
                  href="https://drjanduffy.realscout.com/homesearch/listings/p-11773-golden-moments-avenue-las-vegas-89138-glvartrestle-139" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 w-full bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Full Listing</span>
                </a>
                <a 
                  href="tel:+17025000607" 
                  className="flex items-center justify-center space-x-3 w-full border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Jan Duffy</span>
                </a>
              </div>
              
              {/* Open House Notice */}
              <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
                <div className="flex items-center space-x-3 text-green-800">
                  <Calendar className="w-6 h-6" />
                  <div>
                    <div className="font-bold text-lg">Open House</div>
                    <div className="text-green-700">Thursday, Oct 9th • 3:00-6:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Looking for other properties in The Vistas Summerlin?
          </p>
          <Link 
            href="/search"
            className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors text-lg"
          >
            <span>View All Properties</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}