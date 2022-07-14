const mongoose = require("mongoose")

const customerReview = new mongoose.Schema({

    customerReview :{
        type:String,
        required:true
    },

})

module.exports = mongoose.model("CustomerReview", customerReview)