const { HTTP_STATUS } = require('../../shared/constants/httpStatus');
const { ApiError } = require('../../shared/errors/ApiError');

const phase2Required = () => {
  throw new ApiError(
    HTTP_STATUS.NOT_IMPLEMENTED,
    'Authentication implementation is pending Phase 2'
  );
};

const register = async () => phase2Required();
const login = async () => phase2Required();
const refresh = async () => phase2Required();
const logout = async () => phase2Required();

module.exports = {
  register,
  login,
  refresh,
  logout,
};
