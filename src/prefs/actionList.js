/**
 * Custom Hot Corners - Extended
 * ActionList
 *
 * @author     GdH <G-dH@github.com>
 * @copyright  2021-2024
 * @license    GPL-3.0
 */

'use strict';

let _;

export let actionList;
export let excludedItems;

import * as Utils from '../common/utils.js';

export function init(extension) {
    _ = extension.gettext.bind(extension);

    actionList = [];
    excludedItems = [];
    const AatwsEnabled = Utils.extensionEnabled('advanced-alt-tab@G-dH');
    // for prefs only - extension detects, prefs reads key
    const AatwsDetected = Utils.isSupportedExtensionDetected('aatws');
    // in gsettings enabled-extension key can remain uninstalled extensions, so it is not reliable
    if (!AatwsEnabled || (AatwsEnabled && !AatwsDetected)) {
        excludedItems.push('win-switcher-popup-ws');
        excludedItems.push('win-switcher-popup-mon');
        excludedItems.push('win-switcher-popup-ws-first');
        excludedItems.push('win-switcher-popup-apps');
        excludedItems.push('win-switcher-popup-class');
        excludedItems.push('win-switcher-popup-search');
        excludedItems.push('app-switcher-popup-ws');
        excludedItems.push('app-switcher-popup-mon');
        excludedItems.push('prev-workspace-popup');
        excludedItems.push('next-workspace-popup');
    }
    const ArcMenuEnabled = Utils.extensionEnabled('arcmenu@arcmenu.com');
    const ArcMenuDetected = Utils.isSupportedExtensionDetected('arcmenu');
    excludedItems = [];
    if (!ArcMenuEnabled || (ArcMenuEnabled && !ArcMenuDetected))
        excludedItems.push('toggle-arcmenu');

    const VShellEnabled = Utils.extensionEnabled('vertical-workspaces');
    const VShellDetected = Utils.isSupportedExtensionDetected('window-search-provider');
    if (!VShellEnabled || (VShellEnabled && !VShellDetected))
        excludedItems.push('search-open-windows');

    // in extension itself I'd test real workspace configuration
    // but settings.js is also used by prefs from which the GS code is unaccessible
    const horizontal = true;
    const prevWS = horizontal ? _('Left') : _('Yukarı');
    const nextWS = horizontal ? _('Right') : _('Aşağı');
    const prevIcon = horizontal ? 'go-previous-symbolic' : 'go-up-symbolic';
    const nextIcon = horizontal ? 'go-next-symbolic' : 'go-down-symbolic';

    //  [0.root/submenu, 1.action key,        2.action name,                       3.accelerator allowed,    4.icon name                    5.action needs window
    actionList = [
        [0,    'disabled',                    _('Devredışı'),                                       false,  '',                                           false],
        [null, 'core-submenu',                _('Temel Eylemler'),                             true,  'video-display-symbolic',                     false],
        [1,    'toggle-overview',             _('Özet Görünümünü Aç/Kapat - Pencere Seçici'), false,  'view-grid-symbolic',                         false],
        [1,    'show-overview',               _('Özet Görünümünü Göster - Pencere Seçici'),   false,  'view-grid-symbolic',                         false],
        [1,    'toggle-overview-app',         _('Özet Görünümünü Aç/Kapat - Geçerli Uygulama Pencereleri'), false,  'focus-windows-symbolic',                      true],
        [1,    'toggle-applications',         _('Özet Görünümünü Aç/Kapat - Uygulama Izgarası'), false,  'view-app-grid-symbolic',                     false],
        [1,    'show-applications',           _('Özet Görünümünü Göster - Uygulama Izgarası'), false,  'view-app-grid-symbolic',                     false],
        [1,    'run-command',                 _('Önceden Ayarlanmış Komut Çalıştır / Uygulama Aktifleştir ...'), false,  'utilities-terminal-symbolic',                false],
        [1,    'show-desktop',                _('Masaüstünü Göster (tüm monitörler)'),        true,  'preferences-desktop-wallpaper-symbolic',     false],
        [1,    'show-desktop-mon',            _('Masaüstünü Göster (geçerli monitör)'),       true,  'preferences-desktop-wallpaper-symbolic',     false],
        [1,    'show-screenshot-ui',          _('Ekran Görüntüsü Aracını Aktifleştir'),       false,  'media-record-symbolic',                      false],
        [1,    'black-screen',                _('Ekran İçeriğini Gizle (tüm monitörler)'),    true,  'video-display-symbolic',                     false],
        [1,    'black-screen-mon',            _('Ekran İçeriğini Gizle (geçerli monitör)'),   true,  'video-display-symbolic',                     false],
        [null, 'supported-extensions',        _('Desteklenen Yüklenmiş Eklentiler'),          false,  'utilities-terminal-symbolic',                false],
        [1,    'search-open-windows',         _('OFP/V-Shell - Açık Pencereleri Listele/Ara'),  false,  'focus-windows-symbolic',                     false],
        [1,    'toggle-arcmenu',              _('ArcMenu - Aç'),                          false,  'view-grid-symbolic',                         false],
    
        [null, 'workspaces-submenu',          _('Çalışma Alanları'),                               true,  'video-display-symbolic',                     false],
        [1,    'prev-workspace',              _('Önceki Çalışma Alanı'),                      false,   prevIcon,                                    false],
        [1,    'next-workspace',              _('Sonraki Çalışma Alanı'),                          false,   nextIcon,                                    false],
        [1,    'prev-workspace-popup',        _('Önceki Çalışma Alanı ile Pencere Değiştirici'),  true,   prevIcon,                                    false],
        [1,    'next-workspace-popup',        _('Sonraki Çalışma Alanı ile Pencere Değiştirici'),      true,   nextIcon,                                    false],
        [1,    'prev-workspace-current-mon',  _('Önceki Çalışma Alanı - Sadece Geçerli Monitör'), true,  prevIcon,                                    false],
        [1,    'next-workspace-current-mon',  _('Sonraki Çalışma Alanı - Sadece Geçerli Monitör'),    true,   prevIcon,                                    false],
        [1,    'recent-workspace',            _('En Son Kullanılan Çalışma Alanına Geç'),          true,  'document-open-recent-symbolic',              false],
        [1,    'move-to-workspace',           _('Önceden Ayarlanmış Çalışma Alanına Geç ...'),          false,  'go-jump-symbolic',                           false],
        [1,    'move-to-second-last-ws',      _('İkinci Son Çalışma Alanına Geç'),          true,  'go-jump-symbolic',                           false],
        [1,    'reorder-ws-prev',             _(`Çalışma Alanını Yeniden Sıralama - ${prevWS}`),            true,  prevIcon,                                     false],
        [1,    'reorder-ws-next',             _(`Çalışma Alanını Yeniden Sıralama - ${nextWS}`),            true,  nextIcon,                                     false],
        [1,    'rotate-ws-prev-mon',          _(`Çalışma Alanlarında Pencereleri Döndür ${prevWS} (monitör)`),  true,  prevIcon,                        false],
        [1,    'rotate-ws-next-mon',          _(`Çalışma Alanlarında Pencereleri Döndür ${nextWS} (monitör)`),  true,  prevIcon,                        false],
        [1,    'close-workspace',             _('Geçerli Çalışma Alanını Kapat (ve pencerelerini)'), true,  'window-close-symbolic',                     false],
    
        [null, 'win-navigation-submenu',      _('Pencereler - Navigasyon'),                     true,  'focus-windows-symbolic',                     false],
        [1,    'recent-win',                  _('En Son Kullanılan Pencereye Geç'),             true,  'document-open-recent-symbolic',              false],
        [1,    'prev-win-mon',                _('Önceki Pencere (geçerli monitör)'),        true,  'go-previous-symbolic',                       false],
        [1,    'prev-win-ws',                 _('Önceki Pencere (geçerli Çalışma Alanı)'),             true,  'go-previous-symbolic',                       false],
        [1,    'prev-win-all',                _('Önceki Pencere (tüm monitörler)'),                    true,  'go-previous-symbolic',                       false],
        [1,    'prev-win-all-app',            _('Önceki Pencere - Geçerli Uygulama (tüm monitörler)'),      true,  'go-previous-symbolic',                       false],
        [1,    'next-win-mon',                _('Sonraki Pencere (geçerli monitör)'),            true,  'go-next-symbolic',                           false],
        [1,    'next-win-ws',                 _('Sonraki Pencere (geçerli Çalışma Alanı)'),                 true,  'go-next-symbolic',                           false],
        [1,    'next-win-all',                _('Sonraki Pencere (tüm monitörler)'),                        true,  'go-next-symbolic',                           false],
        [1,    'next-win-all-app',            _('Sonraki Pencere - Geçerli Uygulama (tüm monitörler)'),          true,  'go-next-symbolic',                           false],
        [null, 'win-switcher-popup-submenu',  _('Pencereler/Uygulamalar - Değiştirici Popuplar'),            true,  'focus-windows-symbolic',                     false],
        [1,    'win-switcher-popup-all',      _('Pencere Değiştirici Popup (tüm/varsayılan)'),      true,  'focus-windows-symbolic',                     false],
        [1,    'win-switcher-popup-ws',       _('Pencere Değiştirici Popup (geçerli çalışma alanı)'),       true,  'focus-windows-symbolic',                     false],
        [1,    'win-switcher-popup-mon',      _('Pencere Değiştirici Popup (geçerli monitör)'),  true,  'focus-windows-symbolic',                     false],
        [1,    'win-switcher-popup-ws-first', _('Pencere Değiştirici Popup (öncelikli geçerli çalışma alanı)'), true,  'focus-windows-symbolic',                     false],
        [1,    'win-switcher-popup-apps',     _('Pencere Değiştirici Popup (uygulamalara göre sıralı)'),   true,  'focus-windows-symbolic',                     false],
        [1,    'win-switcher-popup-class',    _('Pencere Değiştirici Popup (yalnızca odaklanmış uygulama)'), true,  'focus-windows-symbolic',                     false],
        [1,    'app-switcher-popup-all',      _('Uygulama Değiştirici Popup (tüm/varsayılan)'),         true,  'focus-windows-symbolic',                     false],
        [1,    'app-switcher-popup-ws',       _('Uygulama Değiştirici Popup (geçerli çalışma alanı)'),          true,  'focus-windows-symbolic',                     false],
        [1,    'app-switcher-popup-mon',      _('Uygulama Değiştirici Popup (geçerli monitör)'),     true,  'focus-windows-symbolic',                     false],
    
        [null, 'win-control-submenu',         _('Pencereler - Kontrol'),                        true,  'focus-windows-symbolic',                     false],
        [1,    'minimize-win',                _('Pencereyi Küçült'),                         false,  'window-minimize-symbolic',                    true],
        [1,    'maximize-win',                _('Pencereyi Maksimize Et (değiştir)'),                false,  'window-maximize-symbolic',                    true],
        [1,    'close-win',                   _('Pencereyi Kapat'),                            false,  'window-close-symbolic',                       true],
        [1,    'fullscreen-win',              _('Pencereyi Tam Ekran Yap (değiştir)'),              false,  'view-fullscreen-symbolic',                    true],
        [1,    'fullscreen-on-empty-ws',      _('Yeni Çalışma Alanında Tam Ekran Penceresi (değiştir)'),     true,  'view-fullscreen-symbolic',                    true],
        [1,    'above-win',                   _('Her Zaman Üstte Olan Pencere (değiştir)'),           false,  'go-top-symbolic',                             true],
        [1,    'stick-win',                   _('Her Zaman Görünür Çalışma Alanında Pencere (değiştir)'),    false,  'view-pin-symbolic',                           true],
        [1,    'open-new-window',             _('Yeni Pencere Aç (destekleniyorsa)'),           true,  'media-playback-start-symbolic',               true],
        [1,    'quit-app',                    _('Odaklanmış Uygulamayı Kapat'),                 true,  'window-close-symbolic',                       true],
        [1,    'kill-app',                    _('Odaklanmış Uygulamayı Zorla Kapat'),           true,  'process-stop-symbolic',                       true],
        [1,    'unminimize-all-ws',           _('Tüm Pencereleri Yeniden Aç (çalışma alanı)'),       true,  'window-restore-symbolic',                     true],
        [1,    'unminimize-all',              _('Tüm Pencereleri Yeniden Aç'),                   true,  'window-restore-symbolic',                     true],
    
        [null, 'win-reloc-submenu',           _('Pencereler - Taşıma İşlemleri'),                    true,  'focus-windows-symbolic',                     false],
        [1,    'move-win-to-prev-ws',         _('Pencereyi Önceki çalışma alanına taşı'),        true,  prevIcon,                                      true],
        [1,    'move-win-to-prev-new-ws',     _('Pencereyi Yeni çalışma alanına Taşı - Önceki'),        true,  prevIcon,                                      true],
        [1,    'move-win-to-next-ws',         _('Pencereyi Sonraki çalışma alanına taşı'),            true,  nextIcon,                                      true],
        [1,    'move-win-to-next-new-ws',     _('Pencereyi Yeni çalışma alanına Taşı - Sonraki'),        true,  nextIcon,                                      true],
        [1,    'move-app-to-prev-ws',         _('Uygulama Pencerelerini Önceki Çalışma Alanına Taşı'),       true,  prevIcon,                                      true],
        [1,    'move-app-to-prev-new-ws',     _('Uygulama Pencerelerini Yeni Çalışma Alanına Taşı - Önceki'),   true,  prevIcon,                                      true],
        [1,    'move-app-to-next-ws',         _('Uygulama Pencerelerini Sonraki Çalışma Alanına Taşı'),       true,  nextIcon,                                      true],
        [1,    'move-app-to-next-new-ws',     _('Uygulama Pencerelerini Yeni Çalışma Alanına Taşı - Sonraki'),   true,  nextIcon,                                      true],
        [1,    'move-win-to-next-monitor',    _('Pencereyi Sonraki Monitöre Taşı'),              true,  'video-display-symbolic',                      true],
    
        [null, 'win-thumbnails-submenu',      _('WTMB (Pencere Küçük Resimleri) eklentisi'),      false,  '',                                           false],
        [1,    'make-thumbnail-win',          _('Pencere Küçük Resmi Oluştur (PIP)'),           false,  'insert-image-symbolic',                       true],
        [1,    'minimize-to-thumbnail',       _('Pencereyi Küçük Resme Küçült'),            false,  'insert-image-symbolic',                       true],
        [1,    'remove-win-thumbnails',       _('Tüm Pencere Küçük Resimlerini Kaldır'),            false,  'window-close-symbolic',                      false],
        [null, 'win-adjust-submenu',          _('Pencereler - Görsel Ayarlamalar'),             true,  'view-reveal-symbolic',                       false],
        [1,    'bright-up-win',               _('Parlaklık Arttır (pencere)'),                   true,  'display-brightness-symbolic',                 true],
        [1,    'bright-down-win',             _('Parlaklık Azalt (pencere)'),                 true,  'display-brightness-symbolic',                 true],
        [1,    'contrast-up-win',             _('Kontrast Arttır (pencere)'),                     true,  'view-reveal-symbolic',                        true],
        [1,    'contrast-down-win',           _('Kontrast Azalt (pencere)'),                   true,  'view-reveal-symbolic',                        true],
        [1,    'contrast-high-win',           _('Yüksek Kontrast (pencere)'),                   true,  'view-reveal-symbolic',                        true],
        [1,    'contrast-low-win',            _('Düşük Kontrast (pencere)'),                    true,  'view-reveal-symbolic',                        true],
        [1,    'opacity-up-win',              _('Opasiteyi Arttır (pencere)'),                      true,  'view-reveal-symbolic',                        true],
        [1,    'opacity-down-win',            _('Opasiteyi Azalt (pencere)'),                    true,  'view-reveal-symbolic',                        true],
        [1,    'opacity-toggle-win',          _('Opasite 78% (pencere)'),                     true,  'view-reveal-symbolic',                        true],
        [1,    'opacity-toggle-hc-win',       _('Koyu temalar için opasite 78% (pencere)'),     true,  'view-reveal-symbolic',                        true],
        [1,    'opacity-toggle-lc-win',       _('Opasite 94% + biraz kontrast (pencere)'),   true,  'view-reveal-symbolic',                        true],
    
        [null, 'win-effects-submenu',         _('Pencereler - Renk Efektleri'),                  true,  'view-reveal-symbolic',                        true],
        [1,    'invert-light-win',            _('Aydınlık Ters Çevir (pencere)'),                true,  'view-reveal-symbolic',                        true],
        [1,    'invert-light-shift-win',      _('Aydınlık Ters Çevir - Beyazı Griye Çevir (pencere)'), true,  'view-reveal-symbolic',                       true],
        [1,    'invert-colors-win',           _('Renkleri Ters Çevir (pencere)'),                   true,  'view-reveal-symbolic',                        true],
        [1,    'tint-red-toggle-win',         _('Kırmızı Renk Tonu (pencere)'),                        true,  'view-reveal-symbolic',                        true],
        [1,    'tint-green-toggle-win',       _('Yeşil Renk Tonu (pencere)'),                      true,  'view-reveal-symbolic',                        true],
        [1,    'tint-custom-toggle-win',      _('Özel Renk Tonu (pencere)'),               true,  'view-reveal-symbolic',                        true],
        [1,    'desaturate-win',              _('Desatüre Et (pencere)'),                      true,  'view-reveal-symbolic',                        true],
        [1,    'remove-effects-win',          _('Tüm Efektleri Kaldır (pencere)'),              true,  'window-close-symbolic',                       true],
        [null, 'global-effects-submenu',      _('Global Görsel Efektler'),                    true,  'view-reveal-symbolic',                       false],
        [1,    'bright-up-all',               _('Parlaklık Arttır (genel)'),                   true,  'display-brightness-symbolic',                false],
        [1,    'bright-down-all',             _('Parlaklık Azalt (genel)'),                 true,  'display-brightness-symbolic',                false],
        [1,    'contrast-up-all',             _('Kontrast Arttır (genel)'),                     true,  'view-reveal-symbolic',                       false],
        [1,    'contrast-down-all',           _('Kontrast Azalt (genel)'),                   true,  'view-reveal-symbolic',                       false],
        [1,    'contrast-high-all',           _('Yüksek Kontrast (genel)'),                   true,  'view-reveal-symbolic',                       false],
        [1,    'contrast-low-all',            _('Düşük Kontrast (genel)'),                    true,  'view-reveal-symbolic',                       false],
        [1,    'invert-light-all',            _('Aydınlık Ters Çevir (genel)'),                true,  'view-reveal-symbolic',                       false],
        [1,    'invert-light-shift-all',      _('Aydınlık Ters Çevir - Beyazı Griye Çevir (genel)'), true,  'view-reveal-symbolic',                      false],
        [1,    'tint-red-toggle-all',         _('Kırmızı Renk Tonu (genel)'),                        true,  'view-reveal-symbolic',                       false],
        [1,    'tint-green-toggle-all',       _('Yeşil Renk Tonu (genel)'),                      true,  'view-reveal-symbolic',                       false],
        [1,    'tint-custom-toggle-all',      _('Özel Renk Tonu (genel)'),               true,  'view-reveal-symbolic',                       false],
        [1,    'desaturate-all',              _('Desatüre Et (genel)'),                      true,  'view-reveal-symbolic',                       false],
        [1,    'remove-effects-all',          _('Tüm Efektleri Kaldır (genel)'),              true,  'window-close-symbolic',                      false],
        [null, 'access-submenu',              _('Evrensel Erişim'),                         true,  'preferences-desktop-accessibility-symbolic', false],
        [1,    'toggle-zoom',                 _('Büyüteç - 2x Zoom (aç/kapa)'),             true,  'zoom-in-symbolic',                           false],
        [1,    'zoom-in',                     _('Büyüteç - Yakınlaştır'),                      true,  'zoom-in-symbolic',                           false],
        [1,    'zoom-out',                    _('Büyüteç - Uzaklaştır'),                     true,  'zoom-out-symbolic',                          false],
        [1,    'screen-reader',               _('Ekran Okuyucu (aç/kapa)'),                   true,  'audio-speakers-symbolic',                    false],
        [1,    'large-text',                  _('Büyük Metin (aç/kapa)'),                      true,  'insert-text-symbolic',                       false],
        [1,    'keyboard',                    _('Ekran Klavyesi (aç/kapa)'),                 true,  'input-keyboard-symbolic',                    false],
        [1,    'invert-light-all',            _('Aydınlık Ters Çevir (genel)'),                true,  'view-reveal-symbolic',                       false],
        [1,    'protan-toggle',               _('Renk Düzeltme - Protanopi (pencere)'),   true,  'view-reveal-symbolic',                        true],
        [1,    'deuter-toggle',               _('Renk Düzeltme - Deuteranopi (pencere)'), true,  'view-reveal-symbolic',                        true],
        [1,    'tritan-toggle',               _('Renk Düzeltme - Tritanopi (pencere)'),   true,  'view-reveal-symbolic',                        true],
        [1,    'protan-sim-toggle',           _('Renk Simülasyonu - Protanopi (pencere)'),   true,  'view-reveal-symbolic',                        true],
        [1,    'deuter-sim-toggle',           _('Renk Simülasyonu - Deuteranopi (pencere)'), true,  'view-reveal-symbolic',                        true],
        [1,    'tritan-sim-toggle',           _('Renk Simülasyonu - Tritanopi (pencere)'),   true,  'view-reveal-symbolic',                        true],
        [1,    'mixer-gbr-toggle',            _('Renk Karıştırıcı GBR'),                          true,  'view-reveal-symbolic',                        true],
    
        [null, 'gnome-submenu',               _('GNOME'),                                    true,  'start-here-symbolic',                        false],
        [1,    'night-light-toggle',          _('Gece Işığına Geçiş'),                       true,  'night-light-symbolic',                       false],
        [1,    'toggle-theme',                _('Koyu Gtk Temasına Geçiş'),                    true,  'view-reveal-symbolic',                       false],
        [1,    'hide-panel',                  _('Ana Paneli Gizle/Göster'),                     true,  'focus-top-bar-symbolic',                     false],
        [1,    'open-panel-system-menu',      _('Panel Hızlı Ayarları Menüsünü Aç'),           true,  'open-menu-symbolic',                         false],
        [1,    'open-panel-date-menu',        _('Panel Tarih Menüsünü Aç'),                     true,  'open-menu-symbolic',                         false],
        [null, 'system-submenu',              _('Sistem'),                                   true,  'system-run-symbolic',                        false],
        [1,    'lock-screen',                 _('Ekranı Kilitle'),                             false,  'changes-prevent-symbolic',                   false],
        [1,    'screensaver',                 _('Ekran Koruyucuyu Aktifleştir'),                     true,  'preferences-desktop-screensaver-symbolic',   false],
        [1,    'suspend',                     _('RAM’e Askıya Al'),                           true,  'weather-clear-night-symbolic',               false],
        [1,    'power-off',                   _('Kapatma Diyaloğu'),                         true,  'system-shutdown-symbolic',                   false],
        [1,    'log-out',                     _('Çıkış Yapma Diyaloğu'),                           true,  'system-log-out-symbolic',                    false],
        [1,    'switch-user',                 _('Kullanıcıyı Değiştir (varsa)'),                  true,  'system-switch-user-symbolic',                false],
    
        [null, 'media-submenu',               _('Ses / Medya'),                            true,  'audio-volume-medium-symbolic',               false],
        [1,    'volume-up',                   _('Ses Seviyesi Artır'),                               false,  'audio-volume-high-symbolic',                 false],
        [1,    'volume-down',                 _('Ses Seviyesi Azalt'),                             false,  'audio-volume-low-symbolic',                  false],
        [1,    'mute-sound',                  _('Sesi Kapat (aç/kapa)'),                     false,  'audio-volume-muted-symbolic',                false],
        [1,    'mpris-play-pause',            _('Medya Tuşu - Oynat/Duraklat'),                  false,  'media-playback-start-symbolic',              false],
        [1,    'mpris-next',                  _('Medya Tuşu - Sonraki Parça'),                  false,  'media-skip-forward-symbolic',                false],
        [1,    'mpris-prev',                  _('Medya Tuşu - Önceki Parça'),              false,  'media-skip-backward-symbolic',               false],
        [1,    'mpris-play-pause-spotify',    _('Spotify - Oynat/Duraklat'),                    false,  'media-playback-start-symbolic',              false],
        [1,    'mpris-next-spotify',          _('Spotify - Sonraki Parça'),                    false,  'media-skip-forward-symbolic',                false],
        [1,    'mpris-prev-spotify',          _('Spotify - Önceki Parça'),                false,  'media-skip-backward-symbolic',               false],
        [1,    'mpris-play-pause-firefox',    _('Firefox - Oynat/Duraklat'),                    false,  'media-playback-start-symbolic',              false],
        [1,    'mpris-next-firefox',          _('Firefox - Sonraki Parça'),                    false,  'media-skip-forward-symbolic',                false],
        [1,    'mpris-prev-firefox',          _('Firefox - Önceki Parça'),                false,  'media-skip-backward-symbolic',               false],
        [null, 'custom-menus-submenu',        _('Özel Menüler'),                             true,  'open-menu-symbolic',                         false],
        [1,    'show-custom-menu-1',          _('Özel Menü 1’i Göster'),                       true,  'open-menu-symbolic',                         false],
        [1,    'show-custom-menu-2',          _('Özel Menü 2’yi Göster'),                       true,  'open-menu-symbolic',                         false],
        [1,    'show-custom-menu-3',          _('Özel Menü 3’ü Göster'),                       true,  'open-menu-symbolic',                         false],
        [1,    'show-custom-menu-4',          _('Özel Menü 4’ü Göster'),                       true,  'open-menu-symbolic',                         false],
    
        [null, 'hardware-submenu',            _('Donanım Kontrolü'),                         true,  'system-run-symbolic',                        false],
        [1,    'display-brightness-up',       _('Ekran Parlaklığını Artır (Donanım)'),              false,  'display-brightness-symbolic',                false],
        [1,    'display-brightness-down',     _('Ekran Parlaklığını Azalt (Donanım)'),            false,  'display-brightness-symbolic',                false],
    
        [null, 'debug-submenu',               _('Hata Ayıklama'),                                    true,  'edit-find-symbolic',                         false],
        [1,    'looking-glass',               _('Looking Glass (GNOME Shell hata ayıklayıcı)'),     true,  'edit-find-symbolic',                         false],
        [1,    'lg-inspector',                _('GNOME Shell UI Denetleyicisi'),                 true,  'find-location-symbolic',                     false],
        [1,    'restart-shell',               _('GNOME Shell’i Yeniden Başlat (sadece X11)'),           true,  'view-refresh-symbolic',                      false],
        [1,    'run-prompt',                  _('Çalıştırma Komutu İstemini Göster'),                 false,  'utilities-terminal-symbolic',                false],
        [1,    'swipe-ws-up',                 _('Çalışma Alanını Yukarı Kaydır (Shift modları adım)'),    false,  'input-touchpad-symbolic',                    false],
        [1,    'swipe-ws-down',               _('Çalışma Alanını Aşağı Kaydır (Shift modları adım)'),  false,  'input-touchpad-symbolic',                    false],
        [1,    'swipe-overview-up',           _('Özet Görünümünü Yukarı Kaydır (Shift modları adım)'),     false,  'input-touchpad-symbolic',                    false],
        [1,    'swipe-overview-down',         _('Özet Görünümünü Aşağı Kaydır (Shift modları adım)'),   false,  'input-touchpad-symbolic',                    false],
    
        [null, 'prefs-submenu',               _('CHC-E'),                                    true,  'preferences-system-symbolic',                false],
        [1,    'prefs',                       _('CHC-E Tercihlerini Aç'),                   true,  'preferences-system-symbolic',                false],
        [1,    'hot-corners-require-shift',   _('Hot Corners için Shift Tuşu Gerektir'),         true,  'input-mouse-symbolic',                       false],
        [1,    'update-hot-corners',          _('Hot Corners’ı Sıfırla'),                        true,  'view-refresh-symbolic',                      false],
    ];                   
              
}

export function cleanGlobals() {
    _ = null;
    actionList = null;
    excludedItems = null;
}
