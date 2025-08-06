const express = require("express"); 
const zod = require("zod");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../")
const authmiddleware = require("../authmiddleware/authmiddleware")
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
    const {success} = signupSchema.safeParse(req.body);
 if(!success){
    return res.status(411).json({msg:"Incorrect input"})
 }
 const userExist = await User.findOne({userName: req.body.userName});
 if(userExist){
    return res.status(409).json({msg:"userName already exist"})
 }
const createdUser = await createOne({
    userName : req.body.UserName,
    password : req.body.password,
    firstName : req.body.firstName,
    lastName : req.body.lastName,
})
 
 await Account.create({
    userId: createdUser._id,
    balance: 1 + Math.random() * 10000,
 });

 const token = jwt.sign({userId: createdUser._id}, JWT_SECRET);

    return res.status().json({msg:"user Created successfully", token: token,})


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
      return res.status.json({msg: "Invalid user of password"});
   }

   const token = jwt.sign({userId: userExist._id}, JWT_SECRET);
   res.status(200).json({token});

 })




//Update route put method
const updateSchema = zod.object({
   password: zod.string().optional(),
   firstName: zod.string().optional(),
   lastName: zod.string().optional(),
})

router.put("/update", async(req, res)=>{
    
})
//get all user route get method

router.get("/bulk", async(req, res)=>{
    
})