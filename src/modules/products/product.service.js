const productRepository = require('./product.repository');
const { HTTP_STATUS } = require('../../shared/constants/httpStatus');
const { ApiError } = require('../../shared/errors/ApiError');
const { getPagination, getPaginationMeta } = require('../../shared/utils/pagination');

const listProducts = async (query) => {
  const pagination = getPagination(query);
  const [items, total] = await Promise.all([
    productRepository.findActiveProducts(pagination),
    productRepository.countActiveProducts(),
  ]);

  return {
    items,
    meta: getPaginationMeta({ ...pagination, total }),
  };
};

const getProduct = async (productId) => {
  const product = await productRepository.findActiveProductById(productId);

  if (!product) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, 'Product not found');
  }

  return product;
};

module.exports = {
  listProducts,
  getProduct,
};
