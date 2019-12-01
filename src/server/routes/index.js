var express = require('express');
var router = express.Router();
const ProductController = require('../controllers/products')();
router.get('/', ProductController.getAll);
// router.get('/tests', testsController.get)

router.get('/about', function (req, res) {
  res.send('About this wiki');
})

module.exports = router;