const express = require('express');

const orderController = require('./order.controller');
const orderValidator = require('./order.validator');
const { requireAuth } = require('../auth/auth.middleware');
const { validateRequest } = require('../../shared/middleware/validateRequest');

const router = express.Router();

router.get('/', requireAuth(), orderController.listOrders);
router.get(
  '/:orderId',
  requireAuth(),
  validateRequest(orderValidator.orderParams),
  orderController.getOrder
);
router.post(
  '/:orderId/cancel',
  requireAuth(),
  validateRequest(orderValidator.orderParams),
  orderController.cancelOrder
);

module.exports = router;
