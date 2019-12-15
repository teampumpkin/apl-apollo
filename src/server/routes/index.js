var express = require('express');
var router = express.Router();
const ProductController = require('../controllers/products')();
router.get('/products', ProductController.getAll);
router.get('/products/clear', ProductController.clear);
router.get('/product/:slug', ProductController.getProductDetails);
router.get('/products/refresh',ProductController.refreshJson);
module.exports = router;