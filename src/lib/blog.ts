import React from 'react';
import { blogPosts } from './posts';
import { TagKey } from './tags';
import { BlogPost as BlogPostType } from './types';

export interface BlogPostFlat {
  id: string;
  title: string;
  excerpt: string;
  component: React.ComponentType;
  date: string;
  tags: TagKey[];
  readingTime: number;
  'slug-tr': string;
  'slug-en': string;
}

export interface BlogPostCard {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: TagKey[];
  readingTime: number;
  slug: string;
  language: 'tr' | 'en';
}

function stripComponentFromPost(post: BlogPostType, language: 'tr' | 'en'): BlogPostCard {
  const content = post[language];
  return {
    id: post.id,
    date: post.date,
    tags: post.tags,
    readingTime: post.readingTime,
    title: content.title,
    excerpt: content.excerpt,
    slug: content.slug,
    language
  };
}

export function getAllPosts(language?: 'tr' | 'en'): BlogPostCard[] {
  let filteredPosts = blogPosts;

  if (language) {
    filteredPosts = blogPosts.filter(post => post[language].slug && post[language].slug.trim() !== '');
  }

  return filteredPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(post => stripComponentFromPost(post, language || 'tr'));
}

export function getPostBySlug(slug: string, language?: 'tr' | 'en'): BlogPostFlat | undefined {
  if (language) {
    const post = blogPosts.find(post => post[language].slug === slug);

    if (post) {
      const content = post[language];
      return {
        id: post.id,
        date: post.date,
        tags: post.tags,
        readingTime: post.readingTime,
        title: content.title,
        excerpt: content.excerpt,
        component: content.component,
        'slug-tr': post.tr.slug,
        'slug-en': post.en.slug
      };
    }
    return undefined;
  }

  // Dil belirtilmemişse, slug'ı her iki dilde ara
  const post = blogPosts.find(post =>
    post.tr.slug === slug || post.en.slug === slug
  );

  if (post) {
    const detectedLanguage = post.tr.slug === slug ? 'tr' : 'en';
    const content = post[detectedLanguage];
    return {
      id: post.id,
      date: post.date,
      tags: post.tags,
      readingTime: post.readingTime,
      title: content.title,
      excerpt: content.excerpt,
      component: content.component,
      'slug-tr': post.tr.slug,
      'slug-en': post.en.slug
    };
  }

  return undefined;
}

export function getPostsByTag(tag: TagKey, language?: 'tr' | 'en'): BlogPostCard[] {
  let filteredPosts = blogPosts.filter(post => post.tags.includes(tag));

  if (language) {
    filteredPosts = filteredPosts.filter(post => post[language].slug && post[language].slug.trim() !== '');
  }

  return filteredPosts.map(post => stripComponentFromPost(post, language || 'tr'));
}