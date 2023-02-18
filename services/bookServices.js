const Book = require("../models/Books");
const mongoose = require("mongoose");
const {ObjectId} = mongoose.Types;

// add new book
exports.addBookServices = async (data) => {
  const book = await Book.create(data);
  await book.save({validateBeforeSave: true});
  return book;
};
// get top borrowed book
exports.findTopBorrowedBooks = async () => {
  const borrowedBooks = await Book.find({}).sort({totalBorrowed: -1}).limit(5);
  return borrowedBooks;
};
// get top  books
exports.findTopBooks = async () => {
  const books = await Book.find({}).sort({totalViews: -1}).limit(5);
  return books;
};
// // find single book
exports.findSingleBookServices = async (id) => {
  const book = await Book.findOne({bookId: id});
  console.log(book);
  book.views++; // assuming you have a "views" field in your article schema

  book.save((err, updatedArticle) => {
    if (err) {
      return res.status(500).send(err);
    }
  });
  return book;
};

// delete book
exports.deleteBookServices = async (id) => {
  try {
    const book = await Book.deleteOne({bookId: id});
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
//updating stock after borrow a book
exports.updateBookStockServices = async ({book, state}) => {
  const stock = book?.totalStock;
  // console.log(stock);
  if (stock > 0 && state === "borrow") {
    book.totalStock = stock - 1;
    book.totalBorrowed = book?.totalBorrowed + 1;

    if (stock - 1 === 0) {
      book.status = "Stock Out";
    }
  } else if (state === "return") {
    book.totalStock = stock + 1;
    if (stock + 1 > 0) {
      book.status = "In Stock";
    }
  }
  await book.save({validateBeforeSave: true});
  return book;
};
// get all filtered books
exports.findAllFilteredBook = async ({status, search}) => {
  let books;
  if (status !== "" && search === "") {
    books = await Book.find({status});
  } //
  else if (status === "" && search !== "") {
    books = await Book.find({
      $or: [
        {
          name: {
            $regex: search,
          },
        },
        {
          category: {
            $regex: search,
          },
        },
      ],
    });
  } //
  else {
    books = await Book.find({
      status,
      $or: [
        {
          name: {
            $regex: search,
          },
        },
        {
          category: {
            $regex: search,
          },
        },
      ],
    });
  }

  return books;
};
// // update bookmark
// exports.updateBookmark = async (id, updatedInfo) => {
//   return await Bookmark.updateOne({id}, updatedInfo, {runValidators: true});
// };
