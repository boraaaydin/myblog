import ToolTip from "@/components/ToolTip";
import Terminal, { TerminalClaude, TerminalCommand, TerminalResult } from "../Terminal";

export default function MCPServersGuide() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <header>
        <h1>Claude Code MCP Sunucuları Rehberi: Context Window ve Performans Optimizasyonu</h1>
      </header>

      <p>
        <ToolTip keyName="claude-code">Claude Code</ToolTip> güçlü bir yapay zeka kodlama asistanıdır ve <ToolTip keyName="mcp-server">MCP sunucuları</ToolTip> (Model Context Protocol) bu yetenekleri önemli ölçüde genişletir. Ancak birden fazla MCP sunucusunu verimli şekilde yönetmek, bunların <ToolTip keyName="context-window">context window</ToolTip> üzerindeki etkisini anlamayı gerektirir. Bu kapsamlı rehber, Claude Code performansını MCP sunucularını sadece gerektiğinde stratejik olarak yükleyerek nasıl optimize edeceğinizi gösterir.
      </p>
      <section>
        <h2>Claude Code ile Belirli MCP Sunucularını Nasıl Başlatırız?</h2>
        <p>
          Claude Code&apos;u MCP sunucu yapılandırmaları ile başlatmak için temel sözdizimi oldukça basittir:
        </p>
        <Terminal title="Claude Code ile MCP Server">
          <TerminalCommand>claude --mcp-config github.json</TerminalCommand>
          <TerminalResult>✻ Claude Code&apos;a Hoş Geldiniz! </TerminalResult>
        </Terminal>
        <p>
          Bu komut Claude Code&apos;u yalnızca GitHub MCP sunucusu yüklenmiş halde başlatır, size GitHub&apos;a özgü yetenekler sağlarken maksimum context alanını korur.
        </p>

        <h3>Yaygın MCP Sunucu Kullanım Senaryoları</h3>
        <p>Farklı geliştirme senaryoları için pratik örnekler:</p>

        <h4>Playwright ile Web Geliştirme</h4>
        <Terminal title="Web Geliştirme Kurulumu">
          <TerminalCommand>claude --mcp-config playwright.json</TerminalCommand>
          <TerminalResult>✻ Claude Code Playwright desteği ile hazır</TerminalResult>
        </Terminal>

        <h4>Veritabanı Erişimi ile Backend Geliştirme</h4>
        <Terminal title="Backend Geliştirme Kurulumu">
          <TerminalCommand>claude --mcp-config supabase.json</TerminalCommand>
          <TerminalResult>✻ Claude Code Supabase entegrasyonu ile hazır</TerminalResult>
        </Terminal>

        <h4>Full-Stack Geliştirme (Birden Fazla Sunucu)</h4>
        <Terminal title="Full-Stack Kurulumu">
          <TerminalCommand>claude --mcp-config github.json --mcp-config supabase.json</TerminalCommand>
          <TerminalResult>✻ Claude Code GitHub ve Supabase desteği ile hazır</TerminalResult>
        </Terminal>
      </section>
      <section>
        <h2>Claude Code'da Context Window Sorununu Anlamak</h2>
        <p>
          <ToolTip keyName="context-window">Context window</ToolTip>, <ToolTip keyName="claude-code">Claude Code</ToolTip>&apos;un aynı anda işleyebileceği bilgi miktarıdır. Bunu verimli yönetmek, optimal AI performansı için kritiktir. Context window&apos;unuz çok fazla MCP sunucu yapılandırmasıyla dolduğunda şunları yaşarsınız:
        </p>
        <ul>
          <li><strong>AI halüsinasyonları</strong>: Yanlış veya uydurma yanıtlar</li>
          <li><strong>Hafıza kaybı</strong>: Önceki konuşma bağlamını unutma</li>
          <li><strong>Tutarsız çıktılar</strong>: Benzer sorulara çelişkili cevaplar</li>
          <li><strong>Düşük performans</strong>: Daha yavaş yanıt süreleri ve azalan doğruluk</li>
        </ul>
        <p>
          Çözüm? <ToolTip keyName="mcp-server">MCP sunucularını</ToolTip> parametrik olarak yükleyin—her özel kodlama oturumu için sadece ihtiyacınız olanları aktive edin. Bu, context window&apos;unuzu temiz tutar ve Claude Code&apos;u en iyi performansta çalıştırır.
        </p>
      </section>

      <section>
        <h2>Temel Durum: MCP Sunucuları Olmadan Claude Code Context Window</h2>
        <p>
          Herhangi bir MCP sunucu yapılandırması olmadan Claude Code çalıştırıldığında ne kadar context window alanı olduğunu inceleyelim:
        </p>
        <Terminal title="Claude Code ile MCP Server">
          <TerminalCommand>claude</TerminalCommand>
          <TerminalResult>✻ Claude Code&apos;a Hoş Geldiniz! </TerminalResult>
          <TerminalClaude>/context</TerminalClaude>
          <TerminalResult>Context Kullanımı</TerminalResult>
          <TerminalResult>claude-sonnet-4-20250514 • 17k/200k tokens (%9)</TerminalResult>
          <TerminalResult>⛶ Boş alan: 185.4k (%92.7)</TerminalResult>
        </Terminal>
        <p>
          Hiçbir MCP sunucusu yüklenmediğinde <strong>%92.7 boş context alanınız</strong> var—kodunuz ve konuşmalarınız için bol miktarda alan.
        </p>

        <h2>Birden Fazla MCP Sunucusu Yüklemenin Etkisi</h2>
        <p>
          Şimdi birden fazla MCP sunucusunu aynı anda yüklediğimizde ne olduğunu görelim. Bu örnek 5 popüler MCP yapılandırmasını yüklemeyi gösteriyor:
        </p>
        <Terminal title="Claude Code ile MCP Server">
          <TerminalCommand>claude --mcp-config server/context7.json --mcp-config server/playwright.json  --mcp-config server/sequential-thinking.json --mcp-config server/github.json --mcp-config server/supabase.json</TerminalCommand>
          <TerminalResult>✻ Claude Code&apos;a Hoş Geldiniz! </TerminalResult>
          <TerminalClaude>/context</TerminalClaude>
          <TerminalResult>Context Kullanımı</TerminalResult>
          <TerminalResult>claude-sonnet-4-20250514 • 53k/200k tokens (%26)</TerminalResult>
          <TerminalResult>⛁ MCP araçları: 37.9k tokens (%19.0)</TerminalResult>
          <TerminalResult>⛶ Boş alan: 147.0k (%73.5)</TerminalResult>
        </Terminal>
        <p>
          Çarpıcı farkı fark edin: kullanılabilir context window&apos;unuz <strong>%92.7&apos;den %73.5&apos;e düştü</strong>—MCP yapılandırmalarını yüklemekten kaynaklanan neredeyse %20&apos;lik bir kayıp, onları kullanmaya bile başlamadan!
        </p>
        <p>
          İşte bu yüzden <strong>parametrik MCP yükleme</strong> esastır. Her görev için sadece ihtiyacınız olan MCP sunucularını seçici şekilde yükleyerek, gerçek çalışmanız için maksimum context alanını korursunuz, bu da daha iyi AI performansı ve daha doğru yanıtlar sağlar.
        </p>

        <h2>MCP Sunucu Yönetimi için En İyi Uygulamalar</h2>
        <ul>
          <li><strong>Talep üzerine yükleyin</strong>: MCP sunucularını sadece belirli işlevlerine ihtiyaç duyduğunuzda aktive edin</li>
          <li><strong>Projeye özel yapılandırmalar kullanın</strong>: Farklı proje türleri için farklı MCP yapılandırma dosyaları oluşturun</li>
          <li><strong>Context kullanımını izleyin</strong>: Boşa alan harcamadığınızdan emin olmak için düzenli olarak <code>/context</code> komutunu kontrol edin</li>
          <li><strong>İşiniz bittiğinde kaldırın</strong>: MCP&apos;ye özel görevleri tamamladığınızda Claude Code&apos;u MCP yapılandırmaları olmadan yeniden başlatın</li>
        </ul>

      </section>

      <section>
        <h2>Hızlı Başlangıç: MCP Sunucularını Kurma ve Yapılandırma</h2>
        <p>
          Claude Code iş akışınızı optimize etmeye hazır mısınız? Hemen kullanabileceğiniz MCP sunucu yapılandırmalarının bu özenle hazırlanmış koleksiyonunu inceleyin:
        </p>
        <p>
          <a href="https://github.com/boraaaydin/mcp" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">MCP Sunucu Yapılandırma Repository&apos;sini Görüntüle →</a>
        </p>
        <p>
          Repository, GitHub, Supabase, Playwright ve daha fazlası gibi popüler araçlar için kullanıma hazır yapılandırmalar içerir. Sadece repo&apos;yu klonlayın ve ihtiyacınız olan yapılandırmaları <code>--mcp-config</code> flag&apos;i kullanarak referans edin.
        </p>
      </section>

      <section>
        <h2>Claude Code MCP Sunucuları Hakkında Sıkça Sorulan Sorular</h2>

        <h3>Claude Code&apos;da MCP sunucuları nedir?</h3>
        <p>
          MCP sunucuları (Model Context Protocol sunucuları), Claude Code&apos;a özel yetenekler ekleyen uzantılardır. GitHub, Supabase, Playwright ve daha fazlası gibi harici araçlar ve hizmetlerle entegrasyonu sağlarlar. Her MCP sunucusu, veritabanı erişimi, API entegrasyonu veya test framework&apos;leri gibi belirli işlevler sağlar.
        </p>

        <h3>MCP sunucuları Claude Code performansını nasıl etkiler?</h3>
        <p>
          MCP sunucuları aktif olarak kullanılmadıklarında bile context window alanı tüketirler. Birden fazla MCP sunucusu yüklemek, kullanılabilir context&apos;inizi %92.7&apos;den %73.5&apos;e veya daha düşüğe indirebilir. Bu azalma AI performansını etkiler, potansiyel olarak halüsinasyonlara, hafıza kaybına ve tutarsız yanıtlara neden olur.
        </p>

        <h3>Aynı anda kaç MCP sunucusu yüklemeliyim?</h3>
        <p>
          Sadece mevcut göreviniz için ihtiyacınız olan MCP sunucularını yükleyin. Çoğu proje için 1-2 MCP sunucusu, işlevsellik ve context koruması arasında optimal dengeyi sağlar. Tüm mevcut sunucuları aynı anda yüklemekten kaçının, çünkü bu AI performansını önemli ölçüde düşürür.
        </p>

        <h3>Claude Code oturumu sırasında MCP sunucularını değiştirebilir miyim?</h3>
        <p>
          Hayır, MCP sunucu yapılandırmaları başlangıçta yüklenir. Farklı MCP sunucuları kullanmak için Claude Code&apos;u yeni yapılandırma flag&apos;leri ile yeniden başlatmanız gerekir. Verimliliği maksimize etmek için her oturumu başlatmadan önce MCP kullanımınızı planlayın.
        </p>

        <h3>MCP sunucu yapılandırma dosyalarını nerede bulabilirim?</h3>
        <p>
          Özel MCP yapılandırma dosyaları oluşturabilir veya hazır yapılandırmalar kullanabilirsiniz. Resmi Claude Code dokümantasyonu MCP kurulum kılavuzları sağlar ve <a href="https://github.com/boraaaydin/mcp" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">github.com/boraaaydin/mcp</a> gibi topluluk repository&apos;leri popüler araçlar için kullanıma hazır yapılandırmalar sunar.
        </p>

        <h3>Claude Code&apos;da context window nedir?</h3>
        <p>
          Context window, Claude Code&apos;un aynı anda işleyebileceği toplam bilgi miktarıdır ve token&apos;larla ölçülür. Daha büyük boş context window, daha iyi AI yanıtları, daha uzun konuşmalar ve daha doğru kod yardımı sağlar. Context&apos;i verimli yönetmek optimal performans için kritiktir.
        </p>

        <h3>Mevcut context window kullanımımı nasıl kontrol ederim?</h3>
        <p>
          Claude Code&apos;da mevcut context kullanımınızı görüntülemek için <code>/context</code> komutunu kullanın. Bu, kullanılan toplam token&apos;ları, MCP araçları yükünü ve mevcut boş alanı gösterir, context window kullanımınızı izlemenize ve optimize etmenize yardımcı olur.
        </p>
      </section>

      <section>
        <h2>Sonuç: Akıllı MCP Yönetimi ile Claude Code Verimliliğini Maksimize Edin</h2>
        <p>
          <ToolTip keyName="mcp-server">MCP sunucuları</ToolTip>, <ToolTip keyName="claude-code">Claude Code</ToolTip>&apos;u yetenekli bir AI asistanından güçlü bir geliştirme aracına dönüştürür. Ancak tam potansiyellerini ortaya çıkarmanın anahtarı, <ToolTip keyName="context-window">context window</ToolTip>&apos;unuzun stratejik yönetiminde yatar.
        </p>
        <p>
          MCP sunucularını parametrik olarak yükleyerek—sadece ihtiyacınız olanı, ihtiyacınız olduğunda aktive ederek—şunları sağlarsınız:
        </p>
        <ul>
          <li><strong>Optimal AI performansı</strong>: Daha fazla context alanı, daha iyi ve daha doğru yanıtlar demektir</li>
          <li><strong>Azaltılmış halüsinasyonlar</strong>: Temiz context, AI&apos;ın yanlış bilgi üretmesini önler</li>
          <li><strong>Geliştirilmiş tutarlılık</strong>: Claude Code oturumunuz boyunca konuşma bağlamını korur</li>
          <li><strong>Daha hızlı geliştirme</strong>: Verimli context kullanımı, daha hızlı ve daha güvenilir yardıma yol açar</li>
        </ul>
        <p>
          Unutmayın: Temiz bir context window, kaliteli AI destekli geliştirmenin temelidir. MCP sunucu yönetiminde ustalaşın ve Claude Code&apos;da ustalaşın.
        </p>
      </section>
    </article>
  );
}