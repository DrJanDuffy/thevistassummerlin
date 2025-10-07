import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.thevistassummerlin.com'
  
          // Community slugs for dynamic sitemap generation
          const communitySlugs = [
            // The Vistas Summerlin Subcommunities (26 confirmed)
            'ashton-park',
            'barrington',
            'bella-vista',
            'canterra',
            'capri',
            'cara-vella',
            'casa-rosa',
            'encanto',
            'estancia',
            'hillstone',
            'kingwood',
            'miraleste',
            'monterossa',
            'palmilla',
            'paradiso',
            'portofino',
            'sage-hills',
            'san-marcos',
            'santalina',
            'solano',
            'somerset',
            'sonesta',
            'summerfield',
            'talaverde',
            'talega',
            'vista-verde',
            
            // Legacy communities and other pages
            'vistas', // Dr. Jan Duffy's office location
            'summerlin-west',
            'red-rock', 
            'southern-highlands',
            'macdonald-highlands',
            'img-0737', // Legacy Barrington URL
            'img-0738', // Legacy Kingwood URL
            'img-0739', // Legacy Santalina URL
            'santaluz' // Premium community (not in official list)
          ]
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/valuation`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/communities`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Individual community pages
    ...communitySlugs.map(slug => ({
      url: `${baseUrl}/communities/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sell`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/market-reports`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/market-analysis`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/investment`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/community-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/properties/11773-golden-moments-avenue`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
