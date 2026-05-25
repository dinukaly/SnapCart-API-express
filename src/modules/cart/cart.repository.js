const Cart = require('./cart.model');

const findCartByUserId = (userId) => {
  return Cart.findOne({ userId }).lean();
};

module.exports = {
  findCartByUserId,
};
