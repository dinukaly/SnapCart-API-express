const orderRepository = require('./order.repository');
const { HTTP_STATUS } = require('../../shared/constants/httpStatus');
const { ApiError } = require('../../shared/errors/ApiError');

const listUserOrders = (userId) => {
  return orderRepository.findOrdersByUserId(userId);
};

const getUserOrder = async (userId, orderId) => {
  const order = await orderRepository.findUserOrderById(userId, orderId);

  if (!order) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Order not found');
  }

  return order;
};

const workflowPending = () => {
  throw new ApiError(HTTP_STATUS.NOT_IMPLEMENTED, 'Order workflow is pending Phase 5');
};

const checkout = async () => workflowPending();
const cancelOrder = async () => workflowPending();

module.exports = {
  listUserOrders,
  getUserOrder,
  checkout,
  cancelOrder,
};
