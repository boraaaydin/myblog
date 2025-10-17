import BlogLink from "@/components/BlogLink";

export default function AdviceForNewDevelopers() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <header>
        <h1>Yazılıma Yeni Başlayanlar İçin Tavsiyeler</h1>
      </header>
      <p>
        Çalışma saatini maksimize etmen senin faydana olur, şu kadar saat çalış diyemem ama 10bin saat kuralı burda da işler. O saati ne kadar hızlı doldurursan kariyerinde o kadar hızlı ilerlersin.
      </p>
      <p>
        Gün aşırı çalışma, her gün düzenli olarak çalış. Asıl öğrenme uykuda olur. Gün atlarsan kıymetli olan o uyku saatini de boşa geçirmiş olursun.
      </p>
      <p>
        Pomodoro tekniğini bir dene. Normalde kendini tüketene kadar çalışır sonra ara verirsin. Pomodoro tekniğini kullanarak yorulmadan ara verdiğin için daha uzun süreler fazla yorulmadan çalışabilirsin.
      </p>
      <p>
        Yazılımı severek yapman gerekir, uzun saatler bilgisayar başında geçirmekten ve problemleri çözmekten keyif alman gerekir. Eğer çabuk sıkılıyorsan yazılım sana göre değildir muhtemelen.
        Belirli teknolojileri öğrenip kendini geliştirmeden çalışman pekala mümkün ama çok parlak bir kariyerin olmayacaktır. O yüzden öncelikli olarak işini sevmen ve iş hayatın dışında kendini geliştirmeye vakit ayırman gerekir. Bunun bilincinde ilerle.
      </p>
      <p>
        Hangi dili öğrendiğinizin çoğu zaman bir önemi yoktur. Her dilin belirli bir potansiyel pazarı vardır. Ancak yine de çok talep edilen dilleri seçmek mantıklıdır.
        <a href="https://survey.stackoverflow.co/">Stackoverflow gibi surveyleri</a> inceleyerek hangi dillerin daha çok talep edildiğini görebilirsin.
      </p>
      <p>
        CLI araçlarını kullanmaya çalış. Terminal senin en yakın arkadaşın.
      </p>
      <p>
        Hangi dili öğrenirsen öğren, git aracını ilk günden temel özellikleriyle kullanmaya başla. <BlogLink href="/blog/beginner-git-usage">Git aracının temel kullanımını</BlogLink> başlıklı blog yazımı okuyabilirsin.
      </p>
      <p>
        Okuduğun okul ve bölüm, kariyerinin ilk yıllarında önemlidir, birkaç işte çalıştıktan sonra önemini kaybeder. Yazılım ya da bilgisayar mühendisliği okumanız şart değildir. Okusanız da işe girmenizi garanti etmez.
        Okumadıysanız başta bir dezavantajınız vardır evet. Biraz özveriyle ilk iş tecrübelerinizi elde etmeye çalışın.
      </p>
      <p>
        Yan proje yapın. Sizi heyecanlandıran bir konu bulun. Çevrenizde bir ihtiyaç görün ve onunla ilgili bir projeye başlayın. 
      </p>
      <p>
        Bir açık kaynak projesine katkıda bulunmaya çalışın. <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer">Perplexity</a> de xyz konusuyla ilgili açık kaynak bir dotnet projesi araştır şeklinde arama yapabilirsiniz.
      </p>
      <p>
        Evet ingilizce önemli. Trendi takip etmek ve yeni şeyler öğrenmek için ağırlıklı olarak Youtube' da ingilizce kaynaklar takip ediyorum. Okuduğunu ve dinlediğini anlayacak kadar ingilizce bilmek gerekiyor.
      </p>
      <section>
        <h2>Yapay Zekayı Kullanma</h2>
        <p>
          Teknolojinin kendisini öğrenmen gerektiği kadar yapay zeka araçlarını kullanmayı öğrenmeye zaman ayırman lazım. En azından hangi araçların daha çok kullanıldığını düzenli olarak takip etmelisin.
          Bir araç hype olduysa bir nedeni vardır. İmkanın var ise kendin de tecrübe etmelisin.
        </p>
        <p>
          Kendini geliştirme sürecinde yapay zekayı belirli limitler içinde kullanmalısın. Yazılımı öğrenmek için kendin düşünerek kodu yazman gerekir. Yapay zeka seni tembelleştirir. Öğrenmek için otomatik tamamlamayı kapatıp kodunu kendin yazmalısın.
          Diğer taraftanda yapay zeka iş yapış şekillerini değiştirdi. Yapay zeka araçlarını kullanmadan geliştirme yapanlar uzun vadede geride kalacaklar. Bu nedenle süreçlerine yapay zekayı dahil etmelisin. Dolayısıyla öğrenme sürecinde bu ikisi arasında belli bir denge gözetmen lazım.
        </p>
        <p>
          Yapay zekayı browser üzerinden kullanıyorsan çok da verimli kullanmıyorsun demektir. Claude code, codex cli, cursor, windsurf, cline, roocode, kilocode gibi araçları kullanarak çalışma ortamında yapay zekayı kullanmalısın.
          Böylece local markdown dosyalarını ai memory olarak kullanabilir, ihtiyaç durumunda mcp sunucuları kullanabilir, kullandığın araca göre ilave özellikler kullanabilirsin.
        </p>
        <p>
          AI ile birlikte hybrit şekilde nasıl çalışabilirsin? Öncelikle kodu kendin yazmaya çalış, takıldığın yerde yazdığın kodları git üzerinde stage' a al. Sonra yapay zekaya kodu tamamlat.
          Ardından git changes kısmında yapay zekanın yaptığı değişiklikleri, yani stage' a alınmamış değişiklikleri incele ve yapay zekanın yazdığı hangi kısmın kodu çalıştırdığını anlamaya çalış.
        </p>
        <p>
          Yapay zekaya sadece kodu yazdırma. Kodu anlamak için de sorular sor. Şu kodu neden ekledik, bunu kullanmasaydık başka türlü nasıl yapardık, bu kodu refactor edersek nasıl olurdu vs. Yani yapay zekayı sadece sonuca gitmek için değil, öğrenmek için de kullan.
          Her kod yazdırdıktan sonra mutlaka bir soru sormayı alışkanlık haline getir. Soru bulamazsanda saçma da olsa soru sor.
        </p>
        <p>

        </p>
      </section>
    </article>
  );
}
