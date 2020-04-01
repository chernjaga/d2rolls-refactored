const  express = require('express');
const  router = express.Router();
const  path = require('path');
const  itemsProcessingPromise = require('../components/converter').itemsProcessingPromise;

/* GET home page. */
router.get('/*', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../', 'public', 'index.html'));
});

router.post('/getWeaponList', function (req, res, next) {
    console.log(req.body.title);
    itemsProcessingPromise('en').then(function(data) {
        res.send(JSON.stringify(data));
    });
});

module.exports = router;