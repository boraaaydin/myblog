import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostsByTag } from '@/lib/blog';
import { getTagKeyBySlug } from '@/lib/tags';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface TagPageProps {
  params: {
    lang: string;
    tag: string;
  };
}

export async function generateStaticParams() {
  const { blogPosts } = await import('@/lib/posts');
  const { TAGS } = await import('@/lib/tags');
  const tagSlugSet = new Set<string>();
  const params: { lang: string; tag: string }[] = [];

  blogPosts.forEach(post => {
    post.tags.forEach(tagKey => {
      // Tag anahtarını slug'a çevir
      const tagInfo = TAGS[tagKey as keyof typeof TAGS];
      if (tagInfo) {
        tagSlugSet.add(tagInfo.slug);
      }
    });
  });

  const tagSlugs = Array.from(tagSlugSet);
  const languages = ['tr', 'en'];

  languages.forEach(lang => {
    tagSlugs.forEach(tag => {
      params.push({ lang, tag });
    });
  });

  return params;
}

export default function TagPage({ params }: TagPageProps) {
  const { lang, tag } = params;

  if (lang !== 'tr' && lang !== 'en') {
    notFound();
  }

  const tagKey = getTagKeyBySlug(tag);

  if (!tagKey) {
    notFound();
  }

  const posts = getPostsByTag(tagKey, lang as 'tr' | 'en');
  const isTurkish = lang === 'tr';

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link
            href={`/${lang}/blog`}
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            ← {isTurkish ? 'Ana Sayfaya Dön' : 'Back to Home'}
          </Link>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {isTurkish ? `"${tagKey}" Etiketi` : `Tag: "${tagKey}"`}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {isTurkish
              ? `${posts.length} yazı bulundu`
              : `${posts.length} post${posts.length > 1 ? 's' : ''} found`
            }
          </p>
        </header>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-b-0"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/${lang}/blog/tag/${tag.toLowerCase()}`}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                <Link
                  href={`/${lang}/blog/${post.slug}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString(isTurkish ? 'tr-TR' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span>•</span>
                <span>{post.readingTime} {isTurkish ? 'dakika okuma' : 'min read'}</span>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}