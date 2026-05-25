const reviewService = require('./review.service');
const { sendSuccess } = require('../../shared/responses/apiResponse');
const { asyncHandler } = require('../../shared/utils/asyncHandler');

const listProductReviews = asyncHandler(async (req, res) => {
  const reviews = await reviewService.listProductReviews(req.params.productId);

  sendSuccess(res, {
    message: 'Reviews fetched successfully',
    data: reviews,
  });
});

const createReview = asyncHandler(async (req, res) => {
  const review = await reviewService.createReview(req.user.id, req.body);

  sendSuccess(res, {
    message: 'Review created successfully',
    data: review,
  });
});

module.exports = {
  listProductReviews,
  createReview,
};
