const productService = require('./product.service');
const { sendSuccess } = require('../../shared/responses/apiResponse');
const { asyncHandler } = require('../../shared/utils/asyncHandler');

const listProducts = asyncHandler(async (req, res) => {
  const result = await productService.listProducts(req.query);

  sendSuccess(res, {
    message: 'Products fetched successfully',
    data: result.items,
    meta: result.meta,
  });
});

const getProduct = asyncHandler(async (req, res) => {
  const product = await productService.getProduct(req.params.productId);

  sendSuccess(res, {
    message: 'Product fetched successfully',
    data: product,
  });
});

module.exports = {
  listProducts,
  getProduct,
};
