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
// get all filtered borrowed books
exports.findAllFilteredBorrowedBook = async ({status, search, id}) => {
  let books;
  if (status !== "" && search === "" && id === "") {
    books = await BorrowedBook.find({status});
  } //
  else if (status === "" && search !== "" && id === "") {
    books = await BorrowedBook.find({
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

        {
          borrowerName: {
            $regex: search,
          },
        },
      ],
    });
  } else if (status !== "" && search !== "" && id === "") {
    books = await BorrowedBook.find({
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

        {
          borrowerName: {
            $regex: search,
          },
        },
      ],
    });
  } //
  else if (status === "" && search !== "" && id !== "") {
    books = await BorrowedBook.find({
      borrowerId: id,
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

        {
          borrowerName: {
            $regex: search,
          },
        },
      ],
    });
  } else if (status !== "" && search === "" && id !== "") {
    books = await BorrowedBook.find({
      borrowerId: id,
      status,
    });
  } else {
    books = await BorrowedBook.find({
      borrowerId: id,
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

        {
          borrowerName: {
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
