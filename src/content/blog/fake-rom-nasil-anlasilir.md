---
title: "Xiaomi Fake ROM Nedir, Nasıl Anlaşılır? Güncelleme Kayıtlarına Erişim İzniniz Yok"
seoTitle: "Xiaomi Fake ROM Nasıl Anlaşılır? Belirtiler ve Kontrol"
description: "Fake ROM, satıcının Çin sürümü telefona kurduğu ve global gibi görünen değiştirilmiş yazılımdır. 'Güncelleme kayıtlarına erişim izniniz yok' hatası ve global olup olmadığını anlama yolları."
seoDescription: "Xiaomi'nizde fake ROM mu var? Güncelleme kayıtlarına erişim izniniz yok hatası, Play Protect durumu ve sürüm kodundaki bölge harfleriyle nasıl anlaşılır."
date: 2026-11-22
tags: ["android", "fake rom", "xiaomi", "hyperos", "global rom", "çin sürümü", "güncelleme"]
category: "android"
draft: false
faq:
  - question: "Fake ROM nedir?"
    answer: "Çin pazarı için üretilmiş bir telefonun yazılımında satıcının oynama yapıp onu global gibi göstermesidir. Dil Türkçe, Play Store yüklü görünür ama sistem üreticinin o bölge için yayımladığı yazılım değildir. Güncelleme ve sertifika sorunları genelde bu yüzden çıkar."
  - question: '"Güncelleme kayıtlarına erişim izniniz yok" hatası ne demek?'
    answer: "Mesajın tam teknik sebebini Xiaomi açıklamıyor. Büyük olasılıkla yazılımınız üreticinin sunucusundaki kayıtlarla eşleşmiyor. Bu mesaj Xiaomi'lerde değiştirilmiş yazılımın en sık görülen işaretlerinden biri. Tek başına kanıt sayılmaz, ama başka belirtilerle birlikte güçlü bir ipucudur."
  - question: "Xiaomi'nin global olup olmadığını nasıl anlarım?"
    answer: "Ayarlar'da Telefon hakkına girin. Sürüm kodunun sonundaki bölge harflerine (MI global, EU Avrupa, TR Türkiye, CN Çin) ve model numarasının son harfine bakın. Play Store'daki sertifika durumunu da kontrol edin. Birinin tutmaması telefonun ya da yazılımın değiştirildiğini düşündürür."
  - question: "Fake ROM'lu telefon tehlikeli mi?"
    answer: "Bunu baştan söylemek mümkün değil. Yazılımda neyin değiştirildiğini bilmiyorsunuz. Güvenlik yamaları gelmez, hesap ve banka bilgileri girdiğiniz bir sistemin kaynağı belirsiz kalır. Hesap çalındı demek değil, ama doğrulayamadığınız bir risk."
  - question: "Fake ROM'u kendim silebilir miyim?"
    answer: "Güvenli bir kısayol yok. Telefonu recovery ekranından silmek ya da videodaki bir yazılımı kurmak, verilerinizi kaybettirebilir ve telefonu açılmaz hâle getirebilir. Önce verilerinizi yedekleyin, sonra ne yapılacağına karar verin."
intent: "troubleshooting"
deviceBrand: "Xiaomi"
---

Fake ROM, Çin sürümü bir Xiaomi telefona satıcının kurduğu ve global sürüm gibi görünen değiştirilmiş yazılımdır. En bilinen işareti, güncelleme ekranındaki "güncelleme kayıtlarına erişim izniniz yok" mesajıdır.

Telefonu yurt dışı ya da "global" diye aldınız. Dil Türkçe, Play Store yüklü, ilk günler her şey yolunda gibi. Sonra güncelleme gelmiyor, ekrana yukarıdaki mesaj düşüyor, WhatsApp bir şeye itiraz ediyor ya da bankanız uygulamayı açmıyor. Telefonda bir şeyin yanlış olduğunu seziyorsunuz ama ne olduğunu bilmiyorsunuz.

## Fake ROM nedir, satıcılar bunu neden yapar

ROM, telefonun işletim sistemi ve arayüzüdür. Çin pazarı için üretilen telefonlarda Google hizmetleri, Türkçe ve bazı dil paketleri yoktur. Bunları sonradan eklemek hızlıdır, resmî global yazılıma geçmek ise bootloader kilidini açmayı ve telefonu sıfırlamayı gerektirir, üstelik her telefonda yapılamaz. Bazı satıcılar bu yüzden mevcut Çin yazılımını değiştirip global gibi gösterir.

Satıcının niyeti her zaman kötü olmayabilir. Müşteri telefonu Türkçe ve Google'lı istiyor, satıcı da en kısa yolu seçmiş olabilir. Ama sonuç alıcı için aynıdır: Telefonda ne olduğunu bilmediğiniz bir yazılım çalışır.

## Nasıl anlaşılır: belirtiler

- **Güncelleme çalışmıyor.** Sistem güncellemesinde "güncelleme kayıtlarına erişim izniniz yok" ya da benzer bir hata çıkıyor. Telefon yeni sürümleri hiç görmüyor.
- **Play Protect sertifikası yok.** Play Store'da Ayarlar, Hakkında yolundan bakınca "Cihaz sertifikalı değil" yazıyor. [Bu uyarının ne anlama geldiğini ayrı anlattım](/blog/cihaz-play-protect-sertifikali-degil).
- **Uygulamalar takılıyor.** WhatsApp "giriş yapmak için resmi WhatsApp uygulamasına sahip olmanız gerekir" diyebilir, banka uygulaması ya da oyunlar açılmayabilir. [WhatsApp tarafı için yazım burada](/blog/giris-yapmak-icin-resmi-whatsapp-hatasi).
- **Bazı özellikler yok ya da yarım.** Menülerin bir kısmı İngilizce kalır, cihazın bazı özellikleri eksik çıkar.
- **Kaynağı belirsiz değişiklikler.** Sistemde neyin değiştirildiğini bilmiyorsunuz. Bunun gizlilik açısından ne anlama geldiğini söylemek mümkün değil, ama telefona girdiğiniz bilgilerin kimin eline geçtiği de doğrulanamaz.

Bunların hepsi aynı anda olmak zorunda değil. Tek başına "güncelleme kayıtlarına erişim izniniz yok" yazısı bile bakmak için yeterli bir sebep.

## Satıcıya ne sormalısınız

Telefonu bir satıcıdan aldıysanız önce sakin bir mesaj yazın. Şu üç soru çoğu zaman yeterli bilgi verir: Telefona hangi yazılımı kurdunuz, bu yazılımı nereden aldınız, bootloader kilidi açık mı kapalı mı. Cevap vermiyorsa ya da "global" deyip geçiyorsa bu da bir bilgidir.

Telefonu değiştirme ya da iade hakkınızın olup olmadığına satıcıyla yazışmaların ve ilanın üzerinden bakın. Onu ben değerlendiremem.

## Sürüm kodundaki harfler ne söylüyor

Xiaomi'de yazılım sürümü uzun bir kodla yazılır. Ayarlar, Telefon hakkında bölümündeki HyperOS kartında görürsünüz. Kodun sonunda bölgeyi gösteren iki harf, ardından genellikle XM bulunur. En sık görülen bölgeler şunlar:

| Kod  | Bölge     |
| ---- | --------- |
| MIXM | Global    |
| EUXM | Avrupa    |
| TRXM | Türkiye   |
| INXM | Hindistan |
| CNXM | Çin       |

Çin sürümünde CN görürsünüz. "Global" diye aldığınız bir telefonda hâlâ CN yazıyorsa, ya da satıcı global dedi ama telefon güncelleme alamıyorsa bir uyumsuzluk var demektir.

Model numarası da ipucu verir. Ayarlar'da Telefon hakkında, Tüm özellikler yolundan model numarasına bakın. Numaranın son harfi çoğu modelde bölgeyi gösterir: C Çin, G global, I Hindistan. Üstelik global cihazların arka kapağında genellikle CE işareti bulunur.

Tek başına hiçbiri kesin kanıt sayılmaz. Değiştirilmiş bir yazılım sürüm yazısını da değiştirmiş olabilir. Bu yüzden sürüm kodu, model numarası, sertifika durumu ve güncelleme davranışının birbiriyle tutup tutmadığına birlikte bakın. Tutmayan her şey, satıcıya "ne kurdunuz" diye sormak için yeterli bir sebeptir.

## Bunlara dokunmayın

- Recovery ekranındaki "Wipe Data" ve benzeri silme seçeneklerine kendi başınıza basmayın. Telefon sıfırlanır ve içindekiler gider.
- Videodan öğrendiğiniz bir yazılımı kendi başınıza kurmayın. Yanlış bölgenin ya da eski sürümün yazılımı telefonu açılmaz hâle getirebilir.
- Bootloader kilidini kendi başınıza kapatmayın. Telefonun gerçek bölgesiyle uyuşmayan bir yazılım üstünde kapatılan kilit telefonu açılmaz hâle getirebilir.

## Tek güvenli adım

Telefonda neyin kurulu olduğunu okuyun. Bu hiçbir şeyi değiştirmez.

1. Ayarlar, Telefon hakkında bölümünde yazılım sürümünün sonundaki bölge harflerine bakın.
2. Aynı bölümde Tüm özellikler yolundan model numarasını okuyun.
3. Play Store'da profil simgesi, Ayarlar, Hakkında yolundan sertifika durumunu görün.

Üçünün ekran görüntüsünü alın. Ne yapılacağına karar verirken işinize yarar.

## Kalan iş ne

Yaptığım iş, telefonun gerçekte ne çalıştırdığına bakıp gerekiyorsa üreticinin kendi yazılımına geri döndürmek. Bu uzaktan olur. Telefon sizde kalır, ben Windows'lu bilgisayarınıza bağlanırım. Bilgisayar, USB kablosu ve internet yeter.

Çoğu durumda telefon sıfırlanır, bu yüzden önce verilerinizi yedeklemeniz gerekir. Bana yazarken telefonun modelini, yukarıdaki üç ekran görüntüsünü ve satıcının size ne söylediğini ya da ne yaptığını bildiğiniz kadarıyla anlatın.

Neyi vaat edemem: Bootloader kilidi açılamayan bir Çin sürümünde global yazılıma geçmek mümkün olmayabilir. Üreticinin yazılımı çıkarmadığı bir model için de resmî bir global yazılım yok. Telefonun hangisi olduğunu baktıktan sonra söylerim. Telefon almadan önce bu yazıyı okuyorsanız [almadan önce neye bakacağınızı](/blog/cin-surumu-telefon-almadan-once) ve [global ROM'un neleri değiştirdiğini](/blog/cin-surumu-telefona-global-rom) ayrıca yazdım.

Hangi işlere baktığımı ve işin nasıl ilerlediğini [Android destek sayfasında](/android-destek) yazdım.
