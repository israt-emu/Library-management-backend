const BorrowedBook = require("../models/BorrowedBook");
const mongoose = require("mongoose");

// add new book
exports.createBorrowedBook = async (data) => {
  const borrowedBook = await BorrowedBook.create(data);
  await borrowedBook.save();
  return borrowedBook;
};

// // find single book
exports.findSingleBorrowedBook = async (id) => {
  const borrowedBook = await BorrowedBook.findOne({_id: id});
  // console.log(book);
  return borrowedBook;
};

// delete book
exports.returnBorrowedBook = async (borrowedBook) => {
  borrowedBook.status = "returned";
  borrowedBook.returnDate = new Date();
  await borrowedBook.save();
  return borrowedBook;
};

// // get all book
exports.findAllBorrowedBook = async () => {
  const borrowedBooks = await BorrowedBook.find({});
  return borrowedBooks;
};
//
//find by userid
exports.findBorrowedBookByUserId = async (borrowerId) => {
  const borrowedBooks = await BorrowedBook.find({borrowerId});
  return borrowedBooks;
};

// // update bookmark
// exports.updateBookmark = async (id, updatedInfo) => {
//   return await Bookmark.updateOne({id}, updatedInfo, {runValidators: true});
// };
