'use client';

import Link from 'next/link';
import OptimizedImage, { BLUR_DATA_URLS } from '@/components/OptimizedImage';
import { realScoutImageUrls } from '@/lib/propertyImages';
import Navigation from '@/components/sections/navigation';
import Hero from '@/components/sections/hero';
import HomeEvaluationSection from '@/components/sections/home-evaluation';
import PropertyCategories from '@/components/sections/property-categories';
import FeaturedCommunities from '@/components/sections/featured-communities';
import Footer from '@/components/sections/footer';
import { Phone, BookOpen, User, MapPin, ArrowRight, Zap, Sparkles, Heart, Award, TrendingUp, Users, Star, Home as HomeIcon, DollarSign, Calendar, CheckCircle, Crown, Mountain, Building, Clock, Bed, Bath, Square, ExternalLink } from 'lucide-react';
import FloatingActionButton from '@/components/ui/FloatingActionButton';
import ScrollToTop from '@/components/ui/ScrollToTop';
import GoogleBusinessProfileWidget from '@/components/sections/google-business-profile-widget';
import ReviewCollectionWidget from '@/components/sections/review-collection-widget';
import RealScoutListings from '@/components/RealScoutListings';
import RealScoutFrame from '@/components/RealScoutFrame';
import LocalSEOShowcase from '@/components/sections/local-seo-showcase';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-secondary text-text-dark">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        
        {/* V0 Featured Property Section - Moved Right After Hero */}
        <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
          {/* V0 Background Elements */}
          <div className="absolute inset-0">
            {/* Animated floating elements */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
            
            {/* Geometric patterns */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            
            {/* Floating particles */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-ping"></div>
              <div className="absolute top-40 left-40 w-1 h-1 bg-white rounded-full animate-ping delay-1000"></div>
              <div className="absolute top-60 left-60 w-3 h-3 bg-white rounded-full animate-ping delay-2000"></div>
              <div className="absolute top-80 left-80 w-2 h-2 bg-white rounded-full animate-ping delay-3000"></div>
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* V0 Featured Property Badge */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-8 py-4 text-yellow-200 font-medium mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Sparkles className="w-6 h-6" />
                <span>✨ Featured Property - Must See!</span>
              </div>

              <h2 className="text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent leading-tight">
                Golden Moments Avenue
                <span className="block text-4xl lg:text-5xl mt-4">Move-In Ready Luxury</span>
              </h2>
              
              <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
                Discover this exceptional 4-bedroom, 3-bath home in The Vistas Summerlin. 
                Two spacious primary suites and a modern chef's kitchen await your family.
              </p>

              {/* V0 Property Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Bed className="w-8 h-8 text-blue-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">4</div>
                  <div className="text-blue-200 text-sm">Bedrooms</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Bath className="w-8 h-8 text-purple-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">3</div>
                  <div className="text-blue-200 text-sm">Bathrooms</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Square className="w-8 h-8 text-green-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">2,500+</div>
                  <div className="text-blue-200 text-sm">Sq Ft</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <DollarSign className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">$738K</div>
                  <div className="text-blue-200 text-sm">Asking Price</div>
                </div>
              </div>
            </div>

            {/* V0 Property Card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl shadow-2xl overflow-hidden max-w-6xl mx-auto hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <div className="grid lg:grid-cols-2 gap-0">
                
                {/* Property Image Gallery */}
                <div className="relative h-96 lg:h-[500px]">
                  {/* Main Image - RealScout Kitchen Photo */}
                  <OptimizedImage
                    src={realScoutImageUrls.kitchen}
                    alt="11773 Golden Moments Avenue luxury kitchen in The Vistas Summerlin - Modern black and white design with granite countertops"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URLS.house}
                  />
                  
                  {/* Photo Gallery Thumbnails - Bottom Right */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <div className="w-16 h-12 rounded-lg overflow-hidden border-2 border-white/50 shadow-lg hover:border-white/80 transition-colors">
                      <OptimizedImage
                        src={realScoutImageUrls.frontExterior}
                        alt="Front exterior of 11773 Golden Moments Avenue"
                        width={64}
                        height={48}
                        className="object-cover w-full h-full"
                        quality={80}
                      />
                    </div>
                    <div className="w-16 h-12 rounded-lg overflow-hidden border-2 border-white/50 shadow-lg hover:border-white/80 transition-colors">
                      <OptimizedImage
                        src={realScoutImageUrls.livingRoom}
                        alt="Living room with gas fireplace"
                        width={64}
                        height={48}
                        className="object-cover w-full h-full"
                        quality={80}
                      />
                    </div>
                    <div className="w-16 h-12 rounded-lg overflow-hidden border-2 border-white/50 shadow-lg hover:border-white/80 transition-colors">
                      <OptimizedImage
                        src={realScoutImageUrls.backyard}
                        alt="Huge landscaped backyard perfect for entertaining"
                        width={64}
                        height={48}
                        className="object-cover w-full h-full"
                        quality={80}
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* V0 Image Overlay Content */}
                  <div className="absolute bottom-8 left-8 text-white">
                    <div className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h3 className="text-3xl font-bold mb-2">11773 Golden Moments Avenue</h3>
                      <div className="flex items-center space-x-2 text-blue-100 mb-4">
                        <MapPin className="w-5 h-5" />
                        <span>The Vistas Summerlin, Las Vegas, NV 89138</span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <Bed className="w-4 h-4" />
                          <span>4 bed</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Bath className="w-4 h-4" />
                          <span>3 bath</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Square className="w-4 h-4" />
                          <span>2,500+ sq ft</span>
                        </div>
                      </div>
                      <div className="mt-4 text-sm text-blue-100">
                        <span className="bg-white/20 px-3 py-1 rounded-full">MLS #2722090</span>
                      </div>
                    </div>
                  </div>

                  {/* V0 Price Badge */}
                  <div className="absolute top-8 right-8">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-2xl font-bold text-xl shadow-lg border border-white/20">
                      $738,700
                    </div>
                  </div>
                </div>

                {/* Property Details */}
                <div className="p-12 bg-gradient-to-br from-white to-blue-50">
                  <div className="space-y-8">
                    
                    {/* Property Description */}
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">🏡 About This Home</h4>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        This exceptional 4-bedroom, 3-bathroom home at 11773 Golden Moments Avenue represents the perfect 
                        blend of luxury and comfort in The Vistas Summerlin. Featuring two spacious primary suites, 
                        this property offers flexible living arrangements perfect for multi-generational families or 
                        those seeking additional privacy. The modern chef's kitchen showcases black granite countertops 
                        and white shaker cabinets, creating a sophisticated culinary space.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        The expansive landscaped yard provides ample space for outdoor entertaining and relaxation, 
                        while the move-in ready condition ensures a seamless transition. Located in the prestigious 
                        Vistas Summerlin master-planned community, this home offers access to world-class amenities 
                        including TPC Summerlin golf course and Downtown Summerlin's shopping and dining destinations.
                      </p>
                    </div>
                    
                    {/* V0 Property Features */}
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-6">✨ Key Features</h4>
                      <div className="grid grid-cols-1 gap-4">
                        {[
                          "Two spacious primary suites with private bathrooms",
                          "Modern chef's kitchen with black granite countertops and white shaker cabinets",
                          "Huge landscaped yard perfect for entertaining and outdoor living",
                          "Move-in ready condition with recent updates",
                          "Prime location in The Vistas Summerlin master-planned community",
                          "Excellent schools and world-class amenities nearby",
                          "Access to TPC Summerlin golf course",
                          "Close proximity to Downtown Summerlin shopping and dining",
                          "Mountain views and natural desert landscaping",
                          "Two-car garage with additional storage space"
                        ].map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* V0 CTA Buttons */}
                    <div className="space-y-4">
                      <a
                        href="https://drjanduffy.realscout.com/homesearch/listings/p-11773-golden-moments-avenue-las-vegas-89138-glvartrestle-139"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>View Full Listing</span>
                      </a>
                      
                      <a
                        href="tel:+17025000607"
                        className="block w-full border-2 border-blue-600 text-blue-600 text-center py-4 rounded-2xl font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                      >
                        <Phone className="w-5 h-5" />
                        <span>Call Dr. Jan Duffy</span>
                      </a>
                    </div>
                    
                    {/* Neighborhood Information */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-200">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">📍 The Vistas Summerlin Community</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">🏫 Schools</h5>
                          <ul className="space-y-1">
                            <li>• Palo Verde High School</li>
                            <li>• Sig Rogich Middle School</li>
                            <li>• Ernest May Elementary</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">🏌️ Amenities</h5>
                          <ul className="space-y-1">
                            <li>• TPC Summerlin Golf Course</li>
                            <li>• Community pools & tennis courts</li>
                            <li>• Walking trails & parks</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* V0 Urgency Message */}
                    <div className="bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200 rounded-2xl p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <Zap className="w-6 h-6 text-orange-600" />
                        <h5 className="text-lg font-bold text-orange-800">Limited Time Opportunity</h5>
                      </div>
                      <p className="text-orange-700">
                        This exceptional home won't last long in The Vistas Summerlin market. 
                        Schedule your private tour today!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* V0 Interactive RealScout Frame */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  🏡 Explore Complete Property Details
                </h3>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  View detailed photos, virtual tours, and contact Dr. Jan Duffy directly through our interactive listing portal
                </p>
              </div>
              
              <RealScoutFrame 
                url="https://drjanduffy.realscout.com/homesearch/listings/p-11773-golden-moments-avenue-las-vegas-89138-glvartrestle-139"
                title="11773 Golden Moments Avenue - Complete Listing"
                description="Interactive RealScout portal with full property details, photos, and contact options"
                className="shadow-2xl"
              />
            </div>

            {/* V0 Bottom CTA */}
            <div className="text-center mt-16">
              <p className="text-xl text-blue-100 mb-8">
                Ready to make this your dream home?
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/properties/11773-golden-moments-avenue"
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-10 py-4 rounded-2xl text-lg font-bold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Tour</span>
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-10 py-4 rounded-2xl text-lg font-bold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Heart className="w-5 h-5" />
                  <span>Get More Info</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* V0 Clean Homepage Content */}
        <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
          {/* V0 Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                The Vistas Summerlin
                <span className="block text-3xl lg:text-4xl mt-4 text-gray-700">Las Vegas Premier Luxury Community</span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                Welcome to The Vistas Summerlin, Las Vegas's most prestigious master-planned community. 
                Developed in 2000 as Summerlin West's first community, The Vistas offers an 815-acre 
                European-inspired village that combines luxury living with unparalleled amenities.
              </p>
            </div>

            {/* V0 Community Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <HomeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">28+ Subcommunities</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  From Mediterranean-inspired Portofino to the royal elegance of Kingwood, 
                  discover diverse luxury living options.
                </p>
                <div className="text-center mt-6">
                  <Link href="/communities" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                    Explore Communities <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">$500K - $2.5M+</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Stunning luxury homes with mountain views, golf course access, and 
                  proximity to world-class amenities.
                </p>
                <div className="text-center mt-6">
                  <Link href="/search" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                    View Listings <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Expert Service</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Dr. Jan Duffy offers personalized service with flexible scheduling 
                  that works around your lifestyle.
                </p>
                <div className="text-center mt-6">
                  <Link href="/about" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                    Meet Dr. Duffy <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* V0 CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-6">Ready to Find Your Dream Home?</h3>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Let Dr. Jan Duffy guide you through The Vistas Summerlin's luxury real estate market 
                  with personalized service and expert local knowledge.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    href="/contact"
                    className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Contact Dr. Duffy</span>
                  </Link>
                  <Link
                    href="/valuation"
                    className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <TrendingUp className="w-5 h-5" />
                    <span>Get Home Value</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* V0 Brand Focus Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          {/* V0 Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              {/* V0 Brand Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 text-blue-200 font-medium mb-8 shadow-lg hover:bg-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Crown className="w-6 h-6" />
                <span>The Vistas Summerlin | Homes by Dr. Jan Duffy</span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Your Trusted Real Estate Expert
              </h2>
              <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
                Dr. Jan Duffy specializes in The Vistas Summerlin luxury community, offering personalized service 
                with flexible scheduling that works around YOUR lifestyle. Serving discerning buyers, sellers, 
                and investors across Henderson, Enterprise, and Southwest Vegas.
              </p>

              {/* V0 Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Award className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                  <p className="text-sm text-blue-200">12+ Years</p>
                  <p className="text-lg font-bold text-white">Experience</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Star className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                  <p className="text-sm text-blue-200">4.9 Rating</p>
                  <p className="text-lg font-bold text-white">150+ Reviews</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <HomeIcon className="w-8 h-8 text-green-300 mx-auto mb-3" />
                  <p className="text-sm text-blue-200">The Vistas</p>
                  <p className="text-lg font-bold text-white">Specialist</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg">
                  <Clock className="w-8 h-8 text-purple-300 mx-auto mb-3" />
                  <p className="text-sm text-blue-200">Flexible</p>
                  <p className="text-lg font-bold text-white">Scheduling</p>
                </div>
              </div>

              {/* V0 CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Dr. Jan Duffy</span>
                </Link>
                <Link
                  href="/communities"
                  className="border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Explore The Vistas</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <HomeEvaluationSection />
        <PropertyCategories />
        <FeaturedCommunities />
        
        
        {/* V0 Service Areas Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
          {/* V0 Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-200/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Service Areas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dr. Jan Duffy serves discerning clients across the Las Vegas Valley with expertise in The Vistas Summerlin
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: 'The Vistas Summerlin', icon: Crown, featured: true },
                { name: 'Henderson', icon: Building },
                { name: 'Enterprise', icon: Building },
                { name: 'Southwest Vegas', icon: Building },
                { name: 'Summerlin', icon: Mountain },
                { name: 'Paradise', icon: Building },
                { name: 'Las Vegas', icon: Building },
                { name: 'Clark County', icon: Building },
                { name: 'Desert Hills', icon: Building },
                { name: 'Spring Valley', icon: Building }
              ].map((area, index) => (
                <div key={index} className={`${area.featured ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-white/80 backdrop-blur-sm border border-white/50'} rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                  <area.icon className={`w-6 h-6 ${area.featured ? 'text-white' : 'text-blue-600'} mx-auto mb-2`} />
                  <p className={`text-sm font-medium ${area.featured ? 'text-white' : 'text-gray-900'}`}>{area.name}</p>
                  {area.featured && <p className="text-xs text-blue-200 mt-1">Specialty</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Google Business Profile Widget */}
        <GoogleBusinessProfileWidget />
        
        {/* Review Collection Widget */}
        <ReviewCollectionWidget />
        
        {/* Local SEO Showcase */}
        <LocalSEOShowcase />
        
        {/* V0 Enhanced Quick Links Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          {/* V0 Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
            
            {/* Additional floating elements */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-700"></div>
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-pink-500/10 rounded-full blur-lg animate-pulse delay-300"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Ready to Work with The Vistas Summerlin Expert?
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Dr. Jan Duffy offers flexible scheduling that works around YOUR lifestyle. 
                Available early mornings, evenings, and weekends.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* V0 Quick Action Cards */}
              <Link href="/contact" className="group">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Call Dr. Jan</h3>
                  <p className="text-blue-200 mb-4">(702) 500-0607</p>
                  <p className="text-sm text-blue-300">Available Daily 6AM-9PM</p>
                </div>
              </Link>

              <Link href="/communities" className="group">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Explore Communities</h3>
                  <p className="text-blue-200 mb-4">The Vistas & More</p>
                  <p className="text-sm text-blue-300">Luxury Neighborhoods</p>
                </div>
              </Link>

              <Link href="/valuation" className="group">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Home Valuation</h3>
                  <p className="text-blue-200 mb-4">Free Market Analysis</p>
                  <p className="text-sm text-blue-300">Instant Results</p>
                </div>
              </Link>

              <Link href="/about" className="group">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Meet Dr. Jan</h3>
                  <p className="text-blue-200 mb-4">Your Real Estate Expert</p>
                  <p className="text-sm text-blue-300">12+ Years Experience</p>
                </div>
              </Link>
            </div>

            {/* V0 Final CTA */}
            <div className="text-center mt-16">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Why Choose The Vistas Summerlin | Homes by Dr. Jan Duffy?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-white mb-2">Flexible Scheduling</h4>
                    <p className="text-blue-200">Works around YOUR lifestyle</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-white mb-2">The Vistas Expert</h4>
                    <p className="text-blue-200">Specialized local knowledge</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-white mb-2">12+ Years Experience</h4>
                    <p className="text-blue-200">Proven track record</p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-xl text-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center space-x-3"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActionButton href="tel:+17025000607">
        <Phone className="w-6 h-6" />
      </FloatingActionButton>
      <ScrollToTop />
    </div>
  );
}