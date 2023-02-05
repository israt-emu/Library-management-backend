const express = require("express");
const {
  addArticleController,
} = require("../controllers/article/addArticleController");

const {
  deleteArticleController,
} = require("../controllers/article/deleteArticleController");
const {
  getAllArticleController,
} = require("../controllers/article/getAllArticleController");

const router = express.Router();

router.post("/addArticle", addArticleController);
router.get("/getAllArticle", getAllArticleController);
// router.get("/getAllBooks", getAllBookController);
router.delete("/deleteArticle/:id", deleteArticleController);
// router.get("/getSingleBook/:id", getSingleBookController);

module.exports = router;
