const { mongoId, number, object } = require('../../shared/validators/schema');

const productParams = {
  params: object({
    productId: mongoId({ required: true }),
  }),
};

const addItem = {
  body: object({
    productId: mongoId({ required: true }),
    quantity: number({ required: true, min: 1 }),
  }),
};

const updateItem = {
  ...productParams,
  body: object({
    quantity: number({ required: true, min: 1 }),
  }),
};

module.exports = {
  addItem,
  updateItem,
  productParams,
};
