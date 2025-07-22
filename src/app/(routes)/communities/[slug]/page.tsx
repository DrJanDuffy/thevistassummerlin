import { getCommunityBySlug, getAllCommunitySlugs, CommunityData } from "@/lib/community-utils";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BarChart, Users, MapPin, Building, Shield, Footprints, TrainFront, Bike, GraduationCap } from 'lucide-react';
import { RealScoutWidget } from "@/components/RealScoutWidget";

// Sub-component for the details sidebar
const CommunityDetailsSidebar = ({ community }: { community: CommunityData }) => (
  <aside className="space-y-6">
    {/* Stats Card */}
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold mb-4 flex items-center"><BarChart className="mr-3 text-blue-600" /> Stats</h3>
      <ul className="space-y-2 text-gray-700">
        <li className="flex justify-between"><span>Listings:</span> <span className="font-semibold">{community.stats?.listings ?? '—'}</span></li>
        <li className="flex justify-between"><span>Price Range:</span> <span className="font-semibold">{community.stats?.priceRange ?? '—'}</span></li>
        <li className="flex justify-between"><span>Sold Last Month:</span> <span className="font-semibold">{community.stats?.soldLastMonth ?? '—'}</span></li>
      </ul>
    </div>
    
    {/* Amenities Card */}
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold mb-4 flex items-center"><Users className="mr-3 text-green-600" /> Amenities</h3>
      <ul className="flex flex-wrap gap-2">
        {community.amenities?.map((a) => (
          <li key={a} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">{a}</li>
        ))}
      </ul>
    </div>

    {/* Neighborhood Card */}
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold mb-4 flex items-center"><Building className="mr-3 text-purple-600" /> Neighborhood</h3>
      <ul className="space-y-2 text-gray-700">
        <li className="flex items-center justify-between"><span className="flex items-center"><Footprints className="mr-2" /> Walk Score:</span> <span className="font-semibold">{community.neighborhood?.walkScore ?? '—'}</span></li>
        <li className="flex items-center justify-between"><span className="flex items-center"><TrainFront className="mr-2" /> Transit Score:</span> <span className="font-semibold">{community.neighborhood?.transitScore ?? '—'}</span></li>
        <li className="flex items-center justify-between"><span className="flex items-center"><Bike className="mr-2" /> Bike Score:</span> <span className="font-semibold">{community.neighborhood?.bikeScore ?? '—'}</span></li>
        <li className="flex items-center justify-between"><span className="flex items-center"><Shield className="mr-2" /> Crime Rate:</span> <span className="font-semibold">{community.neighborhood?.crimeRate ?? '—'}</span></li>
        <li className="flex items-center justify-between"><span className="flex items-center"><GraduationCap className="mr-2" /> School Rating:</span> <span className="font-semibold">{community.neighborhood?.schoolRating ?? '—'}</span></li>
      </ul>
    </div>
  </aside>
);

export default async function CommunityPage({ params }: { params: { slug: string } }) {
  const community = await getCommunityBySlug(params.slug);
  if (!community) return notFound();

  // For the map - ensure coordinates exist
  const mapUrl = community.location?.coordinates
    ? `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-l+0A2540(${community.location.coordinates.lng},${community.location.coordinates.lat})/${community.location.coordinates.lng},${community.location.coordinates.lat},13/800x400?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`
    : null;
    
  // For RealScout widget - ensure coordinates exist
  const geoBoundsJson = community.location?.coordinates ? JSON.stringify({
    type: "Polygon",
    coordinates: [
      [
        [community.location.coordinates.lng - 0.01, community.location.coordinates.lat - 0.01],
        [community.location.coordinates.lng + 0.01, community.location.coordinates.lat - 0.01],
        [community.location.coordinates.lng + 0.01, community.location.coordinates.lat + 0.01],
        [community.location.coordinates.lng - 0.01, community.location.coordinates.lat + 0.01],
        [community.location.coordinates.lng - 0.01, community.location.coordinates.lat - 0.01]
      ]
    ]
  }) : null;

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96">
        <Image
          src={community.image}
          alt={`Hero image for ${community.name}`}
          layout="fill"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <nav aria-label="Breadcrumb" className="text-sm text-gray-300 mb-2">
              <ol className="list-reset flex justify-center">
                <li><Link href="/communities" className="hover:underline">Communities</Link></li>
                <li><span className="mx-2">/</span></li>
                <li className="font-semibold text-white">{community.name}</li>
              </ol>
            </nav>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">{community.name}</h1>
            <p className="text-xl lg:text-2xl mt-2 max-w-2xl">{community.description}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Live Listings Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Live Listings in {community.name}</h2>
              {geoBoundsJson ? (
                <RealScoutWidget 
                  listing-status="For Sale"
                  property-types="SFR,MF,TC"
                  price-min="500000"
                  price-max="4000000"
                  geo-bounds-json={geoBoundsJson}
                />
              ) : (
                <div className="text-center text-gray-500 p-4 border rounded-lg">
                  <p>Live listings for this area are currently unavailable.</p>
                </div>
              )}
            </section>

            {/* Location & Map Section */}
            {mapUrl && (
              <section>
                <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center"><MapPin className="mr-3 text-red-600" /> Location</h2>
                <div className="grid md:grid-cols-2 gap-8 text-lg">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>City:</strong> {community.location?.city ?? '—'}</li>
                    <li><strong>State:</strong> {community.location?.state ?? '—'}</li>
                    <li><strong>Zip Codes:</strong> {community.location?.zipCodes?.join(', ') ?? '—'}</li>
                  </ul>
                  <div className="rounded-2xl shadow-lg overflow-hidden h-64 relative">
                     <Image src={mapUrl} alt={`Map of ${community.name}`} layout="fill" className="object-cover" />
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <CommunityDetailsSidebar community={community} />
          </div>
        </div>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await getAllCommunitySlugs();
  return slugs.map((slug) => ({
    slug,
  }));
} 