import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | The Vistas Summerlin',
  description: 'The page you are looking for could not be found. Explore The Vistas Summerlin communities and find your perfect home.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-default shadow-widget p-8 md:p-12">
          <h1 className="text-6xl md:text-8xl font-primary font-bold text-link-blue mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-primary font-bold text-text-dark mb-4">
            Page Not Found
          </h2>
          <p className="text-text-light font-secondary mb-8 leading-relaxed">
            The page you are looking for could not be found. It might have been moved, 
            deleted, or you entered the wrong URL.
          </p>
          
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-default text-white bg-link-blue hover:bg-link-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-link-blue transition-colors duration-200"
            >
              Go to Homepage
            </Link>
            
            <div className="text-sm text-text-light">
              <p className="mb-2">Or explore our popular pages:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/communities"
                  className="text-link-blue hover:text-link-blue/80 underline"
                >
                  Communities
                </Link>
                <Link
                  href="/search"
                  className="text-link-blue hover:text-link-blue/80 underline"
                >
                  Search Properties
                </Link>
                <Link
                  href="/contact"
                  className="text-link-blue hover:text-link-blue/80 underline"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 