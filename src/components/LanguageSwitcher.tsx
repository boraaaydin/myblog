'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLang: 'tr' | 'en') => {
    setLanguage(newLang);

    // Update URL with new language structure (/tr/blog, /en/blog)
    if (pathname.startsWith('/tr/') || pathname.startsWith('/en/')) {
      const pathParts = pathname.split('/');
      if (pathParts[1] === 'tr' || pathParts[1] === 'en') {
        // Replace existing language in URL
        pathParts[1] = newLang;
        router.push(pathParts.join('/'));
      }
    } else if (pathname.startsWith('/blog/')) {
      // Handle old blog structure - redirect to new structure
      router.push(`/${newLang}${pathname}`);
    } else {
      router.push(`/${newLang}/blog`);
    }
  };

  return (
    <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
      <button
        onClick={() => handleLanguageChange('tr')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'tr'
            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
        }`}
      >
        TR
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
}