const Category = require('./category.model');

const findActiveCategories = () => {
  return Category.find({ isActive: true }).sort({ name: 1 }).lean();
};

module.exports = {
  findActiveCategories,
};
