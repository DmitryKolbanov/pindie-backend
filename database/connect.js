const mongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017/pindie";

async function connectToDatabase() {
    try {
        await mongoose.connect(DB_URL);
    } catch (err) {
        console.log("Connection to db failed");
        console.log(err);
    }
}

module.exports = connectToDatabase;
