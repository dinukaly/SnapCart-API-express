const promotionRepository = require('./promotion.repository');

const listPromotions = () => {
  return promotionRepository.findActivePromotions();
};

module.exports = {
  listPromotions,
};
