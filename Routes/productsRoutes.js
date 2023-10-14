const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getProducts);
router.post('/addproduct', productController.addProduct);
router.put('/updateproduct/:id', productController.updateProduct);
router.patch('/updateproductdetails/:id', productController.updateProduct);
router.delete('/deleteproduct/:id', productController.deleteProduct);

module.exports = router;