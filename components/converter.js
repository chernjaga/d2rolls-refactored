const getItems = require('./extractor').getItems;
const fs = require('fs-extra');
const path = require('path');
const weaponDataEn = require('../data/en/weapons.json');
const localData = {
    en: weaponDataEn
};

function itemsProcessingPromise(language) {
    return getItems(language).then(data => {
        var inventoryBucket = data.destinyInventoryItemDefinition;
        var collectibleBucket = data.destinyCollectibleDefinition;
        var weapons = {};
        for (let hash in inventoryBucket) {
            let item = inventoryBucket[hash];
            if (item.itemType === 3) {
                var srcData = collectibleBucket[item.collectibleHash] || {};
                weapons[hash] = buildWeaponItem(item, srcData);
            }
        }

        fs.outputFileSync(path.join(__dirname, '../', 'data', language, 'weapons.json'), JSON.stringify(weapons));
        return weapons;
    });
}

function buildWeaponItem(weapon, srcData) {
    try {
        return {
            rarity: weapon.inventory.tierTypeHash || '',
            class: weapon.itemSubType || '',
            damageType: weapon.defaultDamageType || '',
            src: srcData.sourceHash || '',
            ammo: weapon.equippingBlock.ammoType || '',
            descriptions: {
                name: weapon.displayProperties.name || '',
                icon: weapon.displayProperties.icon || '',
                srcString: srcData.sourceString || '',
                classString: weapon.itemTypeDisplayName || '',
                rarityString: weapon.inventory.tierTypeName || ''
            }
        }
    } catch(err) {
        console.warn(err.message);
        console.trace(err);
    }
};

function getLocalData(dataType, language) {
    switch (dataType) {
        case 'weapon': return localData[language];
    };
};

module.exports = {
    getUpdatedData: itemsProcessingPromise,
    getLocalData: getLocalData
}