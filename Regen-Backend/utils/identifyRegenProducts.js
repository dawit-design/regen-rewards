// utils/identifyRegenProducts.js
const Product = require('../models/product/Product');

const identifyRegenProducts = async (items) => {
    const regenProducts = [];

    for (const item of items) {
        const product = await Product.findOne({ name: item });
        if (product && product.isRegen) {
            regenProducts.push(product);
        }
    }

    return regenProducts;
};

module.exports = identifyRegenProducts;
