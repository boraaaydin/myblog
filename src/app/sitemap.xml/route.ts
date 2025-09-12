import { getAllPosts } from '../../lib/blog';
import { TAGS } from '../../lib/tags';

export const dynamic = 'force-static';

const SITE_URL = 'https://boraaydin.com';
const BASE_PATH = '/blog';

export async function GET() {
  const posts = getAllPosts();
  const allTags = Object.values(TAGS);

  const staticPages = [
    '',
    '/contact'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
  <url>
    <loc>${SITE_URL}${BASE_PATH}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
  ${posts.map(post => `
  <url>
    <loc>${SITE_URL}${BASE_PATH}/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`).join('')}
  ${allTags.map(tag => `
  <url>
    <loc>${SITE_URL}${BASE_PATH}/tag/${encodeURIComponent(tag)}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap.trim(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}