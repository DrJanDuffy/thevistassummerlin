import { getCommunityBySlug, getAllCommunitySlugs, CommunityData } from "@/lib/community-utils";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
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
  Share2
} from 'lucide-react';
import { RealScoutWidget } from "@/components/RealScoutWidget";
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { FAQSchema } from '@/components/StructuredData';

// Enhanced Community Hero Section
const CommunityHero = ({ community }: { community: CommunityData }) => (
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
            {community.name}
          </h1>
          <p className="text-blue-100 text-xl lg:text-2xl mb-8 leading-relaxed">
            {community.description}
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-2">
                <DollarSign className="w-6 h-6 text-blue-200" />
                <span className="text-blue-100 font-medium">Price Range</span>
              </div>
              <div className="text-2xl font-bold">{community.stats?.priceRange || 'Contact for Pricing'}</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-2">
                <Home className="w-6 h-6 text-blue-200" />
                <span className="text-blue-100 font-medium">Available Homes</span>
              </div>
              <div className="text-2xl font-bold">{community.stats?.listings || '0'}</div>
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
              href="tel:+17025000607"
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
              src={community.image || '/subcommunities/IMG_0737.JPG'}
              alt={`${community.name} community`}
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
);

// Enhanced Community Details Sidebar
const CommunityDetailsSidebar = ({ community }: { community: CommunityData }) => (
  <aside className="space-y-8">
    {/* Contact Card */}
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-blue-800 mb-4">Contact Jan Duffy</h3>
      <p className="text-blue-700 mb-6">
        Your trusted real estate expert for {community.name}. Get personalized assistance today!
      </p>
      <div className="space-y-4">
        <a
          href="tel:+17025000607"
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

    {/* Stats Card */}
    <div className="bg-white rounded-3xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold mb-6 flex items-center">
        <BarChart className="mr-3 text-blue-600" /> 
        Market Stats
      </h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center py-3 border-b border-gray-100">
          <span className="text-gray-600">Active Listings</span>
          <span className="font-bold text-gray-900">{community.stats?.listings ?? '—'}</span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-gray-100">
          <span className="text-gray-600">Price Range</span>
          <span className="font-bold text-blue-600">{community.stats?.priceRange ?? '—'}</span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-gray-100">
          <span className="text-gray-600">Sold Last Month</span>
          <span className="font-bold text-green-600">{community.stats?.soldLastMonth ?? '—'}</span>
        </div>
        <div className="flex justify-between items-center py-3">
          <span className="text-gray-600">Days on Market</span>
          <span className="font-bold text-orange-600">{community.stats?.daysOnMarket ?? '—'}</span>
        </div>
      </div>
    </div>
    
    {/* Amenities Card */}
    <div className="bg-white rounded-3xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold mb-6 flex items-center">
        <Users className="mr-3 text-green-600" /> 
        Community Amenities
      </h3>
      <div className="grid grid-cols-1 gap-3">
        {community.amenities?.map((amenity) => (
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
            <span className="font-bold text-gray-900">{community.neighborhood?.walkScore ?? '—'}</span>
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
            <span className="font-bold text-gray-900">{community.neighborhood?.transitScore ?? '—'}</span>
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
            <span className="font-bold text-gray-900">{community.neighborhood?.bikeScore ?? '—'}</span>
          </div>
        </div>
      </div>
    </div>

    {/* School Information */}
    <div className="bg-white rounded-3xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold mb-6 flex items-center">
        <GraduationCap className="mr-3 text-orange-600" /> 
        Schools
      </h3>
      <div className="space-y-4">
        <div className="p-4 bg-orange-50 rounded-xl">
          <div className="font-semibold text-gray-900 mb-1">Elementary School</div>
          <div className="text-gray-600">Givens Elementary School</div>
          <div className="flex items-center space-x-1 mt-2">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm text-gray-600 ml-2">5.0/5</span>
          </div>
        </div>
        <div className="p-4 bg-orange-50 rounded-xl">
          <div className="font-semibold text-gray-900 mb-1">High School</div>
          <div className="text-gray-600">Palo Verde High School</div>
          <div className="flex items-center space-x-1 mt-2">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <Star className="w-4 h-4 text-gray-300" />
            <span className="text-sm text-gray-600 ml-2">4.2/5</span>
          </div>
        </div>
      </div>
    </div>
  </aside>
);

// Community Features Section
const CommunityFeatures = ({ community }: { community: CommunityData }) => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What Makes {community.name} Special
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the unique features and amenities that make this community a perfect place to call home.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {community.features?.map((feature, index) => (
          <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <Home className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature}</h3>
            <p className="text-gray-600">
              Experience the luxury and convenience that {community.name} has to offer with this premium feature.
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Properties Section
const PropertiesSection = ({ community }: { community: CommunityData }) => (
  <section id="properties" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Available Properties in {community.name}
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
);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const community = await getCommunityBySlug(slug);
  
  if (!community) {
    return {
      title: 'Community Not Found',
    };
  }

  return {
    title: `${community.name} - The Vistas Summerlin | Luxury Homes & Community Guide`,
    description: `Discover ${community.name} in The Vistas Summerlin. ${community.description} Expert realtor Jan Duffy helps you find your dream home.`,
    keywords: [
      `${community.name} Summerlin homes`,
      `${community.name} Las Vegas real estate`,
      `The Vistas ${community.name}`,
      `Summerlin ${community.name} community`,
      `Jan Duffy ${community.name}`,
      `luxury homes ${community.name}`,
      `${community.name} real estate agent`
    ],
    openGraph: {
      title: `${community.name} - The Vistas Summerlin Community`,
      description: `${community.description} Expert guidance from Jan Duffy.`,
      url: `https://www.thevistassummerlin.com/communities/${slug}`,
      images: [
        {
          url: community.image || '/subcommunities/IMG_0737.JPG',
          width: 1200,
          height: 630,
          alt: `${community.name} community`,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${community.name} - The Vistas Summerlin`,
      description: `${community.description}`,
      images: [community.image || '/subcommunities/IMG_0737.JPG'],
    },
    alternates: {
      canonical: `https://www.thevistassummerlin.com/communities/${slug}`,
    },
  };
}

export default async function CommunityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const community = await getCommunityBySlug(slug);
  
  if (!community) return notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <CommunityHero community={community} />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About {community.name}</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {community.description} Located in the prestigious Vistas Summerlin community, 
                  {community.name} offers residents an unparalleled living experience with access to 
                  world-class amenities, top-rated schools, and stunning natural beauty.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Highlights</h3>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-8">
                  <li>Prime location in The Vistas Summerlin master-planned community</li>
                  <li>Access to championship golf courses and resort-style amenities</li>
                  <li>Top-rated schools including Palo Verde High School</li>
                  <li>Minutes from Downtown Summerlin shopping and dining</li>
                  <li>Easy access to Red Rock Canyon and outdoor recreation</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Investment Potential</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Properties in {community.name} have shown consistent appreciation and strong rental demand. 
                  The community's location, amenities, and school district make it an excellent choice for 
                  both primary residences and investment properties.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <CommunityDetailsSidebar community={community} />
          </div>
        </div>
      </section>

      <CommunityFeatures community={community} />
      <PropertiesSection community={community} />

      <Footer />
      <FAQSchema />
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await getAllCommunitySlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}