const express = require("express");

const router = express.Router();
const {getSearchedData} = require("../controllers/searchController");

router.post("/searchData", getSearchedData);
module.exports = router;
