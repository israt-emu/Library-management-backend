const express = require("express");
const { addBookController } = require("../controllers/book/addBookController");
const { deleteBookController } = require("../controllers/book/deleteBookController");
const { getAllBookController } = require("../controllers/book/getAllBookController");
const { findSingleBookServices } = require("../services/bookServices");
const router = express.Router();

router.post("/addBook", addBookController);
router.get("/getAllBooks", getAllBookController);
router.delete("/deleteBook", deleteBookController);
router.get("/getSingleBook", findSingleBookServices);

module.exports = router;
