export const dynamic = 'force-static';

const SITE_URL = 'https://boraaydin.com';
const BASE_PATH = '/blog';

export async function GET() {
  const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}${BASE_PATH}/sitemap.xml`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}