---
title: "NV Data Is Corrupted Hatası: Xiaomi Telefon Neden Kurtarma Ekranına Düşüyor"
seoTitle: "NV Data Is Corrupted Hatası Nedir? Xiaomi ve Redmi"
description: "Xiaomi telefon kırmızı yazıyla 'NV data is corrupted' deyip kurtarma ekranına dönüyorsa telefonun modem ayarları okunamıyor demektir. Nedenini, neye dokunmamanız gerektiğini ve kalan işi yazdım."
seoDescription: "Xiaomi telefonda kırmızı 'NV data is corrupted' yazısı ne demek, neden olur, fabrika ayarı işe yarar mı ve güvenle yapabileceğiniz tek adım nedir."
date: 2026-11-22
tags: ["android", "xiaomi", "nv data is corrupted", "hyperos", "modem", "açılmayan telefon"]
category: "android"
draft: false
faq:
  - question: "NV data is corrupted ne demek?"
    answer: "Telefonun radyo yapılandırması, yani modemin çalışması için gereken ayarlar okunamıyor ya da bozulmuş demektir. Telefon bu ayarlar olmadan şebekeye bağlanamaz ve çoğu modelde açılışı da tamamlayamaz. Bu yüzden kurtarma ekranına düşer."
  - question: "Fabrika ayarlarına dönmek NV data hatasını çözer mi?"
    answer: "Çözmesini beklemeyin. Sıfırlama sistemi ve verilerinizi siler ama bozulan modem ayarlarını onarmaz. Yabancı forumlarda hatanın sıfırlamadan hemen sonra başladığını anlatan kullanıcılar da var. Üstelik sıfırladığınız anda fotoğraflarınız ve mesajlarınız gider."
  - question: "Verilerim silinir mi?"
    answer: "Hata kendiliğinden veri silmez. Modem ayarları ayrı bir bölümde durur, fotoğraflarınız ve mesajlarınız başka bir bölümde. Kurtarma ekranında veriyi silen satır 'Wipe data'. O satıra dokunmazsanız veriler yerinde kalır."
  - question: "Videolardaki NV fix araçlarını denemeli miyim?"
    answer: "Önermem. Bu araçlar ve dosyalar belirli bir model ve sürüm için hazırlanır. Yanlış dosya, telefonun elinizde kalan tek açılabilir hâlini de bozabilir. Hatanın nedeni modeline ve yüklü yazılıma göre değiştiği için önce neye bakıldığını bilmek gerekir."
  - question: "Telefon sürekli kurtarma ekranına dönüyor, ne yapmalıyım?"
    answer: "Ekranda Reboot satırını seçip telefonun açılıp açılmadığına bakın. Açılmıyorsa başka bir şeye dokunmayın. Modeli, ekranın fotoğrafını ve hatadan önce ne yaptığınızı bana yazın."
intent: "troubleshooting"
deviceBrand: "Xiaomi"
---

Kurtarma ekranının altında kırmızı harflerle `NV data is corrupted` yazıyorsa telefonun radyo ayarlarının tutulduğu alan bozulmuş ya da okunamıyor demektir. Bu ayarlar olmadan modem çalışmaz, telefon da genellikle açılmaz.

Çoğu zaman bir güncellemeden ya da sıfırlamadan sonra olur. Telefon açılmıyor, kapanıp kurtarma ekranına dönüyor. Yeniden başlatıyorsunuz, yine aynı ekran. Açılsa bile şebeke yok, SIM görünmüyor.

Bu telefonlara sık bakarım. Ekran korkutucu ama çoğu zaman verileriniz yerinde. Önce neye dokunmamanız gerektiğini yazayım.

## Önce şuna dokunmayın

Kurtarma ekranında (Xiaomi'nin Main Menu dediği İngilizce menü) `Wipe data` satırı var. Bu hatada ilk akla gelen o satırdır, ama çözüm olmaz.

- Telefonun sistemini ve verilerini siler. Fotoğraflar, WhatsApp geçmişi, uygulamalar gider.
- Bozulan modem ayarlarını onarmaz. Hata çoğu zaman sıfırlamadan sonra da sürer.
- Yurt dışı forumlarda hatanın bir sıfırlamadan hemen sonra başladığını anlatanlar bile var. Dolayısıyla sıfırlama çözüm olmadığı gibi bazı telefonlarda sorunun kaynağı olabilir.

Videolarda gördüğünüz "NV fix" araçları, modem dosyaları ve rastgele ROM'lar için de aynı şeyi söyleyeyim. Bunlar tek bir model ve tek bir yazılım sürümü için hazırlanır. Aynı adı taşıyan başka bir sürüme yazarsanız telefonun elinizdeki tek açılabilir hâlini de bozabilirsiniz. Bu geri alınamayabilir.

## Bu hata nasıl görünür

- Kurtarma ekranında altta kırmızı `NV data is corrupted` yazısı.
- Telefon açılış logosundan sonra kendiliğinden kurtarma ekranına dönüyor.
- Telefon açılıyorsa bile şebeke yok, operatör adı görünmüyor, SIM kartı tanımıyor.

Ekranda yazı yoksa ve telefon logoda takılı kalıyorsa başka bir sorundur. O durumu [HyperOS güncellemesi sonrası açılmayan telefon](/blog/hyperos-guncellemesi-sonrasi-telefon-acilmiyor) yazısında anlattım. Telefon `fastboot` yazılı bir ekranda duruyorsa [Fastboot ekranı yazısına](/blog/xiaomi-fastboot-ekraninda-kaldi), Main Menu ekranında duruyorsa [Main Menu yazısına](/blog/xiaomi-main-menu-ekraninda-kaldi) bakın.

## Neden olur

Telefonun içinde iki ayrı yazılım parçası var. Biri Android, yani gördüğünüz sistem. Öbürü modem, yani telefonun şebekeyle konuşmasını sağlayan ayrı bir işlemci ve onun yazılımı. Modemin ayarları, telefonun depolama alanında ayrı bir bölümde saklanır. Hata bu bölümle ilgili.

Açılışta sistem bu bölümü okur. Okuyamazsa ya da içeriği telefonla uyuşmuyorsa `NV data is corrupted` uyarısını verir ve kurtarma ekranına döner.

Bölümün bozulmasının, bildiğim kadarıyla, birkaç yaygın yolu var:

- Güncelleme yarıda kesildi ya da yanlış sürüm yazıldı.
- Telefon başka bir bölgenin yazılımıyla çalışıyordu, kendi bölgesinin güncellemesi gelince modem ayarlarıyla yazılım uyuşmadı.
- Sistem ya da modem tarafı sonradan değiştirilmişti, sonraki güncelleme ya da sıfırlama bunu bozdu.
- Kurtarma ekranından sıfırlama sırasında bu bölüm bozuldu.

Hangi çipli telefonlarda görüldüğü konusunda net bir liste yok. Forumlarda ve videolarda en çok MediaTek işlemcili Xiaomi ve Redmi modellerinde karşılaşıldığı yazılıyor, Qualcomm'lu telefonlarda da bildirenler var, ama oran vermek mümkün değil. HyperOS 3 güncellemesinden sonra bildirenler de oldu. Hatayı güncellemenin kendisi mi çıkardı, yoksa telefonun önceki durumunu mu ortaya çıkardı, bunu bilmiyorum. Kimde çıkacağını önceden bilmek de mümkün değil.

Telefonun ekranı yanıyor ve kurtarma ekranı görünüyorsa cihaz canlıdır. Sorun çoğu zaman yazılım tarafındadır.

## Kendi başınıza deneyebileceğiniz tek şey

Kurtarma ekranında `Reboot` ya da `Reboot to system` satırını seçin. Telefon açılırsa iyi. Açılmazsa tekrar tekrar denemeyin, ekranda başka satıra da dokunmayın.

Telefonu şarja takıp birkaç dakika bırakmak da zarar vermez. Bunların dışında kendi başınıza yapacağınız bir şey bu hatada işe yaramaz, çoğu zaman da zarar verir.

## Kalan iş ne

Kalanı kabloyla ve bilgisayarla yapılan bir iş. Telefon sizde kalır, Windows bilgisayarınıza USB kabloyla bağlarsınız, ben o bilgisayara internetten bağlanıp işi yaparım.

Zor kısım, o telefonun modeline ve bölgesine ait doğru dosyayı bulmak. Aynı adla satılan iki telefonun modem yazılımı farklı olabilir ve birinin dosyası öbürüne yazılmaz.

Veri silmeden çözebildiğim durumlar var, silmeden çözemediğim durumlar da. Hangisinin sizin telefonunuz olduğu önceden bilinmez. Verilerinizi silecek bir adıma sizinle konuşmadan geçmem. Bazı telefonlarda hiç düzelmeyebilir, bunu da baştan söylerim.

Yazarken şunları belirtin: Telefonun modeli, ekranın fotoğrafı ve hatadan önce ne yaptığınız (güncelleme, sıfırlama, ROM değişikliği). Çoğu zaman bu kadarı yetiyor.

Hangi işlere baktığımı ve işin nasıl ilerlediğini [Android destek sayfasında](/android-destek) yazdım.
