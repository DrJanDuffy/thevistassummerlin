import { Metadata } from 'next';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';

export const metadata: Metadata = {
  title: 'Terms of Service - The Vistas Summerlin | Homes by Dr. Jan Duffy',
  description: 'Terms of Service for The Vistas Summerlin real estate website. Dr. Jan Duffy\'s terms and conditions for real estate services.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Terms and conditions for The Vistas Summerlin real estate services
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Terms of Service for The Vistas Summerlin Real Estate
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                These terms of service govern your use of The Vistas Summerlin website and services 
                provided by Dr. Jan Duffy. By using our website, you agree to these terms.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Real Estate Services
              </h3>
              
              <p className="mb-6">
                Dr. Jan Duffy provides real estate services specializing in The Vistas Summerlin 
                community. All real estate transactions are subject to Nevada state laws and 
                regulations. Dr. Duffy is licensed to practice real estate in Nevada and maintains 
                professional standards in all transactions.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Website Use
              </h3>
              
              <p className="mb-6">
                The information on this website is provided for general informational purposes only. 
                While we strive to keep information accurate and up-to-date, we make no warranties 
                about the completeness or accuracy of the information. Property information should 
                be verified independently.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Contact Information
              </h3>
              
              <p className="mb-6">
                For questions about these terms or our services, contact Dr. Jan Duffy at 
                (702) 500-0607 or visit our office at 11312 Parkside Way, Las Vegas, NV 89138.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Privacy Policy
              </h3>
              
              <p className="mb-6">
                Your privacy is important to us. Please review our Privacy Policy for information 
                about how we collect, use, and protect your personal information.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Updates to Terms
              </h3>
              
              <p className="mb-6">
                We may update these terms from time to time. Continued use of our website 
                constitutes acceptance of any changes to these terms.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
