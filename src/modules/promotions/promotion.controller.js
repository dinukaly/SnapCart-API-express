const promotionService = require('./promotion.service');
const { sendSuccess } = require('../../shared/responses/apiResponse');
const { asyncHandler } = require('../../shared/utils/asyncHandler');

const listPromotions = asyncHandler(async (req, res) => {
  const promotions = await promotionService.listPromotions();

  sendSuccess(res, {
    message: 'Promotions fetched successfully',
    data: promotions,
  });
});

module.exports = {
  listPromotions,
};
