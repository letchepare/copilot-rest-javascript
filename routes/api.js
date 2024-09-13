var express = require('express');
var router = express.Router();


router.get('/time', function(req, res, next) {
    const currentTime = new Date().toLocaleTimeString();
    res.json({ time: currentTime });
});

router.get("/hello", function (req, res, next) {
  const key = req.query.key;
  if (!key) {
    return res.status(500).json({ message: "key query parameter is required" });
  }
  res.json({ message: `Hello ${key}` });
});
module.exports = router;
