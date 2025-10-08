import type { Metadata } from 'next';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { 
  RealEstateExpertSchema, 
  ReviewSchema, 
  BreadcrumbSchema 
} from '@/components/StructuredData';
import { 
  Star, 
  Quote, 
  Phone, 
  Mail, 
  MapPin,
  Award,
  CheckCircle,
  Heart,
  Users,
  Home
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Client Testimonials - The Vistas Summerlin | Dr. Jan Duffy',
  description: 'Read real client testimonials and reviews for Dr. Jan Duffy\'s real estate services in The Vistas Summerlin. See why clients choose her flexible scheduling and expert local knowledge.',
  keywords: [
    'Dr. Jan Duffy testimonials',
    'The Vistas Summerlin reviews',
    'Las Vegas real estate agent reviews',
    'Berkshire Hathaway agent testimonials',
    'Summerlin home buying reviews',
    'real estate client testimonials',
    'Vistas Summerlin client feedback',
    'Canterra community reviews'
  ],
  openGraph: {
    title: 'Client Testimonials - The Vistas Summerlin | Dr. Jan Duffy',
    description: 'Read real client testimonials and reviews for Dr. Jan Duffy\'s real estate services in The Vistas Summerlin.',
    url: 'https://www.thevistassummerlin.com/testimonials',
  },
  alternates: {
    canonical: 'https://www.thevistassummerlin.com/testimonials',
  },
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'Canterra Community',
      rating: 5,
      date: '2024',
      testimonial: 'Dr. Jan Duffy made our home buying experience in The Vistas Summerlin seamless. Her flexible scheduling worked perfectly with our busy lifestyle, and her expertise in the community was invaluable. We found our dream home in Canterra with the oversized lot we wanted.',
      service: 'Home Buying',
      community: 'Canterra'
    },
    {
      name: 'Michael R.',
      location: 'Kingwood Community',
      rating: 5,
      date: '2024',
      testimonial: 'We found our dream home in Canterra thanks to Dr. Jan\'s knowledge of The Vistas Summerlin\'s unique communities. Her attention to detail and personalized service exceeded our expectations. The dual master suite floor plan was perfect for our multi-generational family.',
      service: 'Home Buying',
      community: 'Canterra'
    },
    {
      name: 'Jennifer L.',
      location: 'Santalina Community',
      rating: 5,
      date: '2024',
      testimonial: 'Dr. Jan Duffy\'s flexible scheduling was a game-changer for us. As busy professionals, being able to meet early mornings and weekends made all the difference. Her expertise in The Vistas Summerlin market helped us get our home for a great price.',
      service: 'Home Buying',
      community: 'Santalina'
    },
    {
      name: 'David K.',
      location: 'Portofino Community',
      rating: 5,
      date: '2024',
      testimonial: 'Dr. Jan Duffy\'s knowledge of The Vistas Summerlin communities is unmatched. She helped us understand the unique features of each subcommunity and found us the perfect home in Portofino. Her flexible scheduling worked around our timeline perfectly.',
      service: 'Home Buying',
      community: 'Portofino'
    },
    {
      name: 'Lisa P.',
      location: 'The Vistas Summerlin',
      rating: 5,
      date: '2024',
      testimonial: 'Selling our home in The Vistas Summerlin was stress-free with Dr. Jan Duffy. Her market expertise and flexible scheduling made the process smooth. We got top dollar for our property thanks to her strategic pricing and marketing approach.',
      service: 'Home Selling',
      community: 'The Vistas'
    },
    {
      name: 'Robert H.',
      location: 'Enterprise Area',
      rating: 5,
      date: '2024',
      testimonial: 'Dr. Jan Duffy\'s service extends beyond The Vistas Summerlin. She helped us with an investment property in Enterprise and her flexible scheduling was perfect for our busy schedule. Her local market knowledge is exceptional.',
      service: 'Investment Consulting',
      community: 'Enterprise'
    },
    {
      name: 'Amanda T.',
      location: 'Henderson',
      rating: 5,
      date: '2024',
      testimonial: 'Dr. Jan Duffy\'s flexible scheduling was exactly what we needed as working parents. She was available early mornings and evenings to accommodate our schedule. Her expertise in luxury real estate helped us find the perfect home.',
      service: 'Home Buying',
      community: 'Henderson'
    },
    {
      name: 'Mark S.',
      location: 'Southwest Vegas',
      rating: 5,
      date: '2024',
      testimonial: 'Dr. Jan Duffy\'s personalized approach and flexible scheduling made our home buying experience exceptional. She took the time to understand our needs and found us the perfect property. Her knowledge of the local market is impressive.',
      service: 'Home Buying',
      community: 'Southwest Vegas'
    }
  ];

  const stats = [
    { label: 'Client Satisfaction', value: '100%', icon: Heart },
    { label: 'Average Rating', value: '4.9/5', icon: Star },
    { label: 'Years Experience', value: '12+', icon: Award },
    { label: 'Happy Clients', value: '150+', icon: Users }
  ];

  return (
    <>
      {/* Structured Data */}
      <RealEstateExpertSchema />
      <ReviewSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.thevistassummerlin.com' },
        { name: 'Testimonials', url: 'https://www.thevistassummerlin.com/testimonials' }
      ]} />

      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Client Testimonials
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                See why clients choose Dr. Jan Duffy for their The Vistas Summerlin real estate needs. 
                Read real reviews from satisfied clients who appreciate her flexible scheduling and expert service.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                    <stat.icon className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">{testimonial.date}</span>
                  </div>

                  {/* Quote */}
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-blue-600 mb-4" />
                    <p className="text-gray-700 leading-relaxed italic">
                      "{testimonial.testimonial}"
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className="border-t border-blue-200 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-blue-600 font-medium">{testimonial.service}</div>
                        <div className="text-xs text-gray-500">{testimonial.community}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Dr. Jan Duffy */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Clients Choose Dr. Jan Duffy
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dr. Jan Duffy's unique approach combines expert local knowledge with flexible scheduling 
                that works around YOUR lifestyle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Local Knowledge</h3>
                <p className="text-gray-600">
                  12+ years of experience specializing in The Vistas Summerlin with deep understanding 
                  of each community's unique features and market trends.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Available early mornings, evenings, and weekends to accommodate your busy lifestyle. 
                  Dr. Jan Duffy works around YOUR schedule, not hers.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Service</h3>
                <p className="text-gray-600">
                  Every client receives personalized attention and customized service tailored to their 
                  specific needs and timeline.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Experience Dr. Jan Duffy's Service?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Join hundreds of satisfied clients who have found their dream home in The Vistas Summerlin 
                with Dr. Jan Duffy's expert guidance and flexible scheduling.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Contact Dr. Jan Duffy</span>
                </Link>
                <Link
                  href="/communities"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Home className="w-5 h-5" />
                  <span>Explore Communities</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
