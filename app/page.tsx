"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { PropertyFilter } from '@/components/PropertyFilter';
import { PropertyList } from '@/components/PropertyList';
import { NLPSearchBar } from '@/components/NLPSearchBar';
const RealScoutOfficeListings = dynamic(() => import("./components/RealScoutOfficeListings"), { ssr: false, loading: () => <div className="w-full max-w-2xl mb-8 text-center text-gray-500">Loading listings…</div> });

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-8">
      {/* Optimized Hero Image */}
      <div className="w-full max-w-3xl mb-8">
        <Image
          src="/hero.jpg"
          alt="The Vistas Summerlin Hero"
          width={1200}
          height={480}
          sizes="(max-width: 768px) 100vw, 768px"
          priority
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>
      {/* RealScout Widget */}
      <div className="w-full max-w-2xl mb-8">
        <realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" />
      </div>
      <main className="flex flex-col items-center gap-8 w-full">
        <h1 className="text-h1 text-foreground text-center mb-4">
          Welcome to The Vistas Summerlin
        </h1>
        <p className="text-body text-muted-foreground text-center max-w-xl mb-2">
          Discover your perfect home in one of 28 vibrant subcommunities. Explore local market insights, community events, and the best of Summerlin living—all in one place.
        </p>
        
        <NLPSearchBar />

        <a
          href="#communities"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition-colors mt-4"
        >
          Or, Explore Communities Manually
        </a>
        <div className="box-widget w-full max-w-2xl mt-8 p-6">
          <h2 className="text-h3 mb-2">Why The Vistas Summerlin?</h2>
          <ul className="list-disc pl-6 text-body text-gray-700">
            <li>28 unique subcommunities</li>
            <li>Top-rated schools, parks, and amenities</li>
            <li>Modern, mobile-first real estate experience</li>
            <li>Expert local insights and resources</li>
          </ul>
        </div>
        <PropertyFilter />
        <PropertyList />
      </main>
    </div>
  );
}
