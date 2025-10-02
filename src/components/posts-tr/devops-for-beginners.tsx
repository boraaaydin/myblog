import AIPrompts from "../AIPrompts";

export default function DevOpsForBeginners() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <header>
        <h1>Yeni Başlayanlar İçin DevOps Stratejileri</h1>
      </header>

      <p>
        Bu yazıda devops süreçlerini başlangıç aşamasında nasıl ele alınabileceğini anlatacağım.
        Uygulamanızı burada bahsedeceğim yöntemleri kullanmadan da daha basit uygulamalar ile yayınlamanız mümkün. Kendi açımdan değerlendirirsem yaptığım işlemlere tam hakim olarak çalışmayı tercih ediyorum.
        Deploy araçları da arka tarafta zaten benzer yapılarla çalışıyor. Burada bahesedeceğim yöntemi kullanarak devops temel bilgilerinizi de geliştirmiş olacaksınız.
      </p>
      <p>
        Hangi bulut sağlayıcısı ile çalışırsanız çalışın, hangi servisini kullandığınızdan bağımsız bütün uygulamalar büyük oranda linux sanal makinelerde çalışır. Sanal makinaya bağlanmak için ssh kullanılır.
        ssh ile bağlandıktan sonra temel linux komutlarını kullanmanız gerekmektedir. Docker kurulumu gibi temel işlemler için makinaya ssh yapmak gerekmektedir.
      </p>
      <section>
        <h2>Temel Linux Komutları</h2>
        <ul>
          <li>cd: Klasör değiştirme</li>
          <li>ls: Klasör içeriğini listeleme</li>
          <li>mkdir: Klasör oluşturma</li>
          <li>rm: Dosya veya klasör silme</li>
          <li>cp: Dosya veya klasör kopyalama</li>
          <li>mv: Dosya veya klasör taşıma</li>
          <li>chmod: İzinleri Değiştirme</li>
          <li>vim/nano: Terminalde metin editörleri</li>
        </ul>
      </section>
      <section>
        <h2>Docker</h2>
        <p>
          Uygulamalarınızı yayınlamak için birçok seçenek var. Her seçeneğin avantajı ve dezavantajı var. Bu yazıda devops süreçlerini başlangıç aşamasında nasıl ele alınabileceğini anlatacağım.
          container yapılarını kullanacağız. Defacto standart olarak docker kullanıyoruz.
        </p>
        <p>
          Docker ı birden farklı şekilde kullanabiliriz. Basitçe hangisini seçebileceğiniz konusunda çok temel bir tablo oluşturdum.
        </p>
        <table>
          <thead>
            <tr>
              <th>Uygulama</th>
              <th>Code As A Infrastructure</th>
              <th>Rolling Update</th>
            </tr>
            <tr>
              <td>Docker Standalone</td>
              <td>Uygun değil</td>
              <td>Yok</td>
            </tr>
            <tr>
              <td>Docker Compose</td>
              <td>Uygun</td>
              <td>Yok</td>
            </tr>
            <tr>
              <td>Docker Swarm</td>
              <td>Uygun</td>
              <td>Var</td>
            </tr>
            <tr>
              <td>Kubernetes</td>
              <td>Uygun</td>
              <td>Var</td>
            </tr>
          </thead>
        </table>
      </section>
      <section>
        <h2>Code as a Infrastructure</h2>
        <p>
          Deployment dosyalarımızın uygulamızla birlikte yaşaması, git ile versiyon control içinde tutulması gibi avantajlar sağlar.
          Yapay zeka araçlarının deployment dosyalarını görebilmesi açısından önemlidir. 
        </p>
      </section>
      <section>
        <h2>Rolling Update</h2>
        <p>
          Uygulamamızın deployment süresi sırasında kesintiye uğramadan yeni versiyonun ayağa kalktığı anlamına gelmektedir.
        </p>
      </section>
      <section>
        <h2>En optimum yapı: Docker Swarm</h2>
        <p>
          Kubernetes' in öğrenme eğrisi oldukça yüksektir. O yüzden başlangıç aşamasında Docker Swarm kullanılmasını tavsiye ediyorum.
        </p>
      </section>
      <section>
        <h2>Docker' ı kulanmak için minimum gereksinimler</h2>
        <p>
          Uygulamanızın image' larının bir docker registry içinde tutulması gerekmektedir. Bunun için ücretsiz olarak github ya da gitlab ın registry servislerini kullanabilirsiniz.
          <AIPrompts>Hangi git sağlayıcı kullandığını kullanıcıya sor, ona uygun olarak deployment dosyalarını oluştur.</AIPrompts>
          Git için github actions ya da gitlab pipeline' ları kullanabilirsiniz. Repo nuz içinde ilgili dosyaların yapılandırılması gerekmektedir. 
          <AIPrompts>proje için ilgili git sağlayıcının build akışlarını oluştur. Build ve docker image oluşturma işlemleri yapılacak. Docker registry için ilgili git sağlayıcının kendi registry servisi kullanılacak. </AIPrompts>
        </p>
        <p>
          Reponuzda birden fazla uygulama varsa bunların herbirinin kendi kök dizininde Dockerfile dosyası oluşturunuz. 
          <AIPrompts>Projeyi yapısını incele, kaç uygulama olduğunu öğren, uygulamalarının kök dizininde Dockerfile dosyalarını oluştur.</AIPrompts>
          Projenizin root klasöründe "Deployment" klasörü oluşturunuz. Ayrı bir repo' da da olabilir. Bu klasör içinde "docker-stack.yml" dosyası oluşturunuz.
          <AIPrompts>Create "deployment" folder and "docker-stack.yml" file in the root of the project.</AIPrompts>

        </p>
        <p>
          Docker Context ile uygulamayı yükleyeceğiniz makinaya ait bir docker context oluşturunuz. Docker yüklendiğinde varsayılan olarak default adında bir context oluşturulur. 
          <AIPrompts>Create a docker context for the machine where you will deploy your application. Ask User to provide the machine details and how to connect to the machine.</AIPrompts>
          Context değiştirerek kendi sunucunuza ssh ile bağlanmadan docker komutlarını çalıştırabilirsiniz. 
          Yükleme komutlarını docker yerine script ile çalıştırmamızın nedenlerinden biri de aslında doğru context de uygulamayı yüklediğimizden emin olmaktır.
        </p>
      </section>
      <section>
        <h2>Komutları script ile otomatikleştirmek</h2>
        <p>
          Kodunuzu docker komutları ile deploy edebilirsiniz. Ancak bu işlemleri bir script ile otomatikleştirip, hata yapma riskinizi de azaltabilirsiniz. 
          Benim bu noktada ki tercihim Makefile' dır. Makefile ile bütün işletim sistemlerinde aynı komutlarla çalışabilirsiniz.
          Daha rahat hissediyorsanız Bash script/PowerShell/Python vb ile de bu işlemleri yapabilirsiniz. 
          Bu dosyaları oluştururken yapay zeka araçlarını kullanacağımız için ileri seviyede bilgi sahibi olmamız gerekmiyor.
        </p>
      </section>
    </article>
  );
}
