const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['DEAL', 'VOUCHER'],
      required: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    code: {
      type: String,
      uppercase: true,
      trim: true,
      sparse: true,
      index: true,
    },
    discountType: {
      type: String,
      enum: ['PERCENTAGE', 'FIXED_AMOUNT'],
      required: true,
    },
    discountValue: {
      type: Number,
      required: true,
      min: 0,
    },
    startsAt: Date,
    endsAt: Date,
    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Promotion || mongoose.model('Promotion', promotionSchema);
