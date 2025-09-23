import Header from '@/components/Header';
import BlogCard from '@/components/BlogCard';
import Footer from '@/components/Footer';
import { getPostsByTag } from '@/lib/blog';
import { TAGS, getTagBySlug, getTagDisplayName, TagKey } from '@/lib/tags';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface TagPageProps {
  params: {
    tag: string;
  };
}

export default function TagPage({ params }: TagPageProps) {
  const tagSlug = decodeURIComponent(params.tag);
  const tagInfo = getTagBySlug(tagSlug);

  if (!tagInfo) {
    notFound();
  }

  // Find the tag key from the tag info
  const tagKey = Object.entries(TAGS).find(([, tag]) => tag.slug === tagSlug)?.[0] as TagKey;
  if (!tagKey) {
    notFound();
  }

  const posts = getPostsByTag(tagKey);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-6 transition-colors"
          >
            ← Ana Sayfaya Dön
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              &ldquo;{getTagDisplayName(tagKey, 'tr')}&rdquo; Etiketi
            </h1>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full font-medium">
              {posts.length} yazı
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {getTagDisplayName(tagKey, 'tr')} etiketiyle işaretlenmiş tüm yazılar
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const { TAGS } = await import('@/lib/tags');

  return Object.values(TAGS).map((tag) => ({
    tag: tag.slug,
  }));
}