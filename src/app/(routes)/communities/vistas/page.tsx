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
  Waves,
  Map,
  Camera,
  UtensilsCrossed,
  Dumbbell,
  Gamepad2
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
      
      {/* Geometric patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-40 left-40 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-60 left-60 w-3 h-3 bg-white rounded-full"></div>
        <div className="absolute top-80 left-80 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-100 left-100 w-1 h-1 bg-white rounded-full"></div>
      </div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center mb-8 text-blue-200">
          <Link href="/communities" className="hover:text-white transition-colors">
            Communities
          </Link>
          <ChevronRight className="mx-2 w-4 h-4" />
          <span className="text-white">The Vistas</span>
        </nav>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
          The Vistas
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover luxury living in Summerlin's premier community, featuring the iconic Vistas Community Center and world-class amenities
        </p>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <Building className="w-8 h-8 text-blue-300 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-blue-200 text-sm">Homes</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <Award className="w-8 h-8 text-blue-300 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">25+</div>
            <div className="text-blue-200 text-sm">Years</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <MapPin className="w-8 h-8 text-blue-300 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">89138</div>
            <div className="text-blue-200 text-sm">Zip Code</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <Star className="w-8 h-8 text-blue-300 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white">A+</div>
            <div className="text-blue-200 text-sm">Schools</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:+17025000607"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Call Dr. Jan: (702) 500-0607
          </a>
          <Link 
            href="/search"
            className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/20 flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            View Homes
          </Link>
        </div>
      </div>
    </div>
  </section>
);

// Community Center Section
const CommunityCenterSection = () => (
  <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Dr. Jan Duffy's Office
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Located at the heart of The Vistas community, Dr. Jan Duffy's real estate office provides personalized service in the community she knows best
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Office Location</h3>
                  <p className="text-slate-600">11312 Parkside Way, Las Vegas, NV 89138</p>
                  <p className="text-sm text-slate-500 mt-1">Dr. Jan Duffy's Real Estate Office</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Basketball courts</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Tennis courts</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Football field</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Ample green spaces</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Shaded areas</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Community Events</h3>
              <p className="text-blue-100 mb-6">
                The Vistas Community Center hosts regular events, fitness classes, and community gatherings throughout the year.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Fitness Classes</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Community Events</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Sports Leagues</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Family Activities</span>
              </div>
            </div>
          </div>

          {/* Right Content - Map/Image Placeholder */}
          <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <Map className="w-16 h-16 text-slate-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-700 mb-2">Interactive Map</h3>
              <p className="text-slate-600 mb-4">View The Vistas Community Center location</p>
              <a 
                href="https://maps.google.com/?q=11312+Parkside+Way,+Las+Vegas,+NV+89138"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Amenities Section
const AmenitiesSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Community Amenities
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experience the best of Summerlin living with world-class amenities right at your doorstep
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Recreation */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Dumbbell className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Recreation</h3>
            <ul className="space-y-2 text-slate-600">
              <li>• Basketball courts</li>
              <li>• Tennis courts</li>
              <li>• Football field</li>
              <li>• Walking trails</li>
              <li>• Playground areas</li>
            </ul>
          </div>

          {/* Community Center */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <Building className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Community Center</h3>
            <ul className="space-y-2 text-slate-600">
              <li>• Event spaces</li>
              <li>• Meeting rooms</li>
              <li>• Fitness classes</li>
              <li>• Community programs</li>
              <li>• Social gatherings</li>
            </ul>
          </div>

          {/* Natural Spaces */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
              <TreePine className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Natural Spaces</h3>
            <ul className="space-y-2 text-slate-600">
              <li>• Green spaces</li>
              <li>• Shaded areas</li>
              <li>• Landscaped gardens</li>
              <li>• Picnic areas</li>
              <li>• Nature trails</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Real Estate Section
const RealEstateSection = () => (
  <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Homes in The Vistas
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover luxury homes in one of Summerlin's most prestigious communities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Property Features</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Home className="w-5 h-5 text-blue-300" />
                  <span>Single Family</span>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="w-5 h-5 text-blue-300" />
                  <span>2-3 Car Garage</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-300" />
                  <span>3-5 Bedrooms</span>
                </div>
                <div className="flex items-center gap-3">
                  <Waves className="w-5 h-5 text-blue-300" />
                  <span>Pool Options</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Market Highlights</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Average Home Price:</span>
                  <span className="font-semibold">$800K - $1.2M</span>
                </div>
                <div className="flex justify-between">
                  <span>Home Sizes:</span>
                  <span className="font-semibold">2,500 - 4,500 sq ft</span>
                </div>
                <div className="flex justify-between">
                  <span>Year Built:</span>
                  <span className="font-semibold">1990s - 2000s</span>
                </div>
                <div className="flex justify-between">
                  <span>Lot Sizes:</span>
                  <span className="font-semibold">0.25 - 0.5 acres</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Why Choose The Vistas?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                <div>
                  <h4 className="font-semibold">Prime Location</h4>
                  <p className="text-blue-200 text-sm">Minutes from Red Rock Canyon and Summerlin amenities</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                <div>
                  <h4 className="font-semibold">Community Center</h4>
                  <p className="text-blue-200 text-sm">World-class recreational facilities at your doorstep</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                <div>
                  <h4 className="font-semibold">Top Schools</h4>
                  <p className="text-blue-200 text-sm">Excellent Clark County School District</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                <div>
                  <h4 className="font-semibold">Investment Value</h4>
                  <p className="text-blue-200 text-sm">Consistent appreciation in Summerlin's premier community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Contact Section
const ContactSection = () => (
  <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Ready to Call The Vistas Home?
        </h2>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          Let Dr. Jan Duffy help you find your perfect home in The Vistas community
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Call Dr. Jan</h3>
            <a 
              href="tel:+17025000607"
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              (702) 500-0607
            </a>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Email</h3>
            <a 
              href="mailto:jan@thevistassummerlin.com"
              className="text-lg text-blue-600 hover:text-blue-700 transition-colors"
            >
              jan@thevistassummerlin.com
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:+17025000607"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <Link 
            href="/search"
            className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-blue-600 hover:text-white flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Search Homes
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default function VistasCommunityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <CommunityHero />
      <CommunityCenterSection />
      <AmenitiesSection />
      <RealEstateSection />
      <ContactSection />
      
      <Footer />
    </div>
  );
}
