const userRepository = require('./user.repository');
const { HTTP_STATUS } = require('../../shared/constants/httpStatus');
const { ApiError } = require('../../shared/errors/ApiError');

const getProfile = async (userId) => {
  const user = await userRepository.findUserById(userId);

  if (!user) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, 'User not found');
  }

  return user;
};

module.exports = {
  getProfile,
};
