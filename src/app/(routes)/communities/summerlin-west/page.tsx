'use client';

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
  Sparkles,
  Mountain,
  TreePine,
  Car,
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
  Sun,
  Waves
} from 'lucide-react';
import { RealScoutWidget } from "@/components/RealScoutWidget";
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';

// V0 Community Hero Section
const CommunityHero = () => (
  <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white py-32 overflow-hidden">
    {/* V0 Background Elements */}
    <div className="absolute inset-0">
      {/* Animated floating circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <Link href="/communities" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-8 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/20 hover:scale-105">
        <ArrowLeft className="w-5 h-5 mr-2" /> Back to Communities
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          {/* V0 Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-blue-200 font-medium mb-8 shadow-lg hover:bg-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Sun className="w-5 h-5" />
            <span>Westside Living</span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
            Summerlin West
          </h1>
          
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
            Experience the perfect blend of urban convenience and suburban tranquility in Summerlin West. 
            This master-planned community offers modern amenities, excellent schools, and easy access to 
            the Las Vegas Strip and Red Rock Canyon.
          </p>

          {/* V0 Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
              <DollarSign className="w-6 h-6 text-green-300 mx-auto mb-2" />
              <p className="text-sm text-blue-200">Starting From</p>
              <p className="text-lg font-bold text-white">$650K</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
              <Home className="w-6 h-6 text-blue-300 mx-auto mb-2" />
              <p className="text-sm text-blue-200">Active Listings</p>
              <p className="text-lg font-bold text-white">42</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
              <Calendar className="w-6 h-6 text-purple-300 mx-auto mb-2" />
              <p className="text-sm text-blue-200">Days on Market</p>
              <p className="text-lg font-bold text-white">22</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
              <Star className="w-6 h-6 text-yellow-300 mx-auto mb-2" />
              <p className="text-sm text-blue-200">School Rating</p>
              <p className="text-lg font-bold text-white">8.8</p>
            </div>
          </div>

          {/* V0 CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#listings"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
            >
              <span>View Listings</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Contact Agent</span>
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
            <Image
              src="/subcommunities/summerlin-west.jpg"
              alt="Summerlin West Community"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-bold mb-2">Modern Westside Living</h3>
              <p className="text-blue-200">Contemporary homes with mountain views</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// V0 Community Features Section
const CommunityFeatures = () => (
  <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 relative overflow-hidden">
    {/* V0 Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-200/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Summerlin West Community Features
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the modern amenities and lifestyle that make Summerlin West a premier destination for families and professionals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* V0 Feature Cards */}
        {[
          {
            icon: Building,
            title: "Modern Architecture",
            description: "Contemporary homes with energy-efficient designs",
            color: "from-blue-500 to-cyan-500"
          },
          {
            icon: GraduationCap,
            title: "Top-Rated Schools",
            description: "Excellent public and private school options",
            color: "from-green-500 to-emerald-500"
          },
          {
            icon: Car,
            title: "Easy Commute",
            description: "Convenient access to Strip and downtown",
            color: "from-purple-500 to-pink-500"
          },
          {
            icon: Waves,
            title: "Community Pools",
            description: "Multiple resort-style swimming pools",
            color: "from-cyan-500 to-blue-500"
          },
          {
            icon: Footprints,
            title: "Walking Trails",
            description: "Extensive network of pedestrian pathways",
            color: "from-yellow-500 to-orange-500"
          },
          {
            icon: Shield,
            title: "Safe Neighborhood",
            description: "Low crime rates and community security",
            color: "from-indigo-500 to-purple-500"
          }
        ].map((feature, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// V0 Market Data Section
const MarketData = () => (
  <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white relative overflow-hidden">
    {/* V0 Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
          Summerlin West Market Data
        </h2>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto">
          Current market trends and statistics for the Summerlin West neighborhood
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* V0 Market Cards */}
        {[
          {
            icon: DollarSign,
            title: "Average Price",
            value: "$875,000",
            change: "+2.8%",
            color: "from-green-500 to-emerald-500"
          },
          {
            icon: Home,
            title: "Active Listings",
            value: "42",
            change: "Medium Inventory",
            color: "from-blue-500 to-indigo-500"
          },
          {
            icon: Calendar,
            title: "Days on Market",
            value: "22",
            change: "-3 days",
            color: "from-purple-500 to-pink-500"
          },
          {
            icon: BarChart,
            title: "Price per Sq Ft",
            value: "$285",
            change: "+1.9%",
            color: "from-yellow-500 to-orange-500"
          }
        ].map((stat, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-xl">
            <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-blue-200 mb-2">{stat.title}</h3>
            <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
            <p className="text-sm text-green-300">{stat.change}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// V0 Neighborhood Scores Section
const NeighborhoodScores = () => (
  <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
    {/* V0 Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-200/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Neighborhood Scores
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Summerlin West's walkability, transit, and lifestyle scores
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* V0 Score Cards */}
        {[
          {
            icon: Footprints,
            title: "Walk Score",
            score: "65",
            description: "Somewhat walkable",
            color: "from-orange-500 to-red-500"
          },
          {
            icon: TrainFront,
            title: "Transit Score",
            score: "45",
            description: "Some transit",
            color: "from-blue-500 to-indigo-500"
          },
          {
            icon: Bike,
            title: "Bike Score",
            score: "75",
            description: "Very bikeable",
            color: "from-green-500 to-emerald-500"
          },
          {
            icon: GraduationCap,
            title: "School Rating",
            score: "8.8",
            description: "Excellent schools",
            color: "from-purple-500 to-pink-500"
          }
        ].map((score, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 shadow-xl">
            <div className={`w-16 h-16 bg-gradient-to-r ${score.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
              <score.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{score.title}</h3>
            <p className="text-4xl font-bold text-gray-900 mb-2">{score.score}</p>
            <p className="text-sm text-gray-600">{score.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// V0 Contact Section
const ContactSection = () => (
  <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
    {/* V0 Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12 shadow-2xl">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
          Ready to Call Summerlin West Home?
        </h2>
        <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-12">
          Contact Dr. Jan Duffy for expert guidance on buying or selling in Summerlin West. 
          Flexible scheduling that works around YOUR lifestyle.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <a
            href="tel:+17028420410"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </a>
          <a
            href="mailto:drjan@thevistassummerlin.com"
            className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
          >
            <Mail className="w-5 h-5" />
            <span>Email Agent</span>
          </a>
        </div>

        <div className="text-center">
          <p className="text-blue-200 mb-4">Available Daily: 6:00 AM - 9:00 PM</p>
          <p className="text-sm text-blue-300">Serving Henderson, Enterprise, Southwest Vegas & More</p>
        </div>
      </div>
    </div>
  </section>
);

// V0 Listings Section
const ListingsSection = () => (
  <section id="listings" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 relative overflow-hidden">
    {/* V0 Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200/30 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-200/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Summerlin West Listings
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover modern homes in Summerlin West
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl p-8 shadow-2xl">
        <RealScoutWidget />
      </div>
    </div>
  </section>
);

export default function SummerlinWestCommunity() {
  return (
    <div className="flex min-h-screen flex-col font-secondary text-text-dark">
      <Navigation />
      <main className="flex-grow">
        <CommunityHero />
        <CommunityFeatures />
        <MarketData />
        <NeighborhoodScores />
        <ListingsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
