const express = require("express")
const router = express.Router()
const { addPet, getPets, petMetrics, getLoggedDates, deleteMetric  } = require("./auth");
const {userAuth} = require("../middleware/auth");

router.route("/addPet").post(userAuth, addPet); 
router.route("/getPets").get(userAuth, getPets);
router.route("/petMetrics").post(userAuth, petMetrics);
router.route("/deleteMetric").post(userAuth, deleteMetric);
router.route("/getLoggedDates/:name").get(userAuth, getLoggedDates);
module.exports = router;