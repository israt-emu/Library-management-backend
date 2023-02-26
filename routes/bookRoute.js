const express = require("express");
const {addBookController} = require("../controllers/book/addBookController");
const {deleteBookController} = require("../controllers/book/deleteBookController");
const {editBookController} = require("../controllers/book/editBook");
const {getAllBookController} = require("../controllers/book/getAllBookController");
const {getBooksBySearch} = require("../controllers/book/getBookBySearch");
const {getFilteredBooks} = require("../controllers/book/getFilteredBooks");
const {getSingleBookController} = require("../controllers/book/getSingleBookController");
const {getTopBooks} = require("../controllers/book/getTopBooks");
const router = express.Router();

router.post("/addBook", addBookController);
router.get("/getAllBooks", getAllBookController);
router.get("/topBooks", getTopBooks);
router.post("/filteredBooks", getFilteredBooks);
router.post("/editBook/:id", editBookController);
router.post("/searchedBooks", getBooksBySearch);
router.delete("/deleteBook/:id", deleteBookController);
router.get("/getSingleBook/:id", getSingleBookController);

module.exports = router;
