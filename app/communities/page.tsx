import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import RealScoutSimpleSearch from '@/components/RealScoutSimpleSearch';

function getCommunitySlugsAndImages() {
  const dir = path.join(process.cwd(), 'public/subcommunities');
  const files = fs.readdirSync(dir);
  // Only use image files (jpg, jpeg, png, webp, heic)
  const images = files.filter((f) => /\.(jpg|jpeg|png|webp|heic)$/i.test(f));
  return images.map((filename) => {
    const slug = filename.replace(/\.[^/.]+$/, '').toLowerCase();
    return {
      slug,
      image: `/subcommunities/${filename}`,
    };
  });
}

export default function CommunitiesPage() {
  const communities = getCommunitySlugsAndImages();
  const formatSlug = (slugToFormat: string) => slugToFormat.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Communities in The Vistas Summerlin</h1>
      <p className="mb-8 text-lg text-gray-700">Explore all the neighborhoods and subcommunities in The Vistas Summerlin. Click a community to see details, listings, and more.</p>
      
      {/* RealScout Simple Search Widget */}
      <div className="mb-8 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">Quick Property Search</h2>
        <RealScoutSimpleSearch />
      </div>
      
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {communities.map(({ slug, image }) => (
          <li key={slug} className="">
            <Link href={`/communities/${slug}`} className="block bg-white rounded-lg shadow-widget p-0 hover:bg-primary hover:text-white transition-colors font-semibold text-center overflow-hidden">
              <div className="relative w-full h-40">
                <Image
                  src={image}
                  alt={formatSlug(slug)}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                {formatSlug(slug)}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
} 