const wishlistService = require('./wishlist.service');
const { sendSuccess } = require('../../shared/responses/apiResponse');
const { asyncHandler } = require('../../shared/utils/asyncHandler');

const getWishlist = asyncHandler(async (req, res) => {
  const wishlist = await wishlistService.getWishlist(req.user.id);

  sendSuccess(res, {
    message: 'Wishlist fetched successfully',
    data: wishlist,
  });
});

const addItem = asyncHandler(async (req, res) => {
  const wishlist = await wishlistService.addItem(req.user.id, req.body.productId);

  sendSuccess(res, {
    message: 'Wishlist item added successfully',
    data: wishlist,
  });
});

const removeItem = asyncHandler(async (req, res) => {
  const wishlist = await wishlistService.removeItem(req.user.id, req.params.productId);

  sendSuccess(res, {
    message: 'Wishlist item removed successfully',
    data: wishlist,
  });
});

module.exports = {
  getWishlist,
  addItem,
  removeItem,
};
