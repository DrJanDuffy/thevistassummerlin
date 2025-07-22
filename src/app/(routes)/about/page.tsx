import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';

export const metadata: Metadata = {
  title: 'About - The Vistas Summerlin Community & Location',
  description: 'Learn about The Vistas Summerlin, one of Las Vegas\' most prestigious residential areas with 28 unique subcommunities and world-class amenities.',
  openGraph: {
    title: 'About - The Vistas Summerlin Community & Location',
    description: 'Discover the history, amenities, and lifestyle of The Vistas Summerlin community.',
    url: 'https://www.thevistassummerlin.com/about',
    type: 'website',
  },
};

const communityStats = [
  {
    number: '28',
    label: 'Subcommunities',
    description: 'Unique neighborhoods'
  },
  {
    number: '15+',
    label: 'Years of Excellence',
    description: 'Established community'
  },
  {
    number: '500+',
    label: 'Homes Available',
    description: 'Diverse options'
  },
  {
    number: '98%',
    label: 'Client Satisfaction',
    description: 'Happy residents'
  }
];

const amenities = [
  {
    category: 'Outdoor Recreation',
    items: ['Hiking Trails', 'Parks & Playgrounds', 'Golf Courses', 'Tennis Courts', 'Swimming Pools', 'Walking Paths']
  },
  {
    category: 'Education',
    items: ['Top-Rated Schools', 'Private Academies', 'Community College', 'Libraries', 'Educational Programs']
  },
  {
    category: 'Shopping & Dining',
    items: ['Shopping Centers', 'Fine Dining', 'Casual Restaurants', 'Grocery Stores', 'Boutiques', 'Entertainment']
  },
  {
    category: 'Healthcare',
    items: ['Medical Centers', 'Dental Offices', 'Specialists', 'Urgent Care', 'Wellness Centers']
  }
];

const locationHighlights = [
  {
    title: 'Prime Location',
    description: 'Conveniently located with easy access to the Strip, Red Rock Canyon, and all major amenities while maintaining a peaceful residential atmosphere.',
    icon: '📍'
  },
  {
    title: 'Investment Value',
    description: 'Strong appreciation rates and consistent demand make The Vistas Summerlin an excellent long-term investment opportunity.',
    icon: '📈'
  },
  {
    title: 'Quality Homes',
    description: 'Well-maintained properties with modern amenities, energy efficiency, and thoughtful design throughout all subcommunities.',
    icon: '🏠'
  },
  {
    title: 'Strong Community',
    description: 'Active homeowners associations, community events, and friendly neighbors create a welcoming environment for families and individuals.',
    icon: '👥'
  }
];

const testimonials = [
  {
    name: 'Sarah & Mike Johnson',
    location: 'Santaluz Community',
    text: 'We love living in The Vistas Summerlin! The mountain views are breathtaking and the community is so welcoming. Our kids have access to excellent schools and there\'s always something to do.',
    rating: 5
  },
  {
    name: 'David Chen',
    location: 'Red Rock Canyon',
    text: 'As an investor, I\'ve found The Vistas Summerlin to be incredibly profitable. The properties appreciate well and the rental demand is strong. It\'s a great place to invest.',
    rating: 5
  },
  {
    name: 'Maria Rodriguez',
    location: 'Summerlin Park',
    text: 'The family-friendly atmosphere and excellent amenities make this the perfect place to raise our children. We couldn\'t be happier with our decision to move here.',
    rating: 5
  }
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col font-secondary text-text-dark">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary-navy to-link-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-primary font-medium mb-6">
                About The Vistas Summerlin
              </h1>
              <p className="text-xl lg:text-2xl font-secondary opacity-90 max-w-3xl mx-auto leading-relaxed">
                Discover one of Las Vegas&apos; most prestigious residential areas with 28 unique subcommunities
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="py-4 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm font-secondary text-text-light">
              <Link href="/" className="hover:text-link-blue transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-text-dark">About</span>
            </nav>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-8">
                  Our Story
                </h2>
                <p className="text-xl font-secondary text-text-light mb-6 leading-relaxed">
                  The Vistas Summerlin is one of Las Vegas&apos; most prestigious residential areas, 
                  featuring 28 unique subcommunities that offer diverse housing options from 
                  luxury estates to family-friendly homes.
                </p>
                <p className="text-xl font-secondary text-text-light mb-8 leading-relaxed">
                  Our community is known for its stunning mountain views, world-class amenities, 
                  top-rated schools, and convenient access to shopping, dining, and entertainment. 
                  Whether you&apos;re looking for a peaceful retreat or an active lifestyle, 
                  The Vistas Summerlin has something for everyone.
                </p>
                
                <div className="grid grid-cols-2 gap-8 mb-10">
                  {communityStats.map((stat, index) => (
                    <div key={index} className="text-center p-6 bg-light-gray rounded-default">
                      <div className="text-4xl font-primary font-medium text-link-blue mb-3">{stat.number}</div>
                      <div className="text-lg font-secondary text-text-light">{stat.label}</div>
                      <div className="text-sm font-secondary text-text-light opacity-75">{stat.description}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6">
                                   <Link 
                   href="/communities"
                   className="bg-link-blue text-white px-8 py-4 rounded-default text-lg font-secondary font-medium hover:bg-primary-navy transition-all duration-300 text-center transform hover:scale-105"
                 >
                   Explore Communities
                 </Link>
                  <a 
                    href="/contact"
                    className="border-2 border-link-blue text-link-blue px-8 py-4 rounded-default text-lg font-secondary font-medium hover:bg-link-blue hover:text-white transition-all duration-300 text-center transform hover:scale-105"
                  >
                    Contact Our Team
                  </a>
                </div>
              </div>
              
              <div className="bg-light-gray p-10 rounded-default">
                <h3 className="text-2xl font-primary font-medium text-text-dark mb-8">
                  Why Choose The Vistas Summerlin?
                </h3>
                
                <div className="space-y-8">
                  {locationHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-6">
                      <div className="w-14 h-14 bg-link-blue rounded-full flex items-center justify-center flex-shrink-0 text-2xl">
                        {highlight.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-primary font-medium text-text-dark mb-3">
                          {highlight.title}
                        </h4>
                        <p className="text-body font-secondary text-text-light leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="py-20 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Community Amenities
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto leading-relaxed">
                Enjoy world-class amenities and services throughout The Vistas Summerlin
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {amenities.map((category, index) => (
                <div key={index} className="bg-white p-8 rounded-default shadow-lg">
                  <h3 className="text-xl font-primary font-medium text-text-dark mb-6">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-body font-secondary text-text-light">
                        <svg className="w-5 h-5 text-success-green mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Accessibility */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Location & Accessibility
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto leading-relaxed">
                Perfectly positioned for convenience and lifestyle
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-primary font-medium text-text-dark mb-6">
                  Strategic Location
                </h3>
                <p className="text-xl font-secondary text-text-light mb-8 leading-relaxed">
                  The Vistas Summerlin is strategically located in the heart of Las Vegas, 
                  offering the perfect balance of accessibility and tranquility. Our community 
                  provides easy access to major highways, the Las Vegas Strip, McCarran International 
                  Airport, and all the city has to offer.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-link-blue rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-primary font-medium text-text-dark">Las Vegas Strip</h4>
                      <p className="text-body font-secondary text-text-light">15 minutes away</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-success-green rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-primary font-medium text-text-dark">McCarran Airport</h4>
                      <p className="text-body font-secondary text-text-light">20 minutes away</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-navy rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-primary font-medium text-text-dark">Red Rock Canyon</h4>
                      <p className="text-body font-secondary text-text-light">10 minutes away</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-light-gray p-8 rounded-default">
                <h3 className="text-2xl font-primary font-medium text-text-dark mb-6">
                  Transportation
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-default">
                    <span className="font-secondary text-text-dark">Highway 215</span>
                    <span className="font-secondary text-text-light">5 min</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-default">
                    <span className="font-secondary text-text-dark">I-15 Freeway</span>
                    <span className="font-secondary text-text-light">10 min</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-default">
                    <span className="font-secondary text-text-dark">Public Transit</span>
                    <span className="font-secondary text-text-light">Available</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-default">
                    <span className="font-secondary text-text-dark">Bike Trails</span>
                    <span className="font-secondary text-text-light">Extensive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                What Our Residents Say
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto leading-relaxed">
                Hear from families and individuals who call The Vistas Summerlin home
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-default shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-body font-secondary text-text-light mb-6 leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div>
                    <div className="font-primary font-medium text-text-dark">{testimonial.name}</div>
                    <div className="text-sm font-secondary text-text-light">{testimonial.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Ready to Join Our Community?
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-3xl mx-auto mb-12 leading-relaxed">
                Discover why The Vistas Summerlin is the perfect place to call home. 
                Explore our communities and find your perfect match.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                 <Link 
                   href="/communities"
                   className="bg-link-blue text-white px-10 py-4 rounded-default text-lg font-secondary font-medium hover:bg-primary-navy transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                 >
                   Explore Communities
                 </Link>
                <a 
                  href="/contact"
                  className="border-2 border-link-blue text-link-blue px-10 py-4 rounded-default text-lg font-secondary font-medium hover:bg-link-blue hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us Today
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 