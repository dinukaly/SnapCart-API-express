const { mongoId, object } = require('../../shared/validators/schema');

const getProduct = {
  params: object({
    productId: mongoId({ required: true }),
  }),
};

module.exports = {
  getProduct,
};
