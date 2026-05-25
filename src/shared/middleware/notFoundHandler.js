const { HTTP_STATUS } = require('../constants/httpStatus');
const { ApiError } = require('../errors/ApiError');

const notFoundHandler = (req, res, next) => {
  next(new ApiError(HTTP_STATUS.NOT_FOUND, `Route not found: ${req.originalUrl}`));
};

module.exports = { notFoundHandler };
