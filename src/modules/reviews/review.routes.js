const express = require('express');

const reviewController = require('./review.controller');
const reviewValidator = require('./review.validator');
const { requireAuth } = require('../auth/auth.middleware');
const { validateRequest } = require('../../shared/middleware/validateRequest');

const router = express.Router();

router.get(
  '/products/:productId',
  validateRequest(reviewValidator.productParams),
  reviewController.listProductReviews
);
router.post(
  '/',
  requireAuth(),
  validateRequest(reviewValidator.createReview),
  reviewController.createReview
);

module.exports = router;
