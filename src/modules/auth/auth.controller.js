const authService = require('./auth.service');
const { HTTP_STATUS } = require('../../shared/constants/httpStatus');
const { sendSuccess } = require('../../shared/responses/apiResponse');
const { asyncHandler } = require('../../shared/utils/asyncHandler');

const register = asyncHandler(async (req, res) => {
  const result = await authService.register(req.body);

  sendSuccess(res, {
    statusCode: HTTP_STATUS.CREATED,
    message: 'User registered successfully',
    data: result,
  });
});

const login = asyncHandler(async (req, res) => {
  const result = await authService.login(req.body);

  sendSuccess(res, {
    message: 'User logged in successfully',
    data: result,
  });
});

const refresh = asyncHandler(async (req, res) => {
  const result = await authService.refresh(req.body.refreshToken);

  sendSuccess(res, {
    message: 'Token refreshed successfully',
    data: result,
  });
});

const logout = asyncHandler(async (req, res) => {
  await authService.logout(req.user);

  sendSuccess(res, {
    message: 'User logged out successfully',
  });
});

const me = asyncHandler(async (req, res) => {
  sendSuccess(res, {
    message: 'Current user fetched successfully',
    data: req.user,
  });
});

module.exports = {
  register,
  login,
  refresh,
  logout,
  me,
};
