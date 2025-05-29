require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/product/Product'); // Adjust the path if necessary
const Farm = require('./models/product/Farm'); // Assuming you have a Farm model

// Connect to MongoDB (cleaned up, no deprecated options)
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define products and farms
const products = [
  { name: 'COCOJ 0G', isRegen: true },
    { name: 'COcO', isRegen: true },
    { name: 'OG BABY', isRegen: true },
    { name: 'OG BLUEBERRIE', isRegen: true },
    { name: 'SPINACH', isRegen: true },
    { name: 'ARFRMS RAINB MICROGREENS', isRegen: true },
    { name: 'OVF OG MOZZ', isRegen: true },
    { name: 'GREEN BEANS', isRegen: true },
    { name: 'STRNG CHEESE', isRegen: true },
    { name: 'SLC RAW SHARP CHOK', isRegen: true },
    { name: 'JERM OG GRAPE', isRegen: true },
    { name: 'TOMATOES', isRegen: true },
    { name: 'SIETE RED ENCHILADA SAUCE', isRegen: true },
    { name: 'SIETE REFRD PINTO BEANS', isRegen: true },
    { name: 'SANJ OG TAMARI SC RS', isRegen: true },
    { name: 'NEWBRN OG LRG GRD EGGS', isRegen: true },
    { name: 'OG WHITE SWEET POTATO', isRegen: true },
    { name: 'NAVEL ORANGE', isRegen: true },
    { name: "SIETE 'PACO' SEASONING", isRegen: true },
    { name: 'BRON LAVENDER SOAP', isRegen: true },
    { name: 'YELLOW BROWN ONION', isRegen: true },
    { name: 'LEMON', isRegen: true },
    { name: 'NAVEL PRANGE', isRegen: true }
];

const farms = [
  { name: 'Green Valley Farms', location: 'California', regenCertified: true },
  { name: 'Blue Hills Farm', location: 'Oregon', regenCertified: true },
  { name: 'Sunny Meadows Dairy', location: 'Wisconsin', regenCertified: false },
  { name: 'Oak Grove Farm', location: 'Texas', regenCertified: true },
  { name: 'Sunrise Organic Farms', location: 'Florida', regenCertified: true },
  { name: 'Happy Cow Farm', location: 'New York', regenCertified: false },
];

// Seeding function for both products and farms
const seedDatabase = async () => {
  try {
    // Clear existing collections
    await Product.deleteMany();
    await Farm.deleteMany();
    
    // Insert new products and farms
    await Product.insertMany(products);
    await Farm.insertMany(farms);
    
    console.log("Products and Farms seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close();
  }
};

// Call the seeding function
seedDatabase();
