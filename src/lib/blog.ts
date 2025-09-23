import React from 'react';
import { blogPosts } from './posts';

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