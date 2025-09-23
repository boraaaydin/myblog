'use client';

import { TAGS } from '@/lib/tags';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              {t.siteTitle}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t.footer.description}
            </p>
          </div>
          
          <div className="space-y-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                {t.footer.tags}
              </h4>
              <div className="flex flex-wrap gap-1 text-gray-600 dark:text-gray-400">
                {Object.values(TAGS).map((tag, index) => (
                  <span key={tag}>
                    <Link href={`/blog/tag/${encodeURIComponent(tag)}`} className="hover:text-gray-900 dark:hover:text-white transition-colors">
                      {tag}
                    </Link>
                    {index < Object.values(TAGS).length - 1 && <span>, </span>}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                {t.footer.links}
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  <Link href="/blog/contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    {t.nav.contact}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; 2025 {t.siteTitle}. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}