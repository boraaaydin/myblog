import { TagKey } from './tags';
import React from 'react';

export interface BaseContent {
  title: string;
  excerpt: string;
}

export interface BlogPostContentTr extends BaseContent {
  component: React.ComponentType;
}

export interface BlogPostContentEn extends BaseContent {
  component: React.ComponentType;
}

export interface BlogPost {
  id: string;
  slug: string;
  date: string;
  tags: TagKey[];
  readingTime: number;
  tr: BlogPostContentTr;
  en: BlogPostContentEn;
  draft?: boolean;
}