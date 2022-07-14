const express = require("express")
const router = express.Router()
const multer = require("multer")
const UserSchema = require("../models/UserModel")


// const storage=multer.diskStorage({
//     destination:"uploads",
//     filename:(req,res,cb)=>{
//         (res.body.img)
//     }
// })

// const upload = multer({
//     storage:storage,
//     })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.img + "-" + Date.now())
    }
  })
  
  const upload = multer({ storage: storage })

  router.put('/:id', upload.single('img'), function (req, res) {
    // const id = req.params.id
    // const user = UserSchema.findById(id)
    // console.log(user)
    // user.save({img:req.file})
    console.log(req.file)
  })

// router.post("/",upload.single("file"),async(req,res)=>{
// res.status(201).json("file uploaded")
// })


//Getting user info
router.get("/",async(req,res)=>{

    try{
        
        const userexist = await UserSchema.findOne({_id:req.query.id})
      
            res.send(userexist)      
    
    }catch(err){console.log(err)}
    })
    


module.exports = router


// const key = req.params.id
// console.log(req.params.id)
// await Data.findById(req.params.id).then(data=>{
// // res.send(data)
// console.log(data)
