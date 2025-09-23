import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug } from '@/lib/blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BlogPostPageProps {
  params: {
    lang: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  const { blogPosts } = await import('@/lib/posts');
  const params: { lang: string; slug: string }[] = [];

  blogPosts.forEach(post => {
    params.push({
      lang: 'tr',
      slug: post.slug
    });
    params.push({
      lang: 'en',
      slug: post.slug
    });
  });

  return params;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { lang, slug } = params;

  if (lang !== 'tr' && lang !== 'en') {
    notFound();
  }

  const post = getPostBySlug(slug, lang as 'tr' | 'en');

  if (!post) {
    notFound();
  }

  const isTurkish = lang === 'tr';

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link
            href={`/blog/${lang}`}
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            ← {isTurkish ? 'Ana Sayfaya Dön' : 'Back to Home'}
          </Link>
        </nav>

        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/${lang}/tag/${tag.toLowerCase()}`}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>

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
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed m-0">
              {post.excerpt}
            </p>
          </div>

          <div className="text-gray-800 dark:text-gray-200 leading-relaxed">
            <post.component />
          </div>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {isTurkish
                ? 'Bu yazı faydalı oldu mu? Yorumlarınızı sosyal medya üzerinden paylaşabilirsiniz.'
                : 'Was this article helpful? You can share your comments via social media.'
              }
            </div>

            <Link
              href={`/blog/${lang}`}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              {isTurkish ? 'Diğer Yazılar' : 'Other Articles'}
            </Link>
          </div>
        </footer>
      </article>

      <Footer />
    </div>
  );
}