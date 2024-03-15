const { Router } = require("express");


const {getUsers, createUser, loginUser} = require("../controllers/userController")

const router = Router();

//get all users
router.get("/", getUsers);

//create user
router.post("/", createUser);
router.post("/login", loginUser);




module.exports = router;