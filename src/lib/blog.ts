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
  slug: string;
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
    slug: post.slug,
    language
  };
}

export function getAllPosts(language?: 'tr' | 'en'): BlogPostCard[] {
  const showDraft = process.env.NEXT_PUBLIC_SHOW_DRAFT === 'true';
  return blogPosts
    .filter(post => showDraft || !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(post => stripComponentFromPost(post, language || 'tr'));
}

export function getPostBySlug(slug: string, language?: 'tr' | 'en'): BlogPostFlat | undefined {
  const showDraft = process.env.NEXT_PUBLIC_SHOW_DRAFT === 'true';
  const post = blogPosts.find(post => post.slug === slug && (showDraft || !post.draft));

  if (!post) {
    return undefined;
  }

  const lang = language || 'tr';
  const content = post[lang];

  return {
    id: post.id,
    date: post.date,
    tags: post.tags,
    readingTime: post.readingTime,
    title: content.title,
    excerpt: content.excerpt,
    component: content.component,
    slug: post.slug
  };
}

export function getPostsByTag(tag: TagKey, language?: 'tr' | 'en'): BlogPostCard[] {
  const showDraft = process.env.NEXT_PUBLIC_SHOW_DRAFT === 'true';
  const filteredPosts = blogPosts.filter(post => post.tags.includes(tag) && (showDraft || !post.draft));
  return filteredPosts.map(post => stripComponentFromPost(post, language || 'tr'));
}