import BlogLink from "@/components/BlogLink";

export default function AdviceForNewDevelopers() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <section>
        <h2>Çalışma Alışkanlıkları</h2>

        <h3>10 Bin Saat Kuralı</h3>
        <p>
          Çalışma saatini maksimize etmen senin faydana. 10 bin saat kuralı yazılımda da geçerli. O saati ne kadar hızlı doldurursan, kariyerinde o kadar hızlı ilerlersin.
        </p>

        <h3>Düzenli Çalışma</h3>
        <p>
          Her gün düzenli çalış. Asıl öğrenme uykuda gerçekleşir, bu yüzden gün atlama.
        </p>

        <h3>Pomodoro Tekniği</h3>
        <p>
          Kendini tüketene kadar çalışmak yerine Pomodoro tekniğini kullan. Yorulmadan ara verdiğin için daha uzun süreler boyunca daha az yorularak çalışabilirsin.
        </p>
      </section>

      <section>
        <h2>Temel Beceriler</h2>

        <h3>Tutkunu Bul</h3>
        <p>
          Yazılımı severek yapman gerekir. Uzun saatler bilgisayar başında geçirmekten ve problem çözmekten keyif almalısın. Çabuk sıkılıyorsan, yazılım sana göre değildir.
        </p>
        <p>
          İşini sevmeden ve kendini geliştirmeye vakit ayırmadan da çalışman mümkün. Ancak parlak bir kariyerin olmayacaktır.
        </p>

        <h3>Programlama Dili Seçimi</h3>
        <p>
          Hangi dili öğrendiğinin çoğu zaman önemi yok. Yine de talep edilen dilleri seç. <a href="https://survey.stackoverflow.co/" target="_blank" rel="noopener noreferrer">Stack Overflow anketleri</a> iyi bir rehber olabilir.
        </p>

        <h3>Terminal ve Git</h3>
        <p>
          CLI araçlarını kullan. Terminal en yakın arkadaşın olacak.
        </p>
        <p>
          Git'i ilk günden öğren. <BlogLink href="/blog/beginner-git-usage">Git Aracının Temel Kullanımı</BlogLink> yazımı okuyabilirsin.
        </p>

        <h3>İngilizce</h3>
        <p>
          Trend takibi ve öğrenme için İngilizce şart. Okuduğunu ve dinlediğini anlayacak seviyede olmalısın.
        </p>
      </section>

      <section>
        <h2>Pratik Deneyim</h2>

        <h3>Okul ve Bölüm</h3>
        <p>
          İlk yıllarda önemli, sonra önemini kaybediyor. Yazılım mühendisliği okuman şart değil. Özveriyle ilk iş tecrübelerini elde etmeye çalış.
        </p>

        <h3>Yan Projeler</h3>
        <p>
          Seni heyecanlandıran bir konu bul. Çevrende bir ihtiyaç gör ve projeye başla.
        </p>

        <h3>Açık Kaynak</h3>
        <p>
          Bir projeye katkıda bulun. <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer">Perplexity</a>'de "xyz konusuyla ilgili açık kaynak bir .NET projesi araştır" diye arayabilirsin.
        </p>
      </section>

      <section>
        <h2>Sistem Tasarımı ve Teknoloji Bilgisi</h2>
        <p>
          Karşına çıkacak teknolojileri araştır: Redis, RabbitMQ, MongoDB vs. Bunların ne işe yaradığını, hangi problemi çözdüklerini, alternatifleri ne olurdu anla. Yapay zekaya sor, "100 saniyede RabbitMQ" gibi kısa videolar izle.
        </p>
        <p>
          Bin kişiyle bir milyon kişiye yazdığın uygulama, tasarım olarak farklıdır. Bu teknolojileri bilmen ileride avantaj sağlar. Çok vakit ayır demiyorum, az da olsa ayır.
        </p>
        <p>
          <a href="https://www.youtube.com/@ByteByteGo/shorts" target="_blank" rel="noopener noreferrer">ByteByteGo</a> kanalının videoları faydalı. Sistem tasarımını ufaktan öğren. <a href="https://roadmap.sh" target="_blank" rel="noopener noreferrer">roadmap.sh</a>'deki roadmap'leri incele.
        </p>
      </section>

      <section>
        <h2>Yapay Zeka Kullanımı</h2>

        <h3>Araçları Takip Et</h3>
        <p>
          Hangi AI araçlarının popüler olduğunu takip et. Popülerse bir nedeni vardır, imkanın varsa dene.
        </p>

        <h3>Öğrenme Sırasında Dikkat</h3>
        <p>
          Yazılım öğrenirken kendin düşünerek kod yaz. AI tembelleştirebilir. Otomatik tamamlamayı kapat.
        </p>
        <p>
          Ancak AI iş yapış şekillerini değiştirdi. AI kullanmayanlar geride kalacak. Öğrenme sürecinde denge gözetmen gerekir.
        </p>

        <h3>Verimli Kullanım</h3>
        <p>
          AI'yi tarayıcıdan kullanıyorsan verimli değil. Claude Code, Cursor, Windsurf, Cline gibi araçları çalışma ortamında kullan. Böylece AI memory, MCP sunucuları gibi özelliklerden yararlanabilirsin.
        </p>

        <h3>Hibrit Çalışma</h3>
        <p>
          Önce kendin yaz. Takıldığında kodları Git'te stage'e al, sonra AI'ya tamamlat. Git changes'ta AI'nın değişikliklerini incele, hangi kısmın çalıştığını anla.
          <BlogLink href="/blog/beginner-git-usage">Git ile ilgil bu blog yazımı</BlogLink> okuyabilirsin.
        </p>

        <h3>Öğrenmek İçin Kullan</h3>
        <p>
          Sadece kod yazdırma. Sorular sor: "Bu kodu neden ekledik?", "Alternatifi neydi?", "Refactor edersek ne olurdu?". Her kod yazdırdıktan sonra soru sor. Soru bulamazsan bile sor.
        </p>
      </section>
    </article>
  );
}
