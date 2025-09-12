import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Yazı Bulunamadı',
    };
  }

  return {
    title: `${post.title} | Bora's Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link 
            href="/" 
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            ← Ana Sayfaya Dön
          </Link>
        </nav>
        
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('tr-TR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span>•</span>
            <span>{post.readingTime} dakika okuma</span>
            <span>•</span>
            <span>Yazar: {post.author}</span>
          </div>
        </header>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed m-0">
              {post.excerpt}
            </p>
          </div>
          
          <div 
            className="text-gray-800 dark:text-gray-200 leading-relaxed"
            dangerouslySetInnerHTML={{ 
              __html: post.content.replace(/\n/g, '<br/>') 
            }}
          />
        </div>
        
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Bu yazı faydalı oldu mu? Yorumlarınızı sosyal medya üzerinden paylaşabilirsiniz.
            </div>
            
            <Link 
              href="/" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Diğer Yazılar
            </Link>
          </div>
        </footer>
      </article>
      
      <Footer />
    </div>
  );
}