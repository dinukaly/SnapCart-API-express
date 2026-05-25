const wishlistRepository = require('./wishlist.repository');
const { HTTP_STATUS } = require('../../shared/constants/httpStatus');
const { ApiError } = require('../../shared/errors/ApiError');

const getWishlist = (userId) => {
  return wishlistRepository.findWishlistByUserId(userId);
};

const workflowPending = () => {
  throw new ApiError(HTTP_STATUS.NOT_IMPLEMENTED, 'Wishlist workflow is pending a later phase');
};

const addItem = async () => workflowPending();
const removeItem = async () => workflowPending();

module.exports = {
  getWishlist,
  addItem,
  removeItem,
};
