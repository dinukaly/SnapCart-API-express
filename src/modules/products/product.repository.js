const Product = require('./product.model');

const findActiveProducts = ({ skip, limit }) => {
  return Product.find({ isActive: true })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean();
};

const countActiveProducts = () => {
  return Product.countDocuments({ isActive: true });
};

const findActiveProductById = (productId) => {
  return Product.findOne({ _id: productId, isActive: true }).lean();
};

module.exports = {
  findActiveProducts,
  countActiveProducts,
  findActiveProductById,
};
