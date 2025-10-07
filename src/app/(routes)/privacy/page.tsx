import { Metadata } from 'next';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';

export const metadata: Metadata = {
  title: 'Privacy Policy - The Vistas Summerlin | Homes by Dr. Jan Duffy',
  description: 'Privacy Policy for The Vistas Summerlin real estate website. How Dr. Jan Duffy protects your personal information.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                How we protect your personal information at The Vistas Summerlin
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Privacy Policy for The Vistas Summerlin Real Estate
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Dr. Jan Duffy is committed to protecting your privacy and personal information. 
                This privacy policy explains how we collect, use, and protect your information 
                when you use our website and services.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Information We Collect
              </h3>
              
              <p className="mb-6">
                We collect information you provide directly to us, such as when you contact us 
                about real estate services, request property information, or schedule appointments. 
                This may include your name, email address, phone number, and property preferences.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                How We Use Your Information
              </h3>
              
              <p className="mb-6">
                We use your information to provide real estate services, respond to your inquiries, 
                schedule appointments, and send you relevant property information. We do not sell 
                or share your personal information with third parties without your consent.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Information Protection
              </h3>
              
              <p className="mb-6">
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. Your 
                information is stored securely and accessed only by authorized personnel.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Contact Information
              </h3>
              
              <p className="mb-6">
                If you have questions about this privacy policy, contact Dr. Jan Duffy at 
                (702) 500-0607 or visit our office at 11312 Parkside Way, Las Vegas, NV 89138.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                Updates to Privacy Policy
              </h3>
              
              <p className="mb-6">
                We may update this privacy policy from time to time. We will notify you of any 
                significant changes by posting the updated policy on our website.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
