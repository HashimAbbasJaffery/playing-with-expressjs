var express = require('express');
var router = express.Router();
var HasPositivePages = require("../middlewares/Pagination/HasPositivePages");
var HasNumericPages = require("../middlewares/Pagination/HasNumericPages");
var InternshipController = require("../Controllers/InternshipController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/internships", [HasPositivePages, HasNumericPages], InternshipController.index);
router.get("/internship/:internshipId", InternshipController.get);
router.delete("/internship/:internshipId/delete", InternshipController.del)



module.exports = router;
