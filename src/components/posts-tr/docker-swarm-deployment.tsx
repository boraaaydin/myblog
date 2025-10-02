export default function DockerSwarmDeployment() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <header>
        <h1>Docker Swarm ile Uygulama Yükleme</h1>
      </header>
      <section>
        <h2>Docker'ı kulanmak için minimum gereksinimler</h2>
        <p>
          Uygulamanızın image'larının bir docker registry içinde tutulması gerekmektedir. Bunun için ücretsiz olarak github ya da gitlab ın registry servislerini kullanabilirsiniz.
          Git için github actions ya da gitlab pipeline'ları kullanabilirsiniz. Repo nuz içinde ilgili dosyaların yapılandırılması gerekmektedir.
        </p>
        <p>
          Reponuzda birden fazla uygulama varsa bunların herbirinin kendi kök dizininde Dockerfile dosyası oluşturunuz.
          Projenizin root klasöründe "Deployment" klasörü oluşturunuz. Ayrı bir repo'da da olabilir. Bu klasör içinde "docker-stack.yml" dosyası oluşturunuz.
        </p>
        <p>
          Docker Context ile uygulamayı yükleyeceğiniz makinaya ait bir docker context oluşturunuz. Docker yüklendiğinde varsayılan olarak default adında bir context oluşturulur.
          Context değiştirerek kendi sunucunuza ssh ile bağlanmadan docker komutlarını çalıştırabilirsiniz.
          Yükleme komutlarını docker yerine script ile çalıştırmamızın nedenlerinden biri de aslında doğru context de uygulamayı yüklediğimizden emin olmaktır.
        </p>
      </section>
      <section>
        <h2>Komutları script ile otomatikleştirmek</h2>
        <p>
          Kodunuzu docker komutları ile deploy edebilirsiniz. Ancak bu işlemleri bir script ile otomatikleştirip, hata yapma riskinizi de azaltabilirsiniz.
          Benim bu noktada ki tercihim Makefile'dır. Makefile ile bütün işletim sistemlerinde aynı komutlarla çalışabilirsiniz.
          Daha rahat hissediyorsanız Bash script/PowerShell/Python vb ile de bu işlemleri yapabilirsiniz.
          Bu dosyaları oluştururken yapay zeka araçlarını kullanacağımız için ileri seviyede bilgi sahibi olmamız gerekmiyor.
        </p>
      </section>
    </article>
  );
}
