var express = require('express');
var router = express.Router();

var indexController = require('../controllers/indexController.js')

/* GET users listing. */
router.get('/', indexController.index);
router.post('/', indexController.agregado);


module.exports = router;
