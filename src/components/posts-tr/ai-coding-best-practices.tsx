import ToolTip from "@/components/ToolTip";
import Code from "@/components/Code";
import Terminal, { TerminalCommand, TerminalResult } from "@/components/Terminal";
import BlogLink from "../BlogLink";

export default function AICodingBestPractices() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <p>
        Yapay zeka destekli kodlama araçları modern yazılım geliştirmenin vazgeçilmez bir parçası haline geldi. Ancak bu araçları etkili kullanmak için <ToolTip keyName="vibe-coding">vibe coding</ToolTip> yaklaşımını, <ToolTip keyName="context-window">context window</ToolTip> yönetimini ve doğru iş akışı stratejilerini anlamak gerekiyor. Bu rehberde, <ToolTip keyName="llm">LLM</ToolTip> tabanlı kodlama asistanlarıyla verimli çalışmanın temel prensiplerini öğreneceksiniz.
      </p>

      <h2>Context Window: Yapay Zekanın Hafıza Sınırı</h2>
      <p>
        Yapay zeka kodlama asistanlarını kullanırken karşılaşacağınız en önemli kısıtlamalardan biri <ToolTip keyName="context-window">context window</ToolTip> sınırıdır. Peki bu ne anlama geliyor?
      </p>
      <p>
        <ToolTip keyName="llm">LLM</ToolTip> modelleri <ToolTip keyName="stateless">stateless</ToolTip> çalışır—yani aslında sizi hatırlamazlar. Her yeni sorgulamada, önceki tüm konuşma geçmişiniz AI sunucusuna tekrar gönderilir ve işlenir. Bu sayede yapay zeka konuşmanın bağlamını "biliyor" gibi görünür. Ancak bu sistemin bir maliyeti var: hafıza sınırı.
      </p>
      <p>
        Context window dolduğunda yapay zeka:
      </p>
      <ul>
        <li>Konuşmanın başındaki bilgileri "unutmaya" başlar</li>
        <li><ToolTip keyName="hallucination">Halüsinasyon</ToolTip> yapmaya meyilli hale gelir</li>
        <li>Tutarsız yanıtlar verebilir</li>
        <li>Önceki talimatları görmezden gelebilir</li>
      </ul>

      <h2>Tek Prompt ile Uygulama Yazmak Neden Zordur?</h2>
      <p>
        Birçok geliştirici yapay zekaya çok detaylı, uzun bir <ToolTip keyName="prompt">prompt</ToolTip> yazıp bütün uygulamayı yazdırmaya çalışır. Ancak bu yaklaşımın başarı oranı düşüktür. Bunun nedenleri:
      </p>

      <h3>1. Context Window Sınırlaması</h3>
      <p>
        Ne kadar ayrıntılı olursa olsun, tek bir prompt ile karmaşık bir uygulama yazdırmak zordur. Proje büyüdükçe ve konuşma uzadıkça, context window dolmaya başlar ve kalite düşer.
      </p>

      <h3>2. Hata Birikimleri</h3>
      <p>
        Tek bir uzun oturumda yapılan küçük hatalar birikir ve sonraki adımlarda daha büyük problemlere dönüşür. Bu hataları tespit etmek ve düzeltmek giderek zorlaşır.
      </p>

      <h3>3. Bağlam Kaybı</h3>
      <p>
        Uzun konuşmalarda AI, projenizin başlangıç gereksinimlerini veya kısıtlamalarını "unutabilir" ve tutarsız kodlar üretebilir.
      </p>

      <h2>Çözüm: Böl ve Yönet Stratejisi</h2>
      <p>
        Başarılı <ToolTip keyName="vibe-coding">vibe coding</ToolTip> için en etkili yöntem, projenizi mantıklı parçalara bölmek ve her seferinde bir göreve odaklanmaktır. İşte adım adım yaklaşım:
      </p>

      <h3>1. Ana Görevi Alt Görevlere Bölün</h3>
      <p>
        Büyük bir özelliği küçük, yönetilebilir parçalara ayırın. Örneğin, bir kullanıcı kimlik doğrulama sistemi şu alt görevlere bölünebilir:
      </p>
      <ul>
        <li>Kullanıcı veri modelini oluştur</li>
        <li>Kayıt API endpoint'ini yaz</li>
        <li>Giriş API endpoint'ini yaz</li>
        <li>Token yönetimini ekle</li>
        <li>Frontend form'larını oluştur</li>
        <li>Hata yönetimini implement et</li>
      </ul>

      <h3>2. Her Görev İçin Yeni Context Başlatın</h3>
      <p>
        Her alt görevi tamamladıktan sonra, yeni bir konuşma başlatın. Bu yaklaşımın avantajları:
      </p>
      <ul>
        <li>Temiz, boş context window ile başlarsınız</li>
        <li>AI sadece ilgili bilgilere odaklanır</li>
        <li>Hata birikimi önlenir</li>
        <li>Her görev için en iyi performansı alırsınız</li>
      </ul>

      <h3>3. Görevler Arası Bağlam Aktarımı</h3>
      <p>
        Her yeni görev için yapay zekaya şunları aktarın:
      </p>
      <ul>
        <li>Ana projenin amacı</li>
        <li>Önceki görevlerde ne yapıldı</li>
        <li>Bu görevin ana hedefle nasıl ilişkili olduğu</li>
        <li>Kullanılacak teknoloji ve mimari kararlar</li>
      </ul>

      <h2>Workflow Framework ile Verimlilik</h2>
      <p>
        Modern AI kodlama araçları, <ToolTip keyName="workflow">workflow</ToolTip> tabanlı çalışmayı destekler. Bu yaklaşım şu şekilde işler:
      </p>

      <h3>Task Dosyası Yaklaşımı</h3>
      <p>
        Aynı repository içinde ayrı görev dosyaları oluşturarak çalışın:
      </p>

      <Terminal title="Proje Yapısı">
        <TerminalCommand>ls tasks/</TerminalCommand>
        <TerminalResult>01-create-user-model.md</TerminalResult>
        <TerminalResult>02-setup-authentication.md</TerminalResult>
        <TerminalResult>03-build-api-endpoints.md</TerminalResult>
        <TerminalResult>04-create-frontend-forms.md</TerminalResult>
      </Terminal>

      <p>
        Her görev dosyası şunları içermelidir:
      </p>
      <ul>
        <li><strong>Görev tanımı</strong>: Ne yapılacak?</li>
        <li><strong>Bağlam</strong>: Ana proje hedefi nedir?</li>
        <li><strong>Kabul kriterleri</strong>: Görev ne zaman tamamlanmış sayılır?</li>
        <li><strong>Kontrol noktaları</strong>: Neleri test etmek gerekir?</li>
      </ul>

      <h3>Gelişmiş Workflow Framework&apos;leri</h3>
      <p>
        Bazı geliştiriciler daha yapılandırılmış yaklaşımlar tercih eder. <a href="https://github.com/github/spec-kit" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Spec-Kit</a>, kod yazmadan önce çalıştırılabilir spesifikasyonlar oluşturmayı teşvik eden bir araç setidir. <a href="https://github.com/bmad-code-org/BMAD-METHOD" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">BMAD-METHOD</a> ise 19+ özel agent ve 50+ <ToolTip keyName="workflow">workflow</ToolTip> içeren kapsamlı bir framework&apos;tür. Bu tür araçlar güçlüdür ancak bazı projeler için aşırı mühendislik (over-engineering) olabilir—kendi ihtiyaçlarınıza göre basit bir task yönetimi de yeterli olabilir.
      </p>

      <h2>Yapay Zekaya Kontrol İstasyonları Ekletin</h2>
      <p>
        Görevleri oluştururken yapay zekadan her aşamada kontrol yapmasını isteyebilirsiniz. Örnek bir <ToolTip keyName="prompt">prompt</ToolTip> yapısı:
      </p>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <p className="font-mono text-sm">
          &quot;Bu görevi tamamladıktan sonra:
          <br />1. Unit testlerini çalıştır
          <br />2. Build başarılı mı kontrol et
          <br />3. Linting hataları var mı bak
          <br />4. Eğer frontend değişikliği yaptıysan, tarayıcıda görsel kontrol yapılabilir mi bana bildir
          <br />5. Tüm kontroller geçerse bana özet ver ve bir sonraki göreve geçelim&quot;
        </p>
      </div>

      <h2>Context Window Yönetimi İçin İpuçları</h2>
      <p>
        <ToolTip keyName="context-window">Context window</ToolTip> yönetimini optimize etmek için:
      </p>

      <h3>1. Gereksiz Bilgi Paylaşmayın</h3>
      <p>
        Her görev için sadece ilgili dosya ve bilgileri paylaşın. Tüm kod tabanını her seferinde göstermek context'i gereksiz yere doldurur.
      </p>

      <h3>2. Özet Bilgi Kullanın</h3>
      <p>
        Önceki görevlerden bahsederken detaylı kod yerine özetler kullanın:
      </p>
      <ul>
        <li>İyi: &quot;Kullanıcı modeli oluşturuldu ve <Code>email</Code>, <Code>password</Code>, <Code>createdAt</Code> alanları eklendi&quot;</li>
        <li>Kötü: [Tüm model kodunu yapıştırmak]</li>
      </ul>

      <h3>3. Context Window Kullanımınızı Takip Edin</h3>
      <p>
        Modern AI kodlama araçları, context window kullanımınızı görüntülemenize olanak tanır. Bu sayede ne kadar kapasite kaldığını görebilir ve buna göre stratejinizi ayarlayabilirsiniz:
      </p>
      <ul>
        <li><ToolTip keyName="claude-code">Claude Code</ToolTip>&apos;da: <Code>/context</Code> komutuyla mevcut context kullanımınızı görebilirsiniz</li>
        <li>Gemini CLI&apos;da: <Code>/memory</Code> komutuyla context durumunu kontrol edebilirsiniz</li>
        <li>Context window dolmaya yaklaşınca yeni bir conversation başlatmayı düşünün</li>
        <li>Kritik görevlerde context&apos;i daha sık sıfırlayarak temiz başlangıç yapın</li>
      </ul>

      <h3>4. MCP Kullanımını Optimize Edin</h3>
      <p>
        <ToolTip keyName="mcp">MCP</ToolTip> (Model Context Protocol) sunucuları, AI araçlarınıza güçlü yetenekler kazandırır ancak context window'unuzu da tüketir. Her MCP sunucusu başlatıldığında şema bilgileri context'e yüklenir ve bu alan sürekli işgal edilir.
      </p>
      <p>
        Context window'unuzu verimli kullanmak için:
      </p>
      <ul>
        <li>Sadece ihtiyaç duyduğunuzda MCP sunucularını yükleyin</li>
        <li>Kullanmadığınız MCP sunucularını devre dışı bırakın</li>
        <li>Birden fazla projeniz varsa, her proje için farklı MCP konfigürasyonları kullanın</li>
        <li>MCP sunucularını lazy loading ile yükleyin (ihtiyaç anında)</li>
      </ul>
      <p>
        MCP sunucularını verimli kullanma hakkında detaylı bilgi için <BlogLink href="/blog/mcp-servers-efficient-usage">MCP Sunucularını Verimli Kullanma</BlogLink> yazımı okuyabilirsiniz.
      </p>

      <h2>Vibe Coding'de Başarının Anahtarları</h2>
      <p>
        <ToolTip keyName="vibe-coding">Vibe coding</ToolTip> ile verimli çalışmak için:
      </p>

      <h3>1. Context Window'u Bir Kaynak Gibi Yönetin</h3>
      <p>
        Context space'i sınırlı bir kaynaktır. Her bilgi parçasının gerçekten gerekli olup olmadığını değerlendirin.
      </p>

      <h3>2. Görevleri Atomik Tutun</h3>
      <p>
        Her görev tek bir sorumluluğa odaklanmalı. &quot;Kullanıcı sistemi ve ödeme entegrasyonu&quot; yerine bunları iki ayrı görev yapın.
      </p>

      <h3>3. Test ve Doğrulamayı Atlamayın</h3>
      <p>
        Her görev sonunda testler çalıştırın. AI'nın ürettiği kod her zaman doğru olmayabilir.
      </p>

      <h3>4. İyi Prompt Yazma Becerisi Geliştirin</h3>
      <p>
        Net, spesifik ve bağlam içeren <ToolTip keyName="prompt">prompt'lar</ToolTip> yazın:
      </p>
      <ul>
        <li>Kötü: &quot;Bir API yap&quot;</li>
        <li>İyi: &quot;Express.js kullanarak, kullanıcı kaydı için POST /api/register endpoint'i oluştur. Email ve password validation yap. Bcrypt ile şifre hashle. JWT token dön.&quot;</li>
      </ul>

      <h3>5. Versiyonlama Kullanın</h3>
      <p>
        Her görev tamamlandığında <ToolTip keyName="git-commit">commit</ToolTip> yapın. Bu sayede:
      </p>
      <ul>
        <li>Hatalı değişiklikleri geri alabilirsiniz</li>
        <li>İlerlemeyi takip edebilirsiniz</li>
        <li>Kod inceleme (code review) yapabilirsiniz</li>
      </ul>

      <h2>Yaygın Hatalar ve Nasıl Önlenir</h2>

      <h3>Hata 1: Çok Uzun Konuşmalar</h3>
      <p>
        <strong>Sorun:</strong> Tek bir conversation içinde çok fazla özellik eklemeye çalışmak.
        <br />
        <strong>Çözüm:</strong> 50-100 mesaj sonra yeni bir conversation başlatın veya önemli dönüm noktalarında yenileyin.
      </p>

      <h3>Hata 2: Bağlam Eksikliği</h3>
      <p>
        <strong>Sorun:</strong> Yeni bir task başlatırken AI'ya projenin genel amacını söylememek.
        <br />
        <strong>Çözüm:</strong> Her yeni conversation'da 2-3 cümlelik proje özeti ile başlayın.
      </p>

      <h3>Hata 3: Kontrolsüz İlerleme</h3>
      <p>
        <strong>Sorun:</strong> Test yapmadan bir sonraki göreve geçmek.
        <br />
        <strong>Çözüm:</strong> Her görev bitiminde en az build ve temel testleri çalıştırın.
      </p>

      <h2>Sonuç: Stratejik Düşünün, Verimli Kodlayın</h2>
      <p>
        Yapay zeka destekli kodlama araçları güçlüdür, ancak etkili kullanım strateji gerektirir. <ToolTip keyName="context-window">Context window</ToolTip> yönetimi, görevlerin doğru parçalara bölünmesi ve sistematik kontroller, başarılı <ToolTip keyName="vibe-coding">vibe coding</ToolTip>'in temelini oluşturur.
      </p>
      <p>
        Unutmayın: Yapay zeka bir araçtır, sihirli değnek değil. En iyi sonuçlar, AI'nın gücünü iyi yazılım mühendisliği pratikleriyle birleştirdiğinizde ortaya çıkar.
      </p>
    </article>
  );
}
