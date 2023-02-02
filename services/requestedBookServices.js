const mongoose = require("mongoose");
const RequestedBook = require("../models/RequestedBook");
const { ObjectId } = mongoose.Types;

// add new book
exports.addRequestedBookServices = async (data) => {
  const book = await RequestedBook.create(data);
  await book.save({ validateBeforeSave: true });
  return book;
};

// // find single book
exports.findSingleBookServices = async (id) => {
  const book = await Book.findOne({ bookId: id });
  console.log(book);
  return book;
};

// delete book
exports.deleteBookServices = async (id) => {
  try {
    const book = await Book.deleteOne({ bookId: id });
    return book;
  } catch (error) {
    console.log(error.message);
  }
};

// // get all book
exports.getAllRequestedBooksServices = async () => {
  const books = await RequestedBook.find({});
  return books;
};
//updating stock after borrow a book
exports.updateBookStockServices = async ({ book, state }) => {
  const stock = book?.totalStock;
  console.log(stock);
  if (stock > 0 && state === "borrow") {
    book.totalStock = stock - 1;
  } else if (state === "return") {
    book.totalStock = stock + 1;
  }
  await book.save({ validateBeforeSave: true });
  return book;
};
// // update bookmark
// exports.updateBookmark = async (id, updatedInfo) => {
//   return await Bookmark.updateOne({id}, updatedInfo, {runValidators: true});
// };