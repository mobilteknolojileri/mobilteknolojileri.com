---
title: "Bootloader Kilidi Açık Telefonda Banka, e-Devlet ve WhatsApp Çalışır mı?"
seoTitle: "Kilidi Açık Telefonda Banka ve e-Devlet Çalışır mı?"
description: "Bootloader kilidi açık telefonda bazı uygulamalar çalışır, bazıları çalışmaz. Uygulamaların kilidin açık olduğunu nasıl anladığını, hangisinin neye baktığını ve neyi garanti edemeyeceğimi yazdım."
seoDescription: "Bootloader kilidi açık telefonda banka, e-Devlet, WhatsApp ve ödeme uygulamaları neden takılır? Play Integrity düzeylerini ve uygulamaların neye baktığını yazdım."
date: 2026-11-22
tags:
  [
    "android",
    "bootloader",
    "play integrity",
    "root",
    "banka uygulaması",
    "e-devlet",
    "cihaz doğrulama",
  ]
category: "android"
draft: false
faq:
  - question: "Bootloader kilidi açık telefonda banka uygulaması çalışır mı?"
    answer: "Duruma göre. Bazı banka uygulamaları kilit açıkken sorunsuz açılır, bazıları 'cihazınız güvenli değil' deyip kapanır. Hangisinin hangi kontrolü yaptığı bankaya, uygulama sürümüne ve telefonun Android sürümüne göre değişir. Önceden bilmenin yolu yok, denemek gerekir."
  - question: "Root yapmadım, sadece kilidi açtım. Yine de sorun olur mu?"
    answer: "Olabilir. Google'ın tanımına göre Android 13 ve üstünde 'device' düzeyi, kilidin kapalı olduğuna dair donanım destekli kanıt ister. Kilit açıksa root'lu olmasanız da bu düzey gelmez. Uygulama root ile yalnızca kilit açıklığını birbirinden ayırmayabilir."
  - question: "Play Integrity'deki basic, device ve strong düzeyleri ne demek?"
    answer: "Basic en zayıf düzeydir, kilit açık olsa bile verilebilir. Device, telefonun gerçek ve sertifikalı olduğunu, Android 13 ve üstünde ayrıca kilidin kapalı olduğunu gösterir. Strong, device düzeyine ek olarak son bir yıl içinde güvenlik güncellemesi ister. Hangi düzeyi isteyeceğine uygulamayı yapan firma karar verir."
  - question: "Kilidi tekrar kapatırsam sorun biter mi?"
    answer: "Telefonda üreticinin orijinal yazılımı varsa çoğu zaman biter. Üstünde custom ROM ya da değiştirilmiş sistem varken kilidi kapatmak ise telefonu açılmaz hâle getirebilir. ROM kurulu bir telefonda kilidi kendi başınıza kapatmayın, önce bana yazın."
  - question: "Telefonla temassız ödeme geri gelir mi?"
    answer: "Çoğu zaman gelmez. Google, Google Wallet'ın kilidi açık, root'lu ya da custom ROM kurulu telefonlarda çalışmadığını kendi yardım sayfasında yazıyor. Diğer uygulamalar düzelse bile bunu baştan vaat etmem."
  - question: "Bir kez düzelen uygulamalar sonra yine bozulur mu?"
    answer: "Bozulabilir. Bu kontroller uygulama ve sistem güncellemeleriyle değişir, bugün geçen telefon aylar sonra yeniden takılabilir. Kalıcılık sözü vermem, bunu baştan söylerim."
intent: "troubleshooting"
---

Bootloader kilidi açık bir telefonda bazı uygulamalar sorunsuz çalışır, bazıları açılmaz. Açılmayanlar telefona "yazılımın değiştirilmediğini kanıtla" der ve kilit açıkken telefon bunu kanıtlayamaz.

Telefonu siz açtırmış olabilirsiniz, ikinci elden almış olabilirsiniz, bir tanıdığa vermiş de olabilirsiniz. Önce banka uygulaması kapandı, sonra e-Devlet, sonra WhatsApp giriş yapmadı. Hangi uygulamanın çalışıp hangisinin çalışmadığı da mantıksız görünüyor.

[Banka uygulamasının neden açılmadığını](/blog/banka-uygulamasi-acilmiyor-guvenli-degil-hatasi) ayrı yazmıştım. Bu yazı bir adım geriye gidiyor: Uygulamalar kilidin açık olduğunu nasıl anlıyor, hangisi neye bakıyor ve ben ne yapabilirim.

## Hangi belirtiler bu soruna işaret eder

Uygulamaların ortak noktası, hassas iş yapmaları. Aşağıdakilerden biri ya da birkaçı tanıdık geliyorsa sebep büyük ihtimalle bu.

- Banka veya ödeme uygulaması açılırken kapanıyor ya da "cihazınız güvenli değil", "rootlu cihaz" gibi bir uyarı veriyor.
- e-Devlet ve benzeri resmî uygulamalar giriş ekranına gelmeden kapanıyor.
- WhatsApp'ta "[resmi WhatsApp uygulamasına sahip olmanız gerekir](/blog/giris-yapmak-icin-resmi-whatsapp-hatasi)" yazıyor.
- Telefonla temassız ödeme kart eklemiyor.
- Yayın uygulamaları düşük çözünürlükte kalıyor, bazı oyunlar açılmıyor.

Aynı telefonda bazıları çalışıp bazıları çalışmıyorsa şaşırmayın. Her uygulama kontrolü kendi sıkılığında yapar.

## Uygulama kilidin açık olduğunu nasıl anlıyor

Üç ayrı mekanizma var ve çoğu uygulama bunlardan birini ya da birkaçını birlikte kullanıyor.

### Google'ın Play Integrity kontrolü

Uygulamanın sunucusu, Google'ın Play Integrity API'sinden telefon hakkında bir yanıt ister. Google'ın belgesine göre bu yanıtta telefonun durumu "etiketlerle" gelir ve üç düzey vardır.

**Basic.** En zayıf düzey. Kilit açık ya da kapalı olabilir, telefon sertifikalı olmayabilir. Google bu düzeyde güvenlik, gizlilik ya da uyumluluk güvencesi vermediğini yazıyor.

**Device.** Uygulama gerçek ve sertifikalı bir telefonda çalışıyor. Android 13 ve üstünde bootloader'ın kilitli olduğuna ve yüklü sistemin üreticinin sertifikalı imajı olduğuna dair donanım destekli bir kanıt aranıyor. Root gibi bir bozulma belirtisi varsa bu etiket hiç gelmiyor.

**Strong.** Device düzeyinin üstüne, Android 13 ve üstünde son bir yıl içinde güvenlik güncellemesi alınmış olması da gerekiyor.

Hangi düzeyin isteneceğine uygulamayı yapan firma karar veriyor. Bir banka yalnızca device düzeyini isterken başka bir uygulama strong düzeyini isteyebilir. Kilit açıkken device ve strong gelmez, basic ise gelebilir. Aynı telefonda farklı davranışlar bu yüzden ortaya çıkıyor.

### Donanım destekli kanıt

"Donanım destekli" ifadesi, telefonun içindeki güvenli bölümün durumu imzalayarak bildirmesi anlamına geliyor. Google'ın belgesi, Play Integrity'nin bu sinyalleri kullandığını ve saldırıya karşı dayanıklı olduklarını söylüyor. Android 13 ve üstünde kilidin açık olup olmadığı yalnızca yazılımın söylediği bir bilgi olmaktan çıkıyor. Android 12 ve öncesinde Google, device düzeyi için donanım destekli kanıtı varsa kullanıyor, yoksa yazılım destekli yönteme dönüyor.

### Uygulamanın kendi kontrolleri

Bazı uygulamalar Google'a hiç sormadan telefona kendileri bakar. Root izleri, değiştirilmiş sistem dosyaları, root yönetim uygulamalarının varlığı gibi şeylere bakıldığını bilirim. Bu kontroller uygulamadan uygulamaya çok değişir ve dışarıdan görülmez. Dolayısıyla Google düzeyi geçen bir telefonda bile bazı uygulamalar kendi kontrolünde takılabilir.

## Google'ın 2025 değişikliği neyi değiştirdi

Google'ın Android Enterprise topluluğunda 21 Mayıs 2025'te yayımladığı duyuruya göre Android 13 ve üstü telefonlarda iki şey değişti. Play Integrity'yi çağıran uygulamanın Google Play üzerinden kurulmuş ya da güncellenmiş olması gerekiyor. Strong düzeyi de artık son on iki ayda güvenlik güncellemesi almış telefonlara veriliyor.

Sizin açınızdan sonuç, kontrollerin sıkılaşma yönünde ilerlemesi. Aynı telefon bir güncellemeden sonra daha az uygulamayı geçebilir.

## Hangi uygulama neye bakıyor

Burada kesin konuşabildiğim yerle tahmin ettiğim yeri ayırıyorum.

**Banka uygulamaları.** Çoğu Google'ın doğrulamasına ve kendi kontrollerine bakar. Hangisi neye baktığını açıklamaz, sürümle de değişir.

**e-Devlet ve resmî uygulamalar.** Forumlarda e-Devlet ve e-Nabız'ın kilidi açık telefonlarda açılmadığı sık yazılıyor. Resmî bir açıklama bulamadım, o yüzden bu bilgiyi eski kullanıcı deneyimi olarak okuyun. Sürüme göre değişmiş olabilir. [e-Devlet uygulamasının açılmaması](/blog/e-devlet-uygulamasi-acilmiyor) için ayrı bir yazı hazırladım.

**WhatsApp.** Yardım sayfaları engeli resmî olmayan uygulamalara bağlıyor, cihazın kilit durumundan söz etmiyor. Kilidi açık ya da sertifikasız telefonlarda giriş sorunlarını ise kullanıcılar anlatıyor. Ayrıntısı [ayrı yazıda](/blog/giris-yapmak-icin-resmi-whatsapp-hatasi).

**Google Wallet ve telefonla ödeme.** Burası en sıkı yer. Google'ın kendi yardım sayfası, root'lu, custom ROM kurulu, değiştirilmiş yazılımlı ve bootloader kilidi açık telefonlarda Google Wallet'ın çalışmadığını açıkça söylüyor. Önerisi de orijinal Android sürümüne dönmek.

**Netflix ve DRM'li yayın uygulamaları.** Bunlar Widevine denen telif koruma sistemine bakar. L1 düzeyinde içeriğin çözülmesi telefonun güvenli donanım bölümünde olur, L3 düzeyinde yazılımda. Android Police, 2019'da OnePlus 7 Pro'da kilit açılınca L1 desteğinin kaybolduğunu ve Netflix'in HD yerine 480p sunduğunu yazmıştı. Bu tek bir telefona ait eski bir örnek, ama mantığı şu an da geçerli: Kilit açılınca yüksek çözünürlük gidebilir.

**Oyunlar.** Google, Play Integrity'nin amaçları arasında hile ile mücadeleyi sayıyor. Kilidi açık telefonda bazı oyunların açılmaması ya da hesap bağlamaması bu yüzden şaşırtıcı değil.

## Bunlara dokunmayın

Bu sorunu anlatan videolar çok. İzledikten sonra kendi telefonunuzda uygulamaya çalışmadan önce şunları bilin.

- Kilidi kendi başınıza kapatmayın. Üstünde orijinal olmayan bir sistem varken kilidi kapatmak telefonu açılmaz hâle getirebilir.
- Telefonu sıfırlamayın. Verileriniz gider ve sorunun sebebi kilit olduğu için çoğu zaman düzelmez.
- Bir videodaki adımı kendi telefonunuza aynen uygulamayın. Adımlar telefonun nasıl root'landığına göre değişiyor. Yanlış bir kombinasyon telefonu logoda bırakabilir.
- Uygulamanın "düzeltilmiş" ya da "root uyumlu" diye dağıtılan bir kopyasını kurmayın. Kaynağı belirsiz bir dosya, bankanızın uyarısından çok daha büyük bir risk açar.

## Tek güvenli adım: Hangi uygulamaların etkilendiğini yazın

Hiçbir şeyi değiştirmeyen bir adım var, o da bir not almak. Sorun çıkaran her uygulamanın adını ve ekrandaki hata cümlesini aynen yazın ya da ekran görüntüsü alın. Telefonun modelini ve Android sürümünü de ekleyin.

Bu liste, hangi kontrolün takıldığını anlamamı sağlayan ilk veri. Üstelik hesabınızda bir sorun olmadığını görmek için aynı hesabı tarayıcıdan açıp deneyebilirsiniz. Tarayıcıda açılıyorsa sorun hesapta değil, telefondadır.

## Kalan iş ne

Telefon sizde kalır. Windows'lu bir bilgisayarınız, bir USB kablonuz ve internetiniz olsun, bilgisayara bağlanıp işi uzaktan yaparım.

Amacım, kilit açık kalırken uygulamaların çalışmasını sağlamak. Çoğu zaman kilidi kapatmak, ROM'u değiştirmek ya da telefonu sıfırlamak gerekmez. Yöntemi burada anlatmıyorum: Telefona ve sürüme göre değişiyor, tarif edilince de yarım uygulanıp telefonu bozuyor.

Neyi garanti edemeyeceğimi baştan söyleyeyim:

- Telefonla temassız ödeme çoğu zaman geri gelmez.
- Bazı banka uygulamaları düzeltmeden sonra da açılmayabilir, çünkü kendi kontrolünü ayrıca yapan bir azınlık var. Hangisinin bunlardan biri olduğunu denemeden bilemem.
- Bu kontroller uygulama ve sistem güncellemeleriyle değişir, bugün geçen bir telefon aylar sonra yeniden takılabilir.

Bakarım, sonucu söylerim. Olmayacaksa olmayacağını da söylerim.

Bana yazarken telefonun modelini, Android sürümünü, kilidin ne zaman ve kim tarafından açıldığını bildiğiniz kadarıyla ve yukarıdaki listeyi gönderin. Telefonu ilk açtığınızda ne olduğunu da yazın. Xiaomi telefonunuzun kilidini kendiniz açmayı düşünüyorsanız önce [Xiaomi bootloader kilidini açma yazısına](/blog/xiaomi-bootloader-kilidi-acma) bakın. Telefonda ayrıca "Play Protect sertifikalı değil" uyarısı görüyorsanız [bu yazıyı](/blog/cihaz-play-protect-sertifikali-degil) okuyun.

Hangi işlere baktığımı ve işin nasıl ilerlediğini [Android destek sayfasında](/android-destek) yazdım.
