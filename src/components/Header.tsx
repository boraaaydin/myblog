import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Link href="/blog" className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Bora&apos;nın Yazılım Notları
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              İletişim
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}