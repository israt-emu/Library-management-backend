const Book = require("../models/Books");

// add new book 
exports.addBookServices = async (data) => {
  const book = await Book.create(data);
  await book.save({ validateBeforeSave: true });
  return book;
};

// // find single bookmark
// exports.findBookmarkById = async (id) => {
//   const bookmark = await Bookmark.findOne({ id });

//   return bookmark;
// };

// // delete bookmark
// exports.deleteBookmark = async (id) => {
//   const bookmark = await Bookmark.deleteOne({ id });

//   return bookmark;
// };

// // get all bookmark
exports.getAllBooks = async () => {
  const books = await Book.find({});
  return books;
};

// // update bookmark
// exports.updateBookmark = async (id, updatedInfo) => {
//   return await Bookmark.updateOne({id}, updatedInfo, {runValidators: true});
// };