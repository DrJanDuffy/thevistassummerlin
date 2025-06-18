// No import needed for fetch in Node.js v18+

const slugs = [
  "altessa", "ashton-park", "barrington", "bella-vista", "canterra", "capri", "cara-vella", "casa-rosa",
  "encanto", "estancia", "hillstone", "kingwood", "miraleste", "miramonte", "monterossa", "palmilla",
  "paradiso", "portofino", "sage-hills", "san-marcos", "santalina", "solano", "somerset", "sonesta",
  "summerfield", "talaverde", "talega", "vista-verde"
];

const BASE_URLS = [
  'https://thevistassummerlin-2ydwfcj0h-janet-duffys-projects.vercel.app', // Production
  'http://localhost:3000' // Local (change port if needed)
];

async function checkSlug(base, slug) {
  const url = `${base}/communities/${slug}`;
  try {
    const res = await fetch(url);
    if (res.status === 404) {
      console.log(`❌ 404: ${url}`);
      return { url, status: 404 };
    } else {
      console.log(`✅ 200: ${url}`);
      return { url, status: 200 };
    }
  } catch (err) {
    console.log(`⚠️ Error: ${url} (${err.message})`);
    return { url, status: 'error', error: err.message };
  }
}

(async () => {
  for (const base of BASE_URLS) {
    console.log(`\n--- Checking: ${base} ---`);
    const results = [];
    for (const slug of slugs) {
      results.push(await checkSlug(base, slug));
    }
    const notFound = results.filter(r => r.status === 404);
    if (notFound.length) {
      console.log(`\nSummary for ${base}:`);
      notFound.forEach(r => console.log(`404: ${r.url}`));
    } else {
      console.log(`\nAll community pages returned 200 on ${base}!`);
    }
  }
})(); 