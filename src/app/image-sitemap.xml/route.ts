import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const baseUrl = 'https://www.thevistassummerlin.com';
  const currentDate = new Date().toISOString();
  
  try {
    // Get community images from public/subcommunities directory
    const subcommunitiesPath = path.join(process.cwd(), 'public', 'subcommunities');
    const files = await fs.readdir(subcommunitiesPath);
    const imageFiles = files.filter(file => 
      file.toLowerCase().endsWith('.jpg') || 
      file.toLowerCase().endsWith('.jpeg') || 
      file.toLowerCase().endsWith('.png') ||
      file.toLowerCase().endsWith('.webp')
    );

    // Get community names from neighborhoods
    const communityImages = imageFiles.map(file => {
      const slug = file.replace(/\.(jpg|jpeg|png|webp)$/i, '').toLowerCase();
      let communityName = 'The Vistas Summerlin';
      
      // Map filenames to community names
      const nameMap: Record<string, string> = {
        'img_0737': 'Barrington Community',
        'img_0738': 'Kingwood Community', 
        'img_0739': 'Santalina Community'
      };
      
      communityName = nameMap[slug] || 'Luxury Home in The Vistas Summerlin';
      
      return {
        url: `${baseUrl}/subcommunities/${file}`,
        caption: `${communityName} - Luxury homes in The Vistas Summerlin, Las Vegas`,
        title: `${communityName} - The Vistas Summerlin Real Estate`,
        pageUrl: `${baseUrl}/communities/${slug.replace('img_', 'img-')}`
      };
    });

    // Add other key images
    const keyImages = [
      {
        url: `${baseUrl}/berkshire-hathaway-logo.png`,
        caption: 'Berkshire Hathaway HomeServices Nevada Properties - Dr. Jan Duffy',
        title: 'Berkshire Hathaway HomeServices Logo',
        pageUrl: `${baseUrl}/about`
      },
      {
        url: `${baseUrl}/logo.png`,
        caption: 'The Vistas Summerlin Logo - Luxury Real Estate',
        title: 'The Vistas Summerlin Logo',
        pageUrl: baseUrl
      }
    ];

    const allImages = [...communityImages, ...keyImages];

    const imageSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allImages.map(img => `  <url>
    <loc>${img.pageUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <image:image>
      <image:loc>${img.url}</image:loc>
      <image:caption><![CDATA[${img.caption}]]></image:caption>
      <image:title><![CDATA[${img.title}]]></image:title>
    </image:image>
  </url>`).join('\n')}
</urlset>`;

    return new NextResponse(imageSitemap, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      },
    });
  } catch (error) {
    console.error('Error generating image sitemap:', error);
    
    // Fallback minimal image sitemap
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <image:image>
      <image:loc>${baseUrl}/logo.png</image:loc>
      <image:caption><![CDATA[The Vistas Summerlin Logo - Luxury Real Estate]]></image:caption>
      <image:title><![CDATA[The Vistas Summerlin Logo]]></image:title>
    </image:image>
  </url>
</urlset>`;

    return new NextResponse(fallbackSitemap, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  }
}
