import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import RealScoutAdvancedSearch from '@/components/RealScoutAdvancedSearch';
import RealScoutYourListings from '@/components/RealScoutYourListings';

export default function Search() {
  return (
    <div className="flex min-h-screen flex-col font-secondary text-text-dark">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary-navy to-link-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-primary font-medium mb-6">
              Find Your Perfect Home
            </h1>
            <p className="text-xl lg:text-2xl font-secondary opacity-90 max-w-3xl mx-auto leading-relaxed">
              Search available properties in The Vistas Summerlin with our advanced search tools
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-primary font-medium text-text-dark mb-6">
                Advanced Property Search
              </h2>
              <p className="text-xl font-secondary text-text-light max-w-2xl mx-auto">
                Use our comprehensive search tool to find homes that match your criteria
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <RealScoutAdvancedSearch />
              <RealScoutYourListings />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 