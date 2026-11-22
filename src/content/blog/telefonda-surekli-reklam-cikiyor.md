---
title: "Telefonda Sürekli Reklam Çıkıyor: Reklam Nereden Geliyor?"
seoTitle: "Telefonumda Reklam Çıkıyor: Sebepleri ve Ne Yapmalı"
description: "Telefonda kendiliğinden tam ekran reklam çıkıyorsa kaynağı üç yerden biridir: yüklü bir uygulama, tarayıcı bildirimleri ya da telefonun kendi sistem reklamları. Hangisi olduğunu nasıl ayırt edeceğinizi yazdım."
seoDescription: "Telefonda sürekli reklam mı çıkıyor? Reklamın yüklü bir uygulamadan, tarayıcı bildiriminden ya da telefonun kendi sisteminden geldiğini nasıl ayırırsınız, anlattım."
date: 2026-11-22
tags: ["android", "reklam", "reklam virüsü", "adware", "tarayıcı bildirimi", "xiaomi"]
category: "android"
draft: false
faq:
  - question: "Telefonumda kendiliğinden çıkan reklam virüs mü?"
    answer: "Her zaman değil. Reklamı yüklü bir uygulama gösteriyorsa buna reklam yazılımı (adware) denir ve zararlı sayılır. Tarayıcı bildirimi ya da telefon üreticisinin kendi sistem reklamları ise virüs değil, bir izin ya da ayardır. Hangisi olduğunu, reklam çıktığı anda hangi uygulamanın önde olduğuna bakarak anlarsınız."
  - question: "Reklam çıkınca kapatıyorum, birkaç dakika sonra yine geliyor. Neden?"
    answer: "Çünkü kaynak reklamı kapatmakla gitmiyor. Reklamı gösteren uygulama ya da site izni yerinde duruyor ve belli aralıklarla yeniden gösteriyor. Kapatmak yalnızca o seferki pencereyi kaldırır."
  - question: "Antivirüs uygulaması kurarsam geçer mi?"
    answer: "Reklamlardan çıkan 'telefonunuz virüslü' ya da 'temizle' tarzı uygulamalara güvenmeyin. Bunların bir kısmı reklam yazılımının kendisidir. Google Play Protect Android'in kendi tarama hizmetidir ve zararlı uygulamaları uyarabilir, devre dışı bırakabilir ya da kaldırabilir. Ek bir temizlik uygulaması yüklemek çoğu zaman sorunu büyütür."
  - question: "Fabrika ayarlarına döndürürsem reklamlar gider mi?"
    answer: "Gidebilir ama ilk adım olarak önermem. Fotoğraflar, mesajlar ve uygulama verileri silinir. Üstelik yedekten geri yüklerken sorunlu uygulama da aynı yolla geri yüklenebilir. Önce hangi uygulamanın reklam gösterdiğini bulmak daha az kayıpla sonuç verir."
  - question: "Xiaomi telefonda çıkan reklamlar da virüs mü?"
    answer: "Hayır. Xiaomi'nin kendi sistem uygulamalarında ve kilit ekranı içeriğinde gösterdiği reklamlar telefonun bir özelliğidir ve ayarlardan yönetilir. Virüs değildir. Ekranın üstüne bir şeyin kapatılamayan pencereyle gelmesi ise başka bir durumdur."
  - question: "Uygulama simgesini bulamıyorum, telefondan silinmiş gibi ama reklam sürüyor. Olur mu?"
    answer: "Olur. Bazı reklam uygulamaları simgesini gizler, bazıları da kaldırılmasını engelleyen yönetici ya da erişilebilirlik izni alır. Bu yüzden ayarlardan kaldırmaya çalışınca düğme çalışmayabilir. Uygulamanın adını bilmeden çözmek zorlaşır."
intent: "troubleshooting"
---

Telefonda kendiliğinden tam ekran reklam çıkması, bir uygulamanın, bir sitenin ya da telefonun kendi sisteminin ekrana reklam basması demektir. İlk bakışta üçü de aynı şey gibi gelir ama sebepleri ve yapılacak işler birbirinden çok farklıdır.

Mesajlara girerken, rehbere bakarken, hiçbir şey açık değilken bile reklam çıkıyor. Kapatıyorsunuz, birkaç dakika sonra yenisi geliyor. Telefon yavaşladı, ısınıyor, pil de eskisinden çabuk bitiyor.

Önce neyle uğraştığınızı bilmek gerekir, çünkü yanlış kaynağa göre yapılan işlem hem boşa gider hem veri kaybettirebilir.

## Reklam üç yerden birinden gelir

**1. Yüklü bir uygulama.** Genellikle yakın zamanda kurulan bir temizleyici, el feneri, VPN, duvar kâğıdı ya da oyun uygulaması olur. Play Store dışından kurulan bir APK dosyası da sık görülen kaynaktır. Bu tür uygulama, diğer uygulamaların üstüne çizim yapma iznini kullanır. Android'in resmî geliştirici belgesinde bu izin (`SYSTEM_ALERT_WINDOW`), uygulamanın "diğer tüm uygulamaların üstünde" pencere oluşturmasına izin veren bir yetki olarak geçer. Reklamın her uygulamanın üstüne çıkması bu yüzden.

**2. Tarayıcıdan verilmiş bildirim izni.** Bir sitede "bildirimlere izin ver" çıktı, yanlışlıkla ya da robot doğrulaması sanıp dokundunuz. O günden sonra site, tarayıcı kapalıyken bile bildirim gönderebilir. Bu bir uygulama kurulumu değildir.

**3. Telefon üreticisinin kendi reklamları.** Bazı markalar kendi sistem uygulamalarında ve kilit ekranı içeriğinde öneri ve reklam gösterir. Xiaomi bunun en bilinen örneği.

## Hangisi olduğunu nasıl ayırırsınız

Üçünün görünüşü farklıdır.

**Uygulamadansa:** Reklam tam ekran açılır, kapatma düğmesi küçük ya da gizlidir. Hangi uygulamadayken çıkacağı belli olmaz. Ana ekranda, aramada, kilidi açarken bile çıkabilir. Reklamın üstünde bir tarayıcı ya da bilinen bir uygulamanın adı yazmıyorsa ve ekranı kapatıp açınca bile devam ediyorsa bu büyük ihtimalle adware.

**Tarayıcı bildirimiyse:** Reklam önce bildirim çubuğunda ya da ekranın üstünde bildirim olarak çıkar. Üstündeki küçük simge ve ad tarayıcının ya da bir sitenin adıdır. Dokununca bir sayfa açılır. Ekranın tamamına yayılan, kapatılamayan pencere olmaz.

**Sistem reklamıysa:** Reklam, telefonun kendi uygulamalarının içinde ya da kilit ekranında çıkar. Örneğin tema, müzik, video ve dosya uygulamalarında öneri kartları ya da kilit ekranında dönen içerik. Başka bir uygulamanın üstüne binmez. Bunlar virüs sayılmaz.

Bu ayrım önemli, çünkü bir videoda "Xiaomi reklamları kapatın" diye anlatılan adımlar, asıl sorunu bir uygulama oluşturuyorsa hiçbir şeyi değiştirmez. Tersi de doğru.

## Uygulama neden bu kadar inatçı

Reklam yazılımı çoğu zaman gönüllü kurulmaz. Bir reklama dokunmuşsunuzdur, bir "temizleyici" kurmuşsunuzdur ya da bir tanıdığınız Play Store dışından bir dosya yüklemiştir. Uygulama ilk açılışta üstte çizim izni ister ve kullanıcı genelde onaylar.

Sonrasında iki şey olabilir. Uygulama simgesini ana ekrandan ve uygulama listesinden gizleyebilir, dolayısıyla neyi sileceğinizi bulamazsınız. Ya da cihaz yöneticisi ya da erişilebilirlik izni alıp kendini koruyabilir. Böyle bir uygulamayı ayarlardan kaldırmaya çalışınca düğme çalışmaz ya da ekran kapanır.

Google Play Protect bu tür uygulamaları tarayabilir. Google'ın yardım sayfasına göre zararlı bir uygulama bulursa sizi uyarır, kaldırmanızı ister ya da uygulamayı kendisi devre dışı bırakır. Ama bu, Play Store dışından gelen her uygulamayı yakalayacağı anlamına gelmez. Yeni ya da az bilinen bir uygulama bir süre fark edilmeden kalabilir.

Reklamlar telefonu da yorar. Arka planda sürekli reklam yükleyen bir uygulama işlemciyi ve interneti kullanır, bu yüzden pil çabuk biter ve telefon ısınır.

## Bunları yapmayın

- **Reklamdaki "telefonunuz virüslü" mesajına tıklamayın.** Temizleyici ya da antivirüs uygulamasını reklamdan kurmayın. Bunların bir kısmı sorunun kendisidir.
- **Tanımadığınız bir uygulamaya erişilebilirlik izni vermeyin.** Bu izin, uygulamaya ekrandakileri okuma ve sizin yerinize dokunma imkânı verir. Reklam yazılımı bu izni alırsa kendini kaldırmanızı da engelleyebilir.
- **Fabrika ayarlarına döndürmeyi ilk adım yapmayın.** Fotoğraflarınız, mesajlarınız, uygulama verileriniz silinir. Üstelik yedekten geri yüklerken aynı uygulama yeniden kurulabilir. Yani hem veri kaybedersiniz hem sorun kalabilir.
- **Play Protect'i kapatmayın.** Google'ın belgesine göre Play Protect zararlı uygulamaları tarar, sizi uyarır ve gerekirse devre dışı bırakır ya da kaldırır. Kapatmak, bunu da elinizden alır.

## Kendi başınıza deneyebileceğiniz tek şey

Hiçbir şeyi silmeden gözlem yapın.

Reklam çıktığında kapatmadan önce telefonun son uygulamalar ekranını açın (üç çizgi, kare ya da aşağıdan yukarı kaydırma, telefona göre değişir). Reklamın hemen arkasında hangi uygulamanın durduğuna bakın. Bir tarayıcı, bir oyun ya da hiç tanımadığınız bir ad görebilirsiniz. Bazı reklam uygulamaları kendini hemen kapatır, o yüzden birkaç reklamda tekrar bakmanız gerekebilir.

Bir de şunu not edin: Reklamlar ne zaman başladı ve o günlerde ne kurdunuz, hangi siteye izin verdiniz, telefonu birine verdiniz mi. Bana yazarsanız bu iki bilgi işi epey kısaltır. Bu adımda hiçbir şeyi kaldırmıyor ya da değiştirmiyorsunuz, o yüzden riski yok.

## Kalan iş ne

Reklamın hangi uygulamadan geldiğini bulup kaldırmak benim işim.

Telefon sizde kalır. Telefonu Windows bilgisayarınıza USB kabloyla bağlarsınız, ben o bilgisayara internet üzerinden bağlanıp telefonu incelerim. Hangi uygulamanın reklam gösterdiğini bulurum, gizlenmiş ya da kendini koruyan uygulamalar dâhil kaldırırım. Telefonu sıfırlamam, verileriniz yerinde kalır.

Bana yazarken telefonun modelini, reklamların yaklaşık ne zaman başladığını ve çıkan reklamın ekran görüntüsünü ya da fotoğrafını gönderin. Çoğu zaman bu kadarı kaynağın hangisi olduğunu söylemeye yeter.

Dürüst olmam gereken bir yer var. Reklam telefon üreticisinin kendi sisteminden geliyorsa bu virüs değildir, bir ayardır. Bunu kaldırmak yerine kapatmanın yolunu gösteririm, ama o noktada ortada temizlenecek bir şey yoktur. Ayrıca aynı uygulama sonradan başka bir yolla yeniden kurulursa reklamlar geri gelebilir. Bunu önceden söylemem gerekir.

Telefon aynı dönemde başka sorunlar da veriyorsa, örneğin banka uygulamaları açılmıyorsa, [bu ayrı bir sebepten olabilir](/blog/banka-uygulamasi-acilmiyor-guvenli-degil-hatasi).

Hangi işlere baktığımı ve işin nasıl ilerlediğini [Android destek sayfasında](/android-destek) yazdım.
