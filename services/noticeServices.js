const mongoose = require("mongoose");
const Notice = require("../models/Notice");
const { ObjectId } = mongoose.Types;

// add new book
exports.adNoticeServices = async (data) => {
  const notice = await Notice.create(data);
  await notice.save({ validateBeforeSave: true });
  return notice;
};

// // find single book
exports.findSingleBookServices = async (id) => {
  const book = await Book.findOne({ bookId: id });
  console.log(book);
  return book;
};

// delete requested book
exports.deleteNoticeServices = async (id) => {
  try {
    const notice = await Notice.deleteOne({ _id: id });
    return notice;
  } catch (error) {
    console.log(error.message);
  }
};

// // get all book
exports.getAllNoticeServices = async () => {
  const notices = await Notice.find({}).sort({createdAt: -1});
  return notices;
};
//updating stock after borrow a book
// exports.editRequestedBookServices = async ({ book, data }) => {
//   const stock = book?.totalStock;
//   console.log(stock);
//   if (stock > 0 && state === "borrow") {
//     book.totalStock = stock - 1;
//   } else if (state === "return") {
//     book.totalStock = stock + 1;
//   }
//   await book.save({ validateBeforeSave: true });
//   return book;
// };
// update requestedbook
exports.editRequestedBookServices = async (id, updatedInfo) => {
  const existingRequested = await RequestedBook.find({ _id: id });
  console.log(existingRequested, updatedInfo);
  if (existingRequested) {
    const result = await RequestedBook.updateOne({ id }, updatedInfo, {
      runValidators: true,
    });

    return result;
  } else {
    return existingRequested;
  }
};
