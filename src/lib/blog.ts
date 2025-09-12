import React from 'react';
import CommitBestPractices from '../components/posts/CommitBestPractices';
import { TAGS } from './tags';

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

export interface BlogPostCard {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readingTime: number;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'kucuk-commitlerle-buyuk-kazanimlar',
    title: 'Küçük Commitlerle Büyük Kazanımlar: Geliştirme Sürecinde İyi Alışkanlıklar',
    excerpt: 'Yazılım geliştirme sürecinde küçük commitler yapmanın önemi, commit öncesi kontrol listesi ve AI CLI araçları ile çalışırken dikkat edilmesi gerekenler.',
    component: CommitBestPractices,
    date: '2025-09-12',
    tags: [TAGS.GIT, TAGS.BEST_PRACTICES, TAGS.DEVELOPMENT, TAGS.JUNIOR_DEVELOPERS],
    readingTime: 6
  }
];

function stripComponent(post: BlogPost): BlogPostCard {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { component, ...postCard } = post;
  return postCard;
}

export function getAllPosts(): BlogPostCard[] {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(stripComponent);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getPostsByTag(tag: string): BlogPostCard[] {
  return blogPosts
    .filter(post => post.tags.includes(tag))
    .map(stripComponent);
}