const express = require("express");
const {addBookmark} = require("../controllers/bookmarks/addBookmark");
const {deleteBookmark} = require("../controllers/bookmarks/deleteBookmark");
const {getAllBookmark} = require("../controllers/bookmarks/getAllBookmark");
const {getBookmarkById} = require("../controllers/bookmarks/getBookmarkById");
const {getBookmarksByGroup} = require("../controllers/bookmarks/getBookmarksByGroup");
const {getBookmarksByState} = require("../controllers/bookmarks/getBookMarksByState");
const {updateBookmark} = require("../controllers/bookmarks/updateBookmark");
const {getBookmarksGroup} = require("../controllers/bookmarks/getBookmarksGroup");

const router = express.Router();

router.post("/addBookmark", addBookmark);
router.post("/getBookmarkById", getBookmarkById);
router.post("/deleteBookmark/:id", deleteBookmark);
router.post("/bookmarks", getAllBookmark);
router.post("/updateBookmark/:id", updateBookmark);
router.post("/getBookmarksByState", getBookmarksByState);
router.post("/getBookmarksByGroup", getBookmarksByGroup);
router.post("/getBookmarksGroup", getBookmarksGroup);

module.exports = router;
