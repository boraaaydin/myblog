import { redirect } from 'next/navigation';

interface LangPageProps {
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

export default function LangPage({ params }: LangPageProps) {
  const { lang } = params;

  if (lang !== 'tr' && lang !== 'en') {
    redirect('/tr/blog');
  }

  redirect(`/${lang}/blog`);
}