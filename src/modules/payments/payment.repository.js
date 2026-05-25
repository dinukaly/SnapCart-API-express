const Payment = require('./payment.model');

const findPaymentsByOrderId = (orderId) => {
  return Payment.find({ orderId }).sort({ createdAt: -1 }).lean();
};

module.exports = {
  findPaymentsByOrderId,
};
