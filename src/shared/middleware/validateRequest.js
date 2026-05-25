const { HTTP_STATUS } = require('../constants/httpStatus');
const { ApiError } = require('../errors/ApiError');

const validateRequest = (schema) => (req, res, next) => {
  const errors = [];

  for (const [location, validator] of Object.entries(schema)) {
    const result = validator(req[location] || {});

    if (result.errors.length) {
      errors.push(...result.errors.map((error) => ({ location, ...error })));
    }

    req[location] = result.value;
  }

  if (errors.length) {
    next(new ApiError(HTTP_STATUS.UNPROCESSABLE_ENTITY, 'Validation failed', errors));
    return;
  }

  next();
};

module.exports = { validateRequest };
