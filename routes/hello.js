var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  const key = req.query.key;
  if (!key) {
    return res.status(500).json({ message: "key query parameter is required" });
  }
  res.json({ message: `Hello ${key}` });
});
router.get("/bonjour", function (req, res, next) {
  const key = req.query.key;
  if (!key) {
    return res.status(500).json({ message: "key query parameter is required" });
  }
  res.json({ message: `Coucou ${key}` });
});
module.exports = router;
