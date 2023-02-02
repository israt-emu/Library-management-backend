const express = require("express");
const {addBorrowedBookController} = require("../controllers/borrowedBook/addBorrowedBook");
const {getAllBorrowedBookController} = require("../controllers/borrowedBook/getAllBorrowedBook");
const {getSingleBorrowedBookController} = require("../controllers/borrowedBook/getSingleBorrowedBook");
const {returnBorrowedBookController} = require("../controllers/borrowedBook/returnBorrowedBook");
const router = express.Router();

router.post("/addBorrowedBook", addBorrowedBookController);
router.get("/getAllBorrowedBooks", getAllBorrowedBookController);
router.delete("/returnBook/:id", returnBorrowedBookController);
router.get("/getSingleBorrowedBook/:id", getSingleBorrowedBookController);
module.exports = router;
