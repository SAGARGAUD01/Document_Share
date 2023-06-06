require('dotenv').config();// required to use variable of .env file

const mongoose = require('mongoose');
const URI =process.env.MONGO_CONNECTION_URL;

function connectDB() {
    // Database connection 🥳
    mongoose.connect(URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
        }, err => {
        if(err) throw err;
        console.log('Database Connected !')
        });
}
// TsDzr9erVoni1m7C

module.exports = connectDB;