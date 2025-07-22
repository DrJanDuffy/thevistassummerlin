import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import RealScoutAdvancedSearch from '@/components/RealScoutAdvancedSearch';

export default function Financing() {
  return (
    <div className="flex min-h-screen flex-col font-secondary text-text-dark">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary-navy to-link-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-primary font-medium mb-6">
              Financing Options
            </h1>
            <p className="text-xl lg:text-2xl font-secondary opacity-90 max-w-3xl mx-auto leading-relaxed">
              Explore financing solutions for your dream home in The Vistas Summerlin
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Find Your Perfect Home
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-2xl mx-auto">
                Start your search for available properties in The Vistas Summerlin
              </p>
            </div>
            
            <RealScoutAdvancedSearch />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 