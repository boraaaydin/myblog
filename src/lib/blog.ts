import React from 'react';
import CommitBestPractices from '../components/posts/CommitBestPractices';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  component: React.ComponentType;
  date: string;
  tags: string[];
  readingTime: number;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'commit-best-practices',
    title: 'Küçük Commitlerle Büyük Kazanımlar: Geliştirme Sürecinde İyi Alışkanlıklar',
    excerpt: 'Yazılım geliştirme sürecinde küçük commitler yapmanın önemi, commit öncesi kontrol listesi ve AI CLI araçları ile çalışırken dikkat edilmesi gerekenler.',
    component: CommitBestPractices,
    date: '2025-09-12',
    tags: ['Git', 'İyi Pratikler', 'Geliştirme'],
    readingTime: 6
  }
];

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag));
}