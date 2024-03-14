const { Router } = require("express");


const {getUsers, createUser} = require("../controllers/userController")

const router = Router();

//get all users
router.get("/", getUsers);

//create user
router.post("/", createUser);




module.exports = router;