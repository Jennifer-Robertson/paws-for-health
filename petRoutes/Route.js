const express = require("express")
const router = express.Router()
const { addPet } = require("./auth");
const {adminAuth} = require("../middleware/auth");

router.route("/addPet").post(addPet); 

module.exports = router;