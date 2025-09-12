export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  readingTime: number;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'modern-react-patterns',
    title: 'Modern React Patterns: Custom Hooks ve Component Composition',
    excerpt: 'React uygulamalarında kod tekrarını önlemek ve daha sürdürülebilir kod yazmak için custom hooks ve component composition tekniklerini keşfedelim.',
    content: `# Modern React Patterns

React'in gücü sadece component'lerde değil, aynı zamanda bu component'leri nasıl organize ettiğimizde ve mantığı nasıl paylaştığımızda yatıyor.

## Custom Hooks

Custom hooks, React'te mantığı paylaşmanın en güçlü yollarından biri:

\`\`\`javascript
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
\`\`\`

Bu hook sayesinde localStorage işlemlerini her component'te tekrar yazmak zorunda kalmıyoruz.`,
    date: '2024-01-15',
    author: 'Bora',
    tags: ['React', 'JavaScript', 'Custom Hooks'],
    readingTime: 8
  },
  {
    id: '2',
    slug: 'nextjs-app-router-guide',
    title: 'Next.js 15 App Router: Yeni Nesil Full-Stack React Framework',
    excerpt: 'Next.js 15 ile gelen App Router\'ın sunduğu yenilikleri, Server Components ve streaming özellikleri ile modern web uygulaması geliştirme.',
    content: `# Next.js 15 App Router

Next.js 15 ile birlikte gelen App Router, React Server Components ve streaming özellikleri ile web geliştirmeyi bir üst seviyeye taşıyor.

## Server Components Nedir?

Server Components, React component'lerinin server'da render edilmesini sağlar:

\`\`\`jsx
// app/page.tsx
async function HomePage() {
  // Bu veri sunucuda yüklenir
  const posts = await fetch('https://api.example.com/posts').then(r => r.json());

  return (
    <div>
      <h1>Blog Yazıları</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
\`\`\`

Bu yaklaşım, daha hızlı ilk sayfa yükleme süreleri ve daha iyi SEO performansı sağlar.`,
    date: '2024-01-10',
    author: 'Bora',
    tags: ['Next.js', 'React', 'Server Components'],
    readingTime: 12
  },
  {
    id: '3',
    slug: 'typescript-advanced-types',
    title: 'TypeScript İleri Seviye Türler: Utility Types ve Type Guards',
    excerpt: 'TypeScript\'in güçlü tür sistemi ile daha güvenli ve sürdürülebilir kod yazma teknikleri. Utility types, conditional types ve type guards.',
    content: `# TypeScript İleri Seviye Türler

TypeScript'in tür sistemi, JavaScript'e güçlü bir tip güvenliği katmanı ekler.

## Utility Types

TypeScript'in built-in utility types'ları ile mevcut türlerden yeni türler oluşturabiliriz:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

// Sadece belirli alanları seçmek
type UserPreview = Pick<User, 'id' | 'name'>;

// Belirli alanları çıkarmak
type UserWithoutId = Omit<User, 'id'>;

// Tüm alanları opsiyonel yapmak
type PartialUser = Partial<User>;
\`\`\`

## Type Guards

Runtime'da türleri kontrol etmek için type guards kullanabiliriz:

\`\`\`typescript
function isUser(obj: any): obj is User {
  return typeof obj === 'object' 
    && typeof obj.id === 'number'
    && typeof obj.name === 'string';
}
\`\`\``,
    date: '2024-01-05',
    author: 'Bora',
    tags: ['TypeScript', 'Type System', 'JavaScript'],
    readingTime: 10
  }
];

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag));
}