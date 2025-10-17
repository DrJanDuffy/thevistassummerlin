import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://www.thevistassummerlin.com';
  const currentDate = new Date().toUTCString();
  
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>The Vistas Summerlin - Luxury Homes by Dr. Jan Duffy</title>
    <link>${baseUrl}</link>
    <description>Latest luxury homes and market updates in The Vistas Summerlin, Las Vegas. Expert real estate guidance from Dr. Jan Duffy with Berkshire Hathaway HomeServices Nevada Properties.</description>
    <language>en-us</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    
    <item>
      <title>Luxury Homes in The Vistas Summerlin - $800K to $2.5M+</title>
      <link>${baseUrl}/communities</link>
      <description>Discover over 28 distinct subcommunities in The Vistas Summerlin featuring luxury homes, world-class amenities, and access to TPC Summerlin golf course.</description>
      <pubDate>${currentDate}</pubDate>
      <guid isPermaLink="true">${baseUrl}/communities</guid>
    </item>
    
    <item>
      <title>Market Analysis - Summerlin Real Estate Trends</title>
      <link>${baseUrl}/market-analysis</link>
      <description>Current market insights and trends for luxury real estate in Summerlin, Las Vegas. Expert analysis from Dr. Jan Duffy.</description>
      <pubDate>${currentDate}</pubDate>
      <guid isPermaLink="true">${baseUrl}/market-analysis</guid>
    </item>
    
    <item>
      <title>Home Valuation Service - Free Market Assessment</title>
      <link>${baseUrl}/valuation</link>
      <description>Get your free home valuation from Dr. Jan Duffy. Professional market assessment for properties in The Vistas Summerlin and surrounding areas.</description>
      <pubDate>${currentDate}</pubDate>
      <guid isPermaLink="true">${baseUrl}/valuation</guid>
    </item>
    
    <item>
      <title>Property Search - Find Your Dream Home</title>
      <link>${baseUrl}/search</link>
      <description>Search luxury homes in The Vistas Summerlin with advanced filters. Find your perfect property with Dr. Jan Duffy's expert guidance.</description>
      <pubDate>${currentDate}</pubDate>
      <guid isPermaLink="true">${baseUrl}/search</guid>
    </item>
    
    <item>
      <title>Community Guide - Living in The Vistas Summerlin</title>
      <link>${baseUrl}/community-guide</link>
      <description>Complete guide to life in The Vistas Summerlin including amenities, schools, dining, and lifestyle features.</description>
      <pubDate>${currentDate}</pubDate>
      <guid isPermaLink="true">${baseUrl}/community-guide</guid>
    </item>
    
    <item>
      <title>Investment Opportunities in Summerlin Real Estate</title>
      <link>${baseUrl}/investment</link>
      <description>Explore real estate investment opportunities in Summerlin with expert guidance from Dr. Jan Duffy.</description>
      <pubDate>${currentDate}</pubDate>
      <guid isPermaLink="true">${baseUrl}/investment</guid>
    </item>
    
    <item>
      <title>Featured Property - 11773 Golden Moments Avenue</title>
      <link>${baseUrl}/properties/11773-golden-moments-avenue</link>
      <description>Exquisite luxury home featuring modern amenities and stunning views in The Vistas Summerlin.</description>
      <pubDate>${currentDate}</pubDate>
      <guid isPermaLink="true">${baseUrl}/properties/11773-golden-moments-avenue</guid>
    </item>
  </channel>
</rss>`;

  return new NextResponse(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
