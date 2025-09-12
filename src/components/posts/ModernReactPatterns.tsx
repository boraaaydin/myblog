export default function ModernReactPatterns() {
  return (
    <article className="prose prose-lg max-w-none">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Modern React Patterns</h1>
      </header>
      
      <main>
        <p className="text-lg mb-6">
          React&apos;in gücü sadece component&apos;lerde değil, aynı zamanda bu component&apos;leri nasıl organize ettiğimizde ve mantığı nasıl paylaştığımızda yatıyor.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Custom Hooks</h2>

        <p className="mb-4">
          Custom hooks, React&apos;te mantığı paylaşmanın en güçlü yollarından biri:
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
          <code className="language-javascript">{`function useLocalStorage(key, initialValue) {
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
}`}</code>
        </pre>

        <p>
          Bu hook sayesinde localStorage işlemlerini her component&apos;te tekrar yazmak zorunda kalmıyoruz.
        </p>
      </main>
    </article>
  );
}