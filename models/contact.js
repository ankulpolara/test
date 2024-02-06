const mongoose = require("mongoose");



 const contectSchema = new mongoose.Schema({
    email : {
        type : String ,
        required :true
    },
    number : {
         type : String ,
        
    },
    text : {
         type : String ,
        required :true
    },

 })


  module.exports  = mongoose.model('contact ', contectSchema);