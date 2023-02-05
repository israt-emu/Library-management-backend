const express = require("express");
const {
  addRequestedBookController,
} = require("../controllers/requestedBook/addRequestedBookController");
const {
  deleteRequestedBookController,
} = require("../controllers/requestedBook/deleteRequestedBookController");
const {
  editRequestedBookController,
} = require("../controllers/requestedBook/editRequestedBookController");
const {
  getAllRequestedBookController,
} = require("../controllers/requestedBook/getAllRequestedBookController");
const router = express.Router();

router.post("/addRequestedBook", addRequestedBookController);
router.get("/getAllRequestedBooks", getAllRequestedBookController);
router.delete("/deleteRequestedBook/:id", deleteRequestedBookController);
router.post("/editRequestedBook/:id", editRequestedBookController);

module.exports = router;
