const Bookmark = require("../models/Bookmark");

// create user / signUp user
exports.addBookmark = async (data) => {
  const bookmark = await Bookmark.create(data);
  await bookmark.save({validateBeforeSave: true});
  return bookmark;
};
//saving bookmark after taking screenshot and getting favicon

exports.saveBookmark = async ({bookmark, b64Image, b64Icon}) => {
  bookmark.thumbnail = b64Image;
  bookmark.favicon = b64Icon;
  await bookmark.save({validateBeforeSave: true});
  return bookmark;
};
// find single bookmark
exports.findBookmarkById = async (id) => {
  const bookmark = await Bookmark.findOne({_id: id});
  return bookmark;
};
//find bookmarks by state
exports.findBookmarksByState = async (state) => {
  const bookmarks = await Bookmark.find({state});
  return bookmarks;
};
//find bookmarks by group
exports.findBookmarksByGroup = async (group) => {
  const bookmarks = await Bookmark.find({group});
  return bookmarks;
};

// delete bookmark
exports.deleteBookmark = async (id) => {
  const bookmark = await Bookmark.deleteOne({_id: id});
  return bookmark;
};

// get all bookmark
exports.getAllBookmarks = async () => {
  const bookmarks = await Bookmark.find({});
  return bookmarks;
};
//get bookmarks by state and group
exports.findBookmarksByStateAndGroup = async (state, group) => {
  const bookmarks = await Bookmark.find({state, group});
  return bookmarks;
};
//get bookmarks by search text
exports.getBookmarksBySearch = async (search) => {
  // await Bookmark.index({url: "text", group: "text", title: "text"});
  const bookmarks = await Bookmark.find({
    $or: [
      {
        url: {
          $regex: search,
        },
      },
      {
        title: {
          $regex: search,
        },
      },
      {
        group: {
          $regex: search,
        },
      },
    ],
  });
  return bookmarks;
};
//
exports.getGroups = async (state) => {
  const groups = await Bookmark.find({state}).distinct("group");
  return groups;
};
// update bookmark
exports.updateBookmark = async (id, updatedInfo) => {
  const bookmark = await this.findBookmarkById(id);
  const result = await bookmark.updateOne(updatedInfo);
  const updatedBookmark = await this.findBookmarkById(id);
  return {result, updatedBookmark};
};
