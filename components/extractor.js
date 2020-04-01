const apiKey = require('./apiData').key;
const params =  {
    method: 'get',
    headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'json'
    }
};
const getUrl = function(url) {
    return `https://www.bungie.net/Platform${url}`
};

function getItems (language) {
    return new Promise((resolve) => {
        fetch(getUrl('/Destiny2/Manifest/'), params)
        .then(response => response.json())
        .then(json => {
            var path = json.Response.jsonWorldContentPaths[language];
            fetch('https://www.bungie.net/' + path ,params)
            .then(response => response.json())
            .then(json => {
                resolve(json['DestinyDamageTypeDefinition']);
            })
            .catch(error => {
                console.warn('can\'t get the DestinyDamageTypeDefinition');
            })
        }).catch(error => {
            console.warn('api is not available');
        });
    });
};

module.exports = {
    getItems: getItems
}
