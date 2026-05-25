const User = require('../users/user.model');

const findUserByEmailWithPassword = (email) => {
  return User.findOne({ email }).select('+passwordHash +refreshTokenHash');
};

module.exports = {
  findUserByEmailWithPassword,
};
