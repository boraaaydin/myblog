import BlogLink from "@/components/BlogLink";

export default function AdviceForNewDevelopers() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <p>
        Çalışma saatini maksimize etmen senin faydana. Şu kadar saat çalış diyemem, ancak 10 bin saat kuralı burada da geçerli. O saati ne kadar hızlı doldurursan, kariyerinde o kadar hızlı ilerlersin.
      </p>
      <p>
        Her gün düzenli olarak çalış, gün aşırı değil. Asıl öğrenme uykuda gerçekleşir. Gün atlarsan, kıymetli olan o uyku saatini de boşa geçirmiş olursun.
      </p>
      <p>
        Pomodoro tekniğini mutlaka dene. Normalde kendini tüketene kadar çalışır, sonra ara verirsin. Pomodoro tekniğini kullanarak yorulmadan ara verdiğin için daha uzun süreler boyunca daha az yorularak çalışabilirsin.
      </p>
      <p>
        Yazılımı severek yapman gerekir. Uzun saatler bilgisayar başında geçirmekten ve problemleri çözmekten keyif alman şart. Eğer çabuk sıkılıyorsan, yazılım muhtemelen sana göre değildir.
        Belirli teknolojileri öğrenip kendini geliştirmeden de çalışman pekala mümkün, ancak çok parlak bir kariyerin olmayacaktır. Bu yüzden öncelikli olarak işini sevmen ve iş hayatının dışında kendini geliştirmeye vakit ayırman gerekir. Bunun bilincinde ilerle.
      </p>
      <p>
        Hangi programlama dilini öğrendiğinin çoğu zaman bir önemi yok. Her dilin belirli bir potansiyel pazarı var. Ancak yine de çok talep edilen dilleri seçmek mantıklı.
        <a href="https://survey.stackoverflow.co/">Stack Overflow gibi anketleri</a> inceleyerek hangi dillerin daha çok talep edildiğini görebilirsin.
      </p>
      <p>
        CLI araçlarını kullanmaya çalış. Terminal senin en yakın arkadaşın olacak.
      </p>
      <p>
        Hangi dili öğrenirsen öğren, Git aracını ilk günden temel özellikleriyle kullanmaya başla. <BlogLink href="/blog/beginner-git-usage">Git Aracının Temel Kullanımı</BlogLink> başlıklı blog yazımı okuyabilirsin.
      </p>
      <p>
        Okuduğun okul ve bölüm kariyerinin ilk yıllarında önemli, ancak birkaç işte çalıştıktan sonra önemini kaybediyor. Yazılım ya da bilgisayar mühendisliği okuman şart değil. Okusan da işe girmeni garanti etmiyor.
        Okumadıysan başta bir dezavantajın var, evet. Biraz özveriyle ilk iş tecrübelerini elde etmeye çalış.
      </p>
      <p>
        Yan proje yap. Seni heyecanlandıran bir konu bul. Çevrende bir ihtiyaç gör ve onunla ilgili bir projeye başla.
      </p>
      <p>
        Bir açık kaynak projesine katkıda bulunmaya çalış. <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer">Perplexity</a>'de "xyz konusuyla ilgili açık kaynak bir .NET projesi araştır" şeklinde arama yapabilirsin.
      </p>
      <p>
        Evet, İngilizce önemli. Trendi takip etmek ve yeni şeyler öğrenmek için ağırlıklı olarak YouTube'da İngilizce kaynaklar takip ediyorum. Okuduğunu ve dinlediğini anlayacak kadar İngilizce bilmek gerekiyor.
      </p>
      <section>
        <h2>Yapay Zekayı Kullanma</h2>
        <p>
          Teknolojinin kendisini öğrenmen gerektiği kadar, yapay zeka araçlarını kullanmayı öğrenmeye de zaman ayırman gerek. En azından hangi araçların daha çok kullanıldığını düzenli olarak takip etmelisin.
          Bir araç popüler olduysa bir nedeni vardır. İmkanın varsa kendin de deneyimlemelisin.
        </p>
        <p>
          Kendini geliştirme sürecinde yapay zekayı belirli limitler içinde kullanmalısın. Yazılımı öğrenmek için kendin düşünerek kod yazman gerekir. Yapay zeka seni tembelleştirebilir. Öğrenmek için otomatik tamamlamayı kapatıp kodunu kendin yazmalısın.
          Diğer taraftan, yapay zeka iş yapış şekillerini değiştirdi. Yapay zeka araçlarını kullanmadan geliştirme yapanlar uzun vadede geride kalacak. Bu nedenle süreçlerine yapay zekayı dahil etmelisin. Dolayısıyla öğrenme sürecinde bu ikisi arasında belirli bir denge gözetmen gerekir.
        </p>
        <p>
          Yapay zekayı tarayıcı üzerinden kullanıyorsan, çok da verimli kullanmıyorsun demektir. Claude Code, Codex CLI, Cursor, Windsurf, Cline, Roocode, Kilocode gibi araçları kullanarak çalışma ortamında yapay zekayı kullanmalısın.
          Böylece yerel markdown dosyalarını AI memory olarak kullanabilir, ihtiyaç durumunda MCP sunucularını kullanabilir, kullandığın araca göre ek özelliklerden yararlanabilirsin.
        </p>
        <p>
          AI ile birlikte hibrit şekilde nasıl çalışabilirsin? Öncelikle kodu kendin yazmaya çalış. Takıldığın yerde yazdığın kodları Git üzerinde stage'e al, sonra yapay zekaya kodu tamamlat.
          Ardından Git changes kısmında yapay zekanın yaptığı değişiklikleri, yani stage'e alınmamış değişiklikleri incele ve yapay zekanın yazdığı hangi kısmın kodu çalıştırdığını anlamaya çalış.
        </p>
        <p>
          Yapay zekaya sadece kod yazdırma. Kodu anlamak için de sorular sor: "Bu kodu neden ekledik?", "Bunu kullanmasaydık başka türlü nasıl yapardık?", "Bu kodu refactor edersek nasıl olurdu?" gibi. Yani yapay zekayı sadece sonuca gitmek için değil, öğrenmek için de kullan.
          Her kod yazdırdıktan sonra mutlaka bir soru sormayı alışkanlık haline getir. Soru bulamazsan bile saçma da olsa soru sor.
        </p>
      </section>
    </article>
  );
}
