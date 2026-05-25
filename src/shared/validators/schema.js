const fieldError = (field, message) => ({ field, message });

const sensitiveFields = new Set([
  'password',
  'passwordHash',
  'roles',
  'role',
  'isAdmin',
  'isActive',
  'refreshToken',
  'otp',
]);

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

const email = ({ required = false } = {}) => (field, value) => {
  const stringError = string({ required, min: 5, max: 254 })(field, value);

  if (stringError || value === undefined || value === null || value === '') {
    return stringError;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return fieldError(field, 'Must be a valid email address');
  }

  return null;
};

const password = ({ required = false } = {}) => (field, value) => {
  const stringError = string({ required, min: 8, max: 128 })(field, value);

  if (stringError || value === undefined || value === null || value === '') {
    return stringError;
  }

  if (!/[A-Za-z]/.test(value) || !/\d/.test(value)) {
    return fieldError(field, 'Must contain at least one letter and one number');
  }

  return null;
};

const number = ({ required = false, min = -Infinity, max = Infinity } = {}) => (field, value) => {
  if (value === undefined || value === null || value === '') {
    return required ? fieldError(field, 'Required field') : null;
  }

  if (typeof value !== 'number' || Number.isNaN(value)) {
    return fieldError(field, 'Must be a number');
  }

  if (value < min) {
    return fieldError(field, `Must be greater than or equal to ${min}`);
  }

  if (value > max) {
    return fieldError(field, `Must be less than or equal to ${max}`);
  }

  return null;
};

const boolean = ({ required = false } = {}) => (field, value) => {
  if (value === undefined || value === null || value === '') {
    return required ? fieldError(field, 'Required field') : null;
  }

  if (typeof value !== 'boolean') {
    return fieldError(field, 'Must be a boolean');
  }

  return null;
};

const enumValue = (allowedValues, { required = false } = {}) => (field, value) => {
  if (value === undefined || value === null || value === '') {
    return required ? fieldError(field, 'Required field') : null;
  }

  if (!allowedValues.includes(value)) {
    return fieldError(field, `Must be one of: ${allowedValues.join(', ')}`);
  }

  return null;
};

const mongoId = ({ required = false } = {}) => (field, value) => {
  if (value === undefined || value === null || value === '') {
    return required ? fieldError(field, 'Required field') : null;
  }

  if (typeof value !== 'string' || !/^[a-f\d]{24}$/i.test(value)) {
    return fieldError(field, 'Must be a valid MongoDB id');
  }

  return null;
};

const object = (rules, { rejectUnknown = true } = {}) => (input) => {
  const value = { ...input };
  const errors = [];

  if (rejectUnknown) {
    for (const field of Object.keys(value)) {
      if (!rules[field]) {
        errors.push(fieldError(field, 'Unknown field'));
      }
    }
  }

  for (const field of Object.keys(value)) {
    if (sensitiveFields.has(field) && !rules[field]) {
      errors.push(fieldError(field, 'Sensitive field cannot be updated here'));
    }
  }

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
  boolean,
  email,
  enumValue,
  mongoId,
  object,
  password,
  string,
  number,
};
