import CommitBestPracticesTr from '../components/posts-tr/CommitBestPractices';
import MCPServersGuideTr from '../components/posts-tr/claude-code-mcp';
import DevOpsForBeginnersTr from '../components/posts-tr/devops-for-beginners';
import DockerSwarmDeploymentTr from '../components/posts-tr/docker-swarm-deployment';
import AdviceForNewDevelopersTr from '../components/posts-tr/advice-for-new-developers';
import BeginnerGitUsageTr from '../components/posts-tr/beginner-git-usage';
import CommitBestPracticesEn from '../components/posts-en/CommitBestPractices';
import MCPServersGuideEn from '../components/posts-en/claude-code-mcp';
import DevOpsForBeginnersEn from '../components/posts-en/devops-for-beginners';
import DockerSwarmDeploymentEn from '../components/posts-en/docker-swarm-deployment';
import AdviceForNewDevelopersEn from '../components/posts-en/advice-for-new-developers';
import BeginnerGitUsageEn from '../components/posts-en/beginner-git-usage';
import { BlogPost } from './types';

export const blogPosts: BlogPost[] = [
  {
    id: '6',
    slug: 'beginner-git-usage',
    date: '2025-10-17',
    tags: ['GIT', 'BEST_PRACTICES', 'JUNIOR_DEVELOPERS'],
    readingTime: 5,
    tr: {
      title: 'Başlangıç Seviyesi Git Kullanımı',
      excerpt: 'Yeni başlayanlar için Git versiyon kontrol sistemi kullanımı: temel komutlar, workflow ve en iyi uygulamalar.',
      component: BeginnerGitUsageTr
    },
    en: {
      title: 'Beginner Git Usage',
      excerpt: 'Git version control system usage for beginners: basic commands, workflow and best practices.',
      component: BeginnerGitUsageEn
    }
  },
  {
    id: '5',
    slug: 'advice-for-new-developers',
    date: '2025-10-17',
    tags: ['BEST_PRACTICES', 'DEVELOPMENT', 'JUNIOR_DEVELOPERS'],
    readingTime: 5,
    tr: {
      title: 'Yazılıma Yeni Başlayanlar İçin Tavsiyeler',
      excerpt: 'Yazılıma yeni başlayanlar için pratik tavsiyeler: çalışma saatleri, öğrenme stratejileri ve başarılı olma yolları.',
      component: AdviceForNewDevelopersTr
    },
    en: {
      title: 'Advice for New Developers',
      excerpt: 'Practical advice for those new to software development: working hours, learning strategies and paths to success.',
      component: AdviceForNewDevelopersEn
    }
  },
  {
    id: '4',
    slug: 'docker-swarm-deployment',
    date: '2025-10-02',
    tags: ['DOCKER', 'DEVOPS', 'DEPLOYMENT', 'JUNIOR_DEVELOPERS'],
    readingTime: 8,
    draft: true,
    tr: {
      title: 'Docker Swarm ile Uygulama Yükleme',
      excerpt: 'Docker Swarm kullanarak uygulamanızı nasıl yükleyeceğinizi ve yöneteceğinizi adım adım öğrenin.',
      component: DockerSwarmDeploymentTr
    },
    en: {
      title: 'Deploying Applications with Docker Swarm',
      excerpt: 'Learn step by step how to deploy and manage your application using Docker Swarm.',
      component: DockerSwarmDeploymentEn
    }
  },
  {
    id: '3',
    slug: 'devops-for-beginners',
    date: '2025-10-02',
    tags: ['DEPLOYMENT', 'JUNIOR_DEVELOPERS'],
    readingTime: 5,
    draft: true,
    tr: {
      title: 'Yeni Başlayanlar İçin DevOps Stratejileri',
      excerpt: 'DevOps dünyasına yeni başlayanlar için temel kavramlar ve pratik öneriler.',
      component: DevOpsForBeginnersTr
    },
    en: {
      title: 'DevOps for Beginners',
      excerpt: 'Fundamental concepts and practical recommendations for those new to the DevOps world.',
      component: DevOpsForBeginnersEn
    }
  },
  {
    id: '2',
    slug: 'mcp-servers-efficient-usage',
    date: '2025-09-23',
    tags: ['AI', 'MCP', 'CLAUDE_CODE', 'DEVELOPMENT', 'BEST_PRACTICES'],
    readingTime: 7,
    tr: {
      title: 'Yapay Zekayı Verimli Kullanma: MCP Sunucuları',
      excerpt: 'MCP sunucuları ile yapay zekaya ilave özellikler ekleyebiliyoruz. Claude Code\'un parametrik MCP seçimi ile context window\'u verimli kullanmayı öğrenin.',
      component: MCPServersGuideTr
    },
    en: {
      title: 'Using AI Efficiently: MCP Servers',
      excerpt: 'We can add additional features to AI with MCP servers. Learn how to use context window efficiently with Claude Code\'s parametric MCP selection.',
      component: MCPServersGuideEn
    }
  },
  {
    id: '1',
    slug: 'big-gains-with-small-commits',
    date: '2025-09-12',
    tags: ['GIT', 'BEST_PRACTICES', 'DEVELOPMENT', 'JUNIOR_DEVELOPERS'],
    readingTime: 6,
    tr: {
      title: 'Küçük Commitlerle Büyük Kazanımlar: Geliştirme Sürecinde İyi Alışkanlıklar',
      excerpt: 'Yazılım geliştirme sürecinde küçük commitler yapmanın önemi, commit öncesi kontrol listesi ve AI CLI araçları ile çalışırken dikkat edilmesi gerekenler.',
      component: CommitBestPracticesTr
    },
    en: {
      title: 'Big Gains with Small Commits: Good Habits in Development Process',
      excerpt: 'The importance of making small commits in software development process, pre-commit checklist and things to consider when working with AI CLI tools.',
      component: CommitBestPracticesEn
    }
  }
];

