require('dotenv').config();
const mongoose = require('mongoose');

const dbConnect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connected Sucessfully")
    }catch(err){
        console.log("DB Connection Failed", err.message);
    }
}

dbConnect();