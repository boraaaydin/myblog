import React from 'react';
import ModernReactPatterns from '../components/posts/ModernReactPatterns';
import NextjsAppRouterGuide from '../components/posts/NextjsAppRouterGuide';
import TypescriptAdvancedTypes from '../components/posts/TypescriptAdvancedTypes';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  component: React.ComponentType;
  date: string;
  author: string;
  tags: string[];
  readingTime: number;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'modern-react-patterns',
    title: 'Modern React Patterns: Custom Hooks ve Component Composition',
    excerpt: 'React uygulamalarında kod tekrarını önlemek ve daha sürdürülebilir kod yazmak için custom hooks ve component composition tekniklerini keşfedelim.',
    component: ModernReactPatterns,
    date: '2024-01-15',
    author: 'Bora',
    tags: ['React', 'JavaScript', 'Custom Hooks'],
    readingTime: 8
  },
  {
    id: '2',
    slug: 'nextjs-app-router-guide',
    title: 'Next.js 15 App Router: Yeni Nesil Full-Stack React Framework',
    excerpt: 'Next.js 15 ile gelen App Router\'ın sunduğu yenilikleri, Server Components ve streaming özellikleri ile modern web uygulaması geliştirme.',
    component: NextjsAppRouterGuide,
    date: '2024-01-10',
    author: 'Bora',
    tags: ['Next.js', 'React', 'Server Components'],
    readingTime: 12
  },
  {
    id: '3',
    slug: 'typescript-advanced-types',
    title: 'TypeScript İleri Seviye Türler: Utility Types ve Type Guards',
    excerpt: 'TypeScript\'in güçlü tür sistemi ile daha güvenli ve sürdürülebilir kod yazma teknikleri. Utility types, conditional types ve type guards.',
    component: TypescriptAdvancedTypes,
    date: '2024-01-05',
    author: 'Bora',
    tags: ['TypeScript', 'Type System', 'JavaScript'],
    readingTime: 10
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