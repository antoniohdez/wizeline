var express = require('express');
var controller = require('./controller');

var router = express.Router();

router.get('/', controller.all);
router.post('/', controller.create)

module.exports = router;
