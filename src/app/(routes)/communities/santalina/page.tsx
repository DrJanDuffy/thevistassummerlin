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
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { RealScoutWidget } from '@/components/RealScoutWidget';

export const metadata: Metadata = {
  title: 'Santalina Community - The Vistas Summerlin | Mediterranean-Inspired Living',
  description: 'Discover Santalina in The Vistas Summerlin. Mediterranean-inspired homes with warm colors, outdoor living spaces, and community gardens. Expert realtor Dr. Jan Duffy helps you find your dream home.',
  keywords: [
    'Santalina Summerlin homes',
    'Santalina Las Vegas real estate',
    'The Vistas Santalina community',
    'Summerlin Santalina homes for sale',
    'Dr. Jan Duffy Santalina realtor',
    'luxury homes Santalina',
    'Santalina real estate agent'
  ],
  openGraph: {
    title: 'Santalina Community - The Vistas Summerlin',
    description: 'Mediterranean-inspired living in The Vistas Summerlin with warm colors and outdoor spaces.',
    url: 'https://www.thevistassummerlin.com/communities/santalina',
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
    description: 'Mediterranean-inspired living in The Vistas Summerlin with warm colors and outdoor spaces.',
    images: ['/subcommunities/IMG_0739.JPG'],
  },
  alternates: {
    canonical: 'https://www.thevistassummerlin.com/communities/santalina',
  },
};

export default function SantalinaCommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* V0 Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 to-red-700 text-white py-24 sm:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/hero-pattern.png')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-orange-800/70 to-red-900/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Santalina: Mediterranean-Inspired Living in <span className="block text-orange-200">The Vistas Summerlin</span>
          </h1>
          <p className="text-lg sm:text-xl text-orange-100 max-w-3xl mx-auto mb-10">
            Discover 12 exquisite Mediterranean-style homes with warm colors, outdoor living spaces, and community gardens.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/search"
              className="bg-white text-orange-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-orange-100 transition-colors shadow-lg"
            >
              Search Santalina Homes
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-orange-700 transition-colors shadow-lg"
            >
              Contact Dr. Jan Duffy
            </Link>
          </div>
        </div>
      </section>

      {/* Community Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Experience the Charm of Santalina
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Santalina captures the essence of Mediterranean living in the heart of The Vistas Summerlin, offering residents a warm, inviting atmosphere that celebrates outdoor living and community connection. This charming neighborhood combines the relaxed elegance of Mediterranean architecture with the modern conveniences of Las Vegas living, creating a unique residential experience that feels like a permanent vacation.
              </p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-center text-lg">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-500 flex-shrink-0" />
                  Mediterranean-inspired architecture
                </li>
                <li className="flex items-center text-lg">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-500 flex-shrink-0" />
                  Outdoor living spaces and courtyards
                </li>
                <li className="flex items-center text-lg">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-500 flex-shrink-0" />
                  Community gardens and green spaces
                </li>
                <li className="flex items-center text-lg">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-500 flex-shrink-0" />
                  Homes ranging from 1,800 to 3,200 sq ft
                </li>
              </ul>
              <Link
                href="/communities"
                className="inline-flex items-center text-orange-600 font-semibold text-lg hover:text-orange-800 transition-colors"
              >
                Explore All Vistas Communities <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="relative h-96 rounded-3xl shadow-xl overflow-hidden">
              <Image
                src="/subcommunities/IMG_0739.JPG"
                alt="Santalina community in The Vistas Summerlin"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Santalina Lifestyle & Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-orange-100">
              <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prime Location</h3>
              <p className="text-gray-600">
                Nestled within The Vistas, offering easy access to Summerlin's best.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-orange-100">
              <Home className="w-12 h-12 text-red-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mediterranean Homes</h3>
              <p className="text-gray-600">
                Warm, inviting homes with authentic Mediterranean architectural elements.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-orange-100">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Focus</h3>
              <p className="text-gray-600">
                Warm, welcoming atmosphere that encourages neighborly interaction.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-orange-100">
              <TreePine className="w-12 h-12 text-orange-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Outdoor Living</h3>
              <p className="text-gray-600">
                Private courtyards, covered patios, and outdoor kitchens.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-orange-100">
              <School className="w-12 h-12 text-red-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Top-Rated Schools</h3>
              <p className="text-gray-600">
                Access to excellent public and private schools in Summerlin.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-orange-100">
              <ShoppingBag className="w-12 h-12 text-teal-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Shopping & Dining</h3>
              <p className="text-gray-600">
                Minutes from premier shopping centers and gourmet restaurants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RealScout Widget Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Find Your Dream Home in Santalina
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
            Utilize our advanced search tools to explore current listings and discover properties that match your unique preferences in Santalina.
          </p>
          <RealScoutWidget />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-orange-700 to-red-700 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Make Santalina Your Home?</h2>
          <p className="text-xl mb-10">
            Contact Dr. Jan Duffy, your Santalina real estate expert, for personalized assistance and exclusive insights into this magnificent community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/valuation"
              className="bg-white text-orange-900 px-8 py-4 rounded-2xl font-semibold hover:bg-orange-100 transition-colors shadow-lg"
            >
              Get Free Home Valuation
            </Link>
            <a
              href="tel:+17025000607"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-orange-900 transition-colors shadow-lg"
            >
              Call Dr. Jan Duffy
            </a>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
              Santalina: Mediterranean Luxury Living in The Vistas Summerlin
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Santalina represents the pinnacle of Mediterranean-inspired luxury living within The Vistas Summerlin community.
                This exclusive subcommunity features 12 meticulously designed homes that capture the essence of Mediterranean
                elegance while providing modern amenities and resort-style living in the heart of Las Vegas.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Architectural Excellence in Santalina
              </h3>

              <p className="mb-6">
                Santalina homes showcase distinctive Mediterranean architecture with warm earth tones, terracotta accents,
                and stucco exteriors that evoke the charm of coastal European villages. Arched doorways, wrought iron details,
                and clay tile roofs create an authentic Mediterranean aesthetic, while modern floor plans ensure contemporary
                comfort and functionality. Each home is designed to maximize natural light and airflow, creating bright,
                airy living spaces that feel connected to the outdoors.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Outdoor Living and Community Gardens
              </h3>

              <p className="mb-6">
                Santalina celebrates the Las Vegas climate with extensive outdoor living features that make the most of
                year-round sunshine. Private courtyards, covered patios, and outdoor kitchens provide perfect spaces for
                alfresco dining and entertaining. The community features beautifully landscaped gardens and green spaces
                that reflect the Mediterranean love of nature and gardening, including herb gardens, citrus groves,
                and flower-filled courtyards.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Investment Potential in Santalina
              </h3>

              <p className="mb-6">
                Santalina has demonstrated strong market performance with homes typically appreciating 6-8% annually.
                The community's Mediterranean charm and prime location within The Vistas Summerlin make it highly
                desirable among luxury homebuyers. Current market trends show Santalina homes selling within 25-40 days
                on average, indicating strong demand and market stability.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Education and Family Life in Santalina
              </h3>

              <p className="mb-6">
                Families in Santalina benefit from access to top-rated schools within the Clark County School District,
                including Ernest May Elementary, Sig Rogich Middle School, and Palo Verde High School. The community's
                warm, family-friendly environment and abundance of recreational facilities make it an ideal place for
                children to grow and thrive. Santalina's location provides convenient access to Summerlin's cultural
                attractions and family entertainment venues.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Why Choose Santalina for Your Next Home?
              </h3>

              <p className="mb-6">
                Santalina offers the perfect blend of Mediterranean elegance and modern convenience. With its distinctive
                architecture, outdoor living spaces, and prime location within The Vistas Summerlin, Santalina provides
                an exceptional living experience for discerning homebuyers. The community's strong market performance and
                family-friendly environment make it an excellent choice for both primary residences and investment properties.
              </p>

              <div className="bg-orange-50 p-6 rounded-xl mt-8">
                <h4 className="text-xl font-bold text-orange-900 mb-4">Ready to Explore Santalina?</h4>
                <p className="text-orange-800 mb-4">
                  Dr. Jan Duffy specializes in Santalina real estate and can help you find your perfect Mediterranean-inspired home.
                  With flexible scheduling and personalized service, Dr. Duffy makes your home search convenient and stress-free.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center"
                  >
                    Contact Dr. Jan Duffy
                  </Link>
                  <Link
                    href="/search"
                    className="border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors text-center"
                  >
                    Search Santalina Homes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
