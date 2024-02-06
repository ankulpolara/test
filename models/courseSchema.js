const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  ageGroup: {
    type: String,
    required: true,
  },
  feeAmount: {
    type: Number,
    required: true,
  },
});

module.exports  = mongoose.model('course ', courseSchema);