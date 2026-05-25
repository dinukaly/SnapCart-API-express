const { HTTP_STATUS } = require('../../shared/constants/httpStatus');
const { ApiError } = require('../../shared/errors/ApiError');

const requireAuth = () => (req, res, next) => {
  next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Authentication is required'));
};

const requireRole = (...allowedRoles) => (req, res, next) => {
  if (!req.user) {
    next(new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Authentication is required'));
    return;
  }

  if (!allowedRoles.includes(req.user.role)) {
    next(new ApiError(HTTP_STATUS.FORBIDDEN, 'Insufficient permissions'));
    return;
  }

  next();
};

module.exports = {
  requireAuth,
  requireRole,
};
