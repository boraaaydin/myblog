import ToolTip from "@/components/ToolTip";
import Code from "@/components/Code";

export default function BeginnerGitUsage() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <p>
        <ToolTip keyName="git">Git</ToolTip>, yazılım kariyeriniz boyunca sürekli kullanacağınız en önemli araçlardan biridir.
        Birkaç saatlik temel eğitimle Git'i kullanmaya başlamak, yazılım öğrenme sürecinize büyük katkı sağlayacaktır.
        Ormana girmeden baltanızı keskin hale getirmek için biraz zaman ayırın.
      </p>

      <h2>Görsel Arayüz ile Başlayın</h2>
      <p>
        Çoğu <ToolTip keyName="ide">IDE</ToolTip>'de Git için görsel bir arayüz bulunmaktadır.
        Bu yazıda Visual Studio Code üzerinden, ayrıntıya çok girmeden temel konseptleri açıklayacağım.
      </p>

      <h2>İlk Günden İtibaren Git Kullanın</h2>
      <p>
        Ne proje yaparsanız yapın, projede Git'i ilk günden kullanmaya başlayın.
        Git local-first bir versiyon kontrol sistemidir; yani GitHub gibi bir uzak depoya bağlamadan da kullanabilirsiniz.
      </p>
      <p>
        Projenizin hangi aşamasında olursanız olun, Visual Studio Code'da Source Control panelinde
        "Initialize Repository" butonuna tıklayarak bir Git <ToolTip keyName="git-repository">repository</ToolTip> oluşturabilirsiniz.
        Artık projede yapacağınız değişiklikleri Git ile kaydedebilirsiniz.
      </p>

      <h2>Temel Git Komutları</h2>
      <p>
        Görsel arayüz üzerinden Git'i kullanabilsek de, bazı komutları sadece terminalden çalıştırabiliriz.
        Bu yüzden <ToolTip keyName="cli">CLI</ToolTip> komutlarını da öğrenmek gerekir.
        Aşağıdaki temel komutları bilmeniz yeterli olacaktır:
      </p>
      <ul>
        <li><Code>git status</Code>: Projenizin mevcut durumunu görüntüler</li>
        <li><Code>git add .</Code>: Bütün değişiklikleri <ToolTip keyName="git-staging-area">staging area</ToolTip>'ya alır</li>
        <li><Code>git add FILE_NAME</Code>: Belirli bir dosyanın değişikliklerini staging area'ya alır</li>
        <li><Code>git commit -m "mesaj"</Code>: Değişiklikleri mesajla birlikte kaydeder</li>
        <li><Code>git revert COMMIT_HASH</Code>: Belirli bir commit'i geri alır</li>
      </ul>

      <h2>Branch Kullanımı</h2>
      <p>
        Özellikle projede tek başınıza çalışıyorsanız, başlangıç aşamasında <ToolTip keyName="git-branch">branch</ToolTip> kullanmanıza gerek yoktur.
        İlerleyen dönemlerde takım çalışmalarında branch'lerin önemini göreceksiniz.
      </p>

      <h2>Commit Alışkanlıkları</h2>
      <p>
        Yaptığınız küçük geliştirmelerden sonra <ToolTip keyName="git-commit">commit</ToolTip> yapmayı alışkanlık haline getirin.
        İşte commit yaparken dikkat etmeniz gerekenler:
      </p>
      <ul>
        <li><strong>Küçük commit'ler yapın:</strong> Her commit tek bir mantıksal değişikliği içermeli</li>
        <li><strong>Açıklayıcı mesajlar yazın:</strong> Neyi değiştirdiğinizi net olarak belirtin</li>
        <li><strong>Kod incelemesi yapın:</strong> Her commit öncesi changes kısmından kodlarınızı gözden geçirin</li>
        <li><strong>Test edin:</strong> Commit yapmadan önce kodunuzun çalıştığından emin olun</li>
      </ul>

      <p>
        Küçük commit'lerin avantajları:
      </p>
      <ul>
        <li>Kod değişikliklerini gözden geçirmek daha kolay olur</li>
        <li>Hata yaptığınızda sadece son commit'i geri alarak çalışan duruma dönebilirsiniz</li>
        <li>Commit geçmişi daha anlaşılır olur</li>
      </ul>

      <h2>Geliştirme Sırasında Dikkat Edilmesi Gerekenler</h2>
      <p>
        Bir özellik geliştirirken başka bir sorun görürseniz, hemen o anda düzeltmeye çalışmayın.
        Bunun yerine <Code>//TODO</Code> yorumu ekleyerek not alın ve sonra düzeltmeye çalışın.
        Bu yaklaşım, odaklanmanızı korur ve commit'lerinizi mantıksal olarak ayrı tutar.
      </p>

      <h2>Yapay Zeka ile Çalışırken Git Kullanımı</h2>
      <p>
        Yapay zeka destekli kod geliştirirken, değişiklikleri kontrollü bir şekilde yönetmek önemlidir.
        Şu akışı takip edin:
      </p>
      <ol>
        <li>Mevcut kodunuzu staging area'ya alın ama commit yapmayın</li>
        <li>Yapay zekaya kodunuzu düzelttirin ve çalışır hale getirin</li>
        <li>Changes panelinde staging area'ya alınmamış değişiklikleri gözden geçirin</li>
        <li>Yapay zekanın yaptığı değişiklikleri dikkatlice inceleyin</li>
        <li>
          Değişiklikler uygunsa, yeni geliştirmeleri staging area'ya alarak commit yapın.
          Uygun değilse, sadece yapay zekanın yaptığı değişiklikleri "Discard Changes" ile geri alabilirsiniz -
          kendi yazdığınız kod staging area'da güvende kalır
        </li>
      </ol>

      <p>
        Bu yaklaşım sayesinde yapay zekanın önerilerini güvenli bir şekilde deneyebilir,
        beğenmediğiniz değişiklikleri kolayca geri alabilirsiniz.
      </p>
    </article>
  );
}
