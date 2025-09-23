import { TagKey } from './tags';
import React from 'react';

export interface BaseContent {
  slug: string;
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
  date: string;
  tags: TagKey[];
  readingTime: number;
  tr: BlogPostContentTr;
  en: BlogPostContentEn;
}