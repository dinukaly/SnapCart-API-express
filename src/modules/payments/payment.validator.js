const { mongoId, object, string } = require('../../shared/validators/schema');

const orderParams = {
  params: object({
    orderId: mongoId({ required: true }),
  }),
};

const createPaymentIntent = {
  body: object({
    orderId: mongoId({ required: true }),
    provider: string({ required: true, min: 2, max: 50 }),
  }),
};

module.exports = {
  orderParams,
  createPaymentIntent,
};
