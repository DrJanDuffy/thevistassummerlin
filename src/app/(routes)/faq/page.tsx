import type { Metadata } from 'next';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { 
  RealEstateExpertSchema, 
  FAQSchema, 
  BreadcrumbSchema 
} from '@/components/StructuredData';
import { 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Star,
  CheckCircle,
  Home,
  DollarSign,
  Users,
  Award
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - The Vistas Summerlin | Dr. Jan Duffy',
  description: 'Get answers to common questions about The Vistas Summerlin, Canterra community, home prices, amenities, and Dr. Jan Duffy\'s real estate services with flexible scheduling.',
  keywords: [
    'The Vistas Summerlin FAQ',
    'Canterra community questions',
    'Summerlin homes FAQ',
    'Dr. Jan Duffy questions',
    'Las Vegas real estate FAQ',
    'Vistas Summerlin amenities',
    'home prices Summerlin',
    'real estate agent questions'
  ],
  openGraph: {
    title: 'Frequently Asked Questions - The Vistas Summerlin | Dr. Jan Duffy',
    description: 'Get answers to common questions about The Vistas Summerlin, Canterra community, home prices, amenities, and Dr. Jan Duffy\'s real estate services.',
    url: 'https://www.thevistassummerlin.com/faq',
  },
  alternates: {
    canonical: 'https://www.thevistassummerlin.com/faq',
  },
};

export default function FAQPage() {
  const faqs = [
    {
      category: 'About The Vistas Summerlin',
      questions: [
        {
          question: 'What is The Vistas Summerlin?',
          answer: 'The Vistas Summerlin is Las Vegas\'s premier master-planned luxury community, developed in 2000 as Summerlin West\'s first community. It features 815 acres of European-inspired village design with 28+ subcommunities, luxury homes ranging from $800K to $2.5M+, and world-class amenities including TPC Summerlin golf course access.'
        },
        {
          question: 'Where is The Vistas Summerlin located?',
          answer: 'The Vistas Summerlin is located in Las Vegas, Nevada, specifically in the Summerlin area at 89138. The community center is at 11312 Parkside Way, Las Vegas, NV 89138. It\'s conveniently located near TPC Summerlin golf course and Downtown Summerlin shopping and dining.'
        },
        {
          question: 'How many subcommunities are in The Vistas Summerlin?',
          answer: 'The Vistas Summerlin features 28+ distinct subcommunities, each with its own unique character and amenities. Popular communities include Canterra (oversized lots), Kingwood (royal-inspired homes), Santalina (Mediterranean style), Portofino (Italian-inspired), and many more.'
        }
      ]
    },
    {
      category: 'Canterra Community',
      questions: [
        {
          question: 'What makes Canterra community unique?',
          answer: 'Canterra is The Vistas Summerlin\'s premier community featuring oversized lots up to 11,761 sq ft, dual master suite floor plans perfect for multi-generational living, flexible square footage (1,829-2,787 sq ft), and Summerlin mandated features with 15% outdoor living space and 360-degree design.'
        },
        {
          question: 'What are the benefits of oversized lots in Canterra?',
          answer: 'Canterra\'s oversized lots provide room for pool installation with professional landscaping, larger side yards for more privacy between homes, space for outdoor kitchens and entertainment areas, and RV parking. These lots were acquired during the pre-boom era when land was more affordable, making them excellent investments.'
        },
        {
          question: 'What is a dual master suite floor plan?',
          answer: 'Dual master suite floor plans feature two master bedrooms, each with their own private bathroom. This design is perfect for multi-generational living, accommodating adult children, aging parents, or providing guest suites. It was a highly sought-after feature in early 2000s Las Vegas real estate.'
        }
      ]
    },
    {
      category: 'Home Prices & Market',
      questions: [
        {
          question: 'What are the home prices in The Vistas Summerlin?',
          answer: 'The Vistas Summerlin offers luxury homes ranging from $800,000 to $2,500,000+. Prices vary by community, lot size, and home features. Canterra homes typically range from $700K to $1.2M, while other communities like Kingwood and Santaluz offer homes up to $2.5M+.'
        },
        {
          question: 'Why are homes in The Vistas Summerlin good investments?',
          answer: 'The Vistas Summerlin homes are excellent investments due to their prime Summerlin location, master-planned community amenities, proximity to TPC Summerlin golf course, excellent schools, and limited supply. The community was built during the pre-boom era, providing excellent appreciation potential.'
        },
        {
          question: 'What is the current market trend in The Vistas Summerlin?',
          answer: 'The Vistas Summerlin continues to see strong demand due to its unique positioning as a luxury master-planned community with limited inventory. Properties typically appreciate well due to the community\'s amenities, location, and quality construction.'
        }
      ]
    },
    {
      category: 'Amenities & Lifestyle',
      questions: [
        {
          question: 'What amenities are available in The Vistas Summerlin?',
          answer: 'The Vistas Summerlin offers world-class amenities including TPC Summerlin golf course access, community pools, tennis courts, walking trails, mountain views, Downtown Summerlin shopping and dining, excellent schools, and the Vistas Community Center at 11312 Parkside Way.'
        },
        {
          question: 'Are there golf course homes available?',
          answer: 'Yes, many homes in The Vistas Summerlin offer golf course views or proximity to TPC Summerlin. Communities like Kingwood, Santalina, and others feature homes with golf course access and stunning mountain views.'
        },
        {
          question: 'What schools serve The Vistas Summerlin?',
          answer: 'The Vistas Summerlin is served by excellent schools in the Clark County School District, including top-rated elementary, middle, and high schools. The community\'s location in Summerlin provides access to some of Las Vegas\'s best educational opportunities.'
        }
      ]
    },
    {
      category: 'Dr. Jan Duffy\'s Services',
      questions: [
        {
          question: 'How can I contact Dr. Jan Duffy?',
          answer: 'Dr. Jan Duffy can be reached at (702) 500-0607 or DrJanSells@TheVistasSummerlin.com. She offers flexible scheduling that works around YOUR lifestyle, available early mornings, evenings, and weekends. Her office is located at 11312 Parkside Way, Las Vegas, NV 89138.'
        },
        {
          question: 'What makes Dr. Jan Duffy\'s service different?',
          answer: 'Dr. Jan Duffy offers flexible scheduling that works around YOUR lifestyle, specializing in The Vistas Summerlin with 12+ years of experience. She\'s available early mornings, evenings, and weekends, providing personalized service with deep local market knowledge.'
        },
        {
          question: 'Does Dr. Jan Duffy work with Berkshire Hathaway HomeServices?',
          answer: 'Yes, Dr. Jan Duffy is affiliated with Berkshire Hathaway HomeServices Nevada Properties, providing the backing of one of the world\'s most trusted real estate brands while maintaining her personalized, flexible approach to client service.'
        }
      ]
    },
    {
      category: 'Buying Process',
      questions: [
        {
          question: 'What is the buying process for homes in The Vistas Summerlin?',
          answer: 'The buying process includes initial consultation, market analysis, home search with Dr. Jan Duffy\'s expertise, property tours, offer negotiation, inspection, and closing. Dr. Jan Duffy guides you through each step with her flexible scheduling and local market knowledge.'
        },
        {
          question: 'Do you offer home valuation services?',
          answer: 'Yes, Dr. Jan Duffy provides free home valuation services for The Vistas Summerlin properties. She offers professional market analysis and pricing strategy to help you understand your home\'s current market value.'
        },
        {
          question: 'Can I get a virtual tour of homes?',
          answer: 'Yes, Dr. Jan Duffy offers virtual tours and can accommodate various viewing preferences. Her flexible scheduling allows for virtual consultations and property tours that fit your timeline.'
        }
      ]
    }
  ];

  return (
    <>
      {/* Structured Data */}
      <RealEstateExpertSchema />
      <FAQSchema />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.thevistassummerlin.com' },
        { name: 'FAQ', url: 'https://www.thevistassummerlin.com/faq' }
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
                Frequently Asked Questions
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto">
                Get answers to common questions about The Vistas Summerlin, Canterra community, 
                home prices, amenities, and Dr. Jan Duffy's real estate services.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
                  {category.category}
                </h2>
                
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <details className="group">
                        <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-blue-50 transition-colors">
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          <ChevronDown className="w-6 h-6 text-blue-600 group-open:rotate-180 transition-transform duration-200 flex-shrink-0" />
                        </summary>
                        <div className="px-6 pb-6">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </details>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Dr. Jan Duffy is here to help with any questions about The Vistas Summerlin, 
                Canterra community, or the home buying/selling process. Contact her today!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">(702) 500-0607</p>
                    <p className="text-sm text-gray-600">Call Dr. Jan Duffy</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">DrJanSells@TheVistasSummerlin.com</p>
                    <p className="text-sm text-gray-600">Email Dr. Jan Duffy</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Flexible Hours</p>
                    <p className="text-sm text-gray-600">6AM - 9PM Daily</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Contact Dr. Jan Duffy
                </Link>
                <Link
                  href="/communities"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Explore Communities
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
