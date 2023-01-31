const express = require("express");
const { addBookController } = require("../controllers/book/addBookController");
const router = express.Router();

router.post("/addBook", addBookController);

module.exports = router;
