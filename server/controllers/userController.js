const User = require("../models/userModel");



const getUsers = async(req, res, next) => {
    return res.json({message: "Get All Users"});
}


const createUser = async(req,res,next) => {
    try {
        const user = await User.create(req.body);
if(!user) {
    res.status(400);
    throw new Error("User not created");
}
//hash password before saving to databse
return res.status(201).json(user);

    } catch (error) {
        next(error)
    }
}

module.exports = {
    getUsers,
    createUser,
}