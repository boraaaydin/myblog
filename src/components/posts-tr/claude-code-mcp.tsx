import ToolTip from "@/components/ToolTip";
import Terminal, { TerminalClaude, TerminalCommand, TerminalInfo, TerminalResult } from "../Terminal";

export default function MCPServersGuide() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <header>
        <h1>Yapay Zekayı Verimli Kullanma: MCP Sunucuları</h1>
      </header>

      <p>
        <ToolTip keyName="mcp-server">MCP sunucuları</ToolTip> ile yapay zekaya ilave özellikler ekleyebiliyoruz. Ancak kullandığımız MCP sunucuları arttıkça <ToolTip keyName="context-window">context window</ToolTip> azalmaya başlıyor. <ToolTip keyName="claude-code">Claude Code</ToolTip> bize her oturumda kullanacağımız MCP serverları parametrik olarak seçebilmemize imkan sağlıyor.
      </p>
      <Terminal title="Claude Code ile MCP Server">
          <TerminalCommand>claude --mcp-config github.json</TerminalCommand>
          <TerminalResult>✻ Claude Code'a Hoş Geldiniz! </TerminalResult>
        </Terminal>
      <section>
        <h2>Context Window Sorunu</h2>
        <p>
          <ToolTip keyName="claude-code">Claude Code</ToolTip> gibi AI araçlarının başarılı çalışabilmesi için <ToolTip keyName="context-window">context window</ToolTip>&apos;un mümkün mertebe boş olması kritik. Context dolduğunda:
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
      <h2>MCP server kullanmazsak context window nasıl?</h2>
      <Terminal title="Claude Code ile MCP Server">
          <TerminalCommand>claude</TerminalCommand>
          <TerminalResult>✻ Claude Code'a Hoş Geldiniz! </TerminalResult>
          <TerminalClaude>/context</TerminalClaude>
          <TerminalResult>Context Kullanımı</TerminalResult>
          <TerminalResult>claude-sonnet-4-20250514 • 17k/200k tokens (%9)</TerminalResult>
          <TerminalResult>⛶ Boş alan: 185.4k (%92.7)</TerminalResult>
        </Terminal>

        <h2>Peki birden fazla MCP server kullanmak istersek?</h2>

        <Terminal title="Claude Code ile MCP Server">
          <TerminalCommand>claude --mcp-config server/context7.json --mcp-config server/playwright.json  --mcp-config server/sequential-thinking.json --mcp-config server/github.json --mcp-config server/supabase.json</TerminalCommand>
          <TerminalResult>✻ Claude Code'a Hoş Geldiniz! </TerminalResult>
          <TerminalClaude>/context</TerminalClaude>
          <TerminalResult>Context Kullanımı</TerminalResult>
          <TerminalResult>claude-sonnet-4-20250514 • 53k/200k tokens (%26)</TerminalResult>
          <TerminalResult>⛁ MCP araçları: 37.9k tokens (%19.0)</TerminalResult>
          <TerminalResult>⛶ Boş alan: 147.0k (%73.5)</TerminalResult>
        </Terminal>

        <p>
          En büyük avantaj: Herhangi bir MCP server'a ihtiyacınız yoksa hiçbirini yüklemenize gerek yok. İhtiyacınız varsa kullanın.
        </p>

      </section>
      <p>
        Her oturumda ihtiyacınız olan mcp&apos; yi claude code ile kullanmak için bu github reposunu inceleyebilirsiniz. <a href="https://github.com/boraaaydin/mcp" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://github.com/boraaaydin/mcp</a>
      </p>
      <section>
        <h2>Sonuç</h2>
        <p>
          MCP sunucuları, AI araçlarının context window sorununa pratik bir çözüm sunuyor. Özellikle Claude Code ile çalışırken her proje için uygun MCP&apos;leri önceden yüklemek, hem performansı artırıyor hem de daha tutarlı sonuçlar almanızı sağlıyor.
        </p>
        <p>
          Unutmayın: Temiz context, kaliteli AI yanıtlarının anahtarıdır.
        </p>
      </section>
    </article>
  );
}