const express = require('express');

const orderController = require('./order.controller');
const orderValidator = require('./order.validator');
const { requireAuth } = require('../auth/auth.middleware');
const { validateRequest } = require('../../shared/middleware/validateRequest');

const router = express.Router();

router.post(
  '/',
  requireAuth(),
  validateRequest(orderValidator.checkout),
  orderController.checkout
);

module.exports = router;
