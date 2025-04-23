# Custom Hot Corners - Extended

GNOME Shell ortamını, monitörlerinizin köşeleri ve kenarları aracılığıyla kontrol etmenizi ve gezinmenizi sağlayan bir GNOME Shell Uzantısı. Ama sadece bu kadarla sınırlı değil. Ayrıca, özelleştirilmiş klavye kısayollarıyla birçok benzersiz eylem ekler, bu yüzden sıcak köşeleri sevmeseniz bile bu uzantı iş akışınızı iyileştirebilir.

Bu uzantı, orijinal Custom Hot Corners uzantısına dayanmaktadır, ancak orijinal koddan çok az bir şey kalmıştır.

[<img alt="" height="100" src="https://raw.githubusercontent.com/andyholmes/gnome-shell-extensions-badge/master/get-it-on-ego.svg?sanitize=true">](https://extensions.gnome.org/extension/4167/custom-hot-corners-extended/)


## Özellikler:
- Gnome 3.36 - 47 uyumluluğu
- Ayarlanabilir bariyer boyutlarına sahip sıcak köşeler, hem dikey hem de yatay olarak bağımsız biçimde ayarlanabilir ve sıcak kenarlar olarak kullanılabilir
- Fare düğmeleri ve kaydırma tekerleği tetikleyici olarak kullanılabilir
- Her tetikleyici yalnızca *Ctrl* tuşuna basıldığında çalışacak şekilde ayarlanabilir
- Kaydırma tekerleğinin her yönü bağımsız olarak yapılandırılabilir
- Her tetikleyici, komut çalıştırma, çalışma alanı ve pencere gezinme, pencere kontrolü, güç yönetimi eylemleri, ses seviyesi kontrolü, MPRIS oynatıcı kontrolü, renk filtreleri (pencere bazlı ve genel), erişilebilirlik özellikleri ve daha fazlası gibi birçok eylemi tetikleyebilir
- Tercihler penceresi, *Ön Ayarlı Komutu Çalıştır/Uygulamayı Etkinleştir ...* eylemi yapılandırması için bir uygulama seçici iletişim penceresi sunar. Seçilen uygulamanın çalıştırma komutunu veya Dash ya da Uygulama Izgarası'ndaki simgesine tıkladığınızda olduğu gibi çalışan uygulama kimliğini seçip düzenleyebilirsiniz
- Her köşenin fare tıklamaları ve kaydırma hareketlerine duyarlı alanı hem yatay hem de dikey olarak genişletilebilir ve böylece monitör kenarlarının büyük bir kısmını kaplayabilir. Eğer bitişik köşe ilgili yönde genişletilecek şekilde ayarlanmamışsa, köşe monitörün genişliğinin/yüksekliğinin 7/8'ine kadar genişletilebilir. Eğer iki bitişik köşe birbirinin yönüne doğru genişleyecek şekilde ayarlanmışsa, her biri için bu uzunluk 1/2 olur. Genişletme ayarlarının sonucunu *Etkin köşeleri/kenarları görünür yap* seçeneğini kullanarak görebilirsiniz
- Yedek sıcak köşe tetikleyicileri (opsiyonel) - fare imleci entegrasyonunun olduğu sanallaştırılmış sistemlerde, basınç bariyerlerinin çalışmadığı durumlarda kullanılabilir
- Çoklu monitör desteği. Tercihler penceresini açtığınızda, her monitörün sol üst köşesinde indeks numarası gösterilir
- `Monitör 1` ayarları her zaman birincil monitöre uygulanır, diğerleri GNOME tarafından belirlenen sıraya göre devam eder
- GNOME Ayarları'nda yerleşik olarak bulunmayan menüdeki herhangi bir eylem için küresel klavye kısayolları ayarlayabilirsiniz
- Kendi seçtiğiniz eylemlerle en fazla 4 Özel Menü oluşturabilir ve bunları tek bir eylem olarak kullanabilirsiniz


## Video referansları:

[![CHC-E Linux Tex kanalında](readme-src/CHC-E-Linux-Tex.png)](https://www.youtube.com/watch?v=ayvE_qw0YLk&t=613s)

[![CHC-E The Linux Experiment kanalında](readme-src/CHC-E-The-Linux-Experiment.png)](https://www.youtube.com/watch?v=KtjYPMCvQ7Y&t=519s)


## Değişiklik Günlüğü

[CHANGELOG.md](CHANGELOG.md)

## Sürükle ve Bırak (DND) Pencere Küçük Görselleri

Pencere küçük görselleri, ekranda şu anda görünmeyen pencereleri izlemek için kullanılabilen küçültülmüş pencere klonlarıdır. Küçük görselin varsayılan konumu, mevcut monitörün sağ alt köşesidir. İstediğiniz kadar klon oluşturabilir ve ekranın herhangi bir yerine yerleştirebilirsiniz. Her küçük görsel bağımsız olarak yeniden boyutlandırılabilir, saydamlığı ayarlanabilir ve hatta kaynak penceresi değiştirilebilir. Küçük görselin kaynak penceresi kapatıldığında, küçük görsel de kaldırılır.

| Kontrol | Eylem |
| ------- | ----- |
| Çift tıklama         | kaynak pencereyi etkinleştir |
| Birincil tıklama     | kaydırma tekerleği işlevini değiştir (yeniden boyutlandırma / kaynak değiştirme) |
| Kaydırma tekerleği   | yeniden boyutlandır veya kaynak pencereyi değiştir |
| Ctrl + Kaydırma tekerleği | kaynak pencereyi değiştir veya yeniden boyutlandır |
| İkincil tıklama      | tam boyutlu pencere önizlemesini göster ve fareyle üzerine gelindiğinde gösterimi aç/kapat |
| Shift + Kaydırma tekerleği | küçük görsel saydamlığını değiştir |

![Eklenti yapılandırma penceresi](screenshot.png)


## Kurulum

Bu eklentiyi birkaç farklı yolla kurabilirsiniz.

### extensions.gnome.org üzerinden kurulum

Custom Hot Corners - Extended eklentisini kurmanın en kolay yolu: [extensions.gnome.org](https://extensions.gnome.org/extension/4167/custom-hot-corners-extended/) adresine gidin ve anahtarı açın. Bu yöntemle kurulum yaptığınızda, gelecekte otomatik güncellemeler de alırsınız.

### En son Github sürümünden kurulum

Aşağıdaki komutla en son sürüm arşivini indirin:

    wget https://github.com/G-dH/custom-hot-corners-extended/releases/latest/download/custom-hot-corners-extended@G-dH.github.com.zip

Eklentiyi kurun (`--force` seçeneği yalnızca eklentinin bir sürümü zaten kuruluysa gereklidir):

    gnome-extensions install --force custom-hot-corners-extended@G-dH.github.com.zip

### Kaynak koddan kurulum

Github deposundaki en güncel sürümü (genellikle yeterince stabil çalışır çünkü kendi sistemimde de bu kodu kullanıyorum) test etmek isterseniz, aşağıdaki kılavuzu takip edebilirsiniz.

Şu komutları sağlayan paketlerin sisteminizde kurulu olduğundan emin olun: `glib-compile-resources`, `glib-compile-schemas`, `git`

##### GNOME 45+

    git clone https://github.com/erogluyusuf/custom-hot-corners-extended.git
    cd custom-hot-corners-extended
    make install

##### GNOME 3.36 - 44

    git https://github.com/erogluyusuf/custom-hot-corners-extended.git
    cd custom-hot-corners-extended
    git checkout gnome-3.36-44
    make install


### Arch tabanlı dağıtımlarda AUR üzerinden kurulum

*Custom Hot Corners - Extended* için bir AUR deposu da mevcut (ama bununla ilgili başka bir bilgim yok):  
[https://aur.archlinux.org/packages/gnome-shell-extension-custom-hot-corners-extended](https://aur.archlinux.org/packages/gnome-shell-extension-custom-hot-corners-extended)

## Kurulu eklentiyi etkinleştirme

Kurulumdan sonra eklentiyi etkinleştirmeniz gerekir. Yalnızca extensions.gnome.org üzerinden yapılan doğrudan kurulum, kodu yükleyip eklentiyi hemen etkinleştirir.

- Önce GNOME Shell’i yeniden başlatın (`Alt` + `F2`, `r`, `Enter`) veya Wayland kullanıyorsanız oturumu kapatıp tekrar açın
- Daha sonra *Eklentiler* uygulamasında (veya eski sistemlerde *GNOME Tweak Tool* içinde) yeni eklentiyi göreceksiniz (yeniden açmanız gerekebilir). Buradan eklentiyi etkinleştirebilir ve Tercihler/Ayarlar kısmına erişebilirsiniz.
- Eklentiyi komut satırından da etkinleştirebilirsiniz:

    gnome-extensions enable custom-hot-corners-extended@G-dH.github.com

## Katkı

Katkılar memnuniyetle karşılanır ve tüm önerilere olabildiğince hızlı yanıt vermeye çalışacağım.

### Çeviriler

Kendi dilinizde çeviriyle katkıda bulunabilirsiniz. Kaynak `.pot` dosyasını oluşturmak için, klonladığınız git deposu içinde şu komutu kullanabilirsiniz:

    make pot

Daha sonra çeviri yapmak için `Poedit` uygulamasını kullanabilir ve `.po` dosyasına aktarabilirsiniz.

### Bana bir kahve ısmarla

Eğer yaptığım işi beğeniyorsanız ve beni motive etmek isterseniz, bana bir kahve ısmarlayabilirsiniz:  
[buymeacoffee.com/georgdh](https://buymeacoffee.com/georgdh)

## Katkıda Bulunanlar

Bu eklentiyi geliştirirken birçok eklenti ve geliştiriciden ilham aldım, koduma katkı sağlayan başlıca kişileri belirtmeye çalışacağım:
- [Simon Shneegans](https://schneegans.github.io/) - harika bir geliştirici, eklentilerim için yeni Make dosyaları sağlayan ve bana büyük ilham veren biri.
- [True Color Invert](https://github.com/jackkenney/gnome-true-color-invert) - kafa karıştırıcı ismine rağmen çok faydalı bir eklenti. Shader efektleriyle tanışmamı sağladı ve 'Parlaklığı Tersine Çevir' eyleminde ve diğer renk filtrelerinde bu eklentinin değiştirilmiş kodunu kullanıyorum.
- [GS Connect](https://github.com/GSConnect/gnome-shell-extension-gsconnect/wiki) - CHC-E, bu mükemmel eklentiden kopyalanan kısayol tuşları modülüne dayanıyor.
- Ve tabii ki, bu eklentinin temeli olan orijinal 'Custom Hot Corners' eklentisi.
