const express = require('express');

const wishlistController = require('./wishlist.controller');
const wishlistValidator = require('./wishlist.validator');
const { requireAuth } = require('../auth/auth.middleware');
const { validateRequest } = require('../../shared/middleware/validateRequest');

const router = express.Router();

router.get('/', requireAuth(), wishlistController.getWishlist);
router.post(
  '/items',
  requireAuth(),
  validateRequest(wishlistValidator.productBody),
  wishlistController.addItem
);
router.delete(
  '/items/:productId',
  requireAuth(),
  validateRequest(wishlistValidator.productParams),
  wishlistController.removeItem
);

module.exports = router;
