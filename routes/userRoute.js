const express = require("express");
const {updateUser} = require("../controllers/user/updateUser");
const router = express.Router();
const {userLogin} = require("../controllers/user/userLogin");
const {userSignUp} = require("../controllers/user/userSignUp");

router.post("/addUser", userSignUp);
router.post("/authenticateUser", userLogin);
// router.delete("/deleteUser/:email", deleteUser);
// router.get("/findUser/:email", findUserByEmail);
// router.get("/allusers", getAllUser);
router.post("/updateUser/:email", updateUser);

module.exports = router;
