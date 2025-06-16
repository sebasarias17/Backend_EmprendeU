const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: [1, 'la calificacion debe estar entre 1 y 5'],
    max: [5, 'La calificacion debe estar entre 1 y 5'],
  },
  comment: {
    type: String,
    trim: true
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Review', reviewSchema);
