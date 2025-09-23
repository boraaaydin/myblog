import CommitBestPracticesTr from '../components/posts-tr/CommitBestPractices';
import MCPServersGuideTr from '../components/posts-tr/claude-code-mcp';
import CommitBestPracticesEn from '../components/posts-en/CommitBestPractices';
import MCPServersGuideEn from '../components/posts-en/claude-code-mcp';
import { BlogPost } from './types';

export const blogPosts: BlogPost[] = [
  {
    id: '2',
    date: '2025-09-23',
    tags: ['AI', 'MCP', 'CLAUDE_CODE', 'DEVELOPMENT', 'BEST_PRACTICES'],
    readingTime: 7,
    tr: {
      slug: 'mcp-sunuculari-verimli-kullanma',
      title: 'Yapay Zekayı Verimli Kullanma: MCP Sunucuları',
      excerpt: 'MCP sunucuları ile yapay zekaya ilave özellikler ekleyebiliyoruz. Claude Code\'un parametrik MCP seçimi ile context window\'u verimli kullanmayı öğrenin.',
      component: MCPServersGuideTr
    },
    en: {
      slug: 'mcp-servers-efficient-usage',
      title: 'Using AI Efficiently: MCP Servers',
      excerpt: 'We can add additional features to AI with MCP servers. Learn how to use context window efficiently with Claude Code\'s parametric MCP selection.',
      component: MCPServersGuideEn
    }
  },
  {
    id: '1',
    date: '2025-09-12',
    tags: ['GIT', 'BEST_PRACTICES', 'DEVELOPMENT', 'JUNIOR_DEVELOPERS'],
    readingTime: 6,
    tr: {
      slug: 'kucuk-commitlerle-buyuk-kazanimlar',
      title: 'Küçük Commitlerle Büyük Kazanımlar: Geliştirme Sürecinde İyi Alışkanlıklar',
      excerpt: 'Yazılım geliştirme sürecinde küçük commitler yapmanın önemi, commit öncesi kontrol listesi ve AI CLI araçları ile çalışırken dikkat edilmesi gerekenler.',
      component: CommitBestPracticesTr
    },
    en: {
      slug: 'big-gains-with-small-commits',
      title: 'Big Gains with Small Commits: Good Habits in Development Process',
      excerpt: 'The importance of making small commits in software development process, pre-commit checklist and things to consider when working with AI CLI tools.',
      component: CommitBestPracticesEn
    }
  }
];

