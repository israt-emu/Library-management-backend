const express = require("express");
const {createOrRemoveAdmin} = require("../controllers/user/createOrRemoveAdmin");
const {deleteUser} = require("../controllers/user/deleteUser");
const {getAllUser} = require("../controllers/user/getAlluser");
const {statusUpdate} = require("../controllers/user/statusUpdate");
const {updateUser} = require("../controllers/user/updateUser");
const router = express.Router();
const {userLogin} = require("../controllers/user/userLogin");
const {userSignUp} = require("../controllers/user/userSignUp");

router.post("/addUser", userSignUp);
router.post("/authenticateUser", userLogin);
router.post("/changeAdmin", createOrRemoveAdmin);
router.post("/statusUpdate", statusUpdate);
router.delete("/deleteUser/:email", deleteUser);
// router.get("/findUser/:email", findUserByEmail);
router.get("/allUsers", getAllUser);
router.post("/updateUser/:email", updateUser);

module.exports = router;
