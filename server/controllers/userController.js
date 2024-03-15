const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const getUsers = async(req, res, next) => {
    return res.json({message: "Get All Users"});
}


const createUser = async(req,res,next) => {
    try {
        const { password, ...rest } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({
            ...rest,
             password: hashedPassword
        });
if(!user) {
    res.status(400);
    throw new Error("User not created");
}
//hash password before saving to databse
const { password: userPassword, ...otherDetails } = user._doc;

return res.status(201).json(otherDetails);

    } catch (error) {
        next(error)
    }
}


const loginUser = async(req, res, next) => {

    try {
        const { email, password } = req.body;
//get user from database
const user = await User.findOne({ email });
if(!user) {
    res.status(400);
    throw new Error("User not found");
}
//compare password
const isCorrect = await bcrypt.compare(password, user.password);

if (!isCorrect) {
    res.status(400);
    throw new Error("Invalid credentials");
}

//generate token 
//set cookie
const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });


return res.status(200).json(user);

    } catch (error) {
        next(error)
    }

}

module.exports = {
    getUsers,
    createUser,
    loginUser,
}