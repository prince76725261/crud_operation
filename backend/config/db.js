const mongoose = require('mongoose');

const connectDB = mongoose.connect("mongodb+srv://princekumarsingh3625:tEyL9zRm3q0SAZqF@cluster0.yns896b.mongodb.net/crud_op-main?retryWrites=true&w=majority").then(() => {
 console.log("mongodb connected successfully")
}).catch((err) => {
    console.log(err);
})

module.exports = connectDB;