---
title: "Xiaomi Bootloader Kilidi Açma 2026: Neden Zorlaştı, Neye Mal Olur"
seoTitle: "Xiaomi Bootloader Kilidi Açma 2026: Şartlar ve Bedeli"
description: "Xiaomi bootloader kilidini açmak HyperOS'ta neden zorlaştı, hangi şartlar var ve kilit açılınca banka uygulaması, garanti ve verileriniz için ne kaybedersiniz. Kararı vermeden önce bilmeniz gerekenler."
seoDescription: "HyperOS'ta Xiaomi bootloader kilidi açma şartları, bekleme ve kota düzeni, kilit açılınca verilerde ve uygulamalarda değişenler. Adım adım rehber değildir."
date: 2026-11-22
tags: ["android", "xiaomi", "bootloader", "hyperos", "kilit açma", "çin sürümü"]
category: "android"
draft: false
faq:
  - question: "Xiaomi bootloader kilidi açılınca veriler silinir mi?"
    answer: "Evet. Kilit açılırken telefon sıfırlanır ve içindeki her şey silinir. Xiaomi'nin kendi duyurusu da işlemden önce verilerin bilgisayara yedeklenmesini ister. Yedeksiz başlamayın."
  - question: "Mi Community izni olmadan kilit açılır mı?"
    answer: "Resmî yol izin ister. İzinsiz yollar üreticinin kapattığı açıklara dayanır, bu yüzden bir güncellemeyle çalışmaz hâle gelir ve telefonunuzda ne bıraktıkları belli olmaz. Bu yazıda onları anlatmıyorum."
  - question: "Çin sürümü Xiaomi telefonun kilidi açılır mı?"
    answer: "Xiaomi'nin global topluluk duyurusuna göre Çin telefonu ya da Çin hesabı global izinle açılamıyor. Çin tarafındaki başvuru ayrı ve daha sıkı kurallara bağlı. Telefonun hangi sürümde olduğunu Ayarlar'dan görebilirsiniz."
  - question: "Kilit açılınca banka uygulaması çalışmaz mı?"
    answer: "Çoğu zaman uyarı verir ya da hiç açılmaz, çünkü uygulama telefonun kilit durumuna bakar. Bazı durumlarda sonradan çalışır hâle getirilebilir, bazılarında getirilemez. Ayrıntıyı ayrı bir yazıda anlattım."
  - question: "Kilidi tekrar kapatmak güvenli mi?"
    answer: "Telefonda yüklü yazılım üreticinin orijinal sürümüyle bire bir uyuşuyorsa kapatılabilir. Farklı ya da değiştirilmiş bir yazılımla kapatılırsa telefon açılmaz hâle gelebilir. Kilidi kapatmadan önce yüklü yazılımın ne olduğunu bilmek gerekir."
intent: "guide"
deviceBrand: "Xiaomi"
---

Bootloader, telefonun açılırken sistemden önce çalışan küçük yazılımıdır. Xiaomi telefonlarda bu yazılım kilitli gelir ve kilit kapalıyken telefon yalnızca Xiaomi'nin imzaladığı yazılımı çalıştırır. Kilidi açmak, telefona başka bir yazılım yüklemenin ya da sistemde derin bir işlem yapmanın ilk adımıdır ve Xiaomi bunu HyperOS'ta eskisine göre çok daha sıkı kurallara bağladı.

Bu yazı kilidin nasıl açıldığını adım adım anlatan bir rehber değil. Hangi şartların arandığını, neden uzun sürebildiğini ve kilit açılınca neyi kaybettiğinizi anlatıyor. Karar vermeden önce okumanızı isterim.

Bu kurallar zaman içinde değişiyor. Aşağıdakilerin kaynağı Xiaomi'nin kendi topluluk duyuruları, tarihlerini de yanlarına yazdım.

## Neden eskisi kadar kolay değil

Eskiden bir Xiaomi hesabıyla başvurup birkaç gün beklemek yetiyordu. HyperOS'ta düzen şöyle:

- Başvuru izne bağlı. Xiaomi'nin Ocak 2024 tarihli duyurusuna göre izin Xiaomi Community üzerinden isteniyor, iznin ardından telefon ve hesap eşleştiriliyor.
- Günlük bir başvuru kotası var. Aynı duyuru "kota doldu" uyarısı alırsanız ertesi gün Pekin saatiyle yeniden denemenizi söylüyor. Kotanın büyüklüğünü ve saat penceresini Xiaomi yazmıyor, o yüzden bir rakam vermiyorum.
- Hesap ve telefon uyumlu olmalı. Mart 2024 tarihli duyuruya göre global telefon, üzerinde resmî global yazılım ve global hesap gerekiyor. Hesabın 30 günden eski olması isteniyor. İzin geldikten sonra en az iki gün beklemeniz öneriliyor, yoksa işlem başarısız olabiliyor.
- Hesap başına açılabilecek telefon sayısı sınırlı. Duyuru yılda üç telefon diyor, başka kaynaklar farklı sayılar veriyor. Rakam değişmiş olabilir, bu yüzden kendiniz kontrol edin.
- Bazı hesaplarda işlemden önce ek bekleme süresi çıkabiliyor. Bunu yalnızca topluluk kullanıcılarının anlattığı örneklerden biliyorum, Xiaomi'nin sayfasında net bir süre yok.

## Çin sürümü telefonlar

Xiaomi'nin global topluluk duyurusu açık: Çin'e özel telefon, Çin hesabı, resmî Çin yazılımı ya da Çin'den alınmış telefon global izinle açılamıyor. Telefonun global yazılım taşıması da bunu değiştirmiyor. Bu telefonlar için Çin topluluğundan başvurmak gerekiyor ve o taraf ayrı, daha sıkı kurallarla çalışıyor.

Telefonunuzun hangi sürümde olduğunu Ayarlar'da `Telefon hakkında` bölümündeki sürüm kodundan görebilirsiniz. Kodun sonundaki MI, EU, TR, IN gibi harfler global sürümleri, CN ise Çin sürümünü gösterir. Çin sürümü telefonlarda yapılabilecekleri [Çin sürümü telefona global ROM](/blog/cin-surumu-telefona-global-rom) yazısında anlattım.

Videolarda "izinsiz açma" ve "bypass" diye anlatılan yöntemleri bilerek yazmıyorum. Üreticinin kapattığı açıklara dayanıyorlar, bir güncelleme sonrası çalışmaz hâle gelebiliyorlar ve telefonunuzun durumu hakkında size bir şey söylemiyorlar.

## Kilit açılınca ne kaybedersiniz

Asıl soru bu. Kilidi açmak telefonu bir kez sıfırlar ve sonrasında bazı şeyler değişir.

**Verileriniz.** Kilit açılırken telefon sıfırlanır, her şey silinir. Xiaomi'nin kendi duyurusu da işlemden önce bilgisayara yedek almanızı söylüyor. Yedeksiz başlamayın.

**Banka ve resmî uygulamalar.** Uygulamalar telefonun kilit durumuna bakar. Kilit açıksa banka uygulaması uyarı verebilir ya da hiç açılmayabilir, e-Devlet gibi resmî uygulamalarda da benzer sorunlar çıkabilir. Bazı durumlarda sonradan çalışır hâle getirilebilir, bazılarında getirilemez. Ayrıntıyı [bootloader kilidi açık telefonda uygulamalar](/blog/bootloader-kilidi-acik-telefonda-uygulamalar) yazısında, bankalara özel kısmı da [banka uygulaması açılmıyor](/blog/banka-uygulamasi-acilmiyor-guvenli-degil-hatasi) yazısında anlattım.

**Yayın uygulamaları.** Bazı cihazlarda Netflix gibi uygulamalar görüntüyü düşük çözünürlükte gösterebilir. Bu cihazdan cihaza değişir.

**Garanti.** Kilidi açmak garantiyi etkileyebilir. Hangi koşulda etkilediği satıcıya ve ülkeye göre değiştiği için kesin konuşamam. Önce satıcıya sorun.

**Güvenlik.** Xiaomi'nin kendi duyurusu da kilit açmanın güvenlik riskleri taşıdığını yazıyor. Kilit kapalıyken telefon yalnızca imzalı yazılımı çalıştırıyor, açıkken bu güvence yok.

## Kilidi geri kapatmak neden tehlikeli

Kilidi tekrar kapatmak mümkün ama yalnızca yüklü yazılım orijinal sürümse güvenli. Telefonda farklı bir yazılım, başka bir bölgenin sürümü ya da değiştirilmiş bir sistem varken kilidi kapatırsanız telefon açılmayabilir. Bu durumdaki telefonlar açılış ekranında ya da kurtarma ekranında kalır ve kurtarmak epey zorlaşır. Kilidi kapatmadan önce yüklü yazılımın ne olduğunu bilmek gerekiyor.

## Güvenle yapabilecekleriniz

Karar vermeden önce telefonunuzun hangi sürümde olduğuna bakın: Ayarlar, `Telefon hakkında`, sürüm bilgisi. Çin sürümü yazıyorsa bu yazıdaki yolun büyük kısmı kapalı demektir.

Bir de yedek alın. Fotoğrafları ve belgeleri bilgisayara ya da bulut hesabına aktarın. Kilit açılacaksa ilk gidecek şey bunlar.

## Kalan iş ne

Kilit açmak, kilidi kapatmak ve sonrasında uygulamaları yeniden çalışır hâle getirmek bana yazabileceğiniz işlerden. Telefon sizde kalır, Windows bilgisayarınıza USB kabloyla bağlarsınız, ben o bilgisayara internetten bağlanırım.

Hesap izni ve bekleme süresi Xiaomi'nin elinde, benim değil. O yüzden izin ne zaman çıkar, söz veremem. Çin sürümü telefonlarda kilit açmanın mümkün olup olmadığını modele bakarak söylerim, olmayacaksa olmayacağını da.

Önce neyi kaybedeceğinizi konuşmak isterim. Garanti, veriler ve bazı uygulamalar gidebilir. Bunları duyunca vazgeçen de oluyor, o da iyi bir sonuç.

Yazarken telefonun modelini, Ayarlar'daki sürüm bilgisini ve neden kilit açmak istediğinizi belirtin. Hangi işlere baktığımı ve işin nasıl ilerlediğini [Android destek sayfasında](/android-destek) yazdım.
