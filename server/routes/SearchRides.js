// searching rides by city name
const Vechile = require("../models/AddVechile")
const app = require("express")
const router = app.Router()


router.get("/",(req,res)=>{
    
    try{
          // req.query = { source: '1', des: '1' }
        
         Vechile.find({source : req.query.source, des : req.query.des}).then(d=>{
            res.send(d)
        })
    }catch(err){res.send(false)}

})


module.exports = router