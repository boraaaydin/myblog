import AIPrompts from "../AIPrompts";

export default function DockerSwarmDeployment() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <header>
        <h1>Docker Swarm ile Uygulama Yükleme</h1>
      </header>
      <section>
        <h2>Docker' ı kulanmak için minimum gereksinimler</h2>
        <p>
          Uygulamanızın image' larının bir docker registry içinde tutulması gerekmektedir. Bunun için ücretsiz olarak github ya da gitlab ın registry servislerini kullanabilirsiniz.
          <AIPrompts>
            <ul>
              <li>Ask the user which git provider they are using and create deployment files accordingly.</li>
            </ul>
          </AIPrompts>
          Git için github actions ya da gitlab pipeline' ları kullanabilirsiniz. Repo nuz içinde ilgili dosyaların yapılandırılması gerekmektedir.
          <AIPrompts>
            <ul>
              <li>Create build workflows for the relevant git provider for the project.</li>
              <li>Build and docker image creation processes will be performed.</li>
              <li>Use the git provider's own registry service for docker registry.</li>
            </ul>
          </AIPrompts>
        </p>
        <p>
          Reponuzda birden fazla uygulama varsa bunların herbirinin kendi kök dizininde Dockerfile dosyası oluşturunuz.
          <AIPrompts>
            <ul>
              <li>Examine the project structure and find out how many applications there are.</li>
              <li>Create Dockerfile files in the root directory of each application if not exists.</li>
            </ul>
          </AIPrompts>
          Projenizin root klasöründe "Deployment" klasörü oluşturunuz. Ayrı bir repo' da da olabilir. Bu klasör içinde "docker-stack.yml" dosyası oluşturunuz.
          <AIPrompts>
            <ul>
              <li>Create "deployment" folder and "docker-stack.yml" file in the root of the project if not exists.</li>
            </ul>
          </AIPrompts>

        </p>
        <p>
          Docker Context ile uygulamayı yükleyeceğiniz makinaya ait bir docker context oluşturunuz. Docker yüklendiğinde varsayılan olarak default adında bir context oluşturulur.
          <AIPrompts>
            <ul>
              <li>Create a docker context for the machine where you will deploy your application.</li>
              <li>Ask user to provide the machine details and how to connect to the machine.</li>
            </ul>
          </AIPrompts>
          Context değiştirerek kendi sunucunuza ssh ile bağlanmadan docker komutlarını çalıştırabilirsiniz.
          Yükleme komutlarını docker yerine script ile çalıştırmamızın nedenlerinden biri de aslında doğru context de uygulamayı yüklediğimizden emin olmaktır.
        </p>
      </section>
      <section>
        <h2>Komutları script ile otomatikleştirmek</h2>
        <p>
          Kodunuzu docker komutları ile deploy edebilirsiniz. Ancak bu işlemleri bir script ile otomatikleştirip, hata yapma riskinizi de azaltabilirsiniz. 
          Benim bu noktada ki tercihim Makefile' dır. Makefile ile bütün işletim sistemlerinde aynı komutlarla çalışabilirsiniz.
          <AIPrompts>
            <ul>
              <li>Create a makefile in the root of the project.</li>
              <li>Add the following commands to the makefile:</li>
              <li>use-context: Use the docker context to connect to the machine. Add this command to every command that uses docker.</li>
              <li>deploy: Deploy the docker image to the docker swarm. </li>
            </ul>
          </AIPrompts>
          Daha rahat hissediyorsanız Bash script/PowerShell/Python vb ile de bu işlemleri yapabilirsiniz. 
          Bu dosyaları oluştururken yapay zeka araçlarını kullanacağımız için ileri seviyede bilgi sahibi olmamız gerekmiyor.
        </p>
      </section>
    </article>
  );
}
