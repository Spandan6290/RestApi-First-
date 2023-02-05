const mongoose = require('mongoose');

const connectDB = (uri)=>{
    console.log("connect to db");
   return  mongoose.connect(uri);
}

mongoose.set('strictQuery', false)

module.exports = connectDB;