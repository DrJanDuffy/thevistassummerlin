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
  Anchor,
  Compass,
  Sailboat,
  Fish,
  Waves as OceanWaves
} from 'lucide-react';
import { RealScoutWidget } from "@/components/RealScoutWidget";
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Portofino Community - The Vistas Summerlin | 213 Coastal-Inspired Homes',
  description: 'Discover Portofino in The Vistas Summerlin. 213 coastal-inspired homes with Mediterranean charm, resort-style amenities, and waterfront living concepts. Expert realtor Jan Duffy helps you find your dream home.',
  keywords: [
    'Portofino Summerlin homes',
    'Portofino Las Vegas real estate',
    'The Vistas Portofino community',
    'Summerlin Portofino homes for sale',
    'Jan Duffy Portofino realtor',
    'coastal homes Summerlin',
    'Portofino real estate agent',
    '213 homes Portofino',
    'Mediterranean homes Las Vegas'
  ],
  openGraph: {
    title: 'Portofino Community - The Vistas Summerlin | 213 Coastal-Inspired Homes',
    description: '213 coastal-inspired homes featuring Mediterranean charm and resort-style amenities.',
    url: 'https://www.thevistassummerlin.com/communities/portofino',
    images: [
      {
        url: '/subcommunities/IMG_0737.JPG',
        width: 1200,
        height: 630,
        alt: 'Portofino community in The Vistas Summerlin',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portofino Community - The Vistas Summerlin | 213 Coastal-Inspired Homes',
    description: '213 coastal-inspired homes featuring Mediterranean charm and resort-style amenities.',
    images: ['/subcommunities/IMG_0737.JPG'],
  },
};

export default function PortofinoCommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-teal-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/communities" className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Communities
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-blue-100 font-medium mb-6">
                <Anchor className="w-5 h-5" />
                <span>Coastal Living</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Portofino Community
              </h1>
              <p className="text-blue-100 text-xl lg:text-2xl mb-8 leading-relaxed">
                213 coastal-inspired homes featuring Mediterranean charm and resort-style amenities in The Vistas Summerlin
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <DollarSign className="w-6 h-6 text-blue-200" />
                    <span className="text-blue-100 font-medium">Price Range</span>
                  </div>
                  <div className="text-2xl font-bold">$650K - $1.8M</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <Home className="w-6 h-6 text-blue-200" />
                    <span className="text-blue-100 font-medium">Total Homes</span>
                  </div>
                  <div className="text-2xl font-bold">213</div>
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
                  alt="Portofino community in The Vistas Summerlin"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Portofino Community</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Portofino captures the essence of coastal Mediterranean living in the heart of The Vistas Summerlin, offering residents a sophisticated retreat that combines the relaxed elegance of Italian coastal towns with the modern conveniences of Las Vegas living. This charming community of 213 homes creates an intimate, resort-like atmosphere where every day feels like a vacation.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Coastal-Inspired Architecture</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Portofino's homes showcase authentic Mediterranean coastal architecture, featuring warm earth tones, stucco exteriors, and terracotta accents that evoke the charm of Italian seaside villages. Arched doorways, wrought iron details, and clay tile roofs create an authentic coastal aesthetic, while modern floor plans ensure contemporary comfort and functionality. Each home is designed to maximize natural light and airflow, creating bright, airy living spaces that feel connected to the outdoors and inspired by the Mediterranean lifestyle.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Resort-Style Amenities</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Portofino celebrates the resort lifestyle with extensive amenities designed to create a vacation-like atmosphere year-round. The community features a sparkling resort-style pool with cabanas and lounge areas, perfect for relaxation and socializing. Residents can enjoy the state-of-the-art fitness center, elegant clubhouse for social gatherings, and beautifully landscaped common areas that encourage outdoor activity and neighborly interaction. The community's design fosters a sense of belonging and creates opportunities for lasting friendships among residents.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Intimate Community Feel</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With 213 homes, Portofino offers the perfect balance of community size - large enough to support robust amenities and social activities, yet intimate enough to maintain a close-knit neighborhood feel. Residents enjoy regular community events, from outdoor movie nights to seasonal festivals, that bring neighbors together to celebrate the coastal lifestyle. The neighborhood's pedestrian-friendly design and intimate scale create opportunities for spontaneous encounters and lasting friendships, making Portofino feel like a true community rather than just a collection of houses.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Investment Potential</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Properties in Portofino have demonstrated strong appreciation and consistent demand in the Las Vegas real estate market. The combination of coastal-inspired architecture, resort-style amenities, and prime location creates a solid foundation for long-term value growth. Recent market analysis shows Portofino homes appreciating at rates above the Las Vegas metropolitan average, making it an attractive choice for both primary residences and investment properties. The community's reputation for quality and unique coastal charm continues to attract discerning buyers seeking a distinctive lifestyle experience.
              </p>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Contact Card */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Contact Jan Duffy</h3>
                <p className="text-blue-700 mb-6">
                  Your trusted real estate expert for Portofino. Get personalized assistance today!
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+17028420410"
                    className="block w-full bg-blue-600 text-white text-center py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="mailto:jan@thevistassummerlin.com"
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
                    <span className="text-gray-600">Total Homes</span>
                    <span className="font-bold text-gray-900">213</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Price Range</span>
                    <span className="font-bold text-blue-600">$650K - $1.8M</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Community Size</span>
                    <span className="font-bold text-green-600">Mid-Size</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">Market Status</span>
                    <span className="font-bold text-orange-600">Stable</span>
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
                    '213 Coastal Homes',
                    'Resort-Style Pool', 
                    'Mediterranean Style',
                    'Fitness Center',
                    'Clubhouse',
                    'Walking Trails'
                  ].map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community Features */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Compass className="mr-3 text-blue-600" /> 
                  Coastal Features
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Sailboat className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">Coastal Design</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-blue-600">✓</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Waves className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">Resort Pool</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-blue-600">✓</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Sun className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">Outdoor Living</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-blue-600">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Coastal Lifestyle Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Coastal Lifestyle Features
            </h2>
            <p className="text-xl text-gray-600">
              Experience the Mediterranean charm that Portofino offers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Anchor className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Coastal Architecture</h3>
              <p className="text-gray-600">
                Mediterranean coastal design with warm earth tones, stucco exteriors, 
                and terracotta accents that evoke Italian seaside villages.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                <Waves className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resort-Style Pool</h3>
              <p className="text-gray-600">
                Sparkling resort-style pool with cabanas, lounge areas, and poolside service 
                creates a vacation-like atmosphere year-round.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Sun className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Outdoor Living</h3>
              <p className="text-gray-600">
                Covered patios, outdoor kitchens, and courtyard spaces designed for 
                year-round outdoor entertaining and relaxation.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Events</h3>
              <p className="text-gray-600">
                Regular community events celebrating coastal culture, from outdoor movie nights 
                to seasonal festivals that bring neighbors together.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Elegant Clubhouse</h3>
              <p className="text-gray-600">
                Sophisticated clubhouse perfect for social gatherings, private events, and 
                community activities with full catering capabilities.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <TreePine className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Landscaped Grounds</h3>
              <p className="text-gray-600">
                Beautifully landscaped common areas with Mediterranean plants, walking trails, 
                and outdoor spaces that encourage neighborly interaction.
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
              Available Properties in Portofino
            </h2>
            <p className="text-xl text-gray-600">
              Discover your coastal retreat in this charming community
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <RealScoutWidget />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Embrace Coastal Living?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Experience the Mediterranean charm of Portofino. Let Jan Duffy help you 
            find your coastal retreat in this welcoming community of 213 homes.
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
