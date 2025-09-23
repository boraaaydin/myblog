export default function MCPServersGuide() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <header>
        <h1>Yapay Zekayı Verimli Kullanma: MCP Sunucuları</h1>
      </header>

      <p>
        MCP sunucuları ile yapay zekaya ilave özellikler ekleyebiliyoruz. Ancak kullandığımız MCP sunucuları arttıkça context window azalmaya başlıyor. Claude Code bize her oturumda kullanacağımız MCP serverları parametrik olarak seçebilmemize imkan sağlıyor.
      </p>

      <p>
        Bu yazıda bahsedilen tüm MCP sunucuları <a href="https://github.com/boraaaydin/mcp" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub repository</a>'de açık kaynak olarak mevcut ve kolayca kullanılabilir.
      </p>

      <section>
        <h2>Context Window Sorunu</h2>
        <p>
          Claude Code gibi AI araçlarının başarılı çalışabilmesi için context window'un mümkün mertebe boş olması kritik. Context dolduğunda:
        </p>
        <ul>
          <li>AI halüsinasyon görmeye başlar</li>
          <li>Önceki yazışmalardaki konuları unutur</li>
          <li>Tutarsız cevaplar verir</li>
          <li>Performans düşer</li>
        </ul>
        <p>
          MCP sunucuları bu problemi özel, ihtiyaç anında yüklenen modüller ile çözüyor.
        </p>
      </section>

      <section>
        <h2>MCP Sunucuları Nedir?</h2>
        <p>
          MCP (Model Context Protocol) sunucuları, Claude Code'un yeteneklerini genişleten özel yapılandırmalardır. Her biri belirli bir görevi optimize eder ve sadece ihtiyaç duyulduğunda context'e dahil olur.
        </p>
      </section>

      <section>
        <h2>Nasıl Kullanılır?</h2>
        <p>MCP sunucularını kullanmak oldukça basit:</p>

        <h3>1. Temel Kurulum</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
          <code className="text-sm">
            {`claude --mcp-config server{name}.json`}
          </code>
        </pre>

        <h3>2. Oturum Öncesi Yükleme</h3>
        <p>
          En büyük avantaj: "Herhangi bir session öncesinde tek bir MCP sunucusu yükleyebilirsiniz" bu sayede context'i verimli kullanırsınız.
        </p>

        <h3>3. Cross-Platform Destek</h3>
        <p>
          Mac, Linux ve Windows sistemlerde çalışır. API key kurulumu farklı ortamlar için optimize edilmiş.
        </p>
      </section>
      <section>
        <h2>Sonuç</h2>
        <p>
          MCP sunucuları, AI araçlarının context window sorununa pratik bir çözüm sunuyor. Özellikle Claude Code ile çalışırken her proje için uygun MCP'leri önceden yüklemek, hem performansı artırıyor hem de daha tutarlı sonuçlar almanızı sağlıyor.
        </p>
        <p>
          Unutmayın: Temiz context, kaliteli AI yanıtlarının anahtarıdır.
        </p>
      </section>
    </article>
  );
}