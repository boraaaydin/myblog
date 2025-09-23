import React from 'react';
import { blogPostsWithComponents } from './posts';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  component: React.ComponentType;
  date: string;
  tags: string[];
  readingTime: number;
  'slug-tr': string;
  'slug-en': string;
}

export interface BlogPostCard {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readingTime: number;
  slug: string;
  language: 'tr' | 'en';
}

function stripComponentFromPostWithComponents(post: any, language: 'tr' | 'en'): BlogPostCard {
  const { componentTr, componentEn, 'title-tr': titleTr, 'title-en': titleEn, 'excerpt-tr': excerptTr, 'excerpt-en': excerptEn, 'slug-tr': slugTr, 'slug-en': slugEn, ...basePost } = post;
  return {
    ...basePost,
    title: language === 'tr' ? titleTr : titleEn,
    excerpt: language === 'tr' ? excerptTr : excerptEn,
    slug: language === 'tr' ? slugTr : slugEn,
    language
  };
}

export function getAllPosts(language?: 'tr' | 'en'): BlogPostCard[] {
  let filteredPosts = blogPostsWithComponents;

  if (language) {
    const slugField = language === 'tr' ? 'slug-tr' : 'slug-en';
    filteredPosts = blogPostsWithComponents.filter(post => post[slugField] && post[slugField].trim() !== '');
  }

  return filteredPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(post => stripComponentFromPostWithComponents(post, language || 'tr'));
}

export function getPostBySlug(slug: string, language?: 'tr' | 'en'): BlogPost | undefined {
  if (language) {
    const slugField = language === 'tr' ? 'slug-tr' : 'slug-en';
    const postWithComponents = blogPostsWithComponents.find(post => post[slugField] === slug);

    if (postWithComponents) {
      return {
        ...postWithComponents,
        title: language === 'tr' ? postWithComponents['title-tr'] : postWithComponents['title-en'],
        excerpt: language === 'tr' ? postWithComponents['excerpt-tr'] : postWithComponents['excerpt-en'],
        component: language === 'tr' ? postWithComponents.componentTr : postWithComponents.componentEn
      };
    }
    return undefined;
  }

  // Dil belirtilmemişse, slug'ı her iki dilde ara
  const postWithComponents = blogPostsWithComponents.find(post =>
    post['slug-tr'] === slug || post['slug-en'] === slug
  );

  if (postWithComponents) {
    const detectedLanguage = postWithComponents['slug-tr'] === slug ? 'tr' : 'en';
    return {
      ...postWithComponents,
      title: detectedLanguage === 'tr' ? postWithComponents['title-tr'] : postWithComponents['title-en'],
      excerpt: detectedLanguage === 'tr' ? postWithComponents['excerpt-tr'] : postWithComponents['excerpt-en'],
      component: detectedLanguage === 'tr' ? postWithComponents.componentTr : postWithComponents.componentEn
    };
  }

  return undefined;
}

export function getPostsByTag(tag: string, language?: 'tr' | 'en'): BlogPostCard[] {
  let filteredPosts = blogPostsWithComponents.filter(post => post.tags.includes(tag));

  if (language) {
    const slugField = language === 'tr' ? 'slug-tr' : 'slug-en';
    filteredPosts = filteredPosts.filter(post => post[slugField] && post[slugField].trim() !== '');
  }

  return filteredPosts.map(post => stripComponentFromPostWithComponents(post, language || 'tr'));
}