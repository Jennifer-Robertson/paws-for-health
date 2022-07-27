const express = require("express")
const router = express.Router()
const { addPet, getPets, petMetrics  } = require("./auth");
const {userAuth} = require("../middleware/auth");

router.route("/addPet").post(userAuth, addPet); 
router.route("/getPets").get(userAuth, getPets);
router.route("/petMetrics").post(userAuth, petMetrics);
module.exports = router;