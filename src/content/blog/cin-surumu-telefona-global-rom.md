---
title: "Çin Sürümü Telefona Global ROM Yüklenir mi? Neleri Değiştirir, Riskleri Ne"
seoTitle: "Çin Sürümü Telefona Global ROM Yüklenir mi?"
description: "Global ROM, Çin sürümü telefonun yazılımını Google hizmetleri, Türkçe ve sertifikayla gelen bölgeye çevirir. Neyi gerektirdiğini, hangi risklerin olduğunu ve nelerin her telefonda mümkün olmadığını anlattım."
seoDescription: "Çin sürümü Xiaomi'ye global ROM yüklenir mi? Bootloader kilidi, veri silinmesi, anti-rollback ve resmî ile topluluk ROM'u arasındaki fark."
date: 2026-11-22
tags: ["android", "global rom", "çin sürümü", "xiaomi", "bootloader", "play protect"]
category: "android"
draft: false
faq:
  - question: "Çin ROM'lu Xiaomi'ye global ROM yüklenir mi?"
    answer: "Bootloader kilidi açılabiliyorsa ve o model için kullanılabilir bir global ROM varsa yüklenir. İkisinden biri eksikse olmaz. Bazı yeni modellerin resmî global sürümü hiç çıkmıyor, o zaman yalnızca topluluk ROM'ları kalıyor. Kasım 2026 itibarıyla Xiaomi Çin sürümleri için resmî kilit açma yolu kapalı."
  - question: "Global ROM yüklemek verileri siler mi?"
    answer: "Evet. Bootloader kilidini açmak telefonu sıfırlar, ROM değişimi de verileri yeniden kurar. Fotoğraflarınızı, kişilerinizi ve mesaj yedeklerinizi telefondan önce çıkarmanız gerekir. Yedeksiz iş başlamamalı."
  - question: "Global ROM yüklenen telefonda Play Protect sertifikası olur mu?"
    answer: "Resmî global ROM ve o model için Google'ın sertifikası varsa olabilir. Topluluk ROM'larında ve bootloader kilidi açık kalan telefonlarda çoğu zaman olmaz. Ayarlardan Play Store'un Hakkında bölümüne bakarak durumu kendiniz görebilirsiniz."
  - question: "Çin ROM'una Google Play kurmak global ROM ile aynı mı?"
    answer: "Hayır. Google uygulamalarını yüklemek Play Store'u açar ama telefonu Google'ın sertifikalı cihazı yapmaz. Google, sertifikasız cihazlardaki Google uygulamalarının lisanslı olmadığını ve bazı özelliklerin çalışmayabileceğini söylüyor. Banka ve ödeme uygulamaları bu yüzden takılabilir."
  - question: "Kilidi yeniden kapatırsam telefona zarar gelir mi?"
    answer: "Evet, zarar gelebilir. Telefonun gerçek bölgesiyle uyuşmayan bir ROM üstünde bootloader kilidini kapatmak telefonu açılmaz hâle getirebiliyor. Kilidi yalnızca üreticinin telefonla eşleşen orijinal yazılımı üstündeyken kapatın."
intent: "guide"
---

Global ROM, Çin pazarı için hazırlanmış telefonun yazılımını Google hizmetleri, Türkçe dil ve diğer ülkelerin uygulama desteğiyle gelen bölge sürümüyle değiştirmektir. ROM, telefonun işletim sistemi ve üstündeki arayüz demek. Yani değişen şey uygulamalar değil, telefonun kendi yazılımı.

Çin sürümü bir amiral gemisi aldınız, Play Store yok, menüler İngilizce, bildirimler düzgün gelmiyor. YouTube'da "herkes yapabilir" diyen videolar var, ama aynı videolarda bu işin neyi sildiği, neyi bozabileceği ya da her modelde işlemediği pek anlatılmıyor. Burada adımları değil, işin neyi gerektirdiğini ve nerede bozulabileceğini anlatıyorum.

## Global ROM neyi değiştirir

Çin sürümünden global sürüme geçince şunlar değişir:

- Google hizmetleri sistemin parçası olarak gelir. Play Store, Google hesabı ve bildirim altyapısı normal çalışır.
- Türkçe dil seçeneği listede bulunur.
- Bölgeye göre ayarlanmış uygulama seti gelir. Çin'e özel uygulamaların çoğu kalkar.
- Telefon Google'ın sertifikalı cihazları arasına girebilir. Banka ve ödeme uygulamalarının çalışması büyük ölçüde buna bağlı.

Son madde otomatik değil. Sertifika, Google'ın o cihaz modeli ve yazılım için verdiği bir onaydır. Üretici o model için global bir sürüm yayımlamamışsa, yani telefon yalnızca Çin'de satılmışsa, elinizdeki yazılım ne kadar global görünürse görünsün bu onay çoğunlukla olmaz. Mart 2026 haberlerine göre Xiaomi 17 ve 17 Ultra global olarak çıktı, 17 Pro ve 17 Pro Max çıkmadı.

## Neyi gerektirir

İki temel koşul var.

1. **Bootloader kilidinin açılması.** Bootloader telefonun açılış kilididir ve yalnızca üreticinin imzaladığı yazılımı çalıştırır. Başka bölgenin ROM'unu kurmak için kilidin açılması gerekir. Marka bunu her model için vermez. Güncel durumu [Xiaomi bootloader kilidi yazısında](/blog/xiaomi-bootloader-kilidi-acma) anlattım.
2. **Verilerin silinmesi.** Kilidi açmak telefonu sıfırlar, ROM değişimi de sistemi baştan kurar. Telefonda ne varsa gider.

Kilit açılınca yalnızca ROM değişmez. Telefon her açılışta kilidinin açık olduğunu bildirir ve bunun sonuçları aşağıda.

## Gerçek riskler

**Anti-rollback.** Xiaomi telefonlarda yazılımın bir güvenlik sürüm sayacı vardır. Telefon, sayacı kendi sürümünden düşük olan bir ROM'u kabul etmez. Zorla kurulursa telefon açılmaz hâle gelebilir. Risk, Çin için çıkmış yazılımın global için çıkmışından yeni olduğu modellerde en yüksektir.

**Uyumsuz ROM üstünde kilit kapatmak.** Bootloader kilidini yeniden kapatmak güvenlik açısından cazip görünür, ama telefonun gerçek bölgesiyle uyuşmayan bir ROM üstünde kapatılırsa telefon açılmayabilir. Güncel Xiaomi rehberleri bunu çalışan bir telefonun bozulmasının en yaygın yolu olarak anlatıyor.

**Çin modeline özel özelliklerin kaybı.** Çin ROM'unda olup global ROM'da bulunmayan özellikler olabilir. Bunlar modele göre değişir ve hepsini önceden listelemek mümkün değil. İstediğiniz bir özellik varsa önce o özelliği sorun.

**Kilit açık kalır.** Kilit açıkken telefon bazı uygulamalara kendini güvenli göstermez. Banka, ödeme ve resmî uygulamalar çalışmayabilir. Bu uyarı bir saldırıya değil, telefonun doğrulanamamasına işaret eder. [Cihaz sertifikalı değil uyarısını](/blog/cihaz-play-protect-sertifikali-degil) ayrı yazdım.

Hiçbir yöntem kalıcı bir sonuç sözü vermez. Uygulamaların kontrolleri güncellemelerle değişir.

## Resmî global ROM ile topluluk ROM'u aynı şey değil

Resmî global ROM, üreticinin o model için yayımladığı yazılımdır. İmzası üreticiye aittir, güncellemeleri üreticiden gelir.

Topluluk ROM'u ise gönüllülerin üreticinin yazılımına dayanarak hazırladığı, değiştirilmiş bir sürümdür. Xiaomi.eu gibi büyük topluluklar var ve işlerini açıkça yaparlar. Yine de bunlar resmî sürümden ayrı yazılımlardır. Güncellemeler topluluktan gelir, güvenlik yaması gecikebilir ve Google sertifikası çoğu zaman gelmez.

Resmî global ROM'u olmayan bir model için "global ROM" denildiğinde genellikle topluluk ROM'u kastedilir. Satıcı ya da video "global" derken hangisini kastettiğini söylemiyorsa sorun. Yazılımın kaynağını bilmediğiniz bir telefonda bankacılık yapmak ayrı bir risktir. [Sahte ROM](/blog/fake-rom-nasil-anlasilir) sorunu da tam buradan çıkar.

## "Google yükleyiciyle halloldu" neden aynı şey değil

Çin ROM'una Google uygulamalarını yükleyen küçük bir uygulama ya da APK yaygın bir yöntemdir. Play Store açılır, hesabınıza girersiniz.

Ama telefon hâlâ Çin yazılımıyla çalışıyor. Google'ın kendi açıklamasına göre yalnızca sertifikalı cihazlar Google uygulamalarını lisanslı olarak içerebilir ve sertifikasız cihazlardaki Google uygulamaları lisanslı değildir. Bazı uygulamalar ve özellikler düzgün çalışmayabilir. Bildirimler de bu yüzden yarım kalabilir.

Bu yol işe yarar, ama sertifika vermez.

## Bunlara dokunmayın

- Kilidi açılabilir mi bilmeden telefonu "global ROM var" diyen bir videodaki adımlarla sıfırlamayın.
- Başka bir bölgenin dosyasını telefona zorla yüklemeyin. Anti-rollback koruması telefonu kilitleyebilir.
- Bootloader kilidini yeniden kapatmayın.
- ROM'u kimin hazırladığını bilmediğiniz bir telefonda bankacılık yapmayın.

## Tek güvenli adım

Önce yedek alın ve telefonun tam model kodunu not edin. İkisi de tehlikesizdir.

1. **Yedek.** Fotoğraf ve videoları USB ile bilgisayarınıza kopyalayın. Kişilerinizi ve WhatsApp yedeğinizi kontrol edin. Çin sürümünde Google yedeği çalışmıyorsa dosyaları elle kopyalamanız gerekir.
2. **Model kodu.** Ayarlar, Telefon hakkında, Tüm özellikler yolundan model numarasını ve sürüm kodunu yazın ya da ekran görüntüsü alın. Aynı marka ve ad altında farklı bölge sürümleri olabilir, kod hangisi olduğunu söyler.

## Kalan iş ne

Bu işi uzaktan yaparım. Telefon sizde kalır. Windows'lu bir bilgisayar, USB kablosu ve internet bağlantısı yeterli, ben bilgisayara bağlanıp işlemi yaparım.

Yazarken model numarasını, sürüm kodunu, telefonu nereden aldığınızı ve şimdiye kadar yapılanları belirtin. Bir ekran görüntüsü yeter.

Neyi vaat edemem: Bootloader kilidi açılmayan telefonu global yapamam. Markanın o model için ROM yayımlamadığı bir telefonda resmî global yazılım gösteremem. Sonrasında banka uygulamalarının çalışacağını da baştan garanti edemem. Bunlar telefona ve zamana göre değişir. Önce bakarım, olacaksa söylerim, olmayacaksa onu da.

Satın almadan önce bu yazıyı okuyorsanız [önce neye bakmanız gerektiğini](/blog/cin-surumu-telefon-almadan-once) yazdım. Hangi işlere baktığımı ve işin nasıl ilerlediğini [Android destek sayfasında](/android-destek) yazdım.
