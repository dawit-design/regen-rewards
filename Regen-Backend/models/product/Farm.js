const mongoose = require('mongoose');

const farmSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  regenCertified: { type: Boolean, required: true }
});

module.exports = mongoose.model('Farm', farmSchema);
