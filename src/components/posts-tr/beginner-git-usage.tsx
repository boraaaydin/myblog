export default function BeginnerGitUsage() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <p>
        Git versiyon kontrol sistemi yazılım kariyeriniz boyunca sürekli kullanacağınız bir araçtır. Birkaç saatlik temel bir eğitim ile git'i kullanmaya başlarsanız yazılım öğrenme sürecinize de katkı sağlar. 
        Ormana girmeden baltanızı keskin hale getirmek için biraz zaman ayırın.
      </p>
      <p>
        Çoğu IDE' de git için görsel bir arayüz bulunmaktadır. Başlangıç için bu arayüzü kullanabilirsiniz.
        Visual Studio Code üzerinden ayrıntıya çok girmeden temel konseptlerden bahsedeceğim.
      </p>
      <p>
        Ne proje yaparsanız yapın projede git'i ilk günden kullanın. Git local first bir versiyon aracıdır. Github gibi bir depoya bağlamadan kullanabilirsiniz.
      </p>
      <p>
        Projenizin hangi anında olursanız olup, Visual Studio Code' da Source Control panelinde "Initialize Repository" butonu ile bir git repository oluşturabilirsiniz. 
        Artık projede yapacağınız değişiklikleri git ile kaydedebilirsiniz.
      </p>
      <p>
        Her ne kadar görsel arayüz üzerinden git'i kullanabilirsek de, bazı komutları sadece terminalden çalıştırabildiğimiz için cli komutlarını da bilmek gerekiyor. 
        Bunlardan add ve commit komutlarını arayüzden de yapabiliyoruz.
        <ul>
          <li>git status: Projenizin durumunu görüntüler.</li>
          <li>git add . : Bütün değişiklikleri stage' e alır.</li>
          <li>git add FILE_NAME: Belirli bir dosyanın değişikliklerini stage' e alır.</li>
          <li>git commit: Değişiklikleri kaydeder.</li>
          <li>git revert COMMIT_HASH_ID: Değişiklikleri geri alır.</li>
        </ul>
      </p>
      <p>
        Özellikle projede tek başınıza çalışıyorsanız başlangıç aşamasında branch' leri kullanmanıza çok gerek yoktur.
      </p>
      <p>
        Yaptığınız ufak geliştirmelerden sonra commit yapmayı alışkanlık haline getir. Commit mesajınızı yazarken neyi değiştirdiğinizi net olarak belirtin. Commitlerinizi küçük tutun. 
        Geliştirme yaparken kodda çok fazla değişiklik yapmanız gerekecektir. Eğer git changes de az değişiklik varsa kodunuzu gözden geçirmeniz kolay olacaktır. 
        Ayrıca yaptığınız değişiklikleri iptal etmeniz gerekirse tek komutla iptal edip çalışan son duruma dönmeniz de kolay olacaktır.
      </p>
      <p>
        Her committen önce changes kısmından kodlarını gözden geçirin. 
      </p>
      <p>
        Yaptığınız geliştirmelerinizi test edin. Çalıştığından emin olduktan sonra commit yapın.
      </p>
      <p>
        Bir feature geliştirirken başka bir sorun görürseniz, hemen o anda düzeltmeye çalışmayın. Bunun yerine //TODO yorumu ekleyerek daha sonra düzeltmeye çalışın.
      </p>
      <p>
        Özellikle yapay zekayı kullanırken belirli bir noktaya kadar gelmişseniz ve sonrasında yapay zekaya kodu düzelttirecekseniz, şöyle bir akış takip edin. 
        <ul>
          <li>kodunuzu stage' a alın ama commit yapmayın. </li>
          <li>Yapay zekaya kodunuzu düzelttirin. Kod çalışır hale gelsin.</li>
          <li> Changes panelinde stage' e alınmamış değişiklikleri gözden geçirin. Yapay zekanın yaptığı değişiklikleri inceleyin. </li>
          <li>Uygun olduğunu düşünüyosanız yeni geliştirmeleri stage' e alarak commit yapabilirsiniz. Yoksa kendi yazdığınız kodu geri almadan sadece yapay zekanın yaptığı değişiklikleri Discard Changes ile geri alabilirsiniz.</li>
        </ul>
      </p>
    </article>
  );
}
