const mongoose = require("mongoose");



const instituteSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    establishmentYear: {
        type: Number,
    },
    type: {
        type: String,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    webURl: {
        type: String,
    },
    socialMediaLinks: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'socialMedia',
    }

})


module.exports = mongoose.model('institute ', instituteSchema);