---
title: "E-Devlet Uygulaması Açılmıyor: Rootlu ve Kilidi Açık Telefonlarda Sebep"
seoTitle: "E-Devlet Uygulaması Açılmıyor: Sebepler ve Çözüm Yolları"
description: "e-Devlet uygulaması açılmıyor ya da açılır açılmaz kapanıyor, tarayıcıdan giriş sorunsuz. Önce basit sebepler, sonra rootlu ve bootloader kilidi açık telefonlarda uygulamanın cihazı doğrulayamaması."
seoDescription: "e-Devlet uygulaması açılmıyor mu? Önce kısa kontroller, sonra root ve bootloader kilidi açık telefonlarda uygulamanın açılmamasının asıl sebebi."
date: 2026-11-22
tags: ["android", "e-devlet", "bootloader", "root", "cihaz doğrulama", "custom rom"]
category: "android"
draft: false
faq:
  - question: "e-Devlet tarayıcıdan açılıyor ama uygulama açılmıyor, neden?"
    answer: "Hesabınızın sağlam olduğunu gösterir, sorun uygulamayla telefon arasında. Tarayıcıdan girişte cihaz kontrolü yok. Uygulama ise sürüm, saat ve telefonun durumu gibi şeylere bakabilir. Önce uygulamayı güncelleyin ve tarih ile saati otomatiğe alın. Düzelmezse telefonun durumundan şüphelenmek gerekir."
  - question: "e-Devlet uygulaması rootlu telefonda açılmıyor mu?"
    answer: "Kullanıcılar bu sorunu forumlarda anlatıyor, ama e-Devlet bu kontrolü kendi yardım sayfalarında açıklamıyor. Uygulamanın tam olarak neye baktığını söyleyemem. Gözlemim, rootlu ya da bootloader kilidi açık telefonlarda resmî uygulamaların açılmadığı ya da takıldığı yönünde."
  - question: "Kayıtlı cihaza erişemiyorum, e-Devlet'e nasıl girerim?"
    answer: "e-Devlet'in yardım sayfasına göre şifrenizle giriş yapın, bildirim süresinin dolmasını bekleyin ve 'Mesaj Gönder' ile kimlikle doğrulanmış numaranıza SMS kodu alın. Bu, uygulamanın hiç açılmamasından ayrı bir konu ve telefonun durumuyla ilgili değil."
  - question: "Uygulamanın verisini silmek ya da yeniden kurmak işe yarar mı?"
    answer: "Sorun uygulamadaki bozuk bir kayıttan geliyorsa yarar. Telefon doğrulamadan geçemediği için açılmıyorsa değişen bir şey olmaz. Silip kurmanın zararı yok ama yeniden giriş yapmanız gerekir. İki aşamalı girişte kayıtlı cihaz bildirimi de gelmeyebilir."
  - question: "e-Devlet açılmıyorsa hesabım ya da bilgilerim risk altında mı?"
    answer: "Bu yüzden hayır. Uygulamanın açılmaması, hesabınıza birinin girdiği anlamına gelmez. Tarayıcıdan girip hesabınızı kontrol edebilirsiniz. Telefonu ikinci el aldıysanız ve üstündeki yazılımı kimin kurduğunu bilmiyorsanız bu ayrı bir risktir."
intent: "troubleshooting"
---

e-Devlet uygulaması açılmıyor ya da açılır açılmaz kapanıyor. Çoğu zaman sebep uygulamanın ya da telefonun küçük bir sorunudur, bazen de telefon kendini doğrulayamadığı için uygulama çalışmayı reddeder.

Bir belgeye ya da randevuya şimdi ihtiyacınız var ve uygulama bir türlü açılmıyor. Ya hiçbir şey demeden kapanıyor ya da bir uyarı gösteriyor. Oysa tarayıcıdan aynı hesaba girebiliyorsunuz.

Bu durumda hesabınızda bir sorun yok. Sorun uygulamayla telefon arasında.

## Önce birkaç kısa kontrol

Bunlar birkaç dakika sürer ve sorunların bir bölümünü tek başına çözer.

1. Uygulamayı Google Play'den güncelleyin. e-Devlet bazı özellikler için uygulamanın son sürümünü ister.
2. Tarih ve saati otomatiğe alın. Saat yanlışsa sunucuyla güvenli bağlantı kurulmaz.
3. Google Play Hizmetleri'ni güncelleyin. Cihaz doğrulaması bu bileşen üzerinden yapılır.
4. Telefonu yeniden başlatın. Wi-Fi'da açılmıyorsa mobil veriyle, mobil veride açılmıyorsa Wi-Fi ile deneyin.
5. e-Devlet'in kendi tarafında geçici bir yoğunluk olabilir. Tarayıcıda da yavaşlık varsa biraz bekleyin.

Bunlardan sonra uygulama hâlâ açılmıyorsa ve tarayıcıdan giriş sorunsuzsa sebep büyük ihtimalle yazının kalanında anlattığım şey.

## Sorun hesapta mı, telefonda mı

Bilgisayardan ya da telefonun tarayıcısından turkiye.gov.tr'ye girin. Şifrenizle girebiliyorsanız hesabınız sağlam. Bu deneme tamamen risksizdir ve sorunun nerede olduğunu ilk anda gösterir.

Ardından aynı uygulamayı başka bir telefona kurup girmeyi deneyin. Orada açılıyorsa sorun sizin telefonunuzda. Bir de şunu düşünün: Banka uygulamanız, bir oyun ya da başka bir resmî uygulama da aynı dönemde sorun çıkarmaya başladı mı? Başladıysa tablo tek bir uygulamayla ilgili değil.

## "Kayıtlı cihaz" ayrı bir konu

İki aşamalı girişi açtıysanız e-Devlet telefonunuzu kayıtlı cihaz olarak tutar. Kayıtlı cihazda şifreyle girersiniz, başka bir cihazdan girişte ise kayıtlı cihaza bildirim gider.

Telefonu sıfırladıysanız ya da uygulamayı silip kurduysanız bildirim gelmeyebilir. e-Devlet'in yardım sayfası bu durumda şifrenizle girmenizi, bildirim süresinin dolmasını bekleyip "Mesaj Gönder" ile kimlikle doğrulanmış numaranıza SMS kodu almanızı söylüyor.

Bu sorun giriş ekranında yaşanır. Uygulamanın hiç açılmaması ya da kapanması ise başka bir şey.

## Uygulama telefonu kontrol ediyor olabilir

Android telefonlar açılırken kendi durumlarını bildirir: Üstündeki yazılım üreticinin verdiği yazılım mı, sonradan değiştirilmiş mi. Banka gibi hassas işler yapan uygulamalar bu bildirime bakar ve olumsuzsa açılmaz.

e-Devlet'in bu kontrolü yapıp yapmadığını ve neye baktığını kendi yardım sayfalarında bulamadım. Elimdeki bilgi iki yerden geliyor: Kullanıcıların forumlarda anlattığı şikâyetler ve bu tür telefonlarda sık gördüğüm tablo. Rootlu ya da bootloader kilidi açık telefonlarda resmî uygulamaların açılmadığı ya da takıldığı anlatılıyor. Ekranda tam olarak hangi mesajın çıktığı ise telefona ve sürüme göre değişebilir. Bu yüzden mesajı tahmin etmiyorum, ekran görüntüsüne bakıyorum.

Bootloader kilidi, telefonun yalnızca üreticinin imzaladığı yazılımı çalıştırmasını sağlayan kilittir. Kilit açılınca telefon başka yazılımları da çalıştırabilir ve bunu her açılışta bildirir. Root'lanmış olması, custom ROM kurulmuş olması ya da sadece kilidin açık kalması bu bakımdan aynı sonucu verir. Aynı sebep banka uygulamalarını da bozar, [onu ayrıca anlattım](/blog/banka-uygulamasi-acilmiyor-guvenli-degil-hatasi).

Bu duruma üç yoldan gelinebilir:

- Kilidi ya da root'u kendiniz yaptınız.
- Telefonu ikinci elden aldınız ve satıcı kilidi açık bırakmış. Telefon dışarıdan sıfır gibi görünür ama uygulamalar öyle olmadığını bilir.
- Telefonun yazılımı Google'ın sertifikasını taşımıyor. Çin sürümü ya da kaynağı belirsiz bir ROM'da bu görülür. [Bunun ne anlama geldiğini ayrı yazdım](/blog/cihaz-play-protect-sertifikali-degil).

Bootloader kilidi açık telefonlarda banka, e-Devlet ve WhatsApp'ın durumunu da [ayrı bir yazıda](/blog/bootloader-kilidi-acik-telefonda-uygulamalar) anlattım.

## Dokunmayın

İnternette gördüğünüz her yöntem güvenli değil.

- Telefonu sıfırlamayın. Sebep telefonun durumuysa sıfırlama sorunu çözmeyebilir, verilerinizi ise kaybedersiniz.
- Kaynağı belli olmayan sitelerden e-Devlet "APK"sı indirmeyin. Kimlik bilgilerinizi yanlış bir uygulamaya girmiş olursunuz.
- Videolardaki "Magisk modülü" gibi yöntemleri kendi başınıza denemeyin. Yanlış bir adımda telefon açılmaz hâle gelebilir.
- Bootloader'ı kendi başınıza yeniden kilitlemeye çalışmayın. Yanlış yazılım üstündeyken kilitlenen bir telefon açılmayabilir.

## Kalan iş ne

Yaptığım iş, telefonu bu kontrolden geçer hâle getirmek. Telefon sizde kalır, ben internet üzerinden Windows bilgisayarınıza bağlanırım. Bunun için bir USB kablosu ve internet bağlantısı gerekir.

Kilit açık kalır, çoğu zaman telefon sıfırlanmaz ve verileriniz gitmez. Ama uygulamanın açılacağına söz vermem. e-Devlet'in neye baktığını bilmediğim için önce bakar, sonucu söylerim. Olmayacaksa olmayacağını da söylerim.

Kalıcılık konusunda da söz veremem: Bu kontroller uygulama ve sistem güncellemeleriyle değişir. Dolayısıyla bugün geçen bir cihaz aylar sonra yeniden takılabilir.

Bana yazarken telefonun modelini, Android sürümünü ve telefonda ne yapıldığını bildiğiniz kadarıyla belirtin. Uygulamanın verdiği hatanın ekran görüntüsünü ya da fotoğrafını da ekleyin.

Hangi işlere baktığımı ve işin nasıl ilerlediğini [Android destek sayfasında](/android-destek) yazdım.
