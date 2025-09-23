import { blogPosts } from '../../lib/posts';

export const dynamic = 'force-static';

const SITE_URL = 'https://boraaydin.com';
const BASE_PATH = '';

export async function GET() {
  const languages = ['tr', 'en'];

  // Get all unique tags
  const tagSet = new Set<string>();
  blogPosts.forEach(post => {
    post.tags.forEach(tag => {
      tagSet.add(tag.toLowerCase());
    });
  });
  const allTags = Array.from(tagSet);

  // Language-specific home pages
  const languagePages = languages.map(lang => `/${lang}/blog`);

  // Static pages
  const staticPages = languages.map(lang => `/${lang}/blog/contact`);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${languagePages.map(page => `
  <url>
    <loc>${SITE_URL}${BASE_PATH}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`).join('')}
  ${staticPages.map(page => `
  <url>
    <loc>${SITE_URL}${BASE_PATH}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
  ${blogPosts.flatMap(post =>
    languages.map(lang => `
  <url>
    <loc>${SITE_URL}/${lang}/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`)
  ).join('')}
  ${allTags.flatMap(tag =>
    languages.map(lang => `
  <url>
    <loc>${SITE_URL}/${lang}/blog/tag/${encodeURIComponent(tag)}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`)
  ).join('')}
</urlset>`;

  return new Response(sitemap.trim(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}