import Link from 'next/link';
import fs from 'fs';
import path from 'path';

function getCommunitySlugsAndImages() {
  const dir = path.join(process.cwd(), 'public/subcommunities');
  const files = fs.readdirSync(dir);
  // Only use image files (jpg, jpeg, png, webp, heic)
  const images = files.filter((f) => /\.(jpg|jpeg|png|webp|heic)$/i.test(f));
  return images.map((filename) => {
    const slug = filename.replace(/\.[^.]+$/, '').toLowerCase();
    return {
      slug,
      image: `/subcommunities/${filename}`,
    };
  });
}

export default function CommunitiesPage() {
  const communities = getCommunitySlugsAndImages();
  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Communities in The Vistas Summerlin</h1>
      <p className="mb-8 text-lg text-gray-700">Explore all the neighborhoods and subcommunities in The Vistas Summerlin. Click a community to see details, listings, and more.</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {communities.map(({ slug, image }) => (
          <li key={slug} className="">
            <Link href={`/communities/${slug}`} className="block bg-white rounded-lg shadow-widget p-0 hover:bg-primary hover:text-white transition-colors font-semibold text-center overflow-hidden">
              <img src={image} alt={slug.replace(/-/g, ' ')} className="w-full h-40 object-cover" />
              <div className="p-4">
                {slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
} 