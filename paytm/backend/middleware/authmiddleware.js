const {JWT_SECRET} = require("../config");
const jwt = require("jsonwebtoken");


const authmiddleware = (req, res, next)=>
{
   const authHeader = req.headers.authorization;
   
   if(!authHeader || !authHeader.startsWith("Bearer ")){
    return res.status(403).json({msg: "problem in auth header"});
   }

   const token = authHeader.split(" ")[1];
try {
    const decoded = jwt.verify(token, JWT_SECRET);

   if(decoded){
      req.userId = decoded.userId;
      next();
   }else{
    return res.status(403).json({msg: "token not verified"});
   }
} catch (error) {
    return res.status(403).json({msg:"error in token"})
}
   
}

module.exports = {
    authmiddleware
};