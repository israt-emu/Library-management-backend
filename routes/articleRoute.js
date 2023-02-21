const express = require("express");
const {addArticleController} = require("../controllers/article/addArticleController");

const {deleteArticleController} = require("../controllers/article/deleteArticleController");
const {getAllArticleController} = require("../controllers/article/getAllArticleController");
const {getLatestArticles} = require("../controllers/article/getLatestArticles");
const {getPopularArticles} = require("../controllers/article/getPopularArticles");
const {getSingleArticleController} = require("../controllers/article/getSingleArticleController");

const router = express.Router();

router.post("/addArticle", addArticleController);
router.get("/getAllArticle", getAllArticleController);
// router.get("/getAllBooks", getAllBookController);
router.delete("/deleteArticle/:id", deleteArticleController);
router.get("/getSingleArticle/:id", getSingleArticleController);
router.get("/latestArticles", getLatestArticles);
router.get("/popularArticles", getPopularArticles);

module.exports = router;
