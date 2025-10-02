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
          Kubernetes'in öğrenme eğrisi oldukça yüksektir. O yüzden başlangıç aşamasında Docker Swarm kullanılmasını tavsiye ediyorum.
        </p>
      </section>
      
    </article>
  );
}
