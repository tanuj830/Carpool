const mongoose = require("mongoose");

const addVechile = new mongoose.Schema({

    name:   {
        type:String,
        required:true
    },
    age:   {
        type:Number,
        required:true
    },
    source:    {
         type:String,
         required:true
     },
    des:   {
        type:String,
        required:true
    },
    charge:    {
        type:Number,
        required:true
    },
    gender:    {
        type:String,
        required:true
    },
    disp:    {
        type:String,
        required:true
    },
    dist_S_to_D:   {
        type: String,
        required:true
    },

    time:    {
        type:String,
        required:true
    },
    vechileCategory:   {
        type:String,
        required:true
    },
    vechileName:    {
        type:String,
        required:true
    },
    id:    {
        type:String,
        required:true
    },

    seatLeft:    {
        type:Number,
        required:true
    },
    totalSeat:   {
        type:Number,
        required:true
    },
    phone:   {
        type:String,
        required:true
    },
    add:   {
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now()
    }
})


module.exports = mongoose.model("Vechile",addVechile);