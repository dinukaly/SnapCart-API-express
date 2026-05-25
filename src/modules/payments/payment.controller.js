const paymentService = require('./payment.service');
const { sendSuccess } = require('../../shared/responses/apiResponse');
const { asyncHandler } = require('../../shared/utils/asyncHandler');

const listOrderPayments = asyncHandler(async (req, res) => {
  const payments = await paymentService.listOrderPayments(req.params.orderId);

  sendSuccess(res, {
    message: 'Payments fetched successfully',
    data: payments,
  });
});

const createPaymentIntent = asyncHandler(async (req, res) => {
  const payment = await paymentService.createPaymentIntent(req.user.id, req.body);

  sendSuccess(res, {
    message: 'Payment intent created successfully',
    data: payment,
  });
});

module.exports = {
  listOrderPayments,
  createPaymentIntent,
};
