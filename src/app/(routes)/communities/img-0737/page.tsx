import { Metadata } from 'next';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { 
  BarChart, 
  Users, 
  MapPin, 
  Building, 
  Shield, 
  Footprints, 
  TrainFront, 
  Bike, 
  GraduationCap,
  ArrowLeft,
  Star,
  Home,
  Calendar,
  DollarSign,
  Phone,
  Mail,
  ExternalLink,
  ChevronRight,
  Heart,
  Share2,
  TreePine,
  Car,
  School,
  ShoppingBag,
  UtensilsCrossed,
  Mountain,
  Sun,
  Waves
} from 'lucide-react';
import { RealScoutWidget } from "@/components/RealScoutWidget";
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Barrington Community - The Vistas Summerlin | Luxury Homes & Lifestyle',
  description: 'Discover Barrington in The Vistas Summerlin. Elegant homes with sophisticated architecture, premium amenities, and family-friendly living. Expert realtor Jan Duffy helps you find your dream home.',
  keywords: [
    'Barrington Summerlin homes',
    'Barrington Las Vegas real estate',
    'The Vistas Barrington community',
    'Summerlin Barrington homes for sale',
    'Jan Duffy Barrington realtor',
    'luxury homes Barrington',
    'Barrington real estate agent'
  ],
  openGraph: {
    title: 'Barrington Community - The Vistas Summerlin',
    description: 'Elegant homes with sophisticated architecture and premium amenities in Barrington.',
    url: 'https://www.thevistassummerlin.com/communities/img-0737',
    images: [
      {
        url: '/subcommunities/IMG_0737.JPG',
        width: 1200,
        height: 630,
        alt: 'Barrington community in The Vistas Summerlin',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barrington Community - The Vistas Summerlin',
    description: 'Elegant homes with sophisticated architecture and premium amenities.',
    images: ['/subcommunities/IMG_0737.JPG'],
  },
};

export default function BarringtonCommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/communities" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Communities
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-blue-100 font-medium mb-6">
                <Star className="w-5 h-5" />
                <span>Premium Community</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Barrington Community
              </h1>
              <p className="text-blue-100 text-xl lg:text-2xl mb-8 leading-relaxed">
                Elegant homes with sophisticated architecture and premium amenities in the heart of The Vistas Summerlin
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <DollarSign className="w-6 h-6 text-blue-200" />
                    <span className="text-blue-100 font-medium">Price Range</span>
                  </div>
                  <div className="text-2xl font-bold">$750K - $1.8M</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <Home className="w-6 h-6 text-blue-200" />
                    <span className="text-blue-100 font-medium">Available Homes</span>
                  </div>
                  <div className="text-2xl font-bold">8</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#properties"
                  className="bg-white text-blue-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>View Properties</span>
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+1702XXX"
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-900 transition-colors shadow-lg flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Jan Duffy</span>
                </a>
              </div>
            </div>

            {/* Community Image */}
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/subcommunities/IMG_0737.JPG"
                  alt="Barrington community in The Vistas Summerlin"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Location</span>
                </div>
                <div className="text-lg font-bold text-gray-900">The Vistas Summerlin</div>
                <div className="text-gray-600">Las Vegas, NV 89134</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Barrington Community</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Nestled in the prestigious Vistas Summerlin master-planned community, Barrington represents the pinnacle of sophisticated living in Las Vegas. This exclusive neighborhood combines timeless architectural elegance with modern luxury amenities, creating an unparalleled residential experience for discerning homeowners.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Architectural Excellence</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Barrington's homes showcase sophisticated architectural designs that blend traditional elegance with contemporary functionality. Each residence features carefully crafted details, from grand entrance facades to meticulously landscaped grounds. The community's architectural guidelines ensure consistency while allowing for individual expression, resulting in a cohesive yet distinctive streetscape that enhances property values and neighborhood appeal.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Prime Location Benefits</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Barrington's strategic location within The Vistas offers residents exceptional convenience and accessibility. The community is positioned just minutes from Downtown Summerlin's premier shopping, dining, and entertainment destinations, including the Fashion Show Mall and Red Rock Casino. Easy access to the I-215 beltway provides quick connections to the Las Vegas Strip, McCarran International Airport, and major employment centers throughout the valley.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Family-Friendly Environment</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Barrington is designed with families in mind, offering a safe, welcoming environment where children can thrive. The community features well-maintained parks, walking trails, and recreational facilities that encourage outdoor activity and neighborly interaction. Top-rated schools in the Clark County School District serve the area, including Givens Elementary School, Rogich Middle School, and Palo Verde High School, all known for their academic excellence and comprehensive programs.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Investment Potential</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Properties in Barrington have demonstrated strong appreciation and consistent demand in the Las Vegas real estate market. The community's combination of premium location, architectural quality, and community amenities creates a solid foundation for long-term value growth. Recent market data shows Barrington homes appreciating at rates above the Las Vegas metropolitan average, making it an attractive choice for both primary residences and investment properties.
              </p>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Contact Card */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Contact Jan Duffy</h3>
                <p className="text-blue-700 mb-6">
                  Your trusted real estate expert for Barrington. Get personalized assistance today!
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+1702XXX"
                    className="block w-full bg-blue-600 text-white text-center py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="mailto:DrJanSells@TheVistasSummerlin.com"
                    className="block w-full border-2 border-blue-600 text-blue-600 text-center py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors shadow-md flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email Jan</span>
                  </a>
                </div>
              </div>

              {/* Market Stats */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <BarChart className="mr-3 text-blue-600" /> 
                  Market Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Active Listings</span>
                    <span className="font-bold text-gray-900">8</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Price Range</span>
                    <span className="font-bold text-blue-600">$750K - $1.8M</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Sold Last Month</span>
                    <span className="font-bold text-green-600">3</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">Days on Market</span>
                    <span className="font-bold text-orange-600">24</span>
                  </div>
                </div>
              </div>
              
              {/* Amenities */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Users className="mr-3 text-green-600" /> 
                  Community Amenities
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Sophisticated Architecture',
                    'Premium Amenities', 
                    'Gated Community',
                    'Landscaped Grounds',
                    'Community Pool',
                    'Walking Trails'
                  ].map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Neighborhood Scores */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Building className="mr-3 text-purple-600" /> 
                  Neighborhood Scores
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Footprints className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">Walk Score</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full">
                        <div className="w-16 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="font-bold text-gray-900">85</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <TrainFront className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">Transit Score</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full">
                        <div className="w-12 h-2 bg-yellow-500 rounded-full"></div>
                      </div>
                      <span className="font-bold text-gray-900">65</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Bike className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">Bike Score</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full">
                        <div className="w-14 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <span className="font-bold text-gray-900">78</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Local Attractions & Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Local Attractions & Amenities
            </h2>
            <p className="text-xl text-gray-600">
              Discover what makes Barrington the perfect place to call home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <ShoppingBag className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Downtown Summerlin</h3>
              <p className="text-gray-600">
                Just 5 minutes away, featuring premier shopping, dining, and entertainment including 
                Fashion Show Mall, Red Rock Casino, and numerous restaurants and cafes.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <School className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Top-Rated Schools</h3>
              <p className="text-gray-600">
                Served by Givens Elementary, Rogich Middle School, and Palo Verde High School - 
                all recognized for academic excellence and comprehensive programs.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Mountain className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Red Rock Canyon</h3>
              <p className="text-gray-600">
                World-famous Red Rock Canyon National Conservation Area is just 15 minutes away, 
                offering hiking, rock climbing, and breathtaking desert scenery.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <Car className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Transportation</h3>
              <p className="text-gray-600">
                Convenient access to I-215 beltway provides quick connections to the Las Vegas Strip, 
                McCarran International Airport, and major employment centers.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <UtensilsCrossed className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dining & Entertainment</h3>
              <p className="text-gray-600">
                Nearby restaurants include fine dining establishments, casual cafes, and family-friendly 
                options, plus entertainment venues and cultural attractions.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                <Waves className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Recreation & Wellness</h3>
              <p className="text-gray-600">
                Community pools, fitness centers, walking trails, and parks provide ample opportunities 
                for outdoor recreation and healthy living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Available Properties in Barrington
            </h2>
            <p className="text-xl text-gray-600">
              Discover your dream home in this exclusive community
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <RealScoutWidget />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Call Barrington Home?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Experience the sophisticated lifestyle that Barrington offers. Let Jan Duffy help you 
            find the perfect home in this prestigious community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/valuation"
              className="bg-white text-blue-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Free Home Valuation
            </Link>
            <a
              href="tel:+1702XXX"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-900 transition-colors shadow-lg"
            >
              Call Jan Duffy
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
