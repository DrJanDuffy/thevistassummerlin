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
  Waves,
  Flower2,
  Palette,
  Coffee,
  Wine
} from 'lucide-react';
import { RealScoutWidget } from "@/components/RealScoutWidget";
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Santalina Community - The Vistas Summerlin | Mediterranean-Inspired Living',
  description: 'Discover Santalina in The Vistas Summerlin. Mediterranean-inspired homes with warm colors, outdoor living spaces, and community gardens. Expert realtor Jan Duffy helps you find your dream home.',
  keywords: [
    'Santalina Summerlin homes',
    'Santalina Las Vegas real estate',
    'The Vistas Santalina community',
    'Summerlin Santalina homes for sale',
    'Jan Duffy Santalina realtor',
    'Mediterranean homes Summerlin',
    'Santalina real estate agent',
    'outdoor living homes Las Vegas'
  ],
  openGraph: {
    title: 'Santalina Community - The Vistas Summerlin',
    description: 'Mediterranean-inspired homes with warm colors and outdoor living spaces.',
    url: 'https://www.thevistassummerlin.com/communities/img-0739',
    images: [
      {
        url: '/subcommunities/IMG_0739.JPG',
        width: 1200,
        height: 630,
        alt: 'Santalina community in The Vistas Summerlin',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santalina Community - The Vistas Summerlin',
    description: 'Mediterranean-inspired homes with warm colors and outdoor living spaces.',
    images: ['/subcommunities/IMG_0739.JPG'],
  },
};

export default function SantalinaCommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 to-red-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/communities" className="inline-flex items-center text-orange-100 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Communities
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-orange-100 font-medium mb-6">
                <Flower2 className="w-5 h-5" />
                <span>Mediterranean Lifestyle</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Santalina Community
              </h1>
              <p className="text-orange-100 text-xl lg:text-2xl mb-8 leading-relaxed">
                Mediterranean-inspired homes with warm colors and outdoor living spaces in The Vistas Summerlin
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <DollarSign className="w-6 h-6 text-orange-200" />
                    <span className="text-orange-100 font-medium">Price Range</span>
                  </div>
                  <div className="text-2xl font-bold">$650K - $1.4M</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <Home className="w-6 h-6 text-orange-200" />
                    <span className="text-orange-100 font-medium">Available Homes</span>
                  </div>
                  <div className="text-2xl font-bold">12</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#properties"
                  className="bg-white text-orange-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>View Properties</span>
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+17025000607"
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-orange-900 transition-colors shadow-lg flex items-center justify-center space-x-2"
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
                  src="/subcommunities/IMG_0739.JPG"
                  alt="Santalina community in The Vistas Summerlin"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Santalina Community</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Santalina captures the essence of Mediterranean living in the heart of The Vistas Summerlin, offering residents a warm, inviting atmosphere that celebrates outdoor living and community connection. This charming neighborhood combines the relaxed elegance of Mediterranean architecture with the modern conveniences of Las Vegas living, creating a unique residential experience that feels like a permanent vacation.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mediterranean Architecture & Design</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Santalina's homes showcase authentic Mediterranean architectural elements, featuring warm earth tones, terracotta accents, and stucco exteriors that evoke the charm of coastal European villages. Arched doorways, wrought iron details, and clay tile roofs create an authentic Mediterranean aesthetic, while modern floor plans ensure contemporary comfort and functionality. Each home is designed to maximize natural light and airflow, creating bright, airy living spaces that feel connected to the outdoors.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Outdoor Living Paradise</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Santalina celebrates the Las Vegas climate with extensive outdoor living features that make the most of year-round sunshine. Private courtyards, covered patios, and outdoor kitchens provide perfect spaces for alfresco dining and entertaining. Many homes feature pergolas, outdoor fireplaces, and built-in seating areas that create intimate gathering spaces for family and friends. The community's design encourages residents to spend time outdoors, fostering a healthy, active lifestyle that embraces the desert environment.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Gardens & Green Spaces</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Santalina features beautifully landscaped community gardens and green spaces that reflect the Mediterranean love of nature and gardening. Residents can enjoy walking through herb gardens, citrus groves, and flower-filled courtyards that provide a peaceful retreat from city life. The community's commitment to sustainable landscaping includes drought-tolerant plants and efficient irrigation systems that maintain the lush, green appearance while respecting Nevada's water resources.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Warm Community Atmosphere</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Santalina fosters a warm, welcoming community atmosphere that encourages neighborly interaction and social connection. Regular community events, from outdoor movie nights to seasonal festivals, bring residents together to celebrate the Mediterranean lifestyle. The neighborhood's intimate scale and pedestrian-friendly design create opportunities for spontaneous encounters and lasting friendships, making Santalina feel like a true community rather than just a collection of houses.
              </p>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Contact Card */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-orange-800 mb-4">Contact Jan Duffy</h3>
                <p className="text-orange-700 mb-6">
                  Your trusted real estate expert for Santalina. Get personalized assistance today!
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+17025000607"
                    className="block w-full bg-orange-600 text-white text-center py-4 rounded-xl font-semibold hover:bg-orange-700 transition-colors shadow-md flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="mailto:DrJanSells@TheVistasSummerlin.com"
                    className="block w-full border-2 border-orange-600 text-orange-600 text-center py-4 rounded-xl font-semibold hover:bg-orange-600 hover:text-white transition-colors shadow-md flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email Jan</span>
                  </a>
                </div>
              </div>

              {/* Market Stats */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <BarChart className="mr-3 text-orange-600" /> 
                  Market Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Active Listings</span>
                    <span className="font-bold text-gray-900">12</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Price Range</span>
                    <span className="font-bold text-orange-600">$650K - $1.4M</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Sold Last Month</span>
                    <span className="font-bold text-green-600">4</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">Days on Market</span>
                    <span className="font-bold text-orange-600">31</span>
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
                    'Mediterranean Style',
                    'Outdoor Living', 
                    'Warm Colors',
                    'Community Gardens',
                    'Walking Trails',
                    'Community Pool'
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
                  <Building className="mr-3 text-orange-600" /> 
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
                        <div className="w-18 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="font-bold text-gray-900">92</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <TrainFront className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">Transit Score</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full">
                        <div className="w-14 h-2 bg-yellow-500 rounded-full"></div>
                      </div>
                      <span className="font-bold text-gray-900">72</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Bike className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">Bike Score</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full">
                        <div className="w-16 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <span className="font-bold text-gray-900">85</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Mediterranean Lifestyle Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mediterranean Lifestyle Features
            </h2>
            <p className="text-xl text-gray-600">
              Experience the warmth and charm of Mediterranean living
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Warm Color Palette</h3>
              <p className="text-gray-600">
                Earth tones, terracotta accents, and warm Mediterranean colors create an 
                inviting atmosphere that reflects the region's natural beauty and warmth.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <TreePine className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Gardens</h3>
              <p className="text-gray-600">
                Beautifully landscaped gardens with herbs, citrus trees, and Mediterranean 
                plants provide a peaceful retreat and connection to nature.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Sun className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Outdoor Living</h3>
              <p className="text-gray-600">
                Covered patios, outdoor kitchens, and courtyard spaces designed for 
                year-round outdoor entertaining and relaxation in perfect weather.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Coffee className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Social Gathering Spaces</h3>
              <p className="text-gray-600">
                Community courtyards and gathering areas designed to encourage neighborly 
                interaction and create lasting friendships among residents.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <Wine className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mediterranean Events</h3>
              <p className="text-gray-600">
                Regular community events celebrating Mediterranean culture, from wine tastings 
                to outdoor festivals that bring the community together.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                <TreePine className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable Landscaping</h3>
              <p className="text-gray-600">
                Drought-tolerant plants and efficient irrigation systems maintain lush, 
                green spaces while respecting Nevada's water resources.
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
              Available Properties in Santalina
            </h2>
            <p className="text-xl text-gray-600">
              Discover your Mediterranean retreat in this charming community
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <RealScoutWidget />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Embrace Mediterranean Living?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Experience the warmth and charm of Santalina. Let Jan Duffy help you 
            find your Mediterranean retreat in this welcoming community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/valuation"
              className="bg-white text-orange-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Free Home Valuation
            </Link>
            <a
              href="tel:+17025000607"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-orange-900 transition-colors shadow-lg"
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
