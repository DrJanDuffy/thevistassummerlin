import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, MapPin, Bed, Bath, Square, Calendar, DollarSign, Car, Home, TreePine, Phone, Mail, ExternalLink } from 'lucide-react';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { PropertyImageGallery, goldenMomentsImages } from '@/components/PropertyImageGallery';

export const metadata: Metadata = {
  title: "11773 Golden Moments Avenue - Luxury Home in The Vistas Summerlin | $738,700",
  description: "Discover this move-in ready 4-bedroom, 3-bath home in The Vistas Summerlin. Two spacious primary suites, modern chef's kitchen, huge landscaped yard. MLS #2722090. Schedule your private tour today!",
  keywords: [
    "11773 Golden Moments Avenue",
    "The Vistas Summerlin homes for sale",
    "Canterra At The Vistas",
    "Summerlin luxury homes",
    "Las Vegas real estate",
    "MLS 2722090",
    "4 bedroom home Summerlin",
    "Golden Moments Avenue Las Vegas"
  ],
  openGraph: {
    title: "11773 Golden Moments Avenue - Luxury Home in The Vistas Summerlin",
    description: "Move-in ready 4-bedroom, 3-bath home in The Vistas Summerlin. Two spacious primary suites, modern chef's kitchen. $738,700",
    url: "https://www.thevistassummerlin.com/properties/11773-golden-moments-avenue",
    images: [
      {
        url: "/properties/golden-moments-avenue-hero.jpg",
        width: 1200,
        height: 630,
        alt: "11773 Golden Moments Avenue - The Vistas Summerlin",
      },
    ],
  },
};

// Property Schema for MLS Listing
function PropertySchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": "11773 Golden Moments Avenue, Las Vegas, NV",
    "description": "Move-in ready 4-bedroom, 3-bath home in The Vistas Summerlin with two spacious primary suites and modern chef's kitchen",
    "url": "https://www.thevistassummerlin.com/properties/11773-golden-moments-avenue",
    "image": "https://www.thevistassummerlin.com/properties/golden-moments-avenue-hero.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11773 Golden Moments Avenue",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "postalCode": "89138",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1699",
      "longitude": "-115.1398"
    },
    "offers": {
      "@type": "Offer",
      "price": "738700",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2025-09-25"
    },
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": "2436",
      "unitCode": "SQF"
    },
    "numberOfRooms": "4",
    "numberOfBathroomsTotal": "3",
    "numberOfBedrooms": "4",
    "yearBuilt": "2003",
    "propertyType": "Single Family Residence",
    "mlsNumber": "2722090",
    "listingAgent": {
      "@type": "RealEstateAgent",
      "name": "Jan Duffy",
      "url": "https://www.thevistassummerlin.com"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Two Primary Suites",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Modern Chef's Kitchen",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Huge Landscaped Yard",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Gas Fireplace",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "2-Car Garage",
        "value": true
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function GoldenMomentsProperty() {
  return (
    <>
      <PropertySchema />
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">Home</Link>
              <span className="text-gray-400">/</span>
              <Link href="/properties" className="text-blue-600 hover:text-blue-800 transition-colors">Properties</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600 font-medium">11773 Golden Moments Avenue</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Property Image Gallery */}
              <div className="order-2 lg:order-1">
                <PropertyImageGallery 
                  images={goldenMomentsImages} 
                  propertyAddress="11773 Golden Moments Avenue" 
                />
              </div>
              
              {/* Property Info */}
              <div className="order-1 lg:order-2 space-y-6">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    11773 Golden Moments Avenue
                  </h1>
                  <div className="flex items-center space-x-2 text-gray-600 mb-6">
                    <MapPin className="w-5 h-5" />
                    <span>Canterra At The Vistas, Summerlin, Las Vegas, NV 89138</span>
                  </div>
                </div>

                {/* Price & Key Stats */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                  <div className="text-5xl font-bold mb-2">$738,700</div>
                  <div className="text-xl text-blue-100 mb-6">$303 per sqft</div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Bed className="w-6 h-6" />
                      <div>
                        <div className="text-2xl font-bold">4</div>
                        <div className="text-blue-100">Bedrooms</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Bath className="w-6 h-6" />
                      <div>
                        <div className="text-2xl font-bold">3</div>
                        <div className="text-blue-100">Bathrooms</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Square className="w-6 h-6" />
                      <div>
                        <div className="text-2xl font-bold">2,436</div>
                        <div className="text-blue-100">Sq Ft</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Car className="w-6 h-6" />
                      <div>
                        <div className="text-2xl font-bold">2</div>
                        <div className="text-blue-100">Garage</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a 
                    href="https://drjanduffy.realscout.com/homesearch/listings/p-11773-golden-moments-avenue-las-vegas-89138-glvartrestle-139" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>View Full Listing</span>
                  </a>
                  <a 
                    href="tel:+1702XXX" 
                    className="flex items-center justify-center space-x-2 border-2 border-blue-600 text-blue-600 px-6 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Jan Duffy</span>
                  </a>
                </div>

                {/* Open House Notice */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center space-x-3 text-green-800">
                    <Calendar className="w-6 h-6" />
                    <div>
                      <div className="font-semibold text-lg">Open House</div>
                      <div className="text-green-700">Thursday, Oct 9th • 3:00-6:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Property Details */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                
                {/* Description */}
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">About This Home</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                    <p>
                      Discover jackpot value in The Vistas, Summerlin! This move-in ready 4-bedroom, 3-bath home 
                      is available now in the highly sought-after Vistas village. Enjoy flexible living with two 
                      spacious primary suites, each with private baths.
                    </p>
                    <p>
                      One suite is perfect to serve as a Main Master suite downstairs, second master on second 
                      floor for family, private home office or a comfortable guest suite, making this an ideal 
                      family home in Summerlin.
                    </p>
                    <p>
                      This upgraded Summerlin property features bright, open living spaces and a modern chef's 
                      kitchen. The huge landscaped yard offers ideal space for an outdoor kitchen, relaxation, 
                      and family entertaining.
                    </p>
                    <p>
                      Live in a prime vibrant Las Vegas location, close to top-rated Summerlin schools, beautiful 
                      parks, and scenic trails. You'll also be just moments from Downtown Summerlin's premier 
                      shopping and dining.
                    </p>
                    <p className="font-semibold text-gray-900">
                      Don't miss this opportunity to own a home in one of Las Vegas's most desirable neighborhoods. 
                      Schedule your private tour today!
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Key Features</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 rounded-lg p-3">
                        <Home className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Two Primary Suites</h3>
                        <p className="text-gray-600">Flexible living with dual master bedrooms</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 rounded-lg p-3">
                        <Square className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Modern Chef's Kitchen</h3>
                        <p className="text-gray-600">Updated with island and premium appliances</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 rounded-lg p-3">
                        <TreePine className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Huge Landscaped Yard</h3>
                        <p className="text-gray-600">Perfect for outdoor entertaining</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 rounded-lg p-3">
                        <Car className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">2-Car Garage</h3>
                        <p className="text-gray-600">Attached garage with storage</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                
                {/* Contact Card */}
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Contact Jan Duffy</h3>
                  <p className="text-gray-600 mb-6">
                    Your trusted real estate expert for The Vistas Summerlin
                  </p>
                  <div className="space-y-4">
                    <a 
                      href="https://drjanduffy.realscout.com/homesearch/listings/p-11773-golden-moments-avenue-las-vegas-89138-glvartrestle-139" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>View Full Listing</span>
                    </a>
                    <a 
                      href="tel:+1702XXX" 
                      className="flex items-center justify-center space-x-2 w-full border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Call Now</span>
                    </a>
                    <a 
                      href="mailto:jan@thevistassummerlin.com" 
                      className="flex items-center justify-center space-x-2 w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Email Jan</span>
                    </a>
                  </div>
                </div>

                {/* Property Facts */}
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Property Facts</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">MLS Number:</span>
                      <span className="font-semibold text-gray-900">2722090</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">List Date:</span>
                      <span className="font-semibold text-gray-900">Sep 24, 2025</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Days on Market:</span>
                      <span className="font-semibold text-gray-900">9 days</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Year Built:</span>
                      <span className="font-semibold text-gray-900">2003</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">HOA Fee:</span>
                      <span className="font-semibold text-gray-900">$60/month</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">Taxes:</span>
                      <span className="font-semibold text-gray-900">$3,227/year</span>
                    </div>
                  </div>
                </div>

                {/* School Information */}
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Schools</h3>
                  <div className="space-y-4">
                    <div className="py-2">
                      <div className="text-gray-600 text-sm">Elementary</div>
                      <div className="font-semibold text-gray-900">Linda Rankin Givens</div>
                    </div>
                    <div className="py-2">
                      <div className="text-gray-600 text-sm">Middle</div>
                      <div className="font-semibold text-gray-900">Sig Rogich</div>
                    </div>
                    <div className="py-2">
                      <div className="text-gray-600 text-sm">High</div>
                      <div className="font-semibold text-gray-900">Palo Verde</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}