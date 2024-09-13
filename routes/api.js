var express = require("express");
var router = express.Router();
var fs = require("fs");
var path = require("path");

router.get("/time", function (req, res, next) {
  const currentTime = new Date().toLocaleTimeString();
  res.json({ time: currentTime });
});

router.get("/vms", function (req, res, next) {
  const filePath = path.join(__dirname, "..", "vms.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return next(err);
    }
    res.json(JSON.parse(data));
  });
});
router.get("/hello", function (req, res, next) {
  const key = req.query.key;
  if (!key) {
    return res.status(500).json({ message: "key query parameter is required" });
  }
  res.json({ message: `Hello ${key}` });
});

module.exports = router;
