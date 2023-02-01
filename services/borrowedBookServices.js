const BorrowedBook = require("../models/BorrowedBook");
const mongoose = require("mongoose");

// add new book
exports.createBorrowedBook = async (data) => {
  const borrowedBook = await BorrowedBook.create(data);
  await borrowedBook.save({validateBeforeSave: true});
  return borrowedBook;
};

// // find single book
exports.findSingleBorrowedBook = async (id) => {
  const borrowedBook = await BorrowedBook.findOne({bookId: id});
  // console.log(book);
  return borrowedBook;
};

// delete book
exports.returnBorrowedBook = async (id) => {
  try {
    const borrowedBook = await BorrowedBook.deleteOne({bookId: id});
    return borrowedBook;
  } catch (error) {
    console.log(error.message);
  }
};

// // get all book
exports.findAllBorrowedBook = async () => {
  const borrowedBooks = await BorrowedBook.find({});
  return borrowedBooks;
};

// // update bookmark
// exports.updateBookmark = async (id, updatedInfo) => {
//   return await Bookmark.updateOne({id}, updatedInfo, {runValidators: true});
// };
