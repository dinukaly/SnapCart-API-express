const Review = require('./review.model');

const findReviewsByProductId = (productId) => {
  return Review.find({ productId }).sort({ createdAt: -1 }).lean();
};

module.exports = {
  findReviewsByProductId,
};
