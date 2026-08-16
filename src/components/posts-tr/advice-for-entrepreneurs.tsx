import ToolTip from "@/components/ToolTip";

export default function AdviceForEntrepreneurs() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <p>
        Girişimcilikle ilgilenen bir gencin sorularına verdiğim cevapları maddeler halinde topladım. Kendi deneyimlerimden çıkan, kısa ve doğrudan tavsiyeler.
      </p>

      <section>
        <h2>Girişimcilik Bir Maraton</h2>
        <ul>
          <li>Girişimciliği kısa vadede görme. Çok hırslı olup &quot;bunu sonuna kadar deneyeceğim&quot; deme.</li>
          <li>En başarılı girişimcilerin ortalama yaşı 45. Yani girişimcilik 100 metre koşusu değil, bir maraton.</li>
          <li>Param bitince çalışma hayatına döndüm. Hayatımın çoğunda bir yerde çalıştım. Girişimciliği asıl işinin yanında yapman lazım.</li>
          <li>Çok gençsen çevren az, yazılım ve devops bilgin kısıtlıdır. Bir çok alanda pişmen lazım.</li>
        </ul>
      </section>

      <section>
        <h2>Sistematik Ol</h2>
        <ul>
          <li>Fikirlerin kötü olsa da hepsini tarihleriyle not et.</li>
          <li>Her fikrin kabaca <ToolTip keyName="swot-analysis">SWOT analizini</ToolTip> yap, akışı yaz.</li>
          <li>Zaman geçtikten sonra o notlara dön ve ilaveler yap.</li>
          <li>İzlediğin bir videoda o sorunla karşılaşan birini gördüğünde dakikasıyla birlikte not et.</li>
          <li>Faydalı olabileceğini düşündüğün siteleri Raindrop gibi uygulamalarla etiketleyerek bookmark&apos;la.</li>
        </ul>
      </section>

      <section>
        <h2>Girişimci Yazılımcı Ol</h2>
        <ul>
          <li>Yapay zekanın bu kadar gelişmiş olduğu bir dönemde yapılabilecek en iyi şey girişimci yazılımcı olmaktır.</li>
          <li>Yapay zekayı kimin nasıl kullandığını anlamak için zaman harca, videolar izle.</li>
          <li>Ormana girmeden önce baltayı sivriltmek her zaman daha iyi bir stratejidir.</li>
          <li>
            <ToolTip keyName="git-worktree">Git worktree</ToolTip> gibi yaklaşımlarla insanların paralel işleri nasıl yaptığını incele.
          </li>
          <li>Onların her yaptığını alma. Kendine göre bir akış oluştur, daha kısa zamanda daha çok iş çıkarmak için kendi <ToolTip keyName="prompt">promptlarını</ToolTip> hazırla.</li>
        </ul>
      </section>

      <section>
        <h2>İyi Bir Gözlemci Ol</h2>
        <ul>
          <li>
            <ToolTip keyName="domain-knowledge">Domain</ToolTip> konusunda bilgi sahibi olmak önemli.
          </li>
          <li>Her sorunu birinci elden yaşayıp ya da yaşayanları görüp, hem de fikri hayata geçiren olmak çok değerli. O zaman girişimin başarı şansı artar.</li>
          <li>Denk geldiğinde farklı alanlarla ilgili kişilerle onların işleri hakkında konuş, yaşadıklarını anlamaya çalış.</li>
        </ul>
      </section>

      <section>
        <h2>Önce Ürün, Sonra Para</h2>
        <ul>
          <li>Kısa vadede hedefin para kazanmak ise üzülebilirsin.</li>
          <li>Öncelikli hedefin insanların kullandığı bir ürün oluşturmak olmalı.</li>
          <li>Başta ücretsiz de verebilirsin. Sadece sunucu ve domain ücretini alırsın mesela.</li>
          <li>Uygulama kullanıldıkça ekstra ihtiyaçlar olacaktır. Onlardan ufak da olsa ücret almaya çalış.</li>
          <li>Amacın sana ufak da olsa ödeme yapmalarını sağlamak. Ama bu para seni geçindirmeyecek.</li>
        </ul>
      </section>

      <section>
        <h2>Doğru Fikri Bulmak</h2>
        <ul>
          <li>Parası olan ve teknolojiyi kullanan insanların ihtiyaçlarını araştır. Sadece yakın çevrene bakma, dünyanın herhangi bir yerindeki bir insanı düşün.</li>
          <li>Kafanda <ToolTip keyName="persona">personalar</ToolTip> oluştur ve o insanın ne ihtiyacı olabileceğini bulmaya çalış. Çevrende varsa gerçek bir insanı da düşünebilirsin ama birkaç persona olsun.</li>
          <li>Çok az insanın ihtiyacı olan bir şey yapabilirsin. Örneğin lüks motosiklet markalarının aksesuarlarının listelendiği bir site olabilir.</li>
          <li>Fikrin küçük versiyonunu kendi ülkende düşün: lüks motor mağazalarına git, mağaza sahibiyle konuş.</li>
          <li>Kendi hobin varsa onun çevresinde bir uygulama olabilir.</li>
          <li>Reddit gibi forumları ihtiyaçları anlayabilmek için kullanabilirsin.</li>
          <li>Çok araştır, fikirler türet ve not al. Birkaç fikir bulduktan sonra karşılaştır, en az eforla para kazandıran fikri bul ve başla.</li>
          <li>Fikrin değeri 1 ile -1 TL arasında değişir. İlerledikçe bunun yanına sıfırlar eklersin. Kötü fikir eksiye doğru gideceği için doğru fikri bulmaya çok zaman harca.</li>
        </ul>
      </section>

      <section>
        <h2>Doğru Soruları Sor</h2>
        <p>
          <a href="https://www.youtube.com/watch?v=2c-ANeLEhno" target="_blank" rel="noopener noreferrer">İlker Canikligil</a> kendi ihtiyacını çözebilecek kapasitede olduğu için güzel bir uygulama yapmış. Ama çoğu insan bunu yapamaz.
        </p>
        <ul>
          <li>İlker Canikligil gibi insanları bulup o ihtiyaçları ağızlarından alman gerekiyor. Domain bilgisine hakim olman bu açıdan da önemli.</li>
          <li>Yönlendirmeden sor. Örneğin: &quot;Konuşanlar aralarda boşluklar verebiliyor, eee diye duraksıyorlar. Bu tür şeyler sizin için nasıl problemlere neden oluyor ve bunu çözmek için neler yapıyorsunuz?&quot;</li>
          <li>Evet/hayır sorusu sorma. Karşındaki kişiyi konuşturacak sorular sor.</li>
          <li>Etrafta çok fikir olsa da ve fikirlerin kendileri çok değerli olmasa da, doğru fikre yatırım yapmak ve onu bulmak için zaman harcamak gerekiyor.</li>
        </ul>
      </section>
    </article>
  );
}
