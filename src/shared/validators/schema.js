const fieldError = (field, message) => ({ field, message });

const string = ({ required = false, min = 0, max = Infinity } = {}) => (field, value) => {
  if (value === undefined || value === null || value === '') {
    return required ? fieldError(field, 'Required field') : null;
  }

  if (typeof value !== 'string') {
    return fieldError(field, 'Must be a string');
  }

  const trimmed = value.trim();

  if (trimmed.length < min) {
    return fieldError(field, `Must be at least ${min} characters`);
  }

  if (trimmed.length > max) {
    return fieldError(field, `Must be at most ${max} characters`);
  }

  return null;
};

const number = ({ required = false, min = -Infinity } = {}) => (field, value) => {
  if (value === undefined || value === null || value === '') {
    return required ? fieldError(field, 'Required field') : null;
  }

  if (typeof value !== 'number' || Number.isNaN(value)) {
    return fieldError(field, 'Must be a number');
  }

  if (value < min) {
    return fieldError(field, `Must be greater than or equal to ${min}`);
  }

  return null;
};

const object = (rules) => (input) => {
  const value = { ...input };
  const errors = [];

  for (const [field, validator] of Object.entries(rules)) {
    const error = validator(field, value[field]);

    if (error) {
      errors.push(error);
    }

    if (typeof value[field] === 'string') {
      value[field] = value[field].trim();
    }
  }

  return { value, errors };
};

module.exports = {
  object,
  string,
  number,
};
