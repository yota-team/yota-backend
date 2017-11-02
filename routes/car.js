var express = require('express');
var router = express.Router();
const carController = require('../controllers/carController');

router.get('/', carController.all);
router.post('/', carController.create);
router.get('/:id', carController.byId);
router.put('/:id', carController.put);
router.delete('/:id', carController.remove);

module.exports = router;
