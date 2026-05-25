const orderService = require('./order.service');
const { sendSuccess } = require('../../shared/responses/apiResponse');
const { asyncHandler } = require('../../shared/utils/asyncHandler');

const checkout = asyncHandler(async (req, res) => {
  const order = await orderService.checkout(req.user.id, req.body);

  sendSuccess(res, {
    message: 'Checkout completed successfully',
    data: order,
  });
});

const listOrders = asyncHandler(async (req, res) => {
  const orders = await orderService.listUserOrders(req.user.id);

  sendSuccess(res, {
    message: 'Orders fetched successfully',
    data: orders,
  });
});

const getOrder = asyncHandler(async (req, res) => {
  const order = await orderService.getUserOrder(req.user.id, req.params.orderId);

  sendSuccess(res, {
    message: 'Order fetched successfully',
    data: order,
  });
});

const cancelOrder = asyncHandler(async (req, res) => {
  const order = await orderService.cancelOrder(req.user.id, req.params.orderId);

  sendSuccess(res, {
    message: 'Order cancelled successfully',
    data: order,
  });
});

module.exports = {
  checkout,
  listOrders,
  getOrder,
  cancelOrder,
};
