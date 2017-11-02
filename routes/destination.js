var express = require('express');
var router = express.Router();
const destinationController = require('../controllers/destinationController');

router.get('/', destinationController.all);
router.post('/', destinationController.create);
router.get('/:id', destinationController.byId);
router.put('/:id', destinationController.put);
router.delete('/:id', destinationController.remove);

module.exports = router;
