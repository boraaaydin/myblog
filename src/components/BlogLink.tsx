'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

interface BlogLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * BlogLink component that automatically prepends the current language to blog URLs
 * Usage: <BlogLink href="/blog/beginner-git-usage">Git Guide</BlogLink>
 * Result: /tr/blog/beginner-git-usage or /en/blog/beginner-git-usage
 */
export default function BlogLink({ href, children, className }: BlogLinkProps) {
  const { language } = useLanguage();

  // Add language prefix to the href
  const localizedHref = `/${language}${href}`;

  return (
    <Link href={localizedHref} className={className}>
      {children}
    </Link>
  );
}
