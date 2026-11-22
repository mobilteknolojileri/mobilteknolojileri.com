---
title: "Giriş Yapmak İçin Resmi WhatsApp Uygulamasına Sahip Olmanız Gerekir Hatası"
seoTitle: "Resmi WhatsApp Uygulamasına Sahip Olmanız Gerekir Hatası"
description: "Play Store'dan indirdiğiniz WhatsApp giriş yaptırmıyor. Uygulamanız resmî, sorun büyük ihtimalle telefonda: Bootloader kilidi açık telefon cihaz doğrulamasından geçemiyor. Hesabınıza bir şey olmaz."
seoDescription: "Play Store'dan indirdiğiniz WhatsApp giriş yaptırmıyor. Sebep büyük ihtimalle telefonda: Bootloader kilidi açıkken cihaz doğrulamadan geçemiyor."
date: 2026-08-26
updated: 2026-11-22
tags: ["android", "whatsapp", "bootloader", "root", "custom rom", "xiaomi"]
category: "android"
draft: false
faq:
  - question: "WhatsApp'ı Play Store'dan indirdim, neden resmî uygulama istiyor?"
    answer: "Uygulamanız gerçekten resmî, takılan büyük ihtimalle telefonun kendisi. Telefon her açılışta yazılımının değiştirilip değiştirilmediğini bildirir ve bootloader kilidi açıksa bu bildirim olumsuz çıkar. WhatsApp girişte hangi kontrolü yaptığını açıklamıyor, ama hata çoğunlukla kilidi açık telefonlarda anlatılıyor. Hata mesajı bu yüzden yanlış yeri gösteriyor."
  - question: "Bu yüzden hesabım kapanır mı?"
    answer: "Hayır. Bu durumda ne yasak var ne de kapanma, sadece o telefondan giriş yapılamıyor. Aynı numarayla başka bir telefonda giriş yapabiliyorsanız sorunun cihazda olduğu zaten kanıtlanmış olur. Konuşma geçmişiniz de yerinde."
  - question: "Hatayı görünce dışarıdan APK indirmeli miyim?"
    answer: "Hayır. Mesaj resmî uygulama istediği için insanlar internette arayıp bir yerden kurulum dosyası indirir. Bu dosya GB WhatsApp gibi değiştirilmiş bir kopyaysa ya da kaynağı belli değilse uyarı bu sefer haklı çıkar. Hesabınızın yasaklanma riski de yazışmalarınızın tehlikeye girmesi de asıl orada başlar. WhatsApp'ın kendi sitesindeki APK resmîdir ama sorunu o da çözmez. Telefonunuzdaki Play Store sürümü zaten doğru sürüm."
  - question: "Root ya da custom ROM'dan vazgeçmem mi gerekiyor?"
    answer: "Gerekmiyor. Sorunu kilit açık, root ve ROM yerinde kalacak şekilde çözerim; telefon sıfırlanmaz, verileriniz gitmez. Tek uyarım kalıcılıkla ilgili: Bu kontroller uygulama ve sistem güncellemeleriyle değişir, bugün geçen bir cihaz aylar sonra yeniden takılabilir. Bunu baştan söylerim."
  - question: "Banka uygulamam da açılmıyor, bağlantılı mı?"
    answer: "Büyük ihtimalle evet. Banka ve ödeme uygulamaları ile bazı oyunlar cihaza aynı soruyu sorar ve aynı yerde takılır. WhatsApp'taki mesaj resmî uygulamadan bahsettiği için ayrı bir sorun sanılıyor, oysa kaynak büyük ihtimalle aynı. Bu yüzden biri düzeltilince ötekiler de çoğu zaman onunla birlikte düzelir."
  - question: "Telefonu ikinci elden aldım, kilidin açık olduğunu nereden bileyim?"
    answer: "Açılışta kısa bir uyarı ekranı geçiyorsa ya da telefon stok görünmesine rağmen bu tür uygulamalar açılmıyorsa kilit büyük ihtimalle açıktır. İkinci el telefonlarda satıcının ROM yükleyip sonra kilidi kapatmadığı durumlara sık rastlanır. Modeli ve birkaç ekran görüntüsünü gönderirseniz bakıp söylerim."
  - question: "Telefonum Play Protect sertifikalı değil, WhatsApp hesabım yasaklanır mı?"
    answer: "WhatsApp'ın yardım sayfalarında sertifikasız telefonların yasaklandığı yazmıyor. Sayfalar yasağı resmî olmayan uygulamalara bağlıyor. Yine de sertifikasız telefonlarda giriş sorunu ve oturum kapanması anlatan kullanıcılar var. Sebebi kesin söyleyemem, önce telefonun durumuna ve uygulamanın sürümüne bakmak gerekir."
  - question: "Çin sürümü ya da custom ROM'lu telefonda WhatsApp neden sürekli sorun çıkarıyor?"
    answer: "Bu telefonların bir kısmı Play Protect sertifikasız çıkar, bir kısmının da kilidi açıktır. WhatsApp bu durumda cihaz bildirimine güvenmeyebilir ya da giriş yarıda kalabilir. Hangisinin olduğu telefona göre değişir. Ayarlardan sertifika durumuna bakmak ilk adım olur."
intent: "troubleshooting"
related:
  - "banka-uygulamasi-acilmiyor-guvenli-degil-hatasi"
  - "bootloader-kilidi-acik-telefonda-uygulamalar"
  - "cihaz-play-protect-sertifikali-degil"
---

WhatsApp'ı Play Store'dan kurdunuz, başka hiçbir yerden değil. Numaranızı girdiniz, doğrulama kodunu beklerken ekrana şu geldi: _"Giriş yapmak için resmi WhatsApp uygulamasına sahip olmanız gerekir."_

Oysa telefonda zaten resmî uygulama yüklü, indirdiğiniz yer de doğru.

Takılan büyük ihtimalle telefonun kendisi. Mesaj da başka bir durum için yazıldığından sizi yanlış yere yönlendiriyor.

## Mesajın sizi yönlendirdiği yer tehlikeli

Ekranda "resmi WhatsApp uygulaması" yazınca çoğu kişi internette arama yapar ve bir yerden kurulum dosyası indirir. Uyarıyı ciddiye aldığını, hatta doğru olanı yaptığını düşünür.

Aslında yapılabilecek en kötü şey bu. Telefonunuzdaki Play Store sürümü zaten resmî. Aramada karşınıza çıkanların bir kısmı ise GB WhatsApp, WhatsApp Plus gibi değiştirilmiş kopyalar ya da kaynağı belli olmayan sitelerden inen dosyalardır. Böyle bir dosyayı kurduğunuzda mesaj ilk kez haklı çıkar ve asıl riskler o zaman başlar: Hesabınız gerçekten yasaklanabilir, telefonunuzdaki bütün yazışmalara erişen uygulamanın kaynağı da artık belirsizdir.

WhatsApp'ın kendi sitesinde (whatsapp.com/android) yayımladığı kurulum dosyası da resmîdir, ama aynı uygulama olduğu için bu sorunu o da çözmez. Telefonunuzdaki uygulamaya dokunmayın, sorun onda değil.

## Mesajın arkasındaki olası sebep

Hassas iş yapan uygulamalar, telefonun yazılımının değiştirilip değiştirilmediğine bakar. Bootloader kilidi (telefonun sadece üreticinin imzaladığı yazılımı çalıştırmasına izin veren kilit) açıksa telefon bu kontrolden geçemez. Root, custom ROM ya da açık bırakılmış kilit aynı sonucu verir. Kontrolün nasıl işlediğini [banka uygulaması yazısında](/blog/banka-uygulamasi-acilmiyor-guvenli-degil-hatasi) ayrıntılı anlattım.

Bu açıklama doğruysa WhatsApp girişte olumsuz sonucu görüyor ve telefondaki kopyanın değiştirilmiş olabileceğini varsayıyor. Gösterdiği mesaj, gerçekten sahte bir WhatsApp kullananlar için yazılmış. Siz o gruptan değilsiniz ama uygulama ikisini birbirinden ayırmaz.

Burada kesin bilinenle tahmin edileni ayırayım. Android'in cihaz durumunu uygulamalara bildirdiği kesin, Google bunu Play Integrity adıyla belgeliyor. WhatsApp'ın girişte bu bildirime baktığını ise WhatsApp açıklamıyor. Hatanın çoğunlukla kilidi açık telefonlarda anlatılması bunu en güçlü açıklama yapıyor. Yine de resmî bir bilgi sayılmaz.

Ekrandaki mesaj ise uygulamayı suçluyor. İnsanları dışarıdan kurulum dosyası indirmeye iten de bu.

## Hesabınıza bir şey olmuyor

Bu sayfayı açanların çoğu aynı şeyden korkar: Hesabım kapanacak mı? Bu durumda hayır.

Bu hata yüzünden hesabınız ne yasaklanır ne kapanır. Numaranız da konuşma geçmişiniz de yerinde. Karşı taraf bir sorun yaşadığınızı bile bilmiyor. Olan tek şey, o telefondan giriş yapılamaması.

Bunu beş dakikada kendiniz doğrulayabilirsiniz: Aynı numarayla başka bir telefondan girin. Girebiliyorsanız hesabınızda bir sorun yok, sorunun telefonda olduğu da kesinleşmiş olur. Üstelik bu ayrımı baştan yapmış olmanız, sonra konuşacaklarımızın yarısını halleder.

## Aynı yerde takılan başka uygulamalar

Banka ve ödeme uygulamaları, bazı oyunlar ve abonelik uygulamaları da telefonun bu kontrolden geçmesini ister. Biri "cihazınız güvenli değil" der, biri hiçbir şey demeden kapanır, WhatsApp ise resmî uygulamadan bahseder. Kaynak büyük ihtimalle aynı olduğu için çoğu zaman birlikte düzelirler. Hangi uygulamanın neye baktığını [kilidi açık telefonlar yazısında](/blog/bootloader-kilidi-acik-telefonda-uygulamalar) anlattım.

## Kilidin açık olduğunu bilmiyor olabilirsiniz

Kilidi siz açmadıysanız da kilit açık olabilir. İkinci el telefonlarda satıcının ya da önceki sahibin ROM yükleyip kilidi kapatmadığı sık görülür. Açılışta kısa bir uyarı ekranı geçiyorsa ilk işaret budur. Emin değilseniz modeli ve birkaç ekran görüntüsünü gönderin, bakıp söyleyeyim.

## Telefon Play Protect sertifikalı değilse

Kilit açık değilken de benzer bir tablo çıkabilir. Çin sürümü bir telefon, sahte ya da özel (custom) bir ROM kurulu telefon, Google'ın sertifikasını taşımayabilir. Play Store'u açıp profil simgesi, Ayarlar, Hakkında ve Play Protect sertifikası yolundan durumu görebilirsiniz. "Cihaz sertifikalı değil" yazıyorsa telefon bu gruptadır. [Ne anlama geldiğini ayrı yazdım](/blog/cihaz-play-protect-sertifikali-degil).

WhatsApp bu konuda ne diyor, bunu ayırmak gerekiyor. Yardım Merkezi'nde "Giriş yapmak için resmi WhatsApp uygulamasına ihtiyacınız var" mesajı da oturumun kapanması da resmî olmayan uygulamalara bağlanıyor. Bu uygulamaların Hizmet Koşulları'nı ihlal ettiği, hesabın geçici ya da kalıcı olarak engellenebileceği ve bağlı cihaz özelliğinin kısıtlanabileceği yazıyor. Sertifikasız telefonların engellendiğine dair bir cümle bulamadım.

Öte yandan kullanıcılar, sertifikasız telefonlarda girişin yarıda kaldığını ya da hesabın tekrar tekrar engellendiğini anlatıyor. Bu şikâyetle ben de karşılaşıyorum. Telefonun sertifikasızlığı yasağın sebebi mi, yoksa o telefona kurulan uygulama ya da sistem yazılımı mı, bunu dışarıdan kesin söyleyemem. WhatsApp da açıklamıyor. Dolayısıyla bunu kullanıcıların bildirdiği bir durum olarak okuyun.

Telefonda GB WhatsApp gibi bir kopya ya da kaynağı belirsiz bir kurulum varsa yasağın asıl adayı odur, WhatsApp'ın kendi sayfaları da bunu söylüyor. Telefonun sertifika durumu ayrı bir soru. [Sahte ROM'un nasıl anlaşıldığını](/blog/fake-rom-nasil-anlasilir) ve [kilidi açık telefonlarda uygulamaların neden bozulduğunu](/blog/bootloader-kilidi-acik-telefonda-uygulamalar) ayrı yazılarda anlattım.

Hesabınız engellendiyse WhatsApp'ın sayfası, resmî olmayan uygulamada ısrar edilirse engelin kalıcı olabileceğini söylüyor. Telefonun durumunu netleştirmeden aynı telefonda tekrar tekrar denemeyin.

## Kalan iş ne

Yaptığım iş, telefonu bu kontrolden geçer hâle getirmek. Kilit, root ve custom ROM yerinde kalır. Telefon sıfırlanmaz, verileriniz gitmez. Ödemek zorunda olduğunuzu sandığınız bedeli ödemezsiniz.

Bu kontroller uygulama ve sistem güncellemeleriyle değiştiği için bugün giriş yapabilen bir telefon aylar sonra yeniden takılabilir. Bunu baştan söylüyorum.

Bana yazarken telefonun modelini, Android sürümünü ve cihazda ne yapıldığını belirtin, hatanın ekran görüntüsünü de gönderin. Ne olduğunu çoğu zaman bunlardan anlarım.

Hangi işlere baktığımı ve işin nasıl ilerlediğini [Android destek sayfasında](/android-destek) yazdım.
