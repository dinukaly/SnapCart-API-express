const { mongoId, number, object, string } = require('../../shared/validators/schema');

const productParams = {
  params: object({
    productId: mongoId({ required: true }),
  }),
};

const createReview = {
  body: object({
    productId: mongoId({ required: true }),
    rating: number({ required: true, min: 1, max: 5 }),
    comment: string({ max: 1000 }),
  }),
};

module.exports = {
  productParams,
  createReview,
};
