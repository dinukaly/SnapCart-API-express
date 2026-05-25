const paymentRepository = require('./payment.repository');
const { HTTP_STATUS } = require('../../shared/constants/httpStatus');
const { ApiError } = require('../../shared/errors/ApiError');

const listOrderPayments = (orderId) => {
  return paymentRepository.findPaymentsByOrderId(orderId);
};

const workflowPending = () => {
  throw new ApiError(HTTP_STATUS.NOT_IMPLEMENTED, 'Payment workflow is pending Phase 5');
};

const createPaymentIntent = async () => workflowPending();

module.exports = {
  listOrderPayments,
  createPaymentIntent,
};
