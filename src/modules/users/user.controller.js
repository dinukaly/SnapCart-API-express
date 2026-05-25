const userService = require('./user.service');
const { sendSuccess } = require('../../shared/responses/apiResponse');
const { asyncHandler } = require('../../shared/utils/asyncHandler');

const getProfile = asyncHandler(async (req, res) => {
  const profile = await userService.getProfile(req.user.id);

  sendSuccess(res, {
    message: 'User profile fetched successfully',
    data: profile,
  });
});

module.exports = {
  getProfile,
};
