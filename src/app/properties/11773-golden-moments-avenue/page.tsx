import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, MapPin, Bed, Bath, Square, Calendar, DollarSign, Car, Home, TreePine } from 'lucide-react';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';

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
      <div className="min-h-screen bg-white">
        <Navigation />
        
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
              <span className="text-gray-400">/</span>
              <Link href="/properties" className="text-blue-600 hover:text-blue-800">Properties</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">11773 Golden Moments Avenue</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  11773 Golden Moments Avenue
                </h1>
                <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                  Move-in Ready Luxury Home in The Vistas Summerlin
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="text-2xl font-bold">$738,700</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="text-lg">$303/sqft</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="text-lg">MLS #2722090</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://drjanduffy.realscout.com/homesearch/listings/p-11773-golden-moments-avenue-las-vegas-89138-glvartrestle-139" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    View Full Listing
                  </a>
                  <a 
                    href="tel:+1702XXX" 
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
                  >
                    Call Jan Duffy
                  </a>
                </div>
              </div>
              
              {/* Property Image Placeholder */}
              <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Home className="w-16 h-16 mx-auto mb-4" />
                  <p>Property Photos Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Property Details */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Property Details</h2>
                
                {/* Key Features */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <Bed className="w-8 h-8 text-blue-600 mb-3" />
                    <h3 className="text-xl font-semibold mb-2">4 Bedrooms</h3>
                    <p className="text-gray-600">Two spacious primary suites with private baths</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <Bath className="w-8 h-8 text-blue-600 mb-3" />
                    <h3 className="text-xl font-semibold mb-2">3 Bathrooms</h3>
                    <p className="text-gray-600">Modern fixtures and finishes throughout</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <Square className="w-8 h-8 text-blue-600 mb-3" />
                    <h3 className="text-xl font-semibold mb-2">2,436 Sq Ft</h3>
                    <p className="text-gray-600">Bright, open living spaces</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <TreePine className="w-8 h-8 text-blue-600 mb-3" />
                    <h3 className="text-xl font-semibold mb-2">5,662 Sq Ft Lot</h3>
                    <p className="text-gray-600">Huge landscaped yard for entertaining</p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900">About This Home</h3>
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="mb-4">
                      Discover jackpot value in The Vistas, Summerlin! This move-in ready 4-bedroom, 3-bath home 
                      is available now in the highly sought-after Vistas village. Enjoy flexible living with two 
                      spacious primary suites, each with private baths.
                    </p>
                    <p className="mb-4">
                      One suite is perfect to serve as a Main Master suite downstairs, second master on second 
                      floor for family, private home office or a comfortable guest suite, making this an ideal 
                      family home in Summerlin.
                    </p>
                    <p className="mb-4">
                      This upgraded Summerlin property features bright, open living spaces and a modern chef's 
                      kitchen. The huge landscaped yard offers ideal space for an outdoor kitchen, relaxation, 
                      and family entertaining.
                    </p>
                    <p className="mb-4">
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

                {/* Virtual Tour */}
                <div id="virtual-tour" className="mb-12">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900">Virtual Tour</h3>
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Calendar className="w-12 h-12 mx-auto mb-4" />
                      <p>Virtual Tour Coming Soon</p>
                      <p className="text-sm">Contact Jan Duffy to schedule a private showing</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                
                {/* Contact Card */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Contact Jan Duffy</h3>
                  <p className="text-gray-600 mb-4">
                    Your trusted real estate expert for The Vistas Summerlin
                  </p>
                  <div className="space-y-3">
                    <a 
                      href="https://drjanduffy.realscout.com/homesearch/listings/p-11773-golden-moments-avenue-las-vegas-89138-glvartrestle-139" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      View Full Listing
                    </a>
                    <a 
                      href="tel:+1702XXX" 
                      className="block w-full border-2 border-blue-600 text-blue-600 text-center py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      Call Jan Duffy
                    </a>
                  </div>
                </div>

                {/* Property Facts */}
                <div className="bg-white border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Property Facts</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">MLS Number:</span>
                      <span className="font-semibold">2722090</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">List Date:</span>
                      <span className="font-semibold">Sep 24, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Days on Market:</span>
                      <span className="font-semibold">9 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Year Built:</span>
                      <span className="font-semibold">2003</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">HOA Fee:</span>
                      <span className="font-semibold">$60/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Taxes:</span>
                      <span className="font-semibold">$3,227/year</span>
                    </div>
                  </div>
                </div>

                {/* School Information */}
                <div className="bg-white border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Schools</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-600">Elementary:</span>
                      <div className="font-semibold">Linda Rankin Givens</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Middle:</span>
                      <div className="font-semibold">Sig Rogich</div>
                    </div>
                    <div>
                      <span className="text-gray-600">High:</span>
                      <div className="font-semibold">Palo Verde</div>
                    </div>
                  </div>
                </div>

                {/* Open House */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">Open House</h3>
                  <div className="text-green-700">
                    <div className="font-semibold">Thursday, Oct 9th</div>
                    <div>3:00 PM - 6:00 PM</div>
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
