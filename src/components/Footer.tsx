export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Bora's Blog
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Modern web teknolojileri, React, Next.js ve yazılım geliştirme deneyimlerimi paylaştığım kişisel blog.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Kategoriler
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  React
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  Next.js
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  TypeScript
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  JavaScript
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Bağlantılar
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; 2024 Bora's Blog. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}