export default function TypescriptAdvancedTypes() {
  return (
    <article className="prose prose-lg max-w-none">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">TypeScript İleri Seviye Türler</h1>
      </header>
      
      <main>
        <p className="text-lg mb-6">
          TypeScript&apos;in tür sistemi, JavaScript&apos;e güçlü bir tip güvenliği katmanı ekler.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Utility Types</h2>

        <p className="mb-4">
          TypeScript&apos;in built-in utility types&apos;ları ile mevcut türlerden yeni türler oluşturabiliriz:
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
          <code className="language-typescript">{`interface User {
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
type PartialUser = Partial<User>;`}</code>
        </pre>

        <h2 className="text-2xl font-semibold mb-4">Type Guards</h2>

        <p className="mb-4">
          Runtime&apos;da türleri kontrol etmek için type guards kullanabiliriz:
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
          <code className="language-typescript">{`function isUser(obj: any): obj is User {
  return typeof obj === 'object' 
    && typeof obj.id === 'number'
    && typeof obj.name === 'string';
}`}</code>
        </pre>
      </main>
    </article>
  );
}