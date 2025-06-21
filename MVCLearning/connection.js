const mongoose = require("mongoose");

async function connectToDatabase(url) {

 return mongoose.connect( url ).then(()=>{
    console.log("Connected to MongoDB successfully");
 }).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
 });




}


module.exports = {
    connectToDatabase,
};