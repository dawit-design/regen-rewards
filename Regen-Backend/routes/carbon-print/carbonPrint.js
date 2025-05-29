const express = require('express');
const router = express.Router();
const { authenticateJWT, isAuthenticated } = require("../../middlewares/auth");
const {getCarbonFootprint} = require("../../controllers/carbon-print/carbonPrint")
const carbonRoutes = express.Router()
// Route to calculate carbon footprint
carbonRoutes.post('/carbon-footprint', authenticateJWT, getCarbonFootprint);

module.exports = carbonRoutes;
