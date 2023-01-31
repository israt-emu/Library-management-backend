const Book = require("../models/Books");
const mongoose = require('mongoose');
const  {ObjectId} = mongoose.Types

// add new book
exports.addBookServices = async (data) => {
  const book = await Book.create(data);
  await book.save({ validateBeforeSave: true });
  return book;
};

// // find single bookmark
exports.findSingleBookServices = async (id) => {

  const book = await Book.findOne({ bookId:id });
console.log(book);
  return book;
};

// delete book
exports.deleteBookServices = async (id) => {
 try {
  const book = await Book.deleteOne({ bookId:id });
  return book;
 } catch (error) {
  console.log(error.message);
 }
  
};

// // get all book
exports.getAllBooksServices = async () => {
  const books = await Book.find({});
  return books;
};

// // update bookmark
// exports.updateBookmark = async (id, updatedInfo) => {
//   return await Bookmark.updateOne({id}, updatedInfo, {runValidators: true});
// };
