var express = require('express');
var router = express.Router();
var controller = require("../controllers/detailsController.js")

router.get('/:id', controller.details);

module.exports = router;