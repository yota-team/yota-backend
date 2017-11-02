var express = require('express');
var router = express.Router();
const dummyController = require('../controllers/dummyController');

router.post('/', dummyController.create)

module.exports = router;
