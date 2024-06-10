var express = require('express');
var router = express.Router();


router.get('/time', function(req, res, next) {
    const currentTime = new Date().toLocaleTimeString();
    res.json({ time: currentTime });
});

module.exports = router;
