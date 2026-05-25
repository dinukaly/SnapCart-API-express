const mongoose = require('mongoose');

const productImageSchema = new mongoose.Schema(
  {
    hash: String,
    resourceUrl: String,
    directory: String,
    filename: String,
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      index: true,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    displayPrice: {
      type: Number,
      min: 0,
    },
    actualPrice: {
      type: Number,
      min: 0,
    },
    images: [productImageSchema],
    stockQuantity: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  { timestamps: true }
);

productSchema.index({ name: 'text', description: 'text', brand: 'text' });

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);
