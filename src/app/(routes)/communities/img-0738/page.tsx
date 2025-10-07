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
  Crown,
  Gem,
  Sparkles
} from 'lucide-react';
import { RealScoutWidget } from "@/components/RealScoutWidget";
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Kingwood Community - The Vistas Summerlin | Royal-Inspired Luxury Homes',
  description: 'Discover Kingwood in The Vistas Summerlin. Royal-inspired homes with majestic mountain views, luxury finishes, and resort-style amenities. Expert realtor Jan Duffy helps you find your dream home.',
  keywords: [
    'Kingwood Summerlin homes',
    'Kingwood Las Vegas real estate',
    'The Vistas Kingwood community',
    'Summerlin Kingwood homes for sale',
    'Jan Duffy Kingwood realtor',
    'luxury homes Kingwood',
    'Kingwood real estate agent',
    'mountain view homes Summerlin'
  ],
  openGraph: {
    title: 'Kingwood Community - The Vistas Summerlin',
    description: 'Royal-inspired homes with majestic mountain views and luxury finishes.',
    url: 'https://www.thevistassummerlin.com/communities/img-0738',
    images: [
      {
        url: '/subcommunities/IMG_0738.JPG',
        width: 1200,
        height: 630,
        alt: 'Kingwood community in The Vistas Summerlin',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kingwood Community - The Vistas Summerlin',
    description: 'Royal-inspired homes with majestic mountain views and luxury finishes.',
    images: ['/subcommunities/IMG_0738.JPG'],
  },
};

export default function KingwoodCommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/communities" className="inline-flex items-center text-purple-100 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Communities
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-purple-100 font-medium mb-6">
                <Crown className="w-5 h-5" />
                <span>Royal Luxury Community</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Kingwood Community
              </h1>
              <p className="text-purple-100 text-xl lg:text-2xl mb-8 leading-relaxed">
                Royal-inspired homes with majestic mountain views and luxury finishes in The Vistas Summerlin
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <DollarSign className="w-6 h-6 text-purple-200" />
                    <span className="text-purple-100 font-medium">Price Range</span>
                  </div>
                  <div className="text-2xl font-bold">$850K - $2.1M</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <Home className="w-6 h-6 text-purple-200" />
                    <span className="text-purple-100 font-medium">Available Homes</span>
                  </div>
                  <div className="text-2xl font-bold">322</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#properties"
                  className="bg-white text-purple-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>View Properties</span>
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+1702XXX"
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-purple-900 transition-colors shadow-lg flex items-center justify-center space-x-2"
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
                  src="/subcommunities/IMG_0738.JPG"
                  alt="Kingwood community in The Vistas Summerlin"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Kingwood Community</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Kingwood stands as the crown jewel of The Vistas Summerlin, offering residents an unparalleled luxury living experience that combines royal-inspired architecture with breathtaking mountain vistas. This exclusive enclave represents the pinnacle of sophisticated desert living, where every detail has been carefully crafted to create an atmosphere of elegance and grandeur.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Majestic Mountain Views</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Kingwood's prime positioning offers residents spectacular views of the Spring Mountains and Red Rock Canyon, creating a dramatic backdrop that changes throughout the day. The community's elevated location ensures that homes capture these magnificent vistas, providing a sense of tranquility and connection to Nevada's natural beauty. Many properties feature expansive windows and outdoor living spaces designed to maximize these breathtaking views, creating an indoor-outdoor lifestyle that's perfect for entertaining and relaxation.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Luxury Finishes & Amenities</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Every home in Kingwood showcases premium finishes and materials that reflect the community's commitment to luxury living. From imported marble and granite countertops to custom cabinetry and high-end appliances, these residences offer the finest in modern convenience and aesthetic appeal. Private patios and balconies provide intimate spaces for outdoor dining and relaxation, while resort-style community amenities include a sparkling pool, state-of-the-art fitness center, and elegant clubhouse perfect for social gatherings and special events.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Exclusive Lifestyle</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Living in Kingwood means enjoying an exclusive lifestyle that combines privacy with convenience. The community's gated entrance and 24-hour security provide peace of mind, while the proximity to Downtown Summerlin ensures easy access to world-class shopping, dining, and entertainment. Residents can enjoy morning walks through beautifully landscaped common areas, afternoon swims in the resort-style pool, or evening gatherings in the elegant clubhouse, all while maintaining the privacy and exclusivity that makes Kingwood special.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Investment Excellence</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Properties in Kingwood have consistently demonstrated strong appreciation and high demand in the Las Vegas luxury real estate market. The combination of prime location, architectural excellence, and premium amenities creates a solid foundation for long-term value growth. Recent market analysis shows Kingwood homes appreciating at rates significantly above the Las Vegas metropolitan average, making it an exceptional choice for both primary residences and luxury investment properties. The community's reputation for quality and exclusivity continues to attract discerning buyers from across the country.
              </p>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Contact Card */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">Contact Jan Duffy</h3>
                <p className="text-purple-700 mb-6">
                  Your trusted real estate expert for Kingwood. Get personalized assistance today!
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+1702XXX"
                    className="block w-full bg-purple-600 text-white text-center py-4 rounded-xl font-semibold hover:bg-purple-700 transition-colors shadow-md flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="mailto:DrJanSells@TheVistasSummerlin.com"
                    className="block w-full border-2 border-purple-600 text-purple-600 text-center py-4 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-colors shadow-md flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email Jan</span>
                  </a>
                </div>
              </div>

              {/* Market Stats */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <BarChart className="mr-3 text-purple-600" /> 
                  Market Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Total Homes</span>
                    <span className="font-bold text-gray-900">322</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Price Range</span>
                    <span className="font-bold text-purple-600">$850K - $2.1M</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Sold Last Month</span>
                    <span className="font-bold text-green-600">2</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">Days on Market</span>
                    <span className="font-bold text-orange-600">18</span>
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
                    'Mountain Views',
                    'Luxury Finishes', 
                    'Private Patios',
                    'Resort-Style Pool',
                    'Gated Community',
                    '24-Hour Security'
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
                        <div className="w-14 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="font-bold text-gray-900">72</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <TrainFront className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">Transit Score</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full">
                        <div className="w-10 h-2 bg-yellow-500 rounded-full"></div>
                      </div>
                      <span className="font-bold text-gray-900">58</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Bike className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">Bike Score</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full">
                        <div className="w-12 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <span className="font-bold text-gray-900">68</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Luxury Features & Lifestyle */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Luxury Features & Lifestyle
            </h2>
            <p className="text-xl text-gray-600">
              Experience the royal lifestyle that Kingwood offers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Crown className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Royal Architecture</h3>
              <p className="text-gray-600">
                Homes feature grand entrances, soaring ceilings, and elegant facades that reflect 
                the community's royal-inspired design philosophy and attention to detail.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Mountain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mountain Views</h3>
              <p className="text-gray-600">
                Spectacular views of the Spring Mountains and Red Rock Canyon create a dramatic 
                backdrop that changes throughout the day and seasons.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Waves className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resort-Style Pool</h3>
              <p className="text-gray-600">
                Sparkling resort-style pool with cabanas, lounge areas, and poolside service 
                creates a vacation-like atmosphere right in your community.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <Gem className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Finishes</h3>
              <p className="text-gray-600">
                Imported marble, granite countertops, custom cabinetry, and high-end appliances 
                throughout create a luxurious living environment.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24-Hour Security</h3>
              <p className="text-gray-600">
                Gated entrance with 24-hour security provides peace of mind and ensures the 
                privacy and exclusivity that Kingwood residents expect.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Elegant Clubhouse</h3>
              <p className="text-gray-600">
                Sophisticated clubhouse perfect for social gatherings, private events, and 
                community activities with full catering capabilities.
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
              Available Properties in Kingwood
            </h2>
            <p className="text-xl text-gray-600">
              Discover your royal residence in this exclusive community
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <RealScoutWidget />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Live Like Royalty?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Experience the luxury lifestyle that Kingwood offers. Let Jan Duffy help you 
            find your royal residence in this prestigious community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/valuation"
              className="bg-white text-purple-900 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Free Home Valuation
            </Link>
            <a
              href="tel:+1702XXX"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-purple-900 transition-colors shadow-lg"
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
