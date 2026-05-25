const Promotion = require('./promotion.model');

const findActivePromotions = () => {
  const now = new Date();

  return Promotion.find({
    isActive: true,
    $or: [{ startsAt: { $exists: false } }, { startsAt: { $lte: now } }],
    $and: [{ $or: [{ endsAt: { $exists: false } }, { endsAt: { $gte: now } }] }],
  })
    .sort({ createdAt: -1 })
    .lean();
};

module.exports = {
  findActivePromotions,
};
