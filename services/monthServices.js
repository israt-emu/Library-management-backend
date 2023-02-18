const mongoose = require("mongoose");
const Month = require("../models/Month");
const { ObjectId } = mongoose.Types;

// add new book
exports.addMonthServices = async (data) => {
  const month = await Month.create(data);
  await month.save({ validateBeforeSave: true });
  return month;
};

// // find single book
exports.findSingleBookServices = async (id) => {
  const book = await Book.findOne({ bookId: id });
  console.log(book);
  return book;
};

// delete requested book
exports.deleteMonthServices = async (id) => {
  try {
    const notice = await Notice.deleteOne({ _id: id });
    return notice;
  } catch (error) {
    console.log(error.message);
  }
};

// // get all book
exports.getAllMonthServices = async () => {
  const month = await Month.find({});

  return month;
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
// update month count
exports.updateMonthCountServices = async () => {
  const ymonth = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const d = new Date();
  let name = ymonth[d.getMonth()];
  const month = await Month.findOne({ title: name });
  // update article view count
  month.count++; // assuming you have a "views" field in your article schema

  month.save((err, updatedArticle) => {
    if (err) {
      return res.status(500).send(err);
    }
  });
};
