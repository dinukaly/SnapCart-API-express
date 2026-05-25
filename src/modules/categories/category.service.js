const categoryRepository = require('./category.repository');

const listCategories = () => {
  return categoryRepository.findActiveCategories();
};

module.exports = {
  listCategories,
};
