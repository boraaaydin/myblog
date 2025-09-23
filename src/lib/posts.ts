import CommitBestPractices from '../components/posts/CommitBestPractices';
import MCPServersGuide from '../components/posts/claude-code-mcp';
import { TAGS } from './tags';
import { BlogPost } from './blog';

export const blogPosts: BlogPost[] = [
  {
    id: '2',
    slug: 'mcp-sunuculari-claude-code-gizli-gucu',
    title: 'Yapay Zekayı Verimli Kullanma: MCP Sunucuları',
    excerpt: 'MCP sunucuları ile yapay zekaya ilave özellikler ekleyebiliyoruz. Claude Code\'un parametrik MCP seçimi ile context window\'u verimli kullanmayı öğrenin.',
    component: MCPServersGuide,
    date: '2025-09-23',
    tags: [TAGS.AI, TAGS.MCP, TAGS.CLAUDE_CODE, TAGS.DEVELOPMENT, TAGS.BEST_PRACTICES],
    readingTime: 7
  },
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