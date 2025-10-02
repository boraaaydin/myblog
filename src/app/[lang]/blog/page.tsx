import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts } from '@/lib/blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolTip from '@/components/ToolTip';

interface BlogHomePageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { lang: 'tr' },
    { lang: 'en' }
  ];
}

export default async function BlogHomePage({ params }: BlogHomePageProps) {
  const { lang } = await params;

  if (lang !== 'tr' && lang !== 'en') {
    notFound();
  }

  const posts = getAllPosts(lang as 'tr' | 'en');
  const isTurkish = lang === 'tr';

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {isTurkish ? 'Blog' : 'Blog'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {isTurkish ? (
              <>
                Her bilgi seviyesindeki geliştiriciye hitap etmek kolay değil. Bir yandan temel kavramları açıklayıp yeni başlayanları desteklemek, diğer yandan deneyimli geliştiricileri sıkmamak gerekiyor. Kimse de fazla uzun yazıları okumak istemiyor.
                <br /><br />
                Bu nedenle yazılarımda farklı bir yöntem denedim: Bilinmeyebileceğini düşündüğüm terimlere ipuçları ekledim. Altı çizili kelimelerin üzerine geldiğinizde <ToolTip keyName="context-window">context window</ToolTip> örneğindeki gibi kısa bir açıklama göreceksiniz.
                <br /><br />
                Keyifli okumalar!
              </>
            ) : (
              <>
                Writing for developers at different skill levels isn't easy. On one hand, you need to explain fundamental concepts to support beginners; on the other, you don&apos;t want to bore experienced developers. And nobody wants to read overly long articles.
                <br /><br />
                That's why I tried a different approach in my posts: I added tooltips to terms that might be unfamiliar. When you hover over underlined words, you&apos;ll see a brief explanation, just like this <ToolTip keyName="context-window">context window</ToolTip> example.
                <br /><br />
                Happy reading!
              </>
            )}
          </p>
        </header>

        <div className="space-y-12">
          {posts.map((post) => (
            <article
              key={post.id}
              className="border-b border-gray-200 dark:border-gray-700 pb-12 last:border-b-0"
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

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                <Link
                  href={`/${lang}/blog/${post.slug}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
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

                <Link
                  href={`/${lang}/blog/${post.slug}`}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  {isTurkish ? 'Devamını Oku →' : 'Read More →'}
                </Link>
              </div>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              {isTurkish ? 'Henüz yazı bulunmuyor.' : 'No posts found yet.'}
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}