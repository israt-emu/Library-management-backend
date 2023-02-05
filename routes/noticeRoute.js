const express = require("express");
const {
  addNoticeController,
} = require("../controllers/notice/addNoticeController");
const {
  getAllNoticeController,
} = require("../controllers/notice/getAllNoticeController");
const router = express.Router();

router.post("/addNotice", addNoticeController);
router.get("/getAllNotice", getAllNoticeController);
// router.get("/getAllBooks", getAllBookController);
// router.delete("/deleteBook/:id", deleteBookController);
// router.get("/getSingleBook/:id", getSingleBookController);

module.exports = router;
