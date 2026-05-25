const { mongoId, object } = require('../../shared/validators/schema');

const productBody = {
  body: object({
    productId: mongoId({ required: true }),
  }),
};

const productParams = {
  params: object({
    productId: mongoId({ required: true }),
  }),
};

module.exports = {
  productBody,
  productParams,
};
