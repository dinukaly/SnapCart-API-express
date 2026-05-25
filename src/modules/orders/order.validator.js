const { mongoId, object, string } = require('../../shared/validators/schema');

const orderParams = {
  params: object({
    orderId: mongoId({ required: true }),
  }),
};

const checkout = {
  body: object({
    shippingAddressId: mongoId({ required: true }),
    paymentMethodId: mongoId(),
    paymentProvider: string({ max: 50 }),
  }),
};

module.exports = {
  orderParams,
  checkout,
};
