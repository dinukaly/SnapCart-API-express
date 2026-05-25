const Wishlist = require('./wishlist.model');

const findWishlistByUserId = (userId) => {
  return Wishlist.findOne({ userId }).lean();
};

module.exports = {
  findWishlistByUserId,
};
