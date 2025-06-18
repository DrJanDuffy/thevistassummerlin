import { notFound } from "next/navigation";
import { getCommunityBySlug } from "../../../lib/community-utils";
import Image from "next/image";
import Head from "next/head";
import React from "react";

export default async function CommunityPage({ params }: { params: { slug: string } }) {
  const community = await getCommunityBySlug(params.slug);
  if (!community) return notFound();

  return (
    <>
      <Head>
        <title>{community.name} at The Vistas Summerlin</title>
        <meta name="description" content={community.description || `Explore ${community.name} in The Vistas Summerlin.`} />
      </Head>
      <main className="max-w-3xl mx-auto py-16 px-4">
        <div className="w-full mb-6 rounded-lg overflow-hidden shadow">
          <Image
            src={community.image}
            alt={community.name + ' hero image'}
            width={900}
            height={400}
            className="w-full h-64 object-cover"
            priority
          />
        </div>
        {/* RealScout Widget */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-blue-900">Live Listings in {community.name}</h2>
          {/* @ts-ignore: Custom element for RealScout */}
          {React.createElement('realscout-office-listings', {
            'agent-encoded-id': 'QWdlbnQtMjI1MDUw',
            'sort-order': 'STATUS_AND_SIGNIFICANT_CHANGE',
            'listing-status': 'For Sale',
            'property-types': 'SFR,MF,TC',
            'price-min': '500000',
            'price-max': '4000000',
            suppressHydrationWarning: true,
            style: { width: '100%' },
          })}
          <noscript>
            <div style={{ color: 'red' }}>
              RealScout widgets require JavaScript to be enabled.
            </div>
          </noscript>
        </section>
        <h1 className="text-3xl font-bold mb-2 text-blue-900">{community.name} at The Vistas Summerlin</h1>
        <p className="mb-4 text-gray-700">{community.description}</p>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Community Stats</h2>
          <ul className="grid grid-cols-2 gap-2 text-gray-800">
            <li>Listings: <b>{community.stats?.listings ?? '—'}</b></li>
            <li>Price Range: <b>{community.stats?.priceRange ?? '—'}</b></li>
            <li>Sold Last Month: <b>{community.stats?.soldLastMonth ?? '—'}</b></li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Amenities</h2>
          <ul className="flex flex-wrap gap-2">
            {community.amenities?.map((a) => (
              <li key={a} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{a}</li>
            ))}
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Neighborhood</h2>
          <ul className="grid grid-cols-2 gap-2 text-gray-800">
            <li>Walk Score: <b>{community.neighborhood?.walkScore ?? '—'}</b></li>
            <li>Transit Score: <b>{community.neighborhood?.transitScore ?? '—'}</b></li>
            <li>Bike Score: <b>{community.neighborhood?.bikeScore ?? '—'}</b></li>
            <li>Crime Rate: <b>{community.neighborhood?.crimeRate ?? '—'}</b></li>
            <li>School Rating: <b>{community.neighborhood?.schoolRating ?? '—'}</b></li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Location</h2>
          <ul className="grid grid-cols-2 gap-2 text-gray-800">
            <li>City: <b>{community.location?.city ?? '—'}</b></li>
            <li>State: <b>{community.location?.state ?? '—'}</b></li>
            <li>Zip Codes: <b>{community.location?.zipCodes?.join(', ') ?? '—'}</b></li>
            <li>Coordinates: <b>{community.location?.coordinates ? `${community.location.coordinates.lat.toFixed(4)}, ${community.location.coordinates.lng.toFixed(4)}` : '—'}</b></li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Market Trends</h2>
          <ul className="grid grid-cols-2 gap-2 text-gray-800">
            <li>Price Change: <b>{community.marketTrends?.priceChange ?? '—'}</b></li>
            <li>Inventory Level: <b>{community.marketTrends?.inventoryLevel ?? '—'}</b></li>
            <li>Days on Market: <b>{community.marketTrends?.daysOnMarket ?? '—'}</b></li>
          </ul>
        </section>
      </main>
    </>
  );
} 