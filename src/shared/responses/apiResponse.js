const { HTTP_STATUS } = require('../constants/httpStatus');

const sendSuccess = (
  res,
  { statusCode = HTTP_STATUS.OK, message = 'Request completed successfully', data = null, meta = {} }
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
    meta,
  });
};

const sendError = (
  res,
  { statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR, message = 'Internal server error', errors = [] }
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    errors,
  });
};

module.exports = {
  sendSuccess,
  sendError,
};
