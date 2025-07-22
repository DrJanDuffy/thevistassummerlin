import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedCommunities, CommunityData } from '@/lib/community-utils';
import { Button } from './ui/Button';

// Sub-component for a single community card
function CommunityCard({ community }: { community: CommunityData }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group">
      <Link href={`/communities/${community.slug}`} className="block">
        <div className="relative h-48">
          <Image
            src={community.image}
            alt={`A view of ${community.name}`}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 truncate">{community.name}</h3>
          <p className="text-gray-600 mb-4">{community.stats?.priceRange}</p>
          <Button asChild className="w-full">
            <Link href={`/communities/${community.slug}`}>View Details</Link>
          </Button>
        </div>
      </Link>
    </div>
  );
}

// Main async server component
export default async function CommunitySpotlight() {
  const featuredCommunities = await getFeaturedCommunities(3);

  if (!featuredCommunities.length) {
    return (
      <div className="text-center text-gray-500">
        <p>No featured communities to display at the moment.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredCommunities.map((community) => (
        <CommunityCard key={community.slug} community={community} />
      ))}
    </div>
  );
} 