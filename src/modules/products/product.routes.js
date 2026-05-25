const express = require('express');

const productController = require('./product.controller');
const productValidator = require('./product.validator');
const { validateRequest } = require('../../shared/middleware/validateRequest');

const router = express.Router();

router.get('/', productController.listProducts);
router.get(
  '/:productId',
  validateRequest(productValidator.getProduct),
  productController.getProduct
);

module.exports = router;
