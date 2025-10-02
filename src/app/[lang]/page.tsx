import { redirect } from 'next/navigation';

interface LangPageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { lang: 'tr' },
    { lang: 'en' }
  ];
}

export default async function LangPage({ params }: LangPageProps) {
  const { lang } = await params;

  if (lang !== 'tr' && lang !== 'en') {
    redirect('/tr/blog');
  }

  redirect(`/${lang}/blog`);
}