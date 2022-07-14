const express = require("express")
const router = express.Router()
const UserSchema = require("../models/UserModel")

// Validating user
router.post("/",async(req,res)=>{

    try{

        const userexist = await UserSchema.findOne({email:req.body.email, password:req.body.password})

        if(!userexist)
        {
            res.send("fill right credentials")
        }
        else{
            // console.log(userexist)
            res.send(userexist)
        }
    }catch(err){console.log(err)}
    })



//Adding user
router.post("/register",async(req,res)=>{

try{
    
    const userexist = await UserSchema.findOne({email:req.body.email, phone: req.body.phone})
    
    if(userexist){
        res.status(404).json("some credentials already exist")
    }
    else{
        const NewUser = new UserSchema({
            
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            password : req.body.password
        })
        // await NewVechile.save().then(()=> res.status(201).json("Vechile added")).catch((err)=>console.log("unable to add vechile"));
        await NewUser.save().then(()=>res.status(201).json("user added")).catch((err)=>console.log(err))
    }

}catch(err){console.log(err)}
})


module.exports = router


