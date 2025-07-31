import { notFound } from 'next/navigation';
import { getNeighborhoodBySlug, getNeighborhoodSlugs } from '@/constants/neighborhoods';
import { Metadata } from 'next';

// Generate static params for all neighborhoods
export async function generateStaticParams() {
  const slugs = getNeighborhoodSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each community
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const neighborhood = getNeighborhoodBySlug(params.slug);
  
  if (!neighborhood) {
    return {
      title: 'Community Not Found | The Vistas Summerlin',
      description: 'The requested community could not be found.',
    };
  }

  return {
    title: `${neighborhood.name} Community | The Vistas Summerlin`,
    description: `Discover ${neighborhood.name} community in The Vistas Summerlin. Explore homes, amenities, and lifestyle in this prestigious Las Vegas neighborhood.`,
    openGraph: {
      title: `${neighborhood.name} Community | The Vistas Summerlin`,
      description: `Discover ${neighborhood.name} community in The Vistas Summerlin. Explore homes, amenities, and lifestyle in this prestigious Las Vegas neighborhood.`,
      type: 'website',
    },
  };
}

export default function CommunityPage({ params }: { params: { slug: string } }) {
  const neighborhood = getNeighborhoodBySlug(params.slug);

  if (!neighborhood) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-primary font-bold text-text-dark mb-4 md:mb-6">
            {neighborhood.name} Community
          </h1>
          <p className="text-lg sm:text-xl font-secondary text-text-light max-w-3xl mx-auto leading-relaxed">
            Discover the unique charm and lifestyle of {neighborhood.name} in The Vistas Summerlin, 
            one of Las Vegas&apos; most prestigious residential areas.
          </p>
        </div>

        {/* Community Information */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="bg-white rounded-default shadow-widget p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-primary font-bold text-text-dark mb-4">
              About {neighborhood.name}
            </h2>
            <p className="text-text-light font-secondary leading-relaxed mb-6">
              {neighborhood.name} offers residents a perfect blend of luxury living and community spirit. 
              With meticulously maintained homes, beautiful landscaping, and a welcoming atmosphere, 
              this neighborhood exemplifies the high standards of The Vistas Summerlin.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-link-blue rounded-full mr-3"></div>
                <span className="font-secondary text-text-light">Beautiful homes with modern amenities</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-success-green rounded-full mr-3"></div>
                <span className="font-secondary text-text-light">Well-maintained community spaces</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary-navy rounded-full mr-3"></div>
                <span className="font-secondary text-text-light">Friendly, welcoming neighbors</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-default shadow-widget p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-primary font-bold text-text-dark mb-4">
              Community Features
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-link-blue pl-4">
                <h3 className="font-primary font-semibold text-text-dark mb-1">Location</h3>
                <p className="font-secondary text-text-light">Prime location in The Vistas Summerlin</p>
              </div>
              <div className="border-l-4 border-success-green pl-4">
                <h3 className="font-primary font-semibold text-text-dark mb-1">Lifestyle</h3>
                <p className="font-secondary text-text-light">Active community with social events</p>
              </div>
              <div className="border-l-4 border-primary-navy pl-4">
                <h3 className="font-primary font-semibold text-text-dark mb-1">Security</h3>
                <p className="font-secondary text-text-light">Safe, gated community environment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-default shadow-widget p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-primary font-bold text-text-dark mb-4">
            Interested in {neighborhood.name}?
          </h2>
          <p className="text-text-light font-secondary mb-6 max-w-2xl mx-auto">
            Contact Dr. Jan Duffy to learn more about available properties in {neighborhood.name} 
            and discover why this community is perfect for your next home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-default text-white bg-link-blue hover:bg-link-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-link-blue transition-colors duration-200"
            >
              Contact Dr. Jan Duffy
            </a>
            <a
              href="/search"
              className="inline-flex items-center justify-center px-6 py-3 border border-link-blue text-base font-medium rounded-default text-link-blue bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-link-blue transition-colors duration-200"
            >
              Search Properties
            </a>
          </div>
        </div>
      </main>
    </div>
  );
} 