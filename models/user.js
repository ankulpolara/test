const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,

    },
    userId: {
       type :String
    },


})


module.exports = mongoose.model('user ', userSchema);