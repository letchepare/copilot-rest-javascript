var express = require("express");
var router = express.Router();
var axios = require("axios");

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    const response = await axios.get("http://localhost:3000/api/vms");
    const vms = response.data;
    res.render("index", { title: "Express", vms });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
