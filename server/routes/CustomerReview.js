const CustomerReviewModel = require("../models/CustomerReview")
const app = require("express")
const router = app.Router()


router.get("/",(req,res)=>{
    
    try{        
         CustomerReviewModel.find({}).then(d=>{
            res.send(d)
        })
    }catch(err){res.send(false)}

})

router.post("/",async(req,res)=>{
    
    try{        
        
        const newReview = new CustomerReviewModel({
             customerReview : req.body.customerReview

         })

         await newReview.save().then(()=>res.status(201).json("customer review added")).catch((err)=>console.log(err))
        
    }catch(err){res.send(false)}

})



module.exports = router