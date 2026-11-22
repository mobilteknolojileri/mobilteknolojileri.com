---
title: "Xiaomi Fastboot Ekranında Kaldı: Telefon Neden Açılmıyor?"
seoTitle: "Xiaomi Fastboot Ekranında Kaldı: Nedeni ve Ne Yapmalı"
description: "Xiaomi telefon turuncu FASTBOOT yazısında ya da tavşan ekranında takıldı. Bunun ne demek olduğunu, tuşa basılmasıyla sistem arızasının farkını ve hangi adımların telefonu geri dönülmez hâle getirdiğini yazdım."
seoDescription: "Xiaomi telefon Fastboot ekranında kaldıysa sebep tuş basması ya da sistem arızası olabilir. Farkını, yapılmayacakları ve tek güvenli adımı yazdım."
date: 2026-11-22
tags: ["android", "xiaomi", "fastboot", "açılmayan telefon", "bootloader", "redmi"]
category: "android"
draft: false
faq:
  - question: "Xiaomi'de Fastboot modundan nasıl çıkılır?"
    answer: "Önce kılıfı çıkarın, sonra güç tuşunu telefon kapanıp yeniden açılana kadar basılı tutun. Kaynaklar bunun için yedi ile on beş saniye arası bir süre veriyor, cihaza göre değişiyor. Telefon normal açılırsa ekrana yanlışlıkla bir tuş kombinasyonuyla girilmiştir. Hemen aynı ekrana dönüyorsa sorun sistemdedir ve tekrar tekrar denemenin faydası yok."
  - question: "Fastboot ekranında takılı kalan telefonun verileri silinir mi?"
    answer: "Ekranın kendisi veri silmez. Fotoğraflarınız ve uygulama verileriniz ayrı bir bölümde durur. Verileri silen şey, telefonu kurtarmak için yapılan işlemdir: bazı yazma seçenekleri her şeyi temizler. Bu yüzden bilgisayara bağlayıp bir şey denemeden önce hangi seçeneğin ne yaptığını bilmek gerekir."
  - question: "Videolardaki programlarla telefonu kendim düzeltebilir miyim?"
    answer: "Telefonunuzun tam modelini ve bölgesini bilmiyorsanız önermem. Videolardaki yöntemlerin çoğu tek bir model için hazırlanmıştır. Yanlış sürümü yazmak ya da veri silen bir seçeneği işaretlemek, açılmayan bir telefonu kurtarılması çok daha zor bir hâle getirebilir."
  - question: "Telefon her yeniden başlatmada Fastboot'a düşüyor, neden?"
    answer: "Sistemin açılışı bir yerde bozulmuştur. Sık anlatılan sebepler yarıda kalmış bir güncelleme ya da yazma işlemi, eksik veya bozuk bir açılış bölümü ve telefonun kendi yazılımıyla uyuşmayan bir sürüm. Bir de ses kısma tuşunun fiziksel olarak takılı kalması var. Bu durumda belirti aynıdır ama sorun yazılımda değil, tuştadır."
  - question: "Bootloader'ı yeniden kilitlersem telefon düzelir mi?"
    answer: "Hayır, tersi de olabilir. Kilit açıkken sistem bölge kontrolünü yapmaz, kilitlenince yapar. Telefonun kendi bölgesine ait olmayan bir yazılımla kilitlerseniz açılmayan ve kendi başınıza kurtaramayacağınız bir cihaz elde edebilirsiniz. Kilidi kapatmak ancak telefonun kendi orijinal yazılımı üzerindeyken güvenlidir."
  - question: "Telefonu göndermem gerekiyor mu?"
    answer: "Çoğunlukla gerekmez. Telefon sizde kalır, siz onu Windows bilgisayarınıza USB kabloyla bağlarsınız, ben de internet üzerinden o bilgisayara bağlanıp işi yaparım. Ekran hiç yanmıyorsa ya da tuş fiziksel olarak bozuksa bu yol işe yaramaz, bunu ilk yanıtta söylerim."
intent: "troubleshooting"
deviceBrand: "Xiaomi"
---

Fastboot, telefonun açılış sırasında girebildiği ve bilgisayarla konuşmaya yarayan alt seviye bir moddur. Xiaomi ve Redmi telefonlarda siyah ekranda turuncu `FASTBOOT` yazısı ya da kürklü şapkalı bir tavşan olarak görünür. Telefon bozuk olmak zorunda değil, sistem açılmadan bir adım önce durmuş demektir.

Siz de ekranı büyük ihtimalle böyle buldunuz: Telefonu açmaya çalıştınız, Mi logosu yerine bu ekran geldi, hiçbir tuş bir şey yapmıyor. İnternette arama yapınca da "tuşa basılmış, kolay" diyen videolarla "bilgisayara bağla, şu programı çalıştır" diyenler karışık çıkıyor.

İkisi de doğru olabilir, ama farklı durumlar için. Hangisinin sizin durumunuz olduğunu anlamak işin yarısı.

## Fastboot ekranı ne işe yarıyor

Fastboot, telefonun içindeki bölümlere doğrudan yazmak için var. Servisler ve geliştiriciler sistem yazmak, kurtarma yüklemek ya da bölümleri silmek için kullanır. Bilgisayara bağlanınca telefonda çalışan bir Android'e ihtiyaç kalmaz, sistem tamamen bozuk olsa bile bu mod cevap verir.

Görünüşü sürüme göre değişir. Eski MIUI sürümlerinde kürklü şapkalı tavşan çıkar, yenilerinde turuncu `FASTBOOT` yazısı. İkisi aynı moddur.

Bu moda düşmek tek başına kötü haber sayılmaz. Telefonun açılış yazılımı çalışıyor demektir, yani cihazla hâlâ konuşulabilir. Ekranın hiç yanmadığı bir telefon bundan çok daha zor bir durumdur.

## Tuşa basılmış mı, sistem mi bozuk

Fastboot'a iki yoldan girilir.

**Tuşla girmişsinizdir.** Xiaomi'de telefon kapalıyken güç ve ses kısma tuşuna birlikte basılı tutmak bu ekranı açar. Sıkı bir kılıf ya da cepte veya çantada sıkışan telefon bu kombinasyonu kendiliğinden oluşturabilir. Bu durumda telefon sağlamdır, sadece yanlış kapıdan girmiştir. Güç tuşuna uzun basınca normal açılır.

**Sistem sizi buraya düşürmüştür.** Telefonu kapatıp açtıkça aynı ekrana dönüyorsa, tuş yüzünden değildir. Açılışın bir yerinde bozulma vardır ve telefon sistemi başlatamayınca bir alt moda iner.

Ayrımı şöyle yapabilirsiniz:

- Kılıfı çıkarıp güç tuşuna uzun basınca telefon normal açılıyor ve sonraki açılışlarda da sorun çıkmıyorsa, ilk durumdur.
- Her yeniden başlatmada Fastboot'a dönüyorsa ikinci durumdur.
- Güncelleme ya da bir yazma işleminden hemen sonra başladıysa, ikinci durum olma ihtimali oldukça yüksek.

## Sistem tarafında ne bozulmuş olabilir

Sık anlatılan sebepler şunlar:

- Güncelleme ya da yazma işlemi yarıda kaldı. Pil bitti, kablo çıktı ya da biri telefonu zorla kapattı.
- Açılış için gereken bölümlerden biri eksik ya da bozuk.
- Telefona kendi bölgesine ait olmayan bir yazılım yüklenmiş ve kilit sonradan kapatılmış. Aşağıda ayrıca anlatıyorum.
- Ses kısma tuşu fiziksel olarak takılı kalıyor. Telefon her açılışta tuşa basılıyor sanıp Fastboot'a giriyor. Belirti aynı ama arıza yazılımda değil.

Hangisinin olduğunu ekrandan anlayamazsınız. Anlamak için cihazın kendisine bakmak gerekir.

## Yapmamanız gerekenler

Fastboot, bilgisayarla konuşmak için tasarlanmış bir geliştirici modudur. İnternette gördüğünüz çözümlerin çoğu bu yüzden bilgisayar gerektirir. Üç şeyden uzak durun.

**Videolardaki araçlar ve hazır script'ler.** Bir model için hazırlanmış yöntem yanındaki model için çalışmaz. Aynı adla satılan telefonun farklı bölge sürümleri olabilir ve yazılımları birbirinin yerine geçmez.

**Veri silen seçenekler.** Yazma araçlarının bir kısmında "tümünü temizle" gibi bir seçenek var ve işaretliyse fotoğraflarınız, mesajlarınız ve uygulama verileriniz gider. Geri dönüşü yoktur.

**Kilidi yeniden kapatmak.** Bu en tehlikelisi. Xiaomi'de kilit açıkken yazılımın bölgesine bakılmaz, kilitlenince bakılır. Telefona kendi bölgesine ait olmayan bir yazılım yüklüyken kilidi kapatırsanız telefon açılmaz hâle gelebilir. Bu noktadan sonra kurtarma, Xiaomi'nin yalnızca yetkili hesaplara açtığı bir moda kalır ve iş epey zorlaşır.

## Tek güvenli adım

Sıfır riskli bir şey var, onu deneyin.

1. Telefonu kılıfından çıkarın ve ses tuşlarının basılı kalmadığına bakın.
2. Güç tuşunu basılı tutun. Telefon kapanıp yeniden açılana kadar bırakmayın. Kaynaklar yedi ile on beş saniye arasında bir süre veriyor, o yüzden gerekirse biraz daha tutun.
3. Telefon normal açılırsa mesele bitti. Fastboot'a yanlışlıkla girilmişti.

Telefon aynı ekrana dönüyorsa bu adımı tekrar tekrar denemeyin. Bir kez yeterli, sonuç aynı çıkıyorsa sorun sistemde.

## Kalan iş ne

Sistem tarafında bir bozulma varsa kalanı bilgisayarla ve kabloyla yapılan bir iştir. Telefonun hangi modda cevap verdiğine bakarım, tam modeline ve bölgesine uygun yazılımı seçerim ve doğru sırayla yazarım.

Telefon sizde kalır. Windows bilgisayarınıza USB kabloyla bağlarsınız, ben internet üzerinden o bilgisayara bağlanıp işi yaparım. Telefon bana gelmez.

Bana yazarken telefonun modelini, ekranın fotoğrafını ya da ekran görüntüsünü ve bozulmadan önce ne olduğunu belirtin: güncelleme, kilit açma, düşme, ROM yükleme. Bunlar sorunun hangi taraftan geldiğini gösterir.

Söz veremeyeceğim şeyler de var. Veriler çoğu zaman yerinde kalır ama bazı durumlarda telefonu kurtarmanın tek yolu veriyi silmektir. O noktada dururum, sizinle konuşurum ve siz onaylamadan veri silen bir adım atmam. Ses tuşu fiziksel olarak bozuksa ya da ekran hiç yanmıyorsa bu yazılım işi değil, onu da baştan söylerim.

Hangi işlere baktığımı ve işin nasıl ilerlediğini [Android destek sayfasında](/android-destek) yazdım.

## Benzer ekranlar

Fastboot tek başına gelmeyebilir. Güncellemeden sonra telefon açılmıyorsa [HyperOS güncellemesi sonrası açılmayan telefonları](/blog/hyperos-guncellemesi-sonrasi-telefon-acilmiyor) ayrı yazdım. İngilizce seçeneklerin olduğu bir kurtarma ekranı görüyorsanız [Main Menu ekranı yazısına](/blog/xiaomi-main-menu-ekraninda-kaldi) bakın. Ekranda "NV data is corrupted" yazıyorsa [o hatanın ne olduğunu da ayrı anlattım](/blog/nv-data-is-corrupted-hatasi).
