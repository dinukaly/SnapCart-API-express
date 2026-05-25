const express = require('express');

const cartController = require('./cart.controller');
const cartValidator = require('./cart.validator');
const { requireAuth } = require('../auth/auth.middleware');
const { validateRequest } = require('../../shared/middleware/validateRequest');

const router = express.Router();

router.get('/', requireAuth(), cartController.getCart);
router.post(
  '/items',
  requireAuth(),
  validateRequest(cartValidator.addItem),
  cartController.addItem
);
router.patch(
  '/items/:productId',
  requireAuth(),
  validateRequest(cartValidator.updateItem),
  cartController.updateItem
);
router.delete(
  '/items/:productId',
  requireAuth(),
  validateRequest(cartValidator.productParams),
  cartController.removeItem
);

module.exports = router;
