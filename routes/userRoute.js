const express = require("express");
const {createAdmin} = require("../controllers/user/createAdmin");
const {getAllUser} = require("../controllers/user/getAlluser");
const {updateUser} = require("../controllers/user/updateUser");
const router = express.Router();
const {userLogin} = require("../controllers/user/userLogin");
const {userSignUp} = require("../controllers/user/userSignUp");

router.post("/addUser", userSignUp);
router.post("/authenticateUser", userLogin);
router.post("/makeAdmin", createAdmin);
// router.delete("/deleteUser/:email", deleteUser);
// router.get("/findUser/:email", findUserByEmail);
router.get("/allUsers", getAllUser);
router.post("/updateUser/:email", updateUser);

module.exports = router;
