const cartRepository = require('./cart.repository');
const { HTTP_STATUS } = require('../../shared/constants/httpStatus');
const { ApiError } = require('../../shared/errors/ApiError');

const getCart = (userId) => {
  return cartRepository.findCartByUserId(userId);
};

const workflowPending = () => {
  throw new ApiError(HTTP_STATUS.NOT_IMPLEMENTED, 'Cart workflow is pending Phase 4');
};

const addItem = async () => workflowPending();
const updateItem = async () => workflowPending();
const removeItem = async () => workflowPending();

module.exports = {
  getCart,
  addItem,
  updateItem,
  removeItem,
};
