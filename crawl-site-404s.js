// Node.js v18+ required (for global fetch)
const { JSDOM } = require('jsdom');

const BASE_URL = 'http://localhost:3000';
const visited = new Set();
const toVisit = [`${BASE_URL}/`];

async function crawl() {
  while (toVisit.length > 0) {
    const url = toVisit.shift();
    if (visited.has(url)) continue;
    visited.add(url);

    try {
      const res = await fetch(url);
      if (res.status === 404) {
        console.log(`❌ 404: ${url}`);
        continue;
      } else if (res.status >= 400) {
        console.log(`⚠️ ${res.status}: ${url}`);
        continue;
      } else {
        console.log(`✅ 200: ${url}`);
      }

      // Only parse HTML pages
      const contentType = res.headers.get('content-type') || '';
      if (!contentType.includes('text/html')) continue;

      const html = await res.text();
      const dom = new JSDOM(html);
      const links = Array.from(dom.window.document.querySelectorAll('a'))
        .map(a => a.href)
        .filter(href =>
          href.startsWith(BASE_URL) || href.startsWith('/') // internal only
        )
        .map(href =>
          href.startsWith('/') ? `${BASE_URL}${href}` : href
        )
        .filter(href => !visited.has(href) && !toVisit.includes(href));

      toVisit.push(...links);
    } catch (err) {
      console.log(`⚠️ Error: ${url} (${err.message})`);
    }
  }

  console.log('\nCrawl complete!');
}

crawl();