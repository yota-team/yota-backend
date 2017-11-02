var express = require('express');
var router = express.Router();
const positionController = require('../controllers/positionController');

router.get('/', positionController.all);
router.post('/', positionController.create);

module.exports = router;
