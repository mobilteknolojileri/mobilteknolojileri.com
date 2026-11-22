---
title: "Cihaz Play Protect Sertifikalı Değil Ne Demek? Nedenleri ve Ne Bozulur"
seoTitle: "Cihaz Play Protect Sertifikalı Değil: Ne Demek?"
description: "Play Store 'Cihazınız Play Protect sertifikalı değil' diyor. Bunun ne anlama geldiğini, nerede görüldüğünü, telefonun neden sertifikasız kaldığını ve hangi uygulamaların bundan etkilendiğini yazdım."
seoDescription: "'Cihaz Play Protect sertifikalı değil' uyarısı ne demek, nerede görülür, telefon neden sertifikasız kalır ve hangi uygulamalar bozulur? Nedenleri ve güvenli kontrol."
date: 2026-11-22
tags:
  ["android", "play protect", "sertifika", "play store", "custom rom", "çin sürümü", "bootloader"]
category: "android"
draft: false
faq:
  - question: "Play Protect sertifikalı değil ne demek?"
    answer: "Google, telefonun yazılımı için bir uyumluluk testi sonucu görmüyor demek. Telefon bu testten geçmemiş olabilir, hiç girmemiş olabilir ya da üstündeki yazılım sonradan değiştirilmiş olabilir. Google'ın yardım sayfası, sertifikasız telefonlarda Google uygulamalarının lisanslı olmadığını söylüyor."
  - question: "Play Protect sertifikası ile Google Play Protect taraması aynı şey mi?"
    answer: "Hayır. Tarama, uygulamalardaki zararlı yazılımı arayan güvenlik özelliği. Sertifika ise telefonun yazılımının Google'ın uyumluluk testinden geçtiğini gösteren kayıt. Taramayı açmak ya da kapatmak sertifika durumunu değiştirmez."
  - question: "Çin sürümü telefonum neden sertifikasız çıkıyor?"
    answer: "Çin pazarı için üretilen sürümler Google'ın hizmetleriyle gelmez, sonradan Google uygulamaları eklenmiş olsa bile telefon sertifikalı sayılmayabilir. Bu tür telefonlarda ayrıca yüklenen bir global ROM da sertifika durumunu her zaman düzeltmez."
  - question: "Sertifikasız telefonda banka uygulamaları çalışır mı?"
    answer: "Bazen çalışır, bazen çalışmaz. Bankanın cihaz doğrulamasına baktığı telefonlarda sertifikasız durum çoğu zaman sorun çıkarır. Google Wallet gibi ödeme uygulamaları ise sertifikasız telefonlarda en sıkı denetlenen gruptur."
  - question: "Telefonu sıfırlarsam sertifika geri gelir mi?"
    answer: "Telefonda üreticinin orijinal yazılımı varsa bazen gelir. Sebep değiştirilmiş yazılım ya da kilidi açık bootloader ise sıfırlama tek başına yetmez. Üstelik sıfırlama verilerinizi siler, o yüzden ilk adım olarak önermem."
intent: "troubleshooting"
---

"Cihaz Play Protect sertifikalı değil" uyarısı, Google'ın telefonunuzun yazılımı için bir uyumluluk testi sonucu görmediği anlamına gelir. Telefon bu testten geçmemiş, hiç girmemiş ya da üstündeki yazılım sonradan değiştirilmiş olabilir.

Uyarıyı çoğu kişi Play Store'u açtığında ya da Google uygulamalarından biri takıldığında görüyor. Bazen güvenlik uyarısı gibi okunuyor, bazen de bir uygulama bu yüzden hiç kurulmuyor. İkisi de aslında aynı şeyi söylüyor: Google bu telefonu kendi listesinde tanımıyor.

## Bu uyarı nerede görülür

Telefonun durumunu kendiniz de görebilirsiniz. Google'ın Türkçe yardım sayfasındaki yola göre:

1. Google Play Store uygulamasını açın.
2. Sağ üstteki profil simgesine dokunun.
3. Ayarlar'a dokunun.
4. Hakkında bölümünü açın. Orada telefonun Play Protect sertifikalı olup olmadığı yazar.

Sertifikasızsa Google'ın sayfası bunu "cihazınız Google Play Protect sertifikalı değildir" diye belirtiyor. Bu yolda hiçbir şey değişmiyor, sadece okuyorsunuz.

Bir ayrım önemli: Sertifika ile Google Play Protect taraması farklı şeyler. Tarama, uygulamalardaki zararlı yazılımı arayan özellik. Sertifika ise telefonun yazılımının Google'ın uyumluluk testinden geçtiğini gösteren kayıt. Taramayı kapatıp açmak sertifikayı değiştirmez.

## Telefonlar neden sertifikasız kalır

Her telefon, Google uygulamalarıyla gelmeden önce bir uyumluluk testinden geçmek zorunda. Sertifikasız kalmanın birkaç yolu var.

**Hiç sertifikalandırılmamış telefon.** Çin pazarı için üretilen sürümler genellikle Google'ın hizmetleri olmadan çıkar. Bazı ucuz tablet ve markasız telefonlar da testten hiç geçmemiştir. Kutusundan Google uygulamalarıyla çıkıyorsa bile Google o cihazı kayıtlı görmeyebilir. Google'ın sayfası da önce telefonunuzun Google'ın sertifikalı cihaz listesinde olup olmadığına bakmanızı öneriyor. [Çin sürümü telefona global ROM kurulması](/blog/cin-surumu-telefona-global-rom) bu grupta sık karşılaşılan bir durum.

**Değiştirilmiş yazılım.** Custom ROM kurulmuşsa, sistem sonradan değiştirilmişse ya da root yapılmışsa telefon artık üreticinin imzaladığı yazılımı taşımıyor. Google'ın yardım sayfası sertifika kontrolünün başarısız olmasının yaygın nedenleri arasında bu üçünü sayıyor.

**Kilidi açık bootloader.** Bootloader, telefonun açılışta yazılımı doğrulayan ilk aşaması. Kilidi açık olunca telefon üreticinin imzalamadığı yazılımı da çalıştırabiliyor. Google bunu da aynı listede sayıyor. Bunun uygulamalara nasıl yansıdığını [kilidi açık telefonda uygulamaların çalışıp çalışmadığını anlattığım yazıda](/blog/bootloader-kilidi-acik-telefonda-uygulamalar) yazdım.

**Sahte ya da karıştırılmış ROM.** Telefon markası ve modeli gerçek görünse de yazılım başka bir yerden gelmiş olabilir. [Sahte ROM'u nasıl anlayacağınızı](/blog/fake-rom-nasil-anlasilir) ayrı yazdım. İkinci el telefon aldıysanız bu ihtimali atlamayın.

Hangi grupta olduğunuzu tek bir ekrandan söyleyemem. Telefonun modeline ve açılışta ne yaptığına bakınca çoğu zaman ayırt edebiliyorum.

## Uyarı yeni mi çıktı, hep mi vardı

Sebebi daraltmanın en kolay yolu bu soru.

Telefonu aldığınız günden beri sertifikasızsa sorun büyük ihtimalle telefonun kendisinde ya da satıcının kurduğu yazılımda. Çin sürümü, tablet ya da ikinci el bir telefon bu gruba girer. Uyarı bir noktadan sonra çıktıysa o noktada ne yapıldığına bakmak gerekir: ROM değişikliği, kilit açma, root ya da bir sistem güncellemesi. Telefonu başkası kullandıysa ya da servise verildiyse onu da hatırlamaya çalışın.

Cevabı bilmiyorsanız sorun değil. Bu bilgiyi telefonun kendisinden de çıkarabiliyorum.

## Sertifikasız telefonda ne bozulur

Google'ın yardım sayfasına göre sertifikasız telefonlar daha az güvenli olabilir, sistem ve uygulama güncellemelerini alamayabilir, uygulamalar ve özellikler hatalı çalışabilir, güvenli yedekleme olmayabilir. Ayrıca bu telefonlardaki Google uygulamaları lisanslı değil.

Günlük hayatta bu şöyle görünür:

- Play Store'da bazı uygulamalar çıkmaz ya da kurulmaz.
- Google uygulamaları ve hizmetleri eksik ya da takılır.
- Telefonla temassız ödeme çalışmaz. Google Wallet için Google, root'lu, custom ROM'lu ya da kilidi açık telefonlarda çalışmadığını yazıyor.
- Bazı banka ve mesajlaşma uygulamaları cihaz doğrulamasında takılır. [Banka uygulamalarının açılmama sebebini](/blog/banka-uygulamasi-acilmiyor-guvenli-degil-hatasi) ayrıca yazdım.

Uygulamalar telefonun durumuna Play Store'dan bağımsız, kendi yöntemleriyle de bakar. Play Store "cihazınız bu sürümle uyumlu değil" diyorsa bu farklı bir durum, [onu ayrı anlattım](/blog/cihaziniz-bu-surumle-uyumlu-degil).

## Kendi başınıza yapmayın

Bu uyarıyı anlatan videolar çok. Birçoğu bir ID kaydettirmenizi ya da bir uygulama kurmanızı öneriyor. Ben o yöntemleri burada anlatmıyorum.

Yöntemler telefonun yazılımına göre değişiyor ve bir kısmı sistem dosyalarına dokunuyor. Yanlış telefona uygulanınca sorun çözülmüyor, bazen telefon açılmaz hâle geliyor.

Özellikle şunlardan uzak durun:

- Telefonu sıfırlamak. Verileriniz gider, sertifika çoğu zaman yine gelmez.
- Üstünde custom ROM varken bootloader kilidini kapatmak. Telefon açılmaz hâle gelebilir.
- Sertifika "düzeltir" denilen, kaynağı belirsiz bir APK ya da modül kurmak. Bankanız ve kişisel verileriniz için bu, uyarıdan daha büyük bir risk.
- Acil bir banka işlemi için uygulamayı kurcalamak. O işi tarayıcıdan yapın.

## Tek güvenli adım: Durumu kaydedin

Yukarıdaki Hakkında ekranını açın ve gördüğünüzü olduğu gibi kaydedin. Ekran görüntüsü alın, telefonun model adını ve Android sürümünü de yanına ekleyin. Telefonu nereden aldığınızı, yeni mi ikinci el mi olduğunu da not alın.

Bunlar telefona dokunmaz. Sertifikanın neden eksik olduğunu anlamak için ihtiyacım olan ilk bilgiler de bunlar.

## Kalan iş ne

Telefon sizde kalır. Windows'lu bir bilgisayarınız, bir USB kablonuz ve internetiniz yeterli. Bilgisayarınıza bağlanıp işi uzaktan yaparım.

Önce telefonun hangi gruba girdiğine bakarım: Çin sürümü mü, sahte ROM mu, kilidi açık orijinal sistem mi, custom ROM mu. İş buna göre değişir. Bazen telefona doğru yazılımı yüklemek yeterli olur, bazen sertifikanın geri gelmesi mümkün olmaz.

Söz veremeyeceğim şeyler de var:

- Sertifikasız bırakılmış bazı telefonlar hiçbir zaman sertifikalı hâle gelmez.
- Temassız ödeme sertifika düzelse bile geri gelmeyebilir.
- Bu kontroller uygulama ve sistem güncellemeleriyle değişir, bugün düzelen bir telefon aylar sonra yeniden takılabilir.

Olmayacaksa olmayacağını baştan söylerim. Yazarken telefonun modelini, nereden aldığınızı, Hakkında ekranının görüntüsünü ve telefonda önceden ne yapıldığını bildiğiniz kadarıyla belirtin.

Hangi işlere baktığımı ve işin nasıl ilerlediğini [Android destek sayfasında](/android-destek) yazdım.
