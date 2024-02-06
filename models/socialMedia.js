const mongoose = require("mongoose");



const socialMediaSchema = new mongoose.Schema({
    instagram: {
        type: String,
      
    },
    facebook: {
        type: String,
       
    },
    linkdin: {
        type: String,
       
    },



})


module.exports = mongoose.model('socialMedia ', socialMediaSchema);