const  express = require('express');
const  router = express.Router();
const  path = require('path');
const  dataService = require('../components/converter');

/* GET home page. */
router.get('/*', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'public', 'index.html'));
});

router.post('/getWeaponList', function (req, res, next) {
    if (req.body.getLocal) {
        res.send(dataService.getLocalData('weapon', req.body.lang));
    } else {
        dataService.getUpdatedData('en').then(function(data) {
            res.send(JSON.stringify(data));
        });
    }
});

module.exports = router;