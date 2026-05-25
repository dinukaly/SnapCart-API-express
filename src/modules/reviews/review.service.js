const reviewRepository = require('./review.repository');
const { HTTP_STATUS } = require('../../shared/constants/httpStatus');
const { ApiError } = require('../../shared/errors/ApiError');

const listProductReviews = (productId) => {
  return reviewRepository.findReviewsByProductId(productId);
};

const workflowPending = () => {
  throw new ApiError(HTTP_STATUS.NOT_IMPLEMENTED, 'Review write workflow is pending a later phase');
};

const createReview = async () => workflowPending();

module.exports = {
  listProductReviews,
  createReview,
};
