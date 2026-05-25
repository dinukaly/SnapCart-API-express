const Order = require('./order.model');

const findOrdersByUserId = (userId) => {
  return Order.find({ userId }).sort({ createdAt: -1 }).lean();
};

const findUserOrderById = (userId, orderId) => {
  return Order.findOne({ _id: orderId, userId }).lean();
};

module.exports = {
  findOrdersByUserId,
  findUserOrderById,
};
