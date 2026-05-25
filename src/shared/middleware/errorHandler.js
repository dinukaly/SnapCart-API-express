const { env } = require('../../config/env');
const { logger } = require('../../config/logger');
const { HTTP_STATUS } = require('../constants/httpStatus');
const { sendError } = require('../responses/apiResponse');

const normalizeMongooseError = (error) => {
  if (error.name === 'ValidationError') {
    return {
      statusCode: HTTP_STATUS.UNPROCESSABLE_ENTITY,
      message: 'Validation failed',
      errors: Object.values(error.errors).map((item) => ({
        field: item.path,
        message: item.message,
      })),
    };
  }

  if (error.name === 'CastError') {
    return {
      statusCode: HTTP_STATUS.BAD_REQUEST,
      message: 'Invalid resource identifier',
      errors: [{ field: error.path, message: error.message }],
    };
  }

  if (error.code === 11000) {
    return {
      statusCode: HTTP_STATUS.CONFLICT,
      message: 'Duplicate resource',
      errors: Object.keys(error.keyValue || {}).map((field) => ({
        field,
        message: `${field} already exists`,
      })),
    };
  }

  return null;
};

const errorHandler = (error, req, res, next) => {
  const normalized = normalizeMongooseError(error);
  const statusCode =
    normalized?.statusCode || error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
  const isOperational = statusCode < HTTP_STATUS.INTERNAL_SERVER_ERROR;
  const message =
    normalized?.message ||
    (isOperational || env.nodeEnv !== 'production'
      ? error.message
      : 'Internal server error');
  const errors = normalized?.errors || error.errors || [];

  const log = statusCode >= HTTP_STATUS.INTERNAL_SERVER_ERROR ? logger.error : logger.warn;

  log('Request failed', {
    error,
    method: req.method,
    path: req.originalUrl,
    statusCode,
  });

  sendError(res, {
    statusCode,
    message,
    errors,
  });
};

module.exports = { errorHandler };
