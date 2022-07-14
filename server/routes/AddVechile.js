const express = require("express")
const router = express.Router()
const AddVechileSchema = require("../models/AddVechile")

router.post("/",async(req,res)=>{

try{
const NewVechile = new AddVechileSchema({
    name : req.body.name,
    age : req.body. age,
    source : req.body.source,
    des  : req.body.des,
    charge : req.body.charge,
    gender : req.body.gender,
    disp : req.body.disp,
    dist_S_to_D : req.body.dist_S_to_D,
    time : req.body.time,
    vechileCategory  : req.body.vechileCategory,
    vechileName  : req.body.vechileName,
    id  : req.body.id,
    seatLeft : req.body.seatLeft,
    totalSeat  : req.body.totalSeat,
    phone  : req.body.phone,
    add : req.body.add
})

// await NewVechile.save().then(()=> res.status(201).json("Vechile added")).catch((err)=>console.log("unable to add vechile"));
await NewVechile.save().then(()=>res.status(201).json("vechile added")).catch((err)=>console.log(err))

}catch(err){console.log(err)}
})


module.exports = router


// "name" : "req.body.name",
//     "age" : "req.body. age",
//     "des " : "req.body.des",
//     "source" : "req.body.source",
//     "charge" : "req.body.charge",
//     "gender" : "req.body.gender",
//     "disp" : "req.body.disp",
//     "dist_S_to_D ": "req.body.dist_S_to_D",
//     "time" : "req.body.time",
//     "vechileCategory"  : "req.body.vechileCategory",
//     "vechileName"  : "req.body.vechileName",
//     "id"  : "req.body.id",
//     "seatLeft" :" req.body.seatLeft",
//     "totalSeat"  : "req.body.totalSeat",
//     "phone"  : "req.body.phone",
//     "add" : "req.body.add"