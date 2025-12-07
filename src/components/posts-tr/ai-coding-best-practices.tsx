import ToolTip from "@/components/ToolTip";
import Code from "@/components/Code";
import Terminal, { TerminalCommand, TerminalClaude } from "@/components/Terminal";
import BlogLink from "../BlogLink";

export default function AICodingBestPractices() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <p>
        Yapay zeka destekli kodlama araçları modern yazılım geliştirmede oyunun kurallarını değiştirdi. <ToolTip keyName="claude-code">Claude Code</ToolTip>, GitHub Copilot ve Cursor gibi araçlar, geliştiricilerin üretkenliğini katladı. Ancak bu araçlardan maksimum verim almak için <ToolTip keyName="vibe-coding">vibe coding</ToolTip> yaklaşımını, <ToolTip keyName="context-window">context window</ToolTip> yönetimini ve doğru iş akışı stratejilerini bilmek şart. Bu rehber, <ToolTip keyName="llm">LLM</ToolTip> tabanlı kodlama asistanlarıyla profesyonelce çalışmanın temel prensiplerini açıklıyor.
      </p>

      <h2>Context Window: AI'nın Kısa Süreli Hafızası</h2>
      <p>
        AI kodlama asistanlarının en kritik sınırlaması <ToolTip keyName="context-window">context window</ToolTip> boyutudur. Bunun ne anlama geldiğini anlamak, verimli çalışmanın ilk adımı.
      </p>
      <p>
        <ToolTip keyName="llm">LLM</ToolTip> modelleri <ToolTip keyName="stateless">stateless</ToolTip> çalışır—sizi hatırlamazlar. Her yeni sorgulamada, tüm konuşma geçmişi AI sunucusuna yeniden gönderilir. Context window'a sadece mesajlar değil, okunan dosyalar, terminal çıktıları, lint sonuçları, web aramaları gibi tüm işlem verileri de dahildir. Bu sayede AI konuşma bağlamını "hatırlıyor" gibi görünür—ama bu bir illüzyon.
      </p>
      <p>
        Context window dolmaya yaklaştığında performans düşer. Dolmadan önce proaktif yönetim şart.
      </p>

      <h3>Context Window Dolduğunda Ne Olur?</h3>
      <ul>
        <li>Konuşmanın başındaki bilgiler kaybolur</li>
        <li><ToolTip keyName="hallucination">Halüsinasyon</ToolTip> oranı artar</li>
        <li>Tutarsız ve hatalı yanıtlar verilir</li>
        <li>Önceki talimatlar görmezden gelinir</li>
        <li>Kod kalitesi düşer</li>
      </ul>

      <h2>Neden Tek Prompt ile Tüm Uygulamayı Yazdıramazsınız?</h2>
      <p>
        Yaygın bir hata: AI'ya çok detaylı, uzun bir <ToolTip keyName="prompt">prompt</ToolTip> yazmak ve tüm uygulamayı tek seferde oluşturmasını istemek. Bu yaklaşım neredeyse her zaman başarısız olur.
      </p>

      <h3>1. Context Window Sınırı</h3>
      <p>
        Karmaşık bir uygulamayı tek prompt'ta yazdırmak imkansız değilse de son derece verimsizdir. Proje büyüdükçe context dolar, performans düşer, hatalar artar.
      </p>

      <h3>2. Hata Kümülatif Etkisi</h3>
      <p>
        Uzun oturumlarda yapılan küçük hatalar zincirleme reaksiyona yol açar. İlk adımda 5 satırlık bir hata, 50. adımda 500 satırlık yeniden yazıma dönüşebilir.
      </p>

      <h3>3. Bağlam Erozyonu</h3>
      <p>
        AI, uzun konuşmalarda projenin başlangıç gereksinimlerini "unutur". Başta Next.js istediğinizi, 50 mesaj sonra React uygulama yazdığını görürsünüz.
      </p>

      <h2>Çözüm: Task-Based Workflow Yaklaşımı</h2>
      <p>
        Başarılı <ToolTip keyName="vibe-coding">vibe coding</ToolTip>'in sırrı: projeyi mantıklı görevlere böl, her göreve odaklan, context'i temiz tut.
      </p>

      <h3>1. Büyük Görevleri Atomik Parçalara Böl</h3>
      <p>
        Her görev tek bir sorumluluğa odaklanmalı. Örnek: Kullanıcı kimlik doğrulama sistemi
      </p>
      <ul>
        <li><strong>Görev 1:</strong> User model ve database schema</li>
        <li><strong>Görev 2:</strong> POST /api/register endpoint (validation + bcrypt)</li>
        <li><strong>Görev 3:</strong> POST /api/login endpoint (JWT token)</li>
        <li><strong>Görev 4:</strong> Token refresh mekanizması</li>
        <li><strong>Görev 5:</strong> Frontend register/login form'ları</li>
        <li><strong>Görev 6:</strong> Error handling ve security headers</li>
      </ul>

      <h3>2. Her Görev = Yeni Context Window</h3>
      <p>
        Görev tamamlandığında yeni conversation başlatın. Avantajları:
      </p>
      <ul>
        <li>Temiz, optimize edilmiş context</li>
        <li>Sadece ilgili bilgiler (önceki görev sonuçları)</li>
        <li>Hata zincirleme riski sıfır</li>
        <li>Maksimum AI performansı</li>
      </ul>

      <h3>3. Her Yeni Görevde Bağlamı Aktarın</h3>
      <p>
        Yeni conversation'da şunları belirtin:
      </p>
      <ul>
        <li><strong>Proje özeti:</strong> "Next.js 14 ile e-ticaret sitesi"</li>
        <li><strong>Tamamlanan görevler:</strong> "User model ve register endpoint hazır"</li>
        <li><strong>Şu anki görev:</strong> "Login endpoint ekleyeceğiz"</li>
        <li><strong>Teknoloji stack:</strong> "TypeScript, Prisma, JWT, bcrypt"</li>
      </ul>

      <h3>Spec Driven Development: Daha Yapılandırılmış Yaklaşım</h3>
      <p>
        Bazı geliştiriciler test-driven development (TDD) benzeri bir yöntem tercih eder: <strong>Spec Driven Development</strong>. Önce çalıştırılabilir spesifikasyon yaz, sonra AI'ya bu spec'e uygun kod yazdır.
      </p>
      <p>
        Popüler araçlar:
      </p>
      <ul>
        <li><a href="https://github.com/buildermethods/agent-os" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Agent OS</a> - Spec-driven AI agent işletim sistemi</li>
        <li><a href="https://github.com/bmad-code-org/BMAD-METHOD" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">BMAD</a> - 19+ agent, 50+ <ToolTip keyName="workflow">workflow</ToolTip></li>
        <li><a href="https://github.com/github/spec-kit" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Spec Kit</a> - GitHub'ın spesifikasyon aracı</li>
        <li><a href="https://github.com/Fission-AI/OpenSpec" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Open Spec</a> - Açık kaynak spec yönetimi</li>
      </ul>
      <p>
        <strong>Uyarı:</strong> Küçük projeler için aşırı mühendislik olabilir. Basit task listesi çoğu zaman yeterli.
      </p>

      <h2>Context Window Optimizasyon Stratejileri</h2>
      <p>
        Context'i bir CPU gibi düşünün—sınırlı bir kaynak. Şu stratejilerle verimli kullanın:
      </p>

      <h3>1. Az Mesajla Maksimum Sonuç</h3>
      <p>
        Her <ToolTip keyName="prompt">prompt</ToolTip> ve yanıt context'i doldurur. 10 mesajlık sohbet yerine, 1 iyi yazılmış prompt kullanın.
      </p>
      <p>
        <strong>Kötü yaklaşım:</strong>
      </p>
      <ul>
        <li>"API yap"</li>
        <li>"Kullanıcı ekle"</li>
        <li>"Şifre ekle"</li>
        <li>"Validation yap"</li>
      </ul>
      <p>
        <strong>İyi yaklaşım:</strong>
      </p>
      <p>
        "Express.js ile POST /api/register endpoint yaz. Email/password validation yap, bcrypt ile hashle, JWT token döndür, Prisma ile PostgreSQL'e kaydet."
      </p>

      <h3>2. Context Yenileme Komutları</h3>
      <p>
        Context dolduğunda veya performans düştüğünde:
      </p>
      <Terminal title="Context Yönetimi">
        <TerminalClaude>/clear</TerminalClaude>
        <TerminalClaude>/compact Proje Next.js 14, TypeScript, Prisma kullanıyor</TerminalClaude>
      </Terminal>
      <ul>
        <li><Code>/clear</Code> - Tamamen yeni conversation başlat</li>
        <li><Code>/compact</Code> - Conversation özetini al, yeni oturum başlat</li>
        <li>Önemli bilgileri (stack, mimari kararlar) yeni oturumda tekrar belirt</li>
      </ul>

      <h3>3. Context Kullanımını İzle</h3>
      <p>
        AI araçları context doluluk oranını gösterir. Proaktif yönetim için takip edin:
      </p>
      <Terminal title="Context İzleme">
        <TerminalClaude>/context</TerminalClaude>
      </Terminal>
      <ul>
        <li><ToolTip keyName="claude-code">Claude Code</ToolTip>: <Code>/context</Code> komutu</li>
        <li>Gemini CLI: <Code>/memory</Code> komutu</li>
        <li>%70-80 dolulukta yeni conversation başlatmayı düşünün</li>
        <li>Kritik görevlerde daha sık sıfırlama yapın</li>
      </ul>

      <h3>4. MCP Sunucularını Akıllıca Kullan</h3>
      <p>
        <ToolTip keyName="mcp">MCP</ToolTip> sunucuları AI'ya süper güçler verir ama context'i de tüketir. Her MCP sunucusu başlatıldığında şema bilgileri context'e yüklenir ve sürekli yer kaplar.
      </p>
      <p>
        <strong>Verimli MCP kullanımı:</strong>
      </p>
      <ul>
        <li>Sadece kullandığınız MCP'leri yükleyin</li>
        <li>Kullanmadığınız sunucuları devre dışı bırakın</li>
        <li>Proje bazlı farklı MCP konfigürasyonları kullanın</li>
        <li>Lazy loading tercih edin (ihtiyaç anında yükle)</li>
      </ul>
      <p>
        <strong>Detaylı bilgi:</strong> <BlogLink href="/blog/mcp-servers-efficient-usage">MCP Sunucularını Verimli Kullanma Rehberi</BlogLink>
      </p>

      <h2>Vibe Coding'de Başarının 5 Altın Kuralı</h2>

      <h3>1. Context'i RAM Gibi Yönet</h3>
      <p>
        Context sınırlı bir kaynaktır. Her dosya okuma, her web araması, her terminal çıktısı context tüketir. Gereksiz bilgi yükleme.
      </p>

      <h3>2. Single Responsibility: Her Görev Bir Sorumluluk</h3>
      <p>
        ❌ "Kullanıcı sistemi ve ödeme entegrasyonu yap"
        <br />
        ✅ Görev 1: "Kullanıcı sistemi", Görev 2: "Ödeme entegrasyonu"
      </p>

      <h3>3. Test Yapmadan İlerleme</h3>
      <p>
        Her görev bitince test et. AI kodu %100 doğru değil. Build, lint, unit test çalıştır.
      </p>
      <Terminal title="Her Görev Sonrası">
        <TerminalCommand>npm run build</TerminalCommand>
        <TerminalCommand>npm run lint</TerminalCommand>
        <TerminalCommand>npm test</TerminalCommand>
      </Terminal>

      <h3>4. Prompt Mühendisliği: Az Kelime, Çok Bilgi</h3>
      <p>
        Net, spesifik, bağlamlı <ToolTip keyName="prompt">prompt'lar</ToolTip> yaz:
      </p>
      <ul>
        <li>❌ "Bir API yap"</li>
        <li>✅ "Express.js, kullanıcı kaydı, POST /api/register, email+password validation, bcrypt hash, JWT token döndür, Prisma PostgreSQL"</li>
      </ul>

      <h3>5. Her Görev Bir Commit</h3>
      <p>
        Görev tamamlandı → <ToolTip keyName="git-commit">commit</ToolTip> yap. Küçük commitler = kolay rollback, net geçmiş.
      </p>
      <Terminal title="Git Workflow">
        <TerminalCommand>git add .</TerminalCommand>
        <TerminalCommand>git commit -m "feat: add user registration endpoint"</TerminalCommand>
      </Terminal>
      <p>
        Detaylı bilgi: <BlogLink href="/blog/big-gains-with-small-commits">Küçük Commitlerle Büyük Kazanımlar</BlogLink>
      </p>

      <h2>3 Kritik Hata ve Çözümleri</h2>

      <h3>❌ Hata 1: Marathon Conversation</h3>
      <p>
        <strong>Sorun:</strong> 100+ mesajlık tek bir conversation'da tüm projeyi yazmak
      </p>
      <p>
        <strong>Çözüm:</strong> 50-100 mesajda bir yenile. Özellik başına yeni conversation başlat.
      </p>

      <h3>❌ Hata 2: Bağlamsız Başlangıç</h3>
      <p>
        <strong>Sorun:</strong> Yeni conversation'da "Login endpoint yap" demek (AI ne bilsin?)
      </p>
      <p>
        <strong>Çözüm:</strong> Her yeni oturumda mini brief ver: "Next.js 14, TypeScript, Prisma, PostgreSQL. User model hazır. Şimdi login endpoint ekle."
      </p>

      <h3>❌ Hata 3: Test-Free Coding</h3>
      <p>
        <strong>Sorun:</strong> AI kod yazdı, test etmeden devam et
      </p>
      <p>
        <strong>Çözüm:</strong> Build + lint + test çalıştırmadan yeni göreve geçme. Hata erken yakalanmazsa zincirleme felaket.
      </p>

      <h2>Sonuç: AI Bir Araç, Sihirli Değnek Değil</h2>
      <p>
        Yapay zeka kodlama asistanları yazılım geliştirmeyi demokratikleştirdi. Ancak maksimum verim için strateji şart:
      </p>
      <ul>
        <li><strong>Context window'u akıllıca yönet</strong> - Sınırlı bir kaynak</li>
        <li><strong>Görevleri atomik parçalara böl</strong> - Her görev = 1 sorumluluk</li>
        <li><strong>Test et, commit et, yenile</strong> - Hata birikimini önle</li>
        <li><strong>Prompt mühendisliği öğren</strong> - Az mesaj, çok bilgi</li>
        <li><strong>MCP'leri optimize et</strong> - Gereksiz sunucu yükleme</li>
      </ul>
      <p>
        <strong>Altın kural:</strong> AI + İyi yazılım mühendisliği pratikleri = 10x üretkenlik. AI tek başına yeterli değil—stratejik düşünmek zorundasın.
      </p>
      <p>
        <strong>Daha fazla kaynak:</strong>
      </p>
      <ul>
        <li><BlogLink href="/blog/mcp-servers-efficient-usage">MCP Sunucularını Verimli Kullanma</BlogLink></li>
        <li><BlogLink href="/blog/big-gains-with-small-commits">Küçük Commitlerle Büyük Kazanımlar</BlogLink></li>
        <li><BlogLink href="/blog/beginner-git-usage">Başlangıç Seviyesi Git Kullanımı</BlogLink></li>
      </ul>
    </article>
  );
}
