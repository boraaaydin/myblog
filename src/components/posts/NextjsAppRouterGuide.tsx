export default function NextjsAppRouterGuide() {
  return (
    <article className="prose prose-lg max-w-none">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Next.js 15 App Router</h1>
      </header>
      
      <main>
        <p className="text-lg mb-6">
          Next.js 15 ile birlikte gelen App Router, React Server Components ve streaming özellikleri ile web geliştirmeyi bir üst seviyeye taşıyor.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Server Components Nedir?</h2>

        <p className="mb-4">
          Server Components, React component&apos;lerinin server&apos;da render edilmesini sağlar:
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
          <code className="language-jsx">{`// app/page.tsx
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
}`}</code>
        </pre>

        <p>
          Bu yaklaşım, daha hızlı ilk sayfa yükleme süreleri ve daha iyi SEO performansı sağlar.
        </p>
      </main>
    </article>
  );
}