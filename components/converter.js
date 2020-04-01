const getItems = require('./extractor').getItems;

function itemsProcessingPromise(language) {
    // processing code
    return getItems(language);
}

module.exports = {
    itemsProcessingPromise: itemsProcessingPromise
}