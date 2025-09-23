'use client';

import Link from 'next/link';
import { BlogPostCard } from '@/lib/blog';
import { TAGS, getTagDisplayName } from '@/lib/tags';
import { useLanguage } from '@/contexts/LanguageContext';

interface BlogCardProps {
  post: BlogPostCard;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { language } = useLanguage();
  return (
    <article className="group cursor-pointer">
      <Link href={`/blog/${post.slug}`}>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6">
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('tr-TR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>•</span>
              <span>{post.readingTime} dk okuma</span>
            </div>
            
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
              {post.title}
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tagKey) => (
                <span
                  key={tagKey}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full font-medium cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = `/blog/tag/${TAGS[tagKey].slug}`;
                  }}
                >
                  {getTagDisplayName(tagKey, language)}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-between">
              
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                Devamını Oku →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}