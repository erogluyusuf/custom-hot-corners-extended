/**
 * Custom Hot Corners - Extended
 * AboutPage
 *
 * @author     GdH <G-dH@github.com>
 * @copyright  2021-2024
 * @license    GPL-3.0
 */

'use strict';

import GObject from 'gi://GObject';

import * as OptionsFactory from './optionsFactory.js';

// gettext
let _;
let Me;

export function init(extension) {
    _ = extension.gettext.bind(extension);
    Me = extension;
}

export function cleanGlobals() {
    _ = null;
    Me = null;
}

export const AboutPageAdw = GObject.registerClass(
class AboutPageAdw extends OptionsFactory.OptionsPageAdw {
    _init(mscOptions, pageProperties = {}) {
        const optionList = getOptionList(mscOptions);
        super._init(optionList, pageProperties);
    }
});

function getOptionList(mscOptions) {
    const itemFactory = new OptionsFactory.ItemFactory(mscOptions);
    const optionList = [];

    optionList.push(itemFactory.getRowWidget(
        Me.metadata.name
    ));

    const versionName = Me.metadata['version-name'] ?? '';
    let version = Me.metadata['version'] ?? '';
    version = versionName && version ? `/${version}` : version;
    const versionStr = `${versionName}${version}`;
    optionList.push(itemFactory.getRowWidget(
        _('Sürüm'),
        null,
        itemFactory.newLabel(versionStr)
    ));

    optionList.push(itemFactory.getRowWidget(
        _('Tüm ayarları sıfırla'),
        _('Tüm tetikleyicileri devre dışı bırakın ve tüm ayarları varsayılan değerlerine sıfırlayın'),
        itemFactory.newOptionsResetButton()
    ));


    optionList.push(itemFactory.getRowWidget(
        _('Linkler')
    ));

    optionList.push(itemFactory.getRowWidget(
        _('Ana Sayfa'),
        _('Bu uzantının kaynak kodu ve daha fazla bilgisi'),
        itemFactory.newLinkButton('https://github.com/G-dH/custom-hot-corners-extended')
    ));

    optionList.push(itemFactory.getRowWidget(
        _('Değişiklik Günlüğü'),
        _("Değişenlere göz atın."),
        itemFactory.newLinkButton('https://github.com/G-dH/custom-hot-corners-extended/blob/main/CHANGELOG.md')
    ));

    optionList.push(itemFactory.getRowWidget(
        _('GNOME Uzantıları'),
        _('GNOME Uzantıları sitesinde uzantıyı puanlayın ve yorum yapın'),
        itemFactory.newLinkButton('https://extensions.gnome.org/extension/4167')
    ));

    optionList.push(itemFactory.getRowWidget(
        _('Bir hata bildirin veya yeni bir özellik önerin'),
        null,
        itemFactory.newLinkButton('https://github.com/G-dH/custom-hot-corners-extended/issues')
    ));

    optionList.push(itemFactory.getRowWidget(
        _('Bana Bir Kahve Ismarla'),
        _('Bu uzantıyı beğendiniz mi? Bir kahve ısmarlıyarak destek olmayı düşünün!'),
        itemFactory.newLinkButton('https://buymeacoffee.com/georgdh')
    ));
    optionList.push(itemFactory.getRowWidget(
        _('Çevirmen'),
        _('Bu uzantıyı Türkçe diline çeriven erogluyusuf\'a teşekkürler!'),
        itemFactory.newLinkButton('https://github.com/erogluyusuf')
    ));

    return optionList;
}
