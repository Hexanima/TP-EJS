var express = require('express');
var router = express.Router();
var controller = require("../controllers/indexController.js")
/* GET home page. */
router.get('/', controller.index);

module.exports = router;
