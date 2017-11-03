var express = require('express');
var router = express.Router();
const positionController = require('../controllers/positionController');

router.get('/', positionController.all);
router.get('/filter', positionController.filter);
router.post('/', positionController.create);

module.exports = router;
