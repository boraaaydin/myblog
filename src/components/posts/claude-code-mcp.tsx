import ToolTip from "@/components/ToolTip";

export default function MCPServersGuide() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <header>
        <h1>Yapay Zekayı Verimli Kullanma: MCP Sunucuları</h1>
      </header>

      <p>
        <ToolTip keyName="mcp-server">MCP sunucuları</ToolTip> ile yapay zekaya ilave özellikler ekleyebiliyoruz. Ancak kullandığımız MCP sunucuları arttıkça <ToolTip keyName="context-window">context window</ToolTip> azalmaya başlıyor. <ToolTip keyName="claude-code">Claude Code</ToolTip> bize her oturumda kullanacağımız MCP serverları parametrik olarak seçebilmemize imkan sağlıyor.
      </p>



      <section>
        <h2>Context Window Sorunu</h2>
        <p>
          <ToolTip keyName="claude-code">Claude Code</ToolTip> gibi AI araçlarının başarılı çalışabilmesi için <ToolTip keyName="context-window">context window</ToolTip>'un mümkün mertebe boş olması kritik. Context dolduğunda:
        </p>
        <ul>
          <li>AI halüsinasyon görmeye başlar</li>
          <li>Önceki yazışmalardaki konuları unutur</li>
          <li>Tutarsız cevaplar verir</li>
          <li>Performans düşer</li>
        </ul>
        <p>
          <ToolTip keyName="mcp-server">MCP sunucuları</ToolTip> bu problemi özel, ihtiyaç anında yüklenen modüller ile çözüyor.
        </p>
      </section>

      <section>
        <h2>Nasıl Kullanılır?</h2>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
          <code className="text-sm">
            {`claude --mcp-config {servername}.json`}
          </code>
        </pre>

        <p>
          En büyük avantaj: "Herhangi bir session öncesinde tek bir MCP sunucusu yükleyebilirsiniz" bu sayede context'i verimli kullanırsınız.
        </p>

      </section>
      <p>
        Her oturumda ihtiyacınız olan mcp' yi claude code ile kullanmak için bu github reposunu inceleyebilirsiniz. <a href="https://github.com/boraaaydin/mcp" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://github.com/boraaaydin/mcp</a>
      </p>
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