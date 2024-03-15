const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const auth = async (req, res, next) => {
// return res.json({message: "Authentication user"});
try {
   const token = req.cookies.jwt;
   if(!token){
    return res.status(400).json({message: "Not authorized"});

   } 
   const data = jwt.verify(token, process.env.JWT_SECRET);

const user = await User.findById(data.id);
if(!user){
    return res.status(400).json({message: "Not Authorized"});
}
req.user = user;
// return res.json(user);
next();
} catch (error) {
    console.log(error);
    return res.status(400).json({message: "No Token"});
}
}



module.exports = {
    auth,
};