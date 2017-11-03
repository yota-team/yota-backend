var express = require('express');
var router = express.Router();
const dummyController = require('../controllers/dummyController');

router.get('/', dummyController.create)

module.exports = router;
