const express = require("express");
const {
  addRequestedBookController,
} = require("../controllers/requestedBook/addRequestedBookController");
const { getAllRequestedBookController } = require("../controllers/requestedBook/getAllRequestedBookController");
const router = express.Router();

router.post("/addRequestedBook", addRequestedBookController);
router.get("/getAllRequestedBooks", getAllRequestedBookController);
// router.get("/getAllBooks", getAllBookController);
// router.delete("/deleteBook/:id", deleteBookController);
// router.get("/getSingleBook/:id", getSingleBookController);

module.exports = router;
