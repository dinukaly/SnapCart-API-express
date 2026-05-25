const cartService = require('./cart.service');
const { sendSuccess } = require('../../shared/responses/apiResponse');
const { asyncHandler } = require('../../shared/utils/asyncHandler');

const getCart = asyncHandler(async (req, res) => {
  const cart = await cartService.getCart(req.user.id);

  sendSuccess(res, {
    message: 'Cart fetched successfully',
    data: cart,
  });
});

const addItem = asyncHandler(async (req, res) => {
  const cart = await cartService.addItem(req.user.id, req.body);

  sendSuccess(res, {
    message: 'Cart item added successfully',
    data: cart,
  });
});

const updateItem = asyncHandler(async (req, res) => {
  const cart = await cartService.updateItem(req.user.id, req.params.productId, req.body);

  sendSuccess(res, {
    message: 'Cart item updated successfully',
    data: cart,
  });
});

const removeItem = asyncHandler(async (req, res) => {
  const cart = await cartService.removeItem(req.user.id, req.params.productId);

  sendSuccess(res, {
    message: 'Cart item removed successfully',
    data: cart,
  });
});

module.exports = {
  getCart,
  addItem,
  updateItem,
  removeItem,
};
