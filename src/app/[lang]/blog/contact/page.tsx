import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import { translations } from '@/lib/translations';

interface ContactPageProps {
  params: {
    lang: string;
  };
}

export async function generateStaticParams() {
  return [
    { lang: 'tr' },
    { lang: 'en' }
  ];
}

export default function ContactPage({ params }: ContactPageProps) {
  const { lang } = params;

  if (lang !== 'tr' && lang !== 'en') {
    notFound();
  }

  const t = translations[lang as 'tr' | 'en'];
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t.contact.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {t.contact.description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        <a
          href="https://www.linkedin.com/in/boraaydin/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
        >
          <div className="flex-shrink-0 mr-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t.contact.linkedin.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t.contact.linkedin.description}
            </p>
          </div>
        </a>

        <a
          href="https://x.com/BoraDeveloper"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
        >
          <div className="flex-shrink-0 mr-4">
            <div className="w-12 h-12 bg-black dark:bg-white rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t.contact.twitter.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t.contact.twitter.description}
            </p>
          </div>
        </a>
      </div>
      </div>
      <Footer />
    </div>
  );
}