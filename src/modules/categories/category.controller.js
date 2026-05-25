const categoryService = require('./category.service');
const { sendSuccess } = require('../../shared/responses/apiResponse');
const { asyncHandler } = require('../../shared/utils/asyncHandler');

const listCategories = asyncHandler(async (req, res) => {
  const categories = await categoryService.listCategories();

  sendSuccess(res, {
    message: 'Categories fetched successfully',
    data: categories,
  });
});

module.exports = {
  listCategories,
};
