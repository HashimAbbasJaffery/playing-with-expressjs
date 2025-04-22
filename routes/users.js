var express = require('express');
var router = express.Router();
var HasPositivePages = require("../middlewares/Pagination/HasPositivePages");
var HasNumericPages = require("../middlewares/Pagination/HasNumericPages");
var Pagination = require("../Services/Pagination");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/internships", [HasPositivePages, HasNumericPages], async function(req, res, next) {
  const records = await Pagination("internships", req);
  res.json(records);
});

module.exports = router;
