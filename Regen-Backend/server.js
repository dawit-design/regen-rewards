require('dotenv').config()
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')
const userRoutes = require('./routes/users/users')
const receiptRoutes = require('./routes/receipts/receipts')
const transaction = require('./routes/transaction/transactions') 
const carbonRoutes = require('./routes/carbon-print/carbonPrint')
const appError = require('./utils/appError')
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./config/dbConnect')

const app = express()
const upload = multer({ dest: 'uploads/' });

//CORS CONFIG
// CORS configuration
const corsOptions = {
    origin: 'http://192.168.1.159:19006', 
    credentials: true, 
};
app.use(cors(corsOptions));
//middlewares
app.use(express.json())


//SESSION CONFIGURATION
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}))

//USERS ROUTE
app.use("/api/v1/users", userRoutes)

//RECEIPTS ROUTE
app.use("/api/v1/receipts", receiptRoutes);


//CASH IN 
app.use("/api/v1/", transaction)

//Carbon-Print
app.use("/api/v1/", carbonRoutes)

//ERROR HANDLER
app.use(appError)

// Listening Server
const PORT = process.env.PORT || 9000
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on http://localhost:${PORT}`));