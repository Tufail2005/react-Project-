const express = require("express"); 
const zod = require("zod");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config")
const { authmiddleware} = require("../middleware/authmiddleware")
const {User, Account} = require("../db")



const router = express.Router();
//signUp route method

const signupSchema = zod.object({
   userName: zod.string(),
   password: zod.string(),
   firstName: zod.string(),
   lastName: zod.string(),
})

router.post("/signup", async(req, res)=>{
   const body = req.body;
    const {success} = signupSchema.safeParse(body);
 if(!success){
    return res.status(411).json({msg:"Incorrect input"})
 }
 const userExist = await User.findOne({userName: body.userName});
 if(userExist){
    return res.status(409).json({msg:"userName already exist"})
 }
const createdUser = await User.create({
    userName : req.body.userName,
    password : req.body.password,
    firstName : req.body.firstName,
    lastName : req.body.lastName,
})
 
const userId = createdUser._id;
 
 await Account.create({
    userId,
    balance: 1 + Math.random() * 10000,
 });

 const token = jwt.sign({userId}, JWT_SECRET);

    return res.status(200).json({msg:"user Created successfully", token: token,})


})




//signIn route post method 
const signimSchema = zod.object({
   userName: zod.string(),
   password: zod.string(),
})

router.post("/signin" ,async(req, res)=>{
    const parse = signimSchema.safeParse(req.body);

   if(!parse.success){
      return res.status(411).json({msg:"Incorrect input"})
   }
   
   const {userName, password} = parse.data
  
   const userExist = await User.findOne({userName})

   if(!userExist || userExist.password !== password){
      return res.status(411).json({msg: "Invalid user of password"});
   }

   const token = jwt.sign({userId: userExist._id}, JWT_SECRET);
   res.status(200).json({token});

 })





//Update route put method
const updateBody = zod.object({
   password: zod.string().optional(),
   firstName: zod.string().optional(),
   lastName: zod.string().optional(),
})

router.put("/update",  authmiddleware ,async(req, res)=>{
      const { success } = updateBody.safeParse(req.body);
  if (!success) {
   return res.status(411).json({ msg: "Error while updating information" });
  }

  await User.updateOne({_id : req.userId}, req.body);
  res.json({msg:"updated successfully"});
})




//get all user route get method

router.get("/bulk", async(req, res)=>{
    const filter = req.query.filter || "";

    const users = await User.find({
      $or: [
         {firstName: {$regex: filter, $options:"i"}},
         {lastName: {$regex: filter, $options:"i"}}
      ]
    })

    res.json({
      user: users.map((user)=>({
         userName: user.userName,
         firstName: user.firstName,
         lastName: user.lastName,
         _id: user._id,
      }))
    })
})

module.exports = router; 