---
title: "Kafe ve Restoran İçin Mobil Uygulama Gerekli mi? Gerçek Bir Proje Örneği"
seoTitle: "Kafe ve Restoran İçin Mobil Uygulama Gerekli mi?"
description: "Tek şubeli bir kafe için uygulama çoğu zaman ilk ihtiyaç değil. Ne zaman işe yaradığını, ne zaman web sitesi ve QR menünün yettiğini bir frozen yogurt dükkânı için yaptığım projeyle anlattım."
seoDescription: "Kafe ve restoran için mobil uygulama ne zaman işe yarar, ne zaman web sitesi ve QR menü yeter? Yaptığım gerçek bir projenin sonuçlarıyla anlattım."
date: 2026-11-22
tags:
  [
    "mobil uygulama",
    "kafe uygulaması",
    "restoran uygulaması",
    "sadakat programı",
    "qr menü",
    "vaka çalışması",
  ]
category: "mobile"
draft: false
faq:
  - question: "QR menü için uygulama gerekir mi?"
    answer: "Hayır. QR menü, kodu okutunca açılan bir web sayfasıdır. Müşterinin bir şey kurması gerekmez. Menüyü sık değiştiriyorsanız sayfanın bir panelden güncellenmesi yeterli."
  - question: "Kafe uygulaması kaç kişi indirir?"
    answer: "İşletmenin büyüklüğüne ve uygulamayı nasıl tanıttığına bağlı. Tek şubeli bir dükkân binlerce indirme beklememeli. Yaptığım Get Yo uygulaması 26 Ağustos 2026 itibarıyla Google Play'de 10+ indirmedeydi. Bu yüzden uygulamayı değerlendirirken düzenli müşterinin işine yarayıp yaramadığına bakmak gerekir."
  - question: "Sipariş için kendi uygulamam mı olmalı, yemek platformları mı?"
    answer: "Platformlar sizi yeni müşteriye ulaştırır, kendi uygulamanız ise sizi zaten tanıyan müşteriye hizmet eder. Müşterilerinizin çoğu düzenli geliyorsa kendi sipariş sisteminiz anlamlı olabilir. Yeni müşteri arıyorsanız platformlar daha hızlı sonuç verir."
  - question: "Uygulama ile web sitesi aynı menüyü gösterebilir mi?"
    answer: "Evet, doğru kurulursa ikisi aynı veriyi okur. Get Yo'da personel bir tadı panelden bir kez düzenliyor, uygulama da web sitesi de aynı anda değişiyor. Böylece iki ayrı menüyü güncel tutmak gerekmiyor."
intent: "guide"
related:
  - "mobil-uygulama-yaptirmak-ne-kadara-mal-olur"
  - "gaziantep-web-sitesi-yapimi-rehberi"
---

Çoğu kafe ve restoran için ilk ihtiyaç mobil uygulama değildir. Yeni bir müşteri sizi çoğu zaman Google'da ya da haritada bulur, menünüze de masadaki QR kodla bakar. İkisi de web sayfasıdır.

Uygulama, müşteriye telefonuna bir şey daha kurması için sebep verdiğinizde işe yarar. Bu yazıda o sebebin ne zaman olduğunu ve yaptığım bir projede nasıl sonuçlandığını anlatıyorum.

## Uygulama ne zaman işe yarar

- Müdavimleriniz varsa. Telefonda duran bir uygulama, haftada bir iki kez gelen müşteri için anlamlıdır. Yılda bir gelen müşteri için pek anlam taşımaz.
- Sadakat programınız varsa ya da kurmak istiyorsanız. Puan, damga ve ödül bakiyesi uygulamada her an görünür.
- Menünüz sık değişiyorsa ve müşteri bunu bilmek istiyorsa. Yeni ürün ya da sevilen bir ürünün geri dönüşü bildirimle haber verilebilir.
- Önceden sipariş ve ödeme almak istiyorsanız. Bu durumda siparişi kimin karşılayacağı ve ödemenin nasıl alınacağı da baştan belli olmalı.

## Ne zaman gerek yok

- Müşterilerinizin çoğu bir kez geliyorsa. Yolüstündeki ya da turistik bir bölgedeki işletmelerde durum çoğu zaman böyledir.
- Menünüz yılda birkaç kez değişiyorsa.
- Asıl amacınız bulunmaksa. Yakındaki kafeyi uygulama mağazasında arayan pek olmaz. Bu işi web sitesi ve Google İşletme Profili yapar.

Siparişte de benzer bir hesap var. Yemeksepeti ve Trendyol Yemek gibi platformlar müşteriyi hazır getirir ama her siparişten komisyon alır. Kendi uygulamanızda bu komisyon olmaz, müşteriyi ise sizin getirmeniz gerekir.

## Gerçek bir örnek: Get Yo

[Get Yo](/vaka-calismalari/getyo), New Jersey'deki Marlboro'da tek şubeli bir frozen yogurt dükkânı. Onlar için iOS ve Android uygulamasını, personelin kullandığı yönetim panelini ve web sitesini yaptım.

### Sorun

Dükkândaki tatlar dönüşümlü olarak değişiyordu. Toppingler de gelip gidiyor, herhangi biri bir cumartesinin ortasında tükenebiliyordu. Basılı menü de eski web sitesi de dükkânı en son düzenlendikleri günkü hâliyle anlatıyordu.

Dükkânın ayrıca bir sadakat programı vardı ama puanlar, sadece tarayıcıdan açılan ayrı bir üye portalında duruyordu. Müşterinin dükkân hakkında gördüğü bilgilerle puanları birbirinden kopuktu.

### Yaptıklarım

- Menü tek yerde toplandı. Personel bir tadı panelden bir kez düzenliyor, uygulama da web sitesi de aynı anda değişiyor.
- Dükkânın mevcut sadakat programı yeniden yazılmadı. Uygulama ona bağlandı, müşteri puan bakiyesini ve bir sonraki ödüle ne kadar kaldığını uygulamada görüyor.
- Bildirimleri müşteri konu konu seçiyor: yeni tatlar, favorisinin geri gelmesi, kampanyalar, oylama sonuçları. Kampanya istemeyen müşteriye kampanya bildirimi gitmiyor.
- Müşteriler vitrinde görmek istedikleri tatlara oy veriyor, personel de sonuçları panelde görüyor.

### Sonuç

Uygulama 4 Kasım 2025'ten beri App Store'da, Google Play'de de yayında. Google Play'deki indirme sayısı 26 Ağustos 2026 itibarıyla 10+. Tek şubeli bir dükkânın kendi uygulaması binlerce kişiye ulaşmıyor.

Web sitesi de baştan yazıldı. Eski sitenin yerel Lighthouse ölçümünde performans puanı 18'di, yeni site 26 Ağustos 2026'da PageSpeed Insights'ta mobilde 100 aldı. İki ölçüm farklı araçlarla yapıldığı için birebir kıyaslanamaz, ama iyileşmenin yönü açık.

İşletme Nisan 2026'da el değiştirdi. Uygulamalar, site ve bütün hesaplar yeni sahibine devredildi. Mağaza sayfaları Apple'ın ve Google'ın devir süreciyle taşındığı için yorumlar ve puanlar korundu.

### Bu örnek ne gösteriyor

Bu projede asıl iş menüyü tek yerde toplamaktı. Panel uygulamayı ve siteyi birlikte güncellediği için uygulamayı indirmeyen müşteri de güncel menüyü sitede görüyor. Uygulama ise düzenli gelen müşterinin puanını, favori tatlarını ve bildirimlerini taşıyor.

Bir kafe çoğu zaman hızlı bir site ve güncel bir menüyle başlayıp uygulamayı sonra müdavimleri için ekleyebilir. Site ile uygulama aynı paneli kullanırsa uygulama sıfırdan başlamaz.

## Karar vermeden önce kendinize sorun

1. Müşterilerinizin ne kadarı düzenli geliyor?
2. Menünüz ne sıklıkla değişiyor, değişikliği kim yapacak?
3. Bir sadakat programınız var mı ya da kurmak istiyor musunuz?
4. Sipariş alacaksanız siparişi kim karşılayacak, ödeme nasıl alınacak?
5. Uygulamayı müşteriye kasada mı, masada mı, fişte mi tanıtacaksınız?

Cevaplarınız uygulamayı işaret ediyorsa fiyatı neyin belirlediğini [ayrı bir yazıda](/blog/mobil-uygulama-yaptirmak-ne-kadara-mal-olur) anlattım. Web sitesiyle başlamak daha mantıklı görünüyorsa [web sitesi rehberine](/blog/gaziantep-web-sitesi-yapimi-rehberi) bakabilirsiniz.
