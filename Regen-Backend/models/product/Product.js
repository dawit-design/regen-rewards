const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    isRegen: { type: Boolean, required: true }, // Indicates if the product is regenerative
});

module.exports = mongoose.model('Product', productSchema);
