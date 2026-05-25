const User = require('./user.model');

const findUserById = (userId) => {
  return User.findById(userId).lean();
};

module.exports = {
  findUserById,
};
