import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BlogCard from '@/components/BlogCard';
import Footer from '@/components/Footer';
import { getAllPosts } from '@/lib/blog';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <Hero />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section>
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Son Yazılar
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                En güncel yazılarım ve teknik içerikler
              </p>
            </div>
            
            <button className="hidden sm:block px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors">
              Tüm Yazılar
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}