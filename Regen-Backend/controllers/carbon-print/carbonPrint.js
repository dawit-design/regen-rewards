require('dotenv').config();
const axios = require('axios');

const CLIMATIQ_API_URL = "https://api.climatiq.io/data/v1/estimate";
const CLIMATIQ_API_KEY = process.env.CLIMATIQ_API; // Ensure this is set in your .env file

const getCarbonFootprint = async (req, res) => {
    const { productName, activity_id, energy, energy_unit } = req.body; // Dynamically passed data

    const config = {
        headers: {
            "Authorization": `Bearer ${CLIMATIQ_API_KEY}`,
            "Content-Type": "application/json"
        }
    };

    const data = {
        "emission_factor": {
            "activity_id": activity_id || "electricity-supply_grid-source_residual_mix", // Default activity ID if not provided
            "data_version": "^6"
        },
        "parameters": {
            "energy": energy || 4200, // Default energy value if not provided
            "energy_unit": energy_unit || "kWh" // Default unit if not provided
        }
    };

    try {
        const response = await axios.post(CLIMATIQ_API_URL, data, config);
        return res.status(200).json({
            message: `Carbon footprint for ${productName}: ${response.data.co2e} kg of CO2`,
            details: response.data
        });
    } catch (error) {
        console.error('Error fetching carbon data:', error.message);
        return res.status(500).json({ message: "Failed to calculate carbon footprint" });
    }
};


module.exports = {
    getCarbonFootprint
};
