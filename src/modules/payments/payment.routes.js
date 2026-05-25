const express = require('express');

const paymentController = require('./payment.controller');
const paymentValidator = require('./payment.validator');
const { requireAuth } = require('../auth/auth.middleware');
const { validateRequest } = require('../../shared/middleware/validateRequest');

const router = express.Router();

router.get(
  '/orders/:orderId',
  requireAuth(),
  validateRequest(paymentValidator.orderParams),
  paymentController.listOrderPayments
);
router.post(
  '/intents',
  requireAuth(),
  validateRequest(paymentValidator.createPaymentIntent),
  paymentController.createPaymentIntent
);

module.exports = router;
