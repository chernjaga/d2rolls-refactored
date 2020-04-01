var express = require('express');
var router = express.Router();
var path = require('path');
var itemsProcessingPromise = require('../components/extractor').itemsProcessingPromise;

/* GET home page. */
router.get('/*', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'public', 'index.html'));
});

router.post('/getWeaponList', function (req, res, next) {
    console.log(req.body);
    itemsProcessingPromise('en').then(function(data) {
        res.send(JSON.stringify(data));
    });
    next();
});

module.exports = router;