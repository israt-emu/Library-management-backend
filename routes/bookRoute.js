const express = require("express");
const { addBookController } = require("../controllers/book/addBookController");
const { deleteBookController } = require("../controllers/book/deleteBookController");
const { getAllBookController } = require("../controllers/book/getAllBookController");
const { getSingleBookController } = require("../controllers/book/getSingleBookController");
const router = express.Router();

router.post("/addBook", addBookController);
router.get("/getAllBooks", getAllBookController);
router.delete("/deleteBook/:id", deleteBookController);
router.get("/getSingleBook", getSingleBookController);

module.exports = router;
