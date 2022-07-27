const express = require("express")
const router = express.Router()
const { register, login } = require("./auth");
const {userAuth} = require("../middleware/auth");
router.route("/register").post(register)
router.route("/login").post(login);
//include adminAuth to protect the update/deletes from nonadmins
// router.route("/update").put(adminAuth, update);
// router.route("/deleteUser").delete(adminAuth, deleteUser);
// router.route("/getUsers").get(getUsers);

module.exports = router;
