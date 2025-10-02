import ToolTip from "@/components/ToolTip";

export default function CommitBestPractices() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <header>
        <h1>Küçük Commitlerle Büyük Kazanımlar: Geliştirme Sürecinde İyi Alışkanlıklar</h1>
      </header>

      <p>
        Yazılım geliştirme sürecinde en sık yaptığımız hatalardan biri, günlerce kod yazip sonra tek seferde büyük bir <ToolTip keyName="git-commit">commit</ToolTip> atmaya çalışmak. Peki neden bu kadar yanlış ve nasıl daha iyi yapabiliriz?
      </p>

      <section>
        <h2>Küçük Commitler, Büyük Fayda</h2>
        <p>
          5-6 gün boyunca kod yazıp hiç <ToolTip keyName="git-commit">commit</ToolTip> yapmamak yerine, küçük küçük adımlarla ilerlemek çok daha mantıklı. İşte ideal süreç:
        </p>
        <ul>
          <li>Küçük bir geliştirme yap</li>
          <li>Test et, çalıştığından emin ol</li>
          <li><ToolTip keyName="git-commit">Commit</ToolTip> yap</li>
          <li>Temiz bir <ToolTip keyName="git-commit">commit</ToolTip> durumu ile bir sonraki geliştirmene başla</li>
        </ul>
        <p>
          Bu yaklaşımın birçok avantajı var. Öncelikle her adımda neyi değiştirdiğini net olarak biliyorsun. Bir hata olduğunda hangi <ToolTip keyName="git-commit">commit</ToolTip>&apos;te başladığını kolayca bulabiliyorsun. Ayrıca kod inceleme süreçleri de çok daha kolay oluyor.
        </p>
      </section>

      <section>
        <h2>Commit Öncesi Kontrol Listesi</h2>
        <p><ToolTip keyName="git-commit">Commit</ToolTip> yapmadan önce şu adımları takip etmek çok faydalı:</p>
        <ol>
          <li><strong><ToolTip keyName="git-status">Git status</ToolTip>&apos;a bak</strong> - Hangi dosyalarda değişiklik yaptığını gör</li>
          <li><strong><ToolTip keyName="git-diff">Diff</ToolTip>&apos;leri incele</strong> - Her değişikliği gözden geçir</li>
          <li><strong>Gereksiz kod temizliği yap</strong> - Geliştirme sırasında eklediğin test kodları, debug satırları var mı kontrol et</li>
          <li><strong>Amacından sapmadığından emin ol</strong> - O <ToolTip keyName="git-commit">commit</ToolTip>&apos;te sadece planladığın değişiklikler olmalı</li>
        </ol>
      </section>

      <section>
        <h2>TODO Yorumları: Odakta Kalmanın Sırrı</h2>
        <p>
          Geliştirme yaparken çok sık başımıza gelir: bir şeyi düzeltirken başka bir sorun fark ederiz ve hemen onu da halletmek isteriz. Bu noktada kendimizi frenlememiz gerekiyor.
        </p>
        <p>
          Bir geliştirme yaptınız, <ToolTip keyName="git-commit">commit</ToolTip> etmeye hazırlanıyorsunuz ama bir anda başka bir geliştirme daha yapmak istediğinize karar verdiniz. İşte tam bu noktada TODO yorumları devreye giriyor. Eğer geliştirme yaparken başka bir sorun görürsen, hemen o anda düzeltmeye çalışma. Bunun yerine:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
          <code className="text-sm">
            {`// TODO: Bu kısım optimize edilmeli - performans sorunu var`}
          </code>
        </pre>
        <p>
          Şeklinde bir yorum ekle ve mevcut <ToolTip keyName="git-commit">commit</ToolTip>&apos;ini temizle. Sonra ayrı bir görev olarak o sorunu ele al. Bu sayede her <ToolTip keyName="git-commit">commit</ToolTip>&apos;in tek bir amacı olur ve kod geçmişin çok daha okunabilir hale gelir.
        </p>
      </section>

      <section>
        <h2>AI CLI Araçları ile Çalışırken</h2>
        <p>Modern geliştirme sürecinde AI <ToolTip keyName="cli-tools">CLI araçlarını</ToolTip> sıkça kullanıyoruz. Bu araçlarla çalışırken de benzer disiplinleri uygulayabiliriz:</p>
        <ul>
          <li>Her önemli geliştirme adımından sonra yeni bir AI conversation başlatmak, daha temiz ve odaklı sonuçlar verir</li>
          <li>AI&apos;ın önceki context&apos;ten etkilenmesini önler ve daha stabil performans sağlar</li>
          <li>Her yeni görev için fresh bir başlangıç yapmış olursun</li>
        </ul>
      </section>

      <section>
        <h2>Sonuç</h2>
        <p>
          Küçük <ToolTip keyName="git-commit">commitler</ToolTip> yapmak sadece teknik bir alışkanlık değil, aslında düşünce tarzını da değiştiriyor. Problemi küçük parçalara bölme, her adımı kontrol etme ve temiz kod yazma alışkanlığı kazanıyorsun.
        </p>
        <p>
          Unutma: her <ToolTip keyName="git-commit">commit</ToolTip> bir hikaye anlatmalı. Ve en iyi hikayeler kısa, öz ve anlaşılır olanlardır.
        </p>
      </section>
    </article>
  );
}