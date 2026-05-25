const { email, object, password, string } = require('../../shared/validators/schema');

const register = {
  body: object({
    email: email({ required: true }),
    password: password({ required: true }),
    displayName: string({ required: true, min: 2, max: 80 }),
  }),
};

const login = {
  body: object({
    email: email({ required: true }),
    password: password({ required: true }),
  }),
};

const refresh = {
  body: object({
    refreshToken: string({ required: true, min: 20, max: 2048 }),
  }),
};

module.exports = {
  register,
  login,
  refresh,
};
