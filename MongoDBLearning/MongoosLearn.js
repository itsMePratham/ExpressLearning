const mongoose = require('mongoose');

mongoose.connect('mongodb://Localhost:27017/mydatabace');


const userSchema = new mongoose.Schema({

     "name" :String ,
      "username": String ,
     "email" :String ,




})




    module.exports = mongoose.model("User", userSchema);


