// ==================== models/Price.js ====================
const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
  itemType: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    enum: ['clothing', 'bedding', 'household', 'special']
  },
  description: String,
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Price', priceSchema);