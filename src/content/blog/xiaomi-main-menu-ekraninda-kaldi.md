---
title: "Xiaomi Main Menu Ekranında Kaldı: Wipe Data'ya Basmayın"
seoTitle: "Xiaomi Main Menü Ekranından Çıkış: Wipe Data'ya Basmayın"
description: "Xiaomi telefon Main Menu ekranında kaldı. Bu ekranın ne olduğunu, seçeneklerin ne işe yaradığını, telefonun neden oraya düştüğünü ve hangi satıra basarsanız verilerin silineceğini yazdım."
seoDescription: "Xiaomi telefon Main Menu ekranında kaldıysa Wipe Data'ya basmayın, veriler silinir. Seçeneklerin anlamı, sebepleri ve tek güvenli adım burada."
date: 2026-11-22
tags: ["android", "xiaomi", "main menu", "recovery", "wipe data", "redmi", "hyperos"]
category: "android"
draft: false
faq:
  - question: "Xiaomi'de Main Menu ekranından nasıl çıkılır?"
    answer: "Ses tuşlarıyla Reboot satırına gelip güç tuşuyla seçin, ardından Reboot to System'i seçin. Telefon normal açılırsa mesele bitmiştir. Kılıf ses tuşuna basıyor olabilir, onu da çıkarın. Telefon yeniden aynı ekrana dönüyorsa sorun sistemde ya da tuştadır."
  - question: "Main Menu'deki Wipe Data neyi siler?"
    answer: "Telefondaki her şeyi: fotoğraflar, videolar, mesajlar, uygulamalar ve verileri. Onay sorusuna evet derseniz geri dönüşü yoktur. Bazı HyperOS sürümlerinde bu seçenek menüde hiç görünmeyebilir."
  - question: "Connect with MIAssistant ne işe yarar, basmalı mıyım?"
    answer: "Telefonu USB kabloyla bilgisayara bağlayıp sistemi dışarıdan yüklemek için var. Bilgisayar tarafında doğru dosya ve program yoksa tek başına bir işe yaramaz. Yanlışlıkla girdiyseniz Back to Main Menu ile geri çıkabilirsiniz."
  - question: "Reboot dedim ama telefon yine Main Menu'ye dönüyor, neden?"
    answer: "Üç sebep olabilir. Ses açma tuşu basılı kalıyordur, telefon sistemi başlatamıyordur ya da yazılım telefonun bölgesiyle uyuşmuyordur. İlki donanım, diğer ikisi yazılım sorunudur. Menüde ses açma tuşuna dokunmadığınız hâlde seçim kendi kendine kayıyorsa tuş takılıdır."
  - question: "HyperOS 3 güncellemesinden sonra gelen Main Menu uyarısı ne demek?"
    answer: "Ekranın altında kırmızı bir yazıyla bu sistem sürümünün cihaza kurulamadığı bildiriliyor. Kullanıcıların aktardığına göre bu, Çin için üretilmiş telefonlara sonradan global yazılım yüklenmiş olduğunda görülüyor. Sistem, telefonun donanımının bölgesiyle yazılımın bölgesini karşılaştırıyor ve uyuşmazsa güncellemeyi kabul etmiyor. Bunu doğrulayabileceğim resmî bir Xiaomi açıklaması bulamadım."
  - question: "Verilerim gider mi?"
    answer: "Main Menu ekranına düşmek veri silmez. Verileri silen, Wipe Data'yı seçmek ya da telefonu kurtarmak için veri silen bir sürüm yazmaktır. Önce telefonun neden orada olduğuna bakarım ve siz onaylamadan veri silen bir adım atmam."
intent: "troubleshooting"
deviceBrand: "Xiaomi"
---

Main Menu, Xiaomi telefonların kurtarma (recovery) ekranıdır. Siyah zeminde, ses tuşlarıyla gezilen birkaç İngilizce satırdan oluşur ve telefon sistemi başlatamadığında ya da bu ekrana bilerek girildiğinde açılır.

Büyük ihtimalle telefonunuzu açtınız ve logo yerine bu ekranla karşılaştınız. Seçeneklerden biri `Wipe Data` ve "sıfırlarsam düzelir" diye düşünmek çok kolay.

Telefon düzelebilir, ama `Wipe Data` bunu her şeyinizi silerek yapar. Yazının kalan kısmı bu yüzden önce o satırdan başlıyor.

## Wipe Data'ya basmayın

`Wipe Data` telefondaki her şeyi siler: fotoğraflar, videolar, mesajlar, uygulamalar ve içlerindeki veriler. Onay ekranına geçip kabul ederseniz geri dönüşü yoktur. Ben de geri getiremem.

Telefonun açılmaması verilerin gittiği anlamına gelmez. Veriler sistemden ayrı bir bölümde durur ve çoğu zaman yerindedir. Bu ekranda veriyi silen şey o satıra basmaktır.

## Ekrandaki seçenekler ne yapıyor

Hangi satırların göründüğü sürüme göre değişir, en fazla dört seçenek görürsünüz.

- **Reboot.** İçinde `Reboot to System` ve `Back to Main Menu` bulunur. Telefonu normal şekilde yeniden başlatır, veri silmez.
- **Wipe Data.** Yukarıda anlattığım gibi, her şeyi siler. Bazı HyperOS sürümlerinde menüde hiç görünmeyebilir.
- **Connect with MIAssistant.** Telefonu USB kabloyla bilgisayara bağlayıp sistemi dışarıdan yüklemek için kullanılır. Bilgisayarda doğru dosya ve program yoksa ekran açık kalır, bir şey olmaz.
- **Safe Mode.** Yalnızca sistem uygulamalarıyla açılan bir teşhis modu. Her recovery sürümünde bulunmuyor.

Gezinme ses tuşlarıyla, seçme güç tuşuyla yapılır. Yanlışlıkla bir alt menüye girdiyseniz `Back to Main Menu` ile çıkabilirsiniz.

## Bu ekran neden var

Recovery, sistem açılmasa bile çalışan küçük ayrı bir yazılımdır. Telefon açılamadığında ya da kullanıcı kendi isteğiyle girdiğinde sıfırlama, yeniden başlatma ve sistem yükleme gibi işleri buradan yapar. Yani ekranın görünmesi telefonun öldüğünü göstermez. Açılış yazılımı ve bu küçük sistem çalışıyor, ana Android başlamıyor.

Bilerek girmek için telefon kapalıyken güç ve ses açma tuşuna birlikte basılı tutulur. Bu yüzden çoğu zaman "ben bir şey yapmadım" diyenler de haklıdır: Tuşa bastıran şey bir kılıf ya da cep olabilir.

## Telefon buraya neden düştü

Beş sebep görürüm.

**Kılıf ya da cep.** Telefon kapalıyken güç ve ses açma tuşuna birlikte basılı tutulunca Main Menu açılır. Sıkı bir kılıf ya da cepteki telefon bunu kendiliğinden yapabilir.

**Ses açma tuşu basılı kalıyor.** Telefon her açılışta tuşa basılıyor sanıp aynı ekrana girer. Menüde ses tuşuna dokunmadığınız hâlde seçim kendi kendine kayıyorsa tuş takılıdır. O zaman sorun yazılımda değil, tuştadır.

**Yarıda kalan güncelleme.** Güncelleme sırasında pil bitti, telefon kapandı ya da yazma işlemi tamamlanmadı.

**Sistem başlayamıyor.** Telefonun dosyalarından biri bozulmuş ya da eksik olabilir. Telefon açılmayı dener, olmayınca kurtarma ekranına iner.

**Yazılım telefonun bölgesiyle uyuşmuyor.** Bunun en güncel örneği HyperOS 3 ile geldi, hemen aşağıda anlatıyorum.

### HyperOS 3 sonrası gelen uyarı

HyperOS 3'e geçerken bazı kullanıcılar Main Menu ekranında kaldı. Ekranın altında kırmızı bir uyarı çıkıyor ve sistem sürümünün bu cihaza kurulamadığını söylüyor. Kullanıcıların farklı kelimelerle aktardığı bir metin bu, o yüzden birebir yazmıyorum.

Anlatılanların ortak noktası, Çin için üretilmiş bir telefona sonradan global yazılım yüklenmiş olması. Bu durumda yeni sürüm telefonun donanım bölgesiyle yazılımın bölgesini karşılaştırıyor ve uyuşmazlık görünce güncellemeyi kabul etmiyor. Bu denetimin Xiaomi'de eskiden beri bulunduğu biliniyor. Hangi modellerin etkilendiğini ve HyperOS 3'ün bunu ne kadar sıkılaştırdığını resmî bir kaynakla doğrulayamadım, o yüzden model adı vermiyorum.

Kullanıcılar telefonu sıfırlayınca bazen açıldığını ama aynı güncelleme yeniden gelince aynı yere düştüğünü anlatıyor. Telefon açıldıysa aynı güncellemeyi hemen yeniden yüklemeyin.

## Tek güvenli adım

1. Kılıfı çıkarın.
2. Ses tuşlarıyla `Reboot` satırına gelin, güç tuşuyla seçin.
3. Açılan alt menüde `Reboot to System`'i seçin ve bekleyin.

Telefon normal açılıyorsa mesele kapanmıştır. Güncelleme tekrar gelirse hemen yüklemeyin, nedenini yukarıda yazdım.

Telefon doğrudan Main Menu'ye dönüyorsa şu üçünden biridir: Ses açma tuşu basılı kalıyordur, sistem başlayamıyordur ya da yazılım uyuşmuyordur. Bu noktada `Wipe Data` aklınıza gelecektir, ona basmayın. Telefon Fastboot ekranına geçtiyse [Fastboot yazısına](/blog/xiaomi-fastboot-ekraninda-kaldi) bakın.

## Kalan iş ne

Telefon `Reboot to System` ile açılmıyorsa kalan iş kabloyla ve bilgisayarla yapılır. Telefonun hangi modda cevap verdiğine bakarım, tam modeline ve bölgesine uygun yazılımı seçerim ve doğru sırayla yazarım.

Telefon sizde kalır, Windows bilgisayarınıza USB kabloyla bağlarsınız, ben internet üzerinden o bilgisayara bağlanıp işi yaparım.

Bana yazarken telefonun modelini, Main Menu ekranının fotoğrafını ya da ekran görüntüsünü ve bozulmadan önce ne olduğunu belirtin. Alttaki kırmızı bir uyarı varsa onu da okunacak şekilde çekin.

Söz veremeyeceğim şeyler var. Veriler çoğu zaman yerindedir, ama yazılım bölgeyle uyuşmadığında telefonu kurtarmanın tek yolu bazen veriyi silmektir. O noktada dururum ve sizinle konuşurum, siz onaylamadan silmem. Ses tuşu fiziksel olarak bozuksa bu bir donanım işidir ve onu yapmam.

Hangi işlere baktığımı ve işin nasıl ilerlediğini [Android destek sayfasında](/android-destek) yazdım.

## Benzer ekranlar

Güncelleme sonrası açılmayan telefon için [HyperOS yazısına](/blog/hyperos-guncellemesi-sonrasi-telefon-acilmiyor) bakın. Ekranda "NV data is corrupted" geçiyorsa [o hata ayrı bir konu](/blog/nv-data-is-corrupted-hatasi).
