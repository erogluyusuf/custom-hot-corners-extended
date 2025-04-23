/**
 * Custom Hot Corners - Extended
 * OptionsPage
 *
 * @author     GdH <G-dH@github.com>
 * @copyright  2021-2024
 * @license    GPL-3.0
 */

'use strict';

import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';

import * as OptionsFactory from './optionsFactory.js';

// gettext
let _;

export function init(extension) {
    _ = extension.gettext.bind(extension);
}

export function cleanGlobals() {
    _ = null;
}

export const MscOptionsPageAdw = GObject.registerClass(
class MscOptionsPageAdw extends OptionsFactory.OptionsPageAdw {
    _init(mscOptions, pageProperties = {}) {
        const optionList = getOptionList(mscOptions);
        super._init(optionList, pageProperties);
    }
});

function getOptionList(mscOptions) {
    const itemFactory = new OptionsFactory.ItemFactory(mscOptions);

    let optionsList = [];
    // options item format:
    // [text, caption, widget, settings-variable, options for combo]

    optionsList.push(
        itemFactory.getRowWidget(
            _('Global ayarlar'),
            null, null, null
        )
    );

    optionsList.push(
        itemFactory.getRowWidget(
            _('Panel Menüsünü Göster'),
            _('Ana paneldeki menü, ayarlara erişim sağlar ve gerekirse köşe tetikleyicilerini devre dışı bırakmanıza olanak tanır.'),
            itemFactory.newSwitch(), 'enablePanelMenu'
        )
    );

    optionsList.push(
        itemFactory.getRowWidget(
            _('Harici geçersiz kılmalar için köşeleri izleyin'),
            _('Köşeler bir şeyler (genellikle diğer uzantılar) tarafından değiştirildiğinde güncelleştir.'),
            itemFactory.newSwitch(), 'watchCorners'
        )
    );

    let actionDelayAdjustment = new Gtk.Adjustment({
        upper: 1000,
        step_increment: 10,
        page_increment: 10,
    });

    optionsList.push(
        itemFactory.getRowWidget(
            _('Eylemler arasındaki minimum gecikme (ms)'),
            _('Kazara çift eylemi engeller. Ses kontrolü tarafından göz ardı edilir.'),
            itemFactory.newSpinButton(actionDelayAdjustment),
            'actionEventDelay'
        )
    );

    optionsList.push(
        itemFactory.getRowWidget(
            _('Dalgalanma animasyonlarını göster'),
            _('Bir eylemi tetiklediğinizde, dalgalar ilgili köşeden animasyonlu olarak yayılır.'),
            itemFactory.newSwitch(),
            'rippleAnimation'
        )
    );

    optionsList.push(
        itemFactory.getRowWidget(
            _('Doğrudan köşe tetikleyicileri için Shift tuşu gereklidir.'),
            _('Ctrl tuşu olmadan doğrudan erişilebilen tüm köşe tetikleyicilerinin etkinleştirilmesi için Shift tuşunun basılı tutulması gerekir. Bu seçenek, özellikle tam ekran oyunları gibi durumlarda kazara köşe tetikleyicilerinin etkinleşmesini önlemek amacıyla, geçici bir çözüm olarak tasarlanmıştır ve aynı zamanda bir klavye kısayolu veya fare tetikleyicisi ile erişilebilir.'),
            itemFactory.newSwitch(), 'hotCornersRequireShift'
        )
    );

    optionsList.push(
        itemFactory.getRowWidget(
            _('Fare düğmeleri, basma olayı ile tetiklenir.'),
            _('Fare düğmesine basıldığında, düğmeyi bıraktığınızda yerine bir eylemi tetiklersiniz. Serbest bırakma olayında tetikleme varsayılan olarak kullanılır çünkü monitör kenarına yakın alanlardan nesneleri sürüklerken kazara tetiklemeyi minimize eder (örneğin, üst panelden sürükleyerek pencereyi küçültme veya kaydırma çubuklarını kullanma). Küçük bir dezavantajı ise, düğmeye basma ve bırakma arasındaki gecikmeden kaynaklanan daha uzun bir tepki süresidir.'),
            itemFactory.newSwitch(), 'buttonsTriggerOnPress'
        )
    );

    optionsList.push(
        itemFactory.getRowWidget(
            _('Yedek köşe tetikleyicilerini kullan'),
            _("Eğer basınç bariyerleri çalışmazsa, bu seçenek köşe üzerine fareyle gelerek köşe eylemini tetiklemeye olanak tanır."),
            itemFactory.newSwitch(),
            'barrierFallback'
        )
    );

    optionsList.push(
        itemFactory.getRowWidget(
            _('Etkin köşeleri / kenarları görünür yap'),
            _('Hangi köşelerin etkin olduğunu ve bunların boyut/genişletme ayarlarını gösterir. Basınç bariyerleri yeşil, tıklanabilir alanlar ise turuncudur.'),
            itemFactory.newSwitch(),
            'cornersVisible'
        )
    );

    optionsList.push(
        itemFactory.getRowWidget(
            _('Window switcher'),
            null,
            null
        )
    );

    optionsList.push(
        itemFactory.getRowWidget(
            _('Dönme (Wraparound)'),
            _('Anahtarın, son pencereden ilk pencereye ve tersi yönde devam edip etmeyeceğini belirler.'),
            itemFactory.newSwitch(),
            'winSwitchWrap'
        )
    );

    optionsList.push(
        itemFactory.getRowWidget(
            _('Kararlı sıralama'),
            _("Varsayılan olarak, pencereler, kullanıcı tarafından her etkinleştirildiğinde zaman damgalarıyla güncellenen MRU (En Son Kullanılan) AltTab listesine göre sıralanır. Kararlı sıralama ise her pencerenin oluşturulduğunda aldığı benzersiz kimlik (ID) ile belirlenir."),
            itemFactory.newSwitch(),
            'winStableSequence'
        )
    );

    optionsList.push(
        itemFactory.getRowWidget(
            _('Küçültülenleri atla'),
            _('Küçültülen pencereleri anahtar listesinde hariç tut.'),
            itemFactory.newSwitch(),
            'winSkipMinimized'
        )
    );

    optionsList.push(
        itemFactory.getRowWidget(
            _('Efektler için Özel Renkler'),
            null,
            null
        )
    );

    optionsList.push(
        itemFactory.getRowWidget(
            _('Ton Rengi'),
            _("'Özel Renk Tonu' eylemi için renk. Daha açık renk, daha zayıf filtre anlamına gelir."),
            itemFactory.newColorButton(),
            'customTintColor'
        )
    );

    return optionsList;
}
