const express = require("express");
const {
  addRequestedBookController,
} = require("../controllers/requestedBook/addRequestedBookController");
const { deleteRequestedBookController } = require("../controllers/requestedBook/deleteRequestedBookController");
const { getAllRequestedBookController } = require("../controllers/requestedBook/getAllRequestedBookController");
const router = express.Router();

router.post("/addRequestedBook", addRequestedBookController);
router.get("/getAllRequestedBooks", getAllRequestedBookController);
router.delete("/deleteRequestedBook/:id", deleteRequestedBookController);
// router.get("/getAllBooks", getAllBookController);
// router.get("/getSingleBook/:id", getSingleBookController);

module.exports = router;
