import CommitBestPracticesTr from '../components/posts-tr/CommitBestPractices';
import MCPServersGuideTr from '../components/posts-tr/claude-code-mcp';
import CommitBestPracticesEn from '../components/posts-en/CommitBestPractices';
import MCPServersGuideEn from '../components/posts-en/claude-code-mcp';
import { TagKey } from './tags';
import React from 'react';

export interface BlogPostWithComponents {
  id: string;
  'slug-tr': string;
  'slug-en': string;
  'title-tr': string;
  'title-en': string;
  'excerpt-tr': string;
  'excerpt-en': string;
  date: string;
  tags: TagKey[];
  readingTime: number;
  componentTr: React.ComponentType;
  componentEn: React.ComponentType;
}

export const blogPostsWithComponents: BlogPostWithComponents[] = [
  {
    id: '2',
    'slug-tr': 'mcp-sunuculari-verimli-kullanma',
    'slug-en': 'mcp-servers-efficient-usage',
    'title-tr': 'Yapay Zekayı Verimli Kullanma: MCP Sunucuları',
    'title-en': 'Using AI Efficiently: MCP Servers',
    'excerpt-tr': 'MCP sunucuları ile yapay zekaya ilave özellikler ekleyebiliyoruz. Claude Code\'un parametrik MCP seçimi ile context window\'u verimli kullanmayı öğrenin.',
    'excerpt-en': 'We can add additional features to AI with MCP servers. Learn how to use context window efficiently with Claude Code\'s parametric MCP selection.',
    componentTr: MCPServersGuideTr,
    componentEn: MCPServersGuideEn,
    date: '2025-09-23',
    tags: ['AI', 'MCP', 'CLAUDE_CODE', 'DEVELOPMENT', 'BEST_PRACTICES'],
    readingTime: 7
  },
  {
    id: '1',
    'slug-tr': 'kucuk-commitlerle-buyuk-kazanimlar',
    'slug-en': 'big-gains-with-small-commits',
    'title-tr': 'Küçük Commitlerle Büyük Kazanımlar: Geliştirme Sürecinde İyi Alışkanlıklar',
    'title-en': 'Big Gains with Small Commits: Good Habits in Development Process',
    'excerpt-tr': 'Yazılım geliştirme sürecinde küçük commitler yapmanın önemi, commit öncesi kontrol listesi ve AI CLI araçları ile çalışırken dikkat edilmesi gerekenler.',
    'excerpt-en': 'The importance of making small commits in software development process, pre-commit checklist and things to consider when working with AI CLI tools.',
    componentTr: CommitBestPracticesTr,
    componentEn: CommitBestPracticesEn,
    date: '2025-09-12',
    tags: ['GIT', 'BEST_PRACTICES', 'DEVELOPMENT', 'JUNIOR_DEVELOPERS'],
    readingTime: 6
  }
];

