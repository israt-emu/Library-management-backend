const express = require("express");
const {addStore} = require("../controllers/store/addStore");
const {deleteStore} = require("../controllers/store/deleteStore");
const {getAllStore} = require("../controllers/store/getAllStore");

const router = express.Router();

router.post("/addStore", addStore);
router.post("/stores", getAllStore);
router.post("/deleteStore", deleteStore);

module.exports = router;
