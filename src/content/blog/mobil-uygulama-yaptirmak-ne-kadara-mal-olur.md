---
title: "Mobil Uygulama Yaptırmak Ne Kadara Mal Olur? Fiyatı Belirleyen Unsurlar"
seoTitle: "Mobil Uygulama Yaptırmak Ne Kadar? Fiyatı Ne Belirler"
description: "Mobil uygulama fiyatını ekranlar, hesap ve ödeme gibi özellikler, yönetim paneli ve yayından sonraki bakım belirler. Teklif almadan önce bilmeniz gerekenleri ve mağazaların kendi ücretlerini yazdım."
seoDescription: "Mobil uygulama fiyatını ne belirler? Ekranlar, özellikler, yönetim paneli, mağaza ücretleri ve bakım. Teklif istemeden önce hazırlamanız gerekenler."
date: 2026-11-22
tags:
  [
    "mobil uygulama",
    "uygulama fiyatı",
    "mobil uygulama maliyeti",
    "react native",
    "app store",
    "google play",
  ]
category: "mobile"
draft: false
faq:
  - question: "Neden sabit bir fiyat listeniz yok?"
    answer: "Aynı cümleyle anlatılan iki uygulama çok farklı işler çıkarabilir. “Restoran uygulaması” tek bir menü ekranı da olabilir, sipariş, ödeme ve kurye takibi olan bir sistem de. Kapsam yazıya dökülünce fiyatı söylerim. Siz onaylamadan işe başlamam."
  - question: "iOS ve Android için ayrı ayrı mı ödeme yaparım?"
    answer: "Hayır. React Native ya da Flutter ile iki platform aynı koddan çıkar, bakım da tek koda yapılır. Sadece platforma özel bir davranış gerektiğinde o kısım ayrı yazılır. Yayın ise iki ayrı mağazada, iki ayrı hesapla yürür."
  - question: "Mağaza ücretleri ne kadar?"
    answer: "App Store için Apple Developer Program yıllık 99 USD, Google Play için geliştirici hesabı tek seferlik 25 USD. Bu ücretler doğrudan Apple'a ve Google'a ödenir. Apple üyeliği yenilenmezse uygulama mağazadan kalkar."
  - question: "Uygulama bittikten sonra da masraf çıkar mı?"
    answer: "Çoğu zaman evet. Sunucu, Apple'ın yıllık ücreti ve işletim sistemleri değiştikçe gereken güncellemeler sürekli masraflardır. Google Play her yıl uygulamaların yeni bir Android sürümünü hedeflemesini ister. Bu güncelleme çıkmazsa uygulama yeni telefonlarda listelenmeyebilir."
  - question: "Önce web sitesiyle başlamak mantıklı mı?"
    answer: "Bazen evet. İhtiyaç menü göstermek, iletişim bilgisi vermek ya da bulunmaksa bunu web sitesi daha ucuza çözer. Uygulama, müşterinin telefonuna bir şey daha kurması için sebep olduğunda anlam kazanır: sadakat puanı, sipariş, bildirim."
intent: "guide"
related:
  - "kafe-restoran-mobil-uygulama-gerekli-mi"
  - "gaziantep-web-sitesi-yapimi-rehberi"
---

Mobil uygulamanın fiyatı, neyi yaptırdığınıza bağlıdır. Bu yazıda rakam vermiyorum, çünkü sabit bir fiyat listem yok. Onun yerine fiyatı neyin belirlediğini ve teklif istemeden önce neyi hazırlarsanız daha net bir fiyat alacağınızı anlatıyorum.

## Fiyatı belirleyen beş şey

### Ekranlar ve akışlar

Uygulamada kaç ekran var ve kullanıcı bu ekranlarda ne yapıyor? Bir menüyü göstermek ile siparişi alıp ödemeyi tamamlamak arasında çok fark var. Ekran listesi, fiyat için en sağlam başlangıçtır.

### Özellikler

Hesap açma ve giriş, ödeme, anlık bildirim, konum ve harita, fotoğraf yükleme, internet yokken çalışma. Bunların her biri ayrı bir iştir.

Ödeme ayrıca mağaza kurallarıyla gelir. Yemek gibi fiziksel bir ürünün parası bankanın ödeme altyapısıyla alınabilir. Uygulamanın içinde satılan dijital içerikte ve abonelikte ise Apple ve Google kendi ödeme sistemlerini zorunlu tutar ve komisyon keser.

### Yönetim paneli

Uygulamadaki bilgiyi kim güncelleyecek? Menü, fiyat, stok, çalışma saatleri ya da kampanyalar değişiyorsa bunları değiştirecek bir panel gerekir. Panel çoğu zaman uygulamanın kendisi kadar iş çıkarır.

[Get Yo projesinde](/vaka-calismalari/getyo) personel bir tadı panelden bir kez düzenliyor, uygulama da web sitesi de aynı anda değişiyor.

### Sunucu ve bağlanılacak sistemler

Veri nerede duracak? Uygulama, işletmenin zaten kullandığı sadakat programı, stok ya da muhasebe sistemiyle konuşacak mı? Böyle bir bağlantının maliyeti karşı tarafın sunduğu imkâna bağlıdır. Get Yo'da dükkânın mevcut sadakat programı yeniden yazılmadı, uygulama ona bağlandı.

### Tasarım

Hazır bileşenlerle kurulan sade bir arayüz mü, yoksa markaya özel çizilmiş ekranlar ve animasyonlar mı? İkincisi daha fazla tasarım ve test süresi demektir.

## İki platform, tek kod

iOS ve Android'i ayrı ayrı yazmak hem geliştirmeyi hem bakımı ikiye katlar. React Native ve Flutter'da iki platform aynı koddan çıkar. Bu yüzden iki mağazada yayında olmak fiyatı iki katına çıkarmaz. Platforma özel bir davranış gerektiğinde sadece o kısım ayrı yazılır.

## Mağazaların kendi ücretleri ve kuralları

Apple, App Store'da yayın için yıllık 99 USD alıyor. Google Play'de geliştirici hesabı tek seferlik 25 USD. Bu ücretler doğrudan mağazalara ödenir.

Google Play'in takvimi etkileyen bir kuralı daha var. Kişisel hesap 13 Kasım 2023'ten sonra açıldıysa yeni bir uygulama, yayına çıkmadan önce en az 12 kişilik kapalı bir testte 14 gün kalmak zorunda. Şirket adına açılan hesaplarda bu şart yok, ama o hesaplar D-U-N-S numarası ister. Kişisel hesapla başlayacaksanız takvime en az iki hafta ekleyin.

Google Play her uygulamadan çalışan bir gizlilik politikası adresi ister. Hesap açılabilen uygulamalarda hesap silme sayfası da şarttır. Bu sayfalar da işin içindedir.

## Yayından sonra

Uygulama yayına çıkınca masraf bitmez.

- Ücretsiz sunucu planları bir sınıra kadar yeter. [Kafadar'ın](/vaka-calismalari/kafadar) sunucu tarafı, az kullanılan projeleri yedi gün sonra duraklatan ücretsiz bir planda çalışıyor. Bu tür sınırları baştan bilmek gerekir.
- Google Play her yıl yeni bir Android sürümünü hedeflemeyi şart koşuyor. Apple'ın da iOS sürümleriyle gelen kendi şartları var.
- Gerçek telefonlarda çıkan çökmeleri izleyip düzeltmek, yayından sonraki asıl işlerden biri.

## Fiyatı düşürmenin yolu ilk sürümü küçültmek

İş sürerken eklenen her özellik hem fiyatı hem süreyi artırır. Bu yüzden işe başlamadan önce ekran listesini, kullanıcı akışını ve ilk sürüme nelerin girmeyeceğini birlikte yazıya dökeriz. İlk sürüm çıkıp gerçek kullanıcılar onu kullandıktan sonra hangi özelliğin gerektiği çok daha net görünür.

Bazen de ilk ihtiyaç uygulama değildir. Bir kafe ya da restoran için bunu [ayrı bir yazıda](/blog/kafe-restoran-mobil-uygulama-gerekli-mi) anlattım.

## Teklif istemeden önce hazırlayın

1. Uygulamanın ne işe yarayacağını anlatan tek bir cümle.
2. Kullanıcının kim olduğu: müşteriniz mi, personeliniz mi, ikisi birden mi?
3. Ekran listesi ya da beğendiğiniz benzer uygulamalar.
4. Uygulamadaki bilgiyi kimin güncelleyeceği.
5. Uygulamanın bağlanması gereken mevcut sistemler.
6. Hedeflediğiniz yayın tarihi.

Bunları göndermeniz yeterli. İlk yanıtım fiyat teklifi olmaz, işi netleştirecek birkaç soru olur. Ne yaptığımı [mobil uygulama geliştirme sayfasında](/mobil-uygulama-gelistirme) anlattım.
