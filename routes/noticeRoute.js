const express = require("express");
const { addNoticeController } = require("../controllers/notice/addNoticeController");
const router = express.Router();

router.post("/addNotice", addNoticeController);
// router.get("/getAllBooks", getAllBookController);
// router.delete("/deleteBook/:id", deleteBookController);
// router.get("/getSingleBook/:id", getSingleBookController);

module.exports = router;
